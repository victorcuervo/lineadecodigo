---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTZRKCY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDNxziTIS7FeZ6v0oWoHkYrHnmVMa%2FwVdWritsDvmixLgIgLj10xChK3iwZ0bCtAHhkRaCOjikDrrHOhbljosto8zsq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOCO%2FG3UwzOz3b7fVyrcAxRCaDGvX%2BnSjz2Z%2FBcMs12AM4LhO3Y0vmTuqRu4eR7Af9QxuItZR3i5Y%2BjKX9nVrlXzwym3HW5NsdU3A7KNvpwhtRcRatNmDOI88U6L6CgjL%2FGmflu8BxuSFFzlOMpZNuRLgz%2FVs7XOGBUvkbm5c2ukcOg9fupJ1Zac72GsVscq1nQYMneLK%2BixEBUm1Bmhhwu6n9jcPUG6IufGd%2B3XASvhn9vz9VMLPK6zsyfDmr20x7cHhdzoY1GuacmuZ8UiGottNBkxNM579Uxo9dMq7%2BlOgW%2B4oEBuO0GfFXoQG%2BN2Fh7FBqNzx%2BM55%2FKp5JGvUp%2FGw3iLiBF3catH1Znax6hVSicmyQTBWpcUL9iQLIJR6XX8n3LJHWyVQl2e37gZb%2FpzsRRQ5cDMVpOzqZU6VkIIbgVwGd4JMTJfgpUq6E7uG0Hryc7%2FUittqKHi%2FxSdmOoAErfh9eNnka57dFUwKr4prVIIi6BtbLQ55s2VFr6IMyCqAGNfMpTbT%2FKV3H8M0sFvMP4pQi06C2Nq%2BcgC%2BPjzuzuYrixLOxL%2Fbd2ClPOhC1St%2BaR402MFg5q4S6JTsciD7fmT5ARruNTV9Mb1lUnKSlBAQdDFaS%2FREtFkbqB9sTQgrQvkulRU4h7JML%2FUw8kGOqUBJNKhHgBaZd4xb8oVKFA8R5Avw2LufG%2Fj4HDS3pQ3IiJ2AQ0KxuV3LRS5nr1%2B51HGWwaE4zJ1eUxN2bx%2BjHuiBsiy0TZJp9E%2FFj4uhSmHV4%2B32wj3PAol%2FPgXLNTmPMTbjjTsZo3ml%2FqF6mq3MacIiF%2BWu6A%2F9pSE%2BCOT5i5xXxTYnAKp1du%2F83LbA%2FXyOSn3Y%2FXnz7cQv8UOS24AWWagurdfvi8w&X-Amz-Signature=736407d4dd90ee6df20cf81b9f464cecc92ca0f4f3f97de9efa4df40a228376d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

