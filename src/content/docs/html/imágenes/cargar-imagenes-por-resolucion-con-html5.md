---
title: "Cargar imágenes por resolución con HTML5"
description: "Aprende a cargar imágenes por resolución con HTML5 usando el elemento picture y media queries para crear aplicaciones web responsive y optimizadas."
date: 2021-02-11
updatedDate: 2026-02-10
tags: ["picture","source","srcset","media"]
slug: html/imagenes/cargar-imagenes-por-resolucion-con-html5
type: doc
topic: html
id: c0f07282-4dfc-4f0b-aa63-8f2d71e72246
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Imagenes/imagen-por-mediaquery.html
---

Normalmente la forma de cargar imágenes en [HTML](http://www.manualweb.net/html) es mediante el elemento img al cual pasamos como parámetro la URL de la imagen a cargar. Pero desde [HTML5](http://www.manualweb.net/html5) disponemos del elemento [`picture`](http://www.w3api.com/HTML/picture) que nos ayuda a eficientar y cargar imágenes por resolución con [HTML5](http://www.manualweb.net/html5). Es decir, dependiendo de la resolución a la que tengamos la pantalla se mostrará una imagen u otra, lógicamente adaptada a la resolución que esté la pantalla en ese momento. De esta manera podemos construir mejores aplicaciones responsive. 


Pero pasemos a definir el problema. La idea es que el usuario puede cargar nuestra página en diferentes dispositivos, ya sea un móvil, una tablet o un ordenador. En cada uno el tamaños de dispositivos la página se verá de forma diferente. Y lo que nos interesa es en cada tamaño cargar una imagen adaptada a dicho tamaño. 


Si [utilizamos el elemento img](http://lineadecodigo.com/html/alto-y-ancho-de-una-imagen-con-html/) tendremos lo siguiente:


```html
<img src="imagen.png" alt="imagen general"/>
```


En el caso de que utilicemos el elemento [`img`](http://w3api.com/HTML/img/)) se cargará siempre la misma imagen independientemente del tamaño de la pantalla. Es por eso que recurrimos al elemento [`picture`](http://www.w3api.com/HTML/picture) el cual tiene la siguiente estructura.


```html
<picture>
 <source srcset="imagen" media="media-query">
 <source srcset="imagen" media="media-query">
 <source srcset="imagen" media="media-query">
 ...
 <img src="image-fallback" alt="Imagen si no funciona picture">
</picture>
```


## Elemento picture y source


Lo que ya vemos es que en el elemento [`picture`](http://www.w3api.com/HTML/picture) podemos indicar varios orígenes mediante el elemento [`source`](http://www.w3api.com/HTML/source/). Además si nos fijamos en el elemento [`source`](http://www.w3api.com/HTML/source/) vemos que disponemos de dos atributos. Por un lado el atributo [`srcset`](http://www.w3api.com/HTML/source/srcset) en el cual pasamos la URL de la imagen que queremos mostrar y por otro lado tenemos un atributo [`media`](http://www.w3api.com/HTML/source/media) en el que podemos indicar una **media query**. 


En el caso de que la **media query** de un valor true será cuando se muestre la imagen indicada en el atributo [`srcset`](http://www.w3api.com/HTML/source/srcset). Y será esta **media query** con la que gestionaremos el tamaño del dispositivo. 


## Media queries para tamaños


Las media query nos permiten acceder a datos de configuración del dispositivo como puede ser tamaño mínimo o máximo de la pantalla (`min-width` y `max-width`, `min-height` y `max-height`), la resolución (`resolution`), el número de colores que se utilizan (`color-index`),... En nuestro vamos a utilizar la propiedad `min-width` que nos dará el tamaño mínimo de la pantalla. La utilizaremos de la siguiente forma:


```css
(min-width: size px)
```


Donde el tamaño será el tamaño en pixels de la pantalla. Vamos a controlar varios tamaños:

- **480px**, para móviles.
- **768px**, para tablets.
- **992px**, para pc.
- **1280px**, para pc con pantalla grande.

De esta forma los **media query** nos quedaría de la siguiente forma:


```css
min-width: 1280px;
min-width: 992px;
min-width: 768px;
min-width: 480px;
```


## Implementación final


Si lo aplicamos al código de nuestro elemento [`picture`](http://www.w3api.com/HTML/picture) tendremos el siguiente resultado:


```html
<picture>        
  <source srcset="imagen1280.png" media="(min-width: 1280px)">
  <source srcset="imagen992.png" media="(min-width: 992px)">
  <source srcset="imagen768.png" media="(min-width: 768px)">
</picture>
```


Si nos fijamos vemos que hemos creado una imagen optimizada para cada resolución. Pero que no hemos creado una para la mínima de 480px y es que en este caso lo que vamos a hacer es insertar un elemento img que será el que se cargue en todos los casos y además nos sirve para proteger la visualización si nuestro navegador no soporta los elementos HTML5. El código final nos quedaría de la siguiente forma.


```html
<picture>        
  <source srcset="imagen1280.png" media="(min-width: 1280px)">
  <source srcset="imagen992.png" media="(min-width: 992px)">
  <source srcset="imagen768.png" media="(min-width: 768px)">
  <img src="imagen480.png" alt="MDN">
</picture>
```


Si cargamos la página vemos como mediante el comportamiento responsive implementado el código, van cambiando las imágenes. Permitiendo tener una web más optimizada que nos permita cargar imágenes por resolución con [HTML5](http://www.manualweb.net/html5).

