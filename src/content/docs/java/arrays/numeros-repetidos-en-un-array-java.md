---
title: "Números repetidos en un array Java"
description: "Código que nos enseña cómo encontrar los Números repetidos en un array Java mediante bucles de forma optimizada."
date: 2014-01-30
updatedDate: 2026-01-08
tags: ["bucles","while","for-each","array"]
slug: java/arrays/numeros-repetidos-en-un-array-java
type: doc
topic: java
id: c62962ae-124a-4e47-bbf9-d11d306d012d
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/NumerosRepetidosArray.java
---

Los ejercicios de manipulación de arrays son muy recomendables para aprender la lógica de programación [Java](https://www.manualweb.net/java/), así como sus estructuras. De esta forma tenemos algunos ejemplos como [encontrar el primer número repetido](http://lineadecodigo.com/java/primer-numero-repetido/), [encontrar el número mayor y su posición](http://lineadecodigo.com/java/numero-mayor-y-su-posicion/),...


En este caso vamos a ver cómo podemos encontrar los números repetidos en un array [Java](https://www.manualweb.net/java/). Es decir, la idea es partir de un primer array que contenga los números a buscar.


```java
int numeros[] = {1,2,3,4};
```


Y tener un segundo array que contenga la lista sobre la que buscamos.


```java
int lista[]= {2,4,5,2,4,4,4,3,4,2,3};
```


Una solución rápida sería realizar dos bucles for, el primero que recorra el primer array [Java](https://www.manualweb.net/java/) y el segundo que recorra el segundo array [Java](https://www.manualweb.net/java/).


```java
for (int x=0;x<numeros.length;x++) {
  for (int y=0;y<lista.length;y++) {
    if (numeros[x]==lista[y])
      System.out.println("el número "+numeros[x]+" está repetido");
  }
}
```


La verdad que este código funcionaría ya que al recorrer los dos arrays [Java](https://www.manualweb.net/java/) chequearíamos todos los números. Si bien vamos a intentar que sea un poco más óptimo en la búsqueda. Y es que la idea es, en primer lugar, ir [recorriendo el array de números](https://lineadecodigo.com/java/listar-elementos-de-un-array/) (igual que hacíamos antes).


```java
for (int x=0;x<numeros.length;x++) { ....}
```


Pero en la búsqueda sobre la lista vamos a [utilizar un bucle while de Java](https://manualweb.net/java/sentencias-bucle-java/#do-while). Este bucle contendrá dos condiciones, por un lado la del límite del array y por otro un flag que nos diga si hemos encontrado el número, ya que en este caso no hace falta buscar más y podremos parar la búsqueda.


El código sería el siguiente:


```java
for (int x=0;x<numeros.length;x++) {
  encontrado=false;
  iter=0;

  while ((!encontrado) && (iter < lista.length)) {
    ...
  }
}
```


Vemos que hemos utilizado un flag encontrado que estará a "false" mientras no encuentre el número, será en este momento cuando cambiemos su valor para salir del bucle.


```java
for (int x=0;x<numeros.length;x++) {

  encontrado=false;
  iter=0;

  while ((!encontrado) && (iter < lista.length)) {
    if (lista[iter] == numeros[x])
      encontrado = true;
      iter++;
  }
}
```


Ya solo nos quedará preguntar por la variable encontrado para ver si se ha encontrado el número.


```java
for (int x=0;x<numeros.length;x++) {

  encontrado=false;
  iter=0;

  while ((!encontrado) && (iter < lista.length)) {
    if (lista[iter] == numeros[x])
      encontrado = true;
      iter++;
    }

    if (encontrado)
      System.out.println (numeros[x] + " es un número repetido. Encontrado en " + iter + " búsquedas");
    else
      System.out.println (numeros[x] + " no está en la lista. No encontrado en " + iter + " búsquedas");
}
```


Adicionalmente vemos que en la variable `iter` tenemos el número de búsquedas que hemos realizado en el segundo array [Java](https://www.manualweb.net/java/). Con esto ya tenemos resuelto cómo buscar números repetidos en un array [Java](https://www.manualweb.net/java/).

