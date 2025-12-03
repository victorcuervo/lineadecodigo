---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZTCPVH7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQC%2Fl%2BL%2FFL1%2FREPYNJzGBoqQ3Em96GAQfOsgzHB6b3k43AIgcj7oKd0vT89%2BngX0N%2BGzbZc4pS9P6g7PRXL41GFUrF8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH5%2BhiXJMgA42B6oVircA2pt2V%2BbGHtBbbWUTbPX1%2BWgoU%2Fl9Dva8LzMKUzj%2Bykw9ARQskUmL9xS8j6mbQQHXokmwPlj%2Fq9C34NBa1c6B78qsLcCrNUSEW567vt639zL7m6%2Fyhx6bJ9cF0%2BOEuwsLTCJzOOOl5ahJw4aJhm8RQ2BrGZPrmLTPpOYVovhQx0AtIenbXl%2Fo9HAwKfX8Sk%2Bx6uRezmpDGA%2Bgk8g5HwyvFeZWXifqjRXZoLE5HaoV41v1u9vfq8bIeLjYwRf%2Bl6diB%2F%2Bih6%2BVnwrKoNJ0uwwZ%2B%2FkHCIFuoAhb0oQas6OZ9Jt6JSxwYFXJHFf1cXKUXAn3WKSvvYr0Ec3sTdWeX0d9L%2BEvVl5jX2DjPjlNqU5kWM%2FL5Wz7nMc3AO52d%2FukAzr%2BTUNEEl4H5rigeI48VyNAZbzIlKEVn9UFjYisGbLYKXn1JvEPiRi0zLWI21yMtyDNVPgrLfGQw8GAPNeikNYHE%2FU3gCKv0IH3AQAFjttLe3PApEBjXY9JH1pOxj%2FDuqQaNMzJuYSKv6BHNycfFFpokUYZ4kIwoUKY3egQgq27T%2BZsv2cthv3ElXgq%2BNQd5phu1NWMN6M%2BBY%2FbUGXILHdS8QtWeKm%2FSWMp%2Bny5VDJWMZF2IeTnNEH%2BXtSqLRZMNfcwskGOqUBZRq4ylZcBG0KCrlNQV%2Fpqkx39PSMoxW8oOmk15U9G9%2FrlmyORm8gZYNR9%2FHXEgRWNW5H1qnnL3efOviGyc70S%2BvVcDjpK9O4mTINKNLjXtf5Dly5d%2BUZivhwC9xzeDfoABTEtn6XcomLQ%2F23MGo2mxjOglZy%2BtsWWm9zBDy%2F3BFFIdI4pby01GbGkcEFxWgSIAP6tkpgTxbv9fhbUDa9KjC%2FkQ%2BZ&X-Amz-Signature=eb54a47ba2a4bc06e21802ae3ff9ed49e8b1aed1b631939d3b423867635009a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

