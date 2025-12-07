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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPRF2LT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T064317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd%2BbIVrcfdnZCCqXU5uF3yQVib0s7JaavBI8DKLC17ZAiAg9O23E6GqWUje4nFFMJqmTA4z98aR73dpZ4BBwb1meyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3T5nWC%2FGtc9ieK0JKtwDJLHqRC4J0zBqi3dSEKBK%2BSBTCFHD68R%2FB8doFrJ9%2FXh1lO6wD9Fr%2FElPAwQ%2BhcrRU7g2bhFDApWT70kv%2Bd1%2FVK73qOBhpvfM71I4%2BzC2SAqAghg2ih0SOFBub3UfF0UAfPyP8OicgIGmYMKOZ74oeaZUKNRxJXOdX0eF5j26tlIQUkW5jRoOqmjU9J3ZXs4yanctCjywWPc596WrGZLwfMEH7U1gq5qLIHVsr2XwCP0JoL%2FSw0fvTYUxisd8OrMJtUV8SHRbLDBWtl94tiNU4ufLNc3pmZWPOV2YADqxuFdQ7NK0gMmCMRKxcKht8gpG%2BqXOKDm6mPZgLCMdYZYKYBUjZpLrD4EyWuKPp47pcSaU5r25ymCIv8ok8wTpEV0r5rrooE0vZd9zYRhXcVGXx3Vx6zoUWgunpu14V2bd2sdpiqKwd2LUQuI5Ueb8eidT6aenwGkrCEJXJLyNbP9fRYPmI8lSeDn9uZvQZqEM3TlZJa38mALNh7LA3732shAGQ7HhkypXYE67LzDDnldfM7EhArmWPHNdCQrFTbvLRz8LomjO1Y4DWT1uSgXs8SD3kU2vGrU3ON%2BsACSZYFq8LqFQVaCth03vkoYLHh7xjgkzBJUa7AEUeURav1swqJ%2FUyQY6pgFAx%2FtZkQL3ag8%2F7qoxQu0N4U9z5aDTga6psC5KvAsIXPeB3xsGIn8sXNvICTSmidBCb%2FH3IdXXI4rYZiqYeFLeI3xtKi5UfKTA7yvATTFoaF81V5wanHft6dQZLYOhJF4I8G6kW%2BKd1EKCwIz9gUKuRtUtODxRwIrKOJ4An8QRMIV33R1AKjpJJiGIvy3Sx7D2Q2umfbtw6KnDbb1xJzIb2CCVDtqj&X-Amz-Signature=c66c476c2a9a03311c55aef41f8b16a81fb94e910ac36ba6a951c6d739bafe8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

