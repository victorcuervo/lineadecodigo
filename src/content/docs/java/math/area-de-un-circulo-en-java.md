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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466332G3SXG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2UhdTZd3R%2FjLsFbLehiHIjF7SMh6Hmpq5oc4X1yoWSAiEA43E0Vx3N%2Bd8819aEMK6KAXD06Q8TyGtn9Mfex335VaMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2iBHY38IyoF0Z%2BoircA9B7v8qy00DBH4oq11KX2YDFIXTZSa5vkeRa%2F3e1oSEB8s0iuyikvJDp6J%2BKWXlOxc8HCcOYL1HHtdL8ZcL1iuXay5BiQM%2BZW1CI4KLXaysFmfZIxX2hEyKLfTbq%2BzrTOZqcTcJscvq37NowhzT0%2FWRtbWLpB2C3cyb0LKZlyFoSJyQnbg41cuLr%2BhpX5Ed%2BdQ6X0rRAOaI0UthJueQB0tqZlD0kJhJVQKZZAHn%2BIJP3n7NSdxfM1lp1xhINYw%2B4B8h8zH7pTgsIPOTUoT0YP4XQ0w2bwRFUrlztDGbXwC5Ur4%2BCyQcGXqyOpCfpBfJ85klzJW887noOcHUM1lWLn9u4C8j66CqhQ3uqfpP9D1fcCwidbeU5e%2FsrQX3lBvnREaUq%2FOOwA4%2F4MtcxTmcuaLn6OUYZ%2FpZRPOFKfVuDAqkh4YrNthfCdh%2FABl%2B3mX9%2BwHlEo8u7MG9xSwLPRLYIbLXrBMRbhpL8DISqfBdg1HWcwZgRmBkvmNJvsC%2BfxE%2FilkTl1oJznVfYrfkrIZF0wV51GF1TRiVuXqsAhIsY2%2F3YoWfSc%2BMYKqZV12VbjOBo8UDexYq6NsplNoCU4gUy3QtVfutUJM01WUtsBrN6QzexiMxGJlcxd%2FPHvccjMI7R2ckGOqUBSlvSDjqHdrHspRJwUE6xcNNr9uEwQsRrdIKz5brLTBN%2FPjGNZHsBvR5AJxRUgsJQKqRysR3eSVDs1F2FKgdoMOETqOnmbk3n4n0jqdfStjsVIMXd9aF2o%2B9Udzjn%2FmNTHbnL4gvkLQ0sVTB4hBs6kIrNDYmrFa1Vc7VmtMXYhEiQ1%2F%2FC963YU4ydbgE5rAwWA4jmtCTv0wQ7EYQMaROwNg3ThNpB&X-Amz-Signature=f8a6bb76d3a0c8acd7341606520ce4aaf38349ee17ad0ae4e09166ccb417e76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

