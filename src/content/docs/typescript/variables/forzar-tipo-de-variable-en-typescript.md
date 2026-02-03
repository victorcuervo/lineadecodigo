---
title: "Forzar tipo de variable en TypeScript"
description: "Descubre cómo forzar tipo de variable en TypeScript y mejora la flexibilidad de tu código. Aprende a usar los operadores adecuados y optimiza tus proyectos."
date: 2017-09-08
updatedDate: 2026-02-01
tags: ["variable","let","as"]
slug: typescript/variables/forzar-tipo-de-variable-en-typescript
author: victor_cuervo
type: doc
topic: typescript
id: 9dde1431-840d-47b4-ab94-46c0b9a756bd
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/forzar-variables.ts
---

Forzar tipo de variable en [TypeScript](https://www.manualweb.net/typescript/) o como se conoce en inglés "Type Assertion" es el procedimiento por el cual forzamos a que una variable se comporte como un tipo de dato en concreto, independientemente del tipo de dato que esta variable sea.


Y es que aunque [TypeScript](https://www.manualweb.net/typescript/) es un lenguaje tipado, hemos visto que [podemos declarar las variables del tipo any para poder tener una mayor flexibilidad](http://lineadecodigo.com/typescript/variables-any-en-typescript/). Una vez que queramos utilizar estas variables `any` con un tipo en concreto deberemos de forzar tipo el tipo de la variable al tipo de dato que necesitemos.


A la hora de forzar tipo de variable en [TypeScript](https://www.manualweb.net/typescript/) tenemos dos formas:

- Mediante el operador `<>`
- Mediante el operador `as`

## Operador <>


En este caso la estructura consiste en anteponer a la variable que queremos forzar el tipo el operador `<>`, dentro del operador indicaremos el tipo de dato que queremos forzar. La estructura sería:


```typescript
<tipodato>variable;
```


Por ejemplo, veamos el siguiente código:


```typescript
let y:any = "Hola";
let size:number = (<string>y).length;
console.log(size);
```


En este caso hemos forzado la variable de tipo `any` a que sea una variable `string` y de esa forma poder acceder a la propiedad `.lenght` que nos da el tamaño de la cadena.


## Operador As


La idea es la misma que la anterior, si bien aquí la estructura del operador `as` es diferente:


```typescript
variable as tipodato;
```


Así, si repetimos el código que habíamos codificado antes con el operador `<>`, resultaría lo siguiente:


```typescript
let y:any = "Hola";
let size:number = (y as string).length;
console.log(size);
```


Como se puede apreciar es muy sencillo forzar tipo de variable en [TypeScript](https://www.manualweb.net/typescript/).

