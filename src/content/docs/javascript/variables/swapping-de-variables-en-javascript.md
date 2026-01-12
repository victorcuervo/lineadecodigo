---
title: "Swapping de variables en Javascript"
description: "El swapping de variables en Javascript permite intercambiar valores de dos variables fácilmente utilizando una variable intermedia o desestructuración."
date: 2017-09-13
updatedDate: 2026-01-12
tags: ["Javascript Básicos","Javascript Variables","Javascript Arrays","Javascript Objetos"]
slug: javascript/variables/swapping-de-variables-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/swapping-variables.js
topic: javascript

---

El swapping de variables en [Javascript](https://www.manualweb.net/javascript/) es el proceso por el cual intercambiamos el valor de dos variables. En este caso vamos a ver cómo la sintaxis de desestructuración de [Javascript](https://www.manualweb.net/javascript/) nos permite hacer esto de una forma muy sencilla. Vamos a partir de que tenemos dos variables:


```javascript
let x = 10;
let y = 20;
```


La idea es que el valor de `x` aparezca en `y` y al revés. Para ello vamos a ver que tenemos dos formas de acometerlo: la primera será con una variable intermedia, la segunda mediante la desestructuración de variables. ## Variable intermedia


Este caso es el que nos sale de base. La idea sería apoyarnos en una variable intermedia, en este caso la denominaremos `z` la cual mantenga de forma temporal el valor de una de las dos variables y hagamos el cambio entre ellas. El código quedaría de la siguiente forma:


```javascript
let z = x;
x = y;
y = z;
```


Vemos que `z` ha mantenido temporalmente el valor de `x`


## Desestructuración de variables


En este caso vamos a utilizar para el swapping de variables en [Javascript](https://www.manualweb.net/javascript/) la capacidad que nos da el lenguaje para desestructurar objetos, [ya sean arrays](http://lineadecodigo.com/javascript/desestructurar-arrays-javascript/), objetos o un par de variables como es este caso. Lo que vamos a hacer es utilizar el operador `[]` como si las variables estuviesen en un array y le vamos a realizar una asignación, pero en este caso con las variables invertidas, los que nos ayudará en el swapping.


```javascript
[x, y] = [y, x];
```


Vemos que en este caso una única línea de código nos sirve para hacer el swapping de variables en [Javascript](https://www.manualweb.net/javascript/).

