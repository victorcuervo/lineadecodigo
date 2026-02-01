---
title: "Constantes en TypeScript"
description: "Aprende a definir y utilizar constantes en TypeScript para asegurar que tus variables no cambien durante la ejecución y optimiza tu código."
date: 2017-09-10
updatedDate: 2026-02-01
tags: ["const"]
slug: typescript/variables/constantes-en-typescript
author: victor_cuervo
type: doc
id: e027d866-6c71-4c99-a022-2fdf2b1e99be
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/constantes.ts
---

Las constantes en [TypeScript](https://www.manualweb.net/typescript/) nos permiten definir variables cuyo valor no vaya a cambiar a lo largo del tiempo de ejecución del programa.


## Definir una constante


Las constantes en [TypeScript](https://www.manualweb.net/typescript/) se definen mediante la sentencia `const` atendiendo a la siguiente estructura:


```typescript
const nombre_constante = valor;
```


Es muy importante saber que la constante siempre tiene que tener un valor asociado. Si intentamos dar de alta una constante sin valor, nos dará error.


## Ejemplo de constante


Así, por ejemplo, podemos crear una constante en [TypeScript](https://www.manualweb.net/typescript/) que indique la edad en la que una persona es mayor de edad. El código sería el siguiente:


```typescript
const mayor_de_edad:number = 18;
```


## Utilizar las constantes


Para utilizar las constantes en [TypeScript](https://www.manualweb.net/typescript/) simplemente haremos referencia a ella como si fuese una variable.


```typescript
const mayor_de_edad:number = 18;
let edad:number = 12;

if (edad > mayor_de_edad)
  console.log(`Es mayor de edad, ya que tiene más de ${mayor_de_edad} años`);
else
  console.log(`Es menor de edad, ya que tiene menos de ${mayor_de_edad} años`);
```


Vemos que hemos utilizado la constante `mayor_de_edad` tanto para evaluar una sentencia selectiva `if` como dentro de una [cadena con plantilla](http://lineadecodigo.com/typescript/template-string-typescript/).


> El ámbito de las constantes, al igual que las [variables let](http://lineadecodigo.com/typescript/variables-bloque-typescript/), es a nivel de bloque.


## Constantes inmutables


Si intentamos modificar el valor de una constante en [TypeScript](https://www.manualweb.net/typescript/) veremos que el programa nos da error de compilación. Así la siguiente sentencia fallaría:


```typescript
mayor_de_edad = 21; //Da error 
```


Espero que hayas aprendido a manejar las constantes en [TypeScript](https://www.manualweb.net/typescript/).

