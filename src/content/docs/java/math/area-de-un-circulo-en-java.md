---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q756YTIH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBQK0iYQOijWoA39as1XmR96rBBRCpX%2Bb4vfSinaEkwAIgZceLBQnr7i0GvwRAnV%2FblZ9PXzcJJ7MAtgF2D0ylHYkq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLBOytarCjgFpz1FZCrcA2mQcDK%2BCZ0LtrQt9FADFhlPxruVZRJMCNmBEPf%2BMkE2iPnZ8QNcK9y6EeYKbl1DMXxsUHhTz34zxkU%2B%2FX6kxc%2BcSn2u%2BkX3Epd7L9WBum9h2XL7J3ChRM2uzhr0UDQrYmiMgcdilmQRsh%2F1yKuN0CuwFNqhzZFok5yx%2BtyJjrHt1AWCZ6H0pwm8y3WVBOs2pk9GFln%2FgKsJwbIyffeOB9Q01PJ3XuCv2%2BYy%2F%2Fi2r1xUST0lyI8i3HzQaFH03pJ01YlKqE5h9d%2FhCu5f9JywzBnipZ1TuVpZd0xPiNhm9SFQOvWG%2B77F4R%2FLkbAVISbMjutxOIqv%2FqNq4zXMVFXGUHLGalZFkrjifyGrt9KFepjiLnjjMjv8isOXRV6BcBvUwheYnMBnl1idWrPUdPEqzFi1m4XJpDOZJ236aO3hiaZ%2FCwwPYqH6%2FfR3CeLa%2FyBYFbQrvDYE6Fd%2FmcecM95zibtTz7hjUKZVplEx81Q%2F6oxzjFNbNrXndR%2BOVzDudPOFlmJ9YAlvhxKJK3Ow32Nk8khiuGxS3AV%2FnSFYHKcYhnAdGvtGOxuYzOMmWS8w6HME8nxtDHUj8oswXnXqGFIuZVz%2FD0p5CnQN8qUJ%2Bw5v3chVmQ%2Bed7hL7zUwUDPOMNT6xskGOqUBXJiGV9dMk5dVddn2lHqgjvawDeFsddcqihx46R01YIU3M5Meo%2FvzUs2W6qBYWhYUB1nSG0QSvbzWSd4WpqyU1rhQZ8zWdOMo0XoAVSTEerdCfjiGNgDE5%2FpadMR7TNnAP9dIRCoTN7uG4WOmelYRgdIikqvSmypBhY%2F2iiKMUpPAf1xwo1tAcbfxjLXn6zzNGDyuHXzRq%2BsEf8yIW5i2evFEFSrh&X-Amz-Signature=d20c7d7c99aca528614c2b17759b9babfe1b82fac0f33be68eb628328d2edad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

