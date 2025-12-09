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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTRHYYA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWXlWLiALIAVomuRWHM44csdDF40qiJVYxXiJSN5tudAiEAw3tncB%2F8NnCFEKq2I7yAbTsgePxNnN9nRvpyw3aYkZYqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B0FZVTcnTpRp0WKircA%2BC%2FaNuhKA5Gw2laUuaxuQHTRstgBondp1rXtL2a%2BtqUAp56BI36AAfU4ItiNd1B7k%2FKnOkXStWx%2FXkSmyts7wk2U36FePDyTT%2F5P9Tq9Sh%2Fy3RrCvYD0H9w%2B9Ph5NZv5zJWbxHz9n%2B4z2buOxksHijsXjCXgewOii8wRYR4qM8wLg36cUa9h6b3DD7Olk1KG4qlQtn3sjRLPEtMu69HGHA7KirdhLQs4wRIB%2FiJBZzzoc0qi4yqhwhjT6GmC2%2BDvuqMM7DwKCDOQmLB1AAym%2BIgUMmyoRPmIcp8eOjGxcjmrPuz21qdroCUZI2yIhob%2BJ5KxLr6zDdM8ITlde7%2BnTMoGYnIhGTIL3Toyg3j8l7BBFE6sfq5E%2Fft7SF0c753eIIj%2BybhNEjhBYE5FRQrLO6%2BRgJK3aeLi4kRZ5QTogj3DmemVQXzk7Veiw1Oem9YOIf%2Bvgo2Xr9I%2BDkR65kQBqHvCfG%2FvOOxC%2F39Ds1NJyAh2eHA4cgseKOpCI1VK%2FIAoPiPRGvKx9dIKZkn7SSwzcRYjSwwgynLs8vN7qrKC9SA2QLcjusZhVhwPHzisd5I0dcnor558IeR9Mi8XMhHyLLPddUYVD0sCPVTHbJgaCtAyMSMlVLb5L1QMpYqMPvo3ckGOqUB64fhjnTUlfk0F4BTtX1dIKTTS5N0y5oD66by3QkfbuHTivA%2BlkqG0oOjvFAmUcommsjTn2ZundMZNvrmXkzqXr%2BsOWUq7wtAuvOWIXOXrDnSBqHiTMtxBR4mUY8ZlNG9Y5XqE5nevOqOrk23KHsqGld3mSjPKQ3YUB7bwlKoeQjr8UIDfqyuG1YEUP9cHmjz0oCbFirAeep7ax3oxb4WY4WbgU8B&X-Amz-Signature=63cc34fddc01b62ad6f16660acf6fed0418b4b2ac72ed9c0847b820c2cf8d6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

