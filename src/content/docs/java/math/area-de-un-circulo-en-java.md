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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA7TRDG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIER7nCJZtItN23AkzdBvVW2cdM8x5XYJFvxu4q19C1ZUAiEA13tm3aHwk4TG80co2E8AOcKf8K6lIU3wTpHTKnilpvwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLHpD4wEnU7yqYwH3ircAzwJiDa6XReGuh88MmNNKv%2FSegTtygwLbrPRq7DbFLFYIC0C337D5oDX5BHu9Ay7ErFofDCDyOeyO2FTr8MpjWTI0c0bpiEDANYxviOuUPAU69EaRT%2FRpu4PymxkAxr0QgExzwTygwWfDg%2FmTTfAgkGSxRM97N9LEnEWE%2Fpj0KuzRv4OkcG6BRB4qhUFNdf0ljraY5xUoqCieSQAB0HLjnC7GYwwRM0vkkEQ%2B1i%2FYMOA%2FSTuc6xKRxUbj6ylw6PQZkh5yUErRp2V0kyTV0mjcIPUiITZjw4vwm87oq0L1fYI2%2BJs1ohX%2BZ8TRAcdmXmDRVUZ3DteXtFZbylgj2dR3kLQIMrW9lEklkTnTHuD8Hc32Y%2BWtW4cbpqiKWdQQV75NC26crMvB6zEeaeqQFjBG6L3yW0X5GY31NTI91vpU3Nv%2Ff2uMX3b2rnPoFdG%2FezT5Cy1bz7oVI3h2QwiOFHvPm8YY17TKycrPZb5cIdOObph%2BVvGaHDOSrGRfY1ZyOxJgelAo3CLSr1ClcW4625%2BhtT%2BuliZwy7lug8l3RsydKLh8MUlVJNF56MB34A%2BHwoevIiy7nL%2FVMDxnp%2BnimL0IGVORMGgQdGmWA5SEDOReQiU6yCk%2FvcDZlzSy3EmMPL8zskGOqUBspqoILxE7XHwjjuEmFKhywTDAm7JaISUQLepZkefobHfQpRi5JovWJn%2BpVFgvxAXI1%2FVRrK%2FqVgTcduZx9lWhbbA4tYxU%2FoTL%2B4YGY2TysdElGc%2FCLkZ2jyfSU6jAl%2FqeihLOLx81q%2FFYixbvNlK4K9O5o7FbOVFt4Ff3huX%2Fb6oMS43%2B28jOi60zdTWrRqzBTz5LLvzE9WUkHbQJ3Y1ZH2Xq6hd&X-Amz-Signature=18bdcfb64791a513b332628c235d01171609fbc80fb814d9e97abd75f4f3fdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

