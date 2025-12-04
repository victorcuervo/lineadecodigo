---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVSASUW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFyRdWCnBvawz8YMKqHdH2fRV16yy3GfYlh4dqBkYu2aAiBFLkFXZIa%2F00Nr%2F%2FcoWWY3X9FfnMUIhVeB9GO4X1vC5Sr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM7z%2Fc13bh27evprKPKtwD8lR4s685qobIOlqU6osGwlVlKddIfLic5YLrGgfFQ%2BWUVYtUTTmCggTaJNflJtiQu24a8Np%2FofNQQjnx6C%2FBPXGECyh%2BJp1c4zAbhPeauN8fyggaZ0EedHobGgzG3eqy%2F653hfqnyUKDsOUceQsl%2BQ9MlEEGIbMr1hzVO%2FduoCRsVhcb2fLlCSa6pzgCM6Q65ga911Aey3acYLg0SbKnCwn8PO1T7iIlfyBoTTKBIGHkb1rpK2ZYgzmDvZj%2FeFO9RsHFFEcb4j6yJTnvcDo1mICIx%2FyD7VFY4fq8MaaPbVzrOJOa6htb6F8fl9PUXCH5wmPVjWie2%2FesZTJqyIyX1MTKQ2GAabLRb5QnsgbiSoEP3rwk7auUp10E8dUQoz0gn20nVZQfZ9ZU8XSL9br0FDHFue72H66rkyNxEGBT5b%2F%2BSzeW0PsHwQDcRxU5wE4CuYdEyHPM%2BcDgrwn5DXeINSSfDR6jWvK3UJAiDXnZ512w0tJ4tGCHg4fwK5CPXwo4KHJ2bXVlHDzRf1t5vB7m2RP%2FILpd7eqVwJd96j7ljHibW%2F4RVs4DnrcWjRenuCoWiD4rJoKq0Yfsn9lDYqkrbCVvuG4JIrsjZGDVrADvkUj8ptfHJp2EabvssNgwjtXDyQY6pgFlxZCdbJLaisjT42Q%2B3BlEblLRW8aO8nCVcOqpiovTo00N29A%2FxukteUp3A3AXri0rTpIrG6er8wZ1EwxiQGRVr6BJu4H135TkmAHSwttKJxY4HnLmRiMGVxfTQpYKkWp68aMUhWRceulfcrE9WALHfb1G9IOrhwGT%2Fvz%2FLSi8JGTXxYpvR12A9XkfDlkveudBu66YLpZCKIEqs6XgXa2V%2FSCacsnl&X-Amz-Signature=44e554b524bdffcc51cec984e8c96f59603ace9cb72b785aa0eeb6ff96eb59a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

