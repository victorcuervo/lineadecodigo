---
title: "Modernizr y las capacidades HTML5 y CSS3"
description: "Modernizr ayuda a detectar capacidades HTML5 y CSS3 en navegadores para mejorar la compatibilidad web."
date: 2012-01-03
updatedDate: 2026-01-13
tags: ["script","video","modernizr","canvas","cssanimations"]
slug: javascript/librerias/modernizr-y-las-capacidades-html5-y-css3
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/apis/modernizr/cargar-modernizr.html
topic: javascript

---

Modernizr es una librería Javascript que nos va a ayudar con la detección del soporte de capacidades [HTML5](https://www.manualweb.net/html5/) y [CSS3](http://www.manualweb.net/css/) de un navegador.


Si vamos a utilizar [HTML5](https://www.manualweb.net/html5/) o [CSS3](http://www.manualweb.net/css/) en nuestra página web, Modernizr nos va a indicar cuales de los elementos o funcionalidades de estos lenguajes están disponibles en el navegador web que está cargando nuestra página.


## Descargar Modernizr


Lo primero que tenemos que hacer es ir a [la web de Modernizr](http://www.modernizr.com/) y [descargarnos la librería](http://www.modernizr.com/download/).


Hay que indicar que tenemos una [versión para desarrollo](http://www.modernizr.com/downloads/modernizr-2.0.6.js) y una [versión para producción](http://www.modernizr.com/download/) la cual es parametrizable. Para las pruebas puedes utilizar la primera, ya que es la que trae todas las funcionalidades de Modernizr.


## Cargar Modernizr


Una vez tenemos la librería, tenemos que incluirla en nuestra página, mediante una carga normal de un script:


```javascript
<script src="modernizr-2.0.6.js"></script>
```


## Detectar capacidades HTML5


Ahora ya pasamos a preguntar por capacidades [HTML5](https://www.manualweb.net/html5/) y [CSS3](http://www.manualweb.net/css/). Por ejemplo, si queremos saber si el navegador tiene soporte para el elemento **Canvas** pondremos lo siguiente:


```javascript
if (Modernizr.canvas) {
  // El navegador soporta el elemento Canvas
} else {
  // El navegador no soporta el elemento Canvas
}
```


Vemos que la variable **Modernizr.canvas** es la que nos devuelve un true o un false dependiendo de si hay soporte en el navegador o no.


## Detectar soporte de vídeo


Otra de las variables nos permite conocer si hay soporte del elemento vídeo. En este caso es la variable [**Modernizr.video**](http://modernizr.video/). Y el código a utilizar, similar al anterior:


```javascript
if ([Modernizr.video](http://modernizr.video/)) {
  // El navegador soporta el elemento Video
} else {
  // El navegador no soporta el elemento Video
}
```


## Detectar capacidades CSS3


Lo mismo pasa con las capacidades de [CSS3](http://www.manualweb.net/css/). Por ejemplo, si queremos saber si el navegador soporta las animaciones de [CSS3](http://www.manualweb.net/css/), podemos preguntar por el atributo **Modernizr.cssanimations**.


```javascript
if (Modernizr.cssanimations) {
  // El navegador soporta las animaciones CSS3
} else {
  // El navegador no soporta las animaciones CSS3
}
```


Así ya tendremos nuestra librería Modernizr cargada y lista para utilizar detectando las capacidades [HTML5](https://www.manualweb.net/html5/) y [CSS3](http://www.manualweb.net/css/).

