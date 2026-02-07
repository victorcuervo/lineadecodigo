---
title: "Añadiendo controles a Google Maps"
description: "Aprende a añadir controles a Google Maps y mejora la funcionalidad de tu mapa con zoom y cambio a formato satélite. ¡Transforma tu web hoy mismo!"
date: 2007-04-07
updatedDate: 2026-02-07
tags: ["gmap2","gsmallzoomcontrol","gmaptypecontrol"]
slug: google/maps/anadiendo-controles-a-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-810c-88bb-d367cdc04a81
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/aniadiendo-controles-a-google-maps.html
---

Una vez que ya hemos puesto nuestro **mapa** en la **web** queremos añadirle nuevas **funcionalidades**. Una de las funcionalidades básicas es el poder realizar un **zoom** o el poder cambiar el **mapa** al **formato satélite** o viceversa.


## Método addControl


Lo primero que tenemos que saber es que para añadir un **control** al **mapa** tenemos el **método .addControl**, el cual recibe como **parámetro** una **clase** que represente un **control**.


```javascript
var map = new GMap2(document.getElementById("mapa"));
map.setCenter(new GLatLng(40.674389,-4.700432), 12);
map.addControl(new Control());
```


## Control de zoom


Por ejemplo, la **clase** que representa el **zoom** es **GSmallZoomControl**. En este caso el **código** sería el siguiente:


```javascript
var map = new GMap2(document.getElementById("mapa"));
map.setCenter(new GLatLng(40.674389,-4.700432), 12);
map.addControl(new GSmallZoomControl());
```


Podemos invocar el **método .addControl** tantas veces como **controles** necesitemos insertar en el **mapa**.


## Control de tipo de mapa


Otro ejemplo es el que nos permite añadir el **control** para cambiar al **formato satélite** o **híbrido**. En este caso la **clase** es **GMapTypeControl**. Nuestro **código** quedaría de la siguiente forma:


```javascript
var map = new GMap2(document.getElementById("mapa"));
map.setCenter(new GLatLng(40.674389,-4.700432), 12);
map.addControl(new GMapTypeControl());
```

