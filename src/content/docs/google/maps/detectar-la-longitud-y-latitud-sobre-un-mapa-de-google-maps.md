---
title: "Detectar la longitud y latitud sobre un mapa de Google Maps"
description: "Aprende a detectar coordenadas geográficas (latitud y longitud) al hacer clic en Google Maps utilizando el evento addListener y la propiedad latLng."
date: 2012-10-08
updatedDate: 2026-02-07
tags: ["addListener","latlng","map"]
slug: google/maps/detectar-la-longitud-y-latitud-sobre-un-mapa-de-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-8174-87ff-f18656898f0b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/detectar-latlng-con-click.html
---

En este ejemplo vamos a ver cómo podemos detectar la longitud y la latitud de un punto de un mapa de [Google Maps](http://www.manualweb.net/google-maps/) una vez que hagamos click sobre él. 


## Cargar el mapa de Google Maps


Lo primero que vamos a hacer es cargar el mapa de [Google Maps](http://www.manualweb.net/google-maps/) sobre una capa de nuestra página web:


```javascript
var myLatlng = new google.maps.LatLng(40.674389,-4.700432);

var mapOptions = {
  zoom: 12,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
					
map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
```


Vemos que en este proceso de carga del mapa hemos definido un objeto `LatLng` para darle un centro al mapa y que el mapa en sí se construye con un objeto `Map`.


> Por si hay algún despistado, en la cabecera de nuestra página hay que cargar la librería de [Google Maps](http://www.manualweb.net/google-maps/) desde la dirección [https://maps.googleapis.com/maps/api/js?sensor=false](https://maps.googleapis.com/maps/api/js?sensor=false)


## Detectar longitud y latitud en el click


Ahora vamos a la parte central de nuestro ejemplo, detectar la longitud y latitud en el click. Así que lo que tenemos que hacer es registrar un evento `onclick` sobre el mapa. Para ello utilizamos el método `addListener` del mapa:


```javascript
google.maps.event.addListener(map, 'click', function(event) { ... });
```


Dentro del evento que recibimos como parámetro uno de los datos que viene es la posición en latitud y longitud, en concreto la propiedad `latLng`. Así que la volcamos sobre una capa de nuestra página web:


```javascript
google.maps.event.addListener(map, 'click', function(event) {
  document.getElementById("posicion").innerHTML = event.latLng;		    
});
```


Ya tenemos detectada la longitud y latitud al pinchar sobre un mapa de [Google Maps](http://www.manualweb.net/google-maps/).

