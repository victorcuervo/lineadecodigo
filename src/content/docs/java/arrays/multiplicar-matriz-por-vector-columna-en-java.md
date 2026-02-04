---
title: "Multiplicar matriz por vector columna en Java"
description: "Ejemplo que nos muestra como podemos multiplicar matriz por vector columna en Java utilizando la multiplicación de un array por un array bidimensional."
date: 2015-08-09
updatedDate: 2026-01-11
tags: ["matriz","vector","array","for","bucles","multiplicar"]
slug: java/arrays/multiplicar-matriz-por-vector-columna-en-java
type: doc
topic: java
id: c1e80874-86a4-45fa-b8a4-9605aa2c64a3
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/MatrizPorVector.java
---

Para conseguir multiplicar matriz por vector columna en Java nos puede servir sencillamente [el ejemplo de como multiplicar matrices](http://lineadecodigo.com/java/multiplicar-matrices-en-java/) asegurándonos que una de las matrices tiene una sola columna.


```java
int[][] vectorColumna = { {1}, {2} };
```


De esta sencilla forma habríamos conseguido multiplicar matriz por vector columna en Java.


```java
int[][] resultado = multiplicarMatrices(matriz, vectorColumna);
```


> Recuerda revisar la clase [Matriz.java](http://matriz.java/) la cual contiene todos los ejemplos de manipulación de matrices de Línea de Código.


## Representar el vector como array


Pero sabemos que en Java hay otra forma de representar los Vectores para almacenar los elementos, las cuales no nos implique crear un array bidimensional. Por ejemplo **podemos tener un simple array para representar el vector columna**.


```java
int[] vectorColumna = {1, 2};
```


Así que ahora **para conseguir multiplicar matriz por vector lo que haremos será multiplicar un array bidimensional por un array**.


## Guardar tamaños de filas y columnas


Vayamos paso a paso. Vamos a guardarnos los valores de los tamaños de filas y columnas.


```java
int filasMatriz = matriz.length;
int columnasMatriz = matriz[0].length;
int columnasVector = 1;
int elementosVector = vectorColumna.length;
```


Vemos que en el caso del vector las columnas es igual a 1.


## Comprobar dimensiones


Ahora tenemos que comprobar que el número de columnas de la matriz coincide con el número de elementos del array. Como ya lo habíamos guardado en las variables tenemos que:


```java
if (columnasMatriz != elementosVector) {
  System.out.println("No se puede multiplicar");
  return;
}
```


## Crear matriz resultado


La matriz resultado será del número de filas por una columna.


```java
int[] resultado = new int[filasMatriz];
```


## Bucles de multiplicación


Lo siguiente será ya pasar al bucle de multiplicación. Hay que recordar que para multiplicar matrices deberemos de utilizar tres bucles anidados. Los dos primeros nos dan la posición del resultado en la matriz destino.


```java
for (int x=0; x < filasMatriz; x++) {
  resultado[x] = 0;
}
```


El tercer bucle es el que multiplica la fila por la columna. En este caso la fila por cada uno de los elementos del array y los va sumando para dejar en la posición de la matriz.


```java
for (int x=0; x < filasMatriz; x++) {
  for (int y=0; y < columnasMatriz; y++) {
    resultado[x] += matriz[x][y] * vectorColumna[y];
  }
}
```

