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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YAWB2O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE%2BYf%2FAWhiP55xNifclBFavrdqo8AAZtXAc3LKJFgTwAiA%2FCG4l87xMB7%2Bvz2HmqIEGxOvCX2MajerWw203G7NQAiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufejIdwdFJhenac8KtwDKk1y%2BHkUS2%2Bi2HDXPCj3DrTi%2B%2BLOmNYT4pHaFvfFrRyR%2FTb%2FbwR0K7NLZqeofO%2FrTquaYcJdbScpF%2BkHF%2FO1Q0a%2F%2B2NbHjF5hjbsjqFOPD8bBkaR9sd17qu84m2DdyWRjfOKW6wbCeRih%2BlK3ycw4C8Bb%2FG7SVJkYhTOmffOqyAkWLrQuIJgEcEMSEkttOX6lPcqnU5M1kYnC7GkN2Lh34ZBEkP2cMUcQnjs41%2B0b3drHl%2BYyBAdz66GsLv%2Bl3BVHR13v1Efzra7pazuyQr5S72ab1qg6l7ipwLzVzmClJHRDad%2FwzAAgf2POZiogdpduZzTdTWRdYJ%2FlufbK7Cl6oflSoBxTzIkN%2BW4bQy1yaDsZ1p835ftPNXek3tho5igPtczXp2JgWABanK8YROaUCkkGDdVNjG0ViW44wd2YBP1k4t93CgPlLzeWEHHDeNZeE%2FHcvOlCzaVQ6dVS2erIQkTM9tb8hLNbC0Z2YVtLZTSBqaFtEgOjLtmDdMdeK2EfqMuUh%2BGZc49JkQhwa59%2B5y9rdzCqxVdVSe2zTHZ9RD%2BPMETlXP5dJIqOtl2z8bLz%2FJp1Xo72MLl6lZ7%2FKOHfQ6pNcksK3iiNSt5S9g3VsFgx%2BHExJi5NOCZuHAwye7ZyQY6pgGCJZBL0w%2Fmft%2Bo%2FJkId8Hi8vJdBV%2Fh2QgKV2rtJGkPa9%2BxtUkm4s2ZUT5G5uMZ5t5w9lm3YsR9HydMdf4pdIcGnAHFCV1Kym9w9a2nVj7gYLYWnx5e2om56iU5szYJ7CH%2BvCe%2BleINSqfagWb0L7T4zzyn7cFjo9w0xqHu5LiN0SeHnHe00u8jWKX5RoGIlTYxmpZcXItqCkOmFosaxzK9791cYW%2BG&X-Amz-Signature=ed216dd2d61f6417013514c3c7ce1946d0b336bd546994aee7705deb6d4e17d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

