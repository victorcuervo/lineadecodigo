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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKGCCSB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzdtio8TA67xQmBNtw32MicHxalRQGC5JpoVus0RIHAwIhAPf4sbPLMwdALnpZ9%2BjgG%2B2MGaSHoQIExeQnu22%2FLylgKv8DCE8QABoMNjM3NDIzMTgzODA1Igwp0FWYXmHCyugI4DIq3APy8kd0nmbc7fmUkdAuHa%2FYWD18H7PQBJNdiUdTLF6ZHM%2BWOLEbwz11cPdSsykRaSgET6RiRcjGMjZUYGecSJtFQc%2FGcxA3gJbnk3ffm8dpOT%2F04bxWkIgX%2FwwMFgg%2FHx%2FFco9AH6TOk6FJlK76xI3eGZ6Vbyz14VTxaIUKEO8wrJB220S1TvFrtpRS2hX9b2vs3EGYL6sjEaBkkw9G7S5OwwwTLRgqv0%2BW8UkwQeY2KCCRUqZBMv2bRFZmOeaD4cpPwpr9Tb8JkdoOGKnY1xvfa2hhdnV%2B7MF0%2BMRpR3L0Dn6O9ZBlODq8wKV0X4B%2BDOQJSuDLWbyBiWMaLPRw7odsNeR6tudiHLSq1VDt96QrP%2FweyFpt84WRDrnPXas8zxIM13WsUKQplzFFY1q3t4PpakO3KUr%2BSRdYrKDLKOggWRzah9lRXdHlwuHjKiz99%2F9DfUWc4v3xIU%2FQ50YSLDsoUifk%2FtoaLHed2vdT395ESWu3UEm6kznIe5WcZCT9UYt53DyxjE16THYOF5LSKKavM9cfj2N4Z%2BS%2FmM2AUZF1jXir7%2F4ADoevJm4dVQvd%2Be9UoYqSEVH0gEaAFtxqE0kkUGkpJVw51jKQfPNJdJSSIalQALZXRvd7pEUPzTDvjMjJBjqkAUnAEYALcpgurrtKowRAtkAC%2FSErJ2Qu8PuACyVC%2Fu60X6dvtA26LsxjA5TBQSUvCzRvlI3A%2FSzKGLHqmM1tB7NJos4Wtr4hQ1j8jhFvCSwaZMqtt%2FTTTP5bNOKLhMWiUyumZpmXQ2a2FCWE8sAbBeEtPH43cm8GEHy2xKHcqr35t6kRIpq%2B7n8qTfSATT8VxOktT1taUVFHrz4CwMHse7JMp%2FmF&X-Amz-Signature=5ef69d3488548c3236049e2c9a2a840ec0d2a4500cf15ca265da80ba68a0c4a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

