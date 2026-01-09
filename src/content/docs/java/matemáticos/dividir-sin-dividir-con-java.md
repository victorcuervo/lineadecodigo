---
title: "Dividir sin dividir con Java"
description: "Cómo conseguir dividir sin dividir con Java. Es decir, obtener el cociente y el resto sin utilizar los operadores de división y módulo."
date: 2016-02-18
updatedDate: 2026-01-09
tags: ["while","division","bucles"]
slug: java/matematicos/dividir-sin-dividir-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/DividirSinDividir.java
topic: java

---

Un problema muy sencillo de programación, y que nos habéis preguntado en los foros, que nos puede dar algún quebradero de cabeza es el de dividir sin dividir con [Java](https://www.manualweb.net/java/). Es decir, cómo podemos obtener el cociente y el resto de una división sin utilizar el operador de división (/), ni el operador de resto(%). En una operación normal tendríamos la siguiente operación:


```java
int cociente = dividendo/divisor;
int resto = dividendo%divisor;
```


Pero ahora no utilizaremos los operadores. Lo primero que tenemos que recordar es que una división es un conjunto de restas. De tal manera que el cociente será el número de restas que hagamos del divisor sobre el dividendo y su resultado hasta que la resta sea 0 o menor de 0. Es decir, si tenemos que dividir 13 entre 2 tendríamos la siguiente secuencia:


```text
13/2
13 - 2 = 11
11 - 2 = 9
9 - 2 = 7
7 - 2 = 5
5 - 2 = 3
3 - 2 = 1
1 - 1 = -1
```


El cociente será el número de restas ejecutadas, en este caso 6. Y el resto será el valor de la última resta, pero en positivo. Cuando vayamos a codificar el dividir sin dividir con Java lo primero que haremos será definir el dividendo y divisor.


```java
int dividendo = 13;
int divisor = 2;
```


Por otro lado definimos una variable que sea el cociente y que incrementaremos en cada resta.


```java
int cociente = 0;
```


Y ahora empezamos a realizar las restas mediante un bucle, mientras el resultado sea mayor de 0.


```java
while (dividendo >0) {
  cociente++;
  dividendo = dividendo-divisor;								
} 
```


Ya solo nos quedará el mostrar el cociente y el resto.


```java
System.out.println("Cociente " + cociente);
System.out.println("Resto " + (-dividendo));
```


Y ya habremos conseguido el dividir sin **dividir con Java**.

