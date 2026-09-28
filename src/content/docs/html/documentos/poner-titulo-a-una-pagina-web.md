---
title: "Poner título a una página web"
description: "Poner título a una página web: aprende a usar la etiqueta title de HTML, dónde colocarla y cómo crear títulos claros, accesibles y útiles para SEO."
date: 2009-04-25
updatedDate: 2026-09-28
tags: ["html","title","head"]
slug: html/documentos/poner-titulo-a-una-pagina-web
type: doc
topic: html
id: f1f6d2ea-f4df-4454-a9dd-d5b88e89f3a3
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/pagina/poner-titulo-a-la-pagina.html
---

Cuando accedemos con el navegador a una página web, su título suele aparecer en la pestaña o en la barra de título. También puede mostrarse en los marcadores, el historial y los resultados de búsqueda. El navegador obtiene este texto del elemento `<title>` del documento.


## Dónde se coloca la etiqueta TITLE


El elemento `<title>` debe incluirse dentro de `<head>`, la sección que reúne los metadatos del documento [HTML](https://lineadecodigo.com/html/). Cada página debe tener un único `<title>` con texto que describa su contenido.


Veamos cómo quedaría en un documento completo:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Poner título a una página web</title>
</head>
<body>
  <h1>Poner título a una página web</h1>
  <p>Contenido principal de la página.</p>
</body>
</html>
```


En este ejemplo, **Poner título a una página web** será el texto que el navegador mostrará en la pestaña. El contenido de `<title>` es texto: no se deben incluir otros elementos HTML dentro de él.


## Diferencia entre TITLE y H1


Aunque ambos describen la página, `<title>` y `<h1>` cumplen funciones distintas:

- `<title>` forma parte de `<head>` y no aparece como contenido visible de la página. Identifica el documento en el navegador y puede utilizarse como referencia en los resultados de búsqueda.
- `<h1>` se encuentra dentro de `<body>` y es el encabezado principal visible para quien visita la página.

Los dos textos pueden coincidir, pero no es obligatorio. El título puede incorporar contexto adicional —por ejemplo, el nombre del sitio— mientras que el encabezado debe presentar con claridad el contenido visible.


## Cómo escribir un buen título para una página web


Para que el título sea útil para las personas y los buscadores, conviene seguir estas recomendaciones:

- **Describir el contenido con precisión.** Evita títulos genéricos como «Inicio» o «Página nueva».
- **Ser claro y conciso.** Coloca la idea principal al comienzo y elimina palabras que no aporten información.
- **Usar un título único en cada página.** Repetir el mismo `<title>` dificulta distinguir documentos y pestañas.
- **Evitar el keyword stuffing.** Repetir palabras clave de forma artificial empeora la lectura y no aporta contexto.
- **Añadir la marca solo cuando sea útil.** Puede colocarse al final, separada mediante un guion o una barra vertical.

Por ejemplo:


```html
<title>Cómo crear un formulario accesible | Línea de Código</title>
```


## Importancia del título para SEO y accesibilidad


El `<title>` ayuda a los motores de búsqueda a comprender el tema de la página. Puede emplearse como título del resultado, aunque el buscador puede generar otro si considera que representa mejor el contenido.


También facilita la navegación: permite reconocer una pestaña entre varias abiertas y ayuda a las personas que utilizan lectores de pantalla a identificar el documento. Por ello, debe ser específico y comprensible incluso fuera del contexto visual de la página.


## Errores habituales


Al poner título a una página web, evita estos errores:

- Omitir `<title>` o dejarlo vacío.
- Colocarlo fuera de `<head>`.
- Reutilizar el mismo título en páginas con contenidos diferentes.
- Escribir un título que no corresponda con el contenido.
- Introducir etiquetas dentro de `<title>`.
- Confundir el elemento `<title>` con el atributo `title`, que proporciona información adicional a determinados elementos.

El título también puede consultarse o modificarse mediante la propiedad `document.title`, aunque el documento debe conservar un `<title>` inicial correcto en su código HTML.


Algunas referencias sobre cómo utilizar el título en la página son [Elemento TITLE en MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/title) y el relativo a las [Buenas prácticas para los títulos en Google Search Central](https://developers.google.com/search/docs/appearance/title-link).

