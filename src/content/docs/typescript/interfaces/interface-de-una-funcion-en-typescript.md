---
title: "Interface de una función en TypeScript"
description: "Descubre cómo definir una interface de una función en TypeScript para asegurar tipos de parámetros y retornos, optimizando así tu código y mejorando su calidad."
date: 2017-09-28
updatedDate: 2026-02-01
tags: ["interface","function"]
slug: typescript/interfaces/interface-de-una-funcion-en-typescript
author: victor_cuervo
type: doc
topic: typescript
id: 392cccfa-13eb-462e-9980-5cb43aead409
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/interfaces/interface-funcion.ts
---

Los ejemplos que hemos visto de [interfaces en TypeScript hasta el momento han sido ejemplos de interfaces para objetos](http://lineadecodigo.com/tag/typescript-interface/), si bien también podemos definir un interface de una función en TypeScript. La idea es la misma, lo que buscamos a la hora de definir el interface de una función en [TypeScript](https://www.manualweb.net/typescript/) es que si definimos una función, tanto los parámetros que se le pasan, como el valor que retorna esté claramente definido, independientemente de las veces que definamos funciones de ese tipo.


## Sintaxis de interface de una función


La estructura para poder definir el interface de una función en [TypeScript](https://www.manualweb.net/typescript/) es la siguiente:


```typescript
interface NombreInterface {
  (propiedad1:tipo, propiedad2:tipo,...,propieddN:tipo):tipo-retorno;
}
```


## Ejemplo de interface de una función


Así, por ejemplo, podemos definir un interface que defina lo que sería la función del cálculo del área de un triángulo. La cual quedaría de la siguiente manera:


```typescript
interface CalculoAreaTriangulo {
  (base:number, altura:number):number;
}
```


Vemos que hemos definido que las funciones que tipo `CalculoAreaTriangulo` deben de tener dos propiedades numéricas y devolver un número.


## Definir una variable del tipo interface


Así definiremos una variable que vaya a tener una función de este tipo:


```typescript
let miCalculo: CalculoAreaTriangulo;
```


## Implementar la función con el interface


Cuando vayamos a definir la función, esta deberá de cumplir con el interface. Por ejemplo, esta función si que lo cumpliría:


```typescript
miCalculo = function(b:number,a:number) {
  return (b*a)/2;
}
```


Mientras que esta otra no:


```typescript
miCalculo = function(b:number,a:number) {
  return "Tu area es de *" + (b*a)/2;
}
```


Ya que el valor que se está devolviendo es de tipo `string` en vez de ser un tipo `number`. Con este ejemplo tan sencillo hemos visto como se puede definir un interface de una función en [TypeScript](https://www.manualweb.net/typescript/).

