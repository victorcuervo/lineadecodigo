---
title: "Variables Any en TypeScript"
description: "Descubre cómo las variables any en TypeScript ofrecen flexibilidad en el control de tipos, permitiendo cambios dinámicos sin perder funcionalidad. ¡Aprende más!"
date: 2017-09-07
updatedDate: 2026-02-01
tags: ["variables","let","any"]
slug: typescript/variables/variables-any-en-typescript
author: victor_cuervo
type: doc
id: c5ff0046-044c-4075-87fa-9ee58bc4b934
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/any.ts
---

## Variables Any en TypeScript


Las variables `any` en [TypeScript](https://www.manualweb.net/typescript/) nos permiten ser un poco laxos en el control del tipado de las variables de un programa. Si has trabajado con [TypeScript](https://www.manualweb.net/typescript/) sabrás que una de sus mayores ventajas es el control del tipo de datos de las variables. Si bien, si has trabajado con [JavaScript](https://www.manualweb.net/javascript/) sabrás que una variable puede cambiar de tipo durante la ejecución de un programa y que esto puede ser una gran ventaja en la codificación. Es por ello, y de cara a solucionar esta situación, que [TypeScript](https://www.manualweb.net/typescript/) define las variables de tipo `any`. Estas serán unas variables cuyo tipo de dato podrá ser 'cualquiera', es decir, podrá cambiar de tipo de dato a lo largo de la codificación del programa.


## Definir una variable any


Definir variables `any` en [TypeScript](https://www.manualweb.net/typescript/) es tan sencillo como darlas el tipo de dato `any` y el valor que queramos.


```typescript
let x:any = 3;
console.log(x);
```


En este caso la variable se comportará como una variable de tipo `number`. Pero es que unas líneas de código más adelante podemos cambiar su contenido y, por ejemplo, asignar una cadena a dicha variable.


```typescript
x = 'soy una cadena de texto';
console.log(x);
```


Vemos que ahora, al volcarlo por consola, lo que se vuelca es una cadena. Pero más aún, podemos volver a cambiar el tipo de la variable asignándola un nuevo valor.


```typescript
x = true;
console.log(x);
```


## Conclusión


Como podemos apreciar las variables `any` en [TypeScript](https://www.manualweb.net/typescript/) nos pueden permitir ese punto de flexibilidad sobre el control de tipo de datos, pero sin perder el resto de funcionalidades que nos da [TypeScript](https://www.manualweb.net/typescript/).

