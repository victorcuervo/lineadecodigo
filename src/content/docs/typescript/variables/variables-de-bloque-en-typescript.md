---
title: "Variables de bloque en TypeScript"
description: "Descubre cómo las variables de bloque en TypeScript mejoran el ámbito de las variables y evitan errores comunes de JavaScript. ¡Optimiza tu código ahora!"
date: 2017-09-09
updatedDate: 2026-02-01
tags: ["var","variables","let"]
slug: typescript/variables/variables-de-bloque-en-typescript
author: victor_cuervo
type: doc
topic: typescript
id: 2c8a9dfb-adca-81ed-8730-f62c17d898f5
download: https://github.com/victorcuervo/lineadecodigo_typescript/blob/master/basicos/variables-bloque.ts
---

Mediante las **variables de bloque en** [**TypeScript**](https://www.manualweb.net/typescript/) podemos atacar uno de los grandes problemas del lenguaje [Javascript](https://www.manualweb.net/javascript/): el uso de la declaración de variables mediante `var`. El ámbito de las variables definidas con `var` es un ámbito global, por lo que una vez definidas podemos acceder a ellas desde cualquier parte del programa.


En lenguajes más estructurados, la definición y ámbito de las variables se asocia al bloque. Es decir, la variable puede ser accedida dentro de su bloque de sentencias o de los bloques anidados, pero nunca desde otro punto.


Para conseguir esto podemos definir **variables de bloque en TypeScript mediante la sentencia** **`let`**.


## Sintaxis de las variables de bloque


La estructura para definir una variable de bloque es la siguiente:


```typescript
let variable:tipo = valor;
```


Así, por ejemplo, podemos definir una variable de bloque de tipo cadena de la siguiente forma:


```typescript
let cadena:string = "Soy una cadena";
```


## Ejemplo de ámbito de variables


Pero lo interesante es que veamos cómo funcionan. Para ello nos vamos a apoyar en el siguiente código:


```typescript
function mifuncion() {

 let a:number = 1;
 let validar:boolean = true;

 if (validar) {
   var b:number = 2;
   let c:number = a+b;
 }

 console.log(b);
 console.log(c); // Da error

}
```


Como podemos apreciar, es una función que tiene un bloque de sentencias anidado mediante una estructura selectiva `if`. Si analizamos la variable `a`, podemos ver que esta variable se puede acceder tanto en su bloque de sentencias como en el anidado. Es por ello que cuando queremos acceder a ella dentro de la estructura `if` no hay ningún problema:


```typescript
if (validar) {
  var b:number = 2;
  let c:number = a+b;
}
```


## Diferencia entre let y var


Si bien nos fijaremos ahora en la variable `c`. Esta variable de bloque solo podrá ser accedida dentro de su bloque, por lo tanto solo tiene visibilidad dentro de la estructura `if`. En el momento que hemos intentado acceder a ella fuera de su bloque mediante el método `console.log()`, veremos que da error, ya que no hay ámbito de visibilidad de dicha variable.


Por el contrario, vemos que una variable definida de forma global mediante la sentencia `var`, como es el caso de la variable `b`, puede ser accedida sin problemas dentro de otra estructura de bloque de sentencias que no sea la que la definió.


Espero que con este ejemplo haya quedado un poco más claro cómo se pueden definir **variables de bloque en** [**TypeScript**](https://www.manualweb.net/typescript/) **mediante la sentencia** **`let`**.

