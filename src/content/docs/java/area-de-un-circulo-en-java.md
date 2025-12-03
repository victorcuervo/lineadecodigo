---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYG34V7U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBg%2FZwEGRtZDHeiz300KEtPntj0F6L0ZvrDb7lS3H%2BSdAiAaLh0o3P5HEKoRvGHO%2FPmVhMxFQq99deUB9FYdBeADgir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM5eXxdY3cfb4XPERyKtwDqfJHmXpJDuqGMpX2uiYfsjKEoCHrKv4x2Y1IwF2HnCg%2BnKZ6jHr0YkwiFFUNB78yKWd2TTOcl0JWnseU6RoSPAH0ZT2R6BLVooHmBT5IMLnKDDtWE1h7lw0yRLwN%2B3Syr1Bhp1QzliOA5r8P%2Bb%2BDBui08uWGlodBbHyKKg21EjPtG19eCX5mJ5xCJHAkxaTDT3RkidowOcCbN6gXOSzPjEeI7BnHLkeyWiplMy6eziCNov6pCKAntegoH9b1JftQrSW2MCh36LPB3iOA6ko6eSNeJdm1VmmusYvYa6dc5ppvkLNG34VBkAgSkEiqNmVI9P0nw2KJfUuIAPVaXe8emJXrcOV7e%2B7ExzqpMPhanKEod9RKKPwagpw2yX4gLZ2%2FsQ3U5zyl75W2OfuJiPrspq%2B8VPn7of1F8EZeWnDd982o3VseB6XUt6N9QQuTvcKbcdg4bUCKxGJBW0ee8PlN4qM3dlzvJPc%2FKRRC5kWjdq1CcNrtmQ%2BmLWonM3ntJGWiLYAb2DfCxm6K%2FES9z9Q1Dx1ugfbOfLH%2FLjhaMmDU7VmClCSNgf23ZuHiYzx0fbJoDhWkolb2DMSHrXF2Ix8a2g74J7jv%2FQRS1t28g9kOoW%2FmBTr4yqWWdwTZEdIwntzCyQY6pgHQjUxaXTwRYWEvZNONCAFlIBZSQ2JwlGqZFQISQAefXfdN%2FuVMX%2F61NZXZXYRypUzuKSyb2qv3PR2DyxaKsmWdP2pwNeuC7Atcw159WYbm8AWgSw%2Blv%2BetJaoYCfG%2FlQ1dbqP1RKZKFmNhylyjgNrjIJ4SMiuAQmF1nVC%2F9fVMqRu36WJ8sjZ9hH4hBp1U%2Fl5nLrwAdZWrgq6tcX8H6UG4tudBclke&X-Amz-Signature=dd084e456b204d6e80e9439200416ded2b08f653489c99124b2d9565244e223b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

