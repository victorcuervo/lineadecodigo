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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDFERYU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP4eQPEqrgQEjARxHsSdoRt9PnnDe4dssBYh08S%2B4IgwIgEBjT3LRf4cwX87L7%2FhvgdNUxGzpyXWqTyHzzNZ4cOAUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM1XCOKv92mz4kTpxSrcA2MwkLFhu3wJNO%2B7i2JLgt%2B0K6VMDK6l4f2OR79UowHhbJcXSk%2BTQt0%2F0QO4nfsBzSyXhZymyqHbL6gPyOegN4mbqBOFtusYW9D4Mwf933hjXLXTsUPnmy4tJ55skArHjgCVvaa4nMzvDK5z0g0EwtfTM9bktisOkeNaZe4lyH2J84U7ojZQcrm%2FLN8wzY7DQ4P4ea1ao0IGjNGuEYnnx5E5AG%2BhDhRjHAOMHyqRk4FyfMhG4HdhT%2Fb%2FU7xR9mVlt6NFq%2BLGt5XmnML50GXGIfVGMcKwxhIcarWCuXS5mzES8Rv%2BjNICjT8Cb4AGaCNxXGHBglArPvcolQWCCs4qK2nV2smcHHho3Psd203zmYTPqOgc8BmN4hKCIFo0tUlOBuxTbkmEXT%2BYt6NZ6jQX3kXyEyOjStzL0t6%2FE2%2BXZukxXyAsBYxAP86fpi29%2FDNytWbVP2rxF8N%2F%2FTPgX7yC7k2jx77Hrf7GFmopP7ND0nrXRpIKokeiGqqd4BUzXGkLlrlRvi7ECGT2mwvnILteQU53cwCOlBU6H%2Fv8%2BbA3g2m0zV3gIshwHWIfKWQ4u86G2eMaKjGi39JZ1iPfUcduZLx5Alrx1R1RQORikB%2FuxRf3fYskeTjOOJMHtP2EMKHDzskGOqUBlW1vI9HZ%2Ftq%2B%2BuddNUY1DowbjCk%2BqYXQ2TlaD3fkQr4lWuO1uHG1ky35251L%2F7%2Ftu%2BByQJCrJ6sBRtKANiOhAjXbjVsHPKM96QkiK9vql1EDdnqKL1LWFdwLh%2BIjk7hP%2BnOoq6PPj5gKN9pO2gw2LJxOG8eAyyZCfFotIj2PDcnATkjot3NS2VoeJFAGBBumm8q9%2BzTAAtngl72x4JoM2yE3XqNR&X-Amz-Signature=603772c3f8cfbad9be23ce2aace8776baebbfa67cd4d0becaf598012b8b3b409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

