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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YXLVLEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSSXZn5WbqfssP7H%2FtVVQ9xfoDIUE6buLK3oo4S2jsGwIgSkZndPxXgxhcz9VVJ9UUygW3iHBHvgndclNlVTV2qugqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9XmGx44vddkanZSSrcA2bb%2FuCe%2FH4k%2FXtOpWs4Nl04bR7fOdKHbJGsmKIdBvxlzlHjeHaA20ugSOtoxlWHrgn02l8COXrRkCH2sBkUdErx0Kmc3PTCyUcHmAiYpZKWNjl3VL%2BXMoylYUmi81PGTjHzxNvdlLDSK2Poh0kszzjCh1prP3IV9Y0wUNkOYRUI%2BQFVDvWcoifdz%2BkDfP6EQ%2Fe77GVOeX4IF6r7IONsyBC%2F4a1GOBlDj1XtX6PDNt8fUYG%2BMYLBVVWcg4GQfQQWDQcQX6VJSNhsvFGPmIO1gFn4jQN%2BEMTM9bmvCoYKpLO9uKIwlSS19uS2LWS4FTwYEcgV8ID7sONQtVeUKZcFjfnNaayx56bqKtDy8T0n60d0J0w4%2BEarh8AYUeXYkOS8y%2B2LH8u%2B4KVHGkdzguZRNPs2C2WvmVmshtgWCCp5lFAq4mIWw4Ud10XxbdUiutmu%2BYAGu09VsmaGfd0MIRI032SVpThoxozaw3PD3FH4TeJDp95vpXJxr32rT4TeKp%2BJhvJ5pY%2FQ4GE%2F8tkwoy94PX9Dd4Lz9X22n8aqglf09puI%2FBXwjHCBBKOyMp%2B6cGGk9MYzYp3Hx6ni3YvSJVPIL%2FPy9zRqx%2F6ZT68MgCuL8wQailR83eGP6mlZmMxzMP7u2MkGOqUBElXJPn6xRGWgt9Ig9Ci5ZfRUAcqLlcf0hamejAN1HvMJ9%2F9V1xgjLTPQDTHGaT6HnhwkCRjc1s7i23G%2Faixl5aBzKpwA%2BXlBkaXdKWBSl8uZkUkLhGJL%2BQ0ASvrDKYkD%2BNLxc2xFGkEnyRqAgG4Vz84pDQiGUaKMDUbC5TJqB0z%2BvEymcJmQQVxidicnxO414hURpBguAES5J3G%2Bnqmp2UgaxlOC&X-Amz-Signature=110ec7e7f2fcc6972aff2f0e1f51c042ba3c1cb80aadc36b70320346494c5f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

