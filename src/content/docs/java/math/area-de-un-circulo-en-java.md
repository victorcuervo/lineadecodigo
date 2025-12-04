---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPPODREV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBEYk7mgYRoYAPCuvUx%2BO0r3kwprIhgHrRZAbwckjvS9AiEA34mvaAd6zQZDIwnMQDyy3aGYjuRF5BXhRxEYJ0BkP4gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGheT0%2Fuh37CpJhL2yrcA%2FalKXXQslqYPAP%2F7pYqOIJsp8NW8e1fCQmCoxte%2BIOs9q5jH6VG0e%2FYQMtqcASG1npcUJbaQHWdggZh6PF4KMX3M87vk%2BFs44nfHGXkH68KHPECPMkoPtWJC7CTuavwpKIiMnEkGrObos4veAEbLqulZw%2FhZ3IANHzR54t1LOZYCCAYbDqobyuYIV1r7UCILl77dGtzi9ZKrbMmFDsMArRIoNrYJ6C7APrJsvM8NBITWUIZ1z0bD4X1rShr4pgTL9FpIWOJShXqBeYfibaRdlOJLuUND3wPRv23PdJNhyAn7PDFIuO%2BW98zB4tRg7faxa%2FAafb5YAxftioudEWDmfBDoxxJ1yE8R93k%2Fh8yGpH%2F%2B0%2Fd8OPqf0FES%2FTqMsHjLmI2qsLt%2Bn0pH%2Bx0I2WQvTsc5scVR%2Bb9A%2B4N9NN3tyH2dqd6Nwz%2FZHZWQMun6%2BiPtzy%2FfzDbp0YFuhYcuzvEWajfjzV0Vpv6yLvD7YnS8bRJX63sySrX1YMkG%2BfFhsObm0Dp4yfqcuE9n3igrLIzKIFdQ%2BiFSoP5mPxEs4kC%2FqoRUrATxUkhHDRLXNUAMP1rccK95aB8ZX%2FHgH2eLyEmAd8LFA1v%2F7WnIn5FnSPGxWi49ZQiRu5x2R8p2wYDMMHnxckGOqUBbU2V2OhCLcguo4X0kNWZ%2Ba%2F5XmW9hN7uBe8g2J43%2Ff4E5sUlwZJohfCcQ%2FTMeWAErq9E49JXBeJdRy08%2Buwk2qAsutKJMiUceS2dXlhVJW7Jwr3PfwiQaUaFd53gSv4AVt5BsT8q06THRtih%2FVFO7SkhKqTmd6wJrgi0W4ovoC%2FMXakFFNCQ11gfTITeF2tVM9q6g%2B1ogbpJDHicNEWy9BFZOhg2&X-Amz-Signature=6d1aa5442468fc594912586d2d6539dd8061dd90f50143e2b6dd5006bc2dec9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

