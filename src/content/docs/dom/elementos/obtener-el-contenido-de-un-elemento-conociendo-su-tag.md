---
title: "Obtener el contenido de un elemento conociendo su TAG"
description: "Se explica cómo obtener el contenido de un elemento conociendo su TAG usando la función getElementsByTagName en Javascript."
date: 2007-08-17
updatedDate: 2026-01-13
tags: ["getelementbyid","getelementsbytagname"]
slug: dom/elementos/obtener-el-contenido-de-un-elemento-conociendo-su-tag
author: victor_cuervo
type: doc
topic: dom
id: 2c5a2c94-a39d-4d12-ac34-f0408385f87a
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/dom/obtener-el-contenido-de-un-elemento-por-su-tag.html
---

Dentro del manejo del DOM de una página [HTML](http://www.manualweb.net/html), la función más utilizada suele ser [document.getElementById()](https://www.w3api.com/DOM/.getElementById(). Si bien, disponemos de otra serie de funciones que nos ayudarán a obtener el contenido de los elementos de la página. 


Este es el caso de [la función getElementsByTagName](https://www.w3api.com/DOM/.getElementsByTagName()), la cual recuperará un array de elementos que correspondan con la etiqueta pasada como parámetro. 


## Obtener elementos por su TAG


Así, por ejemplo, podríamos recuperar todas [las etiquetas de tipo A (anchor)](https://www.w3api.com/HTML/a/) mediante la siguiente [línea de código](http://lineadecodigo.com/):


```javascript
var enlaces = document.getElementsByTagName("a");
```


Una vez recuperado el array, simplemente tendremos que acceder a los elementos que lo conforman para poder acceder a [los objetos DOM](https://www.w3api.com/DOM/). 


En cada [objeto DOM](https://www.w3api.com/DOM/) podremos acceder a sus propiedades. Si hablamos de [la etiqueta A (anchor)](https://www.w3api.com/HTML/a/), podremos acceder al [destino del enlace href](https://www.w3api.com/HTML/a/href/), al nombre del enlace, etc.


## Recorrer los elementos


Si queremos recorrer todos los enlaces de la página, deberemos de utilizar el siguiente código:


```javascript
var enlaces = document.getElementsByTagName("a");
for (var i = 0; i < enlaces.length; i++) {
    console.log(enlaces[i].href);
    console.log(enlaces[i].text);
}
```

