---
title: "Números impares en Java"
description: "Código que nos explica cómo podemos mostrar los 100 primeros números impares en Java utilizando un operador módulo y un bucle for."
date: 2006-12-10
updatedDate: 2026-01-06
tags: ["bucles","while","operadores","impares"]
slug: java/numeros/numeros-impares-en-java
author: victor_cuervo
type: doc
id: cfe2d8be-8387-426f-87df-ba2218e3f21f
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumeroImpar.java
---

Un número impar es aquel que no es múltiplo de dos. Es decir, todos aquellos números que no son pares. Mediante el lenguaje [Java](https://www.manualweb.net/java/) podremos calcular de una forma muy sencilla qué números son impares y cuáles no.


Para ello, lo primero que vamos a hacer es crear una función que dado un número, nos diga si este es impar o no. Dicha función la podremos usar de múltiples formas, como veremos al final del ejemplo.


Para definir nuestra función impar lo haremos de la siguiente forma:


```java
public boolean esImpar(int iNumero) {...}
```


Vemos que, como parámetro de entrada, le llega el número sobre el que haremos el cálculo y el valor de retorno es un número booleano.


Para saber si dicho número es impar, deberemos usar el axioma de partida: no es múltiplo de dos. Lo que podríamos resumir de otra forma, indicando que su resto, si lo dividimos por dos, es 1. Para poder calcular el resto de la división deberemos utilizar el operador de módulo (%).


De esta forma, nuestra función quedará de la siguiente manera:


```java
public boolean esImpar(int iNumero) {
  if (iNumero%2!=0)
    return true;
  else
    return false;
}
```


Como podemos ver, la función es bastante trivial.


La idea es ver cómo podemos utilizar esta función. El caso más básico será conocer si un número es impar. Para ello, nos bastará una [línea de código](https://lineadecodigo.com/) invocando a la función:


```java
esImpar(12);
```


Otro ejemplo sería si necesitamos saber cuál de los 100 primeros números es impar. En este caso podemos usarla de la siguiente forma:


```java
for (int x=1;x<=100;x++) {
  if (esImpar(x))
    System.out.println(x);
}
```


O, sacar los 100 primeros números impares. En este caso deberemos complicar un poco más el código utilizando una variable contador que nos diga si ya tenemos los 100 números impares. Veamos el código:


```java
int contador = 0;
int incremento = 1;

while (contador !=100) {
  if (esImpar(incremento)) {
    System.out.println(incremento);
    contador++;
  }
  incremento++;
}
```


Como podemos apreciar, podemos utilizar la función de diferentes maneras y en diferentes escenarios.

