---
title: "Arrays de solo lectura en TypeScript"
description: "Descubre cómo los arrays de solo lectura en TypeScript garantizan inmutabilidad y control en tus colecciones de datos, ¡optimiza tu código ahora!"
date: 2017-09-24
updatedDate: 2026-02-01
tags: ["array","let","push"]
slug: typescript/arrays/arrays-de-solo-lectura-en-typescript
type: doc
topic: typescript
id: 2c8a9dfb-adca-81cb-a491-fba26a19f84d
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/array/arrays-solo-lectura.ts
---

Los arrays de solo lectura en [TypeScript](https://www.manualweb.net/typescript/) nos permiten albergar una colección de elementos que se comporten de forma inmutable durante toda la vida de un programa. Por ejemplo, imagina una situación en la que tienes que tener la lista de ciudades de un estado o las tallas de unas camisetas de ropa, cualquier listado de elementos que tengas que manipular y que sepas que no va a cambiar y que quieres que en ningún momento de la ejecución se modifique.


## Definir un array de solo lectura


Para definir arrays de solo lectura en [TypeScript](https://www.manualweb.net/typescript/) tenemos la palabra reservada `ReadonlyArray`. De esta manera podremos definir un array de solo lectura mediante la siguiente sentencia:


```typescript
let nombre_array: ReadonlyArray<tipo_dato> = [valor1,valor2,...,valorN];
```


Así, por ejemplo, podemos definir las tallas de la ropa de la siguiente forma:


```typescript
let tallas: ReadonlyArray<string> = ['xs','s','m','l','xl'];
```


## Acceder a elementos del array


Una vez definidos estos valores lo que sí podremos hacer es ver su contenido y utilizarlo, por ejemplo podemos mostrar el contenido por pantalla de la siguiente forma:


```typescript
console.log(tallas[1]);
```


## Restricciones de modificación


Pero lo que no podremos hacer es añadir nuevos elementos. Por ejemplo no existe el método `.push()`.


```typescript
// Error Compilación
miarray.push('xxl');
```


Tampoco podremos modificar el contenido de uno de los elementos. Es por ello que si escribimos la siguiente sentencia:


```typescript
// Error Compilación
miarray[2] = 'M';
```


También tendremos un error de compilación. La verdad que el uso de arrays de solo lectura en [TypeScript](https://www.manualweb.net/typescript/) es muy útil en ciertas ocasiones y nos permite establecer un control sencillo sobre una lista de elementos en tiempo de codificación y compilación.

