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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5Y472A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPOkUcKs18uQDpUzg61i%2F1Tp6SmvEPgb%2BummYrYZs1dgIhAPcBLotSCUdIMHZTFuaDRyBmHdEJ1QETTASdYMl%2Fs5k3KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlrfUoU4s80nYvw2Eq3AMMOoPAhv%2FyX%2BGDjoYbwDvZy%2FlXv36%2BZOYBO8VLknTOAXEb4itTKIcEFNbst6e5sq8zygDiFtYYxz8edV7CGbFPk7Yyq1CY8e%2BvMe9lq8sQrrFhEDOP0RCk6n95PfC%2FgpCTSK4KixHVtt2owkLGQZw%2BdaFSV9gRc7UvZjROrYxH2x0sD1wq%2BkBg%2BCfniUCWpd49C0VaPJlrcVyEj1KDOUHusjM2hOw24NiXFu6IykkxirSIG8Q1EBaNRhHtrqwiN12a6Zxrp78s6%2BTwMOhK86B%2FtQfcrlGDSKxe1F79runbiC5WwFqBE98CdEjrcRBLIpews%2FAoBn3rX7JArjX55VPfqTxdtKVYXLB5YNC%2BVwHQZ7CHLfwXnI1kvR9OQ0veXmY5QBxgyfb9w47tIXUmxovZzR%2FqdV4uM9oCu5kB%2FVIjiIzqnaxOGS1JX0jvHMXUgniaVf2%2Fuu3Fikk1%2BucU1QNAaJ6fDjz6jmUIGD9wwjt%2FKtG2Evhhz2BAq80JExwZ%2B8N8N3ib9dJJ20xYZSVY9tO6lV0eVgV6it3zvUjnZ4C9wus11XQrse%2Bu1xzihEdqekXrF5dnoBut%2BQRbho0o3V49BS7CarwfvCPNhkU%2FWEr6nYKZ%2Bd1eKLd1TgqZijDImdXJBjqkAY9cqwnzsiW9%2F4mGFomwjSTjkV4Awp0Xq7EZnPrxd2gQWGcoRPyd2Ub9EfaBEn%2BOmDBgnPHfq2pr6S1GWctd6k1IBCeTMbbkq8jI8nu2El3N8g5C0c4KcUcLJvHEJ%2BplhjB0LgNV3e3KAOaqj8NtYrKXUhVhCZ54rRW1d%2BpC4eHsAxp4o61eBw1hXASgOBt4sZKjQSlipyP3AhtiQLs6tssK%2F2qx&X-Amz-Signature=b859db9a4be29e54eb2a83d37655185830fa7bad837f597b8883d3247b2d5458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

