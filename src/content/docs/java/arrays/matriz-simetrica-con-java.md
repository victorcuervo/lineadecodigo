---
title: "Matriz Simétrica con Java"
description: "Código que nos calcula si tenemos una matriz simétrica con Java. Ayuda con el cálculo para transponer una matriz."
date: 2015-08-07
updatedDate: 2026-01-11
tags: ["matriz","deepequals","java","array","matriz-simetrica"]
slug: java/arrays/matriz-simetrica-con-java
type: doc
topic: java
id: b36fcb26-96b4-45f1-a7d1-45f2799bbfd6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/MatrizSimetrica.java
---

En este ejemplo vamos a calcular una **matriz simétrica** con [Java](https://www.manualweb.net/java/). Una **matriz simétrica** es aquella donde la matriz es igual a la matriz transpuesta.


## ¿Qué es una matriz simétrica?


Una matriz es simétrica cuando es igual a su transpuesta. Es decir, cuando:


$$
A = A^t
$$


## Transponer la matriz


Así que lo primero que tenemos que saber es cómo [calcular la matriz transpuesta con Java](http://lineadecodigo.com/java/transponer-una-matriz-en-java/) (A<sup>t</sup>). Es decir, convertir sus filas en columnas. Hemos creado una [clase ](https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/Matriz.java)[Matriz.java](http://matriz.java/) la cual contiene múltiples operaciones. Entre las cuales encontrarás la de [transponer una matriz con Java](http://lineadecodigo.com/java/transponer-una-matriz-en-java/).


```java
public static int[][] transponer(int[][] m) {
    int[][] mt = new int[m[0].length][m.length];
    for (int i = 0; i < m.length; i++) {
        for (int j = 0; j < m[i].length; j++) {
            mt[j][i] = m[i][j];
        }
    }
    return mt;
}
```


## Crear la matriz


Creamos la matriz de la cual queremos saber si es simétrica.


```java
int[][] m1 = {{1, 2, 3}, {2, 4, 5}, {3, 5, 6}};
```


## Obtener la matriz transpuesta


E invocamos para obtener la matriz transpuesta el método anterior:


```java
int[][] m2 = Matriz.transponer(m1);
```


## Comparar las matrices


Ahora tendremos que comparar si m1 y m2 son iguales. Para ello recuerda que [no podemos utilizar ni el operador igual ni el método equals. Si no que tenemos que utilizar el método .deepEquals](http://lineadecodigo.com/java/comparar-matrices-en-java/).


```java
if (Arrays.deepEquals(m1, m2)) {
    System.out.println("La matriz es simétrica");
} else {
    System.out.println("La matriz no es simétrica");
}
```


En nuestra [clase Matriz.java](https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/Matriz.java) también hemos creado este método que podrás utilizar. Así que lo último que hacemos para saber si es una **matriz simétrica** con [Java](https://www.manualweb.net/java/) será compararlas.


```java
if (Matriz.esIgual(m1, m2)) {
    System.out.println("La matriz es simétrica");
}
```

