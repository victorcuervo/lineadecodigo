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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYN5AOKT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZGxdFvTbCtfuyc2Bn8IrSLgNa91N1zDdj2BtYelrnPgIgWP6dd2V7OZCSHscQnXfq9UYVQHdg4FCE0Xs4X6DkKXkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMtA%2BXCv2rrzzZPbOSrcA4PoWqBPAQSqx9BKAcxzaN6LE6EFB%2FsTvCQ7P3PV3XYgVYRmPm5LknS%2FzyMMbSjmWxozEYVihKkHI5Jm0sO92yApET361p97j93hzz6cINjLUC3oUGfvkPepRRzMxlH7PNJdkX1kNJsOnpDFxpEzaXnb4cITrZ%2BIaoBNnYH3uaxyYiqKShHq4k1yfjtgJmQAh1A8S%2B34UPOivdu8x66%2Fd%2FFSTmf%2BlhoGx7bYZuli8OmW8RpJhDHghD6g7BW7gJvjUkkq7rjtBfCWXpEIZbEYYxcrQnX1xR%2FZ41GmfHDDdR1r0Fin05oK83E25oVhbUCXD%2FoNBKdgLbJiRmeAm53vbJ%2B6q5pP6CqPkSCnZhQaSnqkTWi98tlVqrTonLt0uh9Z3Za8hvHw%2B4I9xo4r%2Fdpx9ccCwJznUavbPbOWg4WquHIeWs8bwpZcr%2BG1sDbvoSxEwWwe0lUVHW%2Bwplf8A%2Fx9Xq88jzipLySsWRPrTTIhUS03xRpLgmN9QBxS3AMEwVowsB6iDvheKa%2B4%2B0uf08zr%2FbO%2BzLxi3H41DOhYp1mzKfSxrodqNYrlfryOMO3dzfF4rmsoIGfP2OQzJjc7F0DXPN0Lp65G4DT4NNNAYGCN3dcxyc5DVVYzCaR%2Fjp2OMKHM0ckGOqUBranPwsy348szfJREUhwwAwiVqhKAHt%2Fz7LX%2Ftn9HKMZsAOY2Kgr9yrINzA5HauPm24vNyrAT1Qlwtp77pYKQ5B8NDhL640nTvkZdCY5N5dV6iMtfu5Rk03a%2B6WZkPXXGWGZD9nmS8%2BGV%2FPjdLR25CkqI064SXKQ1M1rNaLwJPv%2FTaZ4hQ5%2FvU6OPq6C%2Fi6IeULAZ1uCtTRtN1pXPxlg0mMi556Bo&X-Amz-Signature=99c6a82a1ad9f1165cd03d4f222e401203359584ad7ef4d28f8d4caea315125f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

