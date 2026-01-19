---
title: "Tiempo total de un vídeo HTML5"
description: "Descubre cómo obtener el tiempo total de un vídeo HTML5 con un simple código. Aprende a manejar metadatos y mejora tu proyecto web de forma efectiva."
date: 2012-02-02
updatedDate: 2026-01-19
tags: ["video","loadeddata","duration"]
slug: html/video/tiempo-total-de-un-video-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/tiempo-total-video.html
topic: html

---

Cuando cargamos un vídeo en [HTML5](https://www.manualweb.net/html5/) puede ser interesante el conocer el tiempo total de la duración del vídeo. El elemento HTMLMediaElement nos permite consultar esta información.


## El atributo duration


Para poder consultar el tiempo total de un vídeo, utilizaremos el atributo duration del HTMLMediaElement.


```javascript
var video = document.getElementById('mivideo');
var duracion = video.duration;
```


## El problema de los metadatos


Ahora, que cuando ejecutemos este código nos llevaremos una sorpresa y es que, el atributo duration, no nos devolverá ningún valor. Esto es debido a que la información del tiempo total de un vídeo no es cargada hasta que tenemos la información de los metadatos del vídeo.


Y, ¿cuándo tenemos los metadatos del vídeo? Para ello tenemos el evento `loadeddata`. Así que tendremos que poner un listener sobre dicho evento en el elemento video. En este caso utilizaremos el método `.addEventListener()` para llevar a cabo dicha tarea.


```javascript
var video = document.getElementById('mivideo');

video.addEventListener('loadeddata', function(e) {
  // Aquí ya tenemos los metadatos disponibles
}, false);
```


## Obtener la duración total


Será dentro del listener donde codifiquemos el acceso al campo duration del HTMLMediaElement para obtener el tiempo total de un vídeo [HTML5](https://www.manualweb.net/html5/).


```javascript
var video = document.getElementById('mivideo');

video.addEventListener('loadeddata', function(e) {
  var tiempototal = document.getElementById('tiempototal');
  tiempototal.innerHTML = "Duración: " + video.duration + " segundos";
}, false);
```


## Código HTML


Tiempototal es una capa de nuestra página [HTML5](https://www.manualweb.net/html5/) sobre la que volcaremos el resultado.


```html
<video id="mivideo" src="[video.mp](http://video.mp/)4" controls></video>
<div id="tiempototal"></div>
```


Con este sencillo código podemos obtener el tiempo total de duración de un vídeo en HTML5, siempre recordando esperar a que los metadatos estén cargados mediante el evento loadeddata.

