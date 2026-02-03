---
title: "Arrays en Typescript"
description: "Aprende a manejar arrays en TypeScript definiéndolos, accediendo a sus elementos y modificando su contenido. ¡Domina este concepto esencial y mejora tu codificación!"
date: 2017-09-03
updatedDate: 2026-02-01
tags: ["array","let","variable"]
slug: typescript/arrays/arrays-en-typescript
author: victor_cuervo
type: doc
topic: typescript
id: 428ab9a7-d499-467f-8e98-5b2dc509c66c
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/array/arrays.ts
---

Como en cualquier otro lenguaje podemos definir variables que almacenen elementos mediante Arrays en [TypeScript](https://www.manualweb.net/typescript/). Al ser [TypeScript](https://www.manualweb.net/typescript/) un lenguaje tipado veremos que hay que prestar especial atención en la definición del array. Vamos a aprender a manejar los Arrays en [TypeScript](https://www.manualweb.net/typescript/) y hacer tres cosas:

- Definir un Array
- Acceder a un elemento del Array
- Modificar el contenido de un Array

## Definir un Array


Para definir un Array en TypeScript podemos hacerlo de dos formas. La primera es indicando el tipo de los elementos del array y añadiendo el operador `[]`.


```typescript
let miarray: tipodato[];
```


Por ejemplo podríamos definir un array de números de la siguiente forma:


```typescript
let miarray: number[] = [1,2,3,4,5];
```


Otra forma de definir el Array es mediante la clase `Array`. Para ello deberá de seguir la siguiente estructura:


```typescript
let miarray: Array<tipodato>;
```


Vemos que dentro del operador `<>` se indica el tipo de dato que vamos a utilizar. En este caso, para definir un array de números sería:


```typescript
let otroarray: Array<number> = [1,2,3,4,5];
```


## Acceder a un elemento del Array


Una vez que hemos definido un Array en TypeScript vamos a ver cómo acceder a sus elementos. Para ello utilizamos el operador `[]`. Dentro del cual indicaremos la posición del array a la que queremos acceder.


```typescript
array[posicion];
```


Hay que tener en cuenta que la primera posición es la que equivale al índice o posición 0. Para mostrar en la consola el contenido de un elemento del array escribiremos:


```typescript
console.log(miarray[2]);
```


## Modificar el contenido de un Array


Para modificar el contenido de un Array en TypeScript vamos a utilizar el mismo operador que para acceder al contenido, el operador `[]`. La diferencia es que asignaremos con el operador `=` el valor al elemento del array.


```typescript
array[posicion] = valor;
```


Así que para modificar uno de los números del array utilizamos el siguiente código:


```typescript
miarray[2] = 8;
```

