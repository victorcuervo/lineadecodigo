---
title: "Saber si un objeto tiene una propiedad con Javascript"
description: "Código que nos ayuda a saber si un objeto tiene una propiedad con Javascript."
date: 2010-12-12
updatedDate: 2026-01-11
tags: ["clase","hasownproperty"]
slug: javascript/clases/saber-si-un-objeto-tiene-una-propiedad-con-javascript
type: doc
topic: javascript
id: 857b3456-5b28-40ca-9173-b016349c4ef0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/tiene-propiedad.js
---

Si estamos trabajando con objetos en [Javascript](https://www.manualweb.net/javascript/), una de las cosas que nos puede ayudar es el saber si un determinado objeto tiene una propiedad en cuestión para poder acceder a ella. Y es que solo podremos saber si el objeto tiene [variables públicas](http://lineadecodigo.com/javascript/crear-un-objeto-en-javascript/), nunca [variables privadas](http://lineadecodigo.com/javascript/clase-con-atributos-privados-en-javascript/).


## Definir una clase en JavaScript


Lo primero que haremos será definir una clase e instanciar un objeto de esa clase:


```javascript
function Rectangulo(base) {
  this.base = base;
  var altura = 10;
}

var miRectangulo = new Rectangulo(5);
```


Vemos que el objeto tiene una propiedad **base** que es pública y otra que es **altura**, la cual es privada.


## Método .hasOwnProperty


Para saber si un objeto tiene una propiedad utilizamos el método `.hasOwnProperty`, el cual recibe como parámetro el nombre de la propiedad sobre la cual queremos conocer su existencia.


Así el código para saber si un objeto tiene una propiedad sería:


```javascript
console.log(miRectangulo.hasOwnProperty('base'));   // true
console.log(miRectangulo.hasOwnProperty('altura')); // false
console.log(miRectangulo.hasOwnProperty('area'));   // false
```


Al ejecutar el código veremos que obtenemos el valor `false` para **altura** (ya que es una propiedad privada) y para **área** (ya que no existe). En cambio veremos el valor de `true` para **base**.

