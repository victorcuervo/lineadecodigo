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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W577YNMT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyyK3SwryJzdLzISwdvqT5Qylz2HkNv8kYqg9QsJoTkAiAyLlRPrCgaK7ugwMV8JbQDU0ow2RoJHD1%2BNIpFEzVeayr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMucxUUBIUs%2BBgv%2F3DKtwDZdgc1ipa42fSJIpMe%2BuN2vKWLirifsPZeA2XH15kxuRl%2BffBNfHr8peQbl1iBL2kbtpkKH6U%2BqCXkwq1qrLa3MiDDcmihmAVaf9reqBjP0Yii1Tnch2KQidTE36KujoC5dciEqvj104pfjZi4vX3YhN6GYWgeRNWF8RecEqxsl9UJ89UvxZJcjOkLJjRiq7ITMP3antp3whavg7Um6Ajo6fDZCTSDVtHyKDt3ZOYkEKgND4ch7%2BHHokA8r8PteLM4DHIaK2VvTW%2Bx5E9zFUTW4ahB8AsDPDdEsibx6pluxDBcH4bjUkye1NbtvgtKPk%2B6gvCvQ5lfKhTR8D9ohdi%2FKl4oKdUEQjTYbpgpGqSdDXlj%2Bm4WUD44L3loXzX6mQQqxVcV9YcHUw9%2FR%2BGF1%2FHpzMl1Y0q151Q61Iy3Mdz4B4kswrsZx%2F5AO153AnBcYgYp9Pk5ycWgUD693hr8E2WuQdBHGSPpH1yLe0z9ncUT8oYyll%2F6f1yHTJgEvLSVeJ7kNdjVVkqH8ZBagGFpRqfa337YjyQ%2FVW6PNSz54fS5MEVDT%2FMIjeSxJvLA3YKMSCaMQT48cnPx8Bn7GK87ynRHmabaj0FDqgPaIZq2yon0GXA5XO%2FCTcCOEsiYDUw8czRyQY6pgHI0qkuaSsiRlpoxGlkJOX2m7mKEe8sglngIKKbHflYknlZqEAzJF%2B1vI7d25Ch%2FLCJdCbgPIqMOvSN6%2FxSVGY7pI5gs9xZ0LX26DkSUdIkwo52F73KNVLiEJ6aDsrl0%2FuQaH9tT3MRp2EnB4yH%2BoIz2xQ0YcZaSWeH67hduIkTzLKtaCPvPLYDTkF%2FD5R1ftSVnnVEYAxS2HCgmERcMNxGTSxn6RkA&X-Amz-Signature=d8ed57306a986b5ab7c94cb827ca0bdbcec8c7c3513a89a9b1ef25ff7ea7a0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

