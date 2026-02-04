---
title: "Música infinita en tu web con HTML5"
description: "Descubre cómo implementar música infinita en tu web con HTML5 de manera sencilla usando los atributos autoplay y loop para crear una experiencia envolvente."
date: 2012-05-20
updatedDate: 2026-01-23
tags: ["audio","autoplay","loop"]
slug: html/audio/musica-infinita-en-tu-web-con-html5
type: doc
topic: html
id: 7e076feb-2f24-46e7-9a94-d2f77542452a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Audio/musica-infinita.html
---

Ya hemos visto cómo [Poner música en tu web con HTML5](http://lineadecodigo.com/html5/poner-musica-en-tu-web-con-html5/) de una forma sencilla manejando el elemento AUDIO. Ahora vamos a dar un pequeño paso más y es que vamos a poner música infinita en tu web con [HTML5](https://www.manualweb.net/html5/). Es decir, la canción que pongamos de fondo sonará una y otra vez de forma infinita.


## Añadir el elemento audio


Lo primero poner el audio en [HTML5](https://www.manualweb.net/html5/):


```html
<audio src="micancion.mp3"></audio>
```


Lo bueno de la etiqueta [AUDIO](https://www.w3api.com/HTML/audio/) es que, por defecto, no nos muestra un panel con controles de reproducción. Lo cual hará que sea perfecto para poner nuestra música de fondo. Pero claro, deberemos de iniciar la canción.


## Reproducción automática con autoplay


Para ello vamos a utilizar el primer atributo que es [autoplay](https://www.w3api.com/HTML/audio/.autoplay). Al atributo [autoplay](https://www.w3api.com/HTML/audio/.autoplay) del [AUDIO](https://www.w3api.com/HTML/audio/) le daremos un valor true.


```html
<audio src="micancion.mp3" autoplay="autoplay"></audio>
```


## Reproducción infinita con loop


Ahora que ya tenemos la canción sonando de fondo vamos a conseguir que la música suene de forma infinita. En este caso usaremos el atributo [loop](https://www.w3api.com/HTML/audio/.loop). Al cual volveremos a dar nuevamente un valor de true.


```html
<audio src="micancion.mp3" autoplay="autoplay" loop="loop"></audio>
```


Esta simple línea de código en [HTML5](http://www.manualweb.net/html5) nos permite poner música infinita en tu web con [HTML5](http://www.manualweb.net/html5).

