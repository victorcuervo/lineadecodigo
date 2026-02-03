---
title: "Inicializar un array en Javascript"
description: "En este documento se explican las formas de inicializar un array en Javascript, incluyendo instanciación y optimización."
date: 2012-01-18
updatedDate: 2026-01-11
tags: ["array"]
slug: javascript/arrays/inicializar-un-array-en-javascript
author: victor_cuervo
type: doc
id: 5bfc1670-3817-4f9b-8e9e-33831180afa5
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/arrays/inicializar-array.js
---

Una cosa básica que tenemos que aprender a empezar con **Javascript** es el manejo de arrays y por consiguiente saber como inicializar un array en [Javascript](https://www.manualweb.net/javascript/).


## Instanciar el array


Lo primero será instanciar el array:


```javascript
var miArray = new Array();
```


## Formas de inicializar un array


Una vez instanciado el array vemos que tenemos varias formas de inicializar un array en [Javascript](https://www.manualweb.net/javascript/).


### Indicar valores en la instanciación


La primera es indicando los valores del array en la propia instanciación:


```javascript
var miArray = new Array("uno", "dos", "tres", "cuatro");
```


### Asignar valores a las posiciones


La segunda es asignando los valores a cada una de las posiciones del array:


```javascript
var miArray = new Array(4);
miArray[0] = "uno";
miArray[1] = "dos";
miArray[2] = "tres";
miArray[3] = "cuatro";
```


En nuestro caso hemos declarado un array de 4 posiciones y a la hora de asignar los valores tenemos que recordar que en [Javascript](https://www.manualweb.net/javascript/) el primero de los elementos es el 0 y el último será el tamaño del array menos 1.


## Optimización de arrays


Si pensamos en la optimización de los arrays se puede evitar el uso de la sentencia `new`. Ya que el `Array` es un elemento primitivo del lenguaje. En este sentido, la forma más óptima sería la siguiente:


```javascript
var miArray = ["uno", "dos", "tres", "cuatro"];
```


Así crearemos el array en base a un conjunto de cadenas.


## Arrays sin tipo


Por último recordemos que los arrays de [Javascript](https://www.manualweb.net/javascript/) no están tipados. Es por ello que podemos inicializar un array en [Javascript](https://www.manualweb.net/javascript/) con diferentes tipos de datos: cadenas, enteros, booleanos,...


En este caso podríamos tener la siguiente inicialización de un array:


```javascript
var miArray = ["uno", 2, true, 4.5];
```

