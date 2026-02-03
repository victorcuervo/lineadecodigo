---
title: "Hipotenusa en Javascript"
description: "Calcular una hipotenusa en javascript mediante el método Math.hypot o creando un polyfill me"
date: 2015-06-19
updatedDate: 2026-01-11
tags: ["pow","sqrt","hypot","polyfill","arguments","math"]
slug: javascript/matematicos/hipotenusa-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 45552bd6-6e27-4ed4-bf3a-988a1a269041
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/matematicas/formulas.js
---

Siguiendo con un conjunto de ejemplos matemáticos vamos a ver como calcular una hipotenusa en [Javascript](https://www.manualweb.net/javascript/). La buena noticia a la hora de calcular la hipotenusa en Javascript es que en **ECMAScript 6** está propuesta la función `Math.hypot` la cual ya implementan algunos de los motores Javascript.


Así sería tan simple como escribir lo siguiente:


```javascript
Math.hypot(2,3);
```


Y tendríamos calculada la hipotenusa de un triángulo cuyos catetos sean 2 y 3.


## El Polyfill para Math.hypot


La mala noticia es que no podemos asumir que el entorno en que se ejecute nuestro código tenga un interprete de **ECMAScript 6** (lo más probable es que sea **ECMAScript 5**) y por lo tanto debamos de tomar una serie de precauciones.


Estas precauciones pueden pasar por crear un **polyfill**, es decir, utilizar la función `Math.hypot` en el caso de que exista, y si no utilizar nuestra propia implementación.


De esta forma la clase de formulas [Javascript](https://www.manualweb.net/javascript/) que tenemos podría tener un método como el siguiente:


```javascript
Math.hypot = Math.hypot || function() {
  // implementación propia
}
```


Lo que estamos haciendo es indicar que usamos la función `Math.hypot` y si no existe, en ese caso, vamos a implementar la función.


## Fórmula de la Hipotenusa


Para implementar una hipotenusa en [Javascript](https://www.manualweb.net/javascript/) lo que tenemos que saber es que la hipotenusa es la raíz cuadrada de la suma de los catetos al cuadrado. Es decir, la famosa formula de:


```javascript

```


h = √(c1² + c2²)


```javascript

```


Ahora, para calcular la hipotenusa en [Javascript](https://www.manualweb.net/javascript/) deberemos de saber dos cosas.


La primera es que para poder realizar una raíz cuadrada tenemos el método [Math.sqrt](https://www.w3api.com/Javascript/Math/ceil/.sqrt()), al cual pasaremos el valor del cual queramos conocer su raíz cuadrada.


Por otro lado tenemos que saber como elevar un cateto al cuadrado. Para ello podemos hacerlo de dos formas: multiplicando el número por si mismo o utilizar [el método Math.pow](https://www.w3api.com/Javascript/Math/ceil/.pow()). El [método Math.pow](https://www.w3api.com/Javascript/Math/ceil/.pow()) recibe un primer parámetro que es la base (nuestro cateto) y el segundo será el exponente (que será un 2).


De esta forma la formula para calcular la hipotenusa en [Javascript](https://www.manualweb.net/javascript/) tendremos:


```javascript
Math.sqrt(Math.pow(c1,2) + Math.pow(c2,2));
```


Dónde `c1` y `c2` son los catetos.


## Implementación Completa del Polyfill


En el caso de que queramos crear el polyfill de la función `hypot` de **ECMAScript 6** hay que tener en cuenta que está realmente puede recibir N parámetros y que eleva todos al cuadrado, los suma y calcula la raíz cuadrada.


De esta forma el código será de la siguiente forma:


```javascript
Math.hypot = Math.hypot || function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += Math.pow(arguments[i], 2);
  }
  return Math.sqrt(sum);
}
```


Vemos que utilizamos [el objeto arguments](https://www.w3api.com/Javascript/arguments/) el cual representa los N parámetros enviados al método hipotenusa.

