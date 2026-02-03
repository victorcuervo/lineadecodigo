---
title: "Mayor de cinco números en Javascript"
description: "El artículo explica cómo calcular el mayor de cinco números en Javascript utilizando un array y un bucle."
date: 2017-07-02
updatedDate: 2026-01-11
tags: ["array","for","if","console-log","numeros","mayor","bucles"]
slug: javascript/arrays/mayor-de-cinco-numeros-en-javascript
author: victor_cuervo
type: doc
id: 5fcbcde4-0499-4736-9b78-f2b69cfe4285
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/arrays/mayor-cinco-numeros.js
---

Una de las peticiones que nos habéis hecho en los comentarios es cómo poder calcular el mayor de cinco números en [Javascript](https://www.manualweb.net/javascript/). Y aunque es un ejemplo sencillo a resolver, vamos a ver paso a paso cómo deberíais de enfocarlo.


## Declarar el array de números


Lo primero será tener 5 números. Para ello los vamos a meter dentro de un array.


```javascript
var numeros = [3, 8, 2, 9, 5];
```


Vemos que [Javascript](https://www.manualweb.net/javascript/) no es tipado, así que simplemente declaramos una variable y le asignamos los cinco números en un array.


## Inicializar la variable numeroMayor


Ahora vamos a declarar una nueva variable llamada `numeroMayor` que es aquella que contendrá el número mayor de los cinco. Y la vamos a inicializar con el valor del primer número del array. Ya que asumiremos que este número será, para empezar, el mayor de todos.


```javascript
var numeroMayor = numeros[0];
```


Vemos que los accesos a los elementos del array se realizan mediante el operador corchete `[]`.


## Recorrer el array


Lo siguiente que haremos para calcular el mayor de cinco números en [Javascript](https://www.manualweb.net/javascript/) es ir recorriendo el array, para descubrir si hay algún número mayor que el que hemos determinado como `numeroMayor`. Para recorrer el array simplemente utilizaremos una estructura `for` que empiece por el segundo número:


```javascript
for (x=1; x<numeros.length; x++) {
}
```


## Comparar con numeroMayor


En medio del bucle haremos la comprobación si el número del array sobre el que estamos es mayor que el marcado como `numeroMayor`, en el caso de que lo sea, lo que haremos será asignar el número actual como nuevo valor del `numeroMayor`


```javascript
for (x=1; x<numeros.length; x++) {
  if (numeros[x] > numeroMayor)
    numeroMayor = numeros[x];
}
```


## Mostrar el resultado


Ya solo nos quedará mostrar el valor de la variable `numeroMayor` que será la que contenga el mayor de cinco números en Javascript.


```javascript
console.log('El número mayor es: ' + numeroMayor);
```

