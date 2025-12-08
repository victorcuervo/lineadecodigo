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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDI6CJV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe0wDY1CM5Q4%2Be83ouqkm4CddzQ%2Fp9xMSMEipnsnIqbQIhAN0HXhpARsny6mJXsy8xrFKt2yGmuWSS8a6F%2FYgRiBrxKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxicir9adv4AQfNoSMq3APxXpiiknpso%2BuRU9F8F6OE0ovlC3ZTgQeburuFiZBXREr9E%2FBoORf5naGI0sYGlcAOFxPk%2BccuUmna8KKN9snATV4MzaBoHMPjgFL8FyMeswbAq2icqlXPKenr1C1LPwVSGvrTrfx2gQkFeOVn%2Ff8ev65u2V3wmJ%2BFUQMRw7e7Xtfw%2Bz4kxBlTQR25e1kRAr%2FaZywtkjc1ZWiiqP56PTr0N%2Bt45oreNQPH2DWquUdQYwWw2tUXwRbne%2Fgwwo%2BR6m72TIznyAjlk1cI9tLO03RMagtZySjIgyutcwhMdir0yqehZYjRzQTxWrUCQ2AscuvaUXDY8Nq07ljUDQY5dlc%2Fs81tHdUAPIwEbQ%2B0AwVq4D%2B7qAw6bF85U6Drt5eJFp0cu%2B9a%2BBXcr9jCO7hB47NGUEdNNYseI2Y4Q7HTDI0fRSbh3FTpH2IakVIPEm0gL3HH%2F%2ByUKiajzCM6PAUBHKaL0Iiy%2BWbqPT%2BQqKAAYTBbKF6h4WEdk09QJf9gfZi6sM%2F6JWwANY4DJ%2BjT9WdeQAo24auaHM3njnckUi1nsIY8Gl9hByu8WHAN5aSFf7oMOCSVpH8zpyfICDmE69DIhH0jCwV1fDzKgAUOi6UJktzMDV%2FTgqZnzE5wxjDL5DCwotjJBjqkAYhOvy1OrZiSb3hAJxtYhn4FEXU1k1UKYfLHmARzXHmkSledEp2tkiOKRH1Li1bylPCVLkzBi%2FmuzAY6hCd4RPi1x7KkFJIUicZfjqsMC%2B0blAPKiYAQyeZ8EUBpUjSewsjLP6I5Lsnn3EFdEDrZ95csj%2FI8Ig0Le2F3F%2BwxK87m0jmCCcOuvfHyRfvIMN5ghXP%2Bd9tQjfrvhtzorGCKLNv3Obgq&X-Amz-Signature=de9cff02f538873b5873e72bfb3496b25c120a5e8f5eef751f22a0b79f9cedbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

