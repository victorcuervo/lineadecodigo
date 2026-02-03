---
title: "Crear métodos dinámicamente en Javascript"
description: "Cómo poder crear métodos dinámicamente en Javascript para asignar más funcionalidades a una clase."
date: 2010-09-27
updatedDate: 2026-01-13
tags: ["prototype","clase","metodo","objeto","function"]
slug: javascript/clases/crear-metodos-dinamicamente-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: efe8917b-fddb-48fe-8763-144ed4186d71
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/crear-metodos-dinamicamente.js
---

Si ayer veíamos que podíamos [crear propiedades dinámicas en Javascript](http://lineadecodigo.com/javascript/crear-propiedades-dinamicas-en-javascript/) hoy veremos como crear métodos dinámicamente en [Javascript](https://www.manualweb.net/java/). Y es que el procedimiento es el mismo para este caso y volveremos a apoyarnos en la sentencia **prototype** para poder crear métodos dinámicamente.


## Definir la clase


Lo primero definir una clase... volvemos a utilizar [nuestra clase rectángulo](http://lineadecodigo.com/javascript/crear-un-objeto-con-metodos-en-javascript/):


```javascript
function Rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
}
```


## Instanciar los objetos


E instanciamos dos elementos de la clase rectángulo:


```javascript
var rectangulo1 = new Rectangulo(2, 3);
var rectangulo2 = new Rectangulo(4, 2);
```


En este momento solo podemos acceder a las propiedades **base** y **altura**.


## Crear el método dinámicamente


Así que pasamos a crear un método `calcularArea` dinámicamente:


```javascript
Rectangulo.prototype.calcularArea = function() {
  return this.base * this.altura;
}
```


Vemos que **hemos utilizado la sentencia prototype**, con lo cual conseguimos que se defina dinámicamente el método para todas las instancias de rectángulo. Si no utilizasemos prototype se definiría el método dinámicamente solo para la instancia a la que se lo aplicásemos.


## Ejecutar el método


Ahora ya podemos ejecutar el método sobre las dos instancias del objeto:


```javascript
console.log(rectangulo1.calcularArea());
console.log(rectangulo2.calcularArea());
```

