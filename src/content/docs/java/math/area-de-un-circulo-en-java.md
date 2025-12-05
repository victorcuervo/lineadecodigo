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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPRTPO7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FrvAi2V%2B11FxmzZJNZl%2Fbe0Y8SH%2BDdoEtQ8DvdNnMzAiEA1pABgHoqzG8FaB5%2B7MtpcWS3xkmCBsQygQK3%2BFSOPk4q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEu8JHyqywKS8Ff2%2ByrcA2%2BbJ6Whg9w3TDxzE9jPOfniOvf%2Fy3w2MsAd1x1u0H%2BL9oC%2F2vfjBnaAQDra6TPYj99VBf04rpnlJ5CZULOVhNVJRkuZlSZaoYz0tzVxKc%2B%2F9%2FNHZxVvAn9sTYh9WQNu0s8Apswirf5ttG08laATpb7E%2B2baPXW4BqRgHP1eb4Uvt6HNim%2ByDKKpK2pqGNtBp8FdK6vZVigud603P5Z4D%2BN4HCqtGOO6c0d%2BBf%2F6ja3t7Sxd7iWJocL%2F5xW5aUnJmZ3XVMwB%2BQv0LEY4Y3TGmPRL19y%2BhbidYlVyRki5hZQJSAeToRe1BUtMw0gqDixJuQfUXuMQ9GMYN2LNcZRvrHZii2W65QakplUHF%2FZLZP31QE2AD7DnFKLNLt9aOzy8A%2BaC9JbCNKzO28dEwtZdNSbpYxCHFbLTRgZcPud5q9M2pK6WwGromFA8VPTSqPM90k9Yy5lXSU1pdB3eMPmgq1H2hXLtGMK7tu0g7tjc5E4SdQmP5A7y6GCQp9JPBEgimJh70%2FGM4lGwTXn%2BN1rMsFWGQiE2iGLAgIImxlZT9%2F3PMzIv89JpHZtDLtI5WjzhjEI67Gd2geMcuJImN1sdrT46%2BpZaP%2BcHSAbEM4uHgt7uh83jOOc5eFnBluPrMJ2GzckGOqUBQNbGk26WcNa7qaadyvXFHBBUvNLakbDEM7cHGmqZVh4v9E5w3bTiM%2FyR1X7GoyTfhOXSJBW4BzMS4BFCeO7cs%2BV4Gbzcl8awwB4MePw0liUT1GLvctVNr%2F0ZZceSNdDyPA%2FFR6Jy54KK%2BjsT5smo9YC65ujemZJxv44wSePW6W4ZED0AfrOAzWrSZw4BFZrPyANf8HMTJvNUcj8eofJrBfxFb4ly&X-Amz-Signature=8f73f32116af0dd402d895d3fab7d45980bafb28bfaf3108b2d21c0866e27ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

