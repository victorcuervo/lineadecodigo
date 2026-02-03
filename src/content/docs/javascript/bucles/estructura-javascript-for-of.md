---
title: "Estructura Javascript for of"
description: "Uso de la estructura Javascript for of para recorrer y mostrar por pantalla los elementos de un array."
date: 2013-05-17
updatedDate: 2026-01-13
tags: ["array","bucles","for-of","objeto"]
slug: javascript/bucles/estructura-javascript-for-of
author: victor_cuervo
type: doc
id: f930f5cb-4638-4d90-a229-eb7860fba002
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/for-of.html
---

El otro día veíamos [como realizar una estructura Javascript for in](http://lineadecodigo.com/javascript/estructura-javascript-for-in/?preview=true). Hoy vamos a hablar sobre la **estructura Javascript for of**. A día de hoy [la estructura Javascript for of está en formato experimental y propuesta para ser incluida dentro de Ecma Script 6](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/for...of).


La estructura Javascript `for of` permite que dentro de la ejecución del bucle tengamos acceso al elemento que estemos tratando, algo más parecido a lo que hacen otros lenguajes mediante sentencias de estructura `for each`. Y es que la estructura [Javascript](https://www.manualweb.net/javascript/) `for in` solo nos proporciona el índice o secuencial del elemento que queremos tratar.


## Sintaxis de for of


La sintaxis de la estructura [Javascript](https://www.manualweb.net/javascript/) `for of` es la siguiente:


```javascript
for (variable of objeto) {
  // código a ejecutar
}
```


Donde _objeto_ será el objeto sobre el que queramos iterar y _variable_ contendrá el elemento sobre el que estamos iterando.


## Ejemplo de for of


Vamos a ver como funciona la estructura [Javascript](https://www.manualweb.net/javascript/) `for of`. Para ello lo primero será crear un array de elementos:


```javascript
var nombres = ["Luis", "Carlos", "María", "Ana"];
```


Lo siguiente será definir la estructura [Javascript](https://www.manualweb.net/javascript/) `for of` con el array nombres como objeto:


```javascript
for (let name of nombres) {
  console.log(name);
}
```


En este caso la variable `name` contiene el elemento de array que estamos tratando, por lo cual simplemente tenemos que volcarlo por pantalla.


A la hora de probarlo tienes que utilizar el [navegador Mozilla Firefox](http://www.ayudaenlaweb.com/navegadores/que-es-firefox/), ya que es el único navegador que a día de hoy está ofreciendo esta estructura de forma experimental.

