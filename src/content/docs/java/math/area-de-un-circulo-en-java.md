---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKNF2BN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC3QqZLgdfgBx85MnNIaC8CyJgyJPbFTf%2BF6nBGwLpz8gIgHxslB4kDcRuUPmmtx%2FtsXEk%2FD%2BsT0F3uEkSBaaU1i0kq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDKF%2F%2Fyva6A%2Fq8ugP0ircAxxkk9oANCKdDZz88pHFNDdvlOdL2AuMOq019k0wtNYUCccEMwFvxY7LFyu5MeZsmoIc09KpbasHDuvUfADmgBW4FeXEE6ngECzCc2784J6gr8kDulRr1iWCp2JHe2GGWs44nXBVsqXR2hsDsRfB%2BIclGJRFat4IPvGkS9Ts3lCrKNLV2UVkMTC7ftct%2F2fMmBvO4FvjLGDqEP8L7Ay5qnNpKPkkXjb1k3iMuMOmh7D0HBAKk%2By9s4og%2BkFTIKB1N11nUBEcw8cxpsYZkndUfgz0sln96EPN6r3h1UQ287f3ApEo%2FhOqdz4HcDVyKFCb8PHrGE7l8V5YiO9K8mn40%2BfhxZqyQpkfX5kGTi6b1KTLI1L6%2F7%2BU%2FK3id%2FxKHfjmTRwascLd0ASjZOs09e%2FIX1LZ5Q2NsyaAJQpSLYOwoOcM%2B%2Bdq69Ms%2FkG0PWsv1FPCirLwHTK%2BfxpnZf6IGM6j9vfDRYaqTp9a92GZTj7LrFV0YRHx1kG5HnOMKBgtr5xCFTxcJ98EWSL%2BUcweRxkvTQ2XM67OKI9p7%2FRN8jRKNAYcUvzengHIoD5OqYEXsFpFCy4Jt94va4JmSdvPAr%2FgphPZ6xPQZ3sGLA%2Ff4rpDDWbqKXUwFnGJT%2BqdJKTRMM7yw8kGOqUBNrvmvKllB866Kyqaw46M0VjgyTxEmqT7rCM%2B9PaSFy6qv%2FpCR3wx9C8j72iF3DN5%2BukAVASImLAkjav43LAYOWM4aJ2ribQ%2FlnDK9PkFVlwtJ1SAPbMTQ37jb%2BkaQaBIbz0lm4hUerBql09IlR0Kx4rY32Bhsw2bGp4XvUVdyDbGd6cUl%2FhcLEhPJfgmGg%2ByPerxNDUN5XtmlW1%2BSI%2BmO1q0Qu72&X-Amz-Signature=dc95016b8b664d5b293dd437576e394f883c659aef03cfcf847777489fdb98ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

