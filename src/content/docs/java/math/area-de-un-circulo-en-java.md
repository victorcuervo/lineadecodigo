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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVJDVHX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk8NxdXp30w%2F9A0LqxMa%2BfyzvC1dIPf3u15lfTrURo0gIgOt0UjkcNJ9qglG8ZtCsF5NbkVIb8pUpKOcTT%2FtDX3VAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDJLbHjuzfJTmtOr8iircA3OOhUMw5OuoQt7BdUv6yq61n2Eyh%2BSWcMrBe6YJSRRNelx9kwkigThXHhZEtHSf334vLJyIQ4sFYMM875sYplincAMN%2FNRgNbViGGoKIStAIqvCRcbOX5CcMiPsYUZlouhweKSwPzdvu2G8aqeArLtIHo7F%2BC8LCEdASx8N9Xa17xnbAlHkZ%2F%2B433Z3arRI28a%2BCU4EE0SKgufZ4k4EpDbH6U24vkTaGhmm2s%2BJAvKCrdkKTNXQgORRSALc63O4tC7B5uDh%2Fc2oBONIH%2F7lGOe3cgk9BhLtNLk7NHQZFyerZUrECEZ9y3hLXV7L%2BUc%2FwYET%2B%2F%2FjjOjTaGgb6%2Fk%2BgczLjiqcjoKiTgF8IjCSKI8b5KpqfT7RBdFhDqdJpRp%2BlC%2FGOf%2FBUIgXH7cLG4VVsiGTcKIqVn3Ko5H4YJ8pQbiYmkdsjLADrAWqQuQUsMa5HL1IVg3T8a52%2ByvO4D0D9B5FcxCwSWbkC%2BYj4zXclIQxEdf8gEOCygQksOnBNc0x2Pehoewk0clMFynN17nIUWYPmLpE2HjGvYouaNuTOvnT2TQ7FZg8yr3JTMKCEd8Be8L0M2SPgpzYVaOq%2FvGW6uYKoqwFa2hI9zjR%2FLN7CqgQiZAJqsOQp8jDIzJnMPnqz8kGOqUBl7PV%2BmBqRzlxAc7HS1%2F2KmB2xi5ukUCm0B9YgiM5tO9BZ3lvYsRYd15VbVXBzoS7V9VZdgC%2Bx2Nmw1a6CdXneekfh1HfE6Fmz4w1zL9bIV49hmzvsPbz1rKPcdSyLKZxxSwEWCT06BxCTjsTgs%2F2d6aZjOL22Ie%2FfGWDPhqq7Z4NyMpBBlpqyHm9MGMgyH7Z5ChiV9pUu4wp%2B8zZkZ5EPZYHGTcW&X-Amz-Signature=740ba98968c3ffc9d7652a18ce258684f59414c8200954056e5029b619183c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

