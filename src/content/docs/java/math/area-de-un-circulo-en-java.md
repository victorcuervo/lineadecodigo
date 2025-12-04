---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y3MURHN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIAHT23frxfqS0j2fO268%2Bj9VeUUr3jv9lcA0wNGSqLxBAiB0X2%2Brr7QcSESgyHHDi3hm6OM5zn36PklYJpxOCf83Nir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMTv6lFr2WVte0vjNjKtwDOVZTpMXRHFHlPc9vEq%2BZjrZRoMeGk37n32mc7MxtX6Bu%2B2WTeVKP6NjFgjxnCZhfrlGuB7t1fLrE9hA%2Fm3jorTyq2I8b%2FStqIC4xR3JY%2BMIwV7Td2%2B9UjOEPK%2FaE4BAzjfSfalDOIBCFFF%2FKfnlgxpJgffpgGG7L25XOGpcxaMxDv1EqIdjSrtBTHK4kkaGesSWt3STTYKTYx7rTfaOIdOOfSA0JTLJQwVVIEWNferZ9ns%2FkSSLRk0S1PiEjepwpZ9uBc3S8t9MYtgQ8dmgk7xfbkse9wlXY2QNYNshrDT4jmnTOFaY5XZOY1qt%2FqkzQcXZVvnzgcfOJCA4Svyo85R1fFfw2WP6bgfdAtt0k%2Fj%2F7aqvGxj8ZgqU2Y3DpD6HkWC5DFqPFD%2FQMugU0P%2BdLvjcBO5alyZwj2JB6Nkg%2BfIwCt1GE%2FWUSKNdcF3RAje%2BH5zYqWll9Lccf%2BKyuHsTF2wFLJ8CseKVjExDs884HPwgdMVsbYOpgW3UjUo%2B4vucMURdpcAwFy0B5Q4%2B7KlffQU6Xqj2q6uoIlXjyjm8EZNge0qxkf1w60mHkYs4bAElCQ0Q8C%2Bcle1qMs0X4EabxPzvx3iHw%2B7uVwZC3kH5ALpj75aqC8TjkZIAX2DEw0ujEyQY6pgFgSRPwGh6uNUET55PretqIBGb9uXQFuDTinD6QEWmHULlbiAh00%2Bs22KnuYGGqV3iLpbHdZVWOBW58TQ6BPFiIKcjkt5nRN1DpVPMA3t%2FtLOgT6I5DE%2F9da%2BP2ktxUXkJZRrkAw%2BRniORwvl45wvPXbkldujAjUhUVr92cM%2FkqjLJXnKiQ3VmVsEXHKsUOTK3git3pu3TrYGL7Vg6yJIStisC1s1aU&X-Amz-Signature=5d039f23bfbc5afd09a051096b65cea44762aba4bb05dfd95b1d5c7c22e9fb82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

