---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR66G6LX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCIFJ419RnUPf6IZRNM9TBAjpBAzfpBcGexSjAgv7lvowIgN6f5gvz3752%2BO62m8%2Fy6yXjvx9DdEzNirElHQWZkqx8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMVE6cS3YERFBC4DwircA450KntcvUyHYUMi%2BtI4THsADXzdXS0vZWv5T6QUUcTjmteLRNfs39HyQBa4yZaeTJa7Da%2BbD7N7%2FAmTuTMBwB7rhTmjFGIVTa95NsUCYczyC%2BFSxOMVoCyjBNw6b2wXvunspcF1AhkFV45Vo%2FZl9rYTrwV47gFBB4hH0jTsyYjj50AQrd64H0oi8PS8u6YfIrUVSjFzs%2FcSgR0jUqna3lVr1l0Fxl6%2FZmDwjLXmCKjASCBgltRfHC%2F3YC9wg11LEtSiCC1KbYuQ37HZ0jP6%2Fc49mlD6b66wHbDprSI2CBli1hyJf2CXZMdhz64WhbicPcOXP5Cr4dzmlo%2B7n4%2FUBMNP%2B4Z11KuZs6GkTKH2nC5TOHC0pb%2Bq7K%2F2az4bspNe9wnbgKCQ55BKR3htJOg6ZZG5AY57zjveTgzIMmblA5mLmvU3xglgJK1iVD%2BplkpnesSxFZqtsDg%2F5HTTM%2BOUxYkhYAM%2B9b15AvxRx3Cc%2BonAZIZ41yx3eFcy4kvzWOGL5TWm0JUf%2BJmGVs5u8Yh1Y6k3D6hTr6a0iYr%2BK1zWHaKT8d5V%2FAP8Y73zSwoljC0osWlrc9j2aGOgUX2pyV9Gzq4cZE2b0z34LcwKRaMAzxfTj3U7U5MACXRLEzgIMIncwskGOqUBDOcOFT%2FhAbo3Ri2VdPChF8W3JZnomjdyXlyOE5tsq9WNw%2B6x1HeCOV0qvNP78u9hBnXhxQw5MkPGbyVGIn5T%2FJCTSbICLc%2Ff1aqe0v%2FtwStQSEc1IDSL5CrwkhRP3W9YHt7djTye%2FTqpLYLmpZwyh4HDGA962WDqh3RBKpZo414y5c1lxbOdqaPg9%2F8sTD1BmWoPQcdwZxKfdZbFn6LjbwOL4WLx&X-Amz-Signature=73460656540ba7135952052a430f990a22dd646da42399e36df129fa480eddf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

