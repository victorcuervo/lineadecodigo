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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWEVWCLI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2f6bCPdwAY2c5wwSTASO7b8m8CQSdAxBn9IaNpAQolwIhAPRwHmsZG8%2FvjUV3l%2B8pvqt7Rs%2BLUFIXyk4F9AIJwgHoKv8DCGYQABoMNjM3NDIzMTgzODA1Igy84IMmJdu0TriMmHkq3APmv6sZqBc0AUa5OdGN%2FQIuNyBpWGaQwlbdncC6dEdV3DYBJJNMeleq6mEH0%2BtDZ%2B9uRB1kvr7S%2BVChJWea%2FQQV81oKP3r1%2BnAKd1l6e0YvxQ63TF18odyq%2Fl0mU45yLc7ZfEKQ4%2FiYkoxG1bQGamEoxhVKaPfAVhVAzTrAW7%2FfGMa8TX1iQ4B2QPHaAdQNYusIOw5eQKCclVC056qyq8E92L0zq3ScBUX5WzBsj7EGmKaJ%2FU8RSUNeuAIhEwr6Bp05m2auYnlsvdj6fGtYvCZ1Q59zJtme7x2HbttKTIKiTdeJFAZi4l0s0r1HTmwFMim%2FjWTh6B%2BIEkYOPZuJy%2FDhhP503E4FKr%2FGUv1DC8evhza66of6sSrHAGtXKYZ2J2K60DSLxCPjUCXuJBwIb2PbHQQROpG2j3Cmid8TpgqiLqtGcTLKFzK8mdbRmoqAZf65n3Jw%2Bib39Bom8pb8Bf58j0bNcU0mc3PNO872K2Cj7T6GyPKOlfuzChid6DFfNNYV3nGtUZpUQ%2BzAFiT1ae5d2XrUbwhBwJHDqIAsbsulOpI5%2BB7kraQYn%2FRUrNxfCUPOju2aKs5UBBcE7UOXkwp3uFFLAslIvTJF%2Bmu8VNtvrV4dTr%2BQXbZpiv4G7zDSkM3JBjqkAbbkcezc7e3j59EtrzFzyIJ6VIwSoOkCFKEPD0mSqgAw8e%2F77iVR1gkVm4ujeI73QYQTJGkjDWVYsaALldCiK0tUWxFjPjxpf0DVQA92L14Tb4afdQOctS3vt35gtcl%2FIE4d5lngH26u8S4KKoZb3kuJOo3XiSCn6%2Beggv4API6DnwjCSPVswKyCMp1AnMwelKNbb3GpvXznv0rc%2BRLsRTqA8f1S&X-Amz-Signature=eaab555682cfccf19c7e06876b4f367fe2d1d5d5449c83df2cfad332efd57c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

