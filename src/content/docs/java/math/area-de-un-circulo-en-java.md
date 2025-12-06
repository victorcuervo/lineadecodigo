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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QE34DW7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoU0plKInwKDV62XRqFI91elkDjeBxE9vpurbhyua44AiBz6I8U%2F0GQoLcjMLO5q5IWc9fSa0YXzBrm5SWH%2Fs6EtCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM7XZllQxGFh1MHSiyKtwDI4HNd8Sg6ao7Gzb1mekVJWhmcbESWi%2BPtgV7KDSlGMQha%2B6DOZ0vN1BVlkBp8%2FtaOfxTjlTHTHQAaCDfNEIgt6Xn%2BpyqNdRl6wl0nG9jMbxK3HofcN%2FLt9l%2FlQDAmMlgRPQVOXXzCTTFFOcHtHxiftblMki9u5Np32yyThRbEyWeCwrOPpY%2FWsT2q%2B%2Fb1yFxrQd%2B6IKadAyL44FUmSO70ujb4xQDhjlMvKWsFkaooI3EdhiLlI3I3peAUvboLpuHBfLOj9KE7tt%2FWgOU15wC6DN7yWFsiywiT1WDmp2Mkf7dFvL76lk4AuYAbxTkt509Cllo0FZdruqdu6Gc0AaRfYAZci4zGOefJTenloWs%2FWU%2BqTVOG4Na3UmnHkO%2Bro67%2BAgTYADCZVWHncmyA6Qrxtk9NXUhz%2BDu0q2qNlUu9JO3v%2FU85ZGLPbEO%2FVnJgcNs2%2FTu5D%2FV3T9%2BCEibq5xLpr3Iuf11CWKc7wCGWCSCWRTUY1yDT4F7ScpWgQz4GBJ5VRJOcBDGy2EbzCuNCZYx8A%2BoqkP3nFaVB9Y%2Bxqa9dOHOsduhX6hPXxfVgsTpLnejDqh5JM6RVexJ6bQH4FdSxpATjtGnPWV8yS6jtnE1RvYXgmluXmXEFVWR6JIwgsXRyQY6pgFvg1Q47t2mdldHygA9IM0Dr79tEjq2pzZsJJp15AImzDaKDY1idd071EjjcdBRHodeOzotlby4JIafpyHzum9dcCwinmmR4F1baEMrHOrM9q%2BCVQbQviN3pqDvSAqY5xkDiSEhM8JMFtULsoS%2FWlo3li5yDCr%2BzR9V9BY9c%2B019L8J6RRlg5Jg5KYiWn6g1TBWa2DZtR3fYSgatEWV5XgsvMHkqjMs&X-Amz-Signature=d5ea2df9e24e70237e1cfda1172102af229959deb45e853dd8f82fa75e320b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

