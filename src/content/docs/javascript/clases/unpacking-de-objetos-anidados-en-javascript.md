---
title: "Unpacking de objetos anidados en Javascript"
description: ""
date: 2017-09-27
updatedDate: 2026-01-12
tags: ["objeto","unpacking","array"]
slug: javascript/clases/unpacking-de-objetos-anidados-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 42ac5262-f9ec-4245-bf69-a83c0b86f8f8
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/objetos/unpacking-objetos-anidados.js
---

Ya hemos visto en un artículo cómo podemos [realizar un unpacking de objetos con Javascript](http://lineadecodigo.com/javascript/unpacking-objetos-javascript/). En este caso vamos a ver cómo podemos hacer un **unpacking de objetos anidados** en [Javascript](https://www.manualweb.net/javascript/). Y es que la complejidad del objeto puede ser aquella que queramos.


## Objeto anidado


En este caso vamos a partir de un objeto anidado:


```javascript
let autor = {
  nombre: "Miguel de Cervantes",
  pais: "España",
  libros: [
    {titulo: "Don Quijote de la Mancha", anio: 1605},
    {titulo: "Novelas Ejemplares", anio: 1613}
  ]
};
```


Vemos que el objeto definido en [Javascript](https://www.manualweb.net/javascript/) contiene un array con objetos anidados. En este caso el objeto representa a un autor y los objetos anidados los libros que ha escrito.


## Notación de objetos


Si queremos acceder a estos elementos mediante notación de objetos escribiremos mediante la estructura `objeto.propiedad`:


```javascript
console.log(autor.nombre);
console.log(autor.libros[0].titulo);
```


## Unpacking de objetos


Pero para manejar las variables de una forma más sencilla vamos a realizar un unpacking de objetos anidados en Javascript. Para acceder a una propiedad que no esté anidada la estructura será:


```javascript
let {propiedad} = objeto;
```


Por ejemplo, si queremos obtener el nombre escribiremos:


```javascript
let {nombre} = autor;
console.log(nombre); // Miguel de Cervantes
```


## Unpacking de propiedades anidadas


En el caso de que queramos acceder a una propiedad que esté anidada deberemos seguir la siguiente estructura:


```javascript
let {propiedad: {propiedadAnidada}} = objeto;
```


Y en el caso de que se encuentre dentro de un array, como es el caso del objeto `autor` será con el operador `[]`:


```javascript
let {propiedad: [{propiedadAnidada}]} = objeto;
```


Así, para obtener el título de un libro escribiremos el siguiente código:


```javascript
let {libros: [{titulo}]} = autor;
console.log(titulo); // Don Quijote de la Mancha
```


De esta forma habremos conseguido realizar un unpacking de objetos anidados en [Javascript](https://www.manualweb.net/javascript/).

