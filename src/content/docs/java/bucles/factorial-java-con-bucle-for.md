---
title: "Factorial Java con bucle for"
description: "Artículo que explica de una forma sencilla cómo calcular el factorial Java con bucle for. Alternativa al cálculo de un factorial utilizando recursividad."
date: 2017-10-07
updatedDate: 2026-01-09
tags: ["bucles","for","factorial"]
slug: java/bucles/factorial-java-con-bucle-for
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/FactorialDeUnNumeroFor.java
topic: java

---

La forma más óptima para [calcular el factorial de un número con Java es mediante el uso de la recursividad](http://lineadecodigo.com/java/factorial-de-un-numero/). Si bien el método más directo que nos viene al pensar en la definición de un factorial es el uso de una estructura repetitiva. En este ejemplo vamos a calcular un factorial [Java](https://www.manualweb.net/java/) con bucle for.


## Cómo se calcula el factorial de un número.


Lo primero es definir cómo se calcula el factorial de un número, una operación matemática fundamental que nos permite multiplicar una secuencia de números naturales consecutivos. El factorial de un número, representado con el símbolo "!", viene dado por la siguiente fórmula matemática:


```text
n! = 1 x 2 x 3 x 4 x 5 x ... x (n-1) x n.
```


Siendo el factorial de un número la multiplicación de todos los números naturales consecutivos desde el 1 hasta el número del que queremos calcular el factorial. Esta operación es especialmente útil en matemáticas y programación para calcular combinaciones y permutaciones, entre otras aplicaciones.


## Calcular el factorial Java con bucle for.


Una vez explicado esto, entendemos que el [uso de un bucle Java](https://manualweb.net/java/sentencias-bucle-java/) como puede ser el bucle de tipo [`for`](https://manualweb.net/java/sentencias-bucle-java/#for) cuadra, a la perfección.


Así que lo primero que necesitaremos es definir una variable [Java](https://www.manualweb.net/java/) que vaya a guardar el valor del factorial. Esta variable la inicializamos en 1.


```java
int iFactorial = 1;
```


Lo siguiente será realizar el bucle [`for`](https://manualweb.net/java/sentencias-bucle-java/#for) que irá desde el número 2 hasta el número del cual queremos calcular el factorial. Como podemos observar en el siguiente [código Java](https://lineadecodigo.com/categoria/java/):


```java
for (int x=2;x<=iNumero;x++)
  iFactorial = iFactorial * x;
```


En cada una de las iteraciones del bucle `for` multiplicamos el número del bucle por el número almacenado en `iFactorial`. Al terminar [el bucle Java](https://manualweb.net/java/sentencias-bucle-java/) será la variable `iFactorial` la que contenga el valor que buscamos.


Es por ello que solo tendremos que volcar el contenido de dicha variable por pantalla:


```java
System.out.println("El factorial del número " + Integer.toString(iNumero) +  " es " + Integer.toString(iFactorial));
```


Como los cálculos los estamos haciendo sobre números enteros, tenemos que apoyarnos en la clase [`Integer`](https://www.w3api.com/Java/Integer/) y su método [`.toString()`](https://www.w3api.com/Java/Integer/toString/) para poder convertirlos a cadenas.


Y ya habremos calculado el factorial [Java](https://www.manualweb.net/java/) con bucle for.

