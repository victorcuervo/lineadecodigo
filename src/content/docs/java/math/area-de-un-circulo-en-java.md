---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVCMJR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEOZrhGp378ustuSCA94kNt4gcy%2B7VcAJJRH8J8hsHtZAiBTSf6LNbKoKgPd39XbcvLUQ%2BLOEeDrrARpFD%2BU%2B1ggbSr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhPZe4R669W%2Fo62FNKtwDRCJGA7QE0G3n%2BaZdyNwYNFuy39oFrQwM3VXebmCotqZiofEBRNs5k5yBU9i%2BQ5Og%2FaCdQ5SPv4Z7EQ9CwRFRuH9lU67LdGyqhQA%2BIE55xTa082cv7v3eAdcTrAWtsuhv%2FT0A1SGCzDtu7n7S2%2FW7uaZQbpbL%2FUN8qfkFnilLPEneVyKttMHN4TV9gVver710ruSe1ZomPgJgX3SIpfZD6bjeDM0LvEafl6SbGaUYn%2BcyESZSm9ooTZKM0FTG9oCJL6m%2Fpds9BKlf%2F3PbkNJEwJWGJYz0N%2BcUqeGUSox9F7RTzAcwgTnvlbWE0gBAVVN0tE6zYV1qEj3KGbR1LIadafl5ymtzm%2FKXfyLu%2Fk7z6cj0qTqB4Sq5WwfCyr1fFykCubBPp0UKKDwoe6AxTja5nu5AjBXMRTXh65jdThBYUSPL%2F6XfHhknRfzOyJfkUnS9xxwhdIN090CoNbuDJsiI0HfR%2F41QNh6raIju83PPdV0Mg3VwL5LN9oquoTvBE0rG8njL0In9RitemHkxpH32MF%2BLKt%2B6yCTCJDKWRbOyvK%2FI6bvmLAaCiTg7cDjJLWR4cL7Da0tC%2B58dSJ33uYCexTl%2F5PGPWizShaGIP1MkQPgcnx2NmwQ0UlkvZ5Uwl4bFyQY6pgGWCVowAfmQ0uCwevaofkQjrmjfcaEvXLaMEqg3uQhELSqZ%2FeNWWkW48evEYkS5zYbNr%2B3TZ1B%2BQrI8cxZMmAIULwAcXlomd0Ww04QFhTIH%2FIgN4N%2B4e3etCJvS1D8%2Bxl2ana4fjOYYCb66JV0wwyW4xU3inhyK%2B3gZ%2Ffkq5EwirSwWGvSN%2BIsZjr%2Fpguhrnr0kvxDwiC5kjl5oTmAhUb9JmDKK%2FtdR&X-Amz-Signature=e9e43ea28f9cdd5708fedc8da16a3a854f128478d76fd3d3492bf98104acf745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

