---
title: "Tablas de multiplicar en Java"
description: "Aprende a crear tablas de multiplicar en Java: captura un número por consola, conviértelo a entero, recórrelo con un bucle for y gestiona errores de entrada."
date: 2007-06-05
updatedDate: 2026-11-01
tags: ["integer","for","bufferedreader","ioexception"]
slug: java/bucles/tablas-de-multiplicar-en-java
type: doc
topic: java
id: c20821b5-60f6-4d25-9852-430aace3d9c9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/TablasDeMultiplicar.java
---

Siempre que he impartido algún curso de formación sobre el lenguaje [Java](https://lineadecodigo.com/java/), y han sido unos cuantos, aunque no todos los que a uno le gustaría, el ejercicio de la tabla de multiplicar ha sido uno de los más didácticos. Y es que no sé si el aprendizaje de una tabla de multiplicar y su programación con un bucle tienen algo en común en su trasfondo.


## Planteamiento del ejercicio


El ejercicio es sencillo: hay que crear una aplicación que pida por consola un número y muestre su tabla de multiplicar. En consola quedaría algo así:


```text
¿De qué número quieres la tabla de multiplicar? 3

3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
```


## Lectura del número por consola


Así que lo primero es pedir por consola el número de la tabla que vamos a mostrar. Para ello tenemos que capturar lo que el usuario escriba en la consola, es decir, tratar la entrada estándar `System.in`. Para leer texto podemos abrir un `BufferedReader` sobre la consola, como muestra este fragmento:


```java
InputStreamReader isr = new InputStreamReader(System.in);
BufferedReader br = new BufferedReader(isr);
```


Para capturar el texto tendremos que leer sobre el búfer:


```java
sNumero = br.readLine();
```


La lectura realizada sobre la consola devuelve una cadena de texto. Por eso, si queremos tratarla como un número entero, debemos convertirla con `Integer.parseInt()`:


```java
int iNumeroCalculo = Integer.parseInt(sNumero);
```


`readLine()` puede producir una `IOException`, mientras que `Integer.parseInt()` produce una `NumberFormatException` si el texto introducido no representa un número entero válido. Ambas situaciones deben contemplarse en un programa que lea datos de la consola.


## Bucle para generar la tabla


Ya sabiendo el número del cual queremos sacar la tabla de multiplicar llegamos al meollo del programa. No quiere decir que lo que hemos hecho hasta ahora sea sencillo. En esta parte habrá que iterar diez veces sobre el número recuperado para ir pintando en pantalla la tabla de multiplicar. Para resolver esto podemos utilizar cualquiera de las estructuras repetitivas que nos ofrece [Java](https://lineadecodigo.com/java/). En nuestro caso utilizaremos el bucle `for` sobre el que iteraremos diez veces:


```java
for (int x = 1; x < 11; x++)
    System.out.println(iNumeroCalculo + " x " + x + " = "
        + (x * iNumeroCalculo));
```


La condición `x < 11` hace que `x` tome los valores del 1 al 10. En cada iteración se multiplica el número introducido por el valor actual de `x` y se muestra el resultado con `System.out.println()`.


## Programa completo


Los fragmentos anteriores se pueden reunir en un programa ejecutable. Este ejemplo conserva la lectura con `BufferedReader`, convierte la entrada a entero y controla tanto los errores de lectura como los de conversión:


```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class TablasDeMultiplicar {

    public static void main(String[] args) {
        BufferedReader br = new BufferedReader(
                new InputStreamReader(System.in));

        try {
            System.out.print("¿De qué número quieres la tabla de multiplicar? ");
            String sNumero = br.readLine();
            int iNumeroCalculo = Integer.parseInt(sNumero);

            for (int x = 1; x < 11; x++) {
                System.out.println(iNumeroCalculo + " x " + x + " = "
                        + (x * iNumeroCalculo));
            }
        } catch (NumberFormatException e) {
            System.out.println("Debes introducir un número entero.");
        } catch (IOException e) {
            System.out.println("No se pudo leer la entrada de la consola.");
        }
    }
}
```


Si el usuario introduce `3`, el programa imprime las operaciones desde `3 x 1 = 3` hasta `3 x 10 = 30`. Si introduce texto que no representa un entero, se muestra un mensaje de validación en lugar de intentar realizar las multiplicaciones.

