---
title: "Números que contengan un cero"
description: "Utilizar la operación de módulo con Java nos ayuda a mostrar los números que contengan un cero desde el 1 hasta el 100 de una forma sencilla."
date: 2019-10-21
updatedDate: 2026-01-11
tags: ["bucles","for","modulo","operadores","numeros","division"]
slug: java/matematicos/numeros-que-contengan-un-cero
author: victor_cuervo
type: doc
id: 6173f350-3ab1-4109-b92f-b4e44b158e80
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumerosConCeroHasta100.java
---

¿Podemos listar todos los números que contengan un cero desde el 1 al 100 con [Java](http://www.manualweb.net/java/) sin utilizar ninguna función de manejo de cadenas y solo utilizando operaciones matemáticas? Es [una de las preguntas que nos hacíais en los comentarios de un artículo](http://lineadecodigo.com/java/leer-numeros-teclado-java/#comment-112575) y que seguro más de uno está dándole vueltas a como resolverlo. Y es que una de las cosas que se nos puede venir a la cabeza con [Java](http://www.manualweb.net/java/) es utilizar la función `.indexOf()` sobre una cadena, es decir, convertiríamos primero el número en cadena, y buscaríamos si esta contiene el carácter 0 dentro de ella. Si bien, en este caso, nos vamos a apoyar sobre funciones matemáticas para averiguar si el número contiene ese cero. Pero lo primero será iterar sobre los 100 primeros números. Esto es algo realmente sencillo, y para ello un bucle `for` nos va a ayudar.


```java
for (int x=1;x<=100;x++) {
  ...
}
```


Ahora vamos con la operación matemática en [Java](http://www.manualweb.net/java/). Si pensamos en los números que contengan un cero desde el 1 al 100 vemos que estos son los primeros de las decenas, es decir, 10, 20, 30,... así hasta el primero de las centenas, el 100. ¿Qué tienen estos números en común? Pues que **si los dividimos por 10 su resto va a ser de 0**. Así que podemos utilizar el operador % que es el operador que en Java nos ayuda a devolvernos el resto de la división. De esta manera chequeamos si el número dividido por 10 nos devuelve como resto un 0.


```java
if (x%10 == 0) { ... }
```


Ya solo nos quedará el insertar la condición dentro del bucle para poder obtener todos los números que contengan un cero desde el 1 al 100 por consola con [Java](http://www.manualweb.net/java/).


```java
for (int x=1;x<=100;x++) {
  if (x%10 == 0)
    System.out.println(x);
}
```


Espero que os haya servido de utilidad. Ahora la pregunta sería, ¿se te ocurre otra forma en [Java](http://www.manualweb.net/java/) de poder realizarlo sin convertirlo a cadenas o utilizar el operador de módulo?

