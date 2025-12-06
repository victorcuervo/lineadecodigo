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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY5YF7JS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqbdaJQKaJkBJCmZgT%2B47Pj3Ve0QYixiqrlfflF985UwIhAJo1t7qCDxdlO%2FrE2Tggp6j2qxEz6%2BOgO6YLNKBMMopqKv8DCG4QABoMNjM3NDIzMTgzODA1IgyRrLClKdscYqnoROsq3APiAcMo98kxVelGYZHHo9luavPmaZw5ptn%2BEluxYpV80sjEWVYfY3wFvrlBA7UKIGtMxxW1H%2B3dmginwkniPFVqHrxXGHBPESMf%2ByUMNl%2F49NIj2QLRQAHlhaGcRGh1WNrH4mIwl%2BNDq3mP5nxhBfuuf4cvUNG8NEiz0TQKhYsJ1iNbGijInaXVBiYKOg6eg4BWozKk99Qpjr%2BZMiooWxdsHNCAuUVirnrirOTmZSN08Zw0T8BiRHXO%2FFSEzoPEZSmoLf0K3BWWLIEkC1Nxvc4v3NovVspS9JPHuZQcQcTT3MfwJW4oijnu1Iso82EwBcqzS2GlOQ2S5rAcW6n1Xj0HPL5mC1r8I5fwhShQzC%2FuxE6RPXsnRjC0j2FWZ5EW1KCwpMiu0OMat4WuchuHEdH2r53nXVhWE%2FZ%2Bk13IPjo5Cq2EklCnqjlJ6Ww7U5PT6DbXDRhBRTHNbHMcJ4PxOVZeTN5f613tMVAwbqnsfmtA6OYiAuGoTYaVwS9PUr6sTYJWMi0DlQlF2EmsyOXgMDTImZ3hGiNgw%2FuRL7OIR2XsfSJShytkyCgfGZDg0QBFcDra%2FCaKDrtWk24aoio6rrxfdF%2FWNMz2M97oQ5bKbwfH3WNV8qneohPYgxbJ1TDk%2FM7JBjqkAfhjv0GOSbqY02SW7E%2B5rpePLsP2IhzIyg7tN6FK1jJReD%2BNUcd%2FuKITGE9IPvkttP25V9AqfVuI18%2BQ5cAsG5rz9ry3a7lAHCZRCk2T4mY8ZHW0ShpW6YFNFhlAkhHpeAtlAH1D6p%2FukheP9xKWjW7rGxsyt%2B8VAQPu%2BrHrynwts3o9Sup0%2FP9W8pt4dR%2Fs7TZTREZRztmAvlqWA8dgpudSfhBV&X-Amz-Signature=65dc3035c8efac027db3ca40a4a9b60825a8637311601b768d0e8ad22124574a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

