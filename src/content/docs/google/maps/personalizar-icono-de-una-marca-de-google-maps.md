---
title: "Personalizar icono de una marca de Google Maps"
description: "Aprende a personalizar el icono de marcadores en Google Maps usando MarkerImage y la propiedad icon en la inicialización del objeto Marker."
date: 2012-10-12
updatedDate: 2026-02-07
tags: ["marker","markerimage","icono","map"]
slug: google/maps/personalizar-icono-de-una-marca-de-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-8149-9e73-dfd4c32af33a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/incluir-marca-personalizada-en-mapa.html
---

## Personalizar el icono de una marca


Ya hemos visto [como añadir una marca a un mapa de Google Maps](http://lineadecodigo.com/google/incluir-una-marca-en-google-maps/), incluso [como podemos añadir la marca de forma dinámica](http://lineadecodigo.com/google/anadir-marcas-dinamicamente-a-un-mapa-de-google-maps/). Pero, ¿podemos personalizar el icono de la marca de [Google Maps](http://www.manualweb.net/google-maps/)? La respuesta es sí.


Si nos centramos en como añadimos la marca al mapa vemos lo siguiente:


```javascript
var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,		      
  title:"Avila de los Caballeros"
});
```


## Usar la propiedad icon con MarkerImage


Lo que podemos hacer en la inicialización es pasarle una propiedad icon, la cual espera un objeto de tipo MarkerImage. Por lo que tenemos que hacer es crear un icono mediante un MarkerImage.


```javascript
var img = new google.maps.MarkerImage("icono.png");
```


Y lo siguiente definirlo en la inicialización del Marker:


```javascript
var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,		
  icon: img,      
  title:"Avila de los Caballeros"
});
```


Ya tenemos insertado y personalizado nuestro icono de Manual de Google Maps.

