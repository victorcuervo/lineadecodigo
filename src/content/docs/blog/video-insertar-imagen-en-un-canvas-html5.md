---
title: "Vídeo Insertar Imagen en un Canvas HTML5"
description: "Aprende a insertar imágenes en un Canvas HTML5 y descubre cómo crear gráficos dinámicos con esta poderosa herramienta. ¡No te lo pierdas!"
date: 2016-04-06
updatedDate: 2026-01-20
tags: ["video"]
slug: blog/video-insertar-imagen-en-un-canvas-html5
author: lineadecodigo
type: blog
id: 2c8a9dfb-adca-819c-9436-fef2b6fbdfc4
---

Una de las cosas nuevas que aparecen en [HTML5](http://dudasprogramacion.com/html/html5) es el elemento [Canvas](https://www.w3api.com/HTML/canvas/).  Hoy tenemos el vídeo insertar imagen en un [Canvas](https://www.w3api.com/HTML/canvas/) [HTML5](http://dudasprogramacion.com/html/html5) el cual nos cuenta cómo podemos crear un [Canvas](https://www.w3api.com/HTML/canvas/), para, de forma posterior, manipularlo mediante [Javascript](https://www.manualweb.net/javascript/) e insertar una imagen dentro.


## Contenido del vídeo


En este tutorial aprenderás:

- **El elemento Canvas de HTML5** y cómo crearlo
- **El método .getContext()** para acceder al contexto del Canvas
- **La clase Image()** de Javascript para crear imágenes
- **Cómo combinar todo** para insertar una imagen en el Canvas

## El elemento Canvas


El Canvas es un lienzo en blanco donde puedes dibujar gráficos mediante Javascript. Se crea con:


```html
<canvas id="miCanvas" width="800" height="600"></canvas>
```


## El método getContext()


Para manipular el Canvas necesitamos obtener su contexto 2D:


```javascript
var canvas = document.getElementById('miCanvas');
var ctx = canvas.getContext('2d');
```


## La clase Image()


Para cargar imágenes en Javascript usamos:


```javascript
var imagen = new Image();
imagen.src = 'ruta/a/imagen.jpg';
```


## Insertar la imagen en el Canvas


Una vez cargada la imagen, la dibujamos en el Canvas:


```javascript
imagen.onload = function() {
  ctx.drawImage(imagen, 0, 0);
};
```


## El vídeo


Pero lo mejor es que lo veas en el vídeo insertar imagen en un Canvas [HTML5](http://dudasprogramacion.com/html/html5) y lo aprendas por ti mismo. Espero que os guste!



<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/kC3bmcaS6bw"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>



Puedes ver el vídeo directamente en YouTube: [https://www.youtube.com/watch?v=kC3bmcaS6bw](https://www.youtube.com/watch?v=kC3bmcaS6bw)


El Canvas de HTML5 es una herramienta poderosa para crear gráficos dinámicos. Insertar imágenes es solo el principio de todo lo que puedes hacer con esta tecnología.

