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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5B6H5FI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWrV2V0Gi%2BOQB1zIj0mTZCYv9QWCtTpQG%2FqgtMjlYGZAiAxlumNKS%2BPL3oN3ADm1QdptpDc%2FdgB40%2B4PziaWycXPCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2FXHz4r%2BMUp112E8KtwDlR297UdgL9rfGyLKqjZc%2FADpOKyY8S9c1UU%2FN0CYnNne3fWJAE9RC3q5Q9KGYjbkoYbZP7vJ9v8mzDDrM5OwP9V%2FfCbwJ6APw4AzTSrlvHCxdFgAiFKRWH4XVWLO2LtVwEGjLD2ZFZDxXhIxFE4aa2Xwgi7KHHLKXj70CGekoUHdWtCz7g%2BDzbgRBnUbVgPGjhPc7IWjkR4xWoVSfK4q3RoMUZIQm5FR23bPGwt2%2Bcw5YK%2Fn7KxQpJ4XsjNLAqRCt680FtE0OuXLQaLD7b3pB9FjHnfrQQgcR7cGGNMBipH0cz3M3uPM9iJ9bHmnkUc%2Fl%2Fp1tTfPC8C0o6X3%2BhjISbHCH3MkN0vXA6NkS8UpbNfo%2BJYLxTZAtEe%2BmVk1gGehhHcoT7Gd0Ld0uwciHC2YgJXP%2BfSKAC7YGPhXpuQefe72VnZHrgzZU%2FYLzewXe2%2BfP2EKJKLKp2D0vxzgrbX0yVE71qK0Wq3HA45vxwcnHc8bTPi8ILg%2FE56mkdkp01S2DSaEHDqSs9UiFY3nossxMZqKwgoCQ36YcDnJNCqMWuM1jdGFngEpKp3RE9Q5c1xKaSVGFrYj1qjKEEY8OPcAGjLvv5w4FAQy42Z5YY24veCJSeRWYOsYFfW5AD8wle%2FYyQY6pgGlkLWSrkbdVeDXFHilvM62H%2BqQIw33LOc2F4weU0UjgtM3NZPm%2F5buIC7dQup1u6n3Gpzp5JNAqRyDPdpb0i9C%2BCxjEEw8tVpBbiqUzV6%2B1%2Fi8NfKyyDyO7wzY91yG059zUgrMLy83gBR3OTMTxPASrLkq3dM6rZF02wsR7l8oSFGB%2FTkpWkc0oirnAiq2msXU7WRgWB%2BgPDrBQ4ErEmipvTAvavMr&X-Amz-Signature=d4f7bbfa4825e0eb402b381cde31cea66b3910311114ab2506227dd7fb22b074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

