---
title: "Añadir marcas dinámicamente a un mapa de Google Maps"
description: "Aprende a añadir marcas dinámicamente a un mapa de Google Maps con eventos de clic, mejorando la interactividad de tus aplicaciones web de forma sencilla."
date: 2012-10-10
updatedDate: 2026-02-07
tags: ["marker","position","map"]
slug: google/maps/anadir-marcas-dinamicamente-a-un-mapa-de-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-8147-913b-eae82e2f7f66
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/add-marcas-al-mapa-con-click.html
---

En este ejemplo vamos a ver cómo podemos **añadir una marca** a un **mapa** de forma **dinámica**. Para ello vamos a utilizar lo aprendido en los ejemplos [Cómo añadir una marca a Google Maps](http://lineadecodigo.com/google/incluir-una-marca-en-google-maps/) y [Detectar la longitud y latitud sobre un mapa de Google Maps](http://lineadecodigo.com/google/detectar-la-longitud-y-latitud-sobre-un-mapa-de-google-maps/).


Y es que el ejemplo es una combinación de **creación de marcas** y **gestión de eventos onclick** sobre el **mapa**.


## Cargar el mapa


Lo primero, como hacemos siempre, será cargar el **mapa** de [Google Maps](http://www.manualweb.net/google-maps/).


```javascript
var myLatlng = new google.maps.LatLng(40.674389,-4.700432);
var mapOptions = {
  zoom: 12,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};

map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
```


## Registrar el evento onclick


Lo siguiente será **registrar el evento onclick** sobre el **mapa** mediante el **método addListener**.


```javascript
google.maps.event.addListener(map, 'click', function(event) {
  addMark(event.latLng);
});
```


Lo que hemos hecho ha sido invocar al **método addMark**, el cual recibirá un **objeto de tipo LatLng** con la **longitud** y **latitud** en la cual vamos a **añadir la marca**.


## Crear el método addMark


Si revisamos el **método addMark** veremos que lo que vamos a hacer es crear un **objeto de tipo Marker** de [Google Maps](http://www.manualweb.net/google-maps/), que es el que representa a las **marcas**. Y dicho **objeto** tendrá como **posición** la recibida en el **parámetro LatLng**.


```javascript
function addMark(location){
  marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
```


Así ya tenemos **añadida la marca** al **mapa** de [Google Maps](http://www.manualweb.net/google-maps/) de forma **dinámica** utilizando un **click**.

