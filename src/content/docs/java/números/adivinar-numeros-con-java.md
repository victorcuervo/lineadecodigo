---
title: "Adivinar números con Java"
description: "Aprende a crear un juego para adivinar números con Java. Descubre cómo usar ArrayList, Scanner y bucles para almacenar y buscar números de forma interactiva."
date: 2019-09-23
updatedDate: 2026-10-24
tags: ["arraylist","scanner","for","while"]
slug: java/numeros/adivinar-numeros-con-java
type: doc
topic: java
id: d6827c40-a4bb-4356-8c40-a490858bce62
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/NumeroEnArray.java
---

Revisando el código publicado he caído en la cuenta de que había un código publicado del que no había escrito un artículo y este es sobre cómo adivinar números con [Java](http://www.manualweb.net/java/).


La dinámica es muy sencilla y consiste en pedir al usuario un listado de números para guardarlos, en este caso vamos a guardar 10 números, aunque podríamos ajustarlo a los que quisiéramos y luego entraría en la dinámica de preguntar al usuario para poderlo adivinar.


Así que pongámonos manos a la obra con el código para adivinar números con [Java](http://www.manualweb.net/java/).


## Definir el array para almacenar números


Lo primero será definir un array que será la estructura en la que almacenaremos los números. Para ello nos vamos a ayudar de un [`ArrayList`](http://w3api.com/wiki/Java:ArrayList).


```java
ArrayList<Integer> misnumeros = new ArrayList<Integer>(10);
```


## Pedir los números al usuario


Lo siguiente será pedirle al usuario que introduzca los 10 números. Como es una cantidad fija vamos a utilizar un bucle `for`. La clase [`Scanner`](http://w3api.com/wiki/Java:Scanner) será la que nos sirva para acceder a la consola del usuario y pedirle los números.


```java
Scanner reader = new Scanner(System.in);  

for (int x=0;x<10;x++) {
  System.out.println("Inserte un número");
  misnumeros.add(reader.nextInt());
}
```


Podemos comprobar que utilizamos el método [`.nextInt()`](http://w3api.com/wiki/Java:Scanner.nextInt()) para leer los números enteros por consola.


## Implementar la lógica para adivinar


Una vez tenemos cargados los números podemos empezar con la lógica de adivinar números con [Java](http://www.manualweb.net/java/). La idea es apoyarnos en un bucle `while`, el cual tendrá como condición de salida el número 0. Es decir, mientras el usuario no introduzca el 0 seguiremos preguntando por el número a adivinar.


```java
int numeroBuscar = reader.nextInt();

while (numeroBuscar!=0) {
  ...
  numeroBuscar = reader.nextInt();
}
```


## Buscar el número con contains()


Para poder buscar el número en el array nos apoyamos en el método `.contains()`. Dicho método nos devuelve true en el caso que el valor pasado se encuentre dentro del Array.


> Es importante ver que el método `.contains()` nos lo ofrece la clase [`ArrayList`](http://w3api.com/wiki/Java:ArrayList). Es por ello que hemos utilizado dicha clase para almacenar el array en vez de un sencillo array de datos.


De esta forma el código dentro del bucle nos quedaría de la siguiente forma:


```java
int numeroBuscar = reader.nextInt();

while (numeroBuscar!=0) {
  if (misnumeros.contains(numeroBuscar)) {
    System.out.println("Contiene el número " + numeroBuscar);
  } else {
    System.out.println("No contiene el número " + numeroBuscar);
  }

  System.out.println("Busca un número, 0 para salir");
  numeroBuscar = reader.nextInt();
}
```


Una vez introducido el valor 0 se acabará nuestro juego de adivinar números con [Java](http://www.manualweb.net/java/).

