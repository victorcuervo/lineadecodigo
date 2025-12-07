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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MK3EHT2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6vVhnpkzN4tLMxx58ImxY5lxg04F3wITabz03meEO6QIhAMM2%2BaLsNpUByZewqxXr212gMLgjcpFMnIcDzSUhCmlPKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBZPx6nnls9tF6azoq3AM3f75cFp1uop3ra775aJ77eLfyoslyEKy2kqTpqA79xLagIg7RYypBqxJHzmgdDUy336Hmd7rzCzzBorMEcnL4IxQGWQtD6jJFPjevuSCArhdcJ3jOqXqZd4dVKTWWJbOdJ56hIB2JDqdyi5BaQsolgRI19%2F%2FnOd8be4RSJhLPbyRwqNpE%2Bq0Ga0UQeopSe6OAHYU3RLN5jfA0KdDbqk3zoGvjbGneeGzZ%2BLuZXhYDFD5RbG4jis6WSYdtuUkpFGx%2B5%2BW%2FDsg4YdSUenxJ2dVg5UqbBMHsjnTDxJRPy7Szy9G5tYlhf2Ew3ZRKWh2nvci8D6GCX5l%2FVejLSNRw51xWqR5AMbJ5RdpO93112yZZczl3OTxvRWzlfJo%2FK%2Bka8Bxrgb1JZIKjyE7eoTPj%2Bp19o4WGQ5xczDFFFWy1bYC4sQetn7JIdvzSNilX5ARZ4rcG8Utf2XR6X%2FBv05C1WD1RzyoOaRU5bvpmUGIPUu7XUf0wXB%2FlUrP0Sv9YGbwmDcOuNtoAkKj8WP57mky%2FhChzSdL3ie%2B9ja%2FG7JsHgojiU%2FBuoTS2syXkBh%2BI%2F0%2FD5MorCCGHa0gIlMMtpD5S2iOg8O4HFhKBIkkqxb0fWBUkGSvYISqOxzXth2EjMzCu%2FtLJBjqkAfBVW4Ug3rkOTJwBYJ6lXbbR5R%2BA0iKK0MjW1ZWSSI4G%2FnlQiEXE%2FNHk2JelrbbL3h6hL3kEmJwfbg4y2iypoFevvy7%2Boy9CDBBtJBgFWH1guDw7dM9uXyywzYuPxC5kRMQm4ntQ42ZiRZ%2FhkswSrEwJ08A2LZ1TkMUl01f9TZamG5hM8OD6jr5wCD2vnpjxOuxwJiWBN0ig4s2fJJXeVXiF%2FFco&X-Amz-Signature=dc64fa05ed58a2ae867a7d2c9ca976741825b4b942d5b7e177e4fbaf1b855677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

