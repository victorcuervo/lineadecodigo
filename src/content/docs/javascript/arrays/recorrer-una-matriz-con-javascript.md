---
title: "Recorrer una matriz con Javascript"
description: "Sencillo ejemplo que nos explica cómo podemos utilizar dos bucles for para poder recorrer una matriz con Javascript y mostrarla en consola."
date: 2021-02-17
updatedDate: 2026-01-11
tags: ["array","matriz","bucles","for","console-log"]
slug: javascript/arrays/recorrer-una-matriz-con-javascript
type: doc
topic: javascript
id: 559a36aa-6b4a-4787-b782-0b494af346cf
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/arrays/recorrer-matriz.js
---

Ayer [hablábamos de cómo podíamos multiplicar matrices en Javascript](http://lineadecodigo.com/javascript/multiplicar-matrices-en-javascript/) y caimos en la cuenta que no habíamos explicado algo tan sencillo como es **recorrer una matriz con** [Javascript](http://www.manualweb.net/javascript). Así que no podíamos dejar pasar el tiempo y nos hemos puesto manos a la obra para poder explicaros cómo se realiza esta tarea.


Lo primero será definir la matriz en [Javascript](http://www.manualweb.net/javascript). Para ello la instanciamos directamente sobre una constante.


```javascript
const miMatriz = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
```


Aquí vemos que los elementos del array son a su vez arrays de elementos, lo que acaba formando la matriz. Al ser un array de arrays necesitaremos de dos [bucles for](http://lineadecodigo.com/tag/javascript-bucles-for/) para poder recorrer la matriz. Donde el primero recorrerá el array principal y el segundo recorrerá cada uno de los array secundarios.


Los arrays irán desde la posición inicial hasta la longitud del array que la conseguimos mediante la propiedad `.length`


De esta manera los dos bucles concatenados quedan de la siguiente forma:


```javascript
for (let x=0;x<miMatriz.length;x++) {
  for (let y=0;y<miMatriz[x].length;y++) {
    ...
  }
}
```


En el interior del segundo bucle podremos acceder al elemento mediante las variables x e y de la matriz


```javascript
miMatriz[x][y]
```


Este código nos devuelve la lista de los elementos que hemos recorrido en la matriz. Así que para no dejarlo sin formato vamos a añadir un poco de formato en la generación de la información de la matriz. Quedándonos el código final de la siguiente manera:


```javascript
const miMatriz = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

for (let x=0;x<miMatriz.length;x++) {
  let linea = "";
  for (let y=0;y<miMatriz[x].length;y++) {
    linea += miMatriz[x][y] + " ";
  }
  console.log(linea);
}
```


Espero que os haya resultado útil este sencillo código que nos explica como recorrer una matriz con [Javascript](http://www.manualweb.net/javascript).

