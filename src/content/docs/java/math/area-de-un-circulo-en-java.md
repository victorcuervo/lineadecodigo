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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZ6Q4FT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPxixQSgtHd%2BZd%2BXcvPMP506G6Soffgrp67ucFvmc7lAiEA7W5p6jcFpT5IPC1%2BBRgBB7a5uuxQN0V%2FTVsJmw%2BcuNAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE2Yo%2FkiTF6hcBjK%2BircAwa%2F9D9DlJ06GqX4IVgIo69oDZ8JNS36W9%2Bt1A6Oepm55JYIltM9%2F2GSg6nTfXyoWKw%2BlasQXVOMagve2d52jF0qKpAOxlRdu08B2OCVaWPoJobWyoX8mUN6aeDYyABOQaUTMqD2svjvojkvdMa%2BtvVDCoAqo7AGAF%2B9pzi6yjjc9XpT%2F9V7N4GiZhdBTzL1DgwI2pOfcXvg9wyeIYV49foTWz2DQY7wiZZMKSoKahg8HFOhtq%2FeUKQN4GlIxVLoYiTBejT5daELrQdBXRNsMZNSpBa2S7F0RkdsaWATO%2B%2BrblOGQPozzyLwMnPZS0lL8vs9cWVotDmqTboybOauq8s6yzlHwpKwdlVQr07qU1cJBEWFZ8DuzIakBkOdsWf9EKJDYLTFc3o6a57Dh88mITRF%2F0y1kGKz6Iy%2B8TzDTK6WGmPFjD8Q0bl%2B4bVroDUMVxhKYcFd2ryRBW8wl%2BnmDaJs6Rc16vU7bIdEuxgaqPBgsTnF7Yg9v5FObgqwsvXLf6PLZPskQLWNnpJT%2Bot4BI9xohy2CLTpr3EW%2FFA5cy69vOGAamwoQfXrvyw7XrQWevzMmvYVBFQMJ0hkVOewiSrz4jjwiTEfKJZly%2BdvtcNlhDfZeMb%2BEBwDlAu6MMPT0skGOqUBIZ2uxjU4Exln%2B97NuA9YQC10Jse9yNzfosQjULo3BFa%2Ba54ewZptRxiMIbjjd3zYLS3c3anx1vjT%2Fk3eljlN5s6u53TS90ryIQEuVedlgiWzaHG%2BjB72br3HDu%2FgxqtuUKql08jZQKcbX3Axmc9JkEsJhZn2XmXx5FjJhgh089s6PqLUcijOwm8mrbqWPFptvQy9nlmGkBDxyqW%2FUQsJJY%2FEw%2BKJ&X-Amz-Signature=9fa8b0f78af1e8681c145e4deaec460d6be4bbe118aa2f588e6fd02e085e05f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

