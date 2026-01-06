---
title: "Variables locales en Javascript"
description: "Ejemplo que nos explica cómo utilizar las variables locales en Javascript y comprobar el ámbito en el cual su valor puede ser accedido."
date: 2021-09-26
updatedDate: 2026-01-06
tags: ["while","try-catch","variable","bucle","error","console-log"]
slug: javascript/variables-locales-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/variable-local.js
topic: javascript
---

Las variables locales en Javascript nos sirven para ajustar el ámbito de validez de una variable al bloque en el que se ejecuta. De esta manera las variables locales en Javascript no pueden ser accedidas fuera del bloque en el que se definen, a no ser que sea un bloque anidado. Y es que en [Javascript](https://www.manualweb.net/javascript), por defecto, las variables son definidas de ámbito global, es decir, una vez definidas pueden ser accedidas desde cualquier sitio. Para definir una variable local en Javascript vamos a utilizar el modificador `let` de la siguiente manera:


```javascript
let variable;
```


Vamos a ver el tema del ámbito. Para ello definimos nuestra primera variable local en [Javascript](https://www.manualweb.net/javascript).


```javascript
let contador = 0;
```


Ahora [creamos un bucle while en Javascript](https://lineadecodigo.com/tag/javascript-bucles/) en el que utilizaremos dicha variable. Al ser un bucle anidado al hilo principal podremos seguir accediendo al valor de nuestra variable local.


```javascript
while (contador < 10) {
    let numero = contador;
    console.log("El valor del contador es " + contador);
    contador++;
}
```


Si bien, si nos fijamos, declaramos una segunda variable local dentro del bucle, una variable que llamamos `número`. El ámbito de esta nueva variable local será única y exclusivamente el ámbito dentro del bucle. Es decir, nunca podremos acceder a ella fuera del bucle. Es por ello, que si intentamos acceder a esta variable después del bucle veremos que se muestra un error en el cual se dice que no se puede acceder a dicha variable local. Para poder controlar este error utilizamos un bucle `try-catch`.


```javascript
try {
    console.log("El valor del numero es " + numero);
} catch (e) {
    console.log(e);
}
```


Vemos que el error que nos devuelve es el siguiente:


```shell
ReferenceError: numero is not defined.
```


De esta forma comprobamos que esta variable local definida dentro del bucle ya no existe. Espero que con este sencillo ejemplo haya servido para explicar el ámbito de las variables locales en Javascript.

