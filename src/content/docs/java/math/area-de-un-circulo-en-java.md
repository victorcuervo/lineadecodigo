---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJ24QTO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIHXqg1axA%2BN5v%2Ff29W6jSkQGGF8fBn5cZUP7SZoun%2BZ7AiAgWSQvu91C6BOJ0LDnrYI0eaQ7kJDgzq88z8d48C0%2FXSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMLY7NXJUMi1%2BZGl6HKtwD18qgMMGjEA12HA4%2B8lYLe5bONmuhvQtHXOYsw0S4lX9W4VDrx%2BID0%2FMlomjpeWRaUooULlgfSNsZxuG2O1%2FLYJILuf%2BKq0forN4GKkEMSeL4wwc8wLyyvgiKI1ynk8ZqzhIxiixppHdGezd0HEkYc7PDzjmMI%2FrXHP9kQ5FcaqvBse6csBflS%2FuXxWmvDTMcpJj%2F2z8NRuvM9%2FaUtgBnME8ugoCQQSd2Fex%2BVfiUbkziICjYqK05G7Ka%2Ftg9YtHdq%2FQf2rbZFrwGD%2B9mb%2Bfljq%2BjGPO8%2BA5eihgmuiCPXf5MunUh9mgPwjlQLzsris2jc3hSSV%2FEF%2FhrV9Qmv0SFbIt8nGAWNSdHc5Ju3Mw6Y7ENX22H2bnHPZKTuPsL2U1K5iNF0mc6t%2BB4FvvdCCB0584i7XHDcrItV3%2FKnTf7B2us%2BLeoeIWe6d5AyakZwCTN8X3W8uBHfmbvWtbAkAZXq1zYw7ogkJTLmWfk2hpIT2OVdu0pEbBt9Y7Fta56GMvMSVjsDMojVLmnHUoDrvwF8sJicAPRhjpV%2Fpcu7uZbTgRHRffIydMbxq%2FLlhbt8PwfcqlWgXZ%2F5BIInMprwqhZeStQZrQk8rMXjn4BgK9QMm2XOr61T0%2Bt6G3PvwEw%2FZTDyQY6pgFw%2Fhl29w6Rlch6JQKXpzLkBtQdm1e1uY5Tg3ltuIHi1VEqU44oEs8DbqF0Yy%2F0pBZI%2FtEX7Ump34rilUJt6qUkt07FyGUlzOAQUt84mdSARJHrgduq0QIscxks75JPk%2FD9XFReTr0RucORMUDn2gdJeG8ODGC6ZdJOY8Y2n5Ch%2BL2zLPDd2vt7sGX4cpFnnoJuEKdUV8CrIj9alAgERpvwHGHU71FO&X-Amz-Signature=8227b2b5779a67ad7b1c8e416163bfec7b7a36e5404b96798cc4ded3f98cc5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

