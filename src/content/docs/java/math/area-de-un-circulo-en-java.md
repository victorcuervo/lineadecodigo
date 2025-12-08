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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSPGGN3C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZZnolcKZhzv4N1k0ujJlU8SJDkiR8Aaot19695EW%2ByAiBs1xvPCBICN8%2BSk%2FEyj5uvMawpyK5GnWk8Ia%2F3jn2aeCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B4%2FhhDo%2BUV47gZ%2FaKtwDQKAFAQGl%2BlG%2BU1hVjeb9NSp3HY3hhAIok0saJy0%2BV4pyu42obQuXO9qrF8racP3G%2FWdK4%2FdAx5MYz7lhkYCt2StnbVxROD1DEuRSTIRNHrD4LFWJFG818Q%2Fhuh62KN%2B3AYJWNBGzqW2a4V9ouJQAG9vLHm%2BQcoSwpOETfLFOhjATAsS1ZAJUmbInOHdtK%2FpK7wTvE%2BVdpw77WvxflqxDXaUh0NFtGu5jJR1eb3UmXCN59X5UbQ2THI7YNR81FdpxwiGswtQYPIffWOPWaXiQJ01JErFilWgHVt1IlXGwF6NRuopN9MMbeBp1BtiIyeOAYTEQ%2F%2B72DVGlVhreg09hKWPlbQfNPM1gobJB681GMMwufAOPmthwBy0r%2BbXFFD7Tvm7idbBoJ4eyb%2F7o37G0ZAMwNfVez98bN90rrpQJLO6%2F1jXtPtQ%2Bahqt%2B0Kt2ydZuv7kCMk5lJ517Qgs4xMK1M9R3qmOjJG%2BGERO%2F1LR6bsbRUzzJsxVdB%2F6zNhI%2BnDLpYO2rrv8aWjUQHVqAZeHg9ZQm1tHn5%2FEbWlWTfPYrH4LowmX9rBlCAKTHPeM4olHUVqZCyhx8jAb6a1KrYY6%2FSb7Z7YscPCGHOSXC5u99Gqg6%2FoGKp9azcs3dAAw0dHYyQY6pgFbQ0sW64GuG2yxj3l%2FIx0V2uRC4guQlZx4dXGzZu3r%2Feagw%2FVr4V6aiyNeKPOaSSksZQcD%2BIFjbqJh6w0zIcxy7qRlPniUfPK0goa6D6Z88f0%2BSu4HypKnOw7PFIno2JNZ9g59JUV8kZv05Y%2BBLj1%2Fuc18kDdTtotDQaM3hsHKzR9HUNRcys2bZHgHUlS7r1Vy8H0mGaQU6l8VDUii1a0LTJ2Mp7uf&X-Amz-Signature=08ceb899f2c803c42fb2754a5d103e4b438e60e51e71baa55aba1a6b1aa8dd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

