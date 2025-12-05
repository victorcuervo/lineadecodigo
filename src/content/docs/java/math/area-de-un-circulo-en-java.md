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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PZA4PPE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyG2XZrxTW4MpidohsbfsLeONLKQIj9Fxxg713Fa6%2BVQIhAKS0RZQl1TCtPKzOzlAuNVTRpHSul%2F%2FFXyHzK7JqRpWnKv8DCGgQABoMNjM3NDIzMTgzODA1Igyu7hsPv0qrTwvsN0Iq3ANyN7WsJ12NKALnDHY14JdVvlBclvhhRLf%2FrApFF9r3G887i4TayhkVTUk3VAWOyvBgteOB0viZKKHXzgirqjh0Ra6DMz2evP59aajT9rrdeRzYv1OvC4tjbGo708wHLvx964oPB3nJiGkUiKjb7gtNRkxOgE8oTCh98T8tjBdmxBkleLiqtz4pW1fJIMaiKabw4Fzn%2B7hfCh5pvzI4mH3%2BLgg4%2B%2FEVfxuYpjrRjL8unc2vrDQHs8ayoXVEOafhVdJBufpWYgSiZgiIj561w4PHu%2F6s8nNi8qUXun7ie5OU5mXlgLO%2BxKecwB07lUIycVlwGrB32PxyU%2FjUOmkpeefkiVSfjd4%2FZHLAg6Fn73XEpE1RVbzhqPhuUWbSRXfny%2BOnCB%2BTaVs9ACo42cN%2BEGTZHto2zkk3tjRF6hFiTAPrQIxZ1nJnWQuUMSLr6riI4cM1E0zlgYC8Q68bZIQetwvOWnY6ggXBoVxneh4PpKk3ti%2BrRqVR8Eppvhn%2BH0qUSvsK34svXRCxw1tKMfHK%2BtCr72lGpecleFM5pbmuOqI79RWfAGtuZsDB5Bts%2FRz7%2FGwRx%2F%2F1PFYt18zKlF7aCM9K8f3MSMUECF8AaweFQFfxFTYNwoycXDT1jm3m0jDzxc3JBjqkAQbIZq7yAPeekK53NGFul%2BL1QzrVwBKT%2Fq6dcHHVAosQEPnJKUsK%2FljScGg8LvLp%2BTEvLA306JuPi0vysqQ4G5U3n5P8FaKkzcRb%2BAG%2B5jsaoIGwz%2FFv4INtAeCu0whTHO4Hb9%2FYbGSxzRAM8x3oS5HFOHxBuDcOGbWDhGwqDiIYLMv7l4JKyAL6oMHNddIQWR5nGyVaZ477nM44scfVpymnz8Zk&X-Amz-Signature=01d0087e116f8261fe4f0f4727a422676f5034afbb54162fb2a77a778d82c9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

