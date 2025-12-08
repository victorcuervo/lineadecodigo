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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WTCOXEU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHBOq1g5eaWUeNwKmNoHBayx%2B70jgpXXOwq35oPbZtNAiEAnU%2BsqdQUdMjNe4vhiVuskWFe2flgtaTYdJo7NdXP4VQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw3jlo2arHIOhYXMSrcA%2BBfOJY0BNOpafEf5qUa9tYLvrcd2iRtXdxU8HazIIXLiFtL5N1OWKuKnNX%2BYqCUOhJ%2Bc8uPXCf%2Bh02PIbQVsUu3%2FHvgjK%2FAb5ssVC%2BljDOx8WC7ZMhEO2RT2ph6F%2B84sqtyGuHXSz1EnZ2qeTq5VESCmeCv1qkjPR6xr4o3H13cY9Cx7t%2BfJZbt8rTR22HADFY%2BOSh471gbO7xtqh9dkNgtBGBOJbuus0c9Gll%2Fc0vZeQEyJlb05s3spbxqPTNJPfudayllLFySPIMbl4uHBRR5FK0xxRRmudRlr9i82L8TSLHH%2F6djkaCXVYqlg%2FQnSmoCYfJy4BUyPJHidppmqVVnzH5icB1kkAXGxZfDGR1dRPCxoUmXCcxoPNYQnJ4Y6I9IZ0t3uHQ24N1iuQSbx89XzMhgPQ%2BFGivesOiLjs9U59EPSQaMscDzpk1X631dwTBCiP4BvcSJoyVP1ukWWzu%2F4k5Ixz3D64Fx5mnNhClAxOv5K8KIdfWEGxIdTCpr9iq2p9HHyZyCD2jbP4MNCaWAISxDLWU674oECG7MwwJzvQehSv%2B2gKQCjtN5ftS3aehhZZEFjwVjrghZEzaCZbySpfveHttgltYibKOIIa30KSMk1CEHRY6mfNGDMO3t2ckGOqUB6E9SvfH7ngWHHihNKf0QaXCb%2B03js%2BHXTFx6hSAYu%2FoW6I1A6R3MG1YYpWwxMoCP5t1pVD5eRtZVAh5KVK5UM6cRGuLqF8I7oXDBcX925b6Vku7%2BAhiFH%2Flxu3zjBMJfzzVma9qG6hfsmMw5rSwqzcfqpvddjLh5yVIC7abMxGxLWG%2BvYB6goCpbrPVckWZ6urW8aqO0%2B2%2FOqGGXTfOIcZHxfl%2Fi&X-Amz-Signature=40543ab51ebb19efe6078996b7b31446164a100823588689e690f7251c6b952b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

