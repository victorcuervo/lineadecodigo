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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDXHQSQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtvN2MM93npS2s6epLjQ7s%2F2%2BSElrljwpOkTYb1puZoAiBkRG6mXqTWulpCO5lOswAXRIR64hejJ7KhgqGky9ZemSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMrfnyHuXfo8ydkU%2BLKtwDoIl4YCJb8SEnH616so63BonpuBMSAOWnxNrpoSBzUyv9Q%2FYeUq8IINRMuW4RtAjd%2FtNl%2B%2BzZWwVLCruZAHi5v5DYIRQCgf2PwjrLgtotPU7IHqMJHHgcJybWWGa1Azg0jJm0dnKnjMx%2FewqeQFCrJNmu2Qs2AcKl9%2F1i2oBsCA3NSyfGI1pqSxq1xz%2BlFJ3KzhEEQLs5GFFg1QBEn%2BkutkVNrmQT9xIY5Y5z6gcriLkTpkNQxadSszpLeDkzm6g26we76Mbo7Em6Ze5dmvQtg843qmx3Ehy6woA%2BmQ7pKd1NL%2BAXPQD1Bcb4%2Facwo3K4ftjP8XyqQknzGFDBsA2KHysASbj8R8%2Fbur5nI61wnq8hxFgNL8Z6HZqCXv2jN4yvyhuo%2B0XntMZp3EbIwIzvu98wl84EyZy8vIFbT20Ss%2BCvqOO0pZ173TtkcneHno2WSYyt88IwsOguMcuMiGxtbYP2RcL%2FSiesUff96qcfRYFEg2y1a1uPuqpg60EwS4bMG48fEB3BXYjpuWfeCm4LM9ZB5hFB5tRf0YhuzFptfnLCEmphZudFFGAHWheyMPEgGbj0gpIjppyIO6CTmHz1wYT6ip6h7GMWHqcOniuJe90YJ1npgL%2BKrgop2xQwncLRyQY6pgF5szoxjrELoT6gOws31don%2FUp6iflNS7c%2BtJpwhbeBPmJ9SNmJ6GIs7acjlRmPGyPBgPLcIVxxSvEXTh3frUNx%2Fb%2BBsepjFvpT9T2uEZVQsUG%2Fq2GoAEVl5Oxv7iPKh1D3S%2F2sqrDN5lT7JvuEm%2FuRGMu6nElY0bk17Zf5JQv1XRBFffA%2FTubosXRreULb7i4wGXPuYLFiwsCHxsyM%2FAcIfh2RQ15i&X-Amz-Signature=e265a9d2fa17379f45d1d875b8b8a2ab8dfd6293d6ff835a0f2112c55bc102d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

