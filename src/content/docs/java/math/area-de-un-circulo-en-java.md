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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFGIASK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlbXAOBQn4zR2Dal9qY0nr9Dsq8%2BI64SpYsolD3%2Bt0IAiEAq%2FW2EWJwYy5A0xD6wJq0mp0Qk9%2B5yO9%2FcYlj%2Baz2LD8qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8bCBllE0CzytwLWyrcA2u10QcVZv234zr9DrZb0Itef%2FSlForMmzBmrP7IP2zHjF6LOzpY0csNJUV7jZyEGfqcpsojCukTXX1W4R%2BZuRX%2F08omH3D%2BG01pel0SDjIvN9mcP5zb%2B5o9CUXU%2FDXpRaPEaUaEDoUpjv4aLL0%2B%2B%2B4x4L3y0lBj9G5lCaaIZxI2ybAF4%2BCFgk62XXnj%2BtUyXwFqUUrOnFTjl1xzuWjgmlzL4GmwnXZTEKGh6LJ7u07Ezf5XjSST%2FQF9FogTZW%2Fwhu%2B5rvfsw%2Fgn2UeFP%2BWF2B50%2FV6QwLHQKXbNZjtjwh9TfRmaU4ig4bk0RsBb2DSUohvR2CEyUBINenThetTZZUAq%2FrcVbmkYcSPCySoCfIrALogs%2F7%2Fa9SSeUQ04SJqA%2BePcxNkme6Fxcaaq%2FHDwyc1C0F7NLpxLgujxuRFVmb3QVgh14XO2LO7Wg3av8aClKMDDBltQ2gz%2BgK82tNOgxYbor76P73AjatnrXeNITwbtOb5j4szW4%2B7NmvdISXVN9BOO14c6g%2BA%2Bp3qhC4QxMmJ%2F%2FAFqAP%2Bh7KORdU0ABP0DfnA2JA%2FJ7mKMsD8RHfTk6k3JTvI3blbi4ioMDIwTEk0DufNm4QEJ0uP8P%2FJMUFiBzyjDUpsPsAr%2BYSs4MOvG18kGOqUB2jLRrGLQ%2FR0hWUnuabCl%2BE4eug3IgNAirBMuSdauz%2B%2BHVnmlaRv6L8WF5oWbT%2BOTmt1LY%2BfpIs92lIry%2FULdm91fPvE1bMwYajkySuwFHEB7ZxiRcFojmQ%2BjeXLfj0iJ43ovqv1TtJ4WGC9ZSwxUT22wOdtaxFIOia9CJ4Va0rgriYKj40HvkBuPi8kpb%2FScxOo2qgUL2llawWlrGIHGKwwuONAS&X-Amz-Signature=bd3f843cec8ba5968c2863d457e546c1105f72040b449b82cde8681349f20fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

