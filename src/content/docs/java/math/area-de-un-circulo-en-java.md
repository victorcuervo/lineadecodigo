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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUBLBU5F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjuMnqev0vLMQvL%2Bhikt9cBJ1fWPWCSppt0I8w28mq%2FAiASmEDg9UDpoXtiA6ZjXkbG1IWP4uzwevgtUtpC8XV7SCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06PuFtI7us9LV4vuKtwDxQ1QqaNozZs2d2DTuztaPtEKgUIiEcJD1444mX55r%2Fn%2FbPIfgE%2FMNCUQPpbw8W1b9Ux6TU7q1G3XXPUbEEL8rKfpuoZh8Bo8CJIN6ZgKUPWRuwHkuIGs2AzOHj9EBD9y43a2l2I%2BfI5LwUnFuspA9F19NBGrgRSSy%2FU%2F9YYNW%2F6M8kb%2FT7g7iiIOM2JreXVTO9Hlyy%2BIgVoNJBlna6w3PzYQa0Tbr2Jt2qjG8%2F3rgWLTAmj07gG2UwxvQY8ao%2B9WbdnlNbPWzHCirdt2E0Ohe8B6rw4Fwi%2FD41dETPrQJcEiazkMfIB3NKu0SwNVHTgiR%2FB2uooZCZcNEbaK%2Fp9Qf0RK%2BidtFlS9uW%2B%2F1mxZS9B0SIE6YS0PVOqfREdsj1mMwF0kgeOJ4TOPgBcLMdkDaDx3jbnY0igZnXzwIQMsGZZ%2BbQ4nYuVSSvVy%2Bb5eMhnLyi3dkMofOnLE0036whTOXlUeOk3hix%2BNLfJXHfP1BHoCu7Vke5WbB1fNp1%2F0zuChjjEjdkH4%2BphnHow3cXNemHwrn6b7PMYvArqh3tDghk%2BGfgteRkqICIspnmONo%2F9LoTmTUqAznZe1U1yjIMekHbjjVO%2F7mjKKAhSNLgg7PzT7e5%2BDuY712sEzolwwhY7eyQY6pgH2k7%2Ff3uT6Bv7KI8vTy%2Fh6%2B9tWdkXnxkic8kDgrfW%2FsPk1sOTxW0ryuXDqb8msz9ri5xlgsE7xCI6giNzWo%2FQkxbkwDY3OLdY6qGwCKGgCUKLuAnS0kgGnldJKaaBKWey3wa6BzKdZbqMzb8q0lMx7UCH8%2B0PF6UUIQfSdy8uvLEheAqepcPfHw%2F2qpgqml6fPJwussE2PHF0TK%2BToTA%2Fh2ULdcj9Y&X-Amz-Signature=c0a3c52264f6c1f00d9751e09096e4fc52f4d92ac302845ec7b33946a392a7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

