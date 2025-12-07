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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NV4YIE4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGWIXYTMxJT%2ByIg5K3e0uCEYgdLMCYzqUisj9StD31PAiEA9dbKeDEwRgicsB7%2FeOiy8mE2%2BOJe%2FwhpgV1d%2BE8z9o0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTYubiwK9uCvtvK8ircA65ZSskEK54UOTv%2FvYF3GWh%2FqIl3F7QtJP%2FQeAE9TPip%2FayYnq3nZ0celPDyEJ%2FZc5IrbOWSrIW%2BNcbI%2FBeSlf2cFsaK5IeoVJ%2FGhY0qZ72E%2FQ74gNGUnFSjQC80gzZ87D8KFpmEC9vIZztUSUNXhknoi2a1q2seklpDOr6deJylft5pN4GcL4Zo4fXdk7UueckYY49jOGbXrZOr08pcjXIYTjDZV1uLJKrsNXZHsQpq66G0wSurRy4KamxRP%2B4MWQAQMivdZ8gRSYVK2EMKp6UUZXIOnp9YBXl8TN1xUBAI2BpdCpZ%2Bqsb1w5yMkCXyVr%2BWk3dNPj%2BdsXzuigHdWnBwZ8TKEeJqkEGIiMRmoTDMyxNTCw0WXVgUVDF0HJPv9ou4tEoCiA6osTivIute6LjPnVJit07AXD5GqbLRJyZRrw%2B9tdMLg1vA0MjFa4VVWxYERA6x7eTKx3DI4Ku9YpDNgDYVBWczsF6eSXunDJNpAlCDbDJwL2ZPMm1CsmsjHfBy2wXQR7p6lmqi1ZsqUlCey90HpGldJf6V92F9B8GdBhom1tMQV01wnxd3zg45R5%2FTigcFwE0aqw%2BY50PaD2%2BI%2FligxJaV6d%2F%2BKASN7Rw0pF2SW72h36JYnjARMJeZ1ckGOqUBKhp09ZAwk8WzCq%2B0xtVTr%2FbS44HLMhBUE2baHezth7WJNDvOepYEA8fsd%2FdW7K4af%2BKJGCs8QHg9j2aO3w4k1q2gWPt6%2BzvV6GSA384IGlQsdfzSxRPgTbSjSH8rZbOJ0T9YB9oQNRsCjEuLZXZVbyfo84nNmiNOvcYyh%2FEdQtsEulAGQwmWwwF2XOIvnZa7%2BHlwioVQJFHbyuyle%2BBJjvr96N5U&X-Amz-Signature=e3966ea371b44eead2725d86e83f63b449660bd21f0821d6f434508c988b1b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

