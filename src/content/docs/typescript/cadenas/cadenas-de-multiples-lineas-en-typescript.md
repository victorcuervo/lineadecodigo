---
title: "Cadenas de múltiples líneas en TypeScript"
description: "Descubre cómo utilizar cadenas de múltiples líneas en TypeScript para mejorar la legibilidad de tu código y simplificar la creación de texto estructurado."
date: 2017-09-11
updatedDate: 2026-02-01
tags: ["string","let","variable"]
slug: typescript/cadenas/cadenas-de-multiples-lineas-en-typescript
author: victor_cuervo
type: doc
id: 84ac6a7d-dec6-4d2c-a9c0-f1ef7ff858d9
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/cadena-multilinea.ts
---

El poder codificar cadenas de múltiples líneas en [TypeScript](https://www.manualweb.net/typescript/) es una de esas cosas que facilitan mucho la lectura del código fuente y que ya incorporan muchos de los lenguajes. De forma natural una cadena de texto se suele poner en una línea y delimitada por comillas simples o dobles.


```typescript
let cadena:string = "Soy una cadena";
```


## Utilizar backticks para cadenas multilínea


Pero también podemos utilizar el carácter backtick (`) para delimitar cadenas:


```typescript
let cadena:string = `Soy una cadena`;
```


> El carácter backtick (`) se utiliza para poder [montar cadenas de texto con plantillas](http://lineadecodigo.com/typescript/template-string-typescript/).


## Escribir cadenas en múltiples líneas


En este caso podemos tener cadenas de múltiples líneas en [TypeScript](https://www.manualweb.net/typescript/), de tal manera que podemos ir escribiendo texto en diferentes líneas hasta que cerremos la cadena. De esta manera quedará el código de la siguiente forma:


```typescript
let cadena:string = `esto es una cadena
que contiene
múltiples líneas`;
```


Como vemos es muy sencillo y útil el crear cadenas de múltiples líneas en [TypeScript](https://www.manualweb.net/typescript/).

