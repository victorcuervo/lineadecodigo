---
title: "Dígitos de un número"
description: "Cómo poder calcular la cantidad de dígitos de un número con Java. Para ello convertiremos el número en cadena y veremos su tamaño."
date: 2010-05-18
updatedDate: 2026-01-08
tags: ["string","integer","bucles","while"]
slug: java/numeros/digitos-de-un-numero
type: doc
topic: java
id: 96e133ca-7834-4e4b-ab51-bf23147e9ba0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumeroDigitos.java
---

Hay una cosa muy sencilla, muy sencilla que [nos pide mucha gente](http://www.dudasprogramacion.com/303/mini-programas-y-problemas-en-java). Y esta es saber cuántos dígitos tiene un número con [Java](https://manualweb.net/java/).


### Dígitos de un número con el tamaño de la cadena


Lo primero será partir de un número. En este caso hemos creado un número entero al que le hemos asignado un valor:


```java
int iNumero = 123458;
```


Lo siguiente que vamos a hacer es convertir este número en una cadena [`String`](https://www.w3api.com/Java/String/). Para ello utilizamos el método [`toString`](https://www.w3api.com/Java/Integer/toString/) de [`Integer`](https://www.w3api.com/Java/Integer/). Dicho método recibe como parámetro el número que habíamos creado previamente y lo convierte en un dato de tipo [`String`](https://www.w3api.com/Java/String/).


La sintaxis del método [`toString`](https://www.w3api.com/Java/Integer/toString/) de [`Integer`](https://www.w3api.com/Java/Integer/) es la siguiente:


```java
String x = Integer.toString(iNumero);
```


Ahora que tenemos la cadena, será tan simple como conocer el tamaño de la misma, mediante [`.length()`](https://www.w3api.com/Java/String/length), lo cual coincidirá con la cantidad de dígitos de el número inicial.


```java
System.out.println(iNumero + " tiene " + x.length() + " dígitos");
```


Como dije al principio, el ejemplo es muy sencillo y útil para aquellos que empiezan a aprender el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/). Quizás para la gente que maneje más el lenguaje le pueda resultar poco útil. Pero nunca está de más revisar los conceptos básicos de cualquier lenguaje.


### Dígitos de un número mediante un cálculo matemático


Existen otras formas alternativas que nos permiten [trabajar con los números](https://lineadecodigo.com/tag/java-integer/) sin tener que convertirlos en cadenas de texto, y posiblemente más artificiales, aunque con una base fundamentada en la matemática que es la utilización de un [bucle de tipo while](https://lineadecodigo.com/tag/java-bucles-while/) y la división entre 10.


En este caso vamos a dividir el número entre 10 mientras que el valor resultado de la división sea mayor de 0.


```java
int iCantidad = 0;
int iTemp = iNumero;

while (iTemp>0){
  iTemp = iTemp/10;
  iCantidad++;
}

System.out.println(iNumero + " tiene " + iCantidad + " dígitos");
```


El número de dígitos de un número coincidirá con tantas veces como podamos dividir dicho número entre 10.


¿Se te ocurre otra forma de calcular los dígitos de un número? Compártela con nosotros.

