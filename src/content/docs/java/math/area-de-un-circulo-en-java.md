---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635XY7RZC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFKvZjwOU5K6YnTtCUJNqDcY54uGbVnXKOL77LzNqap0AiEAl1fAxRwTQuU1mVdMfhX3i04R0h8IeJd%2Fsb3KKd%2BhDUYq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDA6ceeFVFPG5fcc%2FXyrcAw23bSADfwd9PPGscAHhGSBykvBFMXqYEGLF5xEOwQ70lCz99fw0zU1yLKg4QdSmFdxSFm0JGRJecCjNsJ1EHPf%2F7Kltz3Zmrx9py9WYeMhzKfszQtcot0PtCJ2i2ffE4Pt%2BflWfRD932M2eTS2KJ3rXKUVxMaLTXEAO3mdn%2FdJ5ARPDR1XiSd7wd1GnJiiXWgG8NU9UTw3mbLyZlHnPwQKL12HmBsddp5ENanwEeEnJB3k8mQH48sEOpNehtu0DwiLgYwZyqqYaYvDx22kYW4T3J13nIqLqbDLk8IxBpJtN%2B9WP9xr7y5nupAGlw5FzOwQ1zjSkqwHQh38Cq2RBTiDSqdRkQnjbM%2FupbkawzFyFIZtH18sxPXI0iZGca%2BO3ovJTrL0kDovvvF0q4WE2M%2BniaNqEKZWYR0azJoEfePd4e8%2BxtGzOSst5k3rP5uOhqE1F3%2FPIfEluFEBs5tNLBAZr%2BBA8obC5Re9hK%2FE42UR2ZjE9k8NgiVIksjzgiTCM3xXKAwGOhKovR6IgqkPVXcoo3CONb1l3U8kkO4oR6WfcyYNJoobOu4hkztNiij3ZTWJY7a%2B8BrPUadfivM%2Br6om0onVTYK8YAUz%2Bcx8SntYkNKDi2k32nEhOMlURMOuExckGOqUBgQK9i0G5ia6l%2FZnAMcwjYgP5KD6kX15AQZcOqJMpkEZanCnAvQFAwY2M4ckM560Ob%2Fscvo4d508%2F8wZ823y3Xgj0lkQ8CnI6j4wpP6ITAdAnf98j2tP3%2Bfl5s7j3S2amKoA1qPyXMivt29t1j92Tc%2Bx%2FFWBZZiEG75hgeA4XfgGtaGBrOmz4dmP8q6Or%2Fz4N%2Bs2LmWxirfurQ%2B6Uo%2B3EjUptQAl7&X-Amz-Signature=de21a84e34a9760fe75d418997705d8c61b8aaf9e4099670ef929567bdc54102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

