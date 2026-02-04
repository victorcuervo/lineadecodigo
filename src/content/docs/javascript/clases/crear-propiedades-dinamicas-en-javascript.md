---
title: "Crear propiedades dinámicas en Javascript"
description: "Cómo poder crear propiedades dinámicas en Javascript y dotar así de nueva funcionalidad a nuestros objetos."
date: 2010-09-26
updatedDate: 2026-01-12
tags: ["objeto","prototype"]
slug: javascript/clases/crear-propiedades-dinamicas-en-javascript
type: doc
topic: javascript
id: 2c13128f-a25f-4782-a0b3-f88c0e03ec9e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/crear-propiedades-dinamicas.js
---

Una de las cosas que podemos hacer con los objetos en [Javascript](https://www.manualweb.net/javascript/) es **crear propiedades de forma dinámica**. Por ejemplo, podemos tener una definición de objeto persona con nombre, apellido y edad.


```javascript
function Persona(nombre,apellidos,edad) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.edad = edad;
}

var p1 = new Persona("Luis","Jiménez",23);
```


## Añadir propiedad a una instancia


Sobre esta definición estática añadiremos una nueva propiedad de forma dinámica. Es decir, dinámicamente añadiremos la propiedad ciudad. Esto lo podríamos hacer de la siguiente forma:


```javascript
p1.ciudad = "Avila";
```


El problema de utilizar esta forma de crear propiedades dinámicas en [Javascript](https://www.manualweb.net/javascript/) es que solo será para la instancia a la que se lo hemos añadido. Así, el siguiente código:


```javascript
var p2 = new Persona("María","Gutierrez",35);
document.write(p2.ciudad);
```


Nos devolvería `undefined` ya que la propiedad ciudad solo se añadió para p1.


## Añadir propiedad a todas las instancias


Si queremos crear una propiedad dinámica que sea aplicable a todas las instancias deberemos de utilizar la sentencia **prototype** de la siguiente forma:


```javascript
Persona.prototype.ciudad = "Avila";
```


Así el siguiente código:


```javascript
var p2 = new Persona("María","Gutierrez",35);
document.write(p2.ciudad);
```


Ya devolverá "Avila" como respuesta.

