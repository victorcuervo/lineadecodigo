---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQQQRWH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIFffqN2JX%2Bllqs6YHNGc048Vwy%2F%2BUHzSxq91o7L%2Bwi6RAiAn17sR43QgLLVozzqPI6OQEsMNse6tvmgOKkEZ5nDlWir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMAtPLPUpVQmRh%2BbI%2FKtwDiftIe2KPW4tuYa3MnQ84%2B9JvqyipJzRaMtfN%2Bt3DD%2BrjfsA5xqKpd%2FRCZuB4lpDAS9pNs8RZR7H%2FmojuEWzqrBLcDpdHGzCVo9AkZLQm24IoZO3F0G1DwaUkOYu9i6H7QWDQeU6vgDPbj9LJl1yVpt2Ojb29ffIRPcgZgUxycPc4w16%2FqnR8CqKaqTPFxOMaacK4z8hudRK0z5aVXOt3QZfIklcO3FX2MNSR6cqYl%2BO0Z8lCd07xRlIh3y%2FVURi%2BcfqZSaEmXO42hrmD3aqvXlgoxPfOJprQQKAlcU2cf0UGgLVE%2BZNhgXeWGGYBcecr8M8eViHiOkCFv1FGHT8lj9zJz0RH3kT76Hie1c1AAXXeqa5ym45JDKHzVhPlx6OMpgF0LRGlZRhukpYZjgNV9x7U2sBIEh0S1UNhGMYp8FvOY34CkG%2F%2FYIK1vmZS6sjwn0Lr7I8QwRxLeKVyWdstXo6qHcxNPe%2BwPajayTG7sKJ6AHU8D8D%2BVWvj503Kk8I%2BtuNSU9UmrHFm8CPv3Geqia%2FCDNXqRpBtE25jaEIiL2h5pKXbW8XO8mZ642mAi76a3eHyTwr%2FgbZH%2B5Cq3GZeNiXxocJBOTbVLeMg5p4ehv6EKTCAyUqUB9IuYrkwj7TDyQY6pgHjLt%2BXgqm9Qd4gkViz6q3o5dGPWLw23FyYlEj1Hy8%2F1MI3MtcJ5I0LoltEwdTIX4YWKgU6T7YrLZKV9o7lcDNT5XS29y13LRCn5oS%2BxeY9t%2B8mZtb%2Ff5%2F%2FLDp5q1axue8l3NBcqtn%2BRMOK8dy1GFthXmTPUQgv10KfoYkCo54n54EM%2Bqt%2Bsez9SLFmz4ZyTWSsmdAp7X%2BgSZDsGEQT%2FvtTzuB997k9&X-Amz-Signature=1cb494ad2aa7f5bd8436448cbd96d21413fa22d2787d3985b25d3408ab4aab24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

