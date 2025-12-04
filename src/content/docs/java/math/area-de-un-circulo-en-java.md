---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKE7UIVC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC1g%2FzpTuyDSlg00G1Dj%2Fg14s62x%2BQ0NLpPdMO0K1OoIQIhAKzx5NP74P3%2BFxrZu12dMEBxzqlwWM4J0sJlBrtoHnowKv8DCDwQABoMNjM3NDIzMTgzODA1IgxmtPIQ3jaOgBU6Cp8q3AM4s2ZOJ%2Bj19keTePZzQiOP7eZ9pi6lhI0jyiJVa36DM%2BIAgqmmpZqJwX6%2BIzH6QMFiSmgCvvOPqD7qPxQb%2B0Ut8NucimjRSTfsoAWFdMM5y2aSuiyHgW7WvFn0gveFh7vkSCKiMyTfzVRmKPZjSmO0W4plXYA5OO%2FqtZxPnllJuda9hN6WC%2BT2SUDZeufW4LqPG2yWXQcke9AqVH9XeTMcWqfdNxEH5AsLbVQk%2BsskKY2FKSEDEtNip4AZIHog8ysYyG4J4AmwEqwp5OBBKNyg4ISLb6fILzPz33XNhy%2FaSa0qEEumLv2sMUQ5J98Zz65r07ZHKwKoZ%2BBajPlBbwnwTMCl%2B6kv0ID1kWmWYlxGRgIauaycZGgcCeLj2jyB4nHR8qVZIfusnRfKz1aMwuIOwiYGwhmdhGGAI1S%2FXjSkGlnusfOwbw2aLPZFpv7XKcIq9HLmHi%2FT7JhgiPNKkSvwT0kFcy86Ew154WGBqvi17%2FEkTt1%2Fg%2FUeA1EF4HCXg6cFXREIYyKt0wsIHbhVFD4c%2BQTgnj3SA5C8vzQ5BQnJg6Wt7v8J3i4%2B2sDJ7HYXkdTPyVwx1z0nhXwoCMWbodKwJFNXer7oZVQsUIUwZq1PPp04mL5G3DR%2BskCpkzDK8sPJBjqkAaTDNsxJDvaLT6O9VlnCqdJGxjB8gBMj4Z%2F9QAHQXE1cIhB6zz9M8DaE8L1JvD640aFe8irbmji02BJWrO62IholFDha3OH1xns5PNIbMr6P7%2Fhuf1tVk%2FZWeuW0YVCTpex%2BoHnfWKCAQVSStyQmzEzGG6s56Py7b9gEsfUZyrP1UFIhmBs26XdGDhzxdWP3JfUYzBh5ZczrLq2TGGicX6FhWeBp&X-Amz-Signature=754675b003140b256da97974b2d6c4fd3f562f91b9602cd16cb635cb218154a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

