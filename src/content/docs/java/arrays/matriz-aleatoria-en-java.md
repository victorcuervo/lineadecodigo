---
title: "Matriz aleatoria en Java"
description: "Cómo utilizar la clase Math y su método random para cargar generar una matriz aleatoria en Java."
date: 2015-08-03
updatedDate: 2026-01-09
tags: ["array","matriz","bucles","for"]
slug: java/arrays/matriz-aleatoria-en-java
author: victor_cuervo
type: doc
id: b339e84b-7ce9-443b-b493-450001b48e3d
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/MatrizAleatoria.java
---

En el ejemplo de hoy vamos a crear una matriz aleatoria en [Java](https://www.manualweb.net/java/). Para ello vamos a utilizar técnicas de generación de números aleatorios para poder rellenar el contenido de la matriz. Lo primero será definir la matriz. Para ello, y como ejemplo vamos a crear una matriz de 5x5.


```java
int matriz[][] = new int[5][5];
```


Ahora vamos a empezar a cargar los números aleatorios en las diferentes partes de la matriz. Para realizar este cometido deberemos de recorrer la matriz mediante dos bucles anidados:


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {
    ...
  }
}
```


Es importante que el primer bucle recorre la filas del array y el segundo recorre el tamaño del array que se encuentre en la posición 0. De esta forma iremos recorriendo todas las posiciones de la matriz: 0,0 0,1 0,2 0,3... Ahora la idea es generar el número aleatorio para poderlo cargar en la posición de la matriz y así tener realmente una matriz aleatoria en [Java](https://www.manualweb.net/java/). Para poder generar el número aleatorio, en este caso entre el 1 y el 10, utilizamos el método [.random()](https://www.w3api.com/Java/Math/.random()) de la [clase Math](https://www.w3api.com/Java/Math/). Este método nos devuelve un número entre el 0.0 y el 1.0, que multiplicándolo por 9 y sumándolo 1 nos da un número aleatorio entre 1 y 10. Si quieres saber más sobre la generación del número aleatorio puedes [consultar Generar Números Aleatorios en Java](http://lineadecodigo.com/java/numero-aleatorio-en-java/). De esta forma el código de carga de la matriz nos quedará de la siguiente forma:


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {
    matriz[x][y] = (int) (Math.random()*9+1);
  }
}
```


La parte de generación de números aleatorios la hemos aplicado solo al contenido. Aunque con la explicación de los visto podríamos haber generado el tamaño de la matriz de forma aleatoria de la siguiente forma:


```java
int matriz[][] = new int[(int) (Math.random()*9+1)][(int) (Math.random()*9+1)];
```


De esta forma hemos visto en este ejemplo lo sencillo que es crear una matriz aleatoria en [Java](https://www.manualweb.net/java/).

