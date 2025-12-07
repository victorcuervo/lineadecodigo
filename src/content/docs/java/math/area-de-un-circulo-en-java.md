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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7KKRFFW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdksJxK37eP8YOOC8Zv5%2By6Nj6TWIrLDf8DYyqYfYiVgIhALkYpzunn9Ja5i19%2B9HOr%2BEzPCu%2BfJlaSdgYBAMsOybjKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXe1tTkkCzpBPp6g8q3AN%2F%2F9JnrcVpAqLoCp4jrH%2BUPynZ29ep7XynI0AYTxipdWdj3BQ%2BYnD5JpZGrV07P2T%2FRfMbKxhrwo4NXK%2BqCB70aYsyJCx0pXv%2F0aPfxaKqad6DZ%2FI3VuSVNbqB0sT1i1T0cwXsYYuiZ4kezbFKi1CJ0Tu2EXm0VKE19H%2BPs4fSWVJBsWTNqXEY9WaYppSBEiv61JHdU%2Bg3HMT0xEic%2F%2FmTRwRIenJWVEXM8SWixsUKdENBooao2WIFXj0PhfTiCQjmtdgQlwcAadJreoWSTnnS8kYZF%2BRIhaBN7m%2B4l2siLJDdbLaQhu7rCVoJcsmnb7ae4qal5Ssk8rRvnPyxzfgGoqMnE%2BaNBuFhYHEkCx9GvLhOcY2XV%2FLATHcXadk6IVXmnbasBXPVIMw5jXPFPoO2Rg5O4PoKSD2jdbw2waWNgYLkphTp4NWkDMm3YDiuM%2FuVBl%2FYcRo2wqkumPf0SQZ5yprkn23eovoeeblT2mCBMASQ2Ol8EVLEkvz9lGSpT6R1%2F10wW48qPuylIHZF40OzMrZwu4ByWRKTNUIAzHogysEzDYrX8Yu9XWCDhOvJBG2rKiRXCXELFW5K5EATqCASOfq5C8jzHzVGzFTb9fvhvrnysWfGNpNDA6zfxjDzx9fJBjqkAY%2Fro072DNtfstd%2BpFox2KTB0X9mv8rjI59W%2FLYtm3ZYGR%2BlL3Q4KSag%2FQ0o7bK9GLwD%2FIT7nyP3tTitY8VvL9qiFlwF8NvsgyMyleGZH%2BF52VPoUfP4P6wVlcXJjE%2BRWNAxr52CfxpqEZH1nXqnn10W8of599W5MqiD7S94Fs2LXFP3QgF1fFiTCcS1WAdws6DRGXuXxKImFJegJFbfvTID6Gnn&X-Amz-Signature=bd3666d3886f7296cff4da5da272b55a234f71f3c1d93c9e50f9ac1cf8015013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

