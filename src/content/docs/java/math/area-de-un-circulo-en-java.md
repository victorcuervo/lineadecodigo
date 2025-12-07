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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGPZZVF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcyz1oRc%2Blkpa8wqCuQFTZxaamDUzCHmpD%2FdiZ4LCcAAIhAN2uv4E%2BQ1xIAtPh7Acnp5scRNWl4mIKPyX2B36vbc8wKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2V0E6paCEF01dWEgq3APr5cPzkpVy%2B8m6OZFDFQwSBD%2Bpd2XffLWCD3ppiI5lRf4jD%2B%2Bvuur27GgOikdriEhayp4gVxgUV5IaPny5U3EACIT4UeLm8bk3bQqFRwnpD56NqPP%2BBrBHIyOOdw809OT%2F1e6lMM1vCXrh8KiWjzLxjRxgspo7nJ9HTts0Cv%2BJogwsklN%2F6xtozWRtUcrIDsbZbqyA3j7eUhbxzKbE8ES42DXP%2FAIGZdk9yTou5LUIdG32Zlay1NJTz9rWFe%2BDeppH4gJ1cKOUqefHqXV8n19c8RLrBvM74ZzN9hGneuwLXQ7Xi4xVsLDYHlVbmOygkaJg4zz9oA81d22TsXhiOFYpauFnf1%2FvOqDaLVZrIirOygNpYW1EQQugpiAC6SQC0vXpUn0L4nLNNoy9f84y%2BAiUooqICT%2FK4el%2Fn9%2Bp3sBmvimi33Q4FQZcet8v3%2FlBY5HSpUHfAw%2BCxTIXriura6Ww2cyKcahbSLR0cKxJyMnJupUddHJRkFUGXL4oPtwgfotC0I783IJJLJH%2B8GgF7icg0rU7P23eMGLwefi2JL1LMJopj1Mf%2FpJ9qJhIBgn5dQSkcarlSSShQBQbrsdocUOCA%2F8X%2Fq6n5AIWooscq6V%2FvQpgZtDE%2Fwx1Sp%2B%2BizDSmdXJBjqkAZPx0Owg9k5oBRHDYs64NsiDc0W0lHWuVw7LZkTPfybShknb%2BhxQEdMSTP4rA39CsFlrnBBksQOhDiM%2BymFjH5zNrFEzlbMHmarBSrcZKr8RAaiLSjqz41RY2gE517LWROzVp9eWRd8G16BrEIYwQ5tCSUJwzOFdF5UvpA%2FtDLcGDASxUyBvJjjqdHmOcvqfezQnEHB0Wr7ZgtDafONyWQBOMxB2&X-Amz-Signature=cbbc8a8b279cfcd4618937c7ae475310d1d02cbc81e7461c0129dd24dee84007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

