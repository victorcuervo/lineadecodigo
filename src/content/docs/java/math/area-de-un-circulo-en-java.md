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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQS6OBY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBRKwYNJlSyC3sm%2FklJ0qauGwZ7dZm2sCd8k%2BVhkOhNwIhAM%2FhOEq8z85Q5pIQ%2FW2MUMXqErpBk03FQHH6%2F90Zq2UxKv8DCFUQABoMNjM3NDIzMTgzODA1IgyMaUDaDPQoP%2B1As28q3ANchMUdihrGpDw554wfa9e4quhRH7K8dvoOzzg17PqvvGCDM4K%2F%2BDiu7WLwW8ksslnRB24BPkdiGkj7LcG6xLKfU%2FT%2B5CB7yAw3YKmeY0ax8%2BdOjnKd6bGHAS%2BcTG2y0MclMT%2FEH16N%2BdzCxyR0jMMqWwnYgYX1G%2B1jZEnLcqCqkYu1tEroGjbnLfHOfZvJf8nCLU%2B6rY84JqqocbQQrsn3xUPbW9HQ1p%2BlDItnYAU%2BE3kpn%2BYx0S7WBZrB2pCuVOxr5Fo6FB3ejlLIxtzPhxjYMYC43kAd4kR3gAPd37nuqDYAOf1A61zsjtSp7T2574mA9WBj%2BOn2yMifwvEa2IHlq1rQe0I%2B1whkoSOCBADxp31eBu2qFDW3mkc71Z9Tn6MtJ%2BA%2BrW2SZwjbXkaFy4jTf0aXMzoh4ECwWNbYYgqWIBWjM3QYAor4OqTK0TqfYp8X7jWLhzoxwYERp41hdOOX3KPoEP3nj74QX09lfI%2BnZ9RUv%2FWj65CTbvmxQgUI8LWZ9AC8t89UIn5YGf676BCG3ljtEj9PtzKhEz7Z7LKPz5%2FjfsCPiZeE9xRBXa8FUN6fLmjXAQc6K6kB53ilj%2F5mcfsy%2FtLXQRkKhOqCYuivQGL%2BuReo2INeZaCkijCKrMnJBjqkAewTCeq25vadY9dAcxtwbp903Pki7wUk%2F5Z6WIBy1VlEFyZn5j1TTDEtLEuNiKiIq2w1AE%2FLg%2FZrYImY4tTLqIx9rUUWr%2FQp0GEnnNBhSe2AOLwCWc%2B0Oce6G6uh8DWq9EFLZ7M4ycCXTuG6HTBxSqHVI594JNUqCv1vHkiciqnheatHV0EL8IQ0zr1E5P%2BkFy1ACSzM8qhx0Q4y26Ki6EoYDUy%2F&X-Amz-Signature=7750a1096f839d5fb7f864c3cbe5074c48248e311446aa51ca5b5fb61ad51130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

