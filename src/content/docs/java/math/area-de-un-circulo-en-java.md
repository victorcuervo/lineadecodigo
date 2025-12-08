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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L6ZYTU3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaPdIsccIV7zo%2FQBEaHzlabLAr8ZDgh5EmjaOG1uDvgAIgeuATZGjo0u4dDsYLA3lDQyfZ5%2BoRXe8tHnx9M0tp7E8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEoHnFkLqIq34w62CrcA4qgE8cQT3%2BM8Yjpo%2FL6MaPAw%2F9nHQb%2F3UaRcqIyFQM76Ea5t5FC3Ne7yS3rSb1FjvejcaeGpwDCJGURECGCUI4DjaUEW%2FYZE9C%2BiuUYFeHIo2xiPugZQ9WGWydRBjOyDC85hdpa96RJzSbivnUq7J%2B4WXQLZmoiTe5n8CMV2VjlF0btZrwDwgzKlMSi9YphbiMflAuyk%2F%2BIcs8Ud9sEHSfscn%2Fe6TOHCWGdPia7ZVYm8Nz4jumqnsGbSzDQD6fQwnsoz%2FU9HtX6XH5au4x0Lqihe%2Fgoq6%2FugRKjNPoEpU8Tvb9%2FAfBJv3uSSBczfXHTUXnCZPDKNRJ19J1kg0xdL42TiOvKMrkIPdzXIZbJ6c%2FxlG%2FRqVaP6W4D42y0LUIDWxshEDyuQwXXAtB%2BZMZ6faN49zaOrOb5OIyvCnK6G8x%2Bfz65PQ0G0Q6K4kJnpFPEeQfp2pKT%2Fz3YzA%2BzubqeofuTzs%2Bg%2FzuC0yH75zmKI17jEILkmwuO30c4o8223qoTCy8XUDc4A3b5w%2BpnUoPHtKjBe7PcBb915Jxz6r3TQ7vhkngCuYJf%2F%2BCGZpI7neuLh4OFs2Z%2FL1tTlH73BcFfLoWPn27rSq7KfnyLdfO%2FnxyxMC4vMKO53E%2F8ojzuMO302skGOqUBc79EyfhN3FLRDyxOckWxtX00XQAU9l%2BNvFoLNtKIhlIgrSy%2Fm1NU2GQ83H%2Fey4zN4buRpqhujBl0aCpI3qZMziyC9tau8WzZ2nrJOfbrgGROIeB0V85FKyxe0kG4DT%2Fu98Zu7JDDc0l31iU85VSo4U%2BaF%2FLiW3QA%2Fcjw3a5pOffVg3l1bONBNcJkA9NLTNdzkqKmHqCzWUx2nkUPqef%2FdNnFICWk&X-Amz-Signature=7ba595f4c8b48a21781da1bc7e7094e70dc9a0354db3bbf93cc23c05248360d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

