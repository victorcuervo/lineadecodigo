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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665232WYG5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQweSpuwCbOe2GBjiuZvZ0c%2Bq72aGUzUNjD4JFIFI1zAiBpAOQsYSr4MoxR4skXpvLMIfuxmy622LKxgD52i09UfyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGtUHjxSmgNo1%2FONHKtwD535%2FD8C%2FCAbMlZ30jzeJNSMf6zU1P7xbEgp9M2O8nM0ovvmxrlI4Oy0om1%2FpNeRJjPbBOKxrF6i2XMsGkzfEa%2F4R29%2Bk%2BB8iHb5RJ3Z17PWXchZ0j8bG4hoV34B%2FHTZubF0k2%2FlrucvdYQ3cXDcdKev5DB8TLIXfDMhzNBTY67QSz9%2BfDne0Za7beRH0U5P8kTFx9pnhs2%2Bqr4XeQZXy4ciaHKEzlk7oQtkJzh0Q3ed%2BKkvlu4qEAJaerWhwOrXnGzQE%2BcnyVNWMRUagv6IgAW58F31jriHQUz3kPIZPYtjdYD06X9vEEdtrORT1vgxJloAxgwQELRRByYeYC5G4MYazfBHGWR2akszZuIQToochsZMsmg2BXqhqd5hQWJ5hkt0vrbo8S16rD0ZlvXS2RoDmVV3HTWcAIhXbkd2g3Ux%2F5ytLHwm8VO8287RmbMV5poIENnu9x5qTrVisbcRt4DcqOb6ggHUuDRMqt5xPxhrINSMv%2BOJFa7UsRemB3nFnkEHrtLQNG4RfT71Nv%2B1e8yA9j9IwzqnxVHsDwT%2BJ1K6r7kEmXhTtsQfi9ZqQIhIZdS8g9sZjPX%2B8dlGzcRsXvr40BcvxvixypIS3H0HDqvFjXom0r0%2BlCQ8r%2F3Mwzo7eyQY6pgEWpkFOjOfrk1VON%2FB4LwIMrn0J96qLFzDqfIVrgX8CKXA5SexmSz5wtvyngdLeDbQn2FvLm2VeVWzegXE0RDYRN1YW0ojEThO6kZadV28xwoelqJ9bCbhaYH4F1R1%2BxGd8OJPBehPivf%2B6GZlD0a%2F7C1kVk8OWwTvS2HpRxI3I244ht5B1Qe6LINtrMRM7cEQlW%2FT6M4gLkezUIzpaeSQKjnXN3KU6&X-Amz-Signature=3e7e05fa760e7db4f29b15e03637bba0b006148451b2510b0089f88865e470dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

