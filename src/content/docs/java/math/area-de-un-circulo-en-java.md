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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WNVIW32%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T094204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsdEznqC2y7A5MN79E%2FTrUTTOQ%2FNsyR1XoOQhqMw3A2gIhAMKdg4hS3T0u75IRrHUV7BAYFV4UwyMR0R4SHK6CksjxKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvFIEKAVL5vrvz5WEq3AN8qMHrZPg8LDRYs5Q87brttSsMPBpcFF3%2B9GxBv4ZCWKgzRjUOLpheYvbpxNZGcLiy%2BmY65%2B922SpEXF5rGPM%2B5fYgBdm0Sf3lryz31cUv0pHzJJHZjISYC9Nxd0FXC2k4YV4cWvjyCPoCRz9AO3SBN2vj%2FOgAvhivfTXxm7S9gnSw3IRbF8VfZr7ep3uqyBoYP8cWgwrug06QpWCt57RMfAlkkNSRwSNiFvuugbg36y6MpLmOAeoLpNG1Udz%2FyqSAioMOfwOi%2B13rvLVCxLIyAKccGUL4uNdvYQerrlHER8YKFRXewMNGIPFB2iRtdc4phguCqUGzdiZ8z0x3lpZw4%2F207AoDboK4KgWfsfI%2BEUhEyZfieoer9H3DKIAjVLFwGoZKlbIP0pqXaU4HMb3MK73ZnSeJSFzQUQK%2BD7wHJhuZn%2BLoHGIoBHQ%2BfAoLkihm%2BYiDR%2F6E09UVKyLb4%2FoTfW3OpyvfkJSe6N%2FPqupGVUOjSEDNQmZZTa%2BGaeoawViKPH2NoNPsRnBoVBMGGKMU%2FCxd1ZX3QI4jmy0EnFSpz2sLUgMw8LwWMSNalTzmXFcNgu68V2fXxn%2F3dPln3ltuO7H7SjO%2B7%2Flokn0tiIwLs9O2rnO29THGK63vEjDY7dnJBjqkAZjEgcP1VKDbT5VdJGed4HmQBr5daakeZibrS5WyQU0bYXj28HazwMkLTk%2BYzOYgAxEvGH2m8LkAF%2FXXpY8R9zUd7P242ueITV8gLLdfanCF7FKmgePHygZlMutDVQP6moiubQcnHmNdoSsbHBfCl%2B7HnaVvM5vDtEcBtgO%2FS0LKGrxLxG0D3%2B2EgjsnSEes1KqE8fpKq5dIuKXm9aDHQ5uwa2tN&X-Amz-Signature=89bf18d47cd3c587449e864404c623ab04c959fa465eac1d9c361080da86152a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

