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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLACIP4A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr0VGP40eG0BvEVtgfnwtuTlc3iN5PHuFK2qw42rstIAiA1MUxjCDt6zAcyAc6CFQtfF%2FWegBJqyEuxY1Ah%2FdlP2iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRQZYRUhB4YqmRBHSKtwDkt8o04%2FnFGplsFFBlA3rihMk0Bg43j7tV3n%2B2S5yTMpifby5WbwQ8OcMBkD%2Bt4i5dSBBnGnPtVn8XdAbztV85NhpdlqZl%2Fwfp6HU8gFmY3IMWxTilC%2BZBn8jG4kORWVvpSbFHA7Hc3XQiCLYWN%2F%2Bw%2FgUe13V8By75kwMQG2mmvqpBMd%2BtSUdYz1CthFnd23t5Pk2pvZt%2FWr5EgOd9tLYGsDjlob00mQbf4AphkOg%2BjLep5kOfqkNZn7QdJTpncbL5ICFyZINLmNrDg2qmmmfK2su1OwPi8qjh46JJT4x601rH5UQO8ADWW0fqx9EP9CbBnygb9vKxOIajui8azCXUwABF0ULLyMdnoh48VyPG11WiWQ3fGhqf7Mati78FV5DD1DqqSj5IMcczk%2F1XY0eiHsqe3JkGdCRW436uL1TdmE9t3BwpdPVBAZuonLgLbFxXA2B7X7VTYEaspam7%2Bf2pLxg9MIRaIgjlRSLoEDsK8hw1ysnom71ToyKQELqs6%2B13OIy3f%2FUWUDMpgh4wOdvQjp9agL5HBjSQiINi%2FuzGbQ%2BOOyalXFR8vT5niGqlMxIACml9VDAjsx6bMpiQPoNiTnkAvQacs8tBEVMPW3YO%2BC9K%2BSvy6CAfzclqUgwnZDbyQY6pgGqpZCqXnhUp%2FP3yPKgacvQVTMV4j%2FDI721vUHjNmNBXzUjU%2BhCdPhkMD%2FQR45lQR2lfp9z1BekPr%2B6J%2Be6zRlJMLVMNZYSLpoWsMYnocsXrZtDIsdaypPCC%2Be94e1Uywecdn1EHx8d9u5bmca4XMx40%2BVTEdQ3NgKFha7Kd78qzM8dLZqjb42JP6gDFVHWponaYIIZRGW%2FzLUY7JO5qqknA%2Fwg49ep&X-Amz-Signature=f46b0ea51e9acae305a6d2e19f8d86ee2d95d6222b20be286691e8f7bacf9719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

