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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZAQXMY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVwFBw5%2Fll9J33dtzwTJN%2BzfvPRte82kN0R%2Bx8AcCCIAiBtjmc4ATcf0unNh9nBnd1ai6KcZEzyibCNBg1phZGLbyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtdv%2Fhqnof%2BLsx8cKtwDwAvL1qGqa0x1Xsiab4ytKTMMRRZBbM1WdMBh7V2y2UqKyWVlYqBpezHPG8hiHBe1mMR15eiR%2BR4w4vOsPkA7VSdhmnPbE4qP3Hz8NSFvR7wnDy4lXfolSQUTihl0uA64k5G4pYHX8gOqOKVql2RTEGL6vrYhSCt%2Bj7AFaoHpudEVHDdP9S4K8pY1N%2BmkQCk7Xg15BxtjjDMPWVvVZT7yIGFAS0Xk9I%2BipX4Anf03ROeOlNSnbTwOAg7uzQgSPN0j%2BeWF%2BxBlGDhlqs%2F5WSX4whxXnuIZ1RJt0mKyqVWBGMIQ4mhCnAwd5omM0EvhA5OonAYqu%2B7SPZQ8btyjA8vDhEnRZZrZPX4lw5Q5NhfSUJnhc%2F0w6rWTr9nWOHMru5Ea%2BxTihgZnudNTTe%2FAvz8Klwkd5ijtSHh2N18khXEJzLSxnTcIHOqba9FMAzUHsMq52q%2Bkm7aGdt4TqRS4MApJKxhJsNpiK29QsJjBxyQGECIh4icSMe6w5ltGd%2BUH4R7HEg99%2BKqLhs3%2FShAXKJpo2chWa8HzbUCqveQihEFkpP%2BNQo9Mrnn52YQ4I%2BVkWq6wBGboHA50h7h48lQa%2Bxd3GYQW4%2BJqkKgxZFesTyxCaH2vL8GqMxdckKFTR44wr5rVyQY6pgGoniECJIlZw3Kst1OmPJzzItUkZgnttjeAgo9zFfUzymdcBhh5sxIsVc3%2F9cdi0%2BWNe3H8k5z0ek6qMLFVpD1t6CNN6KJHq9GrTzbbPJElX2fZiehPCRAiwNEh3Q%2BiPwN4VFg1N1xcoi%2FGXmw06u7csoi3gi3u0j%2FK7wE5GbgSJi4pRogvm1ksywFqmgOt19FjnuHakYyn%2FvWsAldTi12qquNmczZc&X-Amz-Signature=4f25eca0c7434f49e9cf78019c9addae120c1a028139eed08369467c430f57e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

