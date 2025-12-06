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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SB55XA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHnFOqSZBTyXeTYNY6XHuO5VDVqgD6mJqwUY17dWHnGAIgTFF3OmOJAtpegsWhS8Us1HlMihIp4zE7IzxtXaG%2B0woq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMVcoXV5GLH0rjPxSSrcAxoKxIKKyWGQfVRd4jrSsPJOyBWNWhxcIOPjFcdjXYpIgrCW8fcKjckOCG48fkB3ClJ%2BGtYtP%2BkSLJHnu6ORtuhumKz36iiswIlmcac%2FZC%2FfxNdim2nuGchhOK9UJ830c%2BV8oqcuw7kqCd%2BWcFM18%2BWWj%2FMPBqv7WvKv3K5zV9uBzM5EbWOhGMJUMkofQ6RT8wxHUoxZUa%2FmVj5H8O6zKPO5EuiUg6yGzmB%2FW9TKrw0Hzd3Q2ZGo8d0y9qa8Re3LGAJ%2BWPTU5wh2vAJlhzZO7zmgdKdvyUUmo3MY5su5eeobHwkDAUUa0YeqdYh1ravV43yOKg4QGPVgjIy8OC%2FyoTpxY8IFtS6qFLUEdy1N5jL9MvaJ7WLGCRzNbRcM%2F4emoZM%2FSn4TCZqJJRf05b6zLFlTjswKAdESOJe8%2BUod6Q0I9swjW1GoM4T2oeGkxyBSFKx4k8yOCefjtNTZGJh0ySpyhDD24HlZ%2Flvs8pSWAI7j01x3BPLxJE46BZSWNIJn3PVhYy6RFZKTnb9PV0q96m3eOJejb78MYiS%2BE4suCkJEZW9jlGZca1ukFFGgPA9byAfe%2B8BZOimaW0PttKrEH0Y3Sn4ofLxRYDm4hnQDahtE2zqAeQ47GxRFJIuEMNi8z8kGOqUB%2FrENvzKEOzsJ0I7RKH1rHHmJWD00cnfnABpweKyGQi4dxumyIhDH27IzwKHuY69zwJP724lC6W8zQLx4s%2BkNzudWDmCk%2BdNfxU4wkWFkJYF88H16b%2B6uGBHrbBfn2vNbH0WzE0s5NC3zN8Iz8bLfi7Q2x%2FCAitkEAdvyt3RJe8AEyaHxeH%2FExjaED8WKHjz5fTouoG4PtOHUFpMefdcOzuc7qWOI&X-Amz-Signature=7a7b4e72ec6cccb282cce302b533818cc7abeb4a6ff85396cdedf038e1e7513a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

