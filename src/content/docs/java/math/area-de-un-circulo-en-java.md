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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4VZMM5B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSlLSu4o%2BnYNnA6HiBK8IO%2BHQCB%2FB1rewfTcx616N%2BMwIhAPHmYXKtSa1W7m8wCtrBzOWqTa5tXdfRDnLY5f6P8OdsKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEgvom0kpRBhQu5j4q3AMLGHvXAhqbCTkcp%2Blm1kKJFvdCgcR%2B%2BAkHmtAyKxZz8Chb55188Th05oZqc73cW9RktkzEq2fISph1eU5fZ7dXxU%2B3boWip37wjiEF%2BsF5UT4t4xOXbiHCcO0lea30xzvyqjuGzgYeR0Tnm0kqkGAI7TahzUdTwN7vYAEW9oVCz4tqk58vNmxOwfkeeBmvBe%2BF80GZnCA6XU%2Fkr69Dr%2BCryNUnQ1B85Ne1t2H3Cm5V9mBgSMZmtnhj%2BV5jDdzfe51v8fp3hbYlPMUbuTLhr9Y7pqY45aAf6nCqD5RkLWBpnViSsIxRSpgZy1yH1%2BDio897PkKSsL0rmAWX3JNRPfHyGWXAgF5fSgE%2BYUOgJeJc2g%2F1L1WVSRpYsr0GJsGIKUaT1aguTcHnR26a2q0vc9MsuFv6a5xJ1D9JFAEz9ONHNdmQbNbEIG%2BFoIr95kIUHpn3uLNjCiu3RXf1ay5Efc%2FJd5btkpZqpSKMSDL5dMaFYjlkgyoJr33qsVebZFN2vyQ4cW9K5zNMG1hQHatcoLIpf8LqRgaFBn5OZHzaK8VskVCgT%2BWJrhA6iOuogS9V6LgMcoepxi3uAm4AJM8%2Fb1gB7U%2BaR%2BosqWZy5jxWmMUVY2W1LM5lzGreHCHYkDDY%2FdLJBjqkAT1WmUzgu3r49PH7m4zDwV9su06BH%2FWzjnhTWtIRihhg9ruAnOBMhXJe5BWZU%2FX%2FmImcm0QZEY7ch5YTGUnXjL4kZF8eKbvNDqUY97iv7ISfUawW1786I6jNYU9r6Ny5MizksaAo2E9clt6kPMUjIEanNiXNAXkLGL%2FtfErF9gSv4bIMJ715gwrqT7uDrrAzmZ8pVRTd7toGwAiTVgJOay4neXfC&X-Amz-Signature=c59751aef506c238496ff7c7f18c72244223df2fcaa85e114ea29f79bf01c4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

