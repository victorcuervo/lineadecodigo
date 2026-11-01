---
title: "Números divisibles con Java"
description: "Aprende a comprobar si un número es divisible por otro en Java usando el operador módulo, Scanner y una validación para evitar la división entre cero."
date: 2009-07-28
updatedDate: 2026-11-01
tags: ["if","scanner","java-util"]
slug: java/numeros-divisibles-con-java
type: doc
topic: java
id: 651fcf30-f570-482e-bc59-0d54ab63b67c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/DivisiblePor.java
---

## Qué significa que un número sea divisible por otro


Un ejemplo por el que nos pregunta mucha gente en [Línea de Código](https://lineadecodigo.com/) es saber si dos números son divisibles entre sí. La verdad es que este ejemplo es muy sencillo y se explica en unas pocas líneas. Lo primero que tenemos que saber es que un número es divisible por otro cuando, al realizar la división entera entre ambos, el resto es igual a `0` y el divisor no es `0`.


Con este simple principio vemos que nos bastará con comprobar que el resto de la división es igual a cero. Pero, ¿cómo sabemos el resto de una división entre dos números enteros con [Java](https://lineadecodigo.com/java/)? Para ello tenemos el operador módulo, representado por `%`. El módulo devuelve el resto de la división entera. Empecemos pidiendo los números por teclado.


## Leer los números con Scanner


Nos apoyamos en la clase [`Scanner`](http://w3api.com/wiki/Java:Scanner) y en su método [`nextInt()`](http://w3api.com/wiki/Java:Scanner.nextInt()) para obtener dos números enteros de una forma sencilla. Si quieres ver más en detalle cómo manejar `Scanner`, puedes consultar el artículo [Lectura de datos en Java con Scanner](http://lineadecodigo.com/java/lectura-de-datos-en-java-con-scanner/).


```java
import java.util.Scanner;

Scanner reader = new Scanner(System.in);
int numero1, numero2;

System.out.println("Introduce un número");
numero1 = reader.nextInt();

System.out.println("Introduce el número por el cual quieres saber si es divisible");
numero2 = reader.nextInt();
```


El método `nextInt()` interpreta la entrada como un valor de tipo `int`. Por tanto, este ejemplo espera números enteros; si se introduce texto o un número decimal, `Scanner` no podrá leerlo con ese método y se producirá una excepción.


## Comprobar la divisibilidad con el operador módulo


Lo siguiente será calcular si `numero1` es divisible por `numero2`. Como hemos dicho arriba, nos apoyamos en el módulo y comprobamos si su resultado es igual a `0`. Es algo muy sencillo de hacer mediante una estructura de control:


```java
if (numero1 % numero2 == 0)
    System.out.println(numero1 + " es divisible por " + numero2);
else
    System.out.println(numero1 + " NO es divisible por " + numero2);
```


La expresión `numero1 % numero2` devuelve el resto de dividir `numero1` entre `numero2`. Cuando el resultado es `0`, la división es exacta y `numero1` es divisible por `numero2`. La comprobación no depende de que los números sean positivos: también funciona con valores negativos siempre que el divisor no sea `0`.


## Programa completo en Java


Los fragmentos anteriores muestran la lógica principal. Este es un programa completo que conserva el ejemplo original y añade la validación necesaria para evitar intentar calcular el módulo con un divisor igual a `0`:


```java
import java.util.Scanner;

public class DivisiblePor {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);

        System.out.println("Introduce un número");
        int numero1 = reader.nextInt();

        System.out.println("Introduce el número por el cual quieres saber si es divisible");
        int numero2 = reader.nextInt();

        if (numero2 == 0) {
            System.out.println("No se puede comprobar la divisibilidad por 0");
        } else if (numero1 % numero2 == 0) {
            System.out.println(numero1 + " es divisible por " + numero2);
        } else {
            System.out.println(numero1 + " NO es divisible por " + numero2);
        }

        reader.close();
    }
}
```


Por ejemplo, si se introducen `12` y `3`, el programa muestra `12 es divisible por 3`, porque `12 % 3` es `0`. Si se introducen `12` y `5`, muestra `12 NO es divisible por 5`, porque el resto es `2`.


Y ya tenemos nuestro programa. Es algo realmente simple y muy útil para comprobar divisiones exactas con Java.

