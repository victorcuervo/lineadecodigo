---
title: "Validaciones menos estrictas en TypeScript"
description: "Descubre cómo hacer validaciones menos estrictas en TypeScript, aprovechando la flexibilidad de JavaScript sin perder validaciones de tipo. ¡Optimiza tu código ahora!"
date: 2017-09-26
updatedDate: 2026-02-01
tags: ["any","assertion","as"]
slug: typescript/variables/validaciones-menos-estrictas-en-typescript
author: victor_cuervo
type: doc
topic: typescript
id: cb2c4b60-07fc-486e-9ac2-ee330c5741a3
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/interfaces/interface-poco-estricto.ts
---

## Validaciones menos estrictas en TypeScript


Ya hemos visto que el uso de los interfaces en [TypeScript](https://www.manualweb.net/typescript/) nos sirve para forzar validaciones de tipos dentro de los elementos. Pero en este caso vamos a ver cómo podemos realizar validaciones menos estrictas en TypeScript que nos ayuden a aprovecharnos la flexibilidad que el lenguaje [Javascript](https://www.manualweb.net/javascript/) nos ofrece, pero sin perder la capacidad de las validaciones de tipo.


El realizar validaciones menos estrictas en [TypeScript](https://www.manualweb.net/typescript/) también puede valer para evitar ciertos errores en los nombres de las variables que hacen que el programa pueda fallar en ejecución.


En [TypeScript](https://www.manualweb.net/typescript/) tenemos tres formas de ejecutar validaciones menos estrictas:

- Index Signature
- Type Assertion
- Usando una variable intermedia

## Index Signature


La idea es definir un índice genérico dentro del interface, en el que pueda valer cualquier tipo de variable. Para definir el índice genérico utilizamos la estructura:


```typescript
[propName:tipo]: any
```


De esta manera podríamos definir el interface `Cuadrado` de la siguiente forma:


```typescript
interface Cuadrado {
   lado: number;
   color?: string;
   [propName:string]: any;
 }
```


E imaginemos que definimos una función que calcule el área:


```typescript
function calcularAreaCuadrado(datos:Cuadrado): number {
   let a = datos.lado*2;
   return a;
}
```


En este caso nos da igual el resto de propiedades, es por ello que podríamos tener una definición de la siguiente forma, que no habría problemas de validación:


```typescript
let a1 = calcularAreaCuadrado({lado:2,colour:'red'});
console.log(a1);
```


Vemos que el desarrollador ha cometido un fallo nombrando la propiedad `color` y que la ha denominado `colour`. No habría ningún problema ya que al tener el índice genérico forzamos unas validaciones menos estrictas en [TypeScript](https://www.manualweb.net/typescript/) y no daría error.


## Type Assertion


El Type Assertion o forzado de tipo consiste en forzar el tipo de la variable cuando realizamos la llamada a la función. Esto hará que se obvien aquellos campos que no se cumplan en el interface. En este caso nuestro interface es el siguiente:


```typescript
interface Cuadrado {
  lado: number;
  color?: string;
}
```


Pero el punto de forzado es cuando llamamos al cálculo del área:


```typescript
let a2 = calcularAreaCuadrado({radio:2,colour:'red'} as Cuadrado);
console.log(a2);
```


Vemos que utilizamos el operador `as` para forzar el tipo de la variable y que sea un `Cuadrado` que es el interface esperado por la función.


## Usando una variable intermedia


En este tercer caso lo que haremos es simple y llanamente asignar el objeto a una variable intermedia antes de llamar a la función.


```typescript
 let c1 = {radio:2,colour:'red'};
let a3 = calcularAreaCuadrado(c1);
console.log(a3);
```


De esta forma habremos conseguido que no se realize la validación completa del interface.


De esta forma ya hemos visto las tres formas en las que podemos realizar validaciones menos estrictas en [TypeScript](https://www.manualweb.net/typescript/).

