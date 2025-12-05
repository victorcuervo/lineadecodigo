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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOAGMVCL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxcAfXp1vriB1mSTlx7Jadqa3gG%2B9U2nU96k5XBOqT6AiEA4xQN0TeYsav331KOH13RC2QA28HQejxM4Dg0eg9FMI8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHrFyg%2F7q7fo5jx6eSrcA86%2FmRHfnnjnvvjSO3ies9hpGHL3i3TlzFfZWdpr0FkChHiVeoj01xZHdkpFJ2%2FOGGHokKw1RE0jHHPAWN7Ttvwh24JBaJ2K0mYKA2guIxTSJjYbPuSOo14DG%2FtrU4oA3s1K6IL64%2Fsjm%2F2g4Xsu8xjlcsIwdq%2FGmlQrhpwEhmSWka5mOlXWST7eWWdjbemACvsHhGdSo%2B5R27mczUWjvKMM4QD99eHIEmkYK%2FQ40PUSnouGMvce8Cd7BXigk99XTOjMmq76dDnatDeNTHHxjm%2BQEyUIOws4VCj18kdOnt3G5QYUuYhZUQTsS1pur4i1zIgjRQUach8NJ1srgQouVMU%2BIcEDohqB02ZVN0YSjd%2BVFA%2FUBR8JyJP8kJNvxhsVjQ5tiziWg0Q21q8SvN2BX2ep1xBW%2BftD7YwH84UVpAjQVr1vv0zZJwub4ra7uCdVo1DElBlYvDxRQl75qUg7axF6D2kSVaxi1%2FOp6aZXwIpGN8grR6KMwI1pFPtYn2ua5%2FkwStjvEDV%2FONQpTItlNH%2FTImiPUjzjMyYyQmKoCzZaDRLGOO8IT0rkRzK5kyxfW6lJQLYRyKMzfEZBMI%2FzOBS2sFv7bVNCKrvGIR5a4PYCOBWV2TJgJXrXjg6GMOPNyskGOqUBPVtQ9FnVaLET84cierSlr0ie73o9IoqH%2F8hNWa%2FTi2EdvpPKVbIlaW7Ev9DHA7CpGD%2FUNPkdm5tLooY4UkVSmpzLiyEAAIbyZlZw1yc82UBhypRBz2i1suamWIbi%2B2p9sizxw6maDjrq8UwdKRS67aPsh2Vv6h1Ph0NvC%2Bdc6eqOnaK6PQ%2BUo6%2FVbycJgMgxng8TYCw1U%2BH6P%2BMQK3j%2BCPmTMKhM&X-Amz-Signature=5e097792acbd7b1d46f6b20b887d50fe1d96960caaf7a23397759fde40705118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

