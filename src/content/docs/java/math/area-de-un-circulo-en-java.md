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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5OA4EW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPFU%2BlKk80ht3xS4OBqVRBB%2FxZUaqKkrnNkUV1taHPNQIgBLQeDLT2K1PsUCw9O7Ovx7kcTha%2F4Oje%2FJ7%2FA4HCWd0q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAP1UgiHj1jih6nRTSrcAy%2BP5EjxHgGooaC8qX5L15d42mWqBn1NhZ1ybArkK3LLPHIYiaWMWznCVRQYLpb8nL6qTFSBZkGDvNIJ2%2BI%2BccMDNpYHr7i%2B0kFGbtsMPjMqP6A9YWSGSEoxIxvoFzFIkvRrmMFQfRnQPnoBq5LjZ3VXowVy5iD1cpourvTUTG%2Bt%2Fi4%2FIa2pHpy6ikWEP%2FWvtg%2BDhNH1Upzd%2FUtq0fiFPVoXfGAbMrjKd%2B7WsoyzE2DBzb1bw%2F6AfLOMgmkRrWZKbWJZe1hCuKEw%2BSynzdMrIHAGc2yZWlcInFT%2F8nk5ApxeDvy%2FQRsPHSrRt1qmSLyYBNGndm4Ybp1kezXMUpd1D2WTBRZb65NQJIuOdsgfao%2FK3AdZmj6SIrF6GyvusjW7m%2FY%2FMYhO2hFdq%2FbyHunKgRgIjDHMAVW8lzwK%2FX01mlJPgxp3enQAIZL6N9XgOEGiLylrGkzZJF7ZKCyh3b2Z0OqZHlmz3YjOI39hAakLt%2BKdHNdyvjZyhZs%2BmVK6zzFfMU9cLxVeFI%2FdderoTfzV0JVUsXJ6MTAbegZRS8LdsepTbYTfIuHpMkR4SOcdqAdyE6E5JRI1mujxsUrqIcMEyudlTJ0XwloRrwgoROyApcNFrYeNk4SRKrwrwPVIML2yyckGOqUBbmMrZ4eZTmh%2Bxxz7XlX%2BM4Mys79ETWV4s8BC%2F3oV67nQXDBkDCiRx5FPz9Z2TmNB6f2zMYhyG%2F6rBKKPSyWvDFaIuVqCsDPhPxVRGDoYy02ROHEj9Vy8Z0GTeh5zJvR8Mc9uKxjzRZGgdQvynw5fZ9KN5kvasU67gpVEVR4VYdIc6cqNjNLf%2FriTn62GuHIT0MojRW4i85ZS%2FOJIC6X4WpLhguqU&X-Amz-Signature=db9fc984304506f1ff6caa5876383b32a742b86ba264769e73a5a27b7b3308dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

