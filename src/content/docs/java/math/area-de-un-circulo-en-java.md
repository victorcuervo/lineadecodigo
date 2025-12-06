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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBUWKJT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9a0PpVJVzQXrr7wcpcUFrBtmG86C6D3QqGc9ZRWIUAIhAIDHJOgSENjbfo0uU49yWYVObOKgTkmMKvB7lBoKD2KAKv8DCHUQABoMNjM3NDIzMTgzODA1IgyY%2BHbDdij%2BiALJqqQq3APj19nbauXSEjGKbb5gFyR2bixJ7FYXrfIdepekwG8v8h8DWe%2BGDR%2BIn3zQQ0RQ2lvZhhwwMYF6zWW%2FIW9eVtvc2A%2BPZlKj%2BrrER8UZtBs2as1aBYJ3LkuhjQQzuUDHvvbFAO41ZSh9y3r2x6zsRFNnfB7NXXXl1vk9wjx1vCGlyE9DLH167KGEPoZhsraRGLwN47yob78bCmRvWTO%2BS8lWJhIv7ejRrVyhAU9vbigNbAGh6gW4LnKM73Yf9kMnMsD%2BILT1O%2Fc1znzhaWHZew%2FSayBjQ4CEeSJ%2BYtiOxSeE7yNIsgHFMWU2PyasozvfXVt4MtGGHuVBjYTGZ47OvFFtTJZjo3kWfxgpVA4fztJCAbLcy4eT4WkJ5QDEfYvMV1njTqUB8PArXwynfkRoewVtt8Hhqo%2FYgVuBbHCUsSk2Iw%2FCz1N1JNiwXMTzh8ycSUAQp3VwrMjy8z8gDO%2Ba557r4JBCG0DQQLUL%2BlaHHFNyZ65pRvJYDBKjqn9eKlom58k8vYuWyfx3AlOOcvJ%2B%2BLyPkRC%2Fmx4HGhsKm1Do0U66apB7dBSzmuKDC2%2Fp0gDpcqdzCvrKLwYimm0FZGB4SfbynLhF0xSlrvt4OtJmAppIjzL0XCBo5CdFshcRIjD4ptDJBjqkAYQj6gO%2BANNkN7B9m3yQstpF6x9JSbddVkejO%2Fnf2W%2FyghurbEWCm%2BALHsBk4XTjzBybHoE%2Fmv6jFABxD39JZL3E2zPLsCLIyU2gBszW3cA6vu8q7I%2Ft9v6ax35qjnhW6gRx%2FIjv%2FPTmskkI0W%2Foq%2Bmj4%2BxiVVhMY5f8bo3EGhPKwCnhVPOwS5gXscx1HgXabdR%2BMl6o274bx7DZgTh20vRYa1c8&X-Amz-Signature=070cc274b1a235efa73c3bb535ce2e6d54e94e0261eddec2ad8e05fb79cc93f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

