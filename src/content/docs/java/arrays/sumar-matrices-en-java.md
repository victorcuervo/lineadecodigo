---
title: "Sumar matrices en Java"
description: "Aprende a sumar matrices en Java, validar sus dimensiones, recorrer sus elementos con bucles y controlar errores cuando las estructuras no coinciden."
date: 2010-07-28
updatedDate: 2026-11-01
tags: ["exception","try-catch","for","array","matriz"]
slug: java/arrays/sumar-matrices-en-java
type: doc
topic: java
id: 6cb4a7c3-a4d4-47f4-b512-bccb53aa35f0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/SumarMatrices.java
---

Seguimos con los ejemplos de matrices, ahora que ya hemos visto [cómo crear una matriz con Java](http://lineadecodigo.com/java/crear-una-matriz-en-java/). En este caso vamos a realizar la suma de dos matrices. Para llevar a cabo el ejemplo hemos definido un método [Java](https://www.manualweb.net/java/) que nos permite sumar las matrices. La firma de dicho método será la siguiente:


```java
public static int[][] sumarmatrices (int[][] m1,int[][] m2) throws Exception {...}
```


Como podemos ver, el método [Java](https://www.manualweb.net/java/) recibe dos matrices y devuelve otra, que contiene el resultado de la suma. También puede generar una [Exception](http://w3api.com/wiki/Java:Exception) cuando las dimensiones de las matrices sean diferentes, ya que dos matrices solo se pueden sumar si tienen la misma estructura.


## Cómo validar las dimensiones de las matrices


La comprobación de las dimensiones se hace apoyándonos en la propiedad `length`:


```java
if ((m1.length == m2.length) && (m1[0].length == m2[0].length)) {...}
```


En el caso de no coincidir los tamaños, es cuando elevamos la [Exception](http://w3api.com/wiki/Java:Exception):


```java
if ((m1.length == m2.length) && (m1[0].length == m2[0].length)) {
  ...
} else {
  throw new Exception();
}
```


Este fragmento presupone que las matrices no están vacías y que son rectangulares, es decir, que todas sus filas tienen la misma longitud. En Java, una matriz bidimensional es realmente un array de arrays y puede ser irregular. Por eso, en una implementación reutilizable conviene comprobar también que cada fila existe y que su longitud coincide con la fila equivalente de la otra matriz.


## Recorrer y sumar los elementos


En caso afirmativo procederemos a sumar los elementos de las matrices. Hay que recordar que la suma de las matrices es la suma de todos sus elementos posición a posición. Por lo tanto, la suma es sencilla. Solo tenemos que recorrer todos los elementos y dejar el resultado en la matriz destino. Así, lo primero es crear una matriz resultado de las mismas dimensiones:


```java
int[][] suma = new int[m1.length][m1[0].length];
```


Para recorrer los elementos nos apoyamos en un bucle `for` y, nuevamente, en la propiedad `length`:


```java
for (int x = 0; x < m1.length; x++) {
  for (int y = 0; y < m1[x].length; y++) {
    suma[x][y] = m1[x][y] + m2[x][y];
  }
}
```


La expresión `m1[x].length` permite obtener la longitud de la fila que se está procesando. En matrices rectangulares coincide con la longitud de cualquier otra fila, mientras que en una matriz irregular evita asumir un tamaño único para todas ellas.


Ahora solo nos quedará devolver la matriz con el resultado de la suma:


```java
return suma;
```


## Invocar el método


Invocar el método es sencillo. Solo hay que tener en cuenta que puede lanzar una [Exception](http://w3api.com/wiki/Java:Exception) y, por lo tanto, lo deberemos invocar desde un bloque `try-catch`:


```java
int[][] matriz1 = {{2, 4, 4}, {6, 6, 9}};
int[][] matriz2 = {{2, 4, 4}, {6, 6, 9}};

try {
  int[][] matriz = sumarmatrices(matriz1, matriz2);
  pintarmatriz(matriz);
} catch (Exception e) {
  System.out.println("Matrices de diferente dimensión");
}
```


La variable `matriz` no necesita reservarse antes de llamar al método: la propia función crea y devuelve una matriz con las dimensiones correctas. El método `pintarmatriz` representa el procedimiento que muestra la matriz por consola y debe estar definido en el programa, como en los ejemplos anteriores. Con los datos utilizados, el resultado esperado es una matriz con las filas `{4, 8, 8}` y `{12, 12, 18}`.


## Implementación completa y comprobaciones adicionales


El código siguiente reúne la lógica del ejemplo y maneja referencias nulas, matrices sin filas y filas con longitudes diferentes. Se mantiene el nombre del método original para que el ejemplo siga siendo reconocible:


```java
public static int[][] sumarmatrices(int[][] m1, int[][] m2) throws Exception {
  if (m1 == null || m2 == null || m1.length != m2.length) {
    throw new Exception("Las matrices deben tener el mismo número de filas");
  }

  int[][] suma = new int[m1.length][];

  for (int x = 0; x < m1.length; x++) {
    if (m1[x] == null || m2[x] == null || m1[x].length != m2[x].length) {
      throw new Exception("Las matrices deben tener la misma dimensión");
    }

    suma[x] = new int[m1[x].length];

    for (int y = 0; y < m1[x].length; y++) {
      suma[x][y] = m1[x][y] + m2[x][y];
    }
  }

  return suma;
}
```


La suma de matrices tiene un coste proporcional al número de posiciones procesadas. En una matriz rectangular de filas y columnas, el algoritmo recorre todas las posiciones una vez y necesita otra matriz para almacenar el resultado.

