---
title: "Hola Mundo en TypeScript"
description: "Aprende a programar tu primer Hola Mundo en TypeScript y descubre la potencia del tipado estático para evitar errores en tiempo de ejecución."
date: 2017-09-01
updatedDate: 2026-02-01
tags: ["string","console","var","variable","hola-mundo","npm"]
slug: typescript/basicos/hola-mundo-en-typescript
author: victor_cuervo
type: doc
topic: typescript
id: 22f6244e-8a85-49c2-8988-5c4c38a97abe
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/hola-mundo.ts
---

En este primer ejemplo de Hola Mundo en [TypeScript](https://www.manualweb.net/typescript/) vamos a ver cómo tomar contacto con ese lenguaje y realizar un primer programa. [TypeScript](https://www.manualweb.net/typescript/) es un superconjunto del lenguaje [Javascript](https://www.manualweb.net/javascript/) el cual incluye **tipado estático, clases e interfaces**. Estas características permiten que se puedan hacer validaciones en tiempo de codificación y así conseguir reducir los errores en tiempo de ejecución.


Una vez hemos creado un código en [TypeScript](https://www.manualweb.net/typescript/) se realiza un proceso de compilación que acaba generando un fichero [Javascript](https://www.manualweb.net/javascript/), que será el que suba a los servidores de producción.


## Instalar TypeScript


Lo primero que tenemos que hacer para poder crear nuestro Hola Mundo en [TypeScript](https://www.manualweb.net/typescript/) es instalarnos el framework de desarrollo. Para ello vamos a utilizar **npm**.


```bash
$ npm install -g typescript
```


## Codificar Hola Mundo en TypeScript


Para crear nuestro Hola Mundo en [TypeScript](https://www.manualweb.net/typescript/) crearemos un fichero con extensión **.ts** que llamaremos `hola-mundo.ts`


El código que insertaremos será:


```typescript
var mensaje:string = "Hola Mundo";
console.log(mensaje);
```


Si conoces [Javascript](https://www.manualweb.net/javascript/) puedes ver que hemos declarado una variable mensaje "Hola Mundo" y cuyo contenido volcamos por la consola, algo sencillo.


En este caso hemos utilizado la capacidad de tipado de las variables, declarando la variable mensaje del tipo `String`. Para ello hemos utilizado la estructura:


```typescript
var variable:tipo = valor;
```


## Compilar el fichero TypeScript


Una vez tenemos codificado nuestro Hola Mundo en [TypeScript](https://www.manualweb.net/typescript/) pasaremos ha compilarlo. Para ello utilizamos el comando **tsc** escribiendo:


```bash
tsc hola-mundo.ts
```


Una vez que hayamos realizado el proceso de compilación veremos **que aparece un fichero .js**. Con esto tendremos nuestro Hola Mundo con [TypeScript](https://www.manualweb.net/typescript/). Ya solo nos queda seguir aprendiendo cosas sobre este lenguaje y sacarle el mayor provecho posible.

