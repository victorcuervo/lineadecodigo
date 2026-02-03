---
title: "Interfaces de solo lectura en TypeScript"
description: "Descubre cómo usar interfaces de solo lectura en TypeScript para garantizar propiedades inmutables en tus objetos y evitar modificaciones indeseadas."
date: 2017-09-22
updatedDate: 2026-02-01
tags: ["interface","readonly","funciones"]
slug: typescript/interfaces/interfaces-de-solo-lectura-en-typescript
author: victor_cuervo
type: doc
topic: typescript
id: 2c8a9dfb-adca-81e2-a4cc-d8f261722eb7
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/interfaces/interface-solo-lectura.ts
---

Mediante los interfaces de solo lectura en [TypeScript](https://www.manualweb.net/typescript/) podemos conseguir que las propiedades que estemos gestionando en una llamada a una función no puedan ser sobrescritas. De esta manera nos aseguramos que los valores que se pasan una vez creado el objeto son inmutables.


## Sintaxis de interfaces de solo lectura


Para poder definir interfaces de solo lectura en [TypeScript](https://www.manualweb.net/typescript/) deberemos de seguir la siguiente estructura:


```typescript
interface nombreInterface {
  readonly propiedad: tipo-dato;
}
```


Es decir, delante de la propiedad que queremos sea de solo lectura anteponemos la palabra `readonly`. Podemos definir una, varias o todas las propiedades de un interface como `readonly`.


## Ejemplo de interface con propiedades readonly


Por ejemplo, podríamos definir nuestro interface `Persona` con propiedades de solo lectura de la siguiente forma:


```typescript
interface Persona {
  readonly nombre: string;
  readonly edad: number;
}
```


En este caso ambas propiedades: `nombre` y `edad` han sido definidas como `readonly`.


## Usar el interface en una función


Podemos definir una función que asuma el control de alguno de sus parámetros mediante el interface `Persona`:


```typescript
function datosPersona(p: Persona) {...}
```


Y podemos invocarla mediante un objeto que cumpla el interface:


```typescript
let p1 = {nombre:'Carlos', edad:42, localidad:'Zamora'}
datosPersona(p1);
```


## Restricción de modificación


Lo que, bajo ningún concepto, no podremos hacer es modificar los atributos del objeto pasado a la función. Así, si escribimos el siguiente código, en el cual intentamos modificar la propiedad `nombre` dentro de la función:


```typescript
function datosPersona(p: Persona) {
  p.nombre = 'Víctor';
  console.log(p.nombre);
}
```


Veremos que el compilador nos da un error e indica que no se puede modificar la propiedad al ser de solo lectura. De esta manera ya sabes que cuando quieras tener información inmutable dentro de una función simplemente tienes que utilizar interfaces de solo lectura en [TypeScript](https://www.manualweb.net/typescript/).

