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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR5A2SCR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICczx3BAQbasgOnK7cpIr4N%2FD3J%2FKpVVUPvFyFEhIZKGAiAci7Zx6e3URMLi2tZm0vc0COnwmW0Dv9LB9agY22IoQSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1UJ46LqSmzrUmCGUKtwDHuMsGrSvmdpkbUbQHv72nWWnJF%2BtuGP6JhzzQjeb5vep55I7XSQZhy5k%2FxDTyLdH6KDRHQ31tJNNhDfl80kXjMCykNJXMJW1gj%2B%2FdeAV0HojArdMx1fEYp98CDQE%2FxwLeUOr067p%2F7rCw%2FhBCF3tynfbSgT8aJ%2Bj6c8IdBUsfCbvrggrr2JRhy5pek7%2F8KS7opNdOjk3qsWewRdst378dV7POufo0xBTYPuCYb8Emp0WV%2Fu%2Foq%2FDFwAo2AhXnauCPM8YuwGFr%2FSmL8C4okWxVb03OHRTOAB82M70zd8N6xV6vi%2B5kCqcvzoTeL26LXm6AdGNUvicPRFdvrdg0fCrz6note%2FXayKhb9psd%2B8%2FQPZg0Sx%2ByT5vRok9rVMNz90cupOw5Q5C2QkAd3Mu92CdDViDwKaHKS9qEH07PW235TDqu05gCFXOWjb24E1FT3L%2BsDjEp35Rk%2BkY2Gjv%2FuUjgTyqcc6kj%2FzvG99QXQPYiA%2FaB0gEWi9YYd3p%2FXwsl9xjE9MpEJh8TJYAL4kGHslk9T50CIJx4x%2FWzCWJ1U4wbDNYAp82SqD34EsqiSC4gHZ6oJypK4gtrMp646NVxETb4yGRcoQQywiwjmUt2jn6BY2S%2FRXRuqvs%2FGA4NdQw4aHYyQY6pgGKwC0cdr1zjiCGMnE65HABmtiaEYrar76NOQpkuZ8Nge%2FOhwRXi%2B%2BRU7L3%2FrmjDNUrBRkg4s7yo%2BNZwFsv%2FvlRo%2Bb%2BLsnz%2FWM0Rqamg%2FJmkncjb2ff5m9TxooF3kKrhjf22Aj%2B95SlwD3RlAZfC%2BNSokxSGe%2Bfe%2Bc4n7O%2F29f%2BYJhi%2BzNHDC3JklhSAFg8v3tzqHYsYkp%2FMk4KYZW7VjuCakG%2F%2Bvqm&X-Amz-Signature=937a3799eee236f2d2036949895cf0be404ba2e91c76a48b80c7e5c2ae3aaf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

