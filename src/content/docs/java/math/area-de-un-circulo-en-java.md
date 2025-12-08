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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666IXQBT2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwGIQ0acqqIMCqo%2FY4004nGLrDGf2HYQAOJ4Kf%2Br6P9AIhAOm9ZK493t7cAxIuABe7GpIAMYjeEb25oUD8M%2BIlsdMnKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4Ocx9LpKnWCT4yhkq3ANaHif8GrXH7SzEccvdJe77iUiEY%2FX8mtwdbMSURrFNZN4rSyg4o47NJuvDoUqB%2F11IjCMu6t3%2FoovVf%2Ft5b2Ui1rgTHN8eQ0Te8MSCXMO96AU3vXwJI4fbOx1eHeF1D0y1DI7fsCh2q8Nh8PrP56DD38mXf8%2FMSCPt9NltOgfzX%2BZ6xEXYsprkLFlW9zqyLpzpvECvNGhLmzkAdhMToPRLQ%2FGL4UH9K3qbY7vCldTh308cTfCwmgdU7vrDcqCeiCWG%2B%2Fl1cNeVSq2BLYNCD6i5VsE2hRk2pdiiwSu9Na%2B6xd%2BYxQNSY%2BPIgHL2EXIa7C6ucbuV3p%2BhJ99b5Ed1ekVLc6iT4sKP%2FX1zCGO5chy8twbrFN%2FpR2gaLE2rB7%2BTYZlPHgQEF0N9ZWg09ZYuPOs6b%2FSCy%2BtBJ7qXTXdySk3FEz9iaa81bUgcxZLZ14bbfFKEpg7Fatu%2F5mb46ULU3S%2B3daw70guF8XO14GV01NchGwT3URU7GHTJRCEw7cfmPD%2FmIAfJ0vb4M%2BVRwwDrNre8Nw1qvgpthNURZSHOl9uX19UHw%2FppX7chUksmCOL2fCVMs%2BmuZ%2F%2BuOcigbLUNa3cuCCtzN9JHDHPG%2FWXW73MKYKEBWYsLc4Nwj1hSvDCfsNrJBjqkAQBPfxOt6Qw3cLluHlDaYZ4n%2FsCs3sI4loz0ye%2FxVFakzVESLofctgEjDO1P62Y4gU27seecE4CjYKgTZFs2rcawvKoJLiRwp9Przcg5PYKZUvDxZ91GhpS4omwpluZyH6jqoIi6e3lrPGdPbrZQsrEWQRLxzNhbJo2QD%2FdlmszeeSAng3Cym6TB0vRM4yaRbKIZcCD8P%2FxmhnrdhZe8r6L7m%2FcH&X-Amz-Signature=18543684d8720f449df3449d3b7843828133f91a101e49262705f3875a56cf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

