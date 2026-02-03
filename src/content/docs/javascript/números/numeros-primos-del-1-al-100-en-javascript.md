---
title: "Números primos del 1 al 100 en Javascript"
description: "Se explica cómo generar los números primos del 1 al 100 en Javascript mediante un bucle y un método específico."
date: 2021-02-04
updatedDate: 2026-01-11
tags: ["math","funciones","bucles","for"]
slug: javascript/numeros/numeros-primos-del-1-al-100-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 669d7dd9-36a3-4b6c-92cf-5a1f88f8b6f3
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/matematicas/esPrimo.js
---

En este ejemplo vamos a ver cómo podemos utilizar un bucle para conocer los números primos del 1 al 100 en [Javascript](http://www.manualweb.net/javascript). Así que pongámonos manos a obra.


## ¿Qué es un número primo?


Lo primero será saber **qué es un número primo.** Así, un número primo es aquel que solo es divisible por si mismo y por la unidad. Es por ello que lo primero que haremos será **crear un método que nos permita saber si es primo**. 


Para ello dado un número iremos recorriendo todos los números hasta el 2 para ver si es divisible por alguno de ellos. ¿Cómo sabemos si es divisible? Pues porque la división nos da un resto de 0. El operador que nos permite calcular un resto en [Javascript](http://www.manualweb.net/javascript) es el `%`.


De esta manera el código que hace esa validación es el siguiente:


```javascript
if (numero % i === 0) {
  return false;
}
```


Y como tenemos que ir pasando por todos los números desde el número 2 hasta el número evaluado, creamos un bucle:


```javascript
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    return false;
  }
}
```


## Optimización del código


En este punto podemos hacer una optimización y es que podemos iterar desde el número 2 hasta la raíz cuadrada del número de tal manera que optimizaríamos la complejidad ciclomática del método. Para poder calcular la raíz cuadrada del número nos apoyamos en el método `Math.sqrt()` del objeto `Math`. 


De tal manera que el código nos quedaría de la siguiente forma:


```javascript
for (let i = 2; i <= Math.sqrt(numero); i++) {
  if (numero % i === 0) {
    return false;
  }
}
```


## Creando el método esPrimo()


Ahora crearemos el método **esPrimo()** que recibirá el número del cual queremos saber si es primo o no, cosa que indicaremos devolviendo **un valor booleano**.


Si el número pasado es 1 o menor que 1 devolveremos false. La función nos quedaría de la siguiente forma:


```javascript
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  
  return true;
}
```


## Mostrando los números primos del 1 al 100


Ahora, para poder mostrar los números primos del 1 al 100 en [Javascript](http://www.manualweb.net/javascript) lo que haremos será construir un bucle que recorra los 100 primeros números y que vaya llamando a la función **esPrimo().**


```javascript
for (let i = 1; i <= 100; i++) {
  if (esPrimo(i)) {
    console.log(i);
  }
}
```


De esta forma ya habremos conseguido mostrar todos los números primos.

