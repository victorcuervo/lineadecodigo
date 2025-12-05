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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DQWRXSH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpdbZ1cDR8x2Gk7qBU3eb9E3kSMqKKTkH6FPB0n7QF%2BAiAHcKQ27CnRYNRiy9YDuTGMMDU0RVTocerVsT2Iigqw%2BSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMybdFRaKXLK%2B7KeiuKtwDD2IjhP%2FoyEN8uNFw87Cfp2GtpnoSJkyDblKROOns39TQcWUvvbJoKSxE984NeqohNrqx9XJBUY3sX2sm4w6zZIif%2BL2OGBIRAG6eI9ja4BdP127KEJFmFzDvoHUATSAmxpx6p3sy7Zf95Bz2z4KE7LKyP22jW1Xv%2BVDAlbwlrPd9Vpzb9D6Kwd7llChDB0S%2BaxWPUV3a49ytYFSUR2iNI5stGRQ1SUNm%2FVIHCMN%2FEfgkCYg8f6kTWGzECsfrPFEfEnPhxjpY5eqeW3xiJkxl22jeQsqycmHvXCiw6jSVIOaosHdmFK6BYTtuM6auSRkJvwuaDfJ45K58Ku9kPrwFtb2G%2F%2BlQdy877F6pZSFRQWD5Seq9L9cN5bO%2BqvFx1c8ukTbtqkT22iJwA7%2B0B5Tq05uTlTW3rO6uryv7kTUTJvaYtq76y42G9iEBxDK7cwr0UChYdeAy4dMUy%2BA9btDJHW5XqgboyY03o9g8pcXSwgT1p21VLqkvaaEhT%2F5%2B6ixVARbwcijjSg%2BkOPlvsMfHjEH%2Bsv3VVHQfeUblOHOdkvNHNpmbXRpJmb9QUT2yH9BTyZ5YG1vKqGA%2Bo%2FWBtAmw4igaE57TpCtjEuNmaZKG40vIkkBqrTaGIqYBuSgwgMnKyQY6pgErwx%2FoRVzct2gzaJrarBiwK0tjEFtJLrEjbkjnSGQDdMtJe%2FHZ%2FCMxJoMgocrakKH7pP9fXmD60GiwI%2FagA%2B%2BAaDWA58oeKfaTR0EeILmbW6HzxFHw79KYmZLNFsC91BCNbSp1V%2BRz8WtoKknKQeCD77NoxNgXB2tyGXbFV9V6KkV2y5ZHIADfDp%2B%2FwH8t5L75%2BCMdArXQQfHwi1JkHwfUYlH9AeV%2B&X-Amz-Signature=ab1700400da47d021dfaa629bdba81e77584fa09d66eb0c5b94b292f1e76b7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

