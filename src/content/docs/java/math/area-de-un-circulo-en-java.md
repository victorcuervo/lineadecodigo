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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJSJWYX7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHgVmEq5QWbH21PY5l9BjYhTpmWBx9dXAQb7PBdKe32AIhAKLEVYgoKEB%2FXqgBBZ%2F18kYQAYCIo0Xlo2vxKBwN0BktKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0fEOr%2F9LD6LD10a0q3AOKjt68iwienCbCeZfaC%2F58zRx5AgqbKLTgFJMAdECziQiniYp57BsDlw7bxnSjL09%2F1DEzR75z%2FJzIuRutpIA4Qu0ZJFWfWdxDIbzPdAvl%2FQlwkWBkt5UiQk%2FlW3EI9pJ2v1CFRPKEtgEQ24W7PZDR%2B%2F2fzTwGXKZFk4tWuknO1kXLmzWRHzT30d89iq3KWkSVioRgXto6nLsrmrow0wgainl%2BLpRroPNkXwkSyZc68gfl96sGZeqkSSlbcstEL9jnf1JTF1p9a9%2BtEjdnwhRhQ11KVpDvW660E9rwY7gAQ12Ih09gDY3CZpMn9RoEpc%2BIFthD%2B%2Bk3FDBPlX0CZ52GN1OIDbSTeVNhS%2FqLnn26yPKhs0WbnaibYXQyAcUUI7kWZki5fHAAny%2BogmoZQ%2FnmKhWfsinwkU4o2ZRGsqD%2BvvLkFftrHnFvc5EvaxSSxcmkKdE8MEPL0KZx%2Br66Pi%2Bq3i%2Bae10UziIVoV2u2IqGuKYfYudR4B%2BN7RCcWUcg7me0OSuoQaDaHzPAHnW10ykhEOAtlaS3FZE1PEQQHa6sc4qmCMm9AvrSln%2Bb8ixMiqNnA0yQNw6dgPRiXVdZsZgUi%2FVlkXkQ%2FCerRgntso8cZtfoxVY0CL3nXQiCQTDSlNnJBjqkAbrkGmCFsOIEfK44mBnzCDep18zwUi%2FjxWI8wfBCgSeyXsF1e1zP5krdnWJRvSsAUhocVKa1pJ6PbktoXwrhzCiBdBQmdIwwNZWymX79%2BIGmRoesnnhzafaaVQdelkxPcrJUyfkxiFxRpBLh5e0gq7hI2o54pWJMSN3r1nZhs7kcTQ%2BtUA%2B3h8pGbWwbkotPEDCS9joblOMlFV7RJMwFHO%2FMJiU%2F&X-Amz-Signature=00f8abcf7f482e439b9c66e27a241bd70b9bd89ac84f01cafe611ca78dc2a172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

