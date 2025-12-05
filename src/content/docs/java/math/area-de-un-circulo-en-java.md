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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMG6RXYS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIwJ1jHoIuzJsQlw5laNgyB%2FDzbVeveiag%2FbtcXIxpXwIgURlcvvd83auisACtb0UHzJ1qptSLR%2Bcca6PU61lwxAMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCIX4LX1DmK5Z%2FqUMCrcA6HbfqEEyn0JY7VEwmyGm1cstPbBUp8GcdMQcOzxkHNa2EfHnwvc16ttJC0zLKBsGbPB5fy2Y8UZ88PDbzR6tyEYq1RelmzFE8gHw7PPFpbG0jcEbz5%2FHu4H0o7dDM0fYiqa4D8%2FcE1nqMsoyMoQzL4ghdEdhYmwDxkRrSe43bWB1ZJGQfkU%2FusPSn%2BuVpeflS0tSBuxa7mh8KKoSTd1nnxncoTuADUkaIWCv6g9L0mtq2VkSOaAFqoZ0cFLmr7qbGZbf45m0faSJ0rfpNBo1vPdydsWfNuZUE4riksNA7aQy3G1pctJU9StYqgm5k9P%2BzbPAloZncLqiyHvnaPgrLJ7wTnXYr6y8ak0%2Bi96U5Zlmr6KvzVe2hW8cAUamURSogR9LlfB4KOfcP7q0vP%2BqYyPGILfskFwj34oicOfRid3D%2F7wC6fkXfxmRI2YSJe7G4MamBGMZ9Pl4U5Ks9jeSgOwPdwJ0mOC69QA0GDqspuRxnRNy0UY6QMuYXuPJoJh9lOFjIZ75%2B1OOg3lmXIWnoiZqKi3dIuDVfn3kg%2FR3JsNq8dO7wb0zyomtSw9ylzg63TioIE34Tcpwfxvldv6I68NdDGEpZnP2StufYeK9yP6Ri9iwHoWbaDQnl0hMLOvyckGOqUBO3S3vyi%2B0iWWlZPtqG8ihli1xhUpwpjYXM0tVNfS67lWwuYhfGlRDu6ZonrXr7LKVtRa%2B6BXrc1jT3nYQGNv7xDKE9fY6prJbEj9KSKKJObZw6Jd8C7fX9VlxPqHMvdQUxiqbcKSpfcZxDRVGTEEDgIeNjsw6HlmX6i5ShAlzQPt5m6QuBY0bnkhXZ8Hmos81VEqymnWq31W2gIHvspaw9dkfTzO&X-Amz-Signature=0fe9cc19db5b3bd32ed66244b97393c40bdc36c9a0d060a833031e1bc0d4cff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

