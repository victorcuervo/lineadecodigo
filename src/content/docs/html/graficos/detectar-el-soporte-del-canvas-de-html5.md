---
title: "Detectar el soporte del Canvas de HTML5"
description: "Descubre cómo detectar el soporte del Canvas de HTML5 en tu navegador usando Modernizr o propiedades del DOM. Asegúrate de que tu desarrollo sea compatible."
date: 2012-08-29
updatedDate: 2026-01-21
tags: ["canvas","getelementbyid","modernizr"]
slug: html/graficos/detectar-el-soporte-del-canvas-de-html5
author: victor_cuervo
type: doc
topic: html
id: 2c8a9dfb-adca-81ee-a666-fd89de9d7bd3
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/comprobar-soporte-canvas.html
---

Hemos visto [múltiples ejemplos para manipular el CANVAS](https://lineadecodigo.com/tag/html5-canvas/). Pero ¿cómo podemos saber si nuestro navegador soporta el elemento [CANVAS](https://w3api.com/HTML/canvas/) de [HTML5](https://www.manualweb.net/html5/)? 


Para detectar el soporte del [CANVAS](https://w3api.com/HTML/canvas/) de [HTML5](https://www.manualweb.net/html5/) tenemos dos opciones. La primera es recurrir a una librería que detecte capacidades del navegador, como [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/), mientras que la segunda será accediendo directamente a las [propiedades del DOM](https://www.w3api.com/DOM/).


## Detectar con Modernizr


En el caso de utilizar [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) lo primero que tenemos que hacer es cargar la librería:


```html
<script src="modernizr.js"></script>
```


Ahora, mediante el objeto [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) vamos a preguntar por la capacidad canvas.


```javascript
if (Modernizr.canvas) {
  // El navegador soporta Canvas
  alert('Tu navegador soporta Canvas');
} else {
  // El navegador no soporta Canvas
  alert('Tu navegador NO soporta Canvas');
}
```


## Detectar con el DOM


Si no queremos depender de una librería como [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) podemos utilizar directamente el [DOM](https://www.w3api.com/DOM/), así lo primero que haremos será obtener una referencia a la capa sobre la que queremos cargar el canvas.


```javascript
var canvas = document.getElementById('micanvas');
```


Y lo siguiente que haremos será comprobar si tiene el [método .getContext](https://www.w3api.com/HTML/canvas/getContext). En caso afirmativo es que tenemos soporte del [CANVAS](https://www.w3api.com/HTML/canvas/).


```javascript
if (canvas.getContext) {
  // El navegador soporta Canvas
  var contexto = canvas.getContext('2d');
  alert('Tu navegador soporta Canvas');
} else {
  // El navegador no soporta Canvas
  alert('Tu navegador NO soporta Canvas');
}
```


En este segundo caso nos ahorramos la necesidad de depender de una librería de terceros como [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/).


## Contenido alternativo


Por último indicar que no está de más el insertar un contenido alternativo a la etiqueta [CANVAS](https://w3api.com/HTML/canvas/) dentro de la estructura del documento [HTML5](https://www.manualweb.net/html5/), ya sea un texto avisando de la falta de soporte del [CANVAS](https://w3api.com/HTML/canvas/) o una imagen representativa de lo que iba a cargar el [CANVAS](https://w3api.com/HTML/canvas/).


```html
<canvas id="micanvas" width="200" height="200">
  Tu navegador no soporta el elemento Canvas de HTML5
</canvas>
```

