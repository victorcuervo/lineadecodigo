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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJLIWPWW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMXgJ1hfE9ygl8f%2B583e1IAzdPPVI9%2F6H6cwBJVpZzwAiEAgsI3fjyLEunW9sBKlKOWDyxGLuP5hm1Z%2BR01nyJNc3cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCGG1mFUm9gzekwbCSrcA0ESM6bDGBOvbQNIXavio3YgHVwxiiqg02mwUfaa%2Bv1F%2BZcEdXdIIDBlhA6x8Q4WoJrnVL9q2sIH60HNtOzQetfC0mA1gVZ%2BrYzuNXWa1NrzGRMpHNw3vwuSMVshYoGsrwUj7qy%2BTMdBQ5xGVVc8I0u61ZZuioSD0p55mVKZM2CE8d2SvIIFW2TotCZZd0znZPE%2F7y%2BOTgeuW13PqcwxvIaR9sR7x9JLebz%2BEk29zW7Qz0dh6PAVaGWdM%2BlBSEy7o5i1KcnFy6Sik%2BPXF025gwPmzxtgoVJ%2BH8lBQecDSqG568NzeIBZQOW9QGL4kpsq6MlqfzcSfD2b51a%2BjGP47dwwb%2BeADdsa8GcWtEd9wRwNFvJewRze4kLhyca6GxsmoyBlqJ%2BJHu0t3YpRF2ed%2ByFsKF3NfmqdXKGB9fA3rLxn2bui9Zn%2FTDGqzeulEzU5ylC21NTHG77L%2BitMY2n0usHdY%2FGPmn84o%2BVFhvDlntyetn2MvB16eE0%2BI1Be2JGKfVJV6z5jig42wZA47U1p44IJmODeT1CTfBcsJI%2FdaT2yb6PrHT6Q1jncSLIdy4jV5cypEKRZ163AmbsP00c%2Ft%2FpVScePPjQ%2Ba4o4GbNQme%2FQllzwqVlWIt%2Bvu13oML6nzskGOqUBTR2t0eYkpATJ5e%2BJEF9x%2FwGBncb%2B18BdY7yZaOz5VN7uuRDBosaGxv3ARkn3OBRrXpGs07OS9FlBctevjUmLGHfZaMkLTXPbxeF8uxsQsnJQVz7Y1r5frEHw8NFOLwvTa98e%2BMIY9rJClt3h8XWr%2FJQL5WSMnO1dIUkFuPkjfLlPo19nOshRFk6PSFHbNEtFXy0yynKbqpf%2BBNllyx%2FYhdTqbnTg&X-Amz-Signature=ebd6da0df4d4d7399de99d8844511f8700a3449bdaf8e347be9800e80f3f2925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

