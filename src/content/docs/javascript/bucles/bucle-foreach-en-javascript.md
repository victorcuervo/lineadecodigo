---
title: "Bucle foreach en Javascript"
description: "Cómo utilizar el método .forEach() del objeto Array para poder realizar un bucle foreach en Javascript para recorrer los elementos de una lista"
date: 2021-02-03
updatedDate: 2026-01-13
tags: ["bucle","foreach","array"]
slug: javascript/bucles/bucle-foreach-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 4692c64e-ef06-4b39-a1b3-0bc7c53e39ed
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/foreach.js
---

Ya habíamos recogido [como manejar alguno de los tipos de bucles en Javascript](http://lineadecodigo.com/tag/javascript-bucles/) entre ellos los [bucles for](http://lineadecodigo.com/javascript/recorrer-un-array-en-javascript/), [for-in](http://lineadecodigo.com/javascript/estructura-javascript-for-in/) y [for-off](http://lineadecodigo.com/javascript/estructura-javascript-for-of/). En el caso de hoy vamos a ver como podemos realizar **un bucle foreach en Javascript**. Y es que un bucle foreach nos ayuda de una manera sencilla recorrer los elementos de un array.


Así que lo primero será crear nuestra lista de elementos. En este caso hemos creado una lista de países de la siguiente manera:


```javascript
let paises = ["España", "Francia", "Italia", "Portugal", "Alemania"];
```


Antes de avanzar con los bucles foreach recordemos que para recorrer las listas de elementos hemos visto que [los bucles-for](http://lineadecodigo.com/javascript/recorrer-un-array-en-javascript/) tienen un formato más o menos parecido a lo siguiente:


```javascript
for (let i = 0; i < paises.length; i++) {
  console.log(paises[i]);
}
```


Si bien, tenemos que sacar de nuestra mente esta estructura. Y es que en el caso del [bucle foreach en Javascript este es un método](http://www.w3api.com/Javascript/Array/forEach) del objeto Array, no un bucle al uso, con la siguiente estructura:


```javascript
array.forEach(function(item, index) {
  // código a ejecutar
});
```


Como podemos ver el método recibe **una función de callback** con dos elementos, por un lado el item que será el elemento sobre el que se itera y por otro el índice que ocupa dentro de la lista. De esta forma el código que tengamos dentro de la función se ejecutará por cada uno de los elementos que tenemos dentro de la lista.


La función podrá ser una función anónima dentro del [método .forEach()](http://www.w3api.com/Javascript/Array/forEach) o bien podremos definirla y asignársela al método.


## Ejemplo de bucle foreach en Javascript


De esta manera podríamos mostrar por pantalla los elementos del array con el [método forEach()](http://www.w3api.com/Javascript/Array/forEach) de la siguiente manera:


```javascript
paises.forEach(function(item, index) {
  console.log(index + ": " + item);
});
```


De esta manera sencilla habremos ejecutado un bucle foreach en [Javascript](http://www.manualweb.net/javascript).

