---
title: "Añadir elementos a un array con Javascript push"
description: "Artículo que nos explica como añadir nuevos elementos a un array con Javascript push."
date: 2013-05-19
updatedDate: 2026-01-12
tags: ["array","push","bucles","for"]
slug: javascript/arrays/anadir-elementos-a-un-array-con-javascript-push
author: victor_cuervo
type: doc
topic: javascript
id: 7d52c423-72be-4722-8289-c63caa72d4d1
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/arrays/array-push.js
---

Cuando trabajamos con [Javascript](https://www.manualweb.net/javascript/), una de las formas que tenemos para añadir elementos a un array es el **método Javascript push**. El método [Javascript](https://www.manualweb.net/javascript/) [push](https://www.w3api.com/Javascript/Array/push/) lo que hace es añadir un elemento al final del array que tengamos.


## Crear un Array


Lo primero que haremos será crear un array [Javascript](https://www.manualweb.net/javascript/) con una serie de elementos iniciales.


```javascript
var aValores = new Array("victor","raul","maria","nuria");
```


Ahora volcamos por pantalla el contenido del array para comprobar los elementos que lo componen. Para recorrer el array utilizamos una [estructura Javascript for in](http://lineadecodigo.com/javascript/estructura-javascript-for-in/).


```javascript
for (x in aValores)
  document.write(aValores[x] + "<br/>");
```


Veremos que la salida por pantalla es:


```text
victor
raul
maria
nuria
```


## Añadir elementos con push


Ahora, para añadir los elementos utilizamos el método [Javascript](https://www.manualweb.net/javascript/) [push](https://www.w3api.com/Javascript/Array/push/). Este método recibe como parámetro el elemento que queremos insertar en nuestro array Javascript. En este caso será una cadena de texto.


```javascript
aValores.push("victor");
aValores.push("luis");
```


> El método Javascript [push](https://www.w3api.com/Javascript/Array/push/) no comprueba si el elemento a insertar en el array existe previamente. Siempre lo inserta.


Si volvemos a recorrer el array con el código explicado arriba veremos que la salida es la siguiente:


```text
victor
raul
maria
nuria
victor
luis
```


Como podemos comprobar el método [Javascript](https://www.manualweb.net/javascript/) [push](https://www.w3api.com/Javascript/Array/push/) no ha validado que el elemento "victor" ya existía y lo ha insertado de nuevo en el array. ¿Qué harías para no insertar un mismo elemento dos veces en un array [Javascript]([https://www.manualweb.net/javascript/](https://www.manualweb.net/javascript/)?

