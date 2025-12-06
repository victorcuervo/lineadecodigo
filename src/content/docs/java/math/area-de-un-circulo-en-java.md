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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHCVE2GW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ1%2B76xlAUZNWQgk1iMPjXJmYqzs7uZ42BgXGbYg3aYAiEA%2Ff16%2FfwmOlSQbY0e2PfBPykwvYQ0lMJgi%2B%2Bko85xE%2Bwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKjdqjNlxoODK%2F1EdyrcA21tei09BYtjWDZFIY%2FgEmn%2BT6iWGIYcTV%2FyE0JMq0EACiwZjjlaWJMcNLwaL5cO7fUPQ%2F4JchrnNX6O696G4KugPmLJIWG%2Fo3tcIuNq8DA4bMzxJMPW%2Fcj8R7ZAuoSLUR7slJwkVil9JPWMBZGPXv7uJsoNSlUIGb7J6rUPkF3pMvft6lvaiMV64zf8UnQ50maIVT3h8Dnh3UUWKK%2FBoCdbX%2BdpoKiMbPGpT5aj6sx2NufSeI0T5lhLcntcUeKnVJmuVIVRVk%2Brl9YwLT1KcM%2FjpcIPh%2B9027CzqpIy54Jb4BtdRbcFPMTucCj68vJFKG4RMUY0T%2FqCBRbp7LzJGmYiABHQsT1K8Q1wIHAEHBpN%2Bil6jlWQv1Ek7W%2BGfWoO2H9U7FAb%2F%2BaGGZPz6IppaPBYN5WcZRdIycDtWTlfwLVfHkImkkfiC%2BPo3a8Nryu6Fy%2FwzV2U1WrEWXSsnzQJuURuWvCpkcpvz6lVJqDC1MfLKaahV9F9yto%2BuNt10WyB%2FGBVwZE8e3Gc7nrZ5n5TTIKZIvUsopzCz2KYU1olCKQC4Vq64qXoePlTGICy1Y%2FKTObmLACPi9JL%2Bm11jwckPGbEXMgADp5c5aPLccybaoIzTGwzpTiWstc29ZfYMMjK0ckGOqUBucU1i3x%2FRX32%2Fq33%2FANs34p3OCeBycIZt%2BTp57PUxQxUvEkF%2BLm1yhwjRGzY4LtY2f8RLKiiKMw7qJrNfEKcEZNsSy9J2FTZnC3dgPGzGj8mDpko%2BmrendX53niGN53MYtgf3nnuRCVhyLWcIXXQxXcMHvKEHq3lZON42h8eW6p1K3JbEOequ4Spfao8y1HVwgoqEwZG7HlkzD9PBJMFi0lAOKNl&X-Amz-Signature=7709fbf9a89a4df83197310827ca0bde729339284f3c7b78df11fa216c8d98e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

