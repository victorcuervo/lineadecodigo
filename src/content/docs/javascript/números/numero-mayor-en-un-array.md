---
title: "Número mayor en un Array"
description: "Código que nos enseña a sacar el número mayor en un array mediante el método Math.max() y el uso de la sintaxis extendida o spread."
date: 2023-10-02
updatedDate: 2026-01-05
tags: ["array","math","max"]
slug: javascript/numeros/numero-mayor-en-un-array
author: victor_cuervo
type: doc
id: a7b77072-4ae5-408c-a2e3-93c51b8d5ff9
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/numeros/mayor-numeros-array.js
---

Seguro que alguna vez te has enfrentado al problema de tener que sacar el número mayor en un array. Y esto sucede en diferentes situaciones y en múltiples lenguajes de programación. En el caso de este artículo vamos a ver cómo podemos identificar el número mayor en un array con [Javascript](https://www.manualweb.net/javascript/). Vamos a ello.


Lo primero será definir un array de números. Algo tan sencillo como utilizar los corchetes con una lista de números y asignárselo a una variable. Que quedaría de la siguiente manera:


```javascript
let numeros = [5,2,4,7,14];
```


Ahora podríamos enfocar la solución del problema recorriendo los números y buscando aquel de mayor valor mediante una comparación de los mismos. Si bien, en este ejemplo lo vamos a hacer más sencillo y para ello nos vamos a apoyar en el objeto [`Math`](https://w3api.com/Javascript/Math/) de [Javascript](https://www.manualweb.net/javascript/). Y en concreto en el método [`Math.max()`](https://w3api.com/Javascript/Math/max/)


```javascript
Math.max([value1[, value2[, ...]]])
```


El método [`Math.max()`](https://w3api.com/Javascript/Math/max/) espera que le pasemos una lista de valores y nos devolverá aquel de mayor valor. Es decir, que lo tendríamos que invocar de la siguiente manera:


```javascript
Math.max(5,2,4,7,14);
```


Pero espera. Hemos dicho que queremos sacar el número mayor en un array con [Javascript](https://www.manualweb.net/javascript/). Es decir, que partimos de un array y el método [`Math.max()`](https://w3api.com/Javascript/Math/max/) espera una lista de valores.


Entonces, ¿podemos pasarle directamente el array como valor?


```javascript
Math.max(numeros);
```


La respuesta en NO. No podemos pasarle el array ya que tiene que ser una lista de elementos.


Es aquí cuando podemos recurrir a lo que se denomina **sintaxis extendida o spread** sobre el array, que es un elemento iterable. Esta **sintaxis extendida o spread** es muy común a la hora de invocar funciones.  Consiste en anteponer tres puntos a la variable iterable.


```javascript
...numeros
```


De esta forma en Javascript se convertirá automáticamente el array en una lista de números y podremos invocar al método [`Math.max()`](https://w3api.com/Javascript/Math/max/) de la siguiente manera:


```javascript
Math.max(...numeros)
```


Si lo queremos dejar bonito para presentar podemos escribir lo siguiente:


```javascript
console.log("El mayor de los números " + numeros.toString() + " es " + Math.max(...numeros));
```


Así habremos conseguido sacar el número mayor en un array mediante [Javascript](https://www.manualweb.net/javascript/).

