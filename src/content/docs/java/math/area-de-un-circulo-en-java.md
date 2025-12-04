---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDUQQM2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFKbyx6G1wKC%2Food8WHJ2S9qZUay5IG3dh3zjZiTjr8tAiEA4uSmZpXrjrxpbUfoY2kA9fRuQCYCdSNpOZ2VnQsNCqYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMGFRbG%2BSqY6cQaO8SrcA4GqoD0ejX8U25BgcmvkLgV8Lz7%2FGjJBepzO9iFWYg3H%2FbnVDpDo8iHOLL%2BLdWFTrvS%2FqRpZnHzeHqKdBChrZ3N5Q8EeWx1aLjd4T%2FEIf2vIH7W%2BqOVlnFKKDx%2BSpseta%2FGdp70E1xfX0LeYh1OO6Y4KiGR4PWVIDCYjH%2BZ5GVO260TtNVkD6mGi5qxDbb92zoM259YdOc4CshS81HicY3Muvafzbt79U02efLEq8XWiEByAJtZgJ%2F%2FRIZd1BfJs9Wk%2B2vEggkRe6cyoxUnlz4gQX1AH%2BKa1WEeGmxMvqTo4T0vEF7%2Bwj8MSTGL%2BX28GKSl1y0mH3yBBL54o4z%2B4rPmRdpkTccrUP6rXPi6gcLV88avNyqDgiduHaJ2RglbVfvXlmvLaJxNVJLhG8AtIrYDYr1q7r%2FFhU5I5Ytawl4ZP%2BhtntwRs9PEGeOl3A0glVm4vJqLDJce6%2FhapqWaZSX7MPTxLFh30HssDry7H8Mpsk%2FveJGtWEB4aGVcdSzsJZ4xBNP0G%2FRym1Q2yJuTO4pqIDE4AQ6pG67mkvgIoyaSfnfNEGD%2B3KhrPVZRypJfhAG9FglP2DUvCGp7%2BW6kBILx5GCAiiU%2BILLv4ajgsesO2j%2Bu0Qztlmj%2FsEYs2MOC%2BxskGOqUBwxUgN5vWKX2j4l9f2R2lX8Hboa08Pc%2B0WQjRT2I3CaehBxen9l%2FdZArxqc%2B%2Fbx6z9fzYJbX7OY4AdLnXyD90RO3Ugn6Uu1qgFd3kT91lBF0PpnoKxllPIG7DeonvemgN6XpRHPO3TdY%2FDK1knVDhx85ZPjO3yhei1mYkRtrkPbwBDJ03oS6xVe41nkyE3SMu5ZGyXo%2F1T2YQi8Q6wzLMArWcdV1S&X-Amz-Signature=ca98572c2a8593a80df7614b8ea8fbc863993b05e920f5bb473174fef7ea6551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

