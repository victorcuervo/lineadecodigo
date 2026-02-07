---
title: "Cargando Google Maps"
description: "Descubre cómo cargar Google Maps en tu página web y aprovecha sus potentes funciones de mashup para crear experiencias interactivas únicas."
date: 2007-04-06
updatedDate: 2026-02-07
tags: ["gbrowseriscompatible","glatlng","gmap2","gunload"]
slug: google/maps/cargando-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-81b7-b789-f21d96ea2a97
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/cargando-google-maps.html
---

Una de las cosas que "está pegando fuerte" con la llamada **Web 2.0** son los **mashup**. El **mashup** consiste en mezclar **fuentes de información**, utilizando diferentes tecnologías (**RSS**, **ATOM**, [JavaScript](https://www.manualweb.net/javascript/),...), para ofrecer un resultado conjunto.


Una de las fuentes de datos que más ha pegado con los **mashup** ha sido [Google Maps](http://www.manualweb.net/google-maps/). [Google Maps](http://www.manualweb.net/google-maps/) es la herramienta de [Google](http://www.google.com/) que te permite localizar cualquier lugar del mundo, permitiéndote ver el **mapa** de la zona, la **vista de satélite** de dicha zona o ambos.


Los **mashup** que han salido han sido muchos. Por ejemplo localizaciones para la venta de pisos, situación de restaurantes, fuentes de tráfico,...


## Obtener una clave de Google Maps


Lo primero que tendremos que hacer para poder utilizar [Google Maps](http://www.manualweb.net/google-maps/) en nuestras páginas será hacernos con una **clave de utilización**. Esta **clave** nos la proporciona [Google](http://www.google.com/) de forma gratuita (solo se necesita una cuenta en [Google](http://www.google.com/)). Para ello tendremos que ir a [http://www.google.com/apis/maps/signup.html](http://www.google.com/apis/maps/signup.html).


Una vez rellenados los datos tendremos una **clave**, la cual necesitaremos cuando codifiquemos.


## Cargar el script de Google Maps


Para cargar [Google Maps](http://www.manualweb.net/google-maps/) en nuestra página deberemos de incluir el siguiente **script**.


```html
<script src="http://maps.google.com/maps?file=api&v=2&key=miclave" type="text/javascript"></script>
```


Donde "miclave" es la **clave** que os ha proporcionado [Google Maps](http://www.manualweb.net/google-maps/).


A partir de este momento ya tenemos acceso vía [JavaScript](https://www.manualweb.net/javascript/) al **API** de [Google Maps](http://www.manualweb.net/google-maps/).


## Crear una capa para el mapa


El código para cargar el **mapa** es sencillo. Lo primero que deberemos hacer es crear una **capa** en la página, donde vayamos a posicionar el **mapa**. A esta **capa** la tendremos que dar un **id**.


```html
<div id="mapa" style="width: 400px; height: 300px;">
</div>
```


En nuestro caso el **id** es "mapa". Este **id** nos servirá para hacer referencia desde el código [JavaScript](https://www.manualweb.net/javascript/).


## Crear el objeto GMap2


Para crear el **mapa** utilizamos la **función GMap2**. La cual espera el **elemento** de la página sobre el que se cargará el **mapa**.


```javascript
var map = new GMap2(document.getElementById("mapa"));
```


## Establecer la ubicación del mapa


Una vez hemos cargado el **mapa** habrá que darle una **ubicación**. Las **ubicaciones** se manejan mediante la **clase GLatLng**. La cual recibe como **parámetros** la **longitud** y la **latitud** del punto geográfico a buscar.


La **clase GLatLng** será utilizada por el **método setCenter** de la **clase GMap2** para ubicar la imagen del **mapa**. La línea de código será la siguiente:


```javascript
map.setCenter(new GLatLng(40.674389,-4.700432), 12);
```


## Verificar compatibilidad del navegador


Puede ser que el **API** de [Google Maps](http://www.manualweb.net/google-maps/) no funcione en ciertos **navegadores**. Es por ello que tenemos la **función GBrowserIsCompatible()** la cual nos indica si el **navegador** sobre el que se ejecuta es compatible.


Juntando todo nuestro código podemos componer la siguiente **función**:


```javascript
function load(){
  if (GBrowserIsCompatible()) {
    var map = new GMap2(document.getElementById("mapa"));
    map.setCenter(new GLatLng(40.674389,-4.700432), 12);
  }
}
```


## Liberar memoria con GUnload


Para finalizar es bueno saber que si lanzamos la **función GUnload** liberaremos las estructuras utilizadas en **memoria**. Es por ello que es recomendable hacerlo al salir de la página. Es decir, en el **método onunload**.


```html
<body onload="load();" onunload="GUnload();">
```


Se puede encontrar más documentación sobre [Google Maps](http://www.manualweb.net/google-maps/) en [https://developers.google.com/maps/documentation/javascript/overview](https://developers.google.com/maps/documentation/javascript/overview)

