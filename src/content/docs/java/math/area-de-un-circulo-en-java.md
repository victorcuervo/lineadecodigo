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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUBDFFX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDelu0nNT5tGXqQ%2Bhv%2BqX0OLg9XcG1%2Fgu1YmVBH1D2EYQIhAO%2FDeAbuW1dDxTxGfg7YOCymqPz2Vl5Rz19YQbaXUXGCKv8DCF8QABoMNjM3NDIzMTgzODA1Igy35KGjrpPRrLcH44Uq3ANCTdpmMr7Ylj0CXj1ycRTUP3broYMneZetTvxWT8q0wqtB06%2FqMFnLw6oYNmGhpPmA0LOjoDxtCM%2FMvtTOS8NuvH%2BKq6Of5HJzBtITdycTCUE624N4AlMZk8%2FRuQLXkJsp0Rf4jNwAP4b%2BBR0qM35cib3fRudWEtWO5KuT9rnDgXCv2iC5tC94aOWV2UdGa0%2FmPQa6lTSxH5%2Bnc5On7dHkdr6M0LeaKqWl0PdeGbVjHCwuah%2FugjzoKYspLjhKLKH04MYLDIQfLcoUNG5eaJU1F0V14eCfhFIB2gb0oF3T26evbt5osGNWzvogKSl5hV8Qx4imMQkI%2FiKkKi5UI2%2Fa8G1W6Z4k02NYV4ub%2BM94I7LcjbRpNuACg9Qc7rFH7fORH1cbrv6EsYyt8c%2F36oBGujuYD3jkeen4lBbrzAlkYHViMn%2FkLms7%2FkbGqWIIj6Wgy1mrHyhz2IBvrRT9ilht8aXVY4WoqbjsqJeIlUts1ZzZvtuLuw7%2FW%2BeAVGkfrnn2%2FIVM1IdlAg0fKSre7p%2BuPaP1%2FjIoSBIodIWSOGUYws5BZyXOZDiMeEzw%2FW1hrxeUS9QDAlCQ%2BQC8PSPrLkmlFv5conEMA7OlO4d%2FPTM0tpHHd0GtFzX4rYSQczCVycvJBjqkAWWk0iRVv4u8ePDNG%2FOMWsEJ%2FvVo136tm7iQ3pxmaRuGLptUHQ1h8GQwyZ361NZH3YGdclurV1BZAn80WO%2BBmdbcihStEwk9vJl55rIewZbcVL3uAfeDJcbPq0f%2BMbPoJtWOvHtcsN5W26GrRpH1oNmU7xvWlSa9XQc2ZH7nZi%2BAiB1KXhWx0jCkq%2FTsiDd3rdIeh4xLZlcytxJFSmr3MM73zF6T&X-Amz-Signature=f836ab6b96733dbbcf3571b5201680288a867c122a890c161868f18eac766e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

