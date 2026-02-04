---
title: "Multiplicar matrices en Java"
description: "Código que nos explica paso a paso como podemos multiplicar matrices en Java."
date: 2015-07-24
updatedDate: 2026-01-11
tags: ["matriz","bucles","for","exception","length","array"]
slug: java/arrays/multiplicar-matrices-en-java
type: doc
topic: java
id: 6f4f99ca-1377-4552-b006-16cf31813c4c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/MultiplicarMatriz.java
---

Ya hemos visto en otros ejemplos como podemos [sumar una matriz en Java](http://lineadecodigo.com/java/sumar-matrices-en-java/) o como podemos [restar dos matrices con Java](http://lineadecodigo.com/java/restar-matrices-en-java/). En este caso vamos a dar un paso más y vamos a ver como podemos multiplicar matrices en [Java](https://www.manualweb.net/java/). La multiplicación de matrices en [Java](https://www.manualweb.net/java/) es un poco más compleja. Pero solo por la mera forma de lo que significa una multiplicación. Y es que para multiplicar matrices lo que se realiza es una multiplicación de las filas por las columnas.


Gráficamente sería algo así:


![Imagen gracias a Maths is Fun](../../../../assets/java/images/multiplicar-matrices.gif)


Además tenemos que saber que para poder multiplicar matrices, las columnas de la primera matriz y las filas de la segunda matriz deben de ser las mismas, ya que si no no podremos realizar la multiplicación. La matriz resultado será del tamaño de las filas de la primera matriz, por las columnas de la segunda matriz. Pues con esta pequeña descripción de la teoría de la multiplicación de matrices vayamos a ver cómo podemos multiplicar matrices en Java. Lo primero será definir nuestras dos matrices en [Java](https://www.manualweb.net/java/):


```java
int[][] m1 = {{1,2,3},{4,5,6}};
int[][] m2 = {{1,2},{1,2},{1,2}};
```


Ahora, a fin de que el ejemplo quede más didácticamente entendible vamos a crear variables con las filas y columnas de las matrices.


```java
int fil_m1 = m1.length;
int col_m1 = m1[0].length;
int fil_m2 = m2.length;
int col_m2 = m2[0].length;
```


> No es necesario que crees estas variables en tu programa y lo mejor es que utilices el valor del atributo .length en cada uno de los casos.


Ahora pasamos con las comprobaciones. Hemos dicho que para poder multiplicar dos matrices en [Java](https://www.manualweb.net/java/) tienen que coincidir el tamaño de las columnas de la primera matriz con el tamaño de las filas de la segunda matriz.


```java
if (col_m1 != fil_m2) {
    throw new RuntimeException("No se pueden multiplicar las matrices");
}
```


En caso de que no coincidan lanzaremos una RuntimeException. Ahora pasamos a crear la matriz resultado. Esta tendrá un tamaño de las filas de la primera matriz con las columnas de la segunda matriz.


```java
int[][] multiplicacion = new int[fil_m1][col_m2];
```


Ya tenemos todo preparado para poder empezar a multiplicar las matrices. Para realizar la multiplicación vamos a apoyarnos en un bucle anidado que recorra la matriz multiplicación y la rellene.


```java
for (int x=0; x < multiplicacion.length; x++) {
    for (int y=0; y < multiplicacion[x].length; y++) {
        // Aquí irá el código de multiplicación
    }
}
```


Para rellenarla hay que considerar que las multiplicaciones son de filas por columnas.


```shell
0,0  ->  0,0*0,0 + 0,1*1,0 + 0,2*2,0
0,1  ->  0,0*0,1 + 0,1*1,1 + 0,2*2,1
1,0  ->  1,0*0,0 + 1,1*1,0 + 1,2*2,0
...
```


Es decir necesitamos un nuevo bucle que recorra la columna de la matriz1 y la fila de la matriz2 multiplicando y sumando sus valores.


Así nuestro nuevo bucle quedará de la siguiente forma:


```java
for (int x=0; x < multiplicacion.length; x++) {
    for (int y=0; y < multiplicacion[x].length; y++) {
        for (int z=0; z<col_m1; z++) {
            multiplicacion[x][y] += m1[x][z]*m2[z][y];
        }
    }
}
```


De esta forma ya tenemos el código que nos permite multiplicar matrices en [Java](http://www.manualweb.net/tutorial-java/).

