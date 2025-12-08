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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJB7XCRX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzfWC9i%2FkKhsPXqJ2VBmEiI%2BIR1Rh9XeSRA2qAPgP5fgIgZ8GiJWcQdEk3UGwl5wjtzBUjSeMq9bZHmlGbM0k%2BxUkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BXbGBRS2FXlQb7nyrcA1WACc9whf4UU57CdpTJ0NwEABNoyTLYkuVv6b31GFbjlwcmPvcNhASGIPMFfhjX%2BfYELX0VDTM7w38ZINZhnmx20I3Ea8zDzFAjijfV61C%2BGbmbRJFyBmLn%2FJxd3%2BZNUlyLrxm82QjDYJxXLLQkb7nTziz377ljRtv5ubDNutZFKsSN4v2K9ZGZ36%2FXgsYXVmuTGjc78DZqXpz36Tdh%2FVO4PiwPuvR8Vxubpi8VFHdBTzrbfkqZlsWNOLDQRQPcLKuCzQBu3l5qLgiop%2B%2BsA9J2aC0XkjqtC%2FZ1gm023saMH355pYb7Pb6ws86NyZM2tUCFOY%2BGHywaaWhG0ifUKneH%2Bk4nsYVI3lLfDnvFSpXdIVWoFlbOKwjnJXzvLqUKk6%2FtOobcFiKzLqbv%2BQahfE8aT4s77lJXDtF5c6QarW0MaD75PSRbPjOjybSBXktmHDEV59%2FyWKIg6Pz1WY%2FGBuhMkTnaB0%2BjZuyjWcVlW2GCIXZZ53vZicWBtNw6hhBp6H%2FQc4G2sxpsKB53JgotsJ8e2s0qR8l%2FgRqFSx3kwHYLD7Y6veeDF9k5b3XInVIyyvhL4TUijz2diHfI%2Fv8n9K3yVR9kpmS6yD0rOtYjL%2F1HzXpezsHnBChMgxRvMPvu2MkGOqUBiRZZ0WD1z3W7V%2FIEifIrZc%2FHM2eS%2BcTFp%2BeCYuyaXeYRPhHZZv2QmHxu4AMxLEM05ujYwFdNh7PjHLLpxQ17OXsOQohX8qarzvZJozdIPOHgd0OnsnJhvJdfnw0%2BKwan2kcBTZiq%2BKecSpuZrTQD9n1PqbmkB936TZT395iT7413QDv7nu%2BDz8GvEIYU1E63yFyUNU%2Flzn%2F5r4zJwn0gB7OyOFXp&X-Amz-Signature=c0465ee38d7bf05974e4095625a92603e4bd65bae224a7c4e4ed7401c44e5dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

