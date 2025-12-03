---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFHP7PPR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDpjyhC98UiMAygT8gtbWm2x%2BFH03e2rRruesjWhgAxuQIhAKJUHm6WGQt5V2DJAJC1IPd%2FyM1oJhphCb7Q0LNDdVgAKv8DCDQQABoMNjM3NDIzMTgzODA1Igz8Ja6cWgQVcTw7eUYq3APiDEmEXgUH34dJE5%2BtWoyFgOpB%2Fp7yhBYGA2bFpkqOrR%2BBunAJlhoP3U8LbVPZcoctu2o4oD8UcA4IEKHkEC6soiI97IIf%2BtdV0wvjQ7M508NnZDEG9UUdF2qbypDm4jHCfjfpHQn81N3M5lElf0swnyQWJt5XGCgLCfsbzvLLBWLQIZpTPQs7UG%2BGD3x62Cv8PSRI6hVmQBG1qpIpArchxyI14n8hnTYk1Ampqt6Kphir95CLMM2sNUwBBiGEBbJEAf4cG8oG89SVR9lNje7kfheEEqTlpoTNATJ6phmZbUwUSMjRjhe8iBDlxUhvUO3xHHMr070nusR8RE%2BrfUdbWhntKaOFrucuV%2Bvn3MXWz9zkm7uRSC%2B0M0N97Gc49UCWSBJAzh%2BEVJsIAbDsHqRYGDEOYU4vVpPW3HfrQoZOCwO4wA2MExKpryr0fh6EdaB5tpNxAPlowS9UN04SqwbFnXYYeVkkbCcRpnRBoJn4yuNleZUXf%2F%2BF0nJlMdGZXanvXgiybAGr%2Fyzm%2BCQKhj0f5Dn5WV%2Fn5enb0zYeP2cI3ZigiV7g0tDlBSyqSznu5ytfTW0hsm7FTNQRuxTXybG%2F0hPgc0uedGvaUAiKd8DoEC6hmmDJtxnv8KqfYjDQkcLJBjqkAT9xHKYOj979qfip2aPnDVqvBLh7gX2Tk8gXqyRV88RnjmwP6SHtfntwcpniyOjBC%2B1EXMdWtsbBfzG0poYN8NV9XOHQrIgAkhZzCyMwn7GLHU53gvgzA2TM1xNkApacAMTuLgDpxFrFCbKx3Vt1jVnhFw5w7VSNCyN%2Fm773JeiPhOnZ77XYCvhZZj55XnHEe2TpKZxl1l8wjw9e%2FjYokWo3l0Ok&X-Amz-Signature=5f460348116d0a34b9f9e19c19484f9e77df81a6d4aa1fdb8c89d0b1ca35d822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

