---
title: "Interfaces con propiedades opcionales en TypeScript"
description: "Descubre cómo crear interfaces con propiedades opcionales en TypeScript y mejora la flexibilidad de tu código mientras mantienes la claridad en tus definiciones."
date: 2017-09-20
updatedDate: 2026-02-01
tags: ["interface","function"]
slug: typescript/interfaces/interfaces-con-propiedades-opcionales-en-typescript
author: victor_cuervo
type: doc
topic: typescript
id: 1888fd0a-1b7d-4849-9792-0544fa7550e2
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/interfaces/interface-propiedades-opcionales.ts
---

Ya hemos visto [como podemos realizar el control de propiedades obligatorias mediante la definición de interfaces en TypeScript](http://lineadecodigo.com/typescript/definir-interface-typescript/). En este caso vamos a ver cómo podemos definir interfaces con propiedades opcionales en [TypeScript](https://www.manualweb.net/typescript/).


Y es que en ciertas ocasiones puede ser que necesitemos de ciertas propiedades de forma obligatoria y otras que puedan venir o no.


## Sintaxis de propiedades opcionales


A la hora de definir interfaces con propiedades opcionales en [TypeScript](https://www.manualweb.net/typescript/) tenemos que saber que hay que anteponer un símbolo de interrogación delante de la propiedad.


```typescript
interface nombreInterface {
  propiedad1?: tipo-dato;
  propiedad2?: tipo-dato;
}
```


## Ejemplo de interface con propiedades opcionales


Si utilizamos el mismo ejemplo que teníamos en el artículo sobre [cómo definir interfaces en TypeScript](https://lineadecodigo.com/typescript/definir-interface-typescript/), veremos que definimos el interface Persona, pero en este caso la propiedad la definimos como opcional:


```typescript
interface Persona {
  nombre: string;
  edad?: number;
}
```


## Usar el interface en una función


El interface será el tipo de la variable que utilicemos en las funciones. En este caso definimos un método `datosPersona` que tiene esa variable.


```typescript
function datosPersona(p: Persona) {
  console.log(p.nombre);
}
```


Cuando llamemos a esa función funcionará siempre que venga la propiedad `nombre`, e independientemente de que venga la propiedad `edad` o no.


Así funcionará esta invocación a la función:


```typescript
let p1 = {nombre:'Carlos', edad:42, localidad:'Zamora'}
datosPersona(p1);
```


Cómo esta otra invocación:


```typescript
let p2 = {nombre:'Carmen', localidad:'Zaragoza'};
datosPersona(p2);
```


De esta forma tan sencilla podemos ser menos estrictos en las validaciones y definir interfaces con propiedades opcionales en [TypeScript](https://www.manualweb.net/typescript/).

