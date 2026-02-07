---
title: "Abrir una ventana de información en Google Maps"
description: "Descubre cómo abrir una ventana de información en Google Maps con JavaScript y mejora la interactividad de tu mapa de manera sencilla y efectiva."
date: 2008-01-22
updatedDate: 2026-02-07
tags: ["gmap2","glatlng","openinfowindow"]
slug: google/maps/abrir-una-ventana-de-informacion-en-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-8131-a37d-e93b5fe8534a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/ventana-de-informacion.html
---

Una de las cosas que podemos hacer sobre los **mapas de Google Maps** es **abrir una ventana de información**. Esta nos servirá para dar información adicional sobre el punto localizado.


## Cargar el API de Google Maps


Para ello el propio **objeto GMap2** nos ofrece un **método** llamado **openInfoWindow**. Lo primero que tenemos que hacer es cargar el **API de Google Maps**. Para ello utilizamos el siguiente código **JavaScript**:


```html
<script type="text/javascript" src="http://maps.google.com/maps?file=api&v=2.x&key=CLAVE"></script>
```


Tendremos que sustituir la palabra **CLAVE** por la **clave** que nos proporcione **Google**.


## Cargar el mapa


Lo siguiente será empezar cargando el **mapa**. Para ello utilizamos el **objeto GMap2**. Este objeto necesita el **elemento HTML** donde se cargará el mapa. Normalmente en una **capa**.


```javascript
var map = new GMap2(document.getElementById("mapa"));
```


El elemento de nuestra **página web**, la **capa**, se tiene que llamar "mapa".


## Usar el método openInfoWindow


Ahora empezamos utilizando el **método openInfoWindow**. Este **método** recibe tres **parámetros**:

- **punto**: representa el **punto** del **mapa** donde se abrirá la ventana. Este punto lo podemos abrir mediante un punto relativo al mapa **GPoint** o mediante un punto geográfico **GLatLng**.
- **nodo**: representa el **nodo DOM** que se abrirá en la **ventana de información**.
- **opciones**: opciones adicionales para la **ventana de información**.

## Crear un punto geográfico


En el caso de crear un **objeto GLatLng**, los **parámetros** que se le pasaran será la **longitud** y **latitud**.


```javascript
var punto = new GLatLng(40.381351,-5.764591);
```


## Crear el nodo de texto


Para el **nodo** vamos a crear un **objeto de texto**. En este caso nos apoyamos en el **método document.createTextNode**, el cual crea un simple **elemento de texto**.


```javascript
document.createTextNode("Casa Rural Los Tejos");
```


## Código completo


El **código** quedará finalmente de la siguiente forma:


```javascript
map.openInfoWindow(new GLatLng(40.381351,-5.764591), document.createTextNode("Casa Rural Los Tejos"));
```

