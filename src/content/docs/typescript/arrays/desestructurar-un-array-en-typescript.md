---
title: "Desestructurar un Array en TypeScript"
description: "Desestructurar un array en TypeScript es fácil y útil, permitiendo manipular elementos directamente en variables sin crear intermedias. ¡Descúbrelo!"
date: 2017-09-18
updatedDate: 2026-02-01
tags: ["array","let","variable"]
slug: typescript/arrays/desestructurar-un-array-en-typescript
type: doc
topic: typescript
id: b7415263-8a92-4c4b-b026-f1200de55986
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/array/desestructurar-array.ts
---

A la hora de desestructurar un array en [TypeScript](https://www.manualweb.net/typescript/) lo que vamos a conseguir es poder manipular sus elementos con variables realizando una conversión sencilla. Esto lo podremos hacer sin tener que crear variables intermedias a las que asignemos el valor.


## Definir un array


Lo primero que tenemos que tener es un array. Recuerda que los arrays en [TypeScript](https://www.manualweb.net/typescript/) van tipados.


```typescript
let ciudades:string[] = ['Ávila','Salamanca','Zamora','León','Valladolid'];
```


Vemos que hemos definido un array de cadenas.


## Sintaxis de desestructuración


Ahora la idea es poder obtener acceso a los elementos del array y dejarlos en variables. Para ello utilizaremos el código de desestructuración de la siguiente manera:


```typescript
let [variable1, variable2, ...resto] = array;
```


## Desestructurar elementos del array


En nuestro caso si, por ejemplo, queremos acceder a los dos primeros elementos, codificaremos lo siguiente:


```typescript
let [c1,c2] = ciudades;
```


Si volcamos el contenido de `c1` y de `c2` veremos que corresponde con las dos primeras ciudades.


```typescript
console.log(c1);  //Ávila
console.log(c2); //Salamanca
```


## Manipular elementos resto


En este proceso de desestructurar un array en [TypeScript](https://www.manualweb.net/typescript/) también podemos manipular los elementos que queden como resto, siendo esto un nuevo array. Para ello deberemos de escribir lo siguiente:


```typescript
let [c1,c2, ...resto] = ciudades;
```


Si comprobamos el contenido de la variable `resto` veremos que corresponde con un array.


```typescript
console.log(resto); // ['Zamora','León','Valladolid'] 
```


Cómo se puede comprobar, desestructurar un array en [TypeScript](https://www.manualweb.net/typescript/) es un proceso muy sencillo y útil.

