let title = "Hola"
let excerpt = "Este es un extracto del artículo."
let publishdate = "2024-06-15"
let updateddate = "2024-06-20"
let tags = ["notion", "import", "script"]
let ruta = "categoria/articulo-ejemplo"
let author = "victor_cuervo"
let type = "blog"
//let download = "https://example.com/download/file.zip"
let cover = "https://example.com/images/cover.jpg"
let coverImage = "/assets/categoria/covers/articulo-ejemplo-cover.jpg"
let video = "https://www.youtube.com/embed/jMxAMRRI0Ww"

let lines = [
    `---`,
    `title: "${title}`,
    `description: "${excerpt.replace(/"/g, '\\"')}`,
    `date: ${publishdate}`,
    `updatedDate: ${updateddate}`,
    `tags: ${JSON.stringify(tags)}`,
    `slug: ${ruta}`,
    `author: ${author}`,
    `type: ${type}`
]


if (typeof download !== 'undefined' && download) lines.push(`download: ${download}`)

if (typeof cover !== 'undefined' && cover && (type === 'blog')) lines.push(`cover:
  alt: "Artículo sobre ${title}"
  image: ${coverImage}`)

if (typeof cover !== 'undefined' && cover) lines.push(`socialImage: ${coverImage}
socialImageAlt: ${title}`)

if (typeof video !== 'undefined' && video) lines.push(`video: ${video}`)

// Cierro del frontmatter
lines.push(`---\n`)

console.log (lines.join('\n'))