---
title: "Tiempo visualizado del vídeo en HTML5"
description: "Aprende a manejar el tiempo visualizado del vídeo en HTML5 y mejora tu desarrollo web con un código sencillo que actualiza la duración en tiempo real."
date: 2012-02-06
updatedDate: 2026-01-19
tags: ["video","timeupdate","currenttime"]
slug: html/video/tiempo-visualizado-del-video-en-html5
type: doc
topic: html
id: 79f7cd06-2860-49c3-be48-1edea9b96d21
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/tiempo-visualizado-video.html
---

Seguimos con el análisis del manejo de vídeos en [HTML5](https://www.manualweb.net/html5/), así como con el manejo del elemento DOM HTMLMediaElement. En este caso vamos a ver cómo podemos ir viendo el tiempo visualizado del vídeo en [HTML5](https://www.manualweb.net/html5/). Es decir, según vaya avanzando la visualización del vídeo, calcular los segundos que hayan transcurrido de la visualización.


## Insertar el vídeo


Lo primero será poner el vídeo en nuestra página web.


```html
<video id="mivideo" src="[video.mp](http://video.mp/)4" controls></video>
<div id="tiempo"></div>
```


## Escuchar el evento timeupdate


Cuando el usuario pulse al play se irán sucediendo una serie de eventos. Uno de los eventos importantes es `timeupdate`. Dicho evento se envía progresivamente según avanza la visualización del vídeo. Así que tendremos que crear un listener sobre dicho evento en el vídeo.


```javascript
var video = document.getElementById('mivideo');

video.addEventListener('timeupdate', function(e) {
  // Código para actualizar el tiempo
}, false);
```


## Obtener el tiempo actual con currentTime


Cuando se ejecute el método asociado al listener deberemos de acceder al atributo `.currentTime` del HTMLMediaElement, ya que este atributo es el que contiene el tiempo transcurrido del vídeo. Este tiempo será en segundos.


Lo que nosotros hacemos es volcar el contenido del atributo `.currentTime` sobre una capa. Este contenido se irá actualizando cada vez que se lance el evento timeupdate en el vídeo.


```javascript
video.addEventListener('timeupdate', function(e) {
  var tiempo = document.getElementById('tiempo');
  tiempo.innerHTML = video.currentTime + " segundos";
}, false);
```


## Convertir a formato hora


Si queremos "dejarlo bonito" podemos convertir el tiempo en segundos en un formato reloj, igual que explicábamos en el artículo [Convertir segundos en formato hora con Javascript](http://lineadecodigo.com/javascript/convertir-segundos-en-formato-hora-con-javascript/).


Nosotros hemos metido este código dentro de una función que la hemos llamado hora, la cual recibe una cantidad de segundos, los cuales los devuelve en un formato hh:mm:ss.


```javascript
function hora(segundos) {
  var horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  var minutos = Math.floor(segundos / 60);
  segundos = Math.floor(segundos % 60);
  
  if (horas < 10) horas = "0" + horas;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;
  
  return horas + ":" + minutos + ":" + segundos;
}
```


## Código completo


Ya solo nos quedará invocar a esta función desde el listener:


```javascript
var video = document.getElementById('mivideo');

video.addEventListener('timeupdate', function(e) {
  var tiempo = document.getElementById('tiempo');
  tiempo.innerHTML = hora(video.currentTime);
}, false);

function hora(segundos) {
  var horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  var minutos = Math.floor(segundos / 60);
  segundos = Math.floor(segundos % 60);
  
  if (horas < 10) horas = "0" + horas;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;
  
  return horas + ":" + minutos + ":" + segundos;
}
```

