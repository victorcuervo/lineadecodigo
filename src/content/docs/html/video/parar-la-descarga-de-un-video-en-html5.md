---
title: "Parar la descarga de un vídeo en HTML5"
description: "Descubre cómo parar la descarga de un vídeo en HTML5 y ahorra ancho de banda. Aprende métodos efectivos para gestionar el contenido multimedia de manera eficiente."
date: 2012-01-21
updatedDate: 2026-01-19
tags: ["video","src","pause","load"]
slug: html/video/parar-la-descarga-de-un-video-en-html5
author: victor_cuervo
type: doc
topic: html
id: d827d6bb-e477-4408-bc2d-b52561b8e523
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/parar-descarga-video.html
---

Cuando cargamos un vídeo en [HTML5](https://www.manualweb.net/html5/) el navegador buscará el origen del vídeo, comprobará si puede visualizar el tipo de vídeo que se le indica como origen y validará si los codecs son correctos. Una vez hecho eso empezará la descarga del vídeo, es decir, empezará a descargar el contenido del vídeo hasta el final del mismo.


Pero qué pasa si no queremos seguir visualizando el vídeo, si queremos parar la descarga con el fin de que no se consuma ancho de banda de nuestra conexión.


## Usando el método pause


Veamos cómo hacerlo. De primeras veremos que en el [DOM](https://www.w3api.com/DOM/) nos encontramos el elemento HTMLMediaElement con un método `.pause()`. Si ejecutamos dicho método solo pararemos la ejecución del contenido multimedia, pero no se parará la descarga del vídeo, es decir, la imagen la veremos congelada, pero el navegador seguirá descargándose el contenido.


```javascript
var video = document.getElementById("mivideo");
video.pause();
```


## Desasignando el atributo src


Pero para poder parar la descarga de un vídeo en [HTML5](https://www.manualweb.net/html5/) no nos valdrá solo con el método `.pause()`, si no que tenemos que jugar con el atributo [.src](https://www.w3api.com/HTMLDOM/HTMLMediaElement/), al cual desasignaremos el valor, es decir, le daremos el valor de una cadena vacía. Una vez parado el vídeo y desasignado el valor de su atributo [.src](https://www.w3api.com/HTMLDOM/HTMLMediaElement/) conseguiremos parar la descarga.


```javascript
var video = document.getElementById("mivideo");
video.pause();
video.src = "";
```


## Caso especial de Firefox


En el caso de [Firefox](http://www.ayudaenlaweb.com/navegadores/que-es-firefox/) no sirve solo con desasignar la cadena [.src](https://www.w3api.com/HTMLDOM/HTMLMediaElement/), si no que tendremos que realizar la carga del nuevo valor mediante el método `.load()`. Esto producirá que se envíe el evento abort del HTMLMediaElement. Si bien habremos conseguido parar la descarga de un vídeo en HTML5.


```javascript
var video = document.getElementById("mivideo");
video.pause();
video.src = "";
video.load();
```

