import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import moment from "moment";
import path from "path";
import fs from "fs";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

// Damos formato a bloques que sean vídeos de YouTube
function resolveVideoBlocks(mdblocks) {
  const resolved = [];

  for (const block of mdblocks) {
    if (
      block.type === "video" &&
      typeof block.parent === "string"
    ) {
		console.log('YouTube video block found:', block.parent);
		const match = block.parent.match(
        /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&)]+)/
      );

      if (match) {
        const id = match[1];

        resolved.push({
          type: "html",
          parent: `
<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/${id}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>
`
        });

        continue;
      }
    }

    resolved.push(block);
  }

  return resolved;
}

// Extraemos bloques que estén sincronizados
async function resolveSyncedBlocks(mdblocks) {
	const resolved = [];
  
	for (const block of mdblocks) {		
	  // Detectar si es un synced_block 
	  if (block.type === "synced_block") {

		const fullBlock = await notion.blocks.retrieve({ block_id: block.blockId });				
		
		// Si el bloque tiene referencia a otro (es una copia sincronizada)
		let realBlockId = fullBlock.id;

		if (
			fullBlock.type === "synced_block" &&
			fullBlock.synced_block?.synced_from?.block_id
		) {
			realBlockId = fullBlock.synced_block.synced_from.block_id;
		}

		// Ahora sí: pasar el ID como string
		const originalMdBlocks = await n2m.pageToMarkdown(realBlockId);

		resolved.push(...originalMdBlocks);
	  } else {
		resolved.push(block);
	  }
	}
  
	return resolved;
  }

(async () => {

	
	const databaseId = process.env.DATABASE_ID;
	// TODO has_more
	const response = await notion.databases.query({
		database_id: databaseId,
		filter: {
			and: [
				{
					property: "Status",
					status: {
						equals: "Published"
					}
				},
				{
					property: "Updated Date",
					date: {
						equals: moment().format("YYYY-MM-DD")
					}
				}
			]
		}
	})

	for (const r of response.results) {
		const id = r.id

		// Type
		let type = ''
		let ptype = r.properties?.['Type']?.['multi_select']?.[0]?.['name']
		type = ptype || 'doc'

		// date
		let publishdate = moment(r.created_time).format("YYYY-MM-DD")
		let ppublishdate = r.properties?.['Date']?.['date']?.['start']
		if (ppublishdate) {
			publishdate = moment(ppublishdate).format('YYYY-MM-DD')
		}

		// updated date
		let updateddate = moment(r.created_time).format("YYYY-MM-DD")
		let pupdateddate = r.properties?.['Updated Date']?.['date']?.['start']
		if (pupdateddate) {
			updateddate = moment(pupdateddate).format('YYYY-MM-DD')
		}
		
		// Title
		let title = ''
		let ptitle = r.properties?.['Title']?.['title']
		if (ptitle?.length > 0) {
			title = ptitle[0]?.['plain_text'].replace(/:/g, ' -')
		}
		
		// Excerpt
		let excerpt = ''
		let pexcerpt = r.properties?.['Excerpt']?.['rich_text']
		if (pexcerpt?.length > 0) {
			excerpt = pexcerpt.map(text => text?.['plain_text']).join('')
		}

		// Category
		let cat = ''
		let pcats = r.properties?.['Category']?.['multi_select']
		cat = pcats[0]?.['name']

		// SubCategory
		let subcat = ''
		let psubcats = r.properties?.['Subcategory']?.['multi_select']
		subcat = psubcats[0]?.['name']

		let nav = cat.toLowerCase() + (subcat ? '/' + subcat.toLowerCase() : '');

		// Slug
		let slug = ''
		let pslug = r.properties?.['Slug']?.['formula']
		slug = pslug?.['string']
	
		// Path compuesto de la categoría y el slug
		let ruta = ''
		let pruta = r.properties?.['Path']?.['formula']
		ruta = pruta?.['string']

		// Para los índices de la categoría el path es solo el slug
		// El títlo y categoría deben coincidir
		if ((type === 'category') && (title.toLowerCase() === cat.toLowerCase())) {
			ruta = slug;
		}

		// Author
		let author = ''
		let pauthor = r.properties?.['Author']?.['multi_select']?.[0]?.['name']
		author = pauthor || 'victor_cuervo'

		// Tags
		let tags = []
		let ptags = r.properties?.['Tags']?.['multi_select']
		if (ptags?.length > 0) {
			tags = ptags.map(tag => tag?.['name'])
		}

		// Download
		let download = ''
		let pdownload = r.properties?.['Download']?.['url']
		if (pdownload) {
			download = pdownload
		}

		// Vídeo
		let video = ''
		let pvideo = r.properties?.['Video']?.['rich_text']?.[0]?.['plain_text']
		if (pvideo) {
			video = pvideo
		}

		// Cover. Es una URL de una imagen que hay que guardar
		// Se guarda en el directorio assets/<categoría>/covers/
		let cover = ''
		let coverImage = ''
		let pcover = r.properties?.['Cover']?.['files']?.[0]?.['file']?.['url']
		if (pcover) {
			cover = pcover
		}

		// Descargar la imagen de cover si existe
		if (cover) {
			const urlObj = new URL(cover);
			const imageName = path.basename(urlObj.pathname.split('?')[0]);
			const coverDir = path.join('src/assets', cat.toLowerCase(), 'covers');
			const coverPath = path.join(coverDir, imageName);

			coverImage = subcat ? `../../../../assets/${cat.toLowerCase()}/covers/${imageName}` : `../../../assets/${cat.toLowerCase()}/covers/${imageName}`;

			// Ensure covers directory exists
			fs.mkdirSync(coverDir, { recursive: true });

			// Download image
			const res = await fetch(cover);		
			if (res.ok) {
				const buffer = Buffer.from(await res.arrayBuffer());
				fs.writeFileSync(coverPath, buffer);
			}
		}
		
		let lines = [
			`---`,
			`title: "${title}"`,
			`description: "${excerpt.replace(/"/g, '\\"')}"`,
			`date: ${publishdate}`,
			`updatedDate: ${updateddate}`,
			`tags: ${JSON.stringify(tags)}`,
			`slug: ${ruta}`,
			`author: ${author}`,
			`type: ${type}`,
			`id: ${id}`
		]


		if (download != null && download) lines.push(`download: ${download}`);

		if (cover != null && cover && (type === 'blog')) lines.push(`cover:
		alt: "Artículo sobre ${title}"
		image: ${coverImage}`);

		if (cover != null && cover) lines.push(`socialImage: ${coverImage}
		socialImageAlt: ${title}`);

		if (video != null && video) lines.push(`video: ${video}`);

		// Cierro del frontmatter
		lines.push(`---\n`);

		const fm = lines.join('\n');

		const mdblocks = await n2m.pageToMarkdown(id);
		const fullMdBlocks = await resolveSyncedBlocks(mdblocks);
		const formattedBlocks = resolveVideoBlocks(fullMdBlocks);
		const md = n2m.toMarkdownString(formattedBlocks);
		let contenido = md.parent;
		
		// extract images and download locally
		// De la cadena que hay en md, que es markdowrn, extraer las URLs de las imágenes

		const imageRegex = /!\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g;

		const imageUrls = [];
		let imgMatch;
		while ((imgMatch = imageRegex.exec(md.parent)) !== null) {
			imageUrls.push(imgMatch[2]);			
		}

	
		// ensure directory exists
		const root = path.join('src/content/docs', nav)
		const assets = path.join('src/assets', cat.toLowerCase())

		fs.mkdirSync(root, { recursive: true })
		fs.mkdirSync(assets, { recursive: true })

		for (const imageUrl of imageUrls) {
			const urlObj = new URL(imageUrl);
			const imageName = path.basename(urlObj.pathname.split('?')[0]);
			const imageDir = path.join(assets, 'images');
			const imagePath = path.join(imageDir, imageName);

			// Ensure images directory exists
			fs.mkdirSync(imageDir, { recursive: true });

			// Download image
			const res = await fetch(imageUrl);		
			if (res.ok) {
				const buffer = Buffer.from(await res.arrayBuffer());
				fs.writeFileSync(imagePath, buffer);
				// Replace image URL in markdown with local path
				// si hay subategoría el path es "../../../../assets", si no es "../../../assets"
				const assetsPath = subcat ? `../../../../assets/${cat.toLowerCase()}/images/${imageName}` : `../../../assets/${cat.toLowerCase()}/images/${imageName}`;
				contenido = contenido.replace(imageUrl, assetsPath);
			}
		}
		
		//writing to file
		const ftitle = `${slug}.md`
		fs.writeFile(path.join(root, ftitle), fm + contenido, (err) => {
			if (err) {
				console.log(err);
			}
		});

		
	
	}
})();