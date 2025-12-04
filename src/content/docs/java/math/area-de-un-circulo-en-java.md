---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ3NI7PS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGnXBEZlPDqBCTA3d9MKvSWfHl1bWf3CkbyQ6fOIjIXCAiAy6M48K%2FPiUTPyPXzoc1ytIggAv7%2Bmfdz0JgoCazeZjir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMogVgUFDkyWJe5FuaKtwDvyyWX3gUidCDMo4EPpZqGu3IcDKLo4IprGGWDKgwZSBNpjBbujzFQwqo196puiyp6PHU4X2%2B8ZoKo33dF6MGEdX5dctzyAbjONWnm8TtlKL03yHY1q33oATMiBThrmPu1N92s1gWyVDtqF5gdqSwFjfSXveR1YOuXm6V3l30epDNSaaOyAzDAIAUhyEwHWZcMg5U3r3G1B3WeCGxS1OfprmyH7F8RllvzMchGlc9dCBLE4bd2ztZDhEPVrwlUrxVDgU9dCZ1xKI2EdZsw1mA5qz0uOmY%2FEMhFRh4h9uD9OZsm0k7Cdlsq3jP1xVgQSsIh86dhZStb1b89U1CH5m1U3F2eDKXIb%2F0n5X0z%2BXPh4llKDOB%2FADA3RaWl89gfUJOuHA5ZyibOOYLRFarAxQzcrZXeT5dqC8TsOfVy8OglqtLHD%2F2i95tfol8S0Eja0PHqWXzV0XGyxN8W36v8pt6AfhUKgLIHa7fawiMYFTWb4B4SvTD97mf0Tado7mz1W%2FVVTIkvmnD2WJ7mg0H3GqIUGOm4HFtAx0zDxprtkr%2BHdVcdrC56yFn7YLHQ9vjGRZ9P5T3eo%2BV%2B5po9m%2FY4mip0XFvc379fTMzyvV1ppHOhQeY6vRrkI6ONBkxxOUwwufFyQY6pgH1UebbYctzwp1XhwhP1s4PoJI0kSxYPiEsO67yP9uoqtw7OjwsqqmqVK6dWzIHjn8xnHRwpZe0eOm7S9be%2BkF2%2FSsWPLStCngaFaPRab61QzLm52ao3oo13w0JncVVPTmr7dqJV%2Bc3nCvf8Avuer2VF0zg6NcFNJAKz2ntuvdjzvQYrX3DlbMixuHc48yL1ruPztEF%2Fr2iLvGobsChgQy4if1Ci%2B5x&X-Amz-Signature=62770b9ebffea865f24f3a49021087fd8d5e796299e6e35e0fd9be4655bce042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

