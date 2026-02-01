---
title: "Recorrer un Array con for of en TypeScript"
description: "Descubre cómo recorrer un Array con for of en TypeScript de manera sencilla y efectiva, optimizando tu código al máximo y mejorando tu flujo de trabajo."
date: 2017-09-04
updatedDate: 2026-02-01
tags: ["array","for-of","for-in"]
slug: typescript/arrays/recorrer-un-array-con-for-of-en-typescript
author: victor_cuervo
type: doc
id: a74d6f6f-292e-4caf-8eb0-42f2fe88ded9
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/array/recorrer-array.ts
---

Vamos a ver cómo podemos recorrer un Array con `for of` en [TypeScript](https://www.manualweb.net/typescript/). La estructura `for of` nos permite recorrer los elementos de un array de una forma sencilla.


## Definir un Array


Lo primero será definir un Array en [TypeScript](https://www.manualweb.net/typescript/):


```typescript
let miarray: number[] = [1,2,3,4,5];
```


En este caso hemos definido un array de números.


## Estructura for of


Ahora será el conocer la estructura `for of`:


```typescript
for (let elemento of array) { ... }
```


En cada una de las iteraciones sobre el array tenemos el contenido los elementos del array dentro de la variable `elemento`.


## Recorrer el Array con for of


Para codificar el código que nos ayude a recorrer un array con `for of` en [TypeScript](https://www.manualweb.net/typescript/) escribiremos lo siguiente:


```typescript
for (let numero of miarray){
  console.log(numero);
}
```


## Diferencia con for in


Hay que tener en cuenta que también tenemos la estructura `for in` la cual tiene la diferencia de que recorre las claves del array, no los elementos.


```typescript
for (let elemento in array) { ... }
```


Así el código para poder recorrer el array y mostrar los elementos sería un código de la siguiente forma:


```typescript
for (let clave in miarray){
  console.log(miarray[clave]);
}
```


Ya veis lo sencillo que es recorrer un Array con for of en [TypeScript](https://www.manualweb.net/typescript/).

