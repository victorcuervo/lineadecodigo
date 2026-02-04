---
title: "Matriz Antisimétrica en Java"
description: "Código que nos enseña a calcular si tenemos una matriz antisimétrica en Java."
date: 2015-08-17
updatedDate: 2026-01-11
tags: ["matriz","equals","deepequals","bucles","for","array"]
slug: java/arrays/matriz-antisimetrica-en-java
type: doc
topic: java
id: 51bc3b7f-e610-44ac-8469-2c4409a79f8c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/MatrizAntiSimetrica.java
---

**Una matriz antisimétrica es aquella cuya matriz transpuesta es igual a la matriz negativa**. Es decir, que cumple:


```java
At = -A
```


Es por ello que para poder calcular si una matriz es antisimétrica en [Java](https://www.manualweb.net/java/) deberíamos de saber como [calcular la matriz transpuesta](http://lineadecodigo.com/java/transponer-una-matriz-en-java/) y como [calcular la matriz negativa](http://lineadecodigo.com/java/matriz-negativa-con-java/).


Lo primero será obtener la matriz transpuesta. Para ello hay que cambiar las filas por columnas:


```java
int[][] mt = new int[m.length][m.length];
for (int x = 0; x < m.length; x++)
  for (int y = 0; y < m.length; y++)
    mt[x][y] = m[y][x];
```


Vemos que lo que hacemos es recorrer toda la matriz mediante dos bucles anidados y finalmente asignar el valor de lo que encontremos en x,y a la posición y,x.


Para generar la matriz negativa vamos a realizar la misma operación con los dos bucles anidados. Lo único que en este caso lo que hacemos es invertir el signo del elemento que se encuentre en la posición x,y:


```java
int[][] mn = new int[m.length][m.length];
for (int x = 0; x < m.length; x++)
  for (int y = 0; y < m.length; y++)
    mn[x][y] = -m[x][y];
```


Ya solo nos quedará comparar las dos matrices. Hay que recordar que para comparar matrices no nos vale el método `equals`, si no que deberemos de utilizar el método `deepEquals` de la clase `Arrays`:


```java
if (Arrays.deepEquals(mn, mt))
  System.out.println("Es una Matriz Antisimétrica");
else
  System.out.println("No es una Matriz Antisimétrica");
```


Para ayudar a calcular una matriz Antisimétrica en  hemos publicado una [clase Matriz.java](https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/Matriz.java) en la que dispones de múltiples métodos para el manejo de matrices. En ella encontraras los métodos `transponer()`, `negativa()` y `equals()`. Así que puedes calcular si una matriz es antisimétrica en Java invocándolos a los tres:


```java
int[][] m = {{0,-2,4},{2,0,2},{-4,-2,0}};

System.out.println("Matriz Inversa");
int[][] mn = Matriz.negativa(m);

System.out.println("Matriz Transpuesta");
int[][] mt = Matriz.transponer(m);

if (Matriz.equals(mn, mt))
  System.out.println("Es una Matriz Antisimétrica");
else
  System.out.println("No es una Matriz Antisimétrica");
```


Ahora que más fácil sería invocar al método `esAntiSimetrica()` en el que ya hemos dispuesto este código y así tendríamos de una forma sencilla el cálculo para saber si tenemos una matriz antisimétrica en [Java](https://www.manualweb.net/java/):


```java
if (Matriz.esAntiSimetrica(m))
  System.out.println("Es una Matriz Antisimétrica");
else
  System.out.println("No es una Matriz Antisimétrica");
```

