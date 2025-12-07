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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOQ42ME%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW3sxBiB7EzzPyAgRAXIekRygjkt0z9TMf9%2BQE%2Bso%2B0QIgeq63a6LFcquhvbHcRTg8K6BJhi%2F3Q0rh390qPTBhQ3UqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSN3AEPfjxfItmgyyrcA6SrdW4VIwt71eGZTqyzGrWKJkp1LruBqNJzbNl7almxrR24py8dDXOvlJy%2F6SqJfrC7pzEtuNWqMgyF6MzVlhHx0KSXaY3yBLm7sXskxvD5ZCT4JlYEhyZygeZ8hbYa1KdV%2FHXN0MZXTfzh0DIJK%2FVLVLsGEQZjmtiogNTecrH7zT0VjJV%2FcRa83BtjjlS9BVfp7UfQp%2BeErwoPC%2BBHkj%2BQQVvGdBha1C9NLw41y%2FMeg4hD2N0GLaSsl4uzcf6%2B2c0QMyWKJbYWawG9WrcvejzuSYJIqpaKzCTHCWtKBu54PxLWvDoKo3ES%2BJVnmaU7TuFPYzFYZ%2BfwvB9tu5DtRhOTkgGpx2R6x43IXQB6OKWXKE2iSrzbtIpUV9LlwXkkafaoMcm%2BiAF0AhuBi3TWJpkCweVWf6TRMhrZDIrnIuHifib1dwxfBsWaRgAEqDGsxnlIMLPa7pODMZ9E1uqiZp5rrVz3LoKeb1zCiG9ZUa4HZAaYrOj0zfBM138rc2WiyfPlcRk1drw0QWSBeY8wlp1wGB2dWcxXtYHm8v0rpe3NcB8LqjvL49VwV9bfuepUvXL5tgMan%2Fcno19yXDBxFvfOQyjGX2zbJ8BAB1x5TFdQ4L6XfU%2BebhoXJxKZMOOa1MkGOqUBMrQqfDbghnA%2Ffvr05y%2FmGB2eAzYYSupSlrDtSJQogTeS2ZTxuS9fwmXovrZZZehNG58FYZyU%2F%2FCjPFu72nvC1cBYymQZHC3XUxi1Q%2FpOmQg9Z0I1DBfHdy2igV0U9vDi4%2BeZPUD5UQt%2Fi64tS3XWh4exOBcKGdq%2FTv%2F976Sxw269jbGTjVPunZR7OHzLLIx%2BIxCm2yNYZp9pFem%2BGy%2FW%2BP3sCD2Z&X-Amz-Signature=ea92c05dea6b3c716067d554bb37c4838861d67fead2270801a7f1169d5e8a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

