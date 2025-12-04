---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CIGIZE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjc7ewpdxFBSgRz%2FNFQV2gE4d0n8A%2FrRDhSD0HTFWdCQIgAO3I4CM6EPv1AtEjPycyyW8lYUE4vZ0yHUifXAqtN3Iq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOa2HN8M9Rls4tFaqCrcA9u70yerZcDNrNYLwhbifpDy4xR6DhFvKAC%2FMczUS8WGIkrzrpgnqgkEg2AHLNbXcP678rkDkTpEyy%2BfDf%2B0uS%2F1nDwZa6uMUYmeaKEUulhXJXsx7EumhXkFphTuNqhKLqkT3x5NDbXaBH2M8qF5nRVRZWFVnuh2jUQqz88PBYOSjYz%2F0ccVs1NaHDrrRi8aM%2FFGzutrIcCAXY0kZiVVyl%2FGJgSgQuOm0m8PT2%2F3jUcQHn6lVcNVsgmU5G9WioLs2KY0Xy0mJsCxegTYd9jEOrf4sCftDREtF8cffHO90S1f8sCeRXsWOexA5TuwIbez9oq1O9m4Hpj1iEbDJMIbRxUZI5WR3JL5Ir7i3tONqLp%2FQRV2xhzlqq8Eajs4UvSR%2F%2FrS45vxxkFEMlZmwaFl1EwmRiEhoCsFy0yaTohYYlTBzJ1KgqQw57%2FudaDVcCvDe2535l5ag69rCTgzQ9lSfKwjkKvp1UCgKePK58SVTw8ubNV7kjhWK9amyYN3CH1uUSoGzQjzcdH56R0ntxO7iAb5ZWI2SrojY1L4k1PA1gHTOr%2BkamqKjNFYB90OWFAosBcSHYDfJAv5Lc%2BRAWkTo6qnnCJCd9MwGxPt4RUKyUDMOTgwtv3YmWqz7Cn%2FMKrcxskGOqUBRyiDrDkoGaVZM3UnsT9e0VLE2%2BMdvhmou3Jx2sS1ZblCfu4s64nhnMgbI%2B1I9Gl1VkAMHp3c%2FtZ70J9hxZZsY4Xx0IlTqGqF%2B2NiMetRvx1a4QWN%2FZdvDfcwJ6jJeb0%2FQ%2Bk6uZasbWvKPGk1X5jq11Xt7eNT5Q0QVHPoK9CN4JEkiCf8Cl4f9dLyFg5uN8VGxjYDyB%2FumYXVfV9HmU%2B3IfiSA0lS&X-Amz-Signature=c12ac524da0718559bd6430fd2105a0952c14f40096410e1ec6a06b7fc3a151a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

