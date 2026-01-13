---
title: "Como utilizar un Polyfill con Modernizr"
description: "Ejemplo de Como utilizar un Polyfill con Modernizr para un placeholder de un campo de texto de HTML. Se utiliza jQuery para facilitar su uso."
date: 2012-02-17
updatedDate: 2026-01-13
tags: ["Javascript Modernizr Placeholder","jQuery Formularios","Concepto Polyfill","polyfill","placeholder","modernizr","javascript","jquery","HTML5 Básicos","CSS Básicos"]
slug: javascript/librerias/como-utilizar-un-polyfill-con-modernizr
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/tree/master/apis/modernizr/polyfills/placeholder
topic: javascript

---

[Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) como librería [Javascript](https://www.manualweb.net/javascript/) está orientada a poder conocer el soporte de las capacidades [CSS3](http://www.manualweb.net/css/) y [HTML5](https://www.manualweb.net/html5/) cuando nos ejecutemos en un determinado navegador.


Pero la potencia de **Modernizr** no se queda solo ahí, si no que podemos hacer otras cosas como utilizar un **polyfill**.


## ¿Qué es un Polyfill?


Pues un polyfill es como se denomina a una librería [Javascript](https://www.manualweb.net/javascript/) que nos permite cubrir las capacidades [HTML5](https://www.manualweb.net/html5/)/[CSS3](http://www.manualweb.net/css/) que los navegadores no soportan.


Es decir, completan al navegador para que se pueda ejecutar una página web construida con [HTML5](https://www.manualweb.net/html5/)/[CSS3](http://www.manualweb.net/css/) sin problemas. El código que creemos será estándar [HTML5](https://www.manualweb.net/html5/)/[CSS3](http://www.manualweb.net/css/) de tal manera que [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) nos ayudará a utilizar solo el polyfill si se necesita debido a las carencias del navegador.


Lo bueno es que [Modernizr ya cuenta con una extensa librería de Polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills).


## Ejemplo: Polyfill para Placeholder


En nuestro ejemplo, que nos explica como utilizar un Polyfill en [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/), vamos a [crear una página que tenga un Placeholder](http://lineadecodigo.com/html5/placeholder-marcadores-de-posicion-en-html5/) y en el caso que no haya soporte del placeholder utilizaremos un [plugin de jQuery que nos simule el Placeholder](http://lineadecodigo.com/jquery/utilizar-placeholder-con-jquery/).


## Método Modernizr.load


Para utilizar el polyfill de [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) tenemos que conocer el método `Modernizr.load`. La filosofía de este método es la siguiente:


```javascript
Modernizr.load({
  test: Modernizr.somefeature,
  yep: 'feature-supported.js',
  nope: 'feature-polyfill.js',
  complete: 'always-loaded.js'
});
```


Es decir, se testea la capacidad de [HTML5](https://www.manualweb.net/html5/)/[CSS3](http://www.manualweb.net/css/) que queramos cubrir:

- Si hay soporte se cargan los ficheros [Javascript](https://www.manualweb.net/javascript/) o [CSS3](http://www.manualweb.net/css/) que haya en la parte del **yep**
- Si no se soporta la propiedad testeada, se cargan los ficheros del **nope**
- Y siempre, pase lo que pase, se carga lo que haya en **complete**

## Implementación del Polyfill


Nosotros vamos a testear la propiedad `Modernizr.input.placeholder` que valida si hay soporte de placeholders. En el caso de que no lo haya cargamos el plugin `jquery.placeholder.js` y lo inicializamos.


Para inicializar el plugin tendremos que ejecutar la siguiente línea de código:


```javascript
$('input[placeholder], textarea[placeholder]').placeholder();
```


El código del como utilizar un polyfill en [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) nos quedaría de la siguiente forma:


```javascript
Modernizr.load({
  test: Modernizr.input.placeholder,
  nope: ['jquery.placeholder.js', 'placeholder.js']
});
```


En `placeholder.js` hemos metido la inicialización del plugin.


Esperamos que se haya entendido el concepto del polyfill en [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) y cómo cargarlos. En vuestro caso, ¿qué polyfills estás utilizando?

