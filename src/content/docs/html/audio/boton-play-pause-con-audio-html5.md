---
title: "Botón play pause con audio HTML5"
description: "Aprende a crear un botón play pause con audio HTML5 que permite reproducir y detener música de manera sencilla y efectiva en tu web. ¡Descúbrelo ya!"
date: 2015-07-14
updatedDate: 2026-01-21
tags: ["audio","play","pause"]
slug: html/audio/boton-play-pause-con-audio-html5
author: victor_cuervo
type: doc
topic: html
id: 13da9ae0-d30c-49e6-a8b7-65177c45d71e
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Audio/boton-play-stop.html
---

Mediante este ejemplo vamos a ver cómo podemos construir un botón play pause con audio [HTML5](https://www.manualweb.net/html5/) y que podamos poner en nuestra web.


El funcionamiento del botón play pause será el mismo que el botón de nuestros iPod. Cuando pulsemos sobre el botón se iniciará la canción y cambiaremos el contenido del dicho botón a pause. De esta forma cuando se vuelva a pulsar sobre el botón se parará la ejecución de la canción y el botón volverá a tener un play. Y de esta forma en bucle.


¿Más o menos entendido? :-D


## Cargar el audio


Lo primero será cargar un audio en [HTML5](https://www.manualweb.net/html5/). Para ello vamos a apoyarnos en el elemento audio.


```html
<audio>
  <source src="[cancion.mp](http://cancion.mp/)3" type="audio/mpeg">
</audio>
```


Vemos que hemos utilizado el atributo src para indicar el nombre del fichero mp3 que se va a reproducir.


## Insertar el botón play pause


Lo siguiente será el insertar nuestro botón play pause. Este lo insertaremos con un sencillo elemento button de [HTML5](https://www.manualweb.net/html5/).


```html
<button id="boton">Play</button>
```


El botón play pause aparecerá inicialmente con el texto "Play" para que podamos iniciar la canción.


## Manejar eventos del botón


Ahora tendremos que manejar los eventos del botón para poder capturar cada vez que este se pulse. Para ello vamos a utilizar el método **addEventListener** y en concreto capturaremos el evento "click".


```javascript
document.getElementById('boton').addEventListener('click', function() {
  // código del evento
});
```


Como tenemos que acceder a un elemento que está en la página hemos utilizado el método getElementById mediante el id que tenía el botón para poder acceder a dicho objeto.


## Obtener referencia del audio


También vamos a tener que obtener una referencia del elemento de audio, ya que querremos pararlo y pausarlo. Así que repetimos el código. En este caso la referencia la hemos obtenido con otro método similar que es getElementsByTagName.


```javascript
var audio = document.getElementsByTagName('audio')[0];
```


## Variable de control


Además, como último elemento vamos a definir una variable de control llamada "sound" que nos ayude a saber si está sonando el reproductor o no. Por defecto está a false, ya que el reproductor estará parado.


```javascript
var sound = false;
```


## Controlar play y pause


Ahora vamos a la parte principal del botón play pause con audio [HTML5](https://www.manualweb.net/html5/). Esta será la que vaya dentro de la función click.


Si el reproductor está parado y pulsamos sobre el play deberemos de arrancar el reproductor mediante el método play, cambiar el texto del botón y modificar el estado de la variable "sound".


```javascript
if (!sound) {
  [audio.play](http://audio.play/)();
  document.getElementById('boton').innerHTML = "Pause";
  sound = true;
}
```


En el caso del que el reproductor esté sonando pararemos la reproducción mediante el método **pause**, cambiaremos el texto del botón y modificaremos la variable "sound".


```javascript
else {
  audio.pause();
  document.getElementById('boton').innerHTML = "Play";
  sound = false;
}
```


## Código completo


El código completo para el evento sería el siguiente:


```javascript
var audio = document.getElementsByTagName('audio')[0];
var sound = false;

document.getElementById('boton').addEventListener('click', function() {
  if (!sound) {
    [audio.play](http://audio.play/)();
    document.getElementById('boton').innerHTML = "Pause";
    sound = true;
  } else {
    audio.pause();
    document.getElementById('boton').innerHTML = "Play";
    sound = false;
  }
});
```

