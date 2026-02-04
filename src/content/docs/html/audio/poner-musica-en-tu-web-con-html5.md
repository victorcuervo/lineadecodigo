---
title: "Poner música en tu web con HTML5"
description: "Aprende a poner música en tu web con HTML5 usando el elemento AUDIO y sus controles. Descubre formatos compatibles y mejora tu sitio hoy mismo."
date: 2012-05-16
updatedDate: 2026-01-19
tags: ["audio","formatos","mpeg","ogg","acc"]
slug: html/audio/poner-musica-en-tu-web-con-html5
type: doc
topic: html
id: 0970432f-c4e2-46a7-8edd-2a7cd651fa38
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Audio/cargar-musica-html5.html
---

Una de las cosas que ya está estandarizada en [HTML5](https://www.manualweb.net/html5/) es la reproducción de elementos de audio. Es decir, podemos poner música en la web de una forma estándar.


## El elemento AUDIO


Para poder poner música en las webs, [HTML5](https://www.manualweb.net/html5/) ha estandarizado el elemento [AUDIO](https://www.w3api.com/HTML/audio/). Así que, lo que tendremos que hacer, para poner un archivo de música será insertar la siguiente etiqueta:


```html
<audio src="[micancion.mp](http://micancion.mp/)3"></audio>
```


Por lo tanto, si nuestra canción es [**micancion.mp**](http://micancion.mp/)**3** el código a utilizar será:


```html
<audio src="[micancion.mp](http://micancion.mp/)3"></audio>
```


## Añadir controles al reproductor


Si escribimos solamente este código no llegaremos muy lejos ya que, por defecto, el elemento de audio no se muestra. Por lo tanto no podremos utilizar los botones de play, stop, pause, etc.


Así, si queremos que [el elemento de AUDIO venga con un reproductor deberemos de añadir el atributo controls](https://www.w3api.com/HTML/audio/.controls):


```html
<audio src="[micancion.mp](http://micancion.mp/)3" controls></audio>
```


Así ya tendremos el reproductor que nos permita poner la música en nuestra web con [HTML5](https://www.manualweb.net/html5/).


## Formatos de audio soportados


Los formatos que podemos reproducir mediante el elemento [AUDIO](https://www.w3api.com/HTML/audio/) de [HTML5](https://www.manualweb.net/html5/):

- **MPEG-1 audio layer 3**, que son los más que de sobra conocidos como MP3 y extensión .mp3.
- **Advanced Audio Coding**, mejoraba la calidad de sonido de los MP3 y es un formato promovido por Apple. Su extensión es .acc. Este formato funciona bajo patentes.
- **Vorbis**, o conocido como Ogg Vorbis. Es un formato libre de patentes. La extensión que utilizan es .ogg
