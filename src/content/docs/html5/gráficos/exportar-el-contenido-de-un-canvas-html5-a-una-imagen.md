---
title: "Exportar el contenido de un Canvas HTML5 a una imagen"
description: "Aprende a exportar el contenido de un Canvas HTML5 a una imagen en formatos PNG y JPEG, mejorando tus habilidades gráficas y la interactividad de tus proyectos."
date: 2012-09-11
updatedDate: 2026-01-24
tags: ["canvas","image","todataurl"]
slug: html5/graficos/exportar-el-contenido-de-un-canvas-html5-a-una-imagen
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/exportar-canvas-a-imagen.html
topic: html5

---

Los [Canvas](https://www.w3api.com/HTML/canvas/) de [HTML5](https://www.manualweb.net/html5/) nos permiten una fácil manipulación gráfica. De tal manera que es sencillo insertar en ellos elementos gráficos, textos, imágenes,... Pero además nos ofrecen la posibilidad de exportar todo el contenido en formato imagen.


Para ello lo primero que vamos a hacer generar un [Canvas](https://www.w3api.com/HTML/canvas/) con algo de contenido:


```javascript
var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");

// Dibujamos algo sencillo en el Canvas para exportarlo
ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(20,20,100,100);

ctx.fillStyle = "rgb(0,255,0)";
ctx.fillRect(60,60,140,140);

ctx.fillStyle = "rgb(0,0,255)";
ctx.fillRect(100,100,180,180);
```


## Exportar el Canvas a imagen


Ya hemos añadido unos cuadrados sobre el lienzo del [Canvas](https://www.w3api.com/HTML/canvas/). Ahora, la idea es exportar el contenido del canvas sobre un elemento IMG de la página. Para ello nos vamos a dotar de dos botones: uno que exporte a PNG y otro que exporte a JPEG, así como del elemento IMG.


```html
<fieldset>
  <legend>Pulsa sobre el tipo de imagen y el resultado se generará abajo</legend>
  <button id="png">Generar PNG</button> | <button id="jpeg">Generar JPEG</button>
</fieldset>
<figure><img id="laimagen"></figure>
```


## Capturar el evento click


Lo que haremos será capturar el click sobre el botón y exportar la imagen. Recordar que para atender al evento click del botón tenemos que añadirle un EventListener.


```javascript
var png = document.getElementById("png");
png.addEventListener("click",function(){	
  // Exportar la imagen	
},false);
```


## Utilizar toDataURL()


Para exportar la imagen, recurrimos al método `.toDataURL()` del [Canvas](https://www.w3api.com/HTML/canvas/). Dicho método recibe como parámetro el mimetype de la imagen que queremos generar. Es decir, un "image/png" o un "image/jpeg".


Lo siguiente que haremos será coger su resultado, que es un base64, y asignarlo a la propiedad src de la imagen.


```javascript
var img = document.getElementById("laimagen");

var png = document.getElementById("png");
png.addEventListener("click",function(){	
	img.src = canvas.toDataURL("image/png");	
},false);
```


> ⚠️ A la hora de exportar el contenido del [Canvas](https://www.w3api.com/HTML/canvas/) a una imagen, hay que tener en cuenta un tema de seguridad. Y es que **si el** [**Canvas**](https://www.w3api.com/HTML/canvas/) **tiene imágenes, estas deberán de estar en el mismo servidor que el fichero que contenga el** [**Canvas**](https://www.w3api.com/HTML/canvas/). En caso contrario, saltará una alerta de seguridad al utilizar el método `.toDataURL()`.

