---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7FIKNU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCNGbEsxQBF5cNxTgdjKHQFe6npXIzoQD%2FVgtyN%2FA%2BNjAIgVK21AClIBkiYj3JiCk3HdV9mKLBFBjXv15mzPDyxelIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDBtzD7RiOs7MX0l6yrcAwNygg5R8go%2FoAeCIiKT9Qjhnttxv5RXUGaqJR%2Fx%2FiEGSlMY6jyS9PdpJn%2FgA24Dd4DoF%2B6DHd5ogxcT1xuXguAIJ8YbEeMEJgj5AeRB1bIJ0KC8JZjY4vSYdZhvvFEmp9udUAtBVwKczy6Vl1pIT1uu8%2Bk86YXGDD5PxXxGvAXFoZnuI8x44qKx0eqDn5pLU7zla%2FvBq7rTv3rCJkBCgpmk%2BZDh4MWdJ9etKKs80dRl4ZFNW%2Bt0B8Wie9xM6SIFAbz7bgOQbN%2FI4DOPPPrO2Ha6GucW7xNYTWV4h9vmb4u394n3mCXNWnbDrX%2B7snLAurP05ShVKQdlmqkDKC3uc%2B2Td3pQPrM67Ujto4qSQRrQ1GwZOpQ4hke1zwywlI1iWBAbbDdOH1EDZ2XCR5aj%2BVvJLVRgsuBOv2hgrMPrYUNiNjq4sC4n73fdGPph46dZP%2Frt1pY4dJjT8srqTq7CGV1TI1Jshq3dZDHqi1700vT909h8nCO7X8hA1WOm%2FRgMB8HAcc3X6TtJIEIsr4V%2BQ1YWdiEgLV8nYNjLKld44edgv6iSvOHTcKL7D6O8j365SbKwtBSQ3E%2FCIZf%2Fh%2FuwTAteo5sFUmlZUHvMIuHolZ6lgrWXiZCfefqefVSkMI6RxMkGOqUBTgqu0B7KPr41xdWR6gErcrXsBuIg%2FOHgzIzqI4j8v2i%2FuWopncjOpLOOH3M7CGKVPm%2FkIOpYZ3gae9SZRClm3pYg13ADkLO6xfpVflyY%2FxR6W1D60SfNskJEN1L3pdoTs5M9scN2f4Uenn1NO%2F56S0KW4t%2FLOSjlohuunntd0J6GYHKSXmv%2BNn5eA6yGp%2Fbq3wHn7XkKtUf0nsesn4gsktr3wOE1&X-Amz-Signature=52756a371023e60eb93e57865af72d6e58667287f4beef636589535cca2b1f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

