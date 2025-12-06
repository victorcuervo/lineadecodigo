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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E4ZXIU4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFhB5Nh%2FIUW7z6Mt%2BleWRHkEFXKqpqh0naeOaZeKyiZAIgC3CSbo4J6%2F3D%2FrKy09d1p%2BAR8UWZo5cOWR9O4SKNNscq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG2tVuBFpOYKlwQlvCrcAycHZqxzk%2BCixWhDk9iTmkphYL2e1r2nC6Zz%2BtQ%2FegPjs2EdyuEu409B8dv35UlNIG2HWt35D5H50T8OHv4CIJMiM8RaO4tYSM3DlaKbPQjpKMfmSBpanZID3mK6owaYHPaaWJFI0Zekk1ywrEJYY1oqEwXsKvDwUHKjHA5f32SV5TKgtiSQ1LwKZIW68BTFbTU0FXivaVL2or5hxi7EVCqJMLbLN9gMLWvHDAMV5gwUlrZmzL4J6DsS16V1y%2BibvNGWhuqxMXDbOnwlMSKUiR0Ftwo4Bgbt%2F2kMQ0Lnnq2qiZl%2FK88ahpVUE57hyPlSr9dPEri9jyU6A4rUCaGKQQkdnA%2F5eCIZU4TfAwJwU8Cy3RFPxQKJJB0EkppjHzIPz9NfxfHRaBpjUiWa3kUHdOmBEnuQqhvrtg8KSZbHJFlnXzRb6Chs6vT8E%2F6S64yhBwrea%2BSWiX7SsjaMGpdhgNNXeKqdqbLR0GmbayqCF1japRO9VO%2FndKJKFmKwmJSXtTA0XmTxlF8aJm4P%2FPupgBzEklB6f0idhi2pCtqM4wd%2Benn%2F3WS8QNLnqspHoBTC8CyB7cQFH%2BTG%2FiX1pai6fNs3UXH%2FsdadZ8M%2F%2FMyfBqbEi0QYiv4tsZrPUqToMOKm0MkGOqUBdqXy2XO8l9bRYPi6tYB9onEDGnHrpDk7qD5mWw5LPv%2B5SV%2BswK2TxEpbjwgZMs4H%2FYxWH%2F3QqsS8%2Bg8pyvDVWZYljagiWDHox%2F%2BkQqdTlCO16%2BpKNj%2B8F%2BiJ98EOwpPK00J%2BegQStS%2BCfdSofr8Hv4bR6k1ccEnKzq9lvz%2BmnwdGKjRH6TwMrTh9AlGaaKwb0reYiDx113c1zBnhfVQhdL%2FfffSi&X-Amz-Signature=04813ba426394ec2bdf744741abc1341d95c352bc809806c6259722cf24a118d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

