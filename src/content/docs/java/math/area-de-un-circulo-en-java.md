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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5XBARA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHI3aANDEk6QaqAz7pgUW1kbUFXj5LsxmMShI8cUNQtrAiBoe4HWuzCs4r2rAfpfutojUTMmRah0wHTybJmMWcy4WyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYUw7fa7yfNBmxMw7KtwD4fyDhN8ITZa3aTcKcRm5ymyONIFinWjeUZB1ryrIq5l%2BZayBolO1ppTwRb6bI5FE2qfmRyioBrhPeUJtQVzFk9K4cAk9mBM2AlVqf0RLQlgU2MJtK5%2B9J4sOqjf2cl60LFcAncLZU8ijgrbtAz9DS9T7cf0%2FwZxQqx8j3uOtVjaluaNoVxzZylRyYFeWcA%2FwuVaLyBQ%2Bnbd4ta1fhgnbg2G%2FCk3WmAoD8wdIVSSV7q5i3e%2FSDHU%2BspcSoq5hatfaxfO1gbYeRkGgufJUyct%2FJY0Hk%2Fv9k5oB5vklrZHh%2FLWfWKjxjNJCuZUNpl9mNQpGGrNnS8awgMe2iSIBy9jMd4Mq5vkDYiHQ9eN1XX44v9ad04E7cLMyk8Ca2kCeQJdEy7r29aaNTsgvSJZyF%2FaOoYOBrcaBvIbhc8KH7rCp6JS8h1EcU6m736Zh70iVWwhKcyBZouoBQiH8GnlFSmWOpMIU0cnPGF%2B3%2BzGQcmYUlUPo0Ymg0s5OHbONYoBY9LmMEm%2BPGecxEziqlr6QZ8DIjQD2o1LaH3r8yozE1ghPI9EhxTGavTR9lN4%2Bh14QxWn%2B5T2VvkWOifBNGV3TnBeP9o66H%2FYUDjuBpz3wafInMAVSvsJ8vP4j3frD%2Fz8wtb3WyQY6pgGHsH1FdE8hY%2F1LSm7yIwL%2BttcZ9CQcuLrkJVBpHxHQsT0xe6lG4noZ4PFP1iEPIrPyi%2BdoiC4FdBkN0uZ22bhhKwCcu3USFWg60rbLhT8CF6kZGEzZc8nZ%2F%2Bd3DmGoLNvFjH8EVQQA%2Fb7Gk34bbixFhelFL2lETtnODbB%2FdVFsUhM5feQj4WTvvvvx%2FjI2mYFKgI3NVXgTOCinqEt8sGzK7omr9x%2FG&X-Amz-Signature=4a7dcf03e1796d7b4686cf8a096d2c0c5b569f254ad297638ac956761e4ad112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

