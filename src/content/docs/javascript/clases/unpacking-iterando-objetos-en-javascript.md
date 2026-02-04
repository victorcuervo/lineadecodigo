---
title: "Unpacking iterando objetos en Javascript"
description: "Se explica cómo realizar unpacking iterando objetos en Javascript utilizando un array de libros."
date: 2017-09-29
updatedDate: 2026-01-13
tags: ["unpacking","for-of","objetos","array"]
slug: javascript/clases/unpacking-iterando-objetos-en-javascript
type: doc
topic: javascript
id: 2c8a9dfb-adca-8165-904a-f0a824aec610
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/unpacking-iterar-objetos.js
---

Hemos visto múltiples formas de realizar un unpacking de objetos con [Javascript](https://www.manualweb.net/javascript/): [objetos sencillos](http://lineadecodigo.com/javascript/unpacking-objetos-javascript/), [objetos anidados](http://lineadecodigo.com/javascript/unpacking-objetos-anidados-javascript/),... pero, ¿qué sucede si dentro hay un array de objetos? En este caso vamos a ver cómo podemos realizar un unpacking iterando objetos en [Javascript](https://www.manualweb.net/javascript/).


## Definir el objeto con array


Lo primero será definir un objeto que tenga un array, por ejemplo el objeto autor ya utilizado en otras ocasiones:


```javascript
const autor = {
  nombre: "Miguel de Cervantes",
  libros: [
    { titulo: "Don Quijote de la Mancha", año: 1605 },
    { titulo: "Novelas Ejemplares", año: 1613 },
    { titulo: "Los trabajos de Persiles y Sigismunda", año: 1617 }
  ]
};
```


Vemos que la propiedad `libros` contiene un conjunto de objetos representando los libros del array.


## Unpacking simple


Si utilizamos un unpacking de objetos y hacemos lo siguiente:


```javascript
const { libros: [primerLibro] } = autor;
console.log(primerLibro);
```


Lo que vamos a conseguir es obtener el primer valor del objeto anidado.


## Unpacking iterando objetos


Si bien, a nosotros lo que nos interesa es hacer un unpacking iterando objetos en [Javascript](https://www.manualweb.net/javascript/) para poder mostrar el valor de todos los libros del array. Para poder hacer una iteración nos apoyamos en la sentencia `for...of`. Dentro de la sentencia `for...of` vamos a utilizar el unpacking del objeto. La estructura de código será la siguiente:


```javascript
for (const {propiedad1, propiedad2} of array) {
  // código
}
```


Así, si queremos mostrar todos los libros del array escribiremos:


```javascript
const { libros } = autor;
for (const { titulo, año } of libros) {
  console.log(`${titulo} (${año})`);
}
```


Vemos que hemos hecho una primera desestructuración de la propiedad `libros` que es la que tiene el array y que luego se la hemos pasado a la estructura `for...of`. De esta forma hemos conseguido hacer un unpacking iterando objetos en [Javascript](https://www.manualweb.net/javascript/).

