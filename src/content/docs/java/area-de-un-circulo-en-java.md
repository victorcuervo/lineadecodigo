---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2XNE4E6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDH1W2QWr05p3EuY9Di2qXqK7%2FHIMFwkczsv6sWbpkYxgIgUFpy7sPocQ074CZiWnrLHxoyaHnQJdr04RWvszXZS2Uq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNchFdLv6oaXhkCpQyrcA5nhOU%2F3R%2FsnjpTVIVzvYG1ffopVz0tL%2F%2FqdhlJ7ciSiPg46B%2BNb27%2FudRcD64cFM0Z55Pfm%2BFbTf%2F2QzOk6SzcJTrbqTIiNveajPvlmhA9F4mihuI%2Frgi91R2JleFkWo5x7vVn5S8AYdOknr5D5oYWr0fXR%2FerzJGvm7gn0YrBXvbOrl%2Bb%2Brij2vMEfEVe8S3TgSerbnj7ayD6pDxwGSA8gUs4Q%2F1kvNVX4oyZOwWMkaDTiWyFS3BQqBg3roZo60zDhDrUk1udCjfAcdw1seW5kQxdoWHrR3XQjbqnTZ3OH7hbXeSyHlnUiLzL2BhxgI2hqFbDEjK06E7EaIzngmvueNtJ6eS79%2F8pjOFhOUf3%2Fel%2BpSc1YgLDWRbXMLUwDRBr41np5ysKY75%2F4ra1M0ihjETy4WBcASQlvjANoPI%2BA0iOpbJmgGfy2piLfrzQFAFxJy58KZy2pvnsDzyZgoS84up%2FyrMvWaw7ejhQ5yMQBIcaLZd53XIrbj6ybGzttlO3D6p9rzCvegZDJCaLtkdT3hPhWerF4YgKkDFvfsbQZmvP3so%2BW7zQoncDgQPhciwJGa7v6iMzWDUiRuP%2Fr%2BVBvi%2BHI8ZlOgEPFQPO1iQzPoZ7kvo8s8eaKwYuKMOvcwskGOqUBUg0ZVF2SX6mHhrrsMxHAtnJ%2F%2Fq1N4c6Hd8JoSt2sXa1PskMZI2%2BQ2ZqSZ7mVmoleQtMGPRY2OHRHMk8zL%2FJ1WWGt497z%2F2oNQ0MRLY2ly9lSWfovgQqqnkz0%2FSe08vi2SO5YmynDznniO%2F7eWA9%2F4T5FurI0NLMnLVlsEG7EnZq0a8h5%2BeIIbiq19AIxqdn%2BTMf6w11loNd6h8I0J6T7d5xVOzxw&X-Amz-Signature=38907bf1835308274fc359ab2763b3e13dd87a1b5ee2d48b399072d3d8b04a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

