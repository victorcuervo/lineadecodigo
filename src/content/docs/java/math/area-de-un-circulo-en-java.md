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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVGJ27UC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLX35CiA0s9BAHEq6AUVRncsIrS31WSQ2%2BYt88gGfRJAiAWzcWrhzMgN%2FY5d30urm%2ByzkdqL8OpnijfOOxX2v10LiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRh0Xw2j8AdjdFmYKtwDJ0Wi0gebsUwXsXqLRTgbe8Z%2FBWFDSYCIgI9YTXL3piPDFtA0WcSJUmkDeZdWCdghOkM8epkGmT8alhZ1ri2%2FbRBvmo5Wi3geVeQ8TOU2EF5ZydxrjQad3u%2Bndmna4FIgFL9lnjAbiBx9RB0ctRRGT0PvX0%2BwhSa6lTH6PkfoH%2FtJj5k8DeFMOY5PNe%2BCHj%2FgFNRoqd89O6rCd6FGstZxESXwuEAl9%2BUexYbxAyRBi72eoSN7uIGuCUP5pbmpN7Wx5vZ5KRB5AQkIIcJm53tEg%2BJdrKkoVqguk2uauwAEV4icU%2FsaFlicpkdHZDpfvRdkpNBkB%2FJpyD%2F4up7W66smdQr6QCww%2Fdmbfsh1neuL0sU8stEfFwyfY7hHexs7C8wQsGCUcpvWhKXiwGr%2Fx591JO6qjBeXdvoXgAYwdU%2Fecp3sIBGIM05JXWsD%2FoCrikoFOsqBfX0rnh%2BLvP55JVjWWRgnwCz6UWsB5OOkJ9inCdQZprFWKCzXvACZpx0CiRW%2BEpTfMGM6pY2gJefsuXoBcdxQIx9N82JgYxT2Z3it1Gp1BnugnHvt8LnnFnavsj6Fi5Ok6RBIo7LT0gNQYIm87HoZIoqOIBtRZHe2JyOOpiBjgiaOP%2F9mzXwxO0cw9MbXyQY6pgFdl1UnIxfGxxxw1nWiE8BAf2iUwFePdzJQHPzdIBophqcNG7ZQsi2VZrzw3X2tch7Z0YUl71XF58swr9ZvnhA933f53QJ5qC5s4HS1fjEEr9eUZCqy5hIR1lj9kzTisJiDcovgQU9INmmrCFRaH%2FV85JJ8TeC5N3JwajPSfeyZzddK%2FHBLvtQYv%2FAW%2F9oau6kBNnX0EIKpBJSoqlZFDWfnfqkD3kuL&X-Amz-Signature=e410f21b00b4f9f8e8a7079c56ab4d9a0cd85a8df380f590a37ffd0792a1b5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

