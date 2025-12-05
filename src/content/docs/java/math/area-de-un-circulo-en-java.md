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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEIXPVVJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKFyYmUutlLyuQMV02lsbvwvvjgPCk4zXQJQrw1wCvVwIhAO%2Bsv4UZ5a0ZTim38PNYfxfTCoMncAwgpO6DYBjBTwIBKv8DCFsQABoMNjM3NDIzMTgzODA1IgyXvJB3f%2F%2Fhk4ZBqWEq3APoYXO4xCyLxYDu57%2FI%2FoX9NYcCfJ2Y5XFag9sOETC7wyRiY6dcUwNfLJW%2FnzZ%2FG%2FYDV7f68TxPB75ZPP8SMZLikWojJJ%2BDW%2FU3KU5Ixs6dKqpEiIZxPEKuYgTl6ULdv1tUMfNsknou0v1XS%2BJP9S8xNv2Snabzey1DtV%2BLVs443ZIDxrRuXQRzJk1R%2BaferW1f4NcC4I%2FmH2hLvT%2FZVoHxbo0Jb8X0t4sY%2FMbKbBzxrpnwTZ8CMGxKdOlqe8Ruy39zys8nlFQK%2FWOSEVMTQ01S4qFrHQQUZl8hSJHZE7edMXnFQnQZunjDTnurjDy3x5Vkj60CSU%2FrNagjM%2FxSD3iffz6Pc844FPCc7C7CaDL0yqDZK3WW%2FNYnkrlFE5i9F88UYG7e5zISEklSZYs0z9maivgVpUzSJoA8NDEiKOgtODk17BpAsOL4YN2t9KL%2BF%2BUn70GZH0yMqVFA0ZLVyqydTzNqWjaI1mVBBWa5fhDtyYwq0cYfBR4dNLvj5eVTSbsXZ9cpcyW18mjUJzP1ImCjIXo7tzlAD5H1A3fCwni9JPkw9JhYjI7pLayDg1Bq0iHsbm6NVetp4Kupr1buD46P7ayn3U1L8FwTW0ED4rbcIufOhb4fdwyGkSvCyDDjzcrJBjqkAXhrHGUVWkYyWBtewqA%2BXz3lrpL5kXOVeLyr0wSpKeijWKbaUd9GxmAIXUQZGCuoxDEJ%2BWxKfYji4%2BZtVbiQrvgcexRAiKRvduR%2B8Sawmv53NKO0Z8mpNHBbfXil1yUNoHGYi16kuUytSht1ehRwZIZxrHlv%2B6NoTkaR6ShrXmW04iAFcoLHA4ozua9pYrgZKQTvJ53f4KnXFeGesl%2B1zH3ZQj7O&X-Amz-Signature=1ae87923f58b7de98cff5613d932a8590572bc576e17021d2cbb49058e87a409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

