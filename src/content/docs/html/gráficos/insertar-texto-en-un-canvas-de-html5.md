---
title: "Insertar texto en un Canvas de HTML5"
description: "Aprende a insertar texto en un Canvas de HTML5 con un formato personalizado y efectos. Descubre cómo hacerlo y mejora tus proyectos web de forma efectiva."
date: 2012-07-11
updatedDate: 2026-01-24
tags: ["canvas","getcontext","filltext","font"]
slug: html/graficos/insertar-texto-en-un-canvas-de-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Canvas/crear-texto.html
topic: html

---

En varios ejemplos del uso del Canvas en [HTML5](https://www.manualweb.net/html5/) hemos ido viendo como insertar diferentes elementos gráficos: [líneas](http://lineadecodigo.com/html5/dibujar-lineas-en-canvas-con-html5/), [rectángulos](http://lineadecodigo.com/html5/dibujar-un-rectangulo-en-un-canvas-con-html5/)... Pero a la hora de utilizar el Canvas en [HTML5](https://www.manualweb.net/html5/) no nos vamos a limitar a realizar dibujos, si no que también podemos insertar texto. Así que vamos a ver qué código necesitamos para insertar texto en un Canvas de [HTML5](https://www.manualweb.net/html5/).


## Crear el elemento Canvas


La creación y acceso al Canvas seguro que ya os la sabéis, pero por si acaso la volvemos a poner. Creamos el elemento [Canvas](https://www.w3api.com/HTML/canvas/):


```html
<canvas height="300px" width="300px" id="micanvas">
Su navegador no soporta en elemento CANVAS
</canvas>
```


Y mediante [Javascript](https://www.manualweb.net/javascript/) accedemos a su contexto:


```javascript
var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");
```


## Dar formato al texto


Ahora que tenemos el contexto del canvas vamos a insertar el texto. Para insertar texto tenemos que conocer dos cosas. La primera es saber cómo podemos seleccionar la fuente, tamaño, efectos sobre el texto. Y es que aquí no podemos pensar en propiedades [CSS](http://www.manualweb.net/css/), si no que será un atributo del [Canvas](https://www.w3api.com/HTML/canvas/) con el que modifiquemos el tipo del texto.


El atributo del canvas que nos permite dar formato al texto es `.font`. Eso sí, los valores de la propiedad son similares a los valores de [CSS](http://www.manualweb.net/css/). Si queremos utilizar una letra sans-serif de 22px y que esté en negrita pondremos lo siguiente:


```javascript
ctx.font = "bold 22px sans-serif";
```


## Insertar el texto en el Canvas


Ahora ya solo hay que conocer la segunda cosa. Cómo ponemos el texto. Esto lo hacemos con el método `.fillText`. Este método recibe tres parámetros: el primero será el texto que queremos insertar y los dos siguientes será la coordenada a partir de la cual queremos insertar el texto.


```javascript
ctx.fillText("Texto en el Canvas",50,50);
```


Ya tenemos insertado nuestro texto en un Canvas con [HTML5](https://www.manualweb.net/html5/). ¿Cómo aplicarías efectos sobre este texto?

