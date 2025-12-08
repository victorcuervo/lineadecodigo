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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TKZNJ7H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2F3jT84Tn%2FxRtz0i0VA8Z7dmFn8mI9d4%2BKInkHLnS4gIgbVp7s%2BcqeVypazlOvDPYMdZSBBwU6PId9WGq72VETO0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuLF%2B7B%2BoCNUpCZ2ircA3aafdasj8NZmjHiUrTEt1bReQwGeBAfQKLZ387FhcLkFN7mnjGerIxK8%2B1JN%2F6EYLNM5GUO2QLLKJrDIIFt75G5u2J%2F%2B%2F6XN24Oc12k3WikQBmhz%2B0SXiwZ9Lrnd%2Bh7tJ%2BBNjWvtD2mJ3EGLCrvgK3PlutU9tincHiXbn%2FlgyF%2BCHw03e%2FiMJDd89Xkel4etUlJ71dMksI%2FDjp99O6obA4%2FL2qlXCXQNLgthzrgRyRrDnTCp4XCcgXSdXiuYm7vLgyw5%2BIGqHAFiRW64Cr%2Fwx%2FhitFQ%2F0Uc%2Bvx%2B1%2Bimazagfn00IHK2SCjjKA2QGS%2BYWGmxlH11XrK%2Fki0RVB%2FAUB64gxvn3zWv%2FjHjXN%2FYDll7RDOnw2r0FhgePtejIUQyIfkc5VN7I%2B5uNbU5SIaZLk%2FquILxq7Ib9Qv3A87XVgG8DtOqhMSGEfycrJUl%2BmlSB2%2BI04i323rT8d7D9PwfzzFydAEqKMSlfQvu91%2Fd%2FvWEMd6ohHm3zEVbKsifwm8S7t2Qnvq9I%2FCX9v7b2QCVLYKzWy1udW9hV7%2F1AFB8eWom6nZrLzqvFB%2F00FYDHpyboKH559bUMPfBr3MzvWR1Qx4nSWVr0%2FyvxiaqcSeT3udXSit7kZpwpPFjK2GbMLuh2MkGOqUBwtFxT5THeb29DHb998ZeY%2Fx7vl1M8qMxrU1QvvPEKwqJ4oWCD4%2BXI8O4qDwlS8vVkYUx82Jy30lH3qzZLIoWOCvlwVrP6FWucxGBaR4c7%2Ff5%2FzykXXilQFwmE4zv2f8u6pJer7eTtzBsl%2BxA8AW9RF2V2pALacbmG4kzCf9LvaVSft8svTILJEC1yWa9g%2F%2FCuRDIwggfYM14jKlXlznYqCgQd%2B7s&X-Amz-Signature=75162b8ed94824236eb150ed3db14875b5635d909f2317d059e2750ab0b0f371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

