---
title: "Tupla en TypeScript"
description: "Descubre cómo definir y acceder a una tupla en TypeScript, asegurando que cada elemento sea del tipo correcto para una programación más segura y eficaz."
date: 2017-09-05
updatedDate: 2026-02-01
tags: ["array","tupla"]
slug: typescript/arrays/tupla-en-typescript
author: victor_cuervo
type: doc
topic: typescript
id: 154183f3-8fb9-446b-9e4a-447f5b887bfd
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/tupla.ts
---

Una tupla en [TypeScript](https://www.manualweb.net/typescript/) es un array de elementos que están tipados. De esta manera cada vez que haya que insertar un elemento se validará que dicho elemento coincida con el tipo de dato establecido en la tupla.


## Definir una tupla


Para definir una tupla en [TypeScript](https://www.manualweb.net/typescript/) utilizaremos la siguiente estructura:


```typescript
let variable:[tipo1,tipo2,...,tipoN];
```


Por ejemplo podríamos definir una tupla en [TypeScript](https://www.manualweb.net/typescript/) dónde los elementos fuesen una cadena, un número y otra cadena.


```typescript
let tupla: [string, number,string];
```


## Definir contenido de la tupla


Cuando vayamos a definir el contenido de la tupla deberemos de definir el contenido para todos los valores. Por ejemplo, para la tupla definida haríamos lo siguiente:


```typescript
tupla = ['España',10,'Madrid'];
```


Es importante saber que en la tupla hay que dar valor a todos los elementos, ya que si intentásemos solo asignar valores de forma parcial, daría un error.


```typescript
tupla = ['España',10]; //Error 
```


## Acceso al contenido de la tupla en Typescript


Para acceder al contenido de una tupla en [TypeScript](https://www.manualweb.net/typescript/) lo haremos de la misma forma que lo hacemos con un array mediante el operador `[]`.


```typescript
console.log(tupla[0]);
tupla[0] = 'Francia';
```


Si intentamos insertar un contenido que no coincida con la definición de la tupla, dará error de codificación.


```typescript
tupla[1] = 'Alemania'; //Error 
```


En el caso de que accedamos o modifiquemos el contenido de un elemento que no esté definido no habrá ningún tipo de control.

