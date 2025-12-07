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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDZEDEF2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaU8k0Jace0AHFffu0AKhWT3CX5fqJov29CLjnoQeorwIhAPgK9qvBhdyrdZ%2Bsrm0CdySoTjaEYrcqN6i%2BlXvFPIT1KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcxpMtpU%2F3o4%2Fwi2Yq3APZTxzug0wzR2X2RI436eTx57BkhN%2F3NG4OYM8khZ593rBrU%2FM%2BPbrL2%2FK1SkPzJLUF%2Fc%2FLmYHtA8uI8B0SZLmUItXCDGys%2F9wANymx2Gjbq%2BNXv2JVZ0QFrgtHmIjTZQN%2FOE8n41TcAaPMMGvQQz%2FE6s6hY8%2FSvNo3TJx0bSWP%2FDTKIvr3m4W3U%2FmzZTaPMto9sYaHYwjwM1gCS7EqZ7jcx0T3p%2FLXe0CxvMoR%2FjftUlt%2BqShXJE1lRnfp7Qr9Wy6F9Y%2Bbzm4r%2F%2FN%2B1eprEPiNQerTsdPuamJoEI%2Fa3%2BUbWkMfSzez7I5QSr6NbkP6jK42MzHYK1bP%2BcfzKMcaIM%2Bg0soyWSjPl5ObBGHSUxwjMBVJdxtMUV4J741S%2Bn8%2B5a6utDFqaw0RaozdtpDfASL96LLINBcg3Of7spjidtrG2TPGQZ0VmokrrhLg0VKtOYS49%2FoTnPjsGCrxmh1crE5iGNfsVstYP4jcvIVeo4%2FI1CxgZ0zLoYYCgS8C2YRBgbsNyCImrWVx45gKi4977L%2BKWlv8eUj70yXpjfT3G3rvgyR3iAaZTNiUTRxLhQHRM36AVpZbf7p7XrhdVZ454uRxQ3LbnkT3XxQ67BEdzXFnjzJfV6%2FXQiKJggEzdjDY%2FdLJBjqkAfUrsuWGoPNJ7HsKe6hlzvs7QfERxy5NfmmYCCWwjvox1yDUbkg91jJcy%2BezPi3eB09Lnn%2FjS6ZUQckXb1Xr6%2BwDFpsmGS2JZ%2BVFYmykIGu%2FBWPvH3rk4mHZc0xoCYVBR2pyUcXCcBZtqbJs5W0N%2FXA68jGMuhSqIRZZo%2BcJAMZl0qC1x7Nt%2B1Mirahc%2FSAcrcDWxluXekRFWFDU4%2B5f4%2BGfkm2i&X-Amz-Signature=cff7777beb6f4e6e94414cd3e8418af9fe484aedc08dd8a12129a4a175938ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

