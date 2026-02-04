---
title: "Estructura Javascript for in"
description: "Ejemplo que nos muestra como utilizar la estructura Javascript for in para recorrer una lista de elementos."
date: 2013-05-14
updatedDate: 2026-01-11
tags: ["array","for-in","Javascript Arrays","bucles"]
slug: javascript/bucles/estructura-javascript-for-in
type: doc
topic: javascript
id: 512f004e-26be-40ef-9fad-dc66a89c05ac
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/for-in.html
---

La estructura [Javascript](https://www.manualweb.net/javascript/) **for in** nos permite recorrer una lista de elementos de una forma sencilla. Javascript for in es una estructura en bucle que nos permite tratar los elementos indicados en la sentencia.


## Crear un array en Javascript


Para ver el uso de la estructura Javascript for in, lo primero que haremos será crear un **array** de elementos, los cuales recorreremos y presentaremos en pantalla.


```javascript
nombres = ["Víctor","Esther","David","Raquel"];
```


## Sintaxis de la estructura for in


La estructura Javascript **for in** tiene la siguiente sintaxis:


```javascript
for (variable in objeto) {
  // código a ejecutar
}
```


En el caso del tratamiento del array, el objeto será el propio array y la variable será a la que se vaya asignando uno de los valores del **índice** del array. Es decir, en cada vuelta del bucle el valor de la variable será un nuevo valor del índice.


## Mostrar los índices del array


De esta forma podemos sacar por consola todos los índices utilizando la estructura Javascript for in:


```javascript
for (i in nombres) {
  console.log(i);
}
```


## Acceder a los elementos del array


Es importante destacar que con la estructura Javascript for in lo que tenemos es el **índice** del elemento, no el elemento en sí, como sucede con las sentencias for each de otros lenguajes. Es por ello que para mostrar por pantalla o consola los nombres del array tenemos que utilizar el índice como acceso al contenido del array. Es decir, ponerlo dentro de los corchetes:


```javascript
nombres[i]
```


Utilizaremos esta sentencia dentro de la estructura Javascript for in:


```javascript
for (i in nombres) {
  console.log(nombres[i]);
}
```


Con estas pequeñas líneas y el uso de la estructura Javascript for in hemos volcado el contenido de los elementos del array por pantalla.

