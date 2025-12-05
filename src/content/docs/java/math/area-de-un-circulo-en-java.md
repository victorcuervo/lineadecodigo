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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDYFQPHD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5wv9BFABRS7%2Ffuw9qfHS8XZp2LjhFa99N2LZRsTfbwAIhAN3ogyU%2BUK1Jl39rAT%2FWUuhXy5dtN5jqyv4EMuDcODBcKv8DCGUQABoMNjM3NDIzMTgzODA1IgxRSJh20mtu2i%2BIkEIq3AM%2BUZk2F8TreCr2PzVlzRWBKlkz9kyjn6Hl17jt2MEpzP%2F6LXjUU9n%2BpVT4CyeLwEi1dXw6%2B3xTgmpAuw7sB%2BdBAgFRg9ctuJdtEkQZq642h3tAE75lcmS8OJkTZgt47u2GcIowV1Tn5kuFDDRJeJfl076OFgPHfBefgWdb8hPdB9ZZEYDASqQswAsfcrJPRwn8hqbJ8d9AzdS1LTSuJsGci1cu6t%2Ft5Ry1nBDCm8TMk4puWVWIyuHWJbYqtZtvCj5o2yrB57Uf6vI8YnXD2%2FlZcrqTuZXZSUtdWqQEbJKOOGFY4b%2B6cJdqcxLIzN5EIS597Cm%2Bu3cmpS7dZ24ms34hTk2cAsJBGdJgLTZWd9PJEDlsD%2BugEVlrDAwatLmTbjY%2BXAwHZt5NykBy%2Fqi%2FDceI%2FjAf%2BWo5R1eHVrSH97FjFR8Tlwbyn0MABnJXRzh8XpQxoIpNB2Ock%2BwL%2B7lsIVZtg%2Bn1V0vMQv312Dpe89w1ocAZj%2FAo2eUcw4b7SAiGqFxUMZa%2BIk%2FGPIo%2B3XDLq4E2ZMhFnhC%2FOPOTSwH0qEENcuLjAvcAlW0%2BsT4K%2BJdZiAgfw8ugYdj8fPjL%2BQT0XO4cRtuGNMonyfzxb4HPrpWXWQPsqidzIE1nz3C%2BEDCA8MzJBjqkAYeyfZJfPSUNoR3UiPEIUG0iR7ZcxdI8EzTx%2FseuI7VSfJmxDVZaV0jcjTVjoprTfiSNjWqN6ZD63NyWwRmqXe05d9CQmh%2FsFBs3SHPODDEJicgdRdVhZ56a4eyAyGhuomVz%2BPlAw5qvcV7De461GeVrk6j9EGSbK3qH0Y5trbHNlNDwYgeXcdgrvZSQDID6xVZDnl5g%2FucK5eb5QzKYeiMnnmXr&X-Amz-Signature=45429cf7531164478676b0338b62d6ebdb6b26e295a60cda8a994f518cc5ba31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

