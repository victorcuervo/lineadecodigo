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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJFS4RY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtf4S7bygl%2F2vpE%2BpS2oijF4TCrGNdaGHpfFzABj5J6wIhAPG49aA8HTP2gN3OZJTxPSpCcZF9z4jhLoXbPjKc1hLLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKdFXQJKVlj%2BhAuQgq3AMCPG%2F0VlIwV%2FZKSAQC9mrM1elg25b2OXRtoS7cC46LIjDG61iPHFkeZ37M2tAT0ZS6823oyTnvaiaF5zTNduPhykubcqi%2FdJOyZC6WLsUUHZf4S7nfvNx%2F4kqh6lS6oji%2FY3sPH7beh7V6M7vvx7M04x8yIR4uxSnXeTw9ESNYf6is4BSmEj06lqRsihJ3yYROdftqReTAurTBulwLDXDHQ%2BL7tvSqVFBHSuWsWb8N71ODgS6IlNIMGBEzh49Ilgk6kBr9OsyJRnR6MpWFa6UG7FJf1MH5mTy0cBEOX9Mz0zOlODVx6jLcxDS1cSmg9dzRJWi0JGw4gRXQ2RG5yNGG04P02a45s1%2FckKA%2BTwnRyqiEllCiT2CQEufIKuYUWMUv6FnOlAa0Bwtd5pTAhAL2nf7LQA99OXvvtIbxttJDq3OJAXmoyxfA3eHctes9M0rattHDf%2B6iMHkcpJMJA4WE543rAbTSt5LaAgswS0rUbzmjf7my1X35%2Fv7suy2VB2%2BpjvFNIGretE9W0xqy9Aj3PZpl5loiL6L9%2Fu5x65oYLjX%2Fh8NXmKeicWqnzxbIa9GuSNmu3CUvvZra%2FGb2SmcG9dEiLaKXZcwBATTe27uCldUgt%2B4RnhZZFBfSaTDJmdXJBjqkARYohPynGQlm72jqceYs%2BtQHtxAaDw46Dt4Y2Y5A5eszNrnGI4QWSQKcv8PXbb5Jrfoqwm9KjAQEUDDFezjvCFGAJKLb7YFL3AyWJDIwlk%2BWDQBPylM4vSTyvNYgcLXdGNIBxOMHClUKplFoQh2PsF2GmxuTD9HPbghxkTk0f%2B4dzCRWV0WgoPoGNHfLjd0l39sURxvrFt68JQHnYwl8rp99H%2FO%2F&X-Amz-Signature=baf9ed3a3f08d8eed9ad2da0a70e324fbeecf97c6a1ed463ae2f002a73491b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

