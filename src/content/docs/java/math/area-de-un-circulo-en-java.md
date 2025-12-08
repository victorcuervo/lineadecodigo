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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHUU7X4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmZq2bgZDxpbxLObqqzAHRn8i7p1nQG2xGDLIJqV0ERQIgM3jteuMbw6gNHwLqcptM3SMA2yr5rp%2FnepUVJCARHnMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnewVUIMCHP1WzKkSrcA6bp1ERIAENoPIw6OEIwv4bFl60PdoAefcFnDOzGnMHsfSvBUo7k%2BWNt7k7fD%2Fzdsf3W1QC1C%2BwqIr3yUJZ4mRiAwWHh7OqBWW1venqXEbxmUfa%2BeE7BKaiCcgjFww89aDUi45%2FKsAZuz1FXyx5GLv7t%2B%2Fg6R3kJMIjNK6CW5%2BndMDblSGcxMjKYH0qRn%2BQYys3ebAoO4jFPCMVXSLMige2bj6hTcH9UsgRnuDRBI2iGaMswdJ0UyrNEdM1JRW4tcTeVQXaXgNh3O44bqazqY6eGSDk8i9Jrp2HmbjuqdTx96RTEcSviGjCwfnLTHtXy1dZ%2B2gySKS%2BtyLcNdyGzKza53gcX%2FAiWCrA20iklCaNJYDYua1PKECXZeE4e6goSoEySHM1%2BlQK94wZxpkcXuKiUtFxC3oMBS0pVGEY0eBtDgI5B%2FTHgZ4ua2IRdfXGZgbN4%2B%2BKnii097zUMbjnEzNThqWfEEPuR4YMrjH6yimlzEJL%2BpT2hVzhDkgQFnY1jZAC3wogX4fXUIi1lgJG8npym5ImccfF7uK5imk4m0szLj%2B%2F55xOm7W2u6AHZg4xqZj%2BN45p1YDH0lqIkI8X7c%2Bg2x0p26g3m25E%2BbM4JktUmDKHhZz0uV7GbnBe3MP3k28kGOqUBlCqqwNDTA3J79pmkZdZnZKRUBxaX%2FrPZssv3UrPzkswHTNeC81tb%2BH%2FBGPbo0jKq8oRyVmDkyQ9BSeLvDtqvJpQSpFF1BVP78fZkvs2e0nPORyLdWAxqUv51Cmh%2BxxYnaaEkOUHLkZBr5akGXyTSFNoTP97gUOB4BZaHGu3FhwPmKLrKEl%2Fdl63A71pd4gQdK1gC83xDxj4oqhcfuX%2B1EB5qPgYC&X-Amz-Signature=089f32ee2908e30a934fcf7ada114fa849c1dd384e8b865dd03477161a824250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

