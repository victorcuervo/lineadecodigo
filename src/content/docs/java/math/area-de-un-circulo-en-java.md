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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXPWO2D2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6kPZ6cWlb%2BONsp9roWI0UXOEUyYt4YYvCqAh54ugB%2BAiA2abGQvmRJE7juTNLGA0y9qteh44L2ts9g4ogJEoJduSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM97qvcUXHXHW0VX4EKtwD8RGYhFbOzJ8ZkBFKlcrmrm09BUd3P9yKhWatIuLwhCwM5gbzl%2FVbAhAcMJ1W9O1%2FGwiD3jfbilw121A3lQLqIgRPJNdhAObXdkMlRkANj%2BmZ2wxsRipVIx%2BqI13Ql2nknvQ80T3tQFVlO00a8ioo1%2BLTRTldiPpvWJTp9wj0CKtC4Ouj2K7bYMpJjPE5mXnUGSIqh0qTr1gTKFuLN%2FmmBel9xaaY3AsCxyXe5eWMrWxngBMt%2B1w3%2BAmAnEijMK1LY9ttIu85p7TsWOEMzxL1FCGIsubfGu7syAI6GHV99bxkHVCWPKQdEscZYZ4KwESs5BVuyJYG5UVujHxpafN9v0WN%2FCl%2BMk49JwF%2B2dMMSVB7ycQsDjI2gdkuzIKY8Ic%2FRZd1rBXEPAwpnIFyQe6gYV13%2BS56LcTn8l4tfMjIBbuZEPbi76ALZRVssfUQtkN9L9B1TRZwBmLSZzsw6L59mTAQILVlumpKIl5isJhf7VN41HAItzxoGx0GoHcqmWk2WiJFRPZV%2BxkegmIUVNn4x3CbFYneghTnZvxVC182K9o0faZXzKDLUuJJskdJ1qtT3oPeBVH5DGvrA6%2BIEkhdwHe0lmFebeUk8gRmSEKdBE2j8ue9X%2Ft58PxAqZMw%2Fu7YyQY6pgFobs1LMnnh3LdCkIDqCs0tqI4dP2rFRbR%2F9zW5nttt5ovejiGYaCwt43HSYsV%2FpcUWLWxh6RVH%2FHsqv4LXxewnvVUzeivjmuzknOG92OxNqQssJzGG%2F3AZVbW%2BABY3boLhcNydhZm3kEmbQdnHM7%2Bkgrp64hQUuvS0ZzYSn2im%2BaYGQ996Y8OIPsvkxX9s%2BmZYw9g%2Frqs5IERP1rpy54YWPs3gRVm7&X-Amz-Signature=e5a6cc75731d939d2bbc633fd5aee3b13745aac7acd7a1f393409376ff0b706d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

