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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJMUDXT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T142523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOrHT2Ym8hWoKAb2AeEl%2FvpbSTt8ZjZeuUE2fKiH9HFAiBoASnmUlSNeZkUkOEpqAW5vxXpRYwU66uu7J1dPtpvMSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMozYqT70%2FY6C8CY7eKtwDS%2F%2BxzrwzesnGgixmTeWJAjR0hfcJDxFpd2Qr6ULXSS385vC%2FBRPpkmRQi81l5Rq3Jos%2FKObmLhs2Blbyvq5lp%2Bgtyl08X8hxjXSC0P4H3KbgdEnXjBmXyUsRA5JDWMo0SF%2FttIKXCt0uPB42dozuQ4T8wxJ33vk9QBEyjHblIqSil2Pipi9rD2iejyLZVaibBOoOibtRHGwKpnkSRRfEjd0TIE0KbcjAbOnfqbbxFZfloIB7qfQ2o7gsFr5MlqMMh6gq6KSE6cbEKwYjN6JIa2ObUdiMRqF%2FvwriYHflGNrPrGelGO84qJ9ekHJja5JjIxY8RP17i6VsCU4SutZcVqNGpqDW03B4vcEbb6Rn2Cj5w9PxjdoVFNpCQVgPIAMEA%2FOMM6PLQTR%2FQutLzt8uY4svp4IJxTBg6DkVjHSDclXehbvgKxBlf4u2%2Biyp9QE8LJFXe6ht4zoLz3o1gJa0QUK7dBskcnn89ysCTndS09FZbow11EWty83unQ3%2FFnZS4pOXqnEweM%2BbI5l8r4NavTJHuG4tldt1U4dfMk8%2BwQlvzorLqrNK3wwmWwS0R2v9n8sxuscgQqRPvVj1ES29WNXaNjkSMH7oVObG4dALEKKgOjfhr%2Fy5H5HHl08w04%2FbyQY6pgHG5gIPh6RHmwVJ4KNtW%2FqebMvDrvWhu80TKFkLkJ%2B2gjj%2F%2Fpki%2FKV2nnMSdbdkdN9fkad1lmINNhszK2zGg3IZurnFNaB6p%2BmZapQGrcvcer%2BL1JqJT6aEvXGGwRWxmEICBaAVgQg5DgeA0Q3cH%2Bgo7XOLW5%2FuZc51LI7muK0fBeDvJ%2FI4gH8omQJmkcPndWiT39RxwOR0xfv2ZQ6eoNVQMJ92QCC%2B&X-Amz-Signature=3295d26f77dd41bff84b55c825bee71c9c20afa7d80022ab59f82659e530d50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

