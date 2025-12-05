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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZI6EU3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl%2BGSQQe8L%2FG5qQVEUk6rtSzslp4yU1ujOIWmI2EL7DgIgFLnf6nlUmxlzgwbovJnZqGHqylaMPJnNKlLnN7oT0L4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDG9mFLfCIa02ndSElSrcA9MkOO8hsfIG5dDAs%2Bz2iwTe65Hw9i%2FEGCfi69A%2BUA3i0gnWk9e1Tg7IUhWuedAaJao9y1HZEM4f2AxwS6Yz0r57WGShWGvRszfM7MARrhKZ3jrwBd7b5SS%2FSf9GJxdbM5O2o1MljlliWdsZE3hKz5EG3BYGxG7eyAeHc75OynBxLHptcpsrpstpPq%2F3UNsgYi%2FNHZilN%2BBzLEEkv1G39f3%2BvbgQbKrZ9x9v9Sd%2Bm3H2oqXbUOTSFOgXlXbrX0eFbBKVuh5YUiU924UKon1FB0Kq9iElIH6lw2WwtSvNupLYu4e90IVSP85sVjhy%2FDbxLLPzWW6cWE6G%2BZQrLjr1GPoYZupV%2F8coTYJZtOkuPA%2Fv53QtU0U3Qbi3InDdBvDao%2FxpeSOoRN8E4lkQMEqY2ftJpMuRfUYhR%2F7NBZD2xlowBN9tQ2OUyHxJ3Gzwor37OfKI%2Bc0a27awhx4ZkCC4KDA3lkG6rDZItwrkYR82fnYqefwvprf7LV1bDm4UQXn3x9Z9xjl8AjWCuZ096pwead9Iv2aP5rmH%2FbWvR%2FLWlwukHqavZ6nvJnlMQ9HKsZJQFG%2Fb3VoWUo5VqiLCD2ZWNthGibjDLWl8WUlPMtJ1x2Uu2Va8Zb355LEg8TCuMKGoyckGOqUBYrNsrAco9EWwoqtsajwaOHNKaymM3Oc1lti%2BoJ8h%2BT%2BM7JWOJon0VnHZRjFfgBFzlQ3dDDpnNClnEvcyTd4UQU9DECPMp6Yrw16lvuspmFbIGKtLm4%2BNdHEjF4vqR1YvCyhuQcY5Qe%2FI2CHZ9yojJ22BVoG%2Blc9tHYAGoyOMRmWV4HzvbKe2LvJFnqJgor2Z8TBoLbvopSas5o%2FBWxPXbhAeAzcs&X-Amz-Signature=78180ef93c9f0ec86ec519d6bb15ae0cec63b4157368f7106cf098a4ecfb09d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

