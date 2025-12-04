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
			property: "Status",
			status: {
				equals: "Published"
			}
		}
	})
	for (const r of response.results) {
		console.log(r)
		const id = r.id

		// date
		let date = moment(r.created_time).format("YYYY-MM-DD")
		let pdate = r.properties?.['LastUpdated Date']?.['date']?.['start']
		if (pdate) {
			date = moment(pdate).format('YYYY-MM-DD')
        }
        
        
		// Title
		let title = ''
		let ptitle = r.properties?.['Name']?.['title']
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
	
		// Path
		let ruta = ''
		let pruta = r.properties?.['Path']?.['formula']
		ruta = pruta?.['string']
        
const fm = `---
title: ${title}
description: "${excerpt.replace(/"/g, '\\"')}"
lastUpdated: ${date}
slug: ${ruta}
author: victor_cuervo
---
`

		const mdblocks = await n2m.pageToMarkdown(id);
		// const md = n2m.toMarkdownString(mdblocks);
		const fullMdBlocks = await resolveSyncedBlocks(mdblocks);
  		const md = n2m.toMarkdownString(fullMdBlocks);

		console.log(md);

        // ensure directory exists
	    const root = path.join('src/content/docs', nav)
	    fs.mkdirSync(root, { recursive: true })

		//writing to file
		const ftitle = `${slug}.md`
		fs.writeFile(path.join(root, ftitle), fm + md.parent, (err) => {
			if (err) {
				console.log(err);
			}
		});
	
	}
})();