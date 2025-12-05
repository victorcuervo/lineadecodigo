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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4OBU2C5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtceivf0V8VgGumpI6N4L%2B%2FfIgNZGv03EZ9hf1%2F0MckAiEAmnU1gCfu6wH8%2FrslJdFFqtOqWBhifoeGjJgTpwdc7oYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNGPJ9tYALhUwDWgJCrcA7B3SdSjuJoyszGut6FSst%2FnS5oafwXtYKmiIvutip372QXn1aWVqObmDr3k3%2FQJPjJ7XrrTx4O29orjcQah3TgxL%2F%2FP%2Fn7kQHtRW1uqc2p1WveDmSSNAep2PnDlDkknHgtsmd1E9LBooHg%2BzI6ZsJSz6Ml9u38uJEKoaViuyJ%2BQVTyPFq2LtO36jhM3%2BDAymWZw5s5hZdHvFSRK%2FO4sAL20y0ZRDXEAOKc245MSUMdLdduaIbFGKY7NddnFP5jzB%2F%2FDrVq9Ss6dHNAYy5vTZRiyjFyqkjGGuUkXDgM%2FDLjS2QhjoDye4BDIlAV27ztto3sFJaGVAPIxzw4hi2XXDTn8Lba5h7dzFuPkEV%2Fm7BwWQLCjfcN5e%2BvWORmTnLsZ0zNFG7AnEaeQubNoDS2zZt3lOKT9gu7ewU5qTAMPva1g7EjS64fVs2EOWhg9nodVr%2Fy9TTk9gijI1NMn3StdIeIhQdStz0KsssiEfmAduMg716Mz4YykpHKYgbZ3hWdreKUs6XoeLvYJBg8PB4EIHUqvaaV5qva7lpTix64ljisLcM6MoJ2zHD7Spin1Yj8yLpuSyBBzCDoRBQPivE93O%2BE7x65bk8LnITHSjhS3bkQxXcKzNzdfyff6qM%2FoMNfly8kGOqUBUNq3m9KE0NGrDuqExVU1n%2FvXPKkifmstzVX1aUjfDtKHenbRrDp%2F%2FTy2RuDTn3X5YT%2BoMF3qADkL9ALc9zKT5R7pqto5J6S7VPhaPzGIi%2FCFvLB9BrBCK7B3hTUfiZtG89qF7RHCnXlHik2237LdLXmZQ0VkdLznbOdL64iyyJ7Eh0piKjjJdRHcvgOrnTQDqxoYvsDdQqgUqnBT7DXFBMO5PaKd&X-Amz-Signature=21d3a2730ba2465714e7b7b9914b283a1d0317bff2df818166fa0d77a3a257b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

