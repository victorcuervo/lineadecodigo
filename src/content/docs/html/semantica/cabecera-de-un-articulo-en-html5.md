---
title: "Cabecera de un artículo en HTML5"
description: "Descubre cómo crear la cabecera de un artículo en HTML5 de forma efectiva y semántica, incorporando título y subtítulo para atraer a tus lectores."
date: 2018-10-28
updatedDate: 2026-01-21
tags: ["header","article"]
slug: html/semantica/cabecera-de-un-articulo-en-html5
author: victor_cuervo
type: doc
topic: html
id: 2c8a9dfb-adca-81de-be7f-ee6edf7d272c
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Sem%C3%A1ntica/cabecera-articulo.html
---

Ya hemos visto [cómo utilizar el elemento `header` para definir la cabecera de un documento en HTML5](http://lineadecodigo.com/html5/cabecera-de-documento-en-html5/). Ahora vamos a ver cómo podemos utilizar el elemento `header` para poder definir la **cabecera de un artículo en** [**HTML5**](http://www.manualweb.net/html5/).


Es decir, el elemento es el mismo, si bien, dependiendo de dónde se encuentre representará semánticamente a la cabecera del documento o a la cabecera del artículo.


## El elemento header en artículos


Para utilizar el elemento `header` como cabecera de un artículo en [HTML5](http://www.manualweb.net/html5/) lo vamos a utilizar dentro del elemento `article`.


```html
<article>
  <header>
    <!-- Contenido de la cabecera del artículo -->
  </header>
</article>
```


## Contenido de la cabecera


El elemento `header` que representa la cabecera de un artículo en HTML5 suele contener el título y subtítulo del artículo. Si bien también se suelen poner datos como fecha de creación del documento, autor del documento, comentarios del mismo,... 


Al igual que sucedía en el uso del elemento `header` como cabecera del documento no existe una regla de qué información tiene que ser esta, si bien la detallada suele ser la más normal.


En este caso vamos a crear una cabecera de un artículo en [HTML5](http://www.manualweb.net/html5/) que contenga el título y subtítulo del artículo.


```html
<article>
  <header>
    <h1>Título del Artículo</h1>
    <h2>Subtítulo del Artículo</h2>
  </header>
</article>
```


## Múltiples artículos en un documento


Hay que tener en cuenta que podremos tener múltiples artículos dentro de un documento [HTML5](http://www.manualweb.net/html5/) y por ende podremos encontrar múltiples cabeceras de dichos artículos dentro del documento.


```html
<article>
  <header>
    <h1>Título del Primer Artículo</h1>
    <h2>Subtítulo del Primer Artículo</h2>
  </header>
</article>

<article>
  <header>
    <h1>Título del Segundo Artículo</h1>
    <h2>Subtítulo del Segundo Artículo</h2>
  </header>
</article>
```


En tu caso, ¿qué elementos pones para definir la cabecera de un artículo en [HTML5](http://www.manualweb.net/html5/)? Danos ideas en los comentarios.

