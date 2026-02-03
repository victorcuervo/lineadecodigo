---
title: "Factorial de un número en texto"
description: "Cómo realizar el cálculo del factorial de un número, pero para poder mostrar el factorial de un número en texto al estilo 5!=1x2x3x4x5=120."
date: 2021-10-15
updatedDate: 2026-01-08
tags: ["Java Básicos"]
slug: java/bucles/factorial-de-un-numero-en-texto
author: victor_cuervo
type: doc
id: bed9ad56-c97e-48ff-8a7f-94bc0702ada0
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/FactorialDeUnNumeroTexto.java
---

Para calcular el factorial de un número [podemos hacerlo mediante un bucle for](https://lineadecodigo.com/java/factorial-java-bucle-for/) o [mediante recursividad](https://lineadecodigo.com/java/factorial-de-un-numero/). Pero, en los comentarios, nos habéis pedido cómo se puede poner el factorial de un número en texto. Es decir, que no solo indiquemos el valor del factorial, si no que mostremos el cálculo de las multiplicaciones. Todo ello mediante código [Java](https://www.manualweb.net/java). Si recordamos, el factorial de un número es la multiplicación de todos los números desde el número del que queremos calcular el factorial hasta el número 1. Es decir:


```text
5! = 1 x 2 x 3 x 4 x 5 = 120
```


Y lo que buscamos es precisamente eso. Mostrar por pantalla la explicación del cálculo del factorial y su resultado. Lo primero será definir dos variables, `iNumero` para saber sobre qué número calculamos el factorial e `iFactorial` que será la variable que contenga el valor del factorial.


```java
// Numero del que queremos calcular el factorial
int iNumero = 5;

// Variable con el valor del factorial
int iFactorial = 1;
```


Ahora vamos a definir otra variable en la que vamos a ir componiendo la cadena con el resultado.


```java
String sCadena = Integer.toString(iNumero) + "! = 1";
```


Vamos a utilizar el objeto [`Integer`](http://w3api.com/Java/Integer/) y el método [`.toString()`](http://w3api.com/Java/Integer/toString/) para poder convertir el valor del número del que queremos calcular el factorial en una cadena de tipo [`String`](http://w3api.com/Java/String/). Lo siguiente será pasar a realizar el bucle en el que vamos calculando el factorial, multiplicando los valores hasta llegar al número.


```java
for (int x=2;x<=iNumero;x++) {
  iFactorial = iFactorial * x;
  sCadena = sCadena + " x " + Integer.toString(x);
}
```


Vemos que en cada iteración, la cadena se va incrementando con el valor del número por el que vamos calculando el factorial. Podemos comprobar que nos seguimos apoyando en la clase [`Integer`](http://w3api.com/Java/Integer/) y el método [`.toString()`](http://w3api.com/Java/Integer/toString/) para la conversión a una cadena de tipo [`String`](http://w3api.com/Java/String/). Ya solo nos quedará mostrar la cadena del cálculo del factorial, no sin olvidar el poner el resultado del factorial al final de la misma.


```java
System.out.println(sCadena + " = " + Integer.toString(iFactorial));
```


De esta forma tan sencilla habremos conseguido mostrar por consola la cadena que representa el factorial de un número en texto. Espero que os sea de utilidad.

