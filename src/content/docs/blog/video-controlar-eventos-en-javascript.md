---
title: "Vídeo Controlar eventos en Javascript"
description: "El vídeo explica cómo controlar eventos en Javascript utilizando un botón y funciones como getElementById y addEventListener."
date: 2016-04-08
updatedDate: 2026-01-13
tags: ["video"]
slug: blog/video-controlar-eventos-en-javascript
author: lineadecodigo
type: blog
topic: blog
id: 2c8a9dfb-adca-8171-892f-e56c34175e3f
---

En el vídeo controlar eventos en [Javascript](https://www.manualweb.net/javascript/) se nos presentan las nociones básicas para poder controlar un evento dentro de una página [HTML](https://www.manualweb.net/html/).


## Estructura del formulario


Para ello lo que se hace es construir un formulario en el cual tendremos un botón, del cual queremos saber cuándo se ha pulsado. Además utilizaremos una capa para devolver un texto indicando cuándo se ha pulsado el botón.


```html
<button id="miboton">Hola Soy un Boton</button>
<div id="micapa"></div>
```


## Separar estructura y comportamiento


Luego se nos contará la diferencia entre tener el comportamiento y la estructura dentro de un mismo sitio, cosa que sucedía en los principios del [HTML](https://www.manualweb.net/html/) y lo que es separar la estructura del comportamiento, que será la mejor forma de poder controlar eventos en [Javascript](https://www.manualweb.net/javascript/).


## Funciones para manejar eventos


Para acabar, entraremos en detalle en el uso de las funciones [.getElementById()](https://www.w3api.com/DOM/.getElementById()) y .addEventListener() que serán las que nos ayuden a manejar los eventos.


```javascript
var boton = document.getElementById("miboton");
boton.addEventListener("click",function(){
  var capa = document.getElementById("micapa");
  capa.innerHTML = "Has pulsado el botón";
},false);
```


Pero lo mejor es que os veáis en vídeo controlar eventos en [Javascript](https://www.manualweb.net/javascript/) que os contará todo esto en detalle.


¡Espero que os guste el vídeo!



<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/4CmQz6E1yCg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>


