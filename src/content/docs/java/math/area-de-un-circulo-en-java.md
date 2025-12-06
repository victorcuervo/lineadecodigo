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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEFYEUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcvtrN3U265vTWF6IRED9nRJlHW%2Fn6Qzh6UZHeZk54rAIge1WUjJezll23ky4ouwLmheAQf6k8tkOobwyBYDgwsK4q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDONzFlc2gHg%2FRbRmAyrcA86NnGKssiyp9gsv3c%2F9SZ6UQhcaeKdXv79j5KGQsjO1aCmupSNgYPvOxODBohfimJRzfmINlIhYsiNDpEUiKh2xxp20fsh8%2FzlTEuVekxxKOkyjXgf9XSwFdI0LWe7b0C8%2FzF3IaUcqi9O7pBMEeDDHL9dukIAp1PfNeiKHVI0QTamCyPBpAB1vACsFIbzTlfj6lNpbnI2yJyj%2B%2FkKhqbBgS38kHXX9qnJedayNIJMQ17WJGtLa8xAMkGNME30%2Fm0rfDWwBFtiLZAwnxQg1V1xImoCwEvtjwKsBbPCCSm3X7MAtwZhV%2FzEwmZNRts%2BXqq4GWjvkIPYr%2Fdk%2FW4B7oqCbYySwkuZEz%2B0kBULelCpEqsArYF1XbfXTA61ZG3EiB%2BGoXoAewQO34W7KtbJ4jRqP9GPV6c7vbRkaPOdh8jg1ffXWI48C6OatY43%2B8sq%2ByNlaELPFAIs7Y4Uc25dLWJTr9G9oKw%2BwQnoKP%2F0pQIXpPXPTeNgic4WAcY1S%2FbjSgeKIRYMZ3PTVXbtV0myVsE8MSmLUZvGSMEF5HRTOlhqaCpnFQUwamdLX9BRmHfxlvWoWg9aMP8UV2%2FnR95nea8mCdCCI3FLzwTZXwVn6Dyx7Z92GPyw3bzYB3F7uMMD9zskGOqUBCgxJSaCg6BdBySzzyDKW7GkpGuJf0n32uMfi%2Flb8odREH6ISmf5Dxbarg%2BiZbHr1TQPl8Ey0w2%2FeUIVAjEsfcheiK%2FtKA1YQ61TVxrnZ0TVnypYH44kjQ538L0vWmFAxxjS30FYL6pk2OVr7NobDKLME2a9vgT3DpMqzsvDzGMjoWl3J%2FCsrkXuj4uzIH7OJGOvjG2rR4gTTQjR0jRuLRUWoS5v%2B&X-Amz-Signature=d5871ccb54c0be2fefc09022f35bc07c36523046e320957febeca43fbfa0d20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

