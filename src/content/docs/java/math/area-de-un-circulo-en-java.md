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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ6CELXG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID0vkLTe6VuHdfiyT6tMsNgwJk%2F6F0fDUidBmNKsrFQAAiB9qn43MwgFepJOpInFnzltOK9FSOJiXGe10%2FQUh1RfxCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM7N93CNZwNOxxeS%2BmKtwDnglMFgImTocy5tWLxlWWGdS9J2WG32MSm9eZK6nuUUzw08XzEKZm%2BFnbB9SmrArFTWrxPQvI4idMDQ%2FIgRuBzfhE8IvGdy1PEawFytworKsU99HOV5b1zIaBGBgNL6JhwJ0QPk%2FiYZSof6UWlZtBE%2BOlf3RwmdGZmcV7p4qF9UsOTGN58NmLF7aCuItZi%2Ffc2amfZprOSa49a09%2F4cnmOilicwWrz7SfxcjzkuEJwLNxHUau5%2Bc5Nz%2F9liwp%2BdZdwfsGFpRZho%2FT8m8MErmnZX%2Ba9T%2BpZl061EgSWiB6kYSMTWOFWGJOqQRWKBEmZshLSzamZf0gvI%2BQzmFpcjz79Vo6Nh8%2FrD%2FB8L9S7Du97Qfr6RqwCTzHOGjW9VJ2XHz4nji%2FmmksNinHvoOLKt2GfIPfS4ZZG7rc%2Ff8lxSPGxaJjkS81TQKjfj9X7mN0HJPFLAKaDPVeWOjpxYhnKNuLUM3Kb0TCYx8emxIoLMkCR0aRmsaRLsaAQQh4mEGbhpL0%2FMpNDtxZ5Ni7f%2FB%2FefDCQmbZOEi0IU1HaJkpoTY8SUGBDbW7Z8dFdm6DNodQ86ebyG9B8dmL8u9YmJoeBVv7J7%2BT42U40QhcFxTWHwQuJtt2Ve6N1BCNr6l2o68wqsPOyQY6pgE1hjo695k9zhLWByNucHW1p%2BH64iNO9FJlBkPGWuaIbsgvPLEt%2BzZkh0xoOKU8eRYCDvDqrkM54YPPZMSYeI%2BDa5EWosPC%2FYaf8hjJqjrWG03W0HQrwnSx3hBEhous1RnKFBomexQoBfPp0UoNGSsOgP5g%2B1MzINOLPL59dioGEy6vFQ%2BrphPChvl9b3BvM4sqElPpljwKiF9rvZJTfYZH6bISl4Ft&X-Amz-Signature=2e0648b8d40499b359a8b59a36dcda2869eb1d8b74b1ba0b8ab1abf878de19be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

