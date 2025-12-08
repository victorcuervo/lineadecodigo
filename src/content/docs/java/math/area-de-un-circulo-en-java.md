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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZLT5BY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BZ4Z6M0vGOtuJM%2BF4x12aPU%2FP9emf8y%2FW%2FblKxumqkAiAvGfpHZ58YwuwQ2JyzJRhBYaYPZJ7Mk8hws7vy44GaGCqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMliDn%2B1Xbz7OFzg0lKtwDhBRIJKo%2FJfKNmJ86LdIljZW7a4Xy0xw9VnJgsy9jb08oq%2FF6iTAO55es47HXpstK7UB7M9cdNFI2naorZ%2F3sLIslTivxO1RjKcX9k9m0fOUv0S9MI30WEnWAwKcQjCn6lMT5lpK%2FghIBkDKnDDFbGEkKbxSMj8BVVaSJCmVapq%2BeGfAHCqcPB3zfoipc5fi3I%2B4IzOSQF1gB40xNUG8lkB9RNDWfPW%2FKg20Skg89TfUdl2QCoVS4zU7dY%2FyuK%2B7av24V8B%2FhG312jsghLHNmg%2B2QtFcMfR0e%2B2Ut2YEiA7p6cvBuYCqp5YM4MA%2Fgd0Schz9n%2F%2FKA2CxMHEGTYqF1YkiLc8eexcZzUBmowvShiYxyzQ%2FLgSkTzlB7tb6Z7I0Pve8xVyRv5%2F60ABXURnrn8%2FfTaPH%2BV%2BJPY7VOeiqHNWy%2FCmU7xkgZ8RiKNEUYcOSW1w%2BMOLpyqNWfbgaxHH%2Fi6gIfnTeD2nZ5jhyCDUkSrgGRvC5rxLcqo3rP%2BMHWm00QdAw%2FM0m3iZldTva3BXGB7M%2B6r3LELLZWqqY7sOP%2B9F1KhvbymXBW87TARu1%2BMffq%2FBJf5YdMncPrTw3109UdEgPUTPqhIzy2SV2LPeY6zyIUBBqlHKWeTp7QlOEwsaLdyQY6pgGhisz3xhEb%2B4sbZa2gB%2B1f2OVqxeTmUOUuZGccuvjXrPYB6AyNoD0VsrkClU%2FC1aJy0h%2FQYwW04Z7Q0i%2FxsAY4WE%2BwbrFwoi1jPBR73JV5t%2FSFGfmlZ1L0CwgWun3t4lNGrNlrA6Nfz6ekzPoYtcJIBgNhY3QMQw0NZPmUZ1FzwygapSiGUZqFj0UZrJ16IZrvpj%2F52mmqNNMfP%2B7cELyzMS1Mqmx6&X-Amz-Signature=92c5ebe73c4f828d8c195a65f9206b196fde1f70454030ac9838e1d820343a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

