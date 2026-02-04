---
title: "Multiplicar una matriz por un escalar en Java"
description: "Ejemplo que nos explica como podemos codificar el multiplicar una matriz por un escalar en Java."
date: 2015-07-26
updatedDate: 2026-01-11
tags: ["matriz","for","array","bucles"]
slug: java/arrays/multiplicar-una-matriz-por-un-escalar-en-java
type: doc
topic: java
id: c1532083-3dfe-4a78-bde9-48841a587560
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/MatrizPorEscalar.java
---

Multiplicar una matriz por un escalar en Java consiste en multiplicar el contenido de una matriz por un número real. Para ello se multiplicará el valor de cada uno de los elementos de la matriz por el valor del número real.


![Imagen gracias a Maths is Fun](../../../../assets/java/images/matriz-por-escalar.gif)


## Crear la matriz


Para llevar a cabo nuestra codificación lo primero que haremos será crear nuestra matriz.


```java
int[][] matriz = { {1,2}, {3,4} };
```


## Definir el escalar


Y luego nuestro escalar o número entero.


```java
int escalar = 3;
```


## Matriz de resultados


Además, aunque no sería necesario, vamos a crear una matriz para almacenar el resultado.


```java
int[][] resultado = new int[matriz.length][matriz[0].length];
```


Vemos que evaluamos el tamaño del array bidimensional anterior para crear la matriz de resultados.


## Recorrer la matriz


Para poder realizar el código de multiplicar una matriz por un escalar en Java lo que tenemos que hacer es ir recorriendo la matriz mediante un par de bucles anidados:


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {
    // Código de multiplicación
  }
}
```


Así el resultado de cada una de las posiciones x,y será multiplicar el contenido que haya en la matriz dentro de la posición x,y por el número escalar. Quedándonos el siguiente código:


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {
    resultado[x][y] = matriz[x][y] * escalar;
  }
}
```


Como podemos ver es muy sencillo realizar un código que nos permita multiplicar una matriz por un escalar en Java.

