---
title: "Descargar un Canvas a una imagen con HTML5"
description: "Aprende a descargar un Canvas a una imagen con HTML5 utilizando un simple código. Convierte tu contenido en imágenes fácilmente y mejora tu proyecto web."
date: 2012-09-28
updatedDate: 2026-01-24
tags: ["canvas","todataurl","image"]
slug: html/graficos/descargar-un-canvas-a-una-imagen-con-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/guardar-canvas-en-imagen.html
topic: html


---

En el artículo [Exportar el contenido de un Canvas HTML5 a una imagen](http://lineadecodigo.com/html5/exportar-el-contenido-de-un-canvas-html5-a-una-imagen/) veíamos como podíamos convertir el contenido del Canvas en una imagen y cargar dicha imagen dentro de un elemento IMG de nuestra página. En este vamos a ver como podemos descargar el contenido del [Canvas](https://www.w3api.com/HTML/canvas/) a un fichero.


## Convertir Canvas a imagen


El primer paso será la conversión del [Canvas](https://www.w3api.com/HTML/canvas/) a un formato imagen. De igual forma que lo hicimos al [Exportar el contenido de un Canvas HTML5 a una imagen](http://lineadecodigo.com/html5/exportar-el-contenido-de-un-canvas-html5-a-una-imagen/) vamos a utilizar el método `.toDataURL()` para extraer el contenido del [Canvas](https://www.w3api.com/HTML/canvas/) en Base64.


```javascript
var dato = canvas.toDataURL("image/png");
```


## Manipular el tipo MIME


Pero en este caso no vamos a mover este contenido al elemento IMG, si no que lo vamos a poner en la URL del navegador. En este caso accedemos al objeto `location.href`:


```javascript
document.location.href = dato;
```


Esto provocará, ¿la descarga?. Ummmmm, la verdad que no. Si lo ponemos en la imagen en la URL lo que sucederá es que se cargará la imagen dentro del área de visualización del navegador.


Es por ello que antes de subirla a la URL vamos a manipular su contenido y donde esté el tipo de mimetype de la imagen, es decir "image/jpeg" vamos a poner "image/octet-stream".


```javascript
dato = dato.replace("image/png", "image/octet-stream");
```


Ahora, al poner la imagen en la URL, el navegador decidirá, al encontrarse el mimetype "image/octet-stream", descargar la imagen.


## Código completo


El código completo sería:


```javascript
var jpeg = document.getElementById("jpeg");
jpeg.addEventListener("click",function(){	
  var dato = canvas.toDataURL("image/jpeg");
  dato = dato.replace("image/jpeg", "image/octet-stream");
  document.location.href = dato;	
},false);
```


Con estas tres sencillas líneas de código podemos descargar el contenido de un [Canvas](https://www.w3api.com/HTML/canvas/) a una imagen con [HTML5](https://www.manualweb.net/html5/).

