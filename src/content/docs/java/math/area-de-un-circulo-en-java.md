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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWKRI3N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGn0baLDq2xPvt7urZn1fahSdvZUOzOJ%2BC4iuYlZReGwIhALdmUGKXe3ys8Wi0nJ%2Brpq3B8TvtQG4rtBYMW4Nr7BjqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FfUmOK470ipOAhPIq3APe%2BMjPgE7zywzHFrqdNfM73r%2B0fSzaOen1UN7WcgG9mFq4eMYYnnrH14NGXAanw79J8Zm3X4d%2BRIG5ayy3TfJ8RtU90RtHMNfAns1ZUQnoXn4xSm%2BsOfefrctNZHa6gBYeWOlyNtPV8n4gcaSkcQfTXEFcJcpMSeg2947LGKsJEJYrMUbq3zXN4e54u9PxcRYsDKQDk1q9fDJLLrzys79Le1lMGD%2BixN8ZdyZf9pN8yc1uEt7Oz0roCmRPUOGC5ql6V9mRTZ9EiIcnDnK8r7WpGwRuVhTsCPeta%2B0L3AeuzreHv8Dk128ul7ixbJidPZXHABJvSzQUwB%2B3YB5dmOvClWUHuKBGsBqI2SVWZlBOA7rdUohUlWUIv4oFLSVykltl83s3akwByH9U74q4lDJ9U%2BQoWm7T01mV%2FLY6I7oV%2FbCYyEqYWVRPHYC8HsaDpiy4aZHuknrvWFBpxZYJOzrBFQf%2BJKgzzeULQoLuxE8PECx7BCIWkzxeGsZKNwNqw5RfGWRvrRdtVtaUnQ47aR5EQdNsssk%2FA%2B8LcNwamVLk9a83sdIiVRLMTj6JjJThQGLfflF5VR5q2X1hvSsOk3oPm4Jx4HC5eCN4qala2J1GOgQGuAeg2%2BluHYhn7zCP%2FdLJBjqkAStRWx00PtZMC86O8PSj7YCWWJ%2Fhw%2B3Y%2BscqOKHifGCF5myiiazhJMrrS%2BJS0oXQgJUh1QNUzxRDp7gOGB5YiTIz7kAxYJy0iOGMwzGjIubw7or5pH%2F0diqOKbONhCc36WBFIdDD256ynM3pS7Z6PGtMGV%2BSDXYz%2B6rwr2rIp2LhuDrIimPga0STFKc2mSeYbJVTGwschkuXO9OXwkthc%2B%2Flw7kl&X-Amz-Signature=8261d0f309350013531d61c40709651e06689c72b43b62757c13c014fdd49fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

