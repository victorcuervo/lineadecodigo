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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQTEGC4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvuAlu7Lu5k62hbNTeTBwrLBqWhWXBTiEpp7%2BmouxHbAiBJANp4YvFfWwNZr%2BIETm8BNfN%2FrxuSQvrBVbsNw%2FFMDSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMogTh6yQDRDFRxfIdKtwDSpAFE9l4QnLLQdKJuAgde5AvQ4j0RH6AtntZbVRb3cWjJha8%2FeMPFA%2B2YialCFuMl6g%2Bb4LHnvyvEfMtZ9OF6pfO7gk%2BLZzS39TWdvjh02cpp2GMqs125IKRa7Whyi1NOZwz96nJpd5r%2By%2FoE2m5bAQ2xdkc57v3mKEm%2BxDg7C9jr8kIEGrEyc6ptIOa8SdF%2FO5zoSJJOD3m%2BRQTByUSG5Qoi21%2FlLf9jztx92dqO7nMzcuwbl%2Fq83Q6DXAGhZs4NtSlm2qBi23Oqd%2Fg49uAZfkhyZURyF5GwBl027v%2Fq5Rh2%2FI6ooD4BqoNi0TMGwT%2Fu6XHYStPBNTBWT0yKD%2FWx9DKtnpUZXAzCxfQmrywmywR%2BFff3l3drqs78EufKCDov%2FkbR5EnoBzbCijZ6VycXesgqd3dPEiGjqRRL8cq5%2FCxNJcpKCkgNp8WHsq2WELmcQRxUF%2Bby61oYz1MiCmb26RHTt9IT4WdUAS%2BD9dZod7Rj9wTvJm8EJwFT2hWgHGcE6rELiiGcElEBjOfRlrVKt0pGkd%2BSMVFUaKYzQxsfepQAu2radh5PN8NsdnRVh10wKbzmPzB5yBPasg7A9GlFYZuV9fxj6PkRzKVYuat0zA08VBF9A5nAEj2nBkwy4zIyQY6pgGnzck5O1EaUpvOADad2UXhRzdol3KRv2lQ6u4fkzcAq3tGCylIlHGiQ04kNObfDPpWa%2FRJn1PW%2Bd7P09qAr4If9fIUw8CbR0SCktgo6t49m0fdI0mtlKVFiu0svAZ8TmocX8MC5QAnh9TeP49YM2Iqt%2FCU5%2BvYN3RLfzjWB5KlV6lqKoCVjqaiZdo5dn8y25YhCQ%2BN91BdVuTecdFK1t0PFDpZs3%2Fo&X-Amz-Signature=5b4cf8cdfdc2adc13aaac22f4890c44992676ab4d595ad1ab222305d33e2a0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

