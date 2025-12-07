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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6IUHEF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T060717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr26yKmP90IB%2BoSTQOgEdexHQ6pTKTMaiOwiHWaJ9vpAiB8uXxcjJhl8%2FjRTBiuY6TmfrKqMRE0QPqoF7Ol%2FltwXiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkywZz1qLSgmtLCXwKtwDjJbbsB22tP%2F2Z6ZsZ0Hp5H5fa1qJ2dliIF8v1zcIErt42%2B3I4b302VoG%2FuYXrB1p%2Fuj4QkdjTWUpP31VYqM0AunrWVmddHmcNsNI8eeXc9ncBYrqEhftvIiK7tfXo6LQgnio%2F%2FvfermV35OuEF2S7XUJ0QTmC0Y3qRkNHpAl%2BPOv8%2FsHsdKuxsXcoLLmcwd8IE4J51rnWoHAa6AaA1jt5cTu2AIYgSqQ9PxcgQM2cknqfmU%2FLb3Q%2BkGimpXEEFlEKNR638joHB1dzE4q%2FW%2FthzrfHIKXOlHQJs1vXottkqas3TSixmz5JJofgHepgfWOq7zwd%2BuanqM5qsF8T%2FGEqTDFOzlOExzV6lk4CgpkVmIAQe8%2F05pexWxnP8VlDcoI1zLjuHVyFl93FMXjCuKrXdNe%2BEl%2B5yZAYrwOXL2yxC9pT3ZgFlVvQRGUSJuzlXY5e4XYpoqHn2tsERh0ctn8fxGc1F8FAtcuvG%2BVbZTABmMT%2FS1bFXp4WTiTECcDq2HqoIyXDExBxVfGfUVGb9C5yGRb8epxivS4OpaJ9B6tY57DdQrUm0rap2wCgESqAsROREBYb4no9owCPnOWtKOV3J13j%2FskYC0Y4LcEoLBwee%2BzIzR0Yh4bTnlp07Uw66HUyQY6pgEUCIL2BwCu5IX2EwEom5lOta6spN0DEwY5SR0uJ8%2Fzj%2B0imJt5%2FP3pr2Dg6PEZ6ldLGbUhyHNTXaegqB9Mn%2B632vV6i7WSAqpTwuFM2fjeQ6vsjbHmYHLK0YhsgqCWz58120YSn%2FJC%2BZuHlqyV0SaHBJadsYmRfjEVyVYjTNxIIp2NNzkJhhnDFOhi3rGWp0i4ZZQ5L4kL0Mukgh%2BQ%2FRMK0B6u3O3Z&X-Amz-Signature=d6f5181fbbe60808c160c7f9c669b32f4c5b7f3f63f4c3671dde06381a96d633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

