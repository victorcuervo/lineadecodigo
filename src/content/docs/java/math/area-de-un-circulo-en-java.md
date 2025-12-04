---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CDDRSJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEO8ScoT%2BADC4CnSQdgekiMtegk5xUGg8x6mobdH1bx%2FAiEAoG4ZCowM%2Bz6M5%2BFPJ%2BMaomWUvAxe%2FmZq%2FV8tQ9AHrAwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHj5WEP2fNgpW%2B50sCrcA0okTcWxZYWC8NB42r0AT%2Ff0y8qLZXE3T2hGxOrJylAgQN1IpnjVl9qMsProImws6oDU7u1tKpeAeQw63ir%2B3En9KNjg%2B6egHAaxSGePIh%2F9HR0Rg%2Fz9%2Bf8%2FDX4dpPod3Xwy3WS8waG%2FobOmjDvTXgy158JqgjBSMRJ3pboOfi24DGb1T9w7wo%2FGK1GzOQzkKXbF6YvO5dc4Yc5acJB%2BrgqaRyZVkkZVbJa5GCr8ZZXQMRnqibpuNsBa3uktLPtZ7gTNCYdNaca8uOHvJwGxhU5kRszUtzEGlVHKOZiQ8BlRWpB%2Fq5W%2FZgArwPVbQAXK09bvyTjBEUd3rnzORfscEDLsHUZ%2BoYHWVcCxj0OvxCSOdbwzBpk9X9BosUqD7ItIlmznUjv9I0AEVXzctRq5VqFg%2BJms4VEZWN7jtoBjLoZ55Y9zfQ9c0Q%2B8LmtgmuRpo%2FWjlB%2Fc10N6V7mp3KGAb7LzA8gKFCob0nv3ep6LFMxSkiLTKwTwN3COvLAMf5ej4BZctg3lzAL2SI7hdsuWiEm2DdHy%2BrqQ6wujCzNMmzklv6r6D9c21n9Z5pWfOb54HSTsR0mfzLeaSmA7IKVrQR42ep%2BUDmuoof4g7FcqCfVEfIP5qoZID%2BMtO8f6MOzUw8kGOqUBIgLgz8DMxw%2FJeHqVZon0lZvhHv1dgS%2FKuxHHKIiNZolC7vSs7DcgyIrpJZ0n%2BxK5clEJH63hCfk7PoW1WaDTsd8y66p%2B9gi0Tz%2BuBw8T%2BF%2F%2FrjgVwKRZq5Qeq438jonHqmg3gp9ZQypUDYU4WmclECshtLJPloJzxPHINHRsFWknJ%2FqmSvBDgij5T4ek0Vyu0IYmkf31HyHKBySJbMl5TodVlmBP&X-Amz-Signature=6db7d498eb3931681b0f8505d53f86adf088e36d880f3ec34e8caa973a40758e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

