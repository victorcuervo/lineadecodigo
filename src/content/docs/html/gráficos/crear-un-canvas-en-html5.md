---
title: "Crear un Canvas en HTML5"
description: "Aprende a crear un Canvas en HTML5 y dibujar gráficos fácilmente. Esta guía te ayudará a gestionar visualmente tus proyectos con eficacia y creatividad."
date: 2012-02-07
updatedDate: 2026-01-21
tags: ["canvas","fillrect","fillstyle","getcontext"]
slug: html/graficos/crear-un-canvas-en-html5
author: victor_cuervo
type: doc
topic: html
id: 5e3dc4f0-bb52-47e5-a498-6cef23d801c2
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/crear-canvas.html
---

## Introducción al Canvas


El canvas es un elemento que aparece nuevo en [HTML5](https://www.manualweb.net/html5/) y que nos permitirá la gestión de gráficos. Así podremos dibujar gráficos, crear foto composiciones, realizar animaciones,...


## Crear el elemento CANVAS


Para crear un canvas en [HTML5](https://www.manualweb.net/html5/) tenemos que utilizar el elemento [CANVAS](https://www.w3api.com/HTML/canvas/).


```html
<canvas></canvas>
```


A un elemento [CANVAS](https://www.w3api.com/HTML/canvas/) podemos darle un alto y ancho mediante los atributos [height](https://www.w3api.com/HTML/canvas/.height) y [width](https://www.w3api.com/HTML/canvas/.width) respectivamente. Así como darle un identificador mediante el [atributo id](https://www.w3api.com/HTMLDOM/HTMLDialogElement/returnValue/).


```html
<canvas id="micanvas" width="200" height="200"></canvas>
```


En el caso de que no indiquemos las dimensiones, estas serán de 300x150.


## Obtener la referencia del Canvas


Una vez que tenemos nuestro "lienzo" vamos a dibujar algún gráfico. Para ello utilizaremos el lenguaje [Javascript](https://www.manualweb.net/javascript/). Así lo primero que haremos será obtener la referencia sobre el [CANVAS](https://www.w3api.com/HTML/canvas/) mediante un [getElementById()](https://www.w3api.com/DOM/.getElementById()).


```javascript
var canvas = document.getElementById('micanvas');
```


## Crear el contexto de renderizado


Dentro de un [CANVAS](https://www.w3api.com/HTML/canvas/) podemos volcar varios contextos. Lo que son conocidos como contextos de renderizado. Así podremos tener contextos 2D y 3D. Estos últimos todavía en fase experimental. El método [.getContext()](https://www.w3api.com/HTML/canvas/getContext) sobre el [CANVAS](https://www.w3api.com/HTML/canvas/) nos permitirá crear un nuevo contexto.


```javascript
var contexto = canvas.getContext('2d');
```


## Dibujar gráficos en el Canvas


Ahora ya pasaremos a dibujar gráficos. Así, con el manejo de una propiedad: [.fillStyle](https://www.w3api.com/HTML/CanvasRenderingContext2D/fillStyle) y un método [.fillRect()](https://www.w3api.com/HTML/CanvasRenderingContext2D/fillRect) podemos crear rectángulos de colores. En el caso de [.fillStyle](https://www.w3api.com/HTML/CanvasRenderingContext2D/fillStyle) recibe como parámetro un color definido en formato RGB y en el caso de [.fillRect()](https://www.w3api.com/HTML/CanvasRenderingContext2D/fillRect) las coordenadas de los vertices superior izquierdo, así como el alto y ancho.


Así nos quedará el código que insertará gráficos al crear nuestro primer canvas con [HTML5](https://www.manualweb.net/html5/).


```javascript
var canvas = document.getElementById('micanvas');
var contexto = canvas.getContext('2d');

contexto.fillStyle = 'rgb(255, 0, 0)';
contexto.fillRect(10, 10, 50, 50);

contexto.fillStyle = 'rgb(0, 255, 0)';
contexto.fillRect(70, 70, 50, 50);
```

