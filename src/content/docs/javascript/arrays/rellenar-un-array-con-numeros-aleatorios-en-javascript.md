---
title: "Rellenar un array con números aleatorios en Javascript"
description: "Uso de la función .from del objeto Array para poder rellenar un array con números aleatorios en Javascript y mostrar el resultado por consola."
date: 2021-03-10
updatedDate: 2026-01-11
tags: ["array","funcion-arrow","console-log","math","from","random"]
slug: javascript/arrays/rellenar-un-array-con-numeros-aleatorios-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/arrays/rellenar-array-numeros-aleatorios.js
topic: javascript

---

Alguno podríais pensar que lo que explicábamos en [el artículo de cómo rellenar un array con números](http://lineadecodigo.com/javascript/rellenar-un-array-con-numeros-en-javascript/), a parte de la parte didáctica, no tendría mucha aplicabilidad ya que cargamos un array con el mismo número. Si que es verdad que los casos de uso son menos, pero para que le podáis sacar un verdadero partido vamos a ver cómo podemos **rellenar un array con números aleatorios** en [Javascript](http://www.manualweb.net/javascript).


De esta manera cada uno de los elementos del array que creemos por defecto será diferente. En este caso, en vez del método [`.fill()`](http://w3api.com/Javascript/Array/fill/), vamos a utilizar el método [`.from()`](http://www.w3api.com/Javascript/Array/from).


## Sintaxis del método .from()


Así que vamos a ver cual es la sintaxis del método [`.from()`](http://www.w3api.com/Javascript/Array/from):


```javascript
Array.from(arrayLike, mapFn, thisArg)
```


En este caso el primer parámetro **arrayLike** tiene que ser un elemento iterable que será el que convertiremos en un array. El segundo parámetro es **mapFn** que será una función de mapa que se ejecutará por cada elemento del array. Este segundo parámetro jugará un papel principal a la hora de rellenar los elementos del array. Y **thisArg** es el valor a utilizar como this en la función del mapa.


## Creando el array iterable


Una vez que conocemos cómo funciona el método [`.from()`](http://www.w3api.com/Javascript/Array/from) vamos a ver cómo tenemos que ir rellenándolo. Lo primero será darle un elemento iterable que tenga diez elementos. Así que podemos crear un array con los 10 elementos vacíos:


```javascript
[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
```


Pero lo vamos a hacer de una forma diferente y lo escribiremos de una manera abreviada con una instanciación del array de la siguiente forma:


```javascript
Array(10)
```


## Función de mapa con números aleatorios


Ahora nos centraremos en la función de mapa. Esta función es la que va a devolver el valor a asignar a cada una de las posiciones del array. Es por ello que es aquí dónde devolvemos el número aleatorio:


```javascript
function() {
  return Math.random();
}
```


Para el número aleatorio hemos utilizado el método [`.random()`](http://w3api.com/Javascript/Math/random) del objeto [`Math`](http://w3api.com/Javascript/Math) tal y como [explicamos en cómo generar números aleatorios en Javascript](http://lineadecodigo.com/javascript/numero-aleatorio-javascript/).


Esta función la podemos abreviar con el operador arrow de la siguiente forma:


```javascript
() => Math.random()
```


## Código completo


Así, si componemos nuestro método [`.from()`](http://www.w3api.com/Javascript/Array/from) nos quedará de la siguiente forma:


```javascript
let miarray = Array.from(Array(10), () => Math.random());
```


Ya solo nos quedará mostrar el array relleno con los números aleatorios:


```javascript
console.log(miarray);
```


Así que hemos visto que con una sola función y un poco de habilidad hemos conseguido **rellenar un array con números aleatorios** en [Javascript](http://www.manualweb.net/javascript).

