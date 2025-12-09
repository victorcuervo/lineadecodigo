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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665AYPUGC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi%2B1Gyp2uNnTNLiySHk1cbx%2FRF9kV9wmvf0qTptgg5nQIgdqhzl%2F%2F%2FIrPOrNOy558EDqohc0huqqrv7TEy1BzVb%2BoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEa4MNoZkivz4kf%2B6CrcAzB%2BRK7DsNIIEqF2VgTFuGkoNkFG%2B3INF6RXW9ENxqgBv0s1xy56a3BqVuCD91TTbvmNr7kXM8yjmY37Z4JtLKDw9FhTRi4F%2F%2FMiymYTizGBFMtEcKZpULqXke7744O2zdHKRl8mWsBWNaXJrMT78%2FKpLZKwpVTW%2BkgImHastE77xwrYEZWfgnT%2BqRGCgLD%2Bh5tF8snrWGkbVVASg52f8S5NpKjgeSa0eowVq2dvs6C7bMErzEJB8NeHNJzBBoJycpEugi6KaAMmqEQKZHOdFq4nrdjbiX8ksf2TVSkhrF%2F4hCfK6Q4fRIJftF5r1ooDab69Ppapgo9GhAqjl5lxXzYFOgI3hLOEo68%2F4SEwNzyrreKsRcFn9t%2BbQjZMe9kzTMPYpHiaL1OEi5G6lvUkveHFmYLixlpE17w%2BdcFygGd30HA9F9TMFk9RhkAX6vMyX8qWk0HPPsrc8td%2F%2FmnPFxLFjI%2FHOQQTy%2BAuc5YWBst8%2FpjSwBsJWji0APEA2Pe5U69fdkR%2BOWmo19OPhJ%2BKudD34lmX3dK9xnwhKI1swBTgsmjeWRdexo1tW2LRNeaUQX6CTX3bwRWvP6WPsx0WWH7W5CAaOLqoYxDTAcjYolpa5WemPWOktAWmr%2FqgMM%2BO3skGOqUBcpdhjz9EBBj6xM6DM8f6ab755ZGI2yp2yZegQnoztRZACdCQn9Lyc0BoNCkFaeve%2FcVsQbl4knaSyx9Ev%2FcynBurM7MkELjuUdLJLYHc7BsNFg3zUEyqe2v5UPnYNKehqjFYD%2B8UIfzsr9EW3sWOIDB1q%2FEGGWPKpkMqG61C7RoTU%2Bf9sH8%2FlnoZQOoudy%2FVd%2BFLSsEnJML9g7lgFDwL%2FYOTZgMQ&X-Amz-Signature=3ed2188b182b79c1bfae6d7588f461348759befc6dd78816f715b30e0c3997db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

