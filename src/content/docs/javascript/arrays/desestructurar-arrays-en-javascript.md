---
title: "Desestructurar arrays en Javascript"
description: "Desestructurar arrays en Javascript nos permite acceder a los elementos del mismo mediante variables sencillas, facilitando su manipulación."
date: 2017-09-12
updatedDate: 2026-01-11
tags: ["array","variables"]
slug: javascript/arrays/desestructurar-arrays-en-javascript
author: victor_cuervo
type: doc
id: 68b2a2d4-cd95-4fd0-808b-bb7dbf508eaf
download: https://github.com/victorcuervo/lineadecodigo_javascript
---

El acto de **desestructurar arrays** en [Javascript](https://www.manualweb.net/javascript/) es el proceso por el cual podemos convertir el contenido de un array en variables simples. De esta manera podemos acceder al contenido del array de una forma sencilla.


## Definir un array


Lo primero será partir de un array:


```javascript
var array = [1, 2, 3, 4, 5];
```


## Desestructurar el array


Ahora la idea es convertir esos elementos en variables. Para ello la sentencia que nos permite desestructurar es la siguiente:


```javascript
var [a, b, c, d, e] = array;
```


El número de variables con las que queramos desestructurar el array dependerá de nuestras necesidades. Por ejemplo, si queremos obtener los dos primeros elementos codificaremos lo siguiente:


```javascript
var [a, b] = array;
```


Por lo que ahora podemos utilizar las variables `a` y `b` de forma individual y ellas contendrán los dos primeros valores del array.


```javascript
console.log(a); // 1
console.log(b); // 2
```


## Usar el resto de elementos


En el proceso de **desestructurar arrays** en [Javascript](https://www.manualweb.net/javascript/) podemos quedarnos con el resto de elementos del array en una nueva variable. Para ello utilizamos el concepto de `resto`. El código será el siguiente:


```javascript
var [a, b, ...resto] = array;
```


En la variable `resto` se queda el resto de elementos del array. Lo podemos comprobar mostrándolo por consola.


```javascript
console.log(resto); // [3, 4, 5]
```


Vemos que **desestructurar arrays** en [Javascript](https://www.manualweb.net/javascript/) nos permite de una forma muy sencilla acceder y manipular sus elementos.

