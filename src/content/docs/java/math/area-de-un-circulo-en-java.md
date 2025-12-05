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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXEHHEZC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T030028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hLzHIBC7njihfgnyN8j%2B6dQEC3FGwOrZ2rRNshN57AiAmXc665SnnAYciu61tj%2BhAFKV6VzvTPqWRdj4FjLkDEir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM9HMgBUwYOL6Mr1OsKtwDFndNMjTjg3x0z%2BYo93PrgkEg5FQz7Besbu6%2FSTdemMzc9ZiAnEBKQfEYNe9%2FczzzJxwTwnc3wQyFkSdA9BLAfZycBNY8Ewu%2FiIHJJQOfPV%2Brybjgw1oodMl7KSZhCSlOmugmRiGicIj7jQ%2Br1VSJYARHp348UXND%2BfOxeU0H8OPpckZDz2RLLoBvVDmIZf2Qra5spUS5aaeAf7H9XKkQLXtPypCricZ4KcDdg%2BeLEcb%2FCeJcMTzsvzSgaU8Jr0zRcuLtmWzDSEl5Qj9pdssBvhXkTCBc9f49PL5MKMw2lKj8UnbwNE6qnAG66ViP6jTcN1fjwjki8o8cAIwUINZtA2wPtkuxrFAG4iSpD%2BtEwqMpPSmp12sQwkqAcLPLjRsm%2Byecfv0ASf5pCpnKKSFAQDQtpa6eZgLABooRURGwSbcidB2KzU9X%2BHeMbj%2F465QoeC5ZhB%2Fl4F9WNKrGJIETW3Rdd4d6c6LwgxWdMLmFw1IIs%2Bllqv%2F7wl%2BRMTw%2FTVoHciJZ%2Ft424x2ThmkyqIZvTqRb4FN5kVQIQ96Ah8joQjzRd6RvQdoNGvehUf3qgY%2F2AUtpdz4Bxfcv17k53edpsCRqTq%2BfAAUseVn0pL%2BezZQsYNT0FvyAGptuyBcw8IvIyQY6pgFJVggTGFdUP4v3xsu6rbmw1hUPy5gom1TgDnW%2FVC3uqe5vgZ4DFr%2BAJ9o3OnxoriaKNgnJiwy%2Foe88EmtdrICXRKmOtJu6rK%2FUNsHYsZbZ%2BdZ6de0PhC6ONFImXhG633GX6VT%2FVrKllN9%2FQy%2BFvknVuC4axuT4tXlNZW6Se%2F75PYnie2w1laLWRLa9crT7eHKmZyxQxttAbt7Ov%2Bdpb%2BlqdTOigqNW&X-Amz-Signature=f3a4803d0e6f7a914298e946677fb62e13e5918ad415d8d2b0f92571035fc0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

