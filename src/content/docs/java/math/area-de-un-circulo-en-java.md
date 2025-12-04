---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJIY6KM7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEjVCRTkVBDsit7Ns2l4%2BummPueFa0HqZes8vYfvQaPAiBdT%2BTn72ymjOvVu4mhe4L%2BEyttqrqN2EMiltuHFske1Sr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMP17G5JODdn0FtcN%2BKtwDE5yczX%2Bn2Glq6zvASiU7oMg8uekieh8wxk6jlprebh8VrSvKmmlKTCwxdZbADjnGR5DEMFGKhEBNpzagUHaV8Eii0nzIFI7ptG06878U5oFuqJkmy5zu0oz%2Bad3uW4w7GLq%2FXCpaYXKO%2F1%2FMsYyLk5vpF0x1e6G2KVYHLeycD5A77K5lxLJZVOdMRHU%2BtJts%2BjQK9%2Bu9jx4bxOfCQ2erwrdT0ZRHSuhOjk%2FaGKSaP6vsjkGWomhyMiZi6KudTPxchgzOegR3BLAIQ1Ke9g9nC6NsfLJAxmKQ92SzBImrwFhP%2BagtsPm%2F04hHsVBRMh6yEARr%2BqIq5eEl7u4G6powSXeosP1EiobFH3wYxbDNn1wnHVfxPJg2tUeQLdNQLMFaQS7sXFnGQTGUllMduAgcypDZDxE1MJpeGXbBFe8UJsZ0I5vPxyrl%2FjFnRfI4KqswDb590YnIXGn0VNTDenyyvlwM6bq%2Fy8%2FHvWL5aPylT0Rt6LPJZiK7ea4H2scLRvL3PkFpL0zFPCWbItWPgaBPtHED7ERMOIjvO8iTddyOSVscfV%2BeJIS3gxD9WZtgzjj51tbEIAUV13z3%2Fm4IMT8kzFQB%2F%2FEAz4Xwu8t6%2BARLLzAVfpmFpIXbPyeXsB0wqtzGyQY6pgEYmCSt1ludbnXvRNBOHkxJE5N%2BM1iZGiI7vgrzk27tfPQ4HptJn7x4E%2B5e%2BR3jkH%2Bia0640HbjyIxQqTZJn3Q%2BCsZwP82q0y2pPQzIZNzo8qRYMiLvHfkuY6tGlv0jgvUymH0zoC9FPHvTVWmDTX%2BfHCie1ZgaXztFHxv6%2Bg4JrHdWMBR%2FQhVtyEWsgyNlUx%2BgSx3W2gFXX5r0IoXx%2Ff3WMTeUNIl4&X-Amz-Signature=d70ebc81a799258c3c029bf24e199cfddb3eae66d69bfa1416f247149ab17da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

