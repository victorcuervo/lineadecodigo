---
title: "Definir un Interface con TypeScript"
description: "Aprende a definir un interface con TypeScript y valida estructuras en tu código. Descubre cómo mejorar la seguridad de tus datos y evitar errores de compilación."
date: 2017-09-17
updatedDate: 2026-02-01
tags: ["interface","propiedades"]
slug: typescript/interfaces/definir-un-interface-con-typescript
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81fc-9293-f6a443b81ea6
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/interfaces/interface.ts
---

Definir un interface con [TypeScript](https://www.manualweb.net/typescript/) nos da la capacidad de realizar validaciones de estructuras obligatorias dentro el código. Una de las características del lenguaje [TypeScript](https://www.manualweb.net/typescript/) es el tipado de las variables y el control que hace sobre ello. Pero, ¿qué sucede cuándo hay una estructura con un conjunto de propiedades? Es en este caso cuando nos podemos ayudar en un interface de [TypeScript](https://www.manualweb.net/typescript/).


## Sintaxis de un interface


Para definir un interface con TypeScript tenemos que utilizar la palabra reservada `interface` seguida del nombre del interface.


```typescript
interface nombreInterface { ... }
```


Dentro de la definición del interface irán las propiedades que queramos que sean obligatorias. La estructura del código será la siguiente:


```typescript
interface nombreInterface {
  propiedad1: tipo-dato;
  propiedad2: tipo-dato;
}
```


## Ejemplo de interface


Por ejemplo podemos definir un **interface Persona** de la siguiente forma:


```typescript
interface Persona {
  nombre: string;
  edad: number;
}
```


## Utilizar un interface


Ahora podemos utilizar el interface, por ejemplo, en una función:


```typescript
function datosPersona(p: Persona) {
  console.log(p.nombre);
}
```


Lo que estamos consiguiendo al utilizar el interface en la función es que, al menos, deben de venir dos valores informados, estos corresponderán con el `nombre` y la `edad`.


## Validación del interface


Así podremos realizar la siguiente llamada a la función:


```typescript
let p1 = {nombre:'Carlos', edad:42, localidad:'Zamora'}
datosPersona(p1);
```


Vemos que la definición del elemento que pasamos a la función tiene los dos parámetros. Aunque luego tenga parámetros adicionales. En el caso de que falte algún parámetro no podremos compilar el código. Por ejemplo el siguiente código no funcionaría:


```typescript
let p2 = {nombre:'Carmen', localidad:'Zaragoza'};
datosPersona(p2); // Error de Compilación
```


Vemos que la propiedad `edad` no está definida, por lo cual no cumplimos con el interface. Así hemos conseguido definir un Interface con [TypeScript](https://www.manualweb.net/typescript/) de una forma sencilla.

