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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS3UK77F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHe222%2FNfW9kARNWCHwR8MkzgBUyjgqhvBBQ0xsZYCtQIhAIqYGid8QpFZQMILkmPA15WguqLU%2Bkv%2BEO0M1UKpLI4jKv8DCGkQABoMNjM3NDIzMTgzODA1IgwVUSQyP6y0J%2FtnplMq3AM8y%2FvkvV%2BGsvqGmWpkJOnOdGn0xeBbOKWTLKmctwF4flFS03ht0S948wZhPmTwsTdyn5e1dTO6oNgfRCirWfg4yNTDPmAPOAV6WgUdbzU4H9oLsP%2Bi9gLvpzkElUYITvM4bK5jIwHdnmpHa350vL7BpTz%2Fl0m9gtBQmQgUbQR1oOr%2BZwJurtBTyTtcbnFflrx8oGgguIxclhgRlPDsAzIwfY%2BtXBEgltpOdx5Ro3p59P%2B0baP%2BuFD4XAj1wAdalrCp0WZqMMQCuKY2zRJLOAzQSVGLBT%2F7GEokXkl1AcuoUSIivVns9F%2F6RzMjlmgErUDgpUwGAIKcblENl%2FwecHX0t8XznxmcJVHQZEjioHzhzDjbELDfJwCv%2FHX3hfhEVkj4StKdQzBZPQsybfonlvKAP1ytyoAX2a6WHvAlYGrAKTml8dmpYMqIs1TdhJzY7THtYaY3WDavCpgviMPbg8pN8hLjmRNlpEyJPGw0CObkmxu4LRpgTwRwyF1oov5ky2%2BGC63SkRM2H5pqcIgtNQ9Bafh35AoDkYQ5ECq1uXX0HJf0WSTVNeM8MSqHtJuD7tYLimgjaAbFc%2BtEdUgjABKR8CKdZyw8IQ7vJB0Atnwb3VTnZzjFX8qGznLiITCR6M3JBjqkAQ%2FUQuZS9v0JefZNTsp4ghGh7y6bBY%2FuoxoHG%2FWV4HigSdYY0%2FnHJmQP3jt0nPs9kvaRkp9ZLlkQFSKoPjxTY7NqaXqmQs6fcCiZW%2FvCPv0wPXeE6%2FpNcgJAXI38lpfv475Wtsk3kaTs1kysjX%2BkwaU4%2FHtlAHo6OGYvQfd2I5WpxWJsx%2FrSXeBUxjotR5yl832AQ%2B74PiWtaQldac0lTC7mdH6h&X-Amz-Signature=67983853389703c383b1964bf62501f3018b58dd056c380677be58266f57b874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

