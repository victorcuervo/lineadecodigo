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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XULL3CI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPEWs1lWzpszyLCOEs8sqgBrMMd%2BWuEREMeoQHs0vi3AIhAOXKV3jzESyCgiLl7ROopvBdx9Z0LaIcobPf9srRibKgKv8DCHEQABoMNjM3NDIzMTgzODA1Igz3f2dycF1VvxCz3ecq3ANmVlwyOWODIzahKucXScnQzmrk%2B5PsoZPBv52S5qRAKkLshi%2FXKug%2FcxH%2B7LyF0DKlaAI1IyUy2nzx5Ny2yKci0gcnlbCIaJuDO%2FlECdc65dLfG6Tz3acoSqd9eUAKhWRik7ov%2BzJMwP3xTNJubGjLYu%2F8fe12cOjqmm%2BTMzdaT1eSMAqR6dPS8gB8x%2B9jKv%2F%2FvLXyNtaQzs3BWOQXk1YszY%2FyiXv7K%2BvIu8wNh1T4CbKrsjRRrfXF%2BhWxRqufE8P2lAm8Hk%2FyZvWZcDCO8oYHnACAjVVlZe%2F3dVw4fAdmpYSMLYu9JrW5HkMBb7eslS7jAP3Yj08h%2BnAbktvKpDwM6y2RBATT%2FTLvC2nA7q8Ws7%2FPdNbF8DvU4H91N1k%2FuVLdUWkrxTOs1ONVzNd0PZbtiLEE8pf9JSw%2FIbbmDHnYoeGlFuwA5x7V0wd9fQQMvoz%2BMsrCap%2FBQgP6g8tt61dfP2KmowBE9i0ZLV22CS4BGsU4XAIw9gTx8M2kbqDN6uYBcrF6gN9g98nv53sHHBSYkBOAcVmfRqfV%2B9o5VsgElmykXgZfN%2FKduT6yr1ikD5phwkAGwhua257Mz9rn7ABLSnwYlcxg%2Br1gdb4hc3uF8Ok9b%2FbzgV7u%2BZO41zCfvM%2FJBjqkAWRwNE3QkC7kNycMgvh15p%2F67RF04z3Zow5lD4BdZuFFqPk7kXPD1nL%2FLUKo%2FNsoNQy48PfrmXM1554eE76NQSCwfnSbNkHRJ0Gncn7l9vx7gvfP2Y%2BQ%2FSlUcW0ZBJLynYxWa316Bci7C%2Bj%2B%2B%2FqmFmpioKdIMySCD7UNqmZ2N985%2B%2F2%2F9kvd%2Bo3j7mzGchqgufxuc1nsn2Xd%2BXyWU4qPdA2ejziG&X-Amz-Signature=e8e373f7bfd6d2456cc22458381879bf0df8f2a123a8b6ad866e66813c0a3f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

