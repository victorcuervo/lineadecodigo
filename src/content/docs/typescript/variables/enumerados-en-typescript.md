---
title: "Enumerados en TypeScript"
description: "Descubre cómo utilizar enumerados en TypeScript para definir tipos de datos y valores identificables de forma sencilla y efectiva en tus proyectos."
date: 2017-09-06
updatedDate: 2026-02-01
tags: ["let","variable","enum"]
slug: typescript/variables/enumerados-en-typescript
author: victor_cuervo
type: doc
id: 7e5f2e4a-8fd8-4f2a-9318-94fcf7bb1ab5
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/enumerados.ts
---

Los enumerados en [TypeScript](https://www.manualweb.net/typescript/) sirven para definir un tipo de datos con un conjunto de valores identificables. Estos valores pueden ser utilizados en forma de constantes para asignar como valor a variables, realizar comprobaciones en sentencias de decisión,...


## Definir un Enumerado


Para definir enumerados en [TypeScript](https://www.manualweb.net/typescript/) se utiliza la sentencia `enum` seguida del nombre que queremos dar al enumerado y posteriormente los valores que puede contener el enumerado encerrados entre llaves:


```typescript
enum Enumerado {valor1,valor2,valor3,...,valorN};
```


Por ejemplo podríamos definir un enumerado en [TypeScript](https://www.manualweb.net/typescript/) que contenga una lista de colores de la siguiente forma:


```typescript
enum Color {Rojo,Verde,Azul};
```


## Utilizar un Enumerado


Una vez definido el enumerado podemos utilizarlo como tipo de dato a la hora de definir una variable.


```typescript
let miColor:Color;
```


Así como para asignarle uno de los valores del enumerado.


```typescript
let c:Color = Color.Rojo;
```


## Valor del Enumerado


Los valores del enumerado tienen un valor numérico por defecto que empieza por 0. De esta forma, si volcásemos el contenido del enumerado `Color.Rojo` por consola veríamos que sale el valor 0. Podemos asignar otro valor numérico en la definición de la siguiente forma:


```typescript
enum Color {Rojo=14,Verde=16,Azul=18};
```


## Contenido del Enumerado


Al igual que hemos podido acceder al valor numérico que tiene el Enumerado podemos acceder al valor textual del enumerado mediante el operador `[]`:


```typescript
let miColor:string = Color[2];
console.log(miColor);
```


En este caso lo que estaríamos guardando en la variable `miColor` es el valor `'Azul'`. Cómo vemos es muy sencillo e intuitivo el uso de enumerados en [TypeScript](https://www.manualweb.net/typescript/).

