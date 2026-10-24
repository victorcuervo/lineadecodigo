---
title: "Calcular el volumen de un cubo con java"
description: "Aprende a calcular el volumen de un cubo en Java con Scanner y Math.pow(). Incluye la fórmula, el programa completo y recomendaciones para validar la entrada."
date: 2009-09-22
updatedDate: 2026-10-24
tags: ["math","pow","scanner"]
slug: java/matematicos/calcular-el-volumen-de-un-cubo-con-java
type: doc
topic: java
id: 091661e3-f08a-4adc-a32a-87e2ed3f5e90
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/VolumenCubo.java
---

Como hemos visto en multitud de ocasiones, [Java](https://lineadecodigo.com/java/) nos permite realizar cálculos matemáticos simples. Uno de los cálculos que más me pedís es el volumen de un cubo con Java. Veremos que implementarlo en Java es una tarea muy sencilla.


## La fórmula del volumen


Lo primero que nos debemos de preguntar es por la fórmula que nos calcula el volumen de un cubo:


```text
volumen = arista³
```


La complejidad de nuestro programa será el elevar al cubo el valor de la arista.


## Pedir la arista al usuario


Pero vayamos por partes: pidamos el valor de la arista por consola:


```java
Scanner reader = new Scanner(System.in);
double iArista;
double iVolumen;

System.out.println("Introduce el valor de la arista del cubo");
iArista = reader.nextDouble();
```


En este caso nos apoyamos en la clase [`Scanner`](http://w3api.com/wiki/Java:Scanner), la cual nos permite hacer una lectura rápida de datos por pantalla. Si quieres aprender más sobre cómo manejar la petición de datos al usuario, échale un vistazo a [Lectura de datos en Java con Scanner](http://lineadecodigo.com/java/lectura-de-datos-en-java-con-scanner/).


Este fragmento presupone que el programa incluye `import java.util.Scanner;`.


## Calcular el volumen con Math.pow()


Para poder elevar al cubo el valor de la arista nos apoyamos en el método [`Math.pow()`](http://w3api.com/wiki/Java:Math.pow()) de la clase [`Math`](http://w3api.com/wiki/Java:Math).


El método [`Math.pow()`](http://w3api.com/wiki/Java:Math.pow()) recibe dos parámetros:

- El primero es el número a elevar, es decir, nuestra arista
- El segundo es la potencia a la cual queremos elevarlo. En nuestro caso al cubo, es decir, 3

El código quedará de la siguiente forma:


```java
iVolumen = Math.pow(iArista, 3);
```


Hay que tener en cuenta que la firma de `Math.pow()` utiliza dos parámetros de tipo `double` y devuelve un `double`. Por eso `iArista` e `iVolumen` se declaran con ese tipo; el valor `3` se adapta automáticamente al segundo parámetro.


## Mostrar el resultado


Ya solo nos quedará el volcar los datos por pantalla:


```java
System.out.println("El volumen de un cubo de arista " + Double.toString(iArista) + " es de " + Double.toString(iVolumen));
```


Vemos cómo nos ayudamos de [`Double`](http://w3api.com/wiki/Java:Double) y el método [`Double.toString()`](http://w3api.com/wiki/Java:Double.toString()) para convertir un tipo primitivo como `double` en una cadena de texto y así poderlo volcar a pantalla. Aunque la concatenación de cadenas también convierte automáticamente los valores, `Double.toString()` hace explícita esa conversión.


Y cerramos el `Scanner` de lectura:


```java
reader.close();
```


## Programa completo


El ejemplo completo reúne la lectura de la arista, el cálculo del volumen y la salida por consola:


```java
import java.util.Scanner;

public class VolumenCubo {

    public static void main(String[] args) {
        Scanner reader = new Scanner(System.in);
        double iArista;
        double iVolumen;

        System.out.println("Introduce el valor de la arista del cubo");
        iArista = reader.nextDouble();
        iVolumen = Math.pow(iArista, 3);

        System.out.println("El volumen de un cubo de arista " + Double.toString(iArista) + " es de " + Double.toString(iVolumen));

        reader.close();
    }
}
```


Si se introduce `2` como arista, el resultado esperado es un volumen de `8.0` unidades cúbicas.


Espero que os haya sido de ayuda este ejemplo para poder calcular el volumen de un cubo con [Java](https://lineadecodigo.com/java/).

