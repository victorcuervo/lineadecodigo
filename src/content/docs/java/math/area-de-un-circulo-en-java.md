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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TES3RKXP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLjAz1TSB09OQG7NAOPkuYXb210FGiiwcQFpU8QmNtRAiB8qHeRIagJA1VZsiBUV9ZZL0iDuYbvS9B7EfkSukl0wSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM8l8SXflSpjZLr%2BvNKtwD8DpMjf01YafnjnHltQ%2FF8Go0Ef%2BBUOKgepZpgK4wtpJFJ11K4meddHsQB3ql7Uu9Unx5e2t3lllR69gz0%2BOfa3BAJXElDCNkVpnM6LoXkYtfLSEX6aUMbSC8G0izpy0Vkvs%2BT%2FrkmiRdgjBq172j2PCHAA0Z8tItAaSK2apHm%2BQTZ7qio13VWjRhBaX9sk53csctQsRaNK5g%2FTVIME1tLgkBiT8oSvUWcTg%2BHHpncQlKXbLkOPj2K9Wd3hnU7rFZSNOXIpoAPovcksBRWH3ccGICNIZe4XRI8C10UhbOBhj%2Bq5wRP%2BziS%2BKHanL3K%2F0QixDJCjPOofwvgiRN6JCfIeHr%2BuXjeEPF7Pqmiw4ZSZZLZH3wzaJHdgt7b59pd3Tg722DQnv4se9zJnSfkxK0zM378qC6FIqY9UdcQZtO7RMmffBTUXZQk%2BqCWYrWtqLEsStg74I8jTm4LAnq9LB06qD2w2M1Oue6LCEhCLh6DJQq1gj%2Bbds6kK5VattJ2FG8KHIWKSM9nDuKwLmUEwt9H47guSQZTeobeoGxkXGqUFya9skeQBvoiISNyXP1Gx5Tt%2BSOAoBXs8rGqkd%2F%2FVsPXbn5rkVT21YbWR35LtZdKrpFLteF2g19jg93oVww393OyQY6pgG8ilKAH0Xb2R5zzZoV676zIHF6fJT%2F0eBPhDMUtWeq3IPO68SaREG%2F4W46iO680uVkFerDO0nu75rxVhsrV5e5tELyochWWAulP3sAz9oV%2Fhuz%2FEypHZi64DBInGe8k6QkidRVK39WUItqkjiA6xLqeim3Ln4f6PHm6OYuoK9ie4hQNfNFt%2BiWqoypMhl%2FKxf%2BxOqSm3l3AjOVs%2F0pU%2Bp%2Bt53ELhWO&X-Amz-Signature=afdc9b8b091b0739dd42eb29c2864c5b5853ac44456ede23390cc67b36d61f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

