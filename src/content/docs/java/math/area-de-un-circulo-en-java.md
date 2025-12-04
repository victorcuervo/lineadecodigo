---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3Q5GHUW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0mHm%2FMDvI3wCi1e310NRjVGHIiDvp%2FM91lyR5r%2Fl0LAiBMZWS4DPhbk5WrUwoTfH4UtHAOMzK7yEBz5QKnMAI%2F%2FCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMcCcUq8v9THcjXSfbKtwDR9Z632Le7yFGwBxhocRpmV8XQe2qvEbrCdw8R9lNp4wGCcoZuaZ9LnJn%2BsHUc%2FUkSJ2H37fabV2xDQ9mDyT5E%2Bc1pE0ui60%2F4tUgJrzcLH8v9DZ6vLMrnOecfEn0Fa71B%2BG8o15butr0rb%2BXl9lDk7MQqgoL5ADQ6xu%2Bj0AC9ExHow%2F7hJ%2FP%2FLvOG7sqvIxbUw%2BppEeUvl62ada15ogpmr4FW39Tskvz0b6oqFt%2Fta398qkFLIEfKy0sdijS8vHfQ8BqvToVUZKDz4bCUhTUT%2Bma1PZLRMXxysgjn4ccwNE%2B4v3fZj4RrRakCbDIA3Ewp14n5i4qkTbFLoecotGoPVvT5q%2FJoTpKw1TYgJvTsE2G4028Xt2l64z%2BCOBuB9pg2VBQFL1FI5aah7kteDm%2BE0xghp7yFZBxj2gqlB4Jbfk9ed69gttAwmw9RmvH0T8F5ri8%2BtP4OlTjM13tGlBJDpSPsKkSgiCXiyc8sC0O9qkso5UbAbelnNL%2FImgwZXkhmTzP3Iw66MMR4qI%2BvXdbQs2ePvIJUxrz%2BCj86dhoMLHf%2Fat5UwOlq3vLJP5SyQVohej04SL0m040sw0TVYtBliZ6Mh8oK9mdedC1Oemv%2BfKHJ4RERycUr2UTVi0w6tvGyQY6pgFJxYg4b%2BukZk%2FGr3sRFDLcyZcccTgVdkw92m7V6mCiPF%2B5iY1flW5dxvhIyyX6dgZvU%2B9ikS5V%2F5D9VV01z4tGRSSet7K5fmjH3s8qrqkLWUJ78w03carBrtYCZ9jXKMTXc05KzuDRK2Uff8DeIcHm8jc3lC%2Bk7E%2FX8PFwvbec2sQTq4jIDz9nIxc89BxlCMJELCNGXwJ8fEsqULoJh6AMSVP445Ly&X-Amz-Signature=5d6e6fe00c66e1c9d9dc271b44a5198c0a1b7f456e11d4f94b1445a84b7114f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

