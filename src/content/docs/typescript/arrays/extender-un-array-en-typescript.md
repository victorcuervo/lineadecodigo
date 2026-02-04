---
title: "Extender un array en Typescript"
description: "Aprende a extender un array en TypeScript de forma sencilla y efectiva, combinando valores y otros arrays para mejorar tu código. ¡Descúbrelo ahora!"
date: 2017-09-16
updatedDate: 2026-02-01
tags: ["array","operadores"]
slug: typescript/arrays/extender-un-array-en-typescript
type: doc
topic: typescript
id: 2c8a9dfb-adca-8139-8271-ef2e00293fc1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/array/spread-array.ts
---

## Extender un array en TypeScript


Extender un array en [TypeScript](https://www.manualweb.net/typescript/) consiste en componer un array a partir de otros arrays. La composición puede ser sumando elementos o intercalando elementos. Para ello utilizaremos el operador `...` de [TypeScript](https://www.manualweb.net/typescript/).


## Definir los arrays


Pero lo primero será definir los arrays que vamos a utilizar para extender. Así definimos dos arrays en [TypeScript](https://www.manualweb.net/typescript/):


```typescript
let arr1:number[] = [2,3];
let arr2:number[] = [5,6];
```


Vemos que en este caso hemos definido los arrays de tipo numérico mediante el tipo básico `number[]`.


## Definir el array extendido


Lo siguiente será definir el array que vamos a extender. Este será nuevamente un array de números.


```typescript
let numeros:number[];
```


## Operador de extensión


Para extender a partir de otro array la estructura en la que utilicemos el operador `...` será la siguiente:


```typescript
let miarray = [valor1,valor2, ...otro-array];
```


Dónde `valor1, valor2,...` son valores originarios del array y `otro-array` es el array que queremos insertar.


## Extender el array con valores


De esta manera podemos extender el array definido anteriormente de la siguiente manera:


```typescript
let numeros:number[] = [0,1, ...arr1];
```


## Intercalar valores y arrays


Incluso podríamos intercalar más valores en medio del array y de nuevo extender con otro array. En este caso quedaría de la siguiente forma:


```typescript
let numeros:number[] = [0,1, ...arr1, 4, ...arr2];
```


Con esto ya hemos visto lo sencillo que es extender un array en [TypeScript](https://www.manualweb.net/typescript/) para componerlo con elementos de otros arrays.

