---
title: "Reemplazar por posición con Javascript"
description: "Se explica cómo reemplazar por posición con Javascript creando un prototipo de la función replaceAt."
date: 2021-10-01
updatedDate: 2026-01-12
tags: ["string","replaceat","substr"]
slug: javascript/cadenas/reemplazar-por-posicion-con-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/cadenas/reemplazar-caracter.js
topic: javascript

---

La [función replace en Javascript nos permite reemplazar una cadena por otra](https://lineadecodigo.com/javascript/funcion-replace-en-javascript/), ya sea utilizando cadenas de texto o expresiones regulares. Si bien no nos ofrece indicar una posición concreta para poder reemplazar un elemento por otro. Así que vamos a ver cómo podemos reemplazar por posición con [Javascript.](https://www.manualweb.net/javascript/)


## Crear el prototipo replaceAt


Lo que vamos a crear es un prototipo sobre el propio objeto [`String`](http://w3api.com/Javascript/String/) para que podamos aplicar la función reemplazando por posición directamente sobre una cadena de texto. De esta manera vamos a crear una función que llamaremos `replaceAt()` la cual reciba dos parámetros. El primero será la posición de la cadena en la cual queremos realizar el reemplazo y por otro el contenido que queremos poner en dicha posición. 


Así, nuestra función `.replaceAt()` se prototipará sobre el objeto [`String`](http://w3api.com/Javascript/String/) de [Javascript](https://www.manualweb.net/javascript/) de la siguiente forma:


```javascript
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
```


## Implementación de la función


La implementación de nuestra función `.replaceAt()` lo que hará será concatenar 3 cadenas. La primera es la que va desde la posición inicial a la posición en la que se quiere hacer la sustitución. Para ello utilizamos la función [`.substr()`](http://w3api.com/Javascript/String/substr) de las cadenas [Javascript](https://www.manualweb.net/javascript/). 


La segunda cadena que concatenaremos será la nueva cadena que queremos meter y, por último, la última cadena que concatenaremos será desde la posición del índice más el tamaño del contenido que hemos insertado hasta el final de la cadena original. La codificación de concatenación será de la siguiente forma:


```javascript
this.substr(0, index) + replacement + this.substr(index + replacement.length)
```


## Usar la función replaceAt


Ahora ya nos queda invocarla directamente sobre una cadena. Así que definimos una cadena:


```javascript
var cadena = "Hola Mundo";
```


Y sobre dicha cadena podemos invocar a la función `.replaceAt()` para poder reemplazar por posición con [Javascript](https://www.manualweb.net/javascript/):


```javascript
cadena = cadena.replaceAt(5, "JavaScript");
console.log(cadena); // Muestra: Hola JavaScript
```


De esta forma ya podemos utilizar la función dentro de nuestro código fuente de forma sencilla.

