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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRZPL22%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDvviNasYo0epcIYFAAkHnKFzbjqUchdpqRo3lC7hwvwIhAObWyOCLkxMcLhJPgGGFYMhe7qiIzkNRceh0GQZ5k3qMKv8DCHEQABoMNjM3NDIzMTgzODA1IgyN0mU6DqYb4Wi9iRUq3ANN9%2FEG0qRLJpKdZqF74KsahWGXvTPu3U37KfAE34rvPxjE%2B8hFF5Mb51CLEWvKkxo4aWGrQ%2FrJ%2F7qu7yxChFAqApMl4qxQyf362F4yyzv2EyIderas%2BiZ2i67OEkholJbYcsAY4O64pMhtFLNzFRu1DCa36oJ7Ci3TZZAJuXQvYBBBDqdaBN3sXxnIr9zit4D%2BXNqBSQrkiijmiIYtX0wjwwU2w%2FBq6hW%2FBbTAT1KcKHaoWT3GknxbNLJpMg6Y3Btz4nSfqS53I3EfIE6PMnosgXeewaMBRsT5jPqHVnDXe3%2Bk3dxIg%2Bm4AvXF%2FgA%2FCLceOtXXV%2FhsKQ%2BtlqGQLsW1iuFaXkpLaXBM4nrNwCcD5yg8c63LGag%2Bm505E65iPn6%2Fhe%2FPHHGGk9cGY3uJhCicHy6EJOV7Twv8vAbC7ksCvwDXn4p%2B49DlRAZFDSRJdSZ9oOyACBocu9nvz9clRx1vKN4C2EyRJJHBAQjtjDFJQB48vIYwc%2BIaJN1ov7gzkVE5yISfav0G90eDZGLFWFmoAqO9NehRwTXNTwGpfZ%2F0wj%2B%2BO6%2B0XAPWzKTsAJOpRV6uAemQjOXM6swiuuoHyqKCsgNcLVHSbH6b3LNv002HFcz4XHo9xcyMxOHoejDZvM%2FJBjqkAW0Q5hwwnZeQ7Fy%2FZy4jktFroeA7LYFgk%2FroKAYKeC0L7bN72LzjIkqnWu1M1bEUQ3J85rZE6Hm7W49EjrZvVvRlWweIql8DgJ67JmgeVWQPAjqBpjdKfIz3gOYzBqf%2BtALUXQLEu881Zfsu1CUhTKqfXEXrI9S0KPugl0lyiLOuugJh10Y8VHTQlZFMu%2Fof3iEjRSZXpCPHeooQ8tr%2BxyEnkddV&X-Amz-Signature=0dd50dca84d347e5250f19741faec85ccb95f7f6f481dc9848509838cac884ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

