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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JTHZ3X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsYkHzCeTiafOY%2Br5sFwHB4E4apGhnZAI%2BmviYO3cPUAiBDyAI1amNisepTwHGzdxkDG3013r0wsvsS0h7AJfEBxiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU9ghLaKoq52p96XWKtwD9NrQSeh6ByFnasxM34iWQTR%2F0bBEnv%2BJwYAY47Rjlrgfawc0OrofQOu3EyFjFRKcQ2ux6LB3Hf3RJFnzFql1AABDbZt7MvIWZWvizvUBx%2BmIAezKI7gVdhPkBjNJRkM456pqzrjowYVUasjhwRZWXYJ2n5rGL4V7IOWyEOvW%2FhVPxwuhIr%2FbPKCWMHtZp2EtZ%2BV%2Fp6rW7IaSdXWURIskSGwWL3aYUGp4PQ9r7HaU8KBA4niXD2NIkd2RCDNTjcYBRPY9MFtUuB2Lh79UjdaYljct%2FidBc5F5e%2BFE1GbzlusmCJNOdUKUxhaqAdCr2rp05iIcGhezsTuVKOYQh7qyrerAa5AW1bKiqsgDKtzlFdK1R%2FCWpMo7kUPD30wEEDFAO5rW3BpcXaISMv5dc9fx4y8YDUgrcSU0JaAG2V3lQv9VB%2FERtQpKK%2FI10%2FqJl3zfI8CqiZZdQNt%2BQMJbaHkE5nx%2Fe20aCyWCEB%2FRtgTwfG29ZTYIbTk0PEclBnbxCPnIxKHFo7IWhMra9W6poIQniA2%2Fu%2BQPOQyJzx4bQxHTVC1Ur2eiUcEEudM7L6mhUziOou%2BtAWjsoVoYhF1OOExcABPn6jAZlnuG9FvzR9q8QXoHwTkXUcIUcCWPlpMwu%2FLdyQY6pgFN00hrdsjvzy%2FY8G8unBC2R5ByzeFR20yUQ%2FxuQUD4vWyJ2zyq4ia9%2BDsXAv5%2B6%2FavYpfbBBZole7%2FqO8HoJqgmvW0RNvOf8tIHShWN0%2Fx%2BaTtoXEJsbduCPbSPmi08Cl1kk6pu208o6c5OJILg3xKQHfWbRDa%2FZJWLdpQdrRmdZWB%2BjU%2BagOLIx4jWRgPQVJ0wdBadAXaswYXgSA87%2BInfgUBX%2BhC&X-Amz-Signature=c2f53c4ee379a4ae6492a0104107ecadfa65ec8dcf14b63405683d5a670d284b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

