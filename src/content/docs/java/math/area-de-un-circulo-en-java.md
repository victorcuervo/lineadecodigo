---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQNNEYP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDNf%2B6yaXa%2BIwlRkUJHX%2B2Wz1y7wAzRW2nHK41GlBnFmwIhAMpBxLv1Dvh2y3v9IIx75z9kE%2BxIKLX7zdnzbyG9JIzhKv8DCEIQABoMNjM3NDIzMTgzODA1IgyvJ6Zvtczkf5GuW9Iq3ANrwuwZg776a5Vx3bgz3urJTheCj7ttEnLs11rfYLdBZrvtrpjRGA22mBodrbjQrx56OQYnSTTh6moFSYjFXvjjUoY%2BdpK9D6QyTBIuZJKRRU9NRsUxw8lrqebIxRWL1PgubQDVuC34iIRQWougszK%2FUTlti2%2B16i02PB4dXWeZneXmXqSY8JkYahPWA%2BzTwhKzDEwm%2FI1U%2FRmmovIDFm%2Bs4zyynTyUdQMGQmKCtOwHGPLrP%2B69%2B3e3J8ZJVFJNz45CojVk3G0RT88y0YuuiRaAXoVxtg0M4hltBr%2BdcQGPjZLugQhiW0VpFJigxEH76gQDizxjj3Z1RXdt6FaLfiwiYH1QpJNUIS3kQVb2t2BVO5Cg05nwPDWu0cnOm5chQuwpcg%2BGE4m6ku1hcQO%2F5jk4O%2BNDaIZSoXnvZJCHy3wwXbfHCY6YmoUSZtdkxB5CbXyAJSc%2FGJtojLt5OGRT6mqnpWmT%2FJC7BdQr6IAovFzrmU0WjwaHWeK0p7db0d9M%2FhYu05tEtcOCgdePn6ajKnDSckNEUaylWMIX7%2BYYyrh709X1Hk%2FDxYpd2fvu6%2FIUrAB%2FY5Ihi5wM%2Bytrx4gbHKB7RTcK%2FSqP4PPYPH3pEabl%2B4vWWUK0kwtHT8G%2FtDCeqsXJBjqkAQRHNDhtto8Te%2FfZGzb3qwqZS02q6tJf0ZsjGDhxcWKnQbZEvTpW8dSfRr%2FrGEiIBNosrEhJVHW3Q59R%2FlM58%2BOW7T7gwlyBE6Iq2IjhvrweJfsi1CtMyIGT3opiVvywwjLCJZ%2BueJwEQX%2Fi6J1bNfsb98PQPmAvu6ItxjaRaCbH5RZZgP%2BGydhuFySd%2BWXrVCmHWPdFDC15hPBHma7%2BdJqfYAsu&X-Amz-Signature=e8cae968f5c74c6f72044f84f466565fcb123b41dfdcc8c5c6c93ef0a7579212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

