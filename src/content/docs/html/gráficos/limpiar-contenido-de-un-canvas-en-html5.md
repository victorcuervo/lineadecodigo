---
title: "Limpiar contenido de un Canvas en HTML5"
description: "Aprende a limpiar el contenido de un Canvas en HTML5 de manera sencilla y efectiva para que puedas empezar de nuevo tus proyectos gráficos sin complicaciones."
date: 2012-08-27
updatedDate: 2026-01-23
tags: ["canvas","width","addeventlistener","button","stroke"]
slug: html/graficos/limpiar-contenido-de-un-canvas-en-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/reiniciar-canvas.html
topic: html

---

En múltiples ejemplos hemos visto cómo poner contenido sobre un [CANVAS](https://www.w3api.com/HTML/canvas/) de [HTML5](https://www.manualweb.net/html5/). En este caso vamos a aprender como podemos limpiar el contenido del [CANVAS](https://www.w3api.com/HTML/canvas/). Es decir, eliminar cualquier dibujo o trazo que hayamos insertado en él.


## Crear el Canvas con contenido


Así que para empezar necesitamos tener un elemento [CANVAS](https://www.w3api.com/HTML/canvas/) con contenido. Podemos volcar lo siguiente:


Crear el [CANVAS](https://www.w3api.com/HTML/canvas/):


```html
<canvas id="micanvas" width="300px" height="300px">
Su navegador no soporta en elemento CANVAS</canvas>
<br>
<button id="limpiar">Limpiar Canvas</button>
```


El insertarle contenido:


```javascript
var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");

for (var x=0; x<=300; x=x+10){
	ctx.moveTo(x,0);
	ctx.lineTo(x,300);
}

for (var y=0; y<=300; y=y+10){
	ctx.moveTo(0,y);
	ctx.lineTo(300,y);
}

ctx.strokeStyle = "#f212aa";
ctx.stroke();
```


Hemos creado un elemento [CANVAS](https://www.w3api.com/HTML/canvas/) y hemos dibujado líneas sobre él. Además hemos añadido un botón, con id "limpiar", que será el encargado de limpiar el contenido de nuestro [CANVAS](https://www.w3api.com/HTML/canvas/).


## Limpiar el Canvas


Para proceder a la limpieza del [CANVAS](https://www.w3api.com/HTML/canvas/) solo tenemos que recurrir a un "pequeño truco", el cual consiste en asignar un nuevo ancho al elemento [CANVAS](https://www.w3api.com/HTML/canvas/). Pero, ¿cuál será el nuevo ancho? Pues exactamente el mismo ancho que tiene en ese momento. Si bien, por el acto de asignar el nuevo ancho se limpiará el contenido del [CANVAS](https://www.w3api.com/HTML/canvas/).


El código quedará de la siguiente forma:


```javascript
var limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click",function(){
	canvas.width=canvas.width;
},false);
```


Lo que hemos hecho ha sido dar el mismo valor de la propiedad [width](https://www.w3api.com/HTML/canvas/.width) del [CANVAS](https://www.w3api.com/HTML/canvas/). Y ya tenemos en blanco, de nuevo, nuestro [CANVAS](https://www.w3api.com/HTML/canvas/).

