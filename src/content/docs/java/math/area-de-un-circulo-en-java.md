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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQAQG5J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtFtcvrejGTYRprQckGXzJ9Jjx7%2B5on0tymg3VQFq%2BeAiEA8MUyOtZa75bVWzGY%2FW%2Bjw4TuLS2REPUNQ8AiM9fk%2BLYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuJ1zXUg7XO4%2FeVGSrcAwsnEL9YeO2cxwlcxV0rZ1KGDoUv7kE7Uoh%2FxHAbxiTqu1THK5myzm2qz2D3A0ReeCfrBbgefYNt%2BZFz%2BRdFgVONfgsD2L8m1bG1b0g7b4ImQfTwJ2K%2ByO9oTPKN2WOlxo5KiKLBvUfhel2Jr7yYRYmMCbQVrWiue0MrPi25xhjt4Np6GtPTzxbS%2FftE3vjEPA%2BLz98qhVLhm%2Fr893LsDmALQKlwoB4TLD2uwgj6Nx%2FenGdqzFm%2F3XfZJOoxiITx7JQmLK0A%2FMompUS1iqpVhvhFU%2FSmRTJrcUnKIhgtRpw7rWVK0%2BggWcXK5owdhtgpt1o5la%2FXZfO5ez3iuj9LXUeD0qlvsM%2FOyqzh%2BJFSr5sobEgA8WzcFAFSrYcy99tAnk4rGyKnGwrFrjKxIBs5vUaZkRBtcyskzgi%2BcrIiwgMmM3Zko7Y8NiTYxd6pHXmHg8PVfJkzoLsB%2BJPLGtp0d5wTIPCBt83wrK5rRI2eeIGauMSFM7XkULtJDdAma4y9pVbBmsH1hzDA857qxz5OSebF1BlZq2sA2L%2Bhd9Qf53sU5uwDuqmys2owsber%2BVXJDLTzMhwOqmNR25T3gCGyN3WPvXkI1byHAGvWegYG5jEM%2B3pscAf8QZITRyInMIHd3MkGOqUBR2idjrVEZJ2brW2%2BWhsit2XB6xRSNIQNJAiqzFsPyG4Yjf6aBUW5GtFi%2BOl9WTHRlsCmnWmJfjXOCuKzzWFuYwYRNxOYgcZXwExVypnuckRZq8PgMcbdtCOQMMN2TmOPIAA32AGqjwTq8q5X73WirpkeHDOM6ElPKCJ7BKruIER99wXtwbRPl%2F%2Fkl6%2B9IQGWDbGins9Wgg9Dyw6AebzUR0EJ%2Bhl3&X-Amz-Signature=0edfca9ccecc01f3e2d449acc07fb341ae2a4d44992974eeb8fedf58c089e561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

