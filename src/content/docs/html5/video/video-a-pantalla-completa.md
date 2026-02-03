---
title: "Vídeo a Pantalla Completa"
description: "Uso del API Fullscreen y de su método .requestFullscreen() para poder un vídeo a pantalla completa y así aprovechar toda la capacidad de los monitores."
date: 2019-01-15
updatedDate: 2026-01-19
tags: ["video","getelementbyid","requestfullscreen"]
slug: html5/video/video-a-pantalla-completa
author: victor_cuervo
type: doc
topic: html5
id: 7616d993-b062-4e4c-bb5d-cc3132e10a69
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Fullscreen%20API/video-pantalla-completa.html
---

Gracias al [API Fullscreen de HTML5](http://www.manualweb.net/html5/) podemos poner un vídeo a pantalla completa dentro de nuestra página web. Así aprovecharemos toda la pantalla para que se pueda ver el vídeo de la mejor manera posible.


## Crear el elemento vídeo


Lo primero que tendremos que hacer es [poner un vídeo dentro de nuestra página HTML5](http://lineadecodigo.com/html5/cargar-un-video-en-html5/). Para ello nos apoyamos en el elemento `video`, al cual le pasamos el fichero que contiene el vídeo mediante el atributo `src`.


```html
<video id="mivideo" src="[video.mp](http://video.mp/)4" controls></video>
```


Una cosa importante es que debemos de dar un identificador mediante el atributo `id` al vídeo. Ya que será el identificador que utilicemos para acceder a él y poder poner el vídeo a pantalla completa.


## El método requestFullscreen


Lo siguiente que tenemos que saber el cómo utilizar el API Fullscreen, este nos ofrece un método que se llama `.requestFullScreen()`, el cual permite que casi cualquier elemento de la página se visualice a pantalla completa.


Tenemos que saber que hay varias implementaciones o hacks de este método, por lo cual necesitaremos utilizar los siguientes métodos para mantener compatibilidad entre navegadores.


```javascript
element.requestFullscreen ||
element.webkitRequestFullscreen ||
element.mozRequestFullScreen ||
element.msRequestFullscreen
```


## Crear función para compatibilidad


Así creamos una función que controle todas ellas.


```javascript
function getFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}
```


## Crear el botón para pantalla completa


Ahora, lo que tenemos que hacer es pasarle el elemento vídeo, accediendo a su `id` a esta función. Para ello vamos a crear un botón en [HTML](http://www.manualweb.net/html/) que nos gestione la acción de poner el vídeo a pantalla completa.


```html
<button id="btnFullscreen">Ver a pantalla completa</button>
```


## Asignar el evento al botón


Mediante la gestión de los eventos del botón, de su evento `onclick`, vamos a realizar la asociación del vídeo con la función `getFullscreen()`.


```javascript
document.getElementById('btnFullscreen').onclick = function() {
  var video = document.getElementById('mivideo');
  getFullscreen(video);
};
```


Vemos que hemos utilizado el método `.getElementById()` para poder acceder al elemento `video` mediante su `id` y pasarlo a la función `getFullscreen()`. Cada vez que pulsemos sobre el botón veremos nuestro vídeo a pantalla completa.

