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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU2Z25SV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwRHTBzKYWWfL%2FSHdxd3PcbzfKgK0oDAYcnpUoPfE4nQIhANtykU1RjPKuJcqYVGJ9mUt3O112twnbwe%2BXrVb9QSAtKv8DCH8QABoMNjM3NDIzMTgzODA1IgwzsotGZYscaLTqDfgq3AMs6b0WUh4PzihyXmPSU0yNw%2BAZGRk2smV8bqci4nYyHKz2zlWHSnmLK45dQpfPz6sXdl4fgEtxFDLfU7NJmaEQgUSgrMt3snoq8EvrhwYmuQg4uV7gr6tzS8aWmZj9w6%2FcF8oweC2vvO68cK6Fr%2Fq8CiJUZ84DKpIQNJvalXEFpVA8ZQTR%2FvpuZ%2FkU9dAunvmIo%2FRQeldEqM%2BhbsYeVbb5BU9xbe1dM21l2WSTD%2FLRLFMr6%2FcD3WYx2pNilXwmRc708tXf3BHQ2QIFBZIV%2F1lgu6QgleEmYrX2S5AcssPvg4eAK1DfFOqwEvCwI06uPSFEOyDw89wFw1LBx8qUYGmCWscqNwDNKuzZPCxMzyWyjiAerOZsgVkV5ljt%2Bxx6rQNSneIt6AY0Nk%2FnI9tACKor%2FOD5anmc6wSSsWJvqpXjn0pd%2B2LA%2FtIsJuNaRKb42yNkfjfRuMbLD7fliS73ZRhg77qzRT5UvZACRlPSvon0E5lKsXbdsq%2F8IfJWoaWyDrxSrjUXx9s%2FmGrMUrcs%2FumYUX6rz36uA%2FaxVhv3f6uDJ%2B8r%2F8RSo1DvDFOzjJSpC%2FGksqw9vG5mPHqoLnWQAZS9DC%2BC8KYX%2FWthvOryurhmZvttcP4f%2BYKkXwk10DDd09LJBjqkARH%2BEhYJ8q%2F%2F02RqrI8pkBl2OSZkIZty2Rs8%2Fqb7Ks1ZCQgZrMLwb2w6JW3DOThn8z1XulndNv3Jg7T56N9H1RWq7msG0hB%2F70bZyEQjZZ1k%2B6Ec7i6G8L%2BgBL7gIuxlvb63WqazWt45n21p1SRBYD1X0LCnW6dvyPCb8XHEtQUtO5vObIKM0ofZtgaCyV%2FeltqHH%2B4mw%2FVezLwcBYBMcAMERf7U&X-Amz-Signature=121ab2cb9750728fb6fa998ceff25b4ed40b10445d89e71585b9dc10e5f5c62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

