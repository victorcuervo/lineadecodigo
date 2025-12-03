---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542S5C5V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCXdj9dbCjqeI77AykHQwsXArC00JmWaPFJ5EVev4L4fwIhAP%2Fy%2F1jR%2B72wycmPZ1lbRFcp%2FrBhccx5M2AD%2FEFaRl%2FfKv8DCDkQABoMNjM3NDIzMTgzODA1IgyeTrIArNelBQKMmtQq3ANb7PqyON1e98FSh%2FRCp%2FaPclEAtkihrol4NqYxQkXybVF3FOvjSLPoOmVz7zMF4%2Bh97PnJ18MPL3q8o1I4cEMfNOO3MR6j7EWlWZ3MQHvQheyR4mudRiOcwY3%2BQl19vILarnjFY5TxlXGN%2BFItMu7ugmE9owUBGl4nD0yu9MyMOzrpMtR2ZtNeZoe8GFzsza10wrWbVEz9hOU0Jjtf6DvOyj6nonEnwsEJsH6gJs12Q0dQFR4htO5fGrdO5pKrzyZS%2FPv3%2FzPTqyD3G3zwpwWgSB6SBpVITXbHw37X1VGof%2Br%2F02TYf3X1U6De9sQkCI6gAcRZ9IGdyZ01KtsWg40GNH%2FNWbUbv3mgK9nPY99hlmWt7sYQ5jRwt2LNwH1rXYc68CvyBpPn6OSWx4vwS3yvORuuJNq7d%2BoMGYJLaa2cP%2B8p3aVpYVXXosXPpHTc0K%2B%2B1iCxH4bvl2N5mmmSo%2FRTAnU4GZClez0MrimYhFBonqe5yiDNHRLdBoRCZjlhO28Q5eYmcpOjShauegTehDh3X3177B84I7l2QUYbeuzrK3IOy3tst3iw9W%2BCCL%2Blt4CH1A7FTvSJitkZKgJzp8TMJJ48UwpMmgHTBU3E7LRu65qgzBzfScqHuPhdwzDBlcPJBjqkAXcNfncMcluu%2FDpQEsVPLljrmUZQMuOdmO0fSO7nhz0ox7oZyEjMtJuodL6rsDTO2KYUIIAFHR4J9uM8yc8kWBfKLoLmIvhG9zh%2FsUoZ8JSCdr9GbV6Egvokwl2HpAvfPj1I1BKg01DAGjgt%2FtYxo94f2sZGHpw6qsKXzJ1DlOCJAHL0jBLyRgWuaVdAhwk5vYYe%2B4w0aoGck0geCxxqBENsWn2A&X-Amz-Signature=fb21e0b1d7ba2928057847d6d1f562cc1b5c2bf78d4c5653e26abbb1df26666c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

