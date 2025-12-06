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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZ46SUA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTCuPvirRWUVebxBe%2BUjIh63B54WF%2FoBQgvvD%2BgYLg5AiEA0rohGqD4u8MxPP0vEGo2dkka9hRJOuE6bc7AcXODYIQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH0pEVpbkAu8z0vZ%2FircA8qqULgLHIvecP7ZLtSl0fx0zmGJQaNhbl4GTH%2BPMlIF%2FMv7%2FcZXJ1%2BYuWsMrGiJo4fgFGU4NVl%2FY0KUBpZElbVFfMcVVpQH5ytk7T5hbIlN78pCz60a1uJCWJBUO%2B%2B9jGmCdYdendfY7d5Cuhsfq5DaZh7drNl4JzMlhKhPxsiv3iSgSfMQOcml78UFzQT0I7tBloB%2BOqwucpV08w0oAOop9du%2FdOBUx2PKLZw5QPYJFvyIbYfjXvHpSzHJ2iBTCxSlePFRqlY0sbvBtQOfoAEB%2FSoxEzsk0jOisakmUsT8hMzMbp80dWNmtS6I%2FecdcstqSY1I60dBA7WuvWZ8AubJCjZ9iZdROoXS0lMoqYslLdJWsmuUJtp%2F1b4B9SGgJ0%2BkFZVo1wYicG1kmSFurwYFrJFYaLb2OZTul0wMJkgTw9%2FBLUrx3w1Owg41uTML4f4hiHD7OFc8R0omnoVEFWZm2u76cMAevCrNqbOyZ%2F7YJAr6Nby%2Fyg5DqWJqdOipkM37HEOSo02stK%2FU0kMof8%2FyYrNzSHkvrhZgWVocM79oi8aOehw31Ytidm%2FL030TwowOSlNzWgIw6WpRl08vgdMVTV%2F7lMKdF9HX1vchtR3O6oJJdHU30bLzoUtTMJ%2Bm0MkGOqUBHw7umrNkwgwew1SFOPmWojbOfwXs0y%2FCq2a5c9NcLed5uw0CCHaE9S9Ygo9aCATk8%2BMx0kuTp7pxOluGgRkWDrFxrHUnu19PCB7d1Wmlu9%2Fb3ai%2FSMoF%2Bopj%2FG06zjrhRitQBoal09G3WDNufiT7IvPhQo4JGvmUQzuuA9kOeCBCnfBv1%2Bk0ayNrgainkSsJHqPEpi%2BoEAGbBymxxOAdnyllY7nU&X-Amz-Signature=cde0d18390bf8a1e5e7c5d2e4947ca6ac0996e39b43787c7ade023c37a562e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

