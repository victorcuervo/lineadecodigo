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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IT4425C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzCGHrXnkTyysyMfYwNpvpaMX8bflK81ZpOVVnZICLMAiEAzNs9CtybVWeY%2BXwuPy9s0UjnxEMFAnEXZ%2BMca8m%2Bixgq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIt6wpOMHRXW4XHN0SrcAzU3JiweICOKxSoKCF0DAsteHC6%2F%2FGeL8bNPJAptE0w5lq2W4v8Oek1P94T%2Fde89JDLEcXssLlg3xIBcSSPxpgMgLcPagJINbNpn92Jb%2FH%2BSfh9c1oTyyonvz%2BIGB5YZMXQtLDMibDEg0fkjFaF86g7MLK5ItqcRG%2BBkGYoG3g%2BPVDtTjvPdjvus%2FeeAyAx1I%2Bks%2FFP%2BIzcbNptuNflh6tRcEJPMyG%2Fds30cS7nYDHxtOf4UHw42oOiDNPCXGTlZ0jtitJKN6Wdq6IcvhvEPbgKyobJHpUAuLoLFdqtjbpEvmMFoBpdfJwMNBu9zl5%2FHLld0iMIlvAi7U2c%2BPMT9GLvwS4MYFC4r3hqn0%2BVGZEWnUN8zvR5aYfjV2uZnQoqzPslSYpAjru3I0yvjdfRII1X8pOX82nE1Te6xriE%2FRK97enfBmMXD0VorwdAniEcj1W0zV1vBHSiIx5qhFMW05diEdtz%2FouSydImIfxZg7RBDdhiyhHY34G3aey%2FS7SWBijZZYOhuWLo%2FBK%2F%2BcDKgTfdJMO16bIuo21EzGwHMskIjhWRpHlUhwwpGYz3Kkj%2Bjl27pZF09DpGl903%2FRPxi0mSRdN%2BY8dtxL1m6jl1XmBtf6Kc2HmKOW%2FpGZljyMIbyy8kGOqUBTVoFC8ljo%2B3YKuCc3HJPLJNEzxkLkqI3X1%2FMiFLs2twJBvvEQ4qL36qB%2BgdbGVH1gj6MT7OrCOzqQGbE0FFIjLSNQcG0J37eWKymbUQMndXo3sMVRvhE8pH37U92paRV5b8l9BSvo8IdnT1dg%2FR6TzX1t0joAYmBezmFtffS5neSMfdwBEssoBMfCh4FR1gE3Sj3JYDyLkEBDb89u89NdN656cE%2B&X-Amz-Signature=8f22cb2dc02007ac496f700a4bf50afd797b2a114222371453181eeeeed77bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

