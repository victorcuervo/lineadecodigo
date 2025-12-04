---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMNXVA3T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCeDC0hxQ%2FeHnGQIDN0oGHH7qBbX0%2F19JtDIWL58E%2BJ3wIhAM9AbPk5RMPw1d9hop4FBe%2BlVyGu3FmR0guPGzUz4d7vKv8DCDkQABoMNjM3NDIzMTgzODA1Igw6uReTNs4n21Smgh8q3ANRujxjwfdFm%2BrGABIwNyIg9C6hsrKQ%2B82AAJM6R9nh1d9tatkWyMChkz8p8Jh4SF5k%2FCnNkDGThcLsO0FM%2BqwEIa2fnNoR%2FhQ%2BUwsnqblqBLbu5bJvHJAE9x4O%2FRGeKOi14M9yRMRs5EvKXR8XazM6fK9M9de%2B%2FKsd%2FpFab6KwoiX84rlhEQQBtZ8q4vdTU00Rz0R%2BKy7cpZkJhhO7cg6rLoCBVbhghj9YThHMwh7CGLxFWASN9QQDoTAnQmMRfz3%2FOSKNEiqnLL9UvhvA3EDSihQPBH%2Fa7LKEAirnFOn1V5kvbkDcIT0S%2FEI0uM6a5mImycy6n68XMCBm856mt1t1PmGhiI%2FUhguvEO0wQCGapsWrQmUm0uPFJ3HzM3VENC%2BV6eH0Ray3r43znj%2FAuLZ7HE7K%2FurU5U4QmiBoOGvXNXfiU8at0QQq2GkKyqi4qtIlkR%2FDpN8S5NdJJ6tj7%2F%2F8zcVNvU8%2BncUV%2FsOrHpoSlQq8rQBBG255xeDSghqaZYCDN%2FVosj06MZoUaChiRPVpDHgXk4OPNrh3i6KkfbTkHHxO4%2Bm6XjMpzFQKyjugYRfEk35yGRcWKo9QIJM0nxU%2BxPOFh95vyqdGRWYncbm%2BejVquQNVlBWO%2Fd2MVzD%2FlMPJBjqkAYizIFAvgeLoCzoqX8qFRKeoxe2eJZiMqGon%2BR7b2Zw2c7SVPqlzanq4hyKNB4FZ5liMQXDUNG%2BeyX0dxJGBLnjXbe8Es7fajhCCR6OCmuHDkhWAbPLvZbUZwfbP6x0G%2F8lF4WM1PAnuyxw73gas3ZErv7Bm3WTlNzupEbFqFDJBaoBAd6%2BsNoc%2FPqkc8L8ODh9xyHmFmLG%2FOkTBs99Cm3ba05zc&X-Amz-Signature=385e9aa6cab1e81eb6fd975199e5cdc6e8a724eee1a7ae30b9cf2916f78812c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

