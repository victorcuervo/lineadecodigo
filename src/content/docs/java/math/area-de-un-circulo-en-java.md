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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GWRG64S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCczuyi8TQkKCDshonhQayjTMh9ZUjWupvVWuT5c5ovsQIhAKkbTClli%2B7Eg8L84LVgg9MSpkIaRhPdYAdgcygf1RyPKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuCzvFpwFqNNcJ%2Fo0q3AMjdIBq%2BP8yODGCkBmMe5Uhkt2HUIbue%2BVQ4L1Wsi5QUCrlRu%2Bp4VY%2FbJ8iZY8lNyYp21blUcMiiFExGzgK2uAJ6iZZfevP2gb3aAYT%2BJn14v6k66lKMFVW7dgna3mF5nyhGHiwgIfZN8RzDmhZkoeFeiOzy4endnCtACEFK1mz3RnZY0x73BdFoSebRl6Ov7Zn1MaEv9YHB%2B4jPf9DHvS%2FKbYS5%2BvIDlFFlkER4bViooS04OcID%2Fl0X325RRsCIBeOidj9wrkGA9DFPXIGUWtjPj%2F7JC3TJircWgvd4UmFr3j0NfJTSo8QyuvbgKW3LFnCS1s1Gi2L3chON4W74cw%2FgFrH8HI2ioqcs9a%2FwwL2KIzVNgpjN4NWbyB3Uhjk4ka3Bu1PYg8p3E8eVRDVX%2FEkqAJ%2BZOx3Q6opj51gJf1me4qNicB4fgcJ%2F%2FNiJ00h3L4nbuS4f%2FU06QctTTAGKyXmuUu9rgl1LqypvRRAzs8uZ1ydNG8QmK4E1Z9MIuMm%2FKKDFwZ9iM0hHm6aIQVPnV6ZR1Zb24dUzK1u%2B5lf2%2FpFf%2BcVIqCyIjiu0sW8Z3BYal96S1KtAecoVlQqpLY59o7uV3y%2BSvzyG8I8hR%2BAcPvViHv24O9JU7Dl9Sx3jzC87dnJBjqkAfdOSUKquzXM5YhjanFx0XTJBNsrfUa%2B35ldDmGcDgX%2Bl5nONd8nZ9YKboqRzaQTgBWdAA0m8MqLL6%2FiK0NZrsjvIi2c4QMoImZuDDVYr4ebIefEfB2kat5TOXFnnTl4yVz4IqXLZ45f97Sl8gFcZ7x%2FajW3qNSm026GJsC57F1zc0nuH2rQ0PtEyCdxAaXhxzPFJiYew6XOVPSTNHgubGJ9zzVo&X-Amz-Signature=1ca3eb71d01da44b1d2fdc698c803d2a961fe55be67270b3f0a6fb7410a62a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

