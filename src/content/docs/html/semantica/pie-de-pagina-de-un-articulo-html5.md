---
title: "Pie de página de un artículo HTML5"
description: "El elemento footer nos ayuda a definir un pie de página de un artículo HTML5 en el cual insertar información como el autor o la fecha de publicación."
date: 2018-10-30
updatedDate: 2026-01-19
tags: ["footer","header","article","time"]
slug: html/semantica/pie-de-pagina-de-un-articulo-html5
author: victor_cuervo
type: doc
id: 0c29fb63-f6af-40e0-bcc0-f6a9dacd0e47
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Sem%C3%A1ntica/piepagina-articulo.html
---

Ya hemos visto [cómo podemos crear un pie de página de un documento HMTL5](http://lineadecodigo.com/html5/pie-de-pagina-en-html5/), pero mediante el elemento `footer` también podemos crear un pie de página de un artículo [HTML5](http://www.manualweb.net/html5/). Digamos que el funcionamiento es similar al que se hace mediante el elemento `header` el cual nos sirve para crear cabeceras de documentos y de artículos en [HTML5](http://www.manualweb.net/html5/).


## Creando el elemento footer en un artículo


Lo primero que haremos para crear nuestro pie de página de un artículo [HTML5](http://www.manualweb.net/html5/) será crear el elemento `footer` en un artículo creado mediante un elemento `article`.


```html
<article>
  <footer>
  </footer>
</article>
```


## Añadiendo información al pie de página


En el pie de página del artículo podremos encontrar diferentes tipos de información. En nuestro caso lo que vamos a poner es la fecha de publicación del artículo y el autor del mismo. Para ello nos vamos a ayudar de un elemento `time`.


```html
<article>
  <footer>
    Publicado el <time datetime="2011-10-30" pubdate>30 de octubre de 2011</time> por Víctor Cuervo
  </footer>
</article>
```


## Artículo completo con header y footer


Con la combinación entre el elemento [`header`](http://www.w3api.com/HTML/header) para [crear la cabecera de un artículo HTML5](http://lineadecodigo.com/html5/cabecera-de-un-articulo-en-html5/) y el elemento [`footer`](http://www.w3api.com/HTML/footer) para definir un pie de página de un artículo [HTML5](http://www.manualweb.net/html5/), obtendríamos un artículo completo que quedaría de la siguiente forma:


```html
<article>
  <header>
    <h1>Título del Artículo</h1>
  </header>
  <p>Contenido del artículo...</p>
  <footer>
    Publicado el <time datetime="2011-10-30" pubdate>30 de octubre de 2011</time> por Víctor Cuervo
  </footer>
</article>
```

