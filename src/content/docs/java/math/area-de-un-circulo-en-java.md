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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD72HJFP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrzpHMVFWyYj7ohHn796h3o%2ByTWXpCtByDq3HJpso0hwIgElHuvajtuNZ9ygVAH%2BesSz6maGM3mdt%2ByCAMKFJMeFQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBo9lv3XwmX2hVKgJircA5OzxfQAsHiRYd5iJYmpA4OtzJKxpT6zE4AZ%2FlAK57Nkt2Ae6LmzI%2BbK2WlvypVTzNSHvfjU1Vvtuh9eSrvbC0qVn%2FlU06hw5FjBqhg8MtBZNBsYflv8KmeTTZ7NAGbbt8q5pGoKixd3q9cNYILnwMhMqWZQWvTR4HSR07BfRgJ4r77sFaCEiNetmEMRhmlF3ZrwiYK7Vb6yZJqtxnZyGrM41y9ovsrr5UW8JUBizYmMH37UBGqZ28evrDxDO2n3fRnl5HMAiXn4ksv1F7nZxLp58zUewvE%2Fexa982l8Dk0W92sEQxjpFLZiufs5shMzcSOYP5tsYb%2BSsjGi9tBGqviNAo7iI%2BelnRXWZ5RHiDCLYsbUD%2Fzi%2FqRt3HWagWi9n3JhB6r8wrbelgLXpKImmAShKOH%2B793LsqFVad6UCE3l8porChXa2hBD5woXWmlSeeoU0EtZKoRU%2FQiVtLZ6AExreBPBTeZ7OBGWEoKXR1Da0%2BHMKDWmVWXVC7PNh32SJiB%2BeNlhuIBgMWkl5n6PUYqpC2tSar8qimm2v7v8gBR23XoF9eJ4XScpiQekPMavS22FtFUunS24h4das2OX5ybqjGyw1PSIWNjU9dVBoPs5xrgr96gdh2jhXN61MJLp3ckGOqUBEP0FH9LlWPtkuAUPQpxPyFgn9IxuO6e6h5eoKaMLkdRHk5ns5amAOq5YlKHOGpMUYNA%2FGYIOMUFtD9SyAoKQsDNx%2BD8lexQDGm3x5jYXqhh9TKFEoFEJXdZn402zNrGysZoA%2FwIlcE2qewxDnSPsHwSYgR%2BJNlzJC7OCGabUfcDTZyi0s3KNrWPr%2FjTQHfHNFyq8Mng8oF12H39qCIXfJxcZ8cp%2B&X-Amz-Signature=89b11bbc9405de87b43aaadfdcff737ff29b1897616d683a694618b52c7b8106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

