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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLATL2AT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvW6lJes%2BoWMhKen715uNDhcLVxJL89iALXHuF2QrB1AiEA5l6fbeLvm5tGa%2Ff36q4u%2BR1cPeEENlqu6N6%2FLRdYgeIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDODz758XZVTZ3TafCCrcA4ljXbBY%2Fz7PpFuahTeLKbCf2jA4h7tMByyFvjSgxlAJ25UsedyKcKT5gVzflVaaamlY%2BPu8ptcVf4b3dUM19hw2JIKDe81y2GghFWhZB%2F%2BKjYbPCTWsW5hYMevwivMOFCpe%2BFJZ91IGD8qEkSkGrlRUN8%2FrwGuCI%2BB1LrbsxWfc7CEcoPE9y5uBhaKo8qBQS8ABJB5A2NSJfljHNAmuIusgnPvPGCJgGpWqCgRELL6yVu%2BUyaH7%2BdDhJ4Ry%2FGVjHpSVVtyNoI3EHLxk5F0K40lN4e7Dfs0cGFKJmOP1uowzb0VOqM4vrBY8H3vmrnP0px4AOlIcD4wOWDtNxXmC19NnFL0NzkunL%2FszxK5XDKP23TZ%2BjPsgnBFfm4EaIQfCqe0nKLm0KkWa9ydXrm9skz5TJS3KIc43mQ4b9KVHiuHECAolrWBiDiFQbnt%2BZ4Vq2hwLDD1E0WbNqGUAv9YXysY5ELLgDzKB3sgHa3KokSlTqyC9sNDOGs7pcE%2BFs83l4QnvfrjLLC3YGtTtutFx1oFFcfAqut8%2F86v8ph0%2BQsd3viM%2FnUp0bcoUfyd9njqcynt5gQ9U7OoIprB1zzw7rQHJ69UIvSbJ8HAPnqfe16mtcZg%2Bwd4JUXRKn%2B%2BjMPy8z8kGOqUB%2B9GD%2FtgGqUSeByP8W1p9ixZZLYeEuPvJm8hSemn34sMDkdaL5SMkvk29Jf3kLOy8vv9ONlYvBN%2Bdt0l8ZLchL%2BclW0Bpzm4dvd6xuH0vJnraG29AvFdYDrnZIEhbFilX%2BbtCaiIUvJR%2FTBsiT5Gm%2Ftxe14c9mqhDYIIEV25oDkfb1Cn00X3arD2hEiCbsriEH%2B8DsceBZ8NXHt6x09xcPhahvNpP&X-Amz-Signature=46a1cafaaff7ba3a1da6c181b5e5d1a0bcb831670f51879d5460f7052ac81631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

