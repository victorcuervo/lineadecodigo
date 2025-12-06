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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IUSQSR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2AE9uXXRR0edz6xLqKyMCOhDxWWoJGm2YPmcgoa0OQIhALba8SgMPt4Ur3T5314cwH9uJSnwo6BIobNW1hvXyMZlKv8DCHUQABoMNjM3NDIzMTgzODA1IgytHBcEtioBPr5k4P0q3ANavYqSZEU2Exnrt6mj3er52rtBOLTBFUA06b21GoVdC%2FFLAU%2F5oTc%2BouWRJ3S2BqicDFUoZ253jmJmLR6ftCxus0AFwunsCqXh4OAEBDW8ei35G9YN9xMI6E1Bm1f%2BbObUf6UGqCw%2BvNM2UWHfnQeRbKyGVHskIxqq1C%2FixEXrbaKWToulPtIJt8OfeYzjXNsodZEg552us1w2mdGjbfD2TbmAOHmwOSvRkKf8MSYu0VGjKLL7F1Wi3kt3boE8Xc4f05yX4LWraWNy59d3lCtVJopxF6t35E%2Fe8x43YwRrEfi6JoKrNoyuxjOH1t0ki0Xf235aBV7MhBfp4a68NyuMacbt7fP94UA9h6UIvgKg9DCnS3%2FRJNm1oHQl6T3jq7XZ3ePgP9HWsgvu8SwWq%2FP2VjLICmvGMQbAQNmYBU8c58WIKsqS29LtaPEO3feXmbdppf81n9jCUI0TpYmUYH2Mju9DqpHlD8dMlyEBpPeOQhSKy5UF94ZYJTo6eWp%2BxYou0evgnt%2BC7Ci9lw8TaIsnPlTwmuUbyFUoP1ST9muldez9j39NSA9gubYnVedWVTeQx%2BL%2B4chQ%2BeH1nAXFqhuIyVz0JYQo2cOC5MZRUhbUA1od6%2FtdqJlClbhWkzCQp9DJBjqkAaqU81fwOSvKEA4no9v%2FvgfSDmswnVbIkoTNRD0CrR1i%2B%2Fi3Y%2FyKEcCc7e%2BLopMXH3oIYKZQy8l15dG9dFWd2OfQZh5OZxHAS53JFJ2eerc6rjifjhJrZq4cSKhGRPc1N%2BEz8LmxQfU7O8281%2F6xsTx91P%2BBnJ9tJn0CHUKOkVOEMw%2F%2B5I%2BMZl4m93o1%2FfcvjF4Nhx5jKf82MbjNAOtJxwItnOVy&X-Amz-Signature=762d4530a6a3560f660426662f88b72991edf9bb3797113634522496d7a263b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

