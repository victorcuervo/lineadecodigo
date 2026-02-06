---
title: "Crear un slider con jQuery"
description: "Crea un slider con jQuery de manera sencilla y eficiente, utilizando el plugin fd-slider para garantizar compatibilidad y un diseño atractivo en tu web."
date: 2012-02-19
updatedDate: 2026-02-06
tags: ["modernizr","ondomready","slider"]
slug: jquery/plugins/crear-un-slider-con-jquery
type: doc
topic: jquery
id: 2c8a9dfb-adca-8165-baf7-cd7c9469f0be
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/tree/master/apis/modernizr/polyfills/placeholder
---

## Alternativa al slider HTML5


Ahora que hemos publicado un [artículo sobre cómo montar un slider en HTML5](http://lineadecodigo.com/html5/elemento-rango-en-formularios-html5/) muchas de las preguntas que nos están llegando son relativas al no soporte del slider [HTML5](https://www.manualweb.net/html5/) en ciertos navegadores y consultas sobre cómo montar una alternativa. Lo que vamos a ver en este artículo es como crear un slider con [jQuery](http://www.manualweb.net/jquery/).


Y no es que [jQuery](http://www.manualweb.net/jquery/) nos de un slider como elemento base de su lenguaje, si no que vamos a utilizar un [plugin de jQuery para poder crear un slider](https://github.com/freqdec/fd-slider). En concreto utilizamos [el plugin fd-slider](https://github.com/freqdec/fd-slider).


Además vamos a utilizar [la técnica de polyfills que vimos el otro día con el ejemplo sobre un placeholder](http://lineadecodigo.com/javascript/como-utilizar-un-polyfill-con-modernizr/). Lo bueno del [plugin fd-slider](https://github.com/freqdec/fd-slider) es que al ser un polyfill nos permite construir nuestra página con [HTML5](https://www.manualweb.net/html5/) y solo se ejecutará en aquellos navegadores que lo necesiten y durante el tiempo que lo necesiten.


## Ficheros del plugin fd-slider


Lo primero que tenemos que saber del plugin es que lo componen dos ficheros:


```javascript
fd-slider.js
fd-slider.css
```


## Cargar el plugin con Modernizr


Utilizando el loader de [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) veremos que quedaría de la siguiente forma:


```javascript
Modernizr.load({
  test:Modernizr.inputtypes.range,
  nope:['fd-slider.js','fd-slider.css']
});
```


Vemos que la capacidad que validamos del [HTML5](https://www.manualweb.net/html5/) es `Modernizr.inputtypes.range`.


## Inicializar el plugin


Una vez cargados los ficheros del [plugin fd-slider](https://github.com/freqdec/fd-slider) tenemos que lanzar el siguiente código para inicializar el plugin:


```javascript
fdSlider.onDomReady();
```


Así que insertaremos dicho código dentro del polyfill.


```javascript
Modernizr.load({
  test:Modernizr.inputtypes.range,
  nope:['fd-slider.js','fd-slider.css'],
  complete:function(){if(fdSlider)fdSlider.onDomReady();}
});
```


Ya tendremos cargado nuestro slider con [jQuery](http://www.manualweb.net/jquery/) funcionando en la página. Os podéis descargar el [plugin fd-slider](https://github.com/freqdec/fd-slider) desde [https://github.com/freqdec/fd-slider](https://github.com/freqdec/fd-slider)

