---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
slug: /java/area-de-un-circulo-en-java/
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPK6RG4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T154522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPM1R2y0X5LzaBpmj%2FrHfk%2Fn3ZVnSNC5T8COzFmCHsqAIhAOayCUg1kdK8bzeYE0475Lhy1WJOACWfTkwOdwMlPMBDKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1I9grsFX9K%2BN2uHYq3APaT%2FB53m9mCFLz21TY50RcYN8M3pdaUzA6xTktDCZIF9JUQgvip6%2FFpv%2B5u0N6gAIwOvfI%2BF2SwCS8eElWFwjAu1UGFZORda6Q1G74VTbu0EBJk%2B5VvXhA5Dix1m3%2FFjQ3BwsmxNOoQ%2Fi9fdw5gLAyL4DvdXZwhVHLYzj4YRuQhDEtchsjMCKZlggctgGCcP49KMzcl%2FBEs2WCDRWG1O%2BBbNL67a%2FMv5uF8pBlP%2Fk8uhRkf7yJGIDG4J1ZtiLJfqThlEfBdM5fK115S6Y2%2FzbNDaqRpaUrrspd5rlGBVFW%2F8eqXMj3Q7cFB0rX7nFuZTaQqcXrAF9V0xc%2F6HSPUny4XK3%2FnPIQ1vSc4RUC%2B5B2lWRY%2FQHK%2BbfUTcUkG1dJng6AQ0tziLcBIP1dNhLZGpD7hYBGVxjAb7ZRbW6cdhQwTW4Ic1FyltXJ64qPQthf88%2BdxfIlSV3D8ZtFmkuUfKz%2BtBkG0KRAzZ%2FVFgeZ0FDXszy1hEpDiAERON6W%2Bd7O0%2BF%2BpE22mm3XK4egoUXNY0KCjKmdPRicwKgDHMaBtda3D13dBM3%2FHmX3Gvg%2BSxiSxyYXzdcu5elT7wVDEbpLe23QELbNklJ6P42hnbx17gLkdNT0mUNXkrEqQqYtBzC8t9bJBjqkAXKpa%2FWZsTvnZP8Sd3%2FXKJYBlLExnx1z4X%2FbC7ZeiOJx5OsCb0hjyoD%2BNXdrn04Cg%2Bj71G9B75XOAZkZMcc%2BzXd3XXSG5VtAqZJZ7%2B5cvy34CNJW8b8CTno83rLGc0lvtJawcLoiZxSkKJC3YnmRDmRYdwcz6vdBngsZgYyLIVXOF2gW5hZeKVMXgHZSiJpafi1K7z96J8lRIdOSh3UuV9AjEak9&X-Amz-Signature=7bea40f468b26655e0bf98bdedf869ed8a1923d14f8251862cfef933b541cc89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Además tenemos que saber qué es el radio, **el radio es la distancia desde el centro del círculo hasta el borde del círculo**.


Con estos dos conceptos de área y de radio podemos saber que la **fórmula que nos calcula el área de un círculo es** la siguiente:


```text
Area = Π · r2
```


Si analizamos la fórmula vemos que el área se calcula multiplicando el valor de PI (Π) por el valor del rádio elevado al cuadrado.


### Codificando el cálculo del área de un círculo en Java


Una vez que hemos adquirido el concepto sobre qué es el área de un círculo vamos a ponernos manos a la obra con el [programa en Java](https://lineadecodigo.com/categoria/java/).


Vamos a crear una clase Java que llamaremos `AreaCirculo` y en la que añadiremos un método main que será el que contenga nuestro programa que realice el **cálculo del área de un círculo en Java**.


```java
public class AreaCirculo {

	public static void main(String[] args) {
		
		// Nuestro código

	}

}
```


Lo primero que haremos dentro de la clase `main` será definir las variables que vayan a contener los valores `radio` y `área`. Para ello, definiremos dos variables de [tipo ](https://manualweb.net/java/tipos-datos-primitivos-java/#double)[`double`](https://manualweb.net/java/tipos-datos-primitivos-java/#double).


```java
double area;
double radio;
```


Lo siguiente será implementar mediante código fuente la formula del área.


### Calculando potencias mediante Math.pow


Para poder implementar la fórmula en [Java](https://www.manualweb.net/java/) necesitamos conocer dos cosas. La primera es saber [cómo se implementan las potencias en Java](https://lineadecodigo.com/java/potencias-del-dos-con-java/).


Es decir, ¿cómo podemos calcular el radio al cuadrado? En esta situación, alguno podría pensar que valdría con multiplicar el radio por si mismo y estaría en lo cierto.


Pero lo que vamos a hacer para nuestro código es ayudarnos de la [clase Java Math](https://lineadecodigo.com/tag/java-math/) y de su [método ](https://www.w3api.com/Java/Math/pow/)[`pow()`](https://www.w3api.com/Java/Math/pow/) para poder calcular potencias.


Hay que recordar que este método es un método estático. Es decir que lo utilizaremos directamente desde la clase [`Math`](https://www.w3api.com/Java/Math/). La sintaxis del [método ](https://www.w3api.com/Java/Math/pow/)[`pow()`](https://www.w3api.com/Java/Math/pow/) de la [clase Java Math](https://lineadecodigo.com/tag/java-math/) sería la siguiente.


```java
public static double pow(double a, double b)
```


Cómo podemos ver en su sintaxis o que hace este método es elevar el valor del parámetro a la potencia indicada como parámetro b.


Por lo tanto, si paramos a codificar nuestra fórmula para el **cálculo del área de un círculo en Java** podríamos escribir la siguiente línea de código:


```java
area = 3.1416 * Math.pow(radio,2);
```


### Usando la constante Math.PI


De momento esto nos valdría, pero vamos a ir un paso más allá apoyándonos en la [clase Java Math](https://lineadecodigo.com/tag/java-math/), ya que la clase [`Math`](http://www.w3api.com/wiki/Java:Math) nos ofrece una constante con el valor de Π. Esta constante es representada con la constante PI y que escribiremos en [código Java](https://lineadecodigo.com/categoria/java/) de la siguiente manera:


```java
Math.PI;
```


Esto nos permitirá trabajar con mayor precisión decimal dentro de la fórmula que hemos implementado para el **cálculo del área de un círculo en Java.**


Finalmente, nuestra formula quedará de la la siguiente forma en una [línea de código](https://lineadecodigo.com/):


```java
area = Math.PI * Math.pow(radio,2);
```


Ya solo nos quedará el mostrar el valor del área mediante el típico [`System.out`](https://www.w3api.com/Java/System/out/) y su método [`println()`](https://www.w3api.com/Java/PrintStream/println/).


```java
System.out.println("El área de un circulo de radio "+radio+" es "+area);
```


Ya tendremos concluido nuestro programa que nos ayuda con el **cálculo del área de un círculo en Java.**

