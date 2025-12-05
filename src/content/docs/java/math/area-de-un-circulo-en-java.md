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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X763G4UH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGJxZsduyS6gVfw1u5CLmFns%2FdDMHgbmTLUIEJJi1S1AiArfLwTdMZ%2BVi9eXTSWKSLBD0iT8z4au6%2BAK82iQwJmRir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMyaNWv4e6iLYszT80KtwD3WFf6S14dp072YGBP9kA7QSNlLHsB9rs%2FJlp0I36IgipMW2I7CHpLn%2BrsQBQhbfHFgagx8AW15m69E2ADzoUqWkYmBlLcwM9ZaOSDawbys1nRRFEJjdchL5qLqM5WvzTnHBcoUxURJ1gWY%2F3tdu2IhWM99N2FP11tx%2FoYlquTnoAt1alxbV54deoI1H8LINfT6vg3%2BS1IfKd1iRyt1IDWJ2oID9q4aqd0wRK3iiB24NhDaVo7oGhKq8yBy5IL7XSgfFlZAEZ31FzIVmj%2BkQHT7wdoSjZOhY1hCZ4axjqTtvOu4gs0tAKsLrIPlO9cKfKwPz3UoVNbITBu%2F7g1tPlBdgG%2BvOVnf%2BOZ7zQVDOQ9DN97iJRaMjvEBhlmh3%2B9wQ15PQGQLrqD6QfU%2BvsCMo3wFlp%2BnR2vql%2Fogb8RQZqfH%2FnI56eH5i3qgxHoY2iZLIc86MVbCXwQZxG61F3fZpq8mTbbP0ReU0l9uPPvL0QTp7rQDkbKZpAnYsltvYgjrVYHez%2FRMzgxFysCGDqek2IC7Np8Iyu78P7%2BnVXFhVdh%2FEIhqLHfeVc%2BsFln0H%2F%2BrCFGxPZ%2FIElR9VvAgkGeO1Nw0HXJKtZgGYUSIOOs9CyG%2By1%2BzrAtkbIlMeLmfAw8YvIyQY6pgFTRImBZr5TkdstiIDY84UWVJrQV8Hu8oPXytrwt6qMfSZ4D0JjBECEP8kU91hgupMAPeHmEacU%2FfHcYVYDik0KvhbJ%2BHzBr3saJouTM6ZV%2F9D4vZpe49gMP9luSKHaMpe4q4QTPHHadLYBo4CUGP%2BFpNly1aCW6I2s%2BARShVew%2B%2B%2BSAd0Fh6%2F6HD2cfeNGUJN1ue0renVJ5msV71TLLjl7p6JRXeSe&X-Amz-Signature=f35979dedf6e9ecb8839e630be4c17b01e293e3e38fd1c8833f9c677eaffa676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

