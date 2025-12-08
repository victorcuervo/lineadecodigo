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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T573VMZT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLa2X0TawVHkPXQ0pNyC6DQptyQ2k1ey10JTSoiJMXqAIhAOwCFueHErUfSnk%2FPLaN4K%2F4dMpgQscDsbA9yTgXrutGKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ4A2fM9z%2B2N%2Bvt%2FAq3AMXYNJk8lSKr%2FjxKkDHgpxx33kdidFdc4ZCsMNDbEFIUfPqo3nCV3DYA1J3nx7islOmZGte3NnsgS1Ea7yi5dHQ08iMgdDGyVVEQoX3BbyR%2BWEvLiasgWK02t3X77FMuAo6643qyeCQLLWo5QbVRKRoW1ZKhztns8l%2FCnCbUarlPL79%2FQNh9cnzRYc9NM%2BA%2BfJ2H%2BIUTIkcK3C%2Fr83d3lMa5rzACR53Uki8YGWkMWigz8utny6gl3oubgpvBLmmaO%2FJlbDPuYPO6gAY00f7RZqmm4LDmnAnxlJjPwflbSsE1ZZTjn7fYguhmYSDsMCe1zqeYvOZRG%2FUdSWblKaGLI4TqBlqW%2F7sriIzx44W2QEvcsN%2BIYC0VY%2BFQJ%2BwyCQ7fIFZYHOuk%2BhQyVxYbL3pZ2nqqoEViPgMxWSqyLi3LlzxtsckXXsYq63m7cN9sXTPO%2BEw4J0M8GYRUokGQoUdilCPbegW9zTxX8SwMmzH0TmbdqkIhiY5o6xc0OsgVtqdbQoFOgRERBXpvn3LUY1M8HByChfo4MuyhPbt%2Fa4FrI4S31e3u9ZRDG3Vw%2FKYgo%2BRzh5UzWGcPmUeSQrrwNrBrwNY8%2BJwM7A7OMOS8WcglVFSuTKkZyoUzYyoENTn0DCZwtvJBjqkARqQrDVSWX37kH9%2FfbV8Vd3R46sMYS2okqIntLJqTjAsSAhi%2F0s43nK1gBkslB7kxO2UYZq2Tq%2F8IodUZmy4LJNnt70t%2Bmd0OsVwRGE0eTkbSvwPjJ%2Fti81Vw2wimuBH%2BIs%2F3Ah5OGpVJX6pkCnYAJfvUIxARQ0x6NyUTn6twcvAg8l3%2FLmQxJdHoZ%2Fn1wUdlc4AknrVGxCMachXdQQo9oxAWhi2&X-Amz-Signature=49e8e96078c8771b1ea21e8dca45fe0efdf1108d404b12447c210a121e8e0e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

