---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO3SQ6OL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIG5PNzvFqckjHOnVTa%2BEwPZmmANh8Xy%2BCDsjidz6jprZAiB%2FTPjH302KPKzFRi27nDxDjEZeNfFBEHy58mGwrv4uDir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMgZmbtfVhBvxHx%2FwPKtwD4K9ei9bkZPgEF53QOrqfgcVWj7keZ6sVhzVAn9cc8jrY5INTu0Jwk243WcmIK3iWlYGgc5Vhr4jGyY6w2n%2BW%2F%2FX2vu%2FAhPy1pJsHPu9Tdu657%2B4uG82SKh531x0ZyuGTh50IrKk0eJBC8VNIdZAzIXMFwAhkVnGxwXR7n5KDDuyfgv1d2j2%2F41GzwTRF%2FK966l8Sn1JKNmyJNVFGUGPdRYULD%2BNkEPIFOGb1e4dZIaBeWptiVvlPqvJFxUwzZKu7eGgI5wt%2BjL%2F008XFkT6Azm4CCytC139LN0bisUYLEZatAHKxVvIJ4ex63Kx1BfuoKVG6WWWcXTBeWQegDVwPDSASyNT%2F3O3xjBW49UfhEZpAPo0SVt6wygaxGqbpYv3Dlzd7ozVzz0RpCp2lHqG5tu%2BQrxS7R1bPvnThqfO10bWgD9B4qeWUUbvI4MTXjC6um0WazR4ICxC5os0Uu%2FMjA5uKJ4J21xfwXGRfluq9keG5JCcwhm56%2BQWIp9%2FYPp3XWzeVGSQTe3J0%2BGTjbpQjkXJ90G%2F1NdxulCv%2BjIFGlWa%2BvJbg6uN93CBj6a68cQ646GdYEX25oACXwDgGG3Cne9tuTjJOQ67N%2FUESXmbnyOsZA1g4RrTgcU6Tmp0wxZTDyQY6pgEUPBdMOlGGNLBoNjssM0dyiyigry7WANtpGCQKaLsKOeFBkPAEPszJeLDddmBjLCJTRJxY1qld696W0TosepGt0yU%2B1IXKBBA1kafrUYN9jNk1NexbPEZVlf3SUHk7Wov1a0m39ZDsZ0R%2F%2Bogj%2BEfMUyRSjqhagB7xRIs87Tug52%2FV7KV9EdvhW3IGktbDbADmrTgJ%2F9oVxE3d7beDQfHd1k2iWeuH&X-Amz-Signature=2bab8004da1c4098b8206c3a5b32df970b6d605691b94bc7f93ff28d1eb4af79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

