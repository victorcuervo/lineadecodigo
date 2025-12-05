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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XRRV7NL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXmk2btK6mCBnpTUWianVZx0Lcx7%2Fna%2FvBTCv5dXB0MAiEAvGo2qSQDKVAq7EQWVJc9Wei%2BpWhXgITKahz8Lp111l8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLfyBHUHam2noHydQyrcA6ZxvrmlXgc7FNewREZA%2Fiaoyby379YqCbkAMM2kWkF35PJQYEKGzjRbGZ4T5gvh58L8MP0%2B%2BpTYQdNhAJWjvuoYZRYf9ye%2FC2lq1hA%2BBkgsh0p8Cp%2Fj249%2F7XcpIGPbusewAhZ%2B%2F%2FNDJQVJ8J%2FBNDEH0qdFOH3pHpsC%2BMSaaf4Z9k7GraTud4yDAAd%2Ft7NViW%2BT1Z1sgTQOFuSPHUni0Ws1BeXmUpDOHEJUCFaPiyFfDfMiSEPTPbxNhc%2FR7TLwauCFY%2Fa3gE1k1NrmQr8vSL6DaZqyKJ%2F0MVjBmCXRT3wTAPzNwbGk9OvQJzcntjbseNT%2BPWTaQVaqtvCIzhx%2BU0g%2Fs9SLT7eIFeNFUL6BHq3aj1VlPOviBEni%2FDW1q3p5XOOGJe2T5mVcZ%2FX5wjp1UOs1tqU1TYmo9WdS3OQ6NcpsrSnRjEw%2BCVjJ%2B7uxKPdvLTnKufAKI4xPt%2FZhbTN%2FxeOIHGxXSb4mW0264hVq3zaTp47IuQ8WNaXZEyDlOv674cWVe%2BBGcAnXl5rNKqYJqmRxrP7P8E01JsiLXwiQWkbJqk5amYTpt9XkTaZzQy3VJo9PhcN8wVZ06dX4k52k0M02VIA%2BfcMBBn0yL4LB65NWkqTEdguZbb6rUdq9MO6MyMkGOqUBEOWi1XLXgmfRJ1kjckrPkzaLpX8rSXDc9Ps8TOC%2F%2BCgxwZ97mDDIIFzj1wwOKV%2F9MROEu76N5PKBxjPVV5BklQT0Y9irH2IIJoI4zeVD7gbANAjIfG2x7Ei4BQw3Qq2PV5MhtwB8cCwsRFBhDfX8JJ49Y34vgnP22usOz1ok9VuG0q%2BvTBbltNjU5K6q6UQ%2BDsDVJl1Dk%2F%2F8cnoy8lV24%2FDKSdab&X-Amz-Signature=0bc41c50052c5b7a28f60411c8aae80cd99dbc3ed7324422c63dfa48449353c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

