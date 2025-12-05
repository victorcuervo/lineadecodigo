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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE47U466%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEk4J2bRJ6352bdjf%2B%2FBW2CVynmcYmLa6t23tFh5LV%2FnAiB%2FxTXX%2BFdEQ8yanJublgx9YpvoGaIVAgVXoDikVjYY3yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMf26MYk1tX967y209KtwDf3ZthBEpONy%2F7tN5r9X43IqNWApnArPFVIZrDINNejks1xX6OekUvKC3ArmhPfNb%2BWB30XfHFC4Y37kNinw%2By8XQR2D9IK9FwtxpQK92Sll1n4hOKy04lOaiAIiMrk04ZWQJ96GHzZ%2FrQPOMsIE%2Ff8SDY0L33pmKHYXoA3zs79lO3T49dPGPBTwUzHFTHNf1ynav3jlxGU4mwNPkau1NixEd6yINSznUHFGmddIPNL3Q8lPQ%2Fv12jhoVesi6ihrxP8Wj06J%2FynpKB0XSybWMxbdxDGOSM0AMvECYC0v6HSzgTrGPSz2qm4G9LYdp4bnkALF1TNgcWR2zUq6jVcxx7gwim9Bz0uSlNDb9q6h8lDQpOpHlx0dxwzdWahkKYuK8G1SOYaHLXLEtA1iET%2BQFMR9xXU0ib%2B0RY74Fpe18Iiae0PzqjlNfsr0YerzR47PE7szh%2BZBMkarZd60zVWlnzwZCRE86PNMIbffc2nZk9O34pmVVemd2ksyspH%2BfGKpGhgVWaBIcwyBgTAoVzzSLscXuw6moxVIpN6Dy0A8ad%2BYPmBogLiyAgU7FVfzbKgUAyzPXXtpL2Gw%2BsERbwOwpknTc3fUDqKuSUSZa63HDhzpn6FQa4NWlYe%2Fx1BYwn9DKyQY6pgHUrwLaNCVE%2Fpmt6wMMdRBtKwm0IHuVzNdlEKqjv6JdLXx%2FGJa8KEv8ymeJ8nLTn0GE34rZWREZSjwsyXoWBTf%2BIa7U2uno6UmzJofJF6zosq9dDrXHc3FsBe9ENelndkwBRhy%2FmhO1d6n2N9GNZtmdR4uPQbKsCJsnJsGLQ5PZ119aOc83YJddtDZx6TWlKw2BXAptKJ1ivVS1RLy0E1igZuRH4WZP&X-Amz-Signature=3d1c50e6ed9069709eb0ba8fc081b9289ff8df7efec5045a5f2d1366b227d2a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

