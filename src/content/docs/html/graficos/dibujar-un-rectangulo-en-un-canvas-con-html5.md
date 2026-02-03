---
title: "Dibujar un rectángulo en un Canvas con HTML5"
description: "Aprende a dibujar un rectángulo en un Canvas con HTML5 y sorpréndete con las posibilidades que ofrece esta tecnología. ¡No te lo pierdas!"
date: 2012-06-30
updatedDate: 2026-01-21
tags: ["canvas","getelementbyid","getcontext","fillrect"]
slug: html/graficos/dibujar-un-rectangulo-en-un-canvas-con-html5
author: victor_cuervo
type: doc
topic: html
id: 2b2eb587-8fca-4864-a6da-2f59d413d724
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/dibujar-rectangulo.html
---

Ya hemos visto como podemos dibujar una línea en un [Canvas](https://www.w3api.com/HTML/canvas/) con [HTML5](https://www.manualweb.net/html5/), ahora vamos a dibujar un rectángulo dentro del [Canvas](https://www.w3api.com/HTML/canvas/).


## Crear el elemento Canvas


Lo primero como cualquier código que vaya a manejar el [Canvas](https://www.w3api.com/HTML/canvas/) con HTML5 será el crear el elemento [Canvas](https://www.w3api.com/HTML/canvas/) dentro de la página. Para ello utilizamos el elemento [canvas](https://www.w3api.com/HTML/canvas/).


```html
<canvas id="micanvas" width="300" height="300">
  Tu navegador no soporta Canvas
</canvas>
```


## Obtener la referencia al Canvas


Ahora ya pasamos al generar el código [Javascript](https://www.manualweb.net/javascript/) que accede al [canvas](https://www.w3api.com/HTML/canvas/). En este caso hay que obtener la referencia al [canvas](https://www.w3api.com/HTML/canvas/). Para ello utilizamos los métodos [.getElementById](https://www.w3api.com/DOM/.getElementById()) y [.getContext](https://www.w3api.com/HTML/canvas/getContext). El primero es bastante conocido (si no te es familiar [revisa la información del getElementById](http://lineadecodigo.com/javascript/documentgetelementbyid/)) y el segundo nos permite acceder al lienzo del [canvas](https://www.w3api.com/HTML/canvas/), sobre el cual vamos a dibujar un rectángulo con [HTML5](https://www.manualweb.net/html5/).


```javascript
var canvas = document.getElementById('micanvas');
var contexto = canvas.getContext('2d');
```


## Dibujar el rectángulo con fillRect


Para dibujar un rectángulo vamos a utilizar el método [.fillRect](https://www.w3api.com/HTML/CanvasRenderingContext2D/fillRect). Sus parámetros son muy sencillos. Son 4 valores, los dos primeros representan la esquina superior izquierda. Es decir, de dónde parte el dibujo del rectángulo. Los dos siguientes representan el ancho y el alto del rectángulo, respectivamente.


El código sería el siguiente:


```javascript
contexto.fillRect(10, 10, 200, 200);
```


En este caso hemos creado un rectángulo de 200x200 que se dibuja desde la coordenada 10,10.


## Cambiar el color del rectángulo


Si queremos, podemos cambiar el color del rectángulo. Para ello tenemos a nuestra disposición la propiedad .fillStyle. A dicho método le pasaremos el valor en RGB del color que queramos utilizar. Por ejemplo, para poner el rectángulo en rojo, escribiremos lo siguiente:


```javascript
var canvas = document.getElementById('micanvas');
var contexto = canvas.getContext('2d');

contexto.fillStyle = 'rgb(255, 0, 0)';
contexto.fillRect(10, 10, 200, 200);
```


Ya tenemos dibujado nuestro rectángulo en rojo dentro del [Canvas](https://www.w3api.com/HTML/canvas/) de [HTML5](https://www.manualweb.net/html5/).

