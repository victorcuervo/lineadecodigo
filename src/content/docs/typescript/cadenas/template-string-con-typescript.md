---
title: "Template String con TypeScript"
description: "El uso de Template String con TypeScript permite definir plantillas de cadenas de texto dónde se combine el texto con otras variables."
date: 2017-09-02
updatedDate: 2026-02-01
tags: ["string","let","template"]
slug: typescript/cadenas/template-string-con-typescript
author: victor_cuervo
type: doc
id: 0d0a9ffb-f706-4fdc-93b5-5475075f0f45
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/template-string.ts
---

Los template string con [TypeScript](https://www.manualweb.net/typescript/) nos permite el crear plantillas de cadenas en las que podemos intercalar texto con otras variables, de tal manera que a la hora de mostrar el contenido de la cadena se combinará obteniendo como resultado una cadena.


## Definir un template string


Para definir un template string con [TypeScript](https://www.manualweb.net/typescript/) lo primero que deberemos de hacer es definir una variable de tipo string.


```typescript
let mensaje:string;
```


> ℹ️ Hay que observar que utilizamos la sentencia `let` para definir la variable.


Las cadenas de texto para que sean un template string con [TypeScript](https://www.manualweb.net/typescript/) deben de tener el contenido entre dos caracteres acento grave  ```.


```typescript
let mensaje:string = `Esto es el contenido`;
```


## Insertar variables en un template string


Ahora lo que vamos a hacer es definir otra variable, en este caso un número:


```typescript
let lado:number = 2;
```


> ℹ️ Para declarar variables de tipo numérico utilizamos el tipo de dato básico `number`.


Y lo siguiente será ingresar el contenido de esta nueva variable dentro de la cadena.


```typescript
let mensaje:string = `Cuadrado de lado ${lado}`;
```


Vemos que para poder utilizar la variable nos apoyamos en la estructura:


```typescript
${variable}
```


## Utilizar expresiones en un template string


Además de usar directamente la variable, podemos utilizar una expresión que utilice la variable:


```typescript
${expresión}
```


Así podríamos definir la siguiente template string con [TypeScript](https://www.manualweb.net/typescript/) utilizando una variable y una expresión.


```typescript
let mensaje:string = `Un cuadrado de lado ${lado} tiene como área ${lado*2}`;
```


Cómo se puede ver, el uso de template string con [TypeScript](https://www.manualweb.net/typescript/) nos ayuda mucho a la hora de poder manipular las cadenas de texto y componer mensajes.

