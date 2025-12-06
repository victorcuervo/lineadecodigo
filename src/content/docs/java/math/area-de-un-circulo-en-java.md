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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K3RLTWT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbGujrdpHxqKhZVq4Y7gAdv0AWhN26OMpMDFl6B2aPKgIhAJwvYUhau6zePtGtf%2Frh%2F1B3yodQRmkqdehQyWv1Y9vRKv8DCG0QABoMNjM3NDIzMTgzODA1IgzxdD5nMrn9D1zTlmYq3AOnb1M2GtZ2rTWAorTTSxUFgXQIXyv6BHXwgfEfrRr9XfDx%2B1i0yzAyj8%2FdmYKa6AMCShu7BYkgqwZnmc%2F%2Fy2MS6zEoZ1dk0hQR4iLrxkCZKo0oPksoFhExMaT218u8oHJCo3GJGGPSJAaBTfzlj93UbsxrJlAiJl%2FGq4NvvEet1oUyd7ZkA6DVeOj8vWzOKESVKfepIFIMZn7KGimPhZERVT%2F1%2Fk0fduy%2FCd7U0ExNA71Xg4LBdJoBqijgCHqMZdUUumm6B6BBu9RX2C1TSufXo73M%2FJBdMEC1DA1kPfNeKMLyBoc4S6xGOYfou%2BzBlLckEaw7akeZiZBStVVndg2eA1FwW6zKjV8HP4GjWEQ7141a1Nd3NPRexTOPWKcGnuLWrUMnsx%2FxVb6M6yBV0Io0DQXzT%2B5uDncFMazUtG4KqweLRg7mp6ocxOpO%2FPsGHzf3ozFHyiNiPqRBdYHgiaSS%2F%2FYhVI%2BiEsETFb0aPja9F73VjC5ntGLGd51Q9p2lVyJeEm59RpNcxXjSB%2BdvSWsrMled0I0fy7MRr5A%2Br2HlPBPh6l7fc%2FElJg7HuAFBK79PWB1FjORRrOGuI2P31hIsXhC72kmsSEaaEZFHvRMNR%2BFtKkQE%2BToVoA1m9jCU3s7JBjqkAaKeAia4gOAvSfvUfSwWjx0lF3T8YvbXoVEpBqq15AXzp0sW1ZQXNvvqDGyvs%2BtoC5vE1GtSPZK%2FKpnTbKtEtJJl62aBMmoXW0H0KUld99GC1RJZVNs9dO3aD%2BiuZesvU5B1Nvly3j%2FHdjliR9GkUap5hPLzGfxEtqRyErTrq7snXdOJ9nt156etR%2F91bbK2so14LXfUJ34a256cI3emccATR1it&X-Amz-Signature=93c50b5beed73ccdf1660e8e634bac5153ed8cf9192f62a9ac0a8ec94abb2da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

