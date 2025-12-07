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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNAKTLZC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr3JWjATwgDrh5Nb%2FnXX6w%2Fd7KBSFGCYSWwFqnKCiOXAiAlXBjd2qccKB2rhIpPrYYPvjCgK84hwdh1q5QxvK0PviqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAjl5%2F3xIFwtDTGHtKtwD%2BNzU6TedcJGjio8sC07okROaT%2BVQqrhw2yi4Y%2F34sPx8PR13N%2FSab8T2Z%2FkvtsXZGyDjbQbVPpJ91ErY%2FTdtQnMNMJ1l89JcCz1cqUAioZD6fXFDpFgAKWr6WGDXKC7wK5PthZwMneLnOQiQdB09hDJ2uPdVpde6j9VBpvdb398TAhZB0QTHkpoI964gY%2B4mqsJwif81SphXPYbav8h%2FqWuQ0DJLtT3M84uM96uP0G5R2K6FXCE5MmLBmgZZ3R%2B%2Fn9LXcsrRtM6jyE83zzO4d2%2BPeEgfKHYw4K%2FyCr9QiRWszPewRJZIwOtSFaZvuvkmt1Si%2F1ies4pD5V3%2Bs1pFOAchFa1EPrqabr%2FuN1RohwY2M4hgEh4Qx4gFIgIKEQavbrNzNB308QtbKa6J6YH4z8hsib3FELLdze1C%2B9FRknlZxT4oHAjRSgx%2BlZ88BZ2KLip%2F7I9LBbK3Acn4jiu%2BLtCBTCnAqljW3Qw53gpKOwnQHPs52KbdVOm61V6JrGjOOBDOgnabzvFNGXSnrLpNB1tHTe%2BkLnM1hCQu4P6Hm4KtxHSLBhxGg3PA%2Fzutf1gA7j01i2v4phIxYoDb3SNYYbQSJG8jjh1eO4sCJP9%2Fv7SzKRy7s7SSlK2FFswwxJnVyQY6pgGE5d%2FicnQ8S4%2Fchd6xZhZDpkHHr10%2FHWPMa70QmknDON%2BgblV9JUlmJoGAlMqDIXViB4xNDel2nrbOHsWBV%2BP7lQGR5ffVgTKXl%2FIdvwGbeJIvaeLQuqHuPqFggBU%2F15UgX5%2BMSrPaADo7X5aRKGqk9doEuBXYqVVNK0Q%2FXSC6xdERzeSXozwS%2BrDwKruxUnYNWCoKyCu5T6Vx%2FciO9J3sgaHAGRU2&X-Amz-Signature=7b3dc8f76f793fae09f9f0157ef7b12c98780a21fe75bc4e4438c780e0723156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

