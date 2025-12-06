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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5UXAJQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm8FOjj5NO7Bs0Q32xpZP636KYpesBqBgxPEORDqSGAQIhAO44ZXg1O9%2BDSqxC%2BL7%2BwkkMf6yThps3fyJdy4kBxsqVKv8DCHIQABoMNjM3NDIzMTgzODA1IgxKN8RtWeKOkLjqKJYq3APqWWyq4EcujV%2BB%2Fmnk1rKanWroX9tBZtThkBQ4QEuE8P1V%2BUSPb%2FqDb0BivpohwpytBcnRTk4GqIuN1wKAHmXOzTMe9cpGT%2FX4RBH1oHDKDSKRceafDsOhYiXOMAkEq5raU%2BKyBvpD9xwgQE4NWzc3Oo05TNYGHberTY8eFTL6B%2FU8VRcLD%2Fz8jFE2%2BdlR%2Fsb%2Bg6zuQ6124ZL0uqpUJat7KWbEqvBqaSAVgW3ssRse6bSd0e9U%2BqOcCsTHHe54nqaOUf9%2B6jRLcC2Jfu42pTpJgCt51tTDCKuDsD%2B5xIq24aaL9lht%2FSbuOkK1V88FiuRvmgCqMa9TwbsrplfseWnf2Hrr7IEQpSDL1yo6IlBsHDlgabiP%2BELUXomZ0JzSUaRhVgGQ2TG1a%2BY8MGwsEpgIbj8UinSKxeQn1l5LlGMMWfUIut90Sw0R%2FcJHZ%2FxD59RfIrJq2gpUu6WyhrJhNzIiluKz%2FC5oJrMp8nK0urphW0t66nv1R5VDzTDzjT3AHYa58GtFuZub1eAtj2ve75AJ5WXW3NI1JwNbdi4vzb7Pfn2dm1Q4Rx1UF8KZLYEFCZxvvMNzHcPAqCd1xQtf0fhSwmPJc0gw9f8VLb8sz0l4EzTAthU74E3IBwMQLjC068%2FJBjqkAbx2B1EOnCpcEmnJAx6q%2BVCsI%2BkiQQd652ndF25X8nD%2F1YCZLtDFM9sh5mZsG0LD%2FeZ0rf5DhNooSYPDgl6xvtFbfbn3NiTJQXsE3JInmRbarcUbpGKjyKFHhqgCU5Racdi1ndkNRWEzAZXWvkgh0VejSqr%2FfyxhxCb4ErvT6irJdjEygjZLjYPcbrPmncj12qS3leNvXSC5EqQAxDmqY6O4OU3%2F&X-Amz-Signature=9a74759239c9d68ddbf2195b72322001c5c7fb272852a5b6849972ed02192776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

