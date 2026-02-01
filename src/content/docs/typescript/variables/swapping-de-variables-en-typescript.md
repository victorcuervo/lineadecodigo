---
title: "Swapping de variables en TypeScript"
description: "Aprende a realizar el swapping de variables en TypeScript de manera sencilla y sin variables intermedias, optimizando tu código y mejorando su legibilidad."
date: 2017-09-15
updatedDate: 2026-02-01
tags: ["let","variable","swapping"]
slug: typescript/variables/swapping-de-variables-en-typescript
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8108-bdad-f63ed8ce5bc4
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/swapping-variables.ts
---

Desde que se definió ECMAScript 2014 existe la capacidad de realizar una desestructuración de un array, es decir, el poder tratar a los valores de un array como si fuesen variables independientes. Esto es lo que nos permite realizar un swapping de variables en [TypeScript](https://www.manualweb.net/typescript/), o lo que es lo mismo, intercambiar el valor de dos variables sin necesidad de una variable intermedia.


## Definir variables con desestructuración


Lo primero será definir las dos variables. Para ello nos basamos en una estructura de array:


```typescript
let [x,y] = [1,2];
```


Lo que estamos haciendo con esta sentencia es definir una variable `x` con un valor 1 y una variable `y` con un valor 2. Esta definición la hacemos con el array gracias a la técnica de desestructuración de arrays.


## Realizar el swapping de variables


Para hacer el swapping de variables en [TypeScript](https://www.manualweb.net/typescript/) nos volvemos a apoyar en la misma técnica y realizamos una asignación de las variables, pero en orden inverso. El código sería el siguiente:


```typescript
[x,y] = [y,x];
```


Vemos que al hacer el swapping no estamos utilizando ninguna variable intermedia, si no una simple asignación. En este momento la variable `x` valdrá 2 y la variable `y` valdrá 1.


## Comprobar el resultado


Esto lo puedes comprobar volcando su contenido por consola:


```typescript
console.log(x);
console.log(y);
```


De esta forma tan sencilla y rápida habremos conseguido hacer un swapping de variables en [TypeScript](https://www.manualweb.net/typescript/).

