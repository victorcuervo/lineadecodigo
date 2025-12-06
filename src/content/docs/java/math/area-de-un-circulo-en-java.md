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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BYNRZFM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2wiHp9vb%2BVltV775itdUQ1vt10ji0TcRO8kh8gP5dZQIgcU0HMbilk%2Fge1EDQDanvtqrFfMml7YwxvDZcTfZepd8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDC21BAUW62cYsPM8tircA2Bo82bkC%2BN%2BlpHzaCVO40ODoVAixrIgKkYQjCvKQ9RpIpivygNLMHty9BM%2FHm54IxtFlUAvMpjVlOw9knMQefmOUDTCBcEs4%2BjeGo4eydyYXcRLYZ0Vs8u4zM0G5VIKeO3L7Fxoj5YcaU%2F7rfW9yGJBBicxy6L4%2BiprGPDZkdnx%2BcxY6oK7hEi3n37DpVDsj3Ajrvkoau0iddzmuT%2FQQSsjU1UrcvGouUcmDPdR8gwWkcqYtiad5pKv%2FHobzTm7Z6m9CW1Ops9pCOtit5aLz67HM0kDPvuBtbcKc%2BlGvexMoHtbmpK1Lai83WTmSRoIIIksvQ8pjEObWh3XShfTictRu7RZo1BVhEdXOj%2FTuukEVuheAqDWIeZRzAIBM3hTnASsaBim5xqhqOHL0wbzoP%2FVnKZlKZveKxPbJY3%2B%2BobSQOwn9K6gGIyYIn%2BEb6Lp10VPPDjwjBZc%2FbIejbP8jEzI42ALcPWdYgsb2qRrGamLWrns3aQpOgrFXVObW%2F%2Boeftklq6Dw%2B%2Fn6I23TMCI%2Fur%2BcOreRPVwkTLlFxUmJjhu8ExYSn1gHbSpXqWsesNaQQOXY0oAc7x9zD%2Fxpmm0bl6yfomejgvU8qILe3LmID9JBk6T3sY52pvEhZsgMKPozckGOqUBNeqqGH%2BYTFLqb3Yl9VYyeIX9wIAU7m%2BaXa1Y8foe7LzpYQ14xbWhD4EbHyu7u4uuhpZovcODtS4SWsALbr8j%2FoOG%2BVHo0T2tQM9arg1DWVleBT8nmE9l745GG8ghGHKYgB%2B%2FEC7tnQBjNugBgFMjU9XRpXRakK7cu4wJivDAsd7H3DoIzuXwYYdfe2fh6D94CLCgzXFqCEQvdWdvY%2B9Si6gpkPBx&X-Amz-Signature=e04d368fffffdd97140521383038b32e95ca9bcd18e6fb14e0a3d889120098e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

