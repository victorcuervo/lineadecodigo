---
title: "Geolocalizando a un usuario con HTML5"
description: "Descubre cómo geolocalizar a un usuario con HTML5 y obtener su posición exacta usando GPS o WiFi, mejorando así la experiencia en tus aplicaciones web."
date: 2012-09-15
updatedDate: 2026-02-05
tags: ["geolocation","getcurrentposition","position"]
slug: webapi/dispositivos/geolocalizando-a-un-usuario-con-html5
type: doc
topic: webapi
id: 2c8a9dfb-adca-81d8-87c8-c5cd8026c78c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Geolocation/posicion-actual.html
---

En [HTML5](https://www.manualweb.net/html5/) tenemos la capacidad de geolocalizar a un usuario, es decir, saber la posición en la que se encuentra mostrándola en una posición de longitud y latitud.


El dispositivo de usuario obtendrá la posición geolocalizada de diferentes formas: o bien tirando del dispositivo GPS (si lo tuviera) o bien obteniéndolo del WIFI o router de la red a la que esté conectado. La diferencia estará en la exactitud de la posición obtenida.


## Comprobando soporte de geolocalización


Para realizar la geolocalización habrá que tirar del objeto `navigator.geolocation`. Así que lo primero que tendremos que comprobar es si el navegador soporta dicho objeto:


```javascript
if (navigator.geolocation) {...}
```


## Obteniendo la posición actual


En el caso de que haya soporte del objeto `navigator.geolocation` invocaremos el método `.getCurrentPosition()`. Este método recibe como parámetro la función de callback en la que estará el resultado de la geolocalización.


```javascript
var x = document.getElementById("posicion");
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} else {
  x.innerHTML = "Geolocation is not supported by this browser.";
}
```


## Mostrando la posición


En nuestro caso, la función `showPosition` será la que reciba la posición. Esta función recibe un objeto `Position` con la posición de la geolocalización. El objeto `Position` tiene los atributos `latitude` y `longitude` en los cuales encontramos la posición.


```javascript
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}
```


Lo último que hemos hecho ha sido volcar el contenido sobre una capa.

