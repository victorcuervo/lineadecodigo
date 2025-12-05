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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM6I2AJ7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKi%2FGw3BpFn8nv4FsORdeDpDTJH9TtJdZHhZy5HTinMgIgW%2ByPGMXnyGArIHQUGcnS%2BeeOvK2kobZq0ZRKPSXwXCwq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDL82QNqbyexLUnFAtCrcA4tYBNv8sMI0LCdIjcByLm09bPz%2FcGxMkwhYWKIbYAAWCjnoxVo%2FJA1meNHxEVoO7ToVl7O5a8jeyvILAkbIvvWiqUKi%2BbVjp4mpd7GXOq1Dr%2FAjpNElQZ%2FJ6n%2BGwbmPZhG6hcenvRrb5KZ%2BmhuMfekg5WK%2BCqHlF9TXedK6LDADYhtSFmuz8uiZEs8D8D5k1u2wUhshxqx68vDYU9fF30xAQrodZaWR0FM0RK%2BzzuIX5%2BWSadU7cpBFY74r2FRztIglDnbaqZgaLfexdcfBQMOYB25wBsRTUYtxQxqJhB0VIfJoyFwaYkAxtKjdkKzrfxR7ijzENTTPU%2BxZyn17sFfyjLB3QBsv1mjUxOM275xsY%2BMXzKuE%2FLi2V4Iad5zL9KV3E0yamFWeYOJIS962THkiM0zSHWgSb4M2sIw9V%2F0TcdSMLV7aVrqLj%2BrXrDzmnVTeSJLh6KL4cd84yKPf8M22g2AgAHC0%2FVUMMmwVeBnuWnBX%2BrXtVxnzc6IIMkIXMoHoeZzm%2FxLbBzCoRdZF0JjBEE2c8n6fFiZdTOhoczES4bL2aKJNhOMw%2BhJ%2F0abK9Ioksa7BFxEUVebXquSibXJedVKm62qkNCKAORKpjLXgemzig4lMDL43Cg1mML6MyMkGOqUBXnNMZ0V3O7jfaQk5R675Nw2zj3qEAGULU3lcCOLZUjz%2FskxmaNJjPrHW%2FBXo7RC2veiokeo%2BxfFJcpONn2IUV%2F6w0jLxpAgqCT0ZfbWPt64mC7J%2Fil5kgR1nKXCcGSsSByBxpGAH4WS9orofitI2x8lEusoRMWca2cWsH7tpp06eZ6jGNNLUzM0UGx01uxvJEpt9Su3vOkrHBZiHi2I9eg6%2FQaeX&X-Amz-Signature=08da243213dc7d04747fabaa22f2c345a52bf7bb5fb523d3323a65f2a38c4232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

