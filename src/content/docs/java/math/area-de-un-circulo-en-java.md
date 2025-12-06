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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z4MDSPP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnlOB9Kvx3N8WBL9qNy%2F%2BynfE3XM0ATBh737lrG0jiRAiAkXjfW30Aot4nl2r4ixbN%2FLh54PjYb%2BSPfmMssrn1bkyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM1XsUhI2pL8DyifGMKtwD0JQZVxlP%2FjuR8X34%2F%2FCI6VBmkVtsyGNwvyK%2BhMh8tGygcg9lolgcGfjBlJ4NJh6Qbm8eZrSoLFfyTDVyTLMGwDrRYKJGIkPP1RNMLG5WBZsaPxIl8CVkkG%2F60b%2Bi1j4hmRunn41Yf7Tm9x3yZosLErWtX8u%2Fx2NFhJ8r6w09A1Qb676Nzcb%2B6l2gc%2FpWMPzLwVJg1mT%2FFP7GZQInC8oZpn0ysZkFiIDoZRuFxZXPfVdhNZ%2FP39G7uRzxqBt8LhDuTX1bRfuVOr289a2kJhzkK1SXp5Qelb%2BFkJu%2F68E%2FNoYjIbvTIisRB6zD0HQc7AH%2F3uPwWjHb1ES0yn6GESRLmst8umOIcsHXxS8eHW86iF1CLQ4Ep1p9fn4v25L4d7Mkh4J0KBEyEs743GJ%2BMglin3M7EiuZi1kKOQo1B4Yur0QvuRMHzRaed2hP1j63PPNaVZE8tLPOcqyDuZ9O9G1Ayz3MoXFxJhhqi%2B%2BG0GNnUznhBoZJqNnE75BiON9%2FVIo%2FtiNjaD8tM7lJo%2BmcXVevOehqeyuwnWgd5XN4Ux%2Ff1SQ%2BJF0L%2FMdlIDidINkXOG%2BBWr1t8a4AquSzp2bhHemm55OQRLFkxyUUqQLc3Tkm2QGjYoKgKHlu1ER1Orww7KbQyQY6pgFUwY48TeoMRVv6fSqMYhuDIFAfyrfdoGxUBR4bK0DoYAcZPO36DzpxlV7NDEpktxzeV8nLBnQ5L10LMvTKMGPjT2ep1rHET2lMn49jL2GWdYRn89S0U1kmGv5ZkjFQMpM%2BBvfnhtEGkAngYdNogrkUSwuhuC4q4WJHxl5KoKexrKtYnjZrwdMv7yXr6KGhMfh4SZ1pcIZDzvIlYY%2FBaGk7X9MVXs72&X-Amz-Signature=6b6961e619dd47f9dda7d1fae30a7a9aed8c3c2836fc4935493ba43bc9b653e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

