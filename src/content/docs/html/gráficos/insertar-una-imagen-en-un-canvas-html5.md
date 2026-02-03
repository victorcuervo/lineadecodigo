---
title: "Insertar una imagen en un canvas HTML5"
description: "Aprende a insertar una imagen en un canvas HTML5 de manera sencilla y efectiva. Sigue nuestros pasos y transforma tus gráficos web con facilidad."
date: 2012-09-06
updatedDate: 2026-01-24
tags: ["canvas","getcontext","image","drawimage"]
slug: html/graficos/insertar-una-imagen-en-un-canvas-html5
author: victor_cuervo
type: doc
id: 53e362c6-2913-4b54-898b-8d8ca8b13de3
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/insertar-imagen-a-canvas.html
---

Una de las cosas que podemos hacer con un [CANVAS](https://www.w3api.com/HTML/canvas/) de [HTML5](https://www.manualweb.net/html5/) es insertar una imagen dentro de él. Para ello lo primero que vamos a hacer es crear un elemento [CANVAS](https://www.w3api.com/HTML/canvas/).


## Crear el Canvas


```html
<canvas height="300px" width="300px" id="micanvas"></canvas>
```


## Obtener el contexto del Canvas


Y obtener acceso al contexto:


```javascript
var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");
```


## Crear el objeto Image


A la hora de insertar una imagen en el Canvas vamos a utilizar el objeto Image, el cual es representado mediante un objeto HTMLImageElement del [DOM](https://www.w3api.com/DOM/). El atributo src llevará la URL asociada a la imagen.


```javascript
var img = new Image();
img.src = "imagenes/logo_aulambra.png";
```


## Insertar la imagen en el Canvas


Lo siguiente será insertar la imagen en el [CANVAS](https://www.w3api.com/HTML/canvas/). Para ello el contexto del [CANVAS](https://www.w3api.com/HTML/canvas/) nos ofrece el método .drawImage(). El método .drawImage() recibe como parámetros la referencia a la imagen que acabamos de crear y las coordenadas x,y del Canvas a partir de las cuales posicionaremos la imagen.


```javascript
ctx.drawImage(img, 0, 0);
```


## Gestionar la carga de la imagen


Si ejecutamos el método .drawImage() puede que se cargue la imagen en el [CANVAS](https://www.w3api.com/HTML/canvas/) o no. Esto es debido a que solo se ejecuta si ya se ha descargado la imagen. En caso contrario no pintará nada. Es por ello que necesitamos saber si se ha cargado la imagen. Para ello gestionaremos el evento .onload de la imagen, el cual se ejecuta una vez cargada la imagen. Quedándonos el siguiente código:


```javascript
img.onload = function(){
  ctx.drawImage(img, 0, 0);
}
```


Con estos sencillos pasos tendremos la imagen insertada en el [CANVAS](https://www.w3api.com/HTML/canvas/).

