---
title: "Añadir control de trafico con Google Maps"
description: "Añade control de tráfico a tu mapa con Google Maps y mejora la experiencia del usuario al conocer las rutas más rápidas y evitar congestiones."
date: 2009-01-18
updatedDate: 2026-02-07
tags: ["addoverlay","gtrafficoverlay","gmap2"]
slug: google/maps/anadir-control-de-trafico-con-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-8118-8069-d4c7b5d2644e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/control-de-trafico.html
---

Una de las cosas que nos ofrece [Google Maps](http://www.manualweb.net/google-maps/) es información del **tráfico** de ciertas ciudades, indicando qué vías son más lentas y cuáles más rápidas. Para ello utiliza el típico **código de colores** verde a rojo.


A parte de esto ofrece otras características como puntos en los cuales hay accidentes, conocer el tráfico en un día y hora en concreto. Si bien, estas dos características no están accesibles vía **API** (de momento) de [Google Maps](http://www.manualweb.net/google-maps/).


## Crear la capa de tráfico


Añadir el **tráfico** a nuestro **mapa** será tan sencillo como superponer una **capa** al mapa. La **capa** que refleja el **tráfico** es **GTrafficOverlay**. Su creación será de la siguiente forma:


```javascript
new GTrafficOverlay();
```


## Añadir la capa al mapa


Para añadir **capas** al **mapa** tenemos el **método addOverlay()** sobre la **clase GMap2**. Por lo cual añadir la **capa de tráfico** quedará de la siguiente forma:


```javascript
map.addOverlay(new GTrafficOverlay());
```


## Código completo


Solo nos habrá quedado cargar inicialmente el **mapa** y posicionarlo en una ciudad de la cual [Google](http://www.google.com/) nos pueda dar información de **tráfico**. En nuestro caso hemos elegido [Seattle](http://maps.google.com/maps?f=q&hl=es&geocode=&q=seattle&sll=37.0625%2C-95.677068&sspn=33.710275%2C79.101563&ie=UTF8&ll=47.636709%2C-122.167969&spn=0.447876%2C1.235962&z=10&iwloc=addr&layer=t).


```javascript
if (GBrowserIsCompatible()) {
 var map = new GMap2(document.getElementById("mapa"));
 map.setCenter(new GLatLng(47.645962,-122.236633), 10);

 map.addOverlay(new GTrafficOverlay());
}
```

