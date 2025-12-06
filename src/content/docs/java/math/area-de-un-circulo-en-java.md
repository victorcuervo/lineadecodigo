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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QRQRJ5F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWZCh1tjE5GHYMKe30ZCTRYjh3Pxbddzqh00FgpIgNYAiEAk7Q%2BVwJw7aMsbSnbSQRYVhS6Ay0h6sRc91RBVnQTQhQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDK7MNOZD8v%2F7I9A7dSrcA78uM4CBDscHJpoYBgtCTX6e8toUl1%2FiVR08f9Ovl7Ft6i53l9lE14WwDt8PJjFhzw9Pgla1dvZ2HX6zD%2FeRsiFUqE0BfeCn0U0LWwFrEkHKv%2Fe0vG3nUg6jUba1b9CoSjx3kdDPTbGRMXHsBygUSSUvlhfXgFLOorsM8aNlZAYRthsPVKlC7UjUSMfcCOiVvCwFE9NP1F%2B8DWh2NPCPZUJ86wLb1I%2B7oD%2FKWsmhMqqmzd6dL15Px18qIgk8BQNmKY6ZAT63mVwdfkoZSwsEGCojdZAB%2FG8WBW7F084SEPzeBY34e9wj8xkFIqv6vZrnnrCF%2F%2F3uFQuRe5wh1iFJMo2XCmvTbRAJ%2FLk7vQ8oOTdUbz4HJEuP3EpglTfZqDfqhEbr1mXaF%2F5X1%2BBLEiSEu%2B0SUXWwlHUksMCVTW8J%2B1r2w88qqOHEyx7TpP7WeEC1KN7pZYkDSvlreHi0w5t5SYh8dDMKW1zK%2BkwdMb5HoDEhzgsdb5J6G%2Fng5Ysz7Lv5VCyZ%2FgmFXl%2FsaBWUksUWnCYIOzcnDgaglsk1WElNs2NjPoBQ1hvZmYjmEOpUpcuNRSruGR15CxfGFRR%2FYaYL3AcV211r8K8Vcj2OkjxVINABJiL9wN1wM%2FsE50hpMJO8z8kGOqUBcgugmdiMTMrAsZxJkmwVa6g8BwgIIA5yDbJT1azSwkMyo2v%2BKMnEYvvEZvGeEkjJ3X%2BiXmJ2fGk%2FrPN0gyWIbHk01ib%2F94Zn7OpFsCvPG1VqnSZQ6uddfwvWednwEmoBA8MDjYWXXIDsjqBY233T9Y6DS7cPt8G%2F7DoS8u6jtbpBGWxKVh%2Fe8DTK9fRMEGhSHKzRryfuFocBVBPiwMwatoWDC%2Fwt&X-Amz-Signature=a0a3e67f1b35cef4bafa6f60c27da0745fa449ddfe66c547293ab9872f45880a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

