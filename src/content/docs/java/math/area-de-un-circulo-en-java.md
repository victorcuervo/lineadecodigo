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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGSNRCD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmayrRykMGbWtzMw4CvbjJvW3VVkkF0VqbXhivKkXDiAiBXrqaVsbPdIbD6ymypMVnOfRGhvjoIkGeFZWOsnpNRxyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpmNfRmRcIDiwMkT%2BKtwD7cQ93X91kr6qHzpPRe1myJMyFqu7a3VMkcbupAI6ELymW3%2F%2BV%2Fg5M0Rm%2FtdegqIdc40ASLu2y73riNZ0SFj%2F%2FwL3oi6N%2FHHK%2Bmhad2yNdsn4lJzM0jCW2%2F%2BtrqVZN5PasSpHAIqU%2BHrF2IV%2BZt%2BJxJzqqCCf7x%2BGc6ngId6COTmMFSu%2BpIdYnnMC4sau2Racw4pIIoWTCNuYS5hylND%2BCpMgwyaIrqkuvEZhZJmd%2FXXWc7UmdV5rvcCXILqm5%2F%2FyXCXoZdNWQebWiwRibP0ArpGQ9bnDt%2B3%2FdhqD%2F2i9hX0GrnPV3ueUGYYMuKLXd2mOlYoUVS%2FM4QsNhIWEXRe82PP3c%2F3fD3SNMgg%2Bv0JLkilm5l5SGos82oJTGA3Z9FqV7R3Bhp0Yye%2FBKW3pxA9Cq0cAZNkeIMf7WbE6kuq5DcoD37PDFX7p8y9t5X8d%2BVkOMljIsFzaPg2ex6EgJOa1uamd2n%2FlNp2cEWa%2BucMwrKVg6UlrW3P2KgEM5Ae3JJ5Wvvdu%2BAOwXs3v3QWQVxhTqBoYPdV7OufBthFF1fHIJMOra0KFs5Wy8QnMVyr%2BHFm1E2Wbg5krW9XmpWEMmNa4rMM7hftYkazc7U0vidB89rQzYyncnQ9%2F9mnzqgYw4dDZyQY6pgH4%2Bjzsdk1mB%2F6xWbn39WOvZ6cdHYzC4F3N%2Fk214%2BoCAturoJY5CgwX39pSPX9TmcvOT%2FUeFawTn%2FvZdKEasiGKmhYKaPACu2Llm%2BvyELTxo56DI1JEfY6NZgLX4wFdTdpRE9%2F4NqxdU%2BqlMFpw0bWpkakv6W%2FSUtk791F2HWrYmhBaLY8pzjWSfh7RHTE1JsFaphxA%2Fmth11DNUiYFEIaE6lumMlyJ&X-Amz-Signature=db14e7c592007aeb381f9efcde108da1d2772d512ec33a789b4f8ab1a7044afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

