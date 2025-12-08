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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOJ6L2QW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWe0I5zvAxm9bFzS3pINKLgriq16Q7PTOjNv3aDOOuyAiAMiIsuwMkOHvFga6Qewf3sZJ3ZRFw3DYj55jJBQwz42iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAfV2XYCjjin%2BRMmQKtwDmLhXgV%2FWlREkf2YgMp00Xy2v99trk%2F70Wx%2Bi6h1EueW0VTPzyz4kKhrRkC39SvjyhHEm7ptDv7IPUTbO45XRFGTiO3S9CsrOVp%2BPK3sL4Ws0dVS3eE1lwdmItFkrfNlUyv7gP6PWPwguKdV0lIYzBza2sS6JQnUeU5i%2F%2BtrV%2Bt8iLXItTYB7jKPaHCScvEsywc%2BIcHnF9g89Sqq%2FlpxHcrhqYwUHykwLI0N%2BW%2Bbfj5en14ltJckT2V7rObkLPrxDUFekjOLSYHd4DTZ0n0EHsRw1eeKoNA9PADZYOM%2FQaym785zQiJvhEbN9ysd%2Fb0U5GL5g3MTn%2BMa80Gwt5mEXRbrkbhHMhT9TzxAbdHO7UOmft5MyZCyi2QJKSxsWTPkViFVczS92YYLJco1S9R4y2XwxDtuk5sHzQt7RvWtlQyzIDdjUZ5U8smfQVHRKXE2zlD1fm62pX9afoZDjueKUd7kCa84lt8LLHnLJ6KYc%2FhpRnzqUd8nr5gN6lOo1quR0Y2H5mKe2Rqv4mq2BWiaZiGWazLlB6ZKp%2B%2FzQIbx3fCpTGTdehk4oSoMM7tzGuSeOlU6Kv4%2FciuofzPDrVMh4fNiu23RABfefa3mHHC5zmf4nL5RDdERs7p%2FxhxwwkfTayQY6pgHkVrSkKM3JjHsHHxgMQ7bP7GH7rXRbOXHp0asV4PLHDVIZrxIVfTrvj%2Bh6DN%2B6nu%2F6%2FAS1G9p%2FvBKWJ2kSekGEzH%2FF4CFx6Pf30AV7L9iPCrL%2FDGayJMw5u%2FglnBSOW%2FXjJeZfPgCeaPqQsisXbUnSlNo4Oxb%2BUeyqzDU5Y0hNAUIZIasJRwiWKC6YNlgLidjbgkol%2FLOQiAZjZFocDZljRPxQkaQX&X-Amz-Signature=06a189f5a58cc44357ce3e19df5b65fa1801b6e51ccbb622777a7d9245bb71fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

