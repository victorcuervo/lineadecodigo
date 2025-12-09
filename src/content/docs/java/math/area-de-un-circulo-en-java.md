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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOLDG7Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCLNoDsHOQm4aJky4QOy3og3jlUrOSRsKtn2XNJ0%2BJLQIgNBolfvDO4OgPvnYkyU4EbO27x0xYiSOyMAtFZ48k%2BhUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXE1y4rjWg%2BRs8WoCrcA3QH6tmD%2BRF4GG7UDbyAdf%2F4EhY8V94ykoZ1J7%2FudY6Mmn%2B6KaYGlKWEQJ2nhrG%2FlAKhg9HYHq8e7I6o2ZTmW09yMXWnNK4oNbmBB4qnGhLn4gww8CP9cguE4DqphRThwJrTx9Yi%2F9Pvt1RHUzVApuVwv7mW7Fm1Z8R64BqLYaZTI%2Bs5bELHgaeZ5gcZGyy8hM3JoWDj0mggsNzbK9ZAkHPX9E6CHJDDrUJpRljD9m7tD%2FQuspP6Lv6sikfN1F1SDMWoSeROm%2BKtqCdI%2BDefwkK0SXUiBTdL2MTae8WTZBZiFNkUJQqjW3zCriaxUy268qHyX1CTtImwlWv6Ps11tWgeLfQkFPwnOdY%2FAUJgu2pK6RcOI7%2FCm9zkXV29nLyreqW1EHkhFdI5rWHGEuL9PUuo6%2BtftRFkGYvfrhx4fy3GD8YQK1CzwtMB7LDuvSKpVjjOxsQyyIW3z4jYM%2F2EZDtIYLaojqGk6Fbp5LrZMwtMmXIXrxP2rMAzkI3sB%2FCepDCGHr6XtlGmY%2BnDm%2BLd9cWzUjvYq6PZ8t6dfZh%2BsW6BNw30FbK6a4Q%2BAFdcBEE3k7KKKCtIOXbUyp5PqgQFqoYe4Io1gGWHfQC7Rgv7R%2F%2BQoX3lwri%2FskY8P260MIvD3ckGOqUBPrvmdt%2BXmzLDjs5N2yXM7hj2IcuAPL3HKdwvmKQUlQE6bUaS3exMZdHKjmJh1iufVyjEmeU7Y9fWzWr7tA1AZ4EOL5JmeQMdAGz0uGAwYjTRXhmUEJWVX%2FnYrhZSj2hwYlTcbXOwx0S3ZzxCmWt9h1V49GjF%2Fvph0IRnVpHPjxGW%2FoDIDqWU%2F05yXiMqsO4qSplk1jVwKXhHyf9BCyAkJMTqvtZq&X-Amz-Signature=bca0ef5ea1a85551f7a65732bdf683ba00b687958e1947f3772e72e7d0f9e313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

