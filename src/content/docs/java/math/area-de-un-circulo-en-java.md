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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5JYLJP5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcydh4Z3Q4IO9bb5ZgfeqinVQz3Zc2JQBDg0tZN1RIvAIhAPaZLfOjy7CwEeEn6rreVkqE8oA1Ws5%2FhXAG7Gtc3125KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx49axMoQ63d1R8BScq3AOIOGSBfhrzpFOcVeQYmHZY1M8FVxckJ8EqU3i%2B83ScjbLAokj1MVkE0%2FRHrDU7EwQLiCn8hCM4ErhVua3CU9xKVIi4RxHuSKgFj3cMfYsp99jOrR3DA7E10adAs6GM%2FEKzRK%2Fg%2Fgq1%2BIt59ASHhv%2BJjZSJgq8AtsmuWSuKlsL47OAomtrFUMM%2BxyDogqpoBcHw6RPSsifDUHOk8JY%2F0N%2BPH5o7dO1pbW%2FgzzGeDg6FPlu67liUO01NkY9rOOVBz0pp8qEQOXFGMN7BR9kjjgD2KDCe5kov%2Fdjco2eu2m4Iu1pXcSfA732Z%2BUuP0CPxGMYLav0n0NeBV%2Bi0Saqeihk2vhK1XVz06qTfB%2FzzptJN9yugBPrXuz6EtnFbEakoxOkAmsEUJ7Ykgacd9bR9eI6sOldCTgY9rbQUxQJwYn0FaPyk1b0TofYb0o3LF34xwkfY44RT%2B3e%2F9D3UT6Txe%2FclMXPq%2F9oPlCzdNgSjrmL9QKs%2Beo6gx5T5bEh0%2BaVnwVxe0I%2F7XfFy5jyB%2Bpc5P58yMFtuPj1BHd%2F%2FsWAd1Epthklg%2BmMWRHzEw3jbC3EOkKblKIzwCFQg6zDpx3i%2BthrlZxbFXdKmSittzWcS4qpWDe4O%2FNmt7yVp%2FY1z8DDAj9vJBjqkAUpQYVg5HseSEZpGc9uKkOgUQJwSjViOzuLdV2MZky4oUL9ZkpwDCujqA2lDkSqbBH3HSxZN5gp1bMCc5rm2QsNVLtjGxMfF5xQso4q0cakeAIOGnuOzolwle2oKaIUS7z%2FLmxrn%2BMw3gHnfX0OBJXTPcvdLdV9VSGLHxWnn76TTU3Go33%2FqimFAUIb%2FLT1y13vVYi9MCCH1OoAh6E2CX%2BYOIOm%2F&X-Amz-Signature=7339cb4abf33cc9d38daf4a51b624fad4c465b81df30fe3549124adf29ed6b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

