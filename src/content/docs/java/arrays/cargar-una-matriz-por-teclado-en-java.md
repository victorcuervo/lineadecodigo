---
title: "Cargar una matriz por teclado en Java"
description: "Aprende a cargar una matriz por teclado en Java con Scanner, recorrer sus filas y columnas mediante bucles y mostrar los valores introducidos."
date: 2011-04-01
updatedDate: 2026-10-24
tags: ["array","matriz","for","scanner","bucles"]
slug: java/arrays/cargar-una-matriz-por-teclado-en-java
type: doc
topic: java
id: 8b9c5438-267d-40e0-b690-2b5d14829cdd
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/RellenarMatriz.java
---

En el ejemplo [Crear una matriz en Java](http://lineadecodigo.com/java/crear-una-matriz-en-java/) veíamos cómo se define una matriz de números en [Java](https://lineadecodigo.com/java/). En ese ejemplo rellenábamos los valores de la matriz directamente en la instanciación de la matriz.


```java
int [][] matriz = {{2,4,4},{6,6,9},{8,10,12}};
```


Una de las preguntas que nos presentabais ante ese artículo es cómo poder cargar una matriz por teclado en [Java](https://lineadecodigo.com/java/). Es decir, que el usuario vaya introduciendo los valores uno a uno. Para este caso lo primero que haremos será instanciar una matriz con sus dimensiones definidas. Por ejemplo, una matriz de 3x3 inicialmente rellena con ceros:


```java
int matriz[][] = new int[3][3];
```


En Java, una matriz bidimensional es un array cuyos elementos son otros arrays. Por eso, `matriz.length` indica el número de filas y `matriz[x].length` indica cuántas columnas tiene la fila `x`. Además, los índices empiezan en cero.


## Rellenar la matriz con datos del teclado


Ahora vamos a rellenarla. Para ello vamos a utilizar la misma técnica que si la quisiésemos recorrer. Es decir, dos bucles anidados que iterarán por el número de elementos que tenga la matriz en cada índice. El tamaño de la matriz que nos sirve para definir el bucle lo conseguimos mediante el campo `length`. Algo así:


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {...}
}
```


Si bien, en cada una de las iteraciones, vamos a rellenar el elemento en el que estemos. Para [leer los datos de la consola utilizaremos la clase Scanner](http://lineadecodigo.com/java/lectura-de-datos-en-java-con-scanner/). La clase [Scanner](http://w3api.com/wiki/Java:Scanner) la instanciaremos al principio del programa:


```java
Scanner consola = new Scanner(System.in);
```


En cada ciclo del bucle utilizamos el método [`nextInt()`](http://w3api.com/wiki/Java:Scanner.nextInt) de la clase [Scanner](http://w3api.com/wiki/Java:Scanner) para leer un entero de teclado. Y directamente se lo asignamos a la matriz.


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {
    System.out.println("Introduzca el elemento [" + x + "," + y + "]");
    matriz[x][y] = consola.nextInt();
  }
}
```


Ya solo nos quedará mostrar el contenido de la matriz para validar que coincide con el insertado:


```java
for (int x=0; x < matriz.length; x++) {
  for (int y=0; y < matriz[x].length; y++) {
    System.out.println("[" + x + "," + y + "] = " + matriz[x][y]);
  }
}
```


El resultado muestra cada valor junto a sus coordenadas. Por ejemplo, `[0,0]` identifica el elemento situado en la primera fila y la primera columna.


## Ejemplo completo


Los fragmentos anteriores se pueden reunir en un programa ejecutable. Es necesario importar `Scanner` desde `java.util` y definir un método `main`:


```java
import java.util.Scanner;

public class CargarMatriz {
  public static void main(String[] args) {
    int[][] matriz = new int[3][3];

    try (Scanner consola = new Scanner(System.in)) {
      for (int x = 0; x < matriz.length; x++) {
        for (int y = 0; y < matriz[x].length; y++) {
          System.out.println("Introduzca el elemento [" + x + "," + y + "]");
          matriz[x][y] = consola.nextInt();
        }
      }
    }

    for (int x = 0; x < matriz.length; x++) {
      for (int y = 0; y < matriz[x].length; y++) {
        System.out.println("[" + x + "," + y + "] = " + matriz[x][y]);
      }
    }
  }
}
```


El bloque `try` con recursos cierra `Scanner` cuando termina la lectura. El programa espera nueve enteros, los guarda en la matriz y después imprime las coordenadas y los valores introducidos. Guarda el archivo como `CargarMatriz.java` para que el nombre coincida con la clase pública.

