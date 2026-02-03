---
title: "Rellenar un array con números en Javascript"
description: "Se explica cómo rellenar un array con números en Javascript utilizando el método fill de manera sencilla y eficiente."
date: 2021-03-08
updatedDate: 2026-01-11
tags: ["array","fill","foreach"]
slug: javascript/arrays/rellenar-un-array-con-numeros-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 666cce8a-b295-4a53-9c9d-8d07a18a10c3
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/arrays/rellenar-array.js
---

Muchas veces estoy utilizando algún array de ejemplo para los artículos y siempre [el primer paso es inicializar el array](http://lineadecodigo.com/javascript/inicializar-un-array-en-javascript/). Así que hoy vamos a ver una sencilla forma de hacerlo y ver cómo podemos **rellenar un array con números** en [Javascript](http://www.manualweb.net/javascript).


La idea es rellenarlo con un mismo número las veces que queramos. Es decir, que si quiero tener un array dónde aparezca el número 2 unas 10 veces, no tenga que escribir algo así:


```javascript
let miarray = [2,2,2,2,2,2,2,2,2,2];
```


## Crear el array


Lo primero va a ser el crear un array de las posiciones que queramos para ello invocamos al constructor de la clase `Array` indicando como parámetro el número de elementos que el array va a tener:


```javascript
let miarray = new Array(10);
```


En este caso tendremos un array preparado para albergar 10 elementos pero que estará vacío. Es por ello que si lo recorremos veremos que no hay ningún elemento.


## Rellenar el array con el método fill()


El siguiente paso será el rellenar el array con números. En este caso vamos rellenarlo con el número 2 en sus 10 posiciones. Para ello tenemos que conocer el método [`.fill()`](http://w3api.com/Javascript/Array/fill/) del objeto `Array`.


La sintaxis del método [`.fill()`](http://w3api.com/Javascript/Array/fill/) es la siguiente:


```javascript
array.fill(valor, inicio, fin)
```


En su sintaxis vemos que el primer parámetro es el **valor con el que queremos rellenar el array**. El segundo parámetro será la **posición inicial** desde dónde queremos rellenarlo, es decir no es necesario que rellenemos el array por completo si no que podemos hacerlo de forma parcial. Y el último parámetro será la **posición final** dónde acabaremos de rellenar el array.


Este parámetro es opcional y en el caso de no aparecer toma como valor el tamaño del array, es decir, rellenará hasta la última posición.


## Ejemplo completo


Así, que para poder rellenar nuestro array inicial con las 10 posiciones con el valor 2 escribiremos lo siguiente:


```javascript
let miarray = new Array(10);
miarray.fill(2,0,10);
```


Aunque podíamos haber obviado el último parámetro y escribir lo siguiente:


```javascript
let miarray = new Array(10);
miarray.fill(2,0);
```


Ahora, si recorremos el array para mostrar sus valores, por ejemplo [mediante un bucle for each](http://lineadecodigo.com/javascript/bucle-foreach-en-javascript/):


```javascript
miarray.forEach(function(valor){
  console.log(valor);
});
```


Veremos que el resultado por consola es el siguiente:


```shell
2
2
2
2
2
2
2
2
2
2
```


De esta forma tan sencilla y utilizando el método [`.fill()`](http://w3api.com/Javascript/Array/fill/) habremos conseguido rellenar un array con números Javascript.

