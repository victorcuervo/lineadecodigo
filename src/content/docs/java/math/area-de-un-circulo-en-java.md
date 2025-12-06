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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPK6KQA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDb8JsPtAz6fhziQdZu%2FuTFH2Sr6SVBC8WSE4gSMBCK%2FAiEAmNVWijTceslkDLiKWxZoXGXEiL8L4z4lYsxNh9bSX34q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFO%2F%2FNN13ymHq0GNHCrcA%2F%2BT4UKJdhuf3st0c%2BwSPhNWA1onepgB3ilLqYYRJwYsgmVx342gyiH1xxBlMukpOIJtbRb1QCpD7sW1vehuXktJnaqWm05odMaqDq%2B6Z6FPyu1b%2Bp%2BHvbFPRoOZkpIUlcGonr6AjMUfJiM%2Bt66RmWxIZWZdMAyUJzCHmCHfiUJUcfqBxYCM0cGxuXz6XSnxgaPFmhBSKpDD71yB3O0O0sx24y9q27jklA6gHNHH4MCa99GuBn%2BidtVh%2FMReIuctEJNOUrOc3Hm%2FbJpXepBPXt%2FSLZSZiQWc1U6o0WdTJS0zce3e9u2s5diHjauBHeqL%2FXY0beT1OOahhkKFwsHSxLjb1CvzDZgC0JO4rlJhtSFtBZL4bj8doGJFTg9qwTGTevT4JF4m9MXAj357ZQN%2BK6PglHhX%2FFaFYMJadC1fI%2FrSiW%2F4kWt%2BpUUm8tbpS7gzsbNydgOkkTvfvBn%2BcHdU1N1E5jjm7il3yzsicFSPtPlRCctTkkgWzuybiBiiS10wHeqGfCJvnYlGJzKS5zYxAndYrLhz6v7gPGUrKApyq64KPYNOOrczflNDEqELoz5ySQibeOrAUN3WRL1zf6DGYbaBZFQJgDK%2BYGic1i8j8bT4K1%2BIcsTNOfmE0Y00MOXB0ckGOqUBoOO1EzBV2MFVNyMmKh9Senyrb3hqCQTABkKu9cKY3j6oL1RBnWO3M6d2ZeWdr3t9VmJPIDreIvXOJXoObzAS8O6PKUUDdkmPXWnBf%2Bqio8DWxILEkD6J00DuTbuCfa4cvEqdGqnD3o%2BhUC1FCeibqU3c1gAjQ9XnCxbiG3gJ0CqiUpbqy%2FD1ipvFGAZbsLrpZ5hH8pRyhxf38r3FQQQ4V47CkAUI&X-Amz-Signature=78d5f9f311ac732c58a36ff5ee46425bd35828b88b4e5ae359fefa5fad528ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

