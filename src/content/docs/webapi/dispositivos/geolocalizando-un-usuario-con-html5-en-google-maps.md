---
title: "Geolocalizando un usuario con HTML5 en Google Maps"
description: "Aprende a geolocalizar un usuario con HTML5 en Google Maps y mejora la interactividad de tus aplicaciones web con esta guía técnica y persuasiva."
date: 2012-10-06
updatedDate: 2026-02-05
tags: ["geolocation","getcurrentposition","position","latlng","marker"]
slug: webapi/dispositivos/geolocalizando-un-usuario-con-html5-en-google-maps
type: doc
topic: webapi
id: 2c8a9dfb-adca-815c-a52e-d9663990ab7e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Geolocation/geolocalizacion-google-maps.html
---

Ya hemos visto como podemos [Geolocalizar a un usuario con HTML5](http://lineadecodigo.com/html5/geolocalizando-a-un-usuario-con-html5/) y como [Incluir una marca en Google Maps](http://lineadecodigo.com/google/incluir-una-marca-en-google-maps/). Así que ahora vamos a mezclar los dos ejemplos para Geolocalizar a un usuario con [HTML5](https://www.manualweb.net/html5/) y ubicarlo dentro de un mapa de [Google Maps](http://www.manualweb.net/google-maps/).


## Geolocalizando al usuario


Lo primero será geolocalizar al usuario mediante el objeto `navigator.geolocation`.


```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(drawMap);
} else {
  x.innerHTML = "Geolocation is not supported by this browser.";
}
```


En el caso de que el usuario tenga activada la capacidad de geolocalización lanzaremos la función `drawMap` en el método `getCurrentPosition`. Este método `drawMap` será el que pinte el mapa e inserte la marca en la posición ubicada del usuario.


Hay que recordar que la función de callback que se invoca desde `getCurrentPosition` recibirá un parámetro `position` con la longitud y latitud del usuario.


```javascript
function drawMap(position){...}
```


## Creando el objeto LatLng


Lo primero que haremos en la función `drawMap` será crear un objeto `LatLng` de Google Maps a partir del objeto `Position`.


```javascript
var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
```


## Dibujando el mapa


El objeto `LatLng` servirá para centrar el mapa y para añadir la marca. Lo primero será crear el mapa. Para ello utilizamos un objeto `Map`.


```javascript
var mapOptions = {
  zoom: 15,
  center: myLatLng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
```


## Añadiendo la marca


Y lo siguiente añadir la marca en la misma posición del objeto `LatLng` creando un objeto `Marker`:


```javascript
var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: "Tu ubicación"
});
```


Así ya tenemos geolocalizado a nuestro usuario con HTML5 y ubicado dentro de un mapa de Google Maps.

