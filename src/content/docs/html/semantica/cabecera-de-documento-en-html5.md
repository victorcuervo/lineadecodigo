---
title: "Cabecera de documento en HTML5"
description: "Aprende a crear una cabecera de documento en HTML5 de forma sencilla y semántica, incluyendo elementos como título y logo para una mejor presentación visual."
date: 2018-10-27
updatedDate: 2026-01-21
tags: ["header"]
slug: html/semantica/cabecera-de-documento-en-html5
author: victor_cuervo
type: doc
topic: html
id: d37e0529-58fd-4e61-8fce-54159fc1fcf2
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Sem%C3%A1ntica/cabecera-documento.html
---

Semánticamente, el uso del elemento **header** nos permite definir una cabecera de documento en HTML5. De esta forma podemos identificar cuáles son los elementos introductorios de la página.


En una cabecera de documento en [HTML5](http://www.manualweb.net/html5/) nos podemos encontrar elementos como el título, un menú de navegación, logo y en algunos casos un formulario de búsqueda. Si bien esto no está reglado estos son los elementos más comunes.


## El elemento header


El elemento **header** es un elemento agrupador, por lo cual no tiene una representación explícita y su contenido es texto u otro elemento. El elemento **header** se utilizaría de la siguiente forma:


```html
<header>
  <!-- Contenido de la cabecera -->
</header>
```


Este elemento lo encontraremos, normalmente detrás del elemento **body** de las página webs, cuando este se esté utilizando para representar una cabecera de documento en [HTML5](http://www.manualweb.net/html5/).


## Diferencia entre head y header


Es importante que diferenciemos entre los que es la cabecera del documento definida mediante el elemento **head** y la cabecera representada mediante el elemento **header**. 


En el primer caso utilizamos el elemento **head** para definir la metainformación de la página así como un área para enlazar a nuestros scripts u hojas de estilo. 


Por otro lado el elemento **header** nos permite definir la cabecera del documento, aquella que tiene una representación visual y por lo tanto es renderizable.


## Ejemplo completo


Para completarlo, vamos a insertar dentro del elemento **header** un título y un logo. Para ello nos apoyamos en los elementos **h1** e **img**.


```html
<header>
  <h1>Cabecera de documento en HTML5</h1>
  <img src="logo.png" alt="Logo del sitio">
</header>
```


De esta manera ya tenemos identificado semánticamente qué representa el título e imagen representativa de la página dentro de nuestra cabecera.


Ya habéis visto lo sencillo que es definir una cabecera de documento en [HTML5](http://www.manualweb.net/html5/).

