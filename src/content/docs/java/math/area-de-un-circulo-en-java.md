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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLQ5YJS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC171PLSg1bIaUuiwgWP58QVRiNDUAvkyAQLNL7z2ddEAIgGfEeqeTaEuSYLbjXtlOgGsOTE7zTwRSfoNWoBm9YHqwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNZMnbPhSEH9cr0k4CrcA0JxjdCF87s9TmyNTVS%2FkFkBXe8kV%2F0U1aL8tiaDLAOBYbJFF89Pp%2BNo6PNhqCRW3GYjqiRFc3nMV4YklrpnxeL1tO9lvD54fbC%2F7t1mVO1ZurVoGA0vxOD9Egr28dTjIS1hT2IEmbm9KI3JEOKQbsC%2Be0GXR7wRGlif1Cw0dG5J%2BS%2BTSl7rA188pXeIpW1ELGSEJvK4U7QobpuquxTm20b9ns%2BNIu%2FJ0XPgooFwpg3D4trpdthHorOQ4kJC3rHBTBbqwdQAjYlhhfq3ooDqrtV4po6DyPZHCWroMT365qif%2BrvFJuTT%2FOYMmLWXPv6dQxw%2F55oqb2p5mLhjY9d49DFWGSf1sSJH1SpIjFtcZgHT1AVy06JMV3Y2A6IpKKR5Jej0t8tTbn%2FtmqLGiV7K5ixjw7Wypit%2FNfKSUxEd%2B%2BIqpvUvdojhY9hEe%2Bx%2BUdjhnwlucXTq1NXM6jnKALjOJRgGCynQ847E4XhUQyOg%2FxPz%2B06LsEhHlX%2BZLEkcg9pJiRZGCL11oGvCTH9O9WYvwydNcOcazSYCBuzlTejgiUG5Dws4pnW36q1giLLLyUUDMptyGhXsTyXkvHquOGXjZunT%2FjDVSgrooLr%2FYpYxJpvYn54UhoQ7mUC0FgswML%2B8z8kGOqUBevIiAL7tyzNs8pw5TQ5lVIkh%2BBNiqN9YpSwsODfPrqv55fWjn%2BXZaBgkoHaULtjFiAkhcjhYh%2Bvy7gdNlINAyBNeSLkTThtrf5rWe26AwOQ%2BPd2L87eS9kPylmtLebYMbAT3rM8fUhiABLgDJXB4FURdT8hNYN7tSh0s4R%2FNt6OpHEK4AsT8APqe7OdHdEepOVmpWDhIlWmBk4AgSxhVxx%2FeRsI%2F&X-Amz-Signature=2009d386cd849e5413189d8205868541bcfe841b84b7d71c4858c06c56acbced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

