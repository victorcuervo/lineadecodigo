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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE4PY3J6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsZM9aH%2BkeSDjAuoBPzYd1rJvjFwPF0ZCM6ZldWsRZmQIhAMGrxKa2tg6xn0ceGA2B2sYRYmdNaB%2FrpZQPoa5oY4wNKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUp7CZXSd8PfR8kaYq3APvLYAOdywxPtC4%2BPASbyUWUiQ0JHK1MeXW8FLtZILLGOpZFsWLHBvAvHBWXgXI0jEZwUnj4hd7LFwDww4iCNU6H3zy9PHaNJ8DGw52cRmES9M3noKV1iHhuHB397KLn9sHjNeh84T5U8xcnUhnTzSXxaWHqKu1AQ9uy%2BscOkALi62pyMI0cspw9Bjzv9LYMixxtt3z6SNlYyEfjXnu9S3UQx1yH%2Bgck79oHf5k7Q530mRDFVnge27OwuOqCnzm%2BWyNv7frXziIbHILrXObPNtAxrlMEiC7b2KHjAQ6rkIS3VO8metom%2FQviYpJG3mXQKWO7U66s44VGUEv8esVmvR6CndQSjDyQzOe5tdvt74OGhib0JK9%2FZd1zFyB8oZBnLeOuAdrjZ0vkc3McrCjaHEmx4bDiewLJYJfaHVe1LF5Psjt%2B5Q7PICPBN7srqUaSh4RkXWzmek0l0lxs5X6BOcGbTCE3OsHw2jHoA0XHGCGd82uV1i49LOfgw%2FFhwrJa6Ut7s1wRDT%2FDEz8xumsUnDHxLfF%2F1%2BgJ55fu2mDT4F%2F157gnjh1NR4XsWQNQH6deChqLIfXh6G%2B4F2RWF1elLSaNbD0kb3%2FBmufOrNy66HK%2F3lebAg6BQpL0eZLajCKnNTJBjqkAWUa4SZ64onEJxnQbhRsDTi96zrdg6g4zD0dePcL04WYctkvXt2G1%2Bkh7pxm%2Feqb%2FWn1H25o5J%2F41oxb%2BnzsC9utkMwr68LLTJKdj6qhgSVcr6oona1bRjvBMTChyFcmXtb%2Bn5LVbVqRPMVf4X8wHFeqDojAahw2hA2Wlt%2FBlloSOBkFP78eyHmHlhG8o6oBvBLrrWujl5dUo7Cb60r9MXvLvfgn&X-Amz-Signature=ea042663b7cb69f7ffc388c35fd1e91c60b2e9c8810a5d2513623f6bbb0bf07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

