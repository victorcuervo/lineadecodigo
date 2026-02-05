---
title: "Navegaciones en HTML5"
description: "Descubre cómo crear navegaciones en HTML5 de forma sencilla utilizando el elemento nav, ideal para agrupar enlaces y mejorar la estructura de tu sitio web."
date: 2018-09-26
updatedDate: 2026-02-05
tags: ["nav","header"]
slug: html/semantica/navegaciones-en-html5
type: doc
topic: html
id: 2c8a9dfb-adca-8162-98a0-daf94cba030a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Sem%C3%A1ntica/navegaciones.html
---

Uno de los elementos semánticos que podemos encontrar en [HTML5](http://www.manualweb.net/html5/) es `nav`. Este elemento nos permitirá definir navegaciones en [HTML5](http://www.manualweb.net/html5/). Las navegaciones en [HTML5](http://www.manualweb.net/html5/) nos permiten agrupar un conjunto de enlaces que tengan una finalidad: ya sea la navegación principal de nuestro site, una navegación interna a contenidos de la página, una navegación de migas de pan (breadcrumbs),...


A diferencia de [HTML4](http://www.manualweb.net/html/), en [HTML5](http://www.manualweb.net/html5/) el elemento `nav` nos proporciona esa semántica sobre el conjunto de enlaces de navegación, el cual antes conseguíamos con una secuencia de capas `div`.


## Sintaxis básica del elemento nav


Para crear navegaciones en [HTML5](http://www.manualweb.net/html5/) con `nav` deberemos de incluir directamente el elemento.


```html
<nav>...</nav>
```


Dentro del elemento `nav` vamos a incluir una lista de enlaces mediante un elemento `ul`.


```html
<nav>
  <ul>
    <li><a href="http://lineadecodigo.com">Línea de Código</a></li>
    <li><a href="http://www.manualweb.net">Manual Web</a></li>
    <li><a href="http://w3api.com">W3Api</a></li>
  </ul>
</nav>
```


Vemos que el contenido de la navegación en [HTML5](http://www.manualweb.net/html5/) lo conseguimos mediante esta lista de enlaces en el elemento `nav`.


## Ubicación del elemento nav


El elemento `nav` puede ir en cualquier parte de la página, ya sea dentro del cuerpo o `body`, cabeceras o `header`, pies de página o `footer`,...


De esta manera podemos encontrar nuestro menú de navegación, por ejemplo, en un `header`:


```html
<header>
  <nav>
    <ul>
      <li><a href="http://lineadecodigo.com">Línea de Código</a></li>
      <li><a href="http://www.manualweb.net">Manual Web</a></li>
      <li><a href="http://w3api.com">W3Api</a></li>
    </ul>
  </nav>
</header>
```


Ya hemos visto lo sencillo que es crear navegaciones en [HTML5](http://www.manualweb.net/html5/). ¿Qué ejemplos se te ocurren?

