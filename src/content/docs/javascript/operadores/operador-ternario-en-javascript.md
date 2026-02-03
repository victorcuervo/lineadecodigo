---
title: "Operador ternario en JavaScript"
description: "Explicación sobre lo que es el operador ternario en JavaScript y qué posibles utilizaciones tenemos de este operador condicional."
date: 2012-09-07
updatedDate: 2026-01-05
tags: ["if","operadores","operador-ternario"]
slug: javascript/operadores/operador-ternario-en-javascript
author: victor_cuervo
type: doc
id: 94aaddb0-0fb9-46b7-9ba4-a106cc8f2cea
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/operador-ternario-en-javascript.html
---

## ¿Qué son los operadores ternarios en JavaScript?


El operador ternario en [JavaScript](http://www.manualweb.net/javascript/) es un [operador condicional](https://manualweb.net/javascript/otros-operadores-javascript/) que nos sirve para escribir el código de una sentencia if de una forma más sencilla, consiguiendo el mismo resultado, y que nos puede ser muy útil en el desarrollo web.


Imaginemos que tenemos un ejemplo que nos calcula cuál es el [mayor de dos números en JavaScript](https://lineadecodigo.com/javascript/mayor-de-dos-numeros-en-javascript/). El código para codificarlo sería sencillo, como comprobamos a continuación.


```javascript
let x = 10;
let y = 8;

if (x>y)
  console.log("El mayor de los dos números es " + x);
else
  console.log("El mayor de los dos números es " + y);
```


Inicialmente declaramos las dos variable que vamos a comparar y luego pasamos a codificar nuestra [estructura de control if-then-else](https://manualweb.net/javascript/estructuras-selectivas-javascript/#if-then-else).


Vemos que tenemos una [estructura de control if-then-else](https://manualweb.net/javascript/estructuras-selectivas-javascript/#if-then-else) que ejecuta la primera sentencia en caso de que la validación correcta y la sentencia `else` en caso de que la validación de `if` sea incorrecta. El operador ternario en [JavaScript](http://www.manualweb.net/javascript/) nos permite hacer esto en una sola línea de código.


## Estructura de un operador ternario en Javascript


La estructura del operador ternario es la siguiente:


```javascript
resultado = (condicion)?valor1:valor2;
```


Vemos que con este [operador condicional](https://manualweb.net/javascript/otros-operadores-javascript/) tenemos una condición booleana que va entre paréntesis, seguido de un símbolo cierre interrogación  `?` que le asocia el primer valor y luego un símbolo de dos puntos `:` que le asigna el segundo valor.


EL funcionamiento será que si la condición es verdadera, se asigna el valor 1 como resultado, en caso contrario, se asigna el valor 2. 


## Ejemplo de uso de operadores ternarios


Si pasamos a realizar el código que nos controla el mayor de dos números mediante una estructura de operador ternario escribiremos las siguientes sentencias de código [JavaScript](https://www.manualweb.net/javascript/):


```javascript
let x = 10;
let y = 8;

mayor = (x>y)?x:y;
console.log("El mayor de los dos números es " + mayor);
```


Asignamos el valor sobre una variable que llamamos `mayor` y solo nos queda mostrar un mensaje con el valor.


Vemos que la cantidad de código [JavaScript](https://www.manualweb.net/javascript/) a escribir con este [operador condicional](https://manualweb.net/javascript/otros-operadores-javascript/) es menor que cuando utilizábamos la estructura de control `if`. Seguro que la utilizarás mucho dentro de tus desarrollos web.

