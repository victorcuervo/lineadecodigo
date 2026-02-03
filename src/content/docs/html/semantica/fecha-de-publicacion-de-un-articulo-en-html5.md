---
title: "Fecha de publicación de un artículo en HTML5"
description: "Descubre cómo identificar la fecha de publicación de un artículo en HTML5 utilizando el elemento time y el atributo pubdate para mejorar la semántica de tus documentos."
date: 2012-10-18
updatedDate: 2026-01-24
tags: ["time","datetime","article","header"]
slug: html/semantica/fecha-de-publicacion-de-un-articulo-en-html5
author: victor_cuervo
type: doc
topic: html
id: 61655561-c4ae-4a90-b8c5-551cf1f5415f
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/fecha-publicacion-articulo.html
---

De una forma muy sencilla hemos visto [como podemos identificar la fecha de publicación de un documento con HTML5](http://lineadecodigo.com/html5/fecha-de-publicacion-de-un-documento-con-html5/). Para ello simplemente nos hemos tenido que apoyar en el [atributo pubdate](https://www.w3api.com/HTML/time/.pubdate) del elemento [time](https://www.w3api.com/HTML/time/) de [HTML5](https://www.manualweb.net/html5/).


```html
<time datetime="2012-10-16T09:00">16 de octubre de 2012 a las 9h</time>
```


En estos casos, al utilizar el [atributo pubdate](https://www.w3api.com/HTML/time/.pubdate), dicho atributo aplicará al elemento inmediatamente superior que contenga al elemento [time](https://www.w3api.com/HTML/time/). Así, en el caso de [la identificación de la fecha de publicación de un documento](http://lineadecodigo.com/html5/fecha-de-publicacion-de-un-documento-con-html5/) lo hacíamos a nivel del documento.


## Elemento article en HTML5


Pero en [HTML5](https://www.manualweb.net/html5/) aparecen otros elementos que nos permiten dar semántica a la estructura de los documentos web. Uno de ellos es el elemento [article](https://www.w3api.com/HTML/article/%20%22Elemento%20article%20de%20HTML5%22). Dentro de un elemento [article](https://www.w3api.com/HTML/article/%20%22Elemento%20article%20de%20HTML5%22) podemos recoger toda información relativa a un artículo. Lo que, por ejemplo en un blog, vendría a ser una entrada o post.


## Fecha de publicación de un artículo


De esta forma podemos asignar una fecha diferente a la publicación de un artículo en nuestra web, el truco consiste en asignar el elemento [time](https://www.w3api.com/HTML/time/), con su respectivo [atributo pubdate](https://www.w3api.com/HTML/time/.pubdate), a un elemento [article](https://www.w3api.com/HTML/article/%20%22Elemento%20article%20de%20HTML5%22).


```html
<article>
  <header>
    <h1>Artículo 1 - Presentación</h1>
    Publicado el <time datetime="2012-10-15T12:00">15 de octubre de 2012 a las 12h</time> por <a href="#">Autor 1</a>
  </header>
  En un lugar de la Mancha, de cuyo nombre no quiero acordarme...
</article>
```


Así, cada uno de los artículos que tengamos en nuestra página (o entradas de nuestro blog) puede tener una fecha de publicación diferente.


```html
<article>
  <header>
    <h1>Artículo 1 - Presentación</h1>
    Publicado el <time datetime="2012-10-15T12:00">15 de octubre de 2012 a las 12h</time> por <a href="#">Autor 1</a>
  </header>
  En un lugar de la Mancha, de cuyo nombre no quiero acordarme...
</article>
<article>
  <header>
    <h1>Artículo 2 - Detalles</h1>
    Publicado el <time datetime="2012-10-16T09:00">16 de octubre de 2012 a las 9h</time> por <a href="#">Autor 2</a>
  </header>
  Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso,....
</article>
```


Incluso, a nivel de documento podemos seguir teniendo una [fecha de publicación del documento](http://lineadecodigo.com/html5/fecha-de-publicacion-de-un-documento-con-html5/).

