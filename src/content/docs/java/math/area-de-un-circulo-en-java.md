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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6MBCXG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpv39qtrxAPBaS4CuyLuVsC9y25P3wzlsBPI%2FEbZyjkAiEA1OlHqKLDGdB7i9%2B2%2BCIdIag%2BhFs7ZKhEQN4u5oJGYhoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCyLu22nNO669o%2F%2ByrcA8lzYCj6ZpAm2yPAlB7WQG3fvRZm%2B2PhmO3FKul67wa4Zj56MAxeABWiM1iwvxWVXqJu%2FHRCOjQ8QULq%2Fk0i2lnaP0xTD1qQpvITsUY8HUuv5Cye83EW3onSVZ4KWUSH2ZstLlfNAUo5gI07EwyHYsqo9ZrEh3I71ELN7WyBF4Nxo7HiJNWxlPD7vd%2BH2XYQIfU1WGoGIvVX27CW3q0wSv8lnmrgddx3Te1ImmwnW9IxVA6lpvtbkwNQOkZjbAPm8rap8f%2BVtVGkqRF11C9T04Y8buLIGOAi7Nw%2FdAVtimvP73RrF7%2F%2FLkjlBU8P9GRzR2ruixJcofUitIB8kwQqRHSTS835vfNLTWPdp7furTKH%2BSeGtPMKvxanhUo1FrgPSV%2Fb%2BY%2B8oJSQYB5%2BatSj7R2c5HOZfdMnnUSYCeaG5q%2FYfIXgsagtC2EEyBghSzXL3kgZLwtb%2FjrMKACcUae1G9oF2SJYFZwNTWdLVtGTHBE9KMkw7GpydhpKIVnOW%2B5Ne97FgNknnWv5Wx%2FtKXLUsfBintwo3axX3zUH8T17yubw%2FbzGsVaiXLePIh%2BdF0jwONfL9mjVA4Tt3pGm9Y5I8kqWDB85scirMOT0IYgRZnNXkqNQN5He%2Bso%2FFu8oMLLC3ckGOqUBS4EOiHIuYPohHT2OrNQzyoNxmTy0RdJoiTZmy1VBi9s2cIZXmyCNc172G7uZ25wHR4o5SK38rOeKHocE0PJ5P3D0qos86ssqMy1rrUvyZ0Z5cinhEl6W%2F%2B0DCjpjm4jDL%2FgvODNE7J384sDTEWNCuTlhAkoiXYEDM%2BMS%2FwurKbGbo7MTfo2w1MJGWVlFIUwa8s1tMx6sSC5OBMenH9%2FPflHkxGB4&X-Amz-Signature=96f39f836824e193fdebf92e9a89be96486febcb362a1533345ce163bb616d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

