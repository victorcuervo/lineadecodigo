---
title: "Recorrer un array en Javascript"
description: "Código fuente que nos sirve para recorrer un array en Javascript mediante un bucle for que nos vaya mostrando cada elemento por pantalla."
lastUpdated: 2025-12-19
slug: javascript/recorrer-un-array-en-javascript
author: Víctor Cuervo
---

Ayer veíamos [cómo volcar el contenido de un array en jQuery](http://lineadecodigo.com/jquery/volcar-el-contenido-de-un-array-con-jquery/). Hoy vamos a ver algo más sencillo que es cómo recorrer un array en [Javascript](https://www.manualweb.net/javascript/). Este es un ejemplo muy sencillo y que te vendrá muy bien si estás aprendiendo a programar en [Javascript](https://www.manualweb.net/javascript/).


Un array es una lista de elementos, normalmente del mismo tipo, aunque puede ser de múltiples tipos. Dichos elementos pueden ser insertados o eliminados del array. En el caso de [Javascript](https://www.manualweb.net/javascript/) el tamaño del array puede ser dinámico y no tiene porqué ser definido desde el principio.


En nuestro caso vamos a recorrer un array en [Javascript](https://www.manualweb.net/javascript/) para poder listar los elementos que contiene.


Lo primero será definir el array....


```javascript
// Sigo siendo original y utilizando números
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```


Para poder recorrer el array vamos a utilizar una [bucle iterativo de tipo for](https://manualweb.net/javascript/estructuras-repetitivas-javascript/#for). Para poder crear el bucle iterativo for necesitamos poner un límite de las iteraciones a ejecutar. Dicho límite nos lo dará el tamaño del array. El tamaño del array lo podemos obtener mediante la propiedad [`.length`](http://www.w3api.com/Javascript/Array/length/) del array.


Así nuestro [bucle for](https://manualweb.net/javascript/estructuras-repetitivas-javascript/#for) quedará de la siguiente forma:


```javascript
for (x=0;x<a.length;x++){...}
```


Hemos declarado una variable `x`, la cual incrementamos uno a uno en cada vuelta del bucle, mientras su valor es menor que el tamaño del array.


El siguiente paso será coger el elemento del array que coincida con la posición determinada por X. Para obtener el elemento utilizamos los corchetes ([]) sobre el array, con la posición como parámetro de los corchetes.


```javascript
document.write(a[x] + " ");
```


Ya solo nos queda introducir esto en el bucle para tener todo el código que nos permita recorrer un array en [Javascript](https://www.manualweb.net/javascript/).


```javascript
for (x = 0; x < a.length; x++) {
  document.write(a[x] + " ");
}
```

