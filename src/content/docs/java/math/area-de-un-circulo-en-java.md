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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS7E4XH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpNMKr5%2BS5B5f%2BQosZogO9LP6RRTA5Stlq0Oyq8Fv0wAIhAJLMJtlxkPGpEkLQIAz1cvwX5FdoKU%2BuJEXNhlwkLk9iKv8DCG0QABoMNjM3NDIzMTgzODA1IgwszuHL%2BJcbCiQKyEgq3AM7OiGE%2BZZlu2dpN2NLSHGxRX0r0C7C58jGANuNozSttt4VZ%2FPTmgZARnUxsFeCVyz5G%2Fq5VEOapGujniZOBaNjqoK3KpvpIWF4A433jAzzbj1WH9pDKhLb%2FuPGdA%2FEFfQaKIjG%2BbHd6cNPX2hYRU6wvFi3UImf3VkhEDJW%2Fp03bTHtfn%2FR6SrSwlTYKr4l1fpog8jSWl2cRw3zM5GE2I2eCPqBDAwuVOztvlVXVnQ%2FS3i6g9UZF5tKiRkYWPgSW6LdAavm5dkzS%2BFnLZy6ppAl6RbO9eAw9trZ%2BHeo3fuWT3YgNRRStTdDCiD4OJH8dTkC4AHMHpcpJxSsXeoTuhtcUBeflZPmW1NO5U980W2MA%2BlRpfYAthTzvE7rlNT1qyKMgP%2FOudVDEIDrHUi4sv3rOKUjvbeUHNI3li5E2smGqTjm%2BgV6wBSqdpGt6JLPqGbkHjE%2BoXrw3WQ%2Bzs2SzC%2BDC8oQXBwGhbB35ToNxiu%2B0%2FWhgepLTZOexForreLaCkgzC91CP%2FU7nZg6G9AuuwaXM4KMEpdZu6yvBvjHgij41aSQVkZlWNQgBFZ7sfNaovoGUd%2FSP58OvxMgvSFrVVdpn1%2FWb%2FCLNEzpL%2FGQyYzNbtPwCUypy%2FALK%2BBzIzDJw87JBjqkAUqAs63la3bu5b8bGFnQHtIG2V4lzcqgur743GSKLrUDu7skFnXJlbvRcLy8VWPsMwVKC2EZ%2FzsNzoiH1xsRj7%2FciZgOWyRNtKm%2F%2FG%2FCvzNmgJcjFcs1hd68E8tgLHofdGRnURqzLnNcrvTDmoRu7rjUIqWS0LY0x3Px%2FaAbjJ9D2BIB6MYbkltTnBgADDirZdPyWvVKSZdOCpywawJzFoc%2F4%2FDj&X-Amz-Signature=73b4ad2ab344ad0740edde549b28a026e2543e86d9dc05e6122affa9f498cb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

