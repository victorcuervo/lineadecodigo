---
title: "Comparar Matrices en Java"
description: "Se explica cómo comparar matrices en Java utilizando los métodos equals y deepEquals para verificar su igualdad."
date: 2015-07-22
updatedDate: 2026-01-09
tags: ["array","matriz","equals","deepequals"]
slug: java/arrays/comparar-matrices-en-java
type: doc
topic: java
id: 0265c615-ead6-4a06-9445-f16df2b4fa00
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/MatricesIguales.java
---

Mediante el siguiente ejemplo vamos a ver como podemos comparar matrices en [Java](https://www.manualweb.net/java/). Es decir ver si dos matrices son iguales, si tienen el mismo número de elementos y dichos elementos coinciden. Lo primero que tenemos que recordar es que una matriz en [Java](https://www.manualweb.net/java/) es un array, un array bidimensional:


```java
int[][] matriz1 = {{1,2,3},{4,5,6}};
int[][] matriz2 = {{1,2,3},{4,5,6}};
```


Es por ello que podríamos reducir que para comparar Matrices en [Java](https://www.manualweb.net/java/) podríamos realizar una comparación de Arrays mediante el método .equals.


```java
if (Arrays.equals(matriz1, matriz2))
  System.out.println("Son matrices iguales");
else
  System.out.println("Son matrices diferentes");
```


El problema es que el método equals va a ejecutar el comparador de objetos.


```java
.equals(Object[],Object[])
```


Este comparador solamente va a evaluar las referencias de los objetos y va a ver que son dos objetos diferentes. No realiza ninguna comparación lógica. Por lo tanto el resultado será de false. Para realizar una comparación lógica deberemos de realizar un análisis recursivo. Y para ello tenemos el método .deepEquals(). Este método evaluará de forma cada uno de los elementos que contienen el [array]( "Clase Java Array") bidimensional.


```java
if (Arrays.deepEquals(matriz1, matriz2))
  System.out.println("Son matrices iguales");
else
  System.out.println("Son matrices diferentes");
```


En este caso al comparar matrices en [Java](https://www.manualweb.net/java/) mediante el método .deepEquals obtendremos que las matrices definidas inicialmente son iguales.

