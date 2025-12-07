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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBKPYYJG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T211923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHzpqqUsKRr9YZZ%2BEpcVWDdfCGsKOfOxijuuss5XUt6AiAPZkc15VPp9ZFu%2FmPQpE7zRus8MEa%2Fykf%2FsVx7iEFUWiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGfHNjEGss720OD%2BnKtwDMo8Q1QITJFYIAbxzRTx7%2F%2BFl0Qdb%2Ffq0lSNe8Gcv%2BP4OurCiM%2BcDcorMRiAhFgQia7wzZFb%2F%2FpMi836SsidatsDC3%2FPVtDN4yHqVdk6HG%2FI6gqBNsf8ZRaPpNnFrDl5kW1F3uycJY4XrN0kUWw3CTZA75gRDW9K2Sdaspt805cbfdwKguPl6WBjDCbPshQDah99RHmujYFQU%2FMr4r%2FUnWq40FQaRBbdaB7i8lcAzd1OtTOP5YpkIqJUwwkFEZ52g3okGSIk1WPyZXPWdX9WqpnrjlJ4oSeJIAEQzM6mNfnmzJ40MJhkJh1i3kg652ZQl%2FLX3%2F%2F39719PECn4GB0BICRk%2BrtvkEGRGXsUVytgSyY0K24OfI%2BSWSMFeicnMVkuK34ossQPgWdGcXPKOGhrlcCnWghn8fDh4eOtVEmEj92HiJkKNr1QSLHmOKma8ijlRhhG%2Bk6QDLM5SEMjx0HCVrdiepWDnHM95%2BtjavjfK03ELVJ8Vk226J9xDXhZ1630E2NEjmHvOHfhc0VDB71TVLiATlkhy31jdVfQ9r8xHtL1uXOmrN6Sv2jm9SvxRDWPjCUBZwHa8q7SMisiWaYv4mzwzyafQkkwYci%2FtXn97r2UaThlYSsOyV419EowwMfXyQY6pgHMBHQ6PgZZHAxIZeOOnNtB%2FVlwHm0TZErsuU0vLFUIyHSKEOoTOLTks6oCQ%2FALdsnSsgPYzkwKjoBt7pJwQz%2FoACb9f9OhhhFS1jixylKHsSnYF5ztxE4ZlWIAz4GwACFzgSmhaKzOw0jcSBDwJ8xUb4%2BcI3hICWoiv3LT2l6vPBY66bNQdtDth2xZxJrxLuHIlmhJUTAmkF9K0nQzkoY02i8Jqlu9&X-Amz-Signature=0947688483bb0c84887df438905a801b7905ff78c84bc385f2a1ac407f65b81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

