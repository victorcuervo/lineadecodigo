---
layout: post
title: Mayor de dos números en Javascript con Math
excerpt: "Cómo calcular el mayor de dos números en Javascript con Math y así poder evitar el uso de estructuras selectivas if."
categories: Javascript
tags: [javascript básicos,javascript math]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Hoy tenemos un artículo muy sencillo pero muy útil para las personas que empiezan a desarrollar en Javascript. La idea es conocer cual es el mayor de dos números en [Javascript](https://www.manualweb.net/javascript/) con Math. Lo que nos permitirá no tener que recurrir a estructuras selectivas para poder realizar esta validación.


Y es que forma sencilla si tenemos que saber cuál es el mayor de dos números y que nos saldría directamente sería algo así


```javascript
let n1 = 5;
let n2 = 2;

if (n1>n2)
  console.log("El mayor de los números " + n1 + " y " + n2 + " es " + n1);
else if (n2>n1)
  console.log("El mayor de los números " + n1 + " y " + n2 + " es " + n2);
else
  console.log("Los números " + n1 + " y " + n2 + " son iguales");

```


Vemos cómo vamos enlazando [las estructuras selectivas de sentencias if](https://manualweb.net/javascript/estructuras-selectivas-javascript/) hasta que encontramos el número que es mayor de los dos. Primero preguntamos si el primer número es mayor que el segundo, si no si el segundo número es mayor que el primero y en último caso lo único que nos queda que sería que los números son iguales.


Este código es correcto pero nos acaba generando muchas líneas de código para acabar sabiendo cuál es el mayor de los dos números. Aunque tampoco es mala idea el ponerlo dentro de una función para poder ser reutilizado.


Es por ello que la idea es utilizar el objeto [`Math`](https://www.w3api.com/Javascript/Math/) y en concreto el método [`Math.max()`](https://www.w3api.com/Javascript/Math/max/). Este método que recibe una lista de números como parámetros nos puede servir para pasarle los dos números.


```javascript
Math.max(n1,n2);
```


El valor más alto de los dos será el que nos devuelva este método. Por lo que podríamos codificar algo así:


```javascript
console.log("El mayor de los números " + n1 + " y " + n2 
              + " es " + Math.max(n1,n2));
```


Vemos que es realmente sencillo el podemos conocer cual es el mayor de dos números en [Javascript](https://www.manualweb.net/javascript/) con Math.

