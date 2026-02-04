---
title: "Fin del audio en HTML5"
description: "Controla el fin del audio en HTML5 de manera sencilla y efectiva. Aprende a gestionar eventos y mejora la experiencia de usuario en tus proyectos web."
date: 2016-10-17
updatedDate: 2026-01-21
tags: ["audio","controls","ended"]
slug: html/audio/fin-del-audio-en-html5
type: doc
topic: html
id: 0f1581b9-5ee0-461c-b7bd-ec73840330d6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Audio/fin-musica.html
---

Ya hemos visto varios ejemplos de cómo podemos manejar el audio con [HTML5](https://www.manualweb.net/html5/). En este ejemplo vamos a ver cómo podemos controlar el fin del audio en [HTML5](https://www.manualweb.net/html5/). Es decir, saber cuándo ha terminado una canción, por si queremos realizar alguna acción.


## Crear el elemento audio


Lo primero será crear el elemento audio, al cual vamos a dar un [id](https://www.w3api.com/HTMLDOM/HTMLDialogElement/returnValue/) para poder acceder a él posteriormente mediante [Javascript](http://www.manualweb.net/javascript/).


```html
<audio id="reproductor" controls>
</audio>
```


## Añadir los orígenes de audio


Lo siguiente será añadir algunos orígenes de canciones mediante el elemento source. Como vemos en el ejemplo le vamos a poner un par de formatos diferentes.


```html
<audio id="reproductor" controls>
  <source src="[cancion.mp](http://cancion.mp/)3" type="audio/mpeg">
  <source src="cancion.ogg" type="audio/ogg">
  Tu navegador no soporta el elemento audio.
</audio>
```


## Obtener la referencia al elemento


Ahora pasamos a codificar el contenido en Javascript. En este caso la idea es obtener una referencia al elemento de audio mediante su [id](https://www.w3api.com/HTMLDOM/HTMLDialogElement/returnValue/) y el método [.getElementById()](https://www.w3api.com/DOM/.getElementById())


```javascript
var reproductor = document.getElementById('reproductor');
```


## Controlar el evento ended


Para controlar el fin del audio en [HTML5](https://www.manualweb.net/html5/) deberemos de manejar el evento `"ended"`. Así que nos valdremos del método `.addEventListener()`.


```javascript
reproductor.addEventListener("ended", function(){
  // Código a ejecutar cuando termine el audio
});
```


La función asociada al método [.addEventListener()](https://www.w3api.com/DOM/EventTarget/addEventListener) es la que nos sirve para poder asignar una funcionalidad. Por ejemplo la de mostrar un texto por pantalla.


```javascript
reproductor.addEventListener("ended", function(){
  var texto = document.getElementById("texto");
  texto.innerHTML = "Fin de la canción";
});
```


De esta forma tan sencilla habremos conseguido controlar el fin del audio en [HTML5](https://www.manualweb.net/html5/).

