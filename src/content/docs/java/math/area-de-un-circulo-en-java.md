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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWHPTOK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd6IRuMeAtJ0PtrogwGyv369%2Fx%2BHLmvOFtuKhL%2FJ8rCAIhAKghyVsSD%2B0n1CRP%2BxqCoPFxpudQ2cxtlcATLFMjKBBEKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVrSb3n4%2BV82uKb3Aq3AOIzfw9IkXoSsg%2FECVWMHVPPVJkNIyCdAkuYPd7i42OqYHRKp%2FLYYwlGDfDSjDJdhX%2BbzlnEL6jzOyekmqtziBgPm%2F9PnNZuit8g9gGHqJveWTrGVG0zN2CtLoL3BJFpkbzQgKRFOo%2Foo%2FYogPcyJjwx7NS2S%2FTRPl0npB0MTVMLk7biRucXLqRvggjvpnl%2Fg08KQYgqUKWuthsQc%2FZ95rzuMg2yBT3vektrucCKRitLPUz1Enqr0YOnhjIalp12SXj%2Bd%2FCw7oEoBXSzgdp0ezktNSN2BfbgOKesOLlE7zRv8p%2Ff4CxHb18y1wUFPU5owWFhMXLIX0KlelwDYvps6ETK6%2B4cU71uKH6YTbbPFXtE0h1m%2BumK8pxWgKnHAofZks4DgvgUJvSZQh2Fw0lj9EZtWiUY8IrBj1WczLPPynWuSqbkAvQtIAwhZXjqRE4vKK0ejX71Nbpwcm5EJFUyon4EYKlefdBotrI7qkzInxFzFe7c%2BLjjHsQKaFvg82kJH37blOPsiM1yWq14uVUujJ8l4RIOYp6qegch%2FgEESFmDSWwt8uKc8%2FsKh7yJGMKRpU3M1ElKNdutH3UdsDMk6WoBePpKJXQYYXxjvTfEXSxob3YP0XWiC6DZQJsyjDBmdXJBjqkAaLYZhwOKs8YlK8gndtWUiyitbqYOIUtpexu16YlXfgs8u06KsCus1DI%2B%2FHnQ%2FD5%2FxDjycabfaICrIJgWWhYYLqPLGubnuBz1rB%2BZiWLjfGwp3E%2Bv5xVp0O7URD3%2BeNHfztNSW5Q4n5ZfFVLR%2F1ZFBwPWA1544FVb7mPqUiH26pwxu7Tj4Jukg%2FiXCiLceZTGwZVJswDCfk47%2Ff0BVIMOMgXoOnd&X-Amz-Signature=1758c3b4e1ac056ec4027b4fe5614de3ad6edabf39d7e9df3a2767b077bdaec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

