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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MJS7XC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSndg8yAR7J%2Bms8iOrK5DXa7ofv%2BYMlvuahs5DgYyOWQIgCsUld1QySXj9mFudByA8z5%2B7fhKg0HOXzx%2F1gS4n17Yq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOnfTcbh3sDy4mMInCrcA9pfFXoos%2F1TCTf%2B9fbjYfc2jKcs2vlFdTPYDw07g8xoE3IvaQ%2FQtunPPVcPbYqUz9AxNWSaxtvNXvOSHMfYr9beSFpsdllxRwbJd1cwB8En9AFIbvlKRyr3SV114Rvn1S9QHDzY%2Ft0OhAVyFW9SkMwVDaDoEjCJ9jagpwHKI%2BN0PB7GcIfifZsZ6JdCs1yzG2uUW%2ByRrBGhJiRZDqdvmjErT%2FZ%2FcTQQ1h16maBtNwxPLqrdup0CQsWrNuio7p3zmAKgEKF5JkWir2E8LzLjPDYZitU5limcnvArDAt%2BWv3Af4Adu3DpmcXoa9rzCZn%2FUb24W4m0C1WSbz1fYfUijA9JTzxwuUwXNviWVFhXnFbExaxrFMu6Ll567AxyWSRtBrtjVU8p4ChmavCuyiCg3kwhCim%2FE50%2BCF7xwmJQEfFP0nw6STKtnz8hQXu4GZDwpI7ktGfEv%2Bu24zZPbRNr7vJTZtBvaMAFQ1Xgl0Aktpv9exlM3n1KEzR53vJg7XBFxRvQBOhhwo4wOHMffoU0tJWvgBeCYR%2F1cl6%2Bf2gX%2Byf%2Bz6P%2B8iKmTo0ny0YJ2vipDbHkFKm1QDwhzLoESYHxgX9%2FGhq6OwoDBdCm1d3CzhFJrcI6qxK0DzaYEjGzMP%2B8z8kGOqUB2yslbG7GYXJn4%2BBSnoPJ6tymGdoBLxTKZf95DKDWnuycaFEPSw9k5CLFMPzUzJNDT5wPxCRXjaBtF4EoF9NS2cxbIBcb4IsPHIYS9UHgZjZbD%2FUeDbVdFhS5k4p17f%2FHgGwn0pbyb2YTgNKNUF7q9qXYMhDObCcoAmXeh97e15IvWqrEHHVg%2F97XlJ4fL5TkK60yWRXw7I5zogh0PbhXm4bxQFRg&X-Amz-Signature=5da5a9f686e0bbc7543c351231f1666cc78ef2317117142421a02f40e2d903f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

