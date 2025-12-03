---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6IUKE5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDcPJBhcuYLnDQZu%2FvgiKG6sGmr103qWeDOBF6dPCOQsQIhAPEZmFCXuvuXzjImhFLQRoqxxdOP5%2BfthHDryQTJMmbIKv8DCDQQABoMNjM3NDIzMTgzODA1Igy3TIqBRRccEa%2BuKNoq3AOfuwbLrC1HU7RJ3ReFHfutpNAwXcibxHHQt7eshwB3YjuyzfXIubJhrh%2BayDq2LNkyxT8D80VgwKBKWqD2X4CoiAcyqwbBrYrZk5kK5k%2FUnBZTMGmetGFhow782G7%2BcN5CMmhv8Gj8OySy51NpblwYlKfcbv7VP1AF%2BaeL65SebSMo%2B88YUGIp0pU15YPiTBNeiuUusJHBYDSkoz6RsW%2BwRidy8Q0qZ9ZvoVzAR2ImprmzQZHFrZvIpnn0HGseEB11d6nkXErUxwacyp12geFCL8m3Y0z2HqTEQeim8lJgHSCd1Sf%2FDVLoKqjwxTsFL0BezU7h5%2FG4PYUZyxdmi7Jj5zhg3C0lAcRC0Wk%2BfUoqwrgv5Ub%2B22kohRB7KgBD1wRY0AbTJiqjHBp74bCDeozOiPoRyXm1otbXqXlGPPfwS9B%2BHdVKYah03v%2BYai4%2FK8CtJHv5tQmeMFu3IxSU6UP053e4Ozki%2B2m7H%2FSki5axArMtxeNhCJJ578kmSuaPKV1hzq4Da5fmNXyKO%2Fj1%2F761l1t0yOaSkQXrFv%2B4xI0r4MFUhWICW%2FRGKjG2wn1DwZn694svIU42R8rlukb9yJZCBD1Dn%2BCJkBpeU6rcqOWdnRtdzNjR4ReE6H0RozCqkcLJBjqkAXgP9lM0WzOJGLM8DQYk0bfThoWfv5aifICh2jaRU6UDp7YwytkJ%2B5gdvPSUEAqk4GORd3AeWKUeYuxb2dqy0lRnGHHNNrnIhn1%2FnxGTeBwY1qMWiC4WUlNdi8%2B1xC31kUjd1qRYkbMSZx7Hpk7gos3Upx88w94IJFBrSdNSOZXlrey%2BzsFSiBYXx9ZMxnBN3JuJXNNuF9Hod8EO4SEISYA6Q%2Bjd&X-Amz-Signature=0c2dc5b6eba2482f28aab3b44d2a7133476f32482e05ad87a62a7d4a91387ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

