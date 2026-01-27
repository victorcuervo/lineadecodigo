// Fichero de configuración de libros disponibles en Línea de Código
// Cada libro contiene la sguiente información:
// - title: Título del libro
// - category: Categoría o tema del libro
// - author: Autor del libro
// - format: Formato y descripción del libro
// - coverImage: URL de la imagen de portada del libro
// - ctaUrl: URL de llamada a la acción para descargar o comprar el libro
// - ctaText: Texto del botón de llamada a la acción

export const books = [
    {
        title: "Manual de JavaScript",
        category: "javascript",
        author: "Víctor Cuervo",
        format: "Manual PDF · 240 páginas en el que encontrarás todo lo necesario para aprender Javascript desde cero.",
        coverImage: "https://manualweb.net/img/books/javascript-pdf.webp",
        ctaUrl: "https://manualweb.net/javascript/descargar-manual-javascript/?utm_source=lineadecodigo&utm_medium=download&utm_id=javas&utm_campaign=book",
        ctaText: " ↓ Descargar PDF"
    },
        {
        title: "Manual de HTML",
        category: "html",
        author: "Víctor Cuervo",
        format: "Manual PDF · 240 páginas en el que encontrarás todo lo necesario para aprender HTML desde cero.",
        coverImage: "https://manualweb.net/img/books/html5-pdf.webp",
        ctaUrl: "https://manualweb.net/html5/descargar-manual-html5/?utm_source=lineadecodigo&utm_medium=download&utm_id=htmls&utm_campaign=book",
        ctaText: " ↓ Descargar PDF"
    }
];

