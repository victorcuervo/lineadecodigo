---
title: "Rotar matriz a la izquierda"
description: "Aprende a rotar una matriz a la izquierda 90 grados en Java: transforma filas en columnas con bucles for y adapta el algoritmo a matrices rectangulares."
date: 2021-02-20
updatedDate: 2026-11-01
tags: ["array","matriz","for"]
slug: java/arrays/rotar-matriz-a-la-izquierda
type: doc
topic: java
id: 1671b42a-1588-4c0f-8597-27c288a15369
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/RotarMatriz90Antihorario.java
---

Ya hemos explicado [cómo rotar una matriz con Java](http://lineadecodigo.com/java/rotar-una-matriz/). En ese caso rotábamos la matriz 90 grados. Ahora vamos a rotar matriz a la izquierda con [Java](http://www.manualweb.net/java), es decir, de forma antihoraria en 90º. La idea es que las filas de la matriz pasen a ser las columnas. De tal manera que la primera fila pasa a ser la primera columna, pero de forma inversa; la segunda fila pasa a ser la segunda columna también de forma invertida, y así hasta la última fila, que pasaría a ser la última columna de forma invertida. Pero lo mejor será verlo de forma gráfica. De esta forma podemos comprobar cómo cambian las filas por columnas.


```text
|1      2       3|              |3      6       9|
|4      5       6|      =>      |2      5       8|
|7      8       9|              |1      4       7|
```


La matriz de la izquierda es la original y la matriz de la derecha es el resultado de girarla 90 grados hacia la izquierda. Cada elemento de la posición `[x][y]` termina en la posición `[columnas - 1 - y][x]` de la nueva matriz.


## Crear la matriz en Java


Vamos a codificarlo. Lo primero será crear la matriz en [Java](http://www.manualweb.net/java).


```java
int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
```


Para ello la instanciamos directamente en un array de arrays de tipo entero. Vemos que hemos utilizado las llaves para poder introducir los números de inicialización de la matriz, en los que se puede ver que el primer array contiene a su vez otros arrays que le dan forma a la matriz. Lo siguiente que haremos será definir una nueva matriz que contenga la matriz girada a la izquierda 90º.


```java
int tamanio = matriz.length;
int[][] nuevamatriz = new int[tamanio][tamanio];
```


Hemos asumido que la primera matriz es cuadrada y por ello el tamaño de la nueva matriz le damos tanto a las filas como a las columnas el tamaño de la primera matriz. El tamaño lo obtenemos mediante la propiedad [length](http://www.w3api.com/Java/Array/length) del [Array](http://w3api.com/wiki/Java:Array). Si no, habría que consultar también el tamaño de la primera fila. Ahora pasaremos a recorrer la matriz origen. Esto es sencillo, ya que dos bucles [for](http://www.manualweb.net/java/sentencias-bucle-java/#for) hasta el tamaño de la matriz nos permiten recorrer todos los elementos.


```java
for (int x = 0; x < tamanio; x++) {
  for (int y = 0; y < tamanio; y++) {
    // Rotaremos la matriz a la izquierda
  }
}
```


En cada iteración del bucle tendremos la posición `x, y` que deberemos colocar en la nueva matriz. De tal manera que la fila pasa a ser columna. Así vemos que la variable `x` pasa a ser la variable de fila de la nueva matriz. De momento obviamos las filas.


```text
nuevamatriz[FILA][x] = matriz[x][y];
```


Para las filas lo que hemos dicho es que pasaremos la columna a la fila, pero en orden inverso. Es decir, para nuestra matriz de 3x3, la fila de destino se calcula como `tamanio - 1 - y`. Así, el elemento de la columna situada a la izquierda acaba en la fila inferior y el elemento de la columna situada a la derecha acaba en la fila superior. La asignación del cambio quedaría así:


```java
nuevamatriz[tamanio - 1 - y][x] = matriz[x][y];
```


Solo nos queda meter la asignación en cada iteración del bucle:


```java
for (int x = 0; x < tamanio; x++) {
  for (int y = 0; y < tamanio; y++) {
    nuevamatriz[tamanio - 1 - y][x] = matriz[x][y];
  }
}
```


Ya solo nos quedaría recorrer la nueva matriz para poder comprobar que hemos conseguido rotar matriz a la izquierda con [Java](http://www.manualweb.net/java). El resultado será:


```text
3 6 9
2 5 8
1 4 7
```


## Ejemplo completo con Java


El siguiente ejemplo conserva el algoritmo anterior y añade un método para mostrar la matriz resultante por consola:


```java
public class RotarMatriz90Antihorario {

  public static void main(String[] args) {
    int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int tamanio = matriz.length;
    int[][] nuevamatriz = new int[tamanio][tamanio];

    for (int x = 0; x < tamanio; x++) {
      for (int y = 0; y < tamanio; y++) {
        nuevamatriz[tamanio - 1 - y][x] = matriz[x][y];
      }
    }

    imprimirMatriz(nuevamatriz);
  }

  private static void imprimirMatriz(int[][] matriz) {
    for (int x = 0; x < matriz.length; x++) {
      for (int y = 0; y < matriz[x].length; y++) {
        System.out.print(matriz[x][y] + " ");
      }
      System.out.println();
    }
  }
}
```


La salida del programa coincide con la matriz girada que aparece en el ejemplo gráfico. La complejidad temporal del algoritmo es `O(n²)` para una matriz cuadrada de tamaño `n` y necesita otra matriz para almacenar el resultado, por lo que su complejidad espacial también es `O(n²)`.


## Rotar matrices rectangulares


El código anterior utiliza `matriz.length` para las filas y las columnas porque trabaja con una matriz cuadrada. En una matriz rectangular, la matriz girada tendrá tantas filas como columnas tenía la original y tantas columnas como filas. En ese caso hay que crear la matriz de destino con dimensiones invertidas:


```java
int filas = matriz.length;
int columnas = matriz[0].length;
int[][] nuevamatriz = new int[columnas][filas];

for (int x = 0; x < filas; x++) {
  for (int y = 0; y < columnas; y++) {
    nuevamatriz[columnas - 1 - y][x] = matriz[x][y];
  }
}
```


Este fragmento presupone que la matriz no está vacía y que todas sus filas tienen la misma longitud. En Java, un `int[][]` es un array de arrays y puede ser irregular; si las filas tienen longitudes diferentes, hay que validar esa situación antes de aplicar una rotación rectangular.


El algoritmo conserva la matriz original y construye otra con las coordenadas reorganizadas. Esta opción resulta sencilla de entender y es adecuada para aprender cómo una rotación de 90 grados transforma filas en columnas.

