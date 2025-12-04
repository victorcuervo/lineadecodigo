---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6U6PCB3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDkLLwyk9lIc8LrNGydE%2FnXHi0nIfgTD3SBFmo6CYEArwIhAKHO9mhVb%2FtAyHNhOJWj2waU0dto11dqfl8qO3Wtyzw5Kv8DCD8QABoMNjM3NDIzMTgzODA1Igxo3vMlGL%2Bvg4cKR%2BIq3AP9NoyOFXD49Pw0qbPTLzZN9EmEQF0nqb5xQ%2BnTRAZz0XUIFVg%2B5Vmmi%2BRzuqSSUQzMhGMOLqYlvnQ%2FTdEhbeRRdO4ZIjWNLBvxr91C6eFJoModbXg5Z3ONCX9ZNm%2FDNKh3pVwHww22wC2s24a%2FEVWkBzfPqJI%2Be7oB8dG1F2iO%2ByM%2BgH67%2F9lI8mF4o2tKt2eR5YOxc5Gu0MwrL%2BknQwHYJrWPKy%2BtJx%2BxAw%2BzPG9YYNc1EQCU4Ux81t007Cns5yB6H6c%2FIjep95eeuhhZAqVBJ553fXV11lQ6HqOUbI6Rs9os9iHyp1YqDsL4fMxW1GyVX78V50zHqKl4gZlb9b1yhaG5rLD558tHtM8ZfP%2Fn0%2FCYyszBke9i%2FjaHTVVR821fv3x2tChqQd8XPLWUpV8qm2HoJAA%2FxFze%2FXpACWVUmWvZJQ0TrK%2BUGddPNtRcxKPtukZhhVEzJLi3VEaz%2Bt6fvzpQgKhTnhhrps2OBWlh9UWVnpZ4Fq5xMM609VgAqfhuk1bNRmi9z09jR7fzDOXDoDQCzCpTtVZ%2F7krkiIiLlfl%2B3qKEouyMMtczWFi66ueoK9nY127GK9k7RjYpO9JcGW1v6SL7Uu8U154Wz5xaml6DyANSsR2IzzdBkDDRycTJBjqkAZsXeD%2BN0y%2FPxFttZi6Ku2sdnWG%2Brw3kkG7%2Fm7sW4VVi2i5zM0zpv8o62szNsR31uXJvyYfpCCtGkOPAGx%2FFYh5IyV7ljJK%2F%2FTdltNzEryy7DxjH2BMIIodNDbI%2F4gLx3n0D8Yxu3Fi2LYyVIhECeXgVppMpVcSrLENe1%2F4BxmXOpOt2MN8ziHJwj3DMo8ZZn3te2e2FGHnC4gi1eocqCZToN79I&X-Amz-Signature=0dbed6fe2f88cab68ef317669207719ca5dc1ca1e7f89858024cb39729dbc76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

