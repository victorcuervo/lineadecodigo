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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI4EJRCH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV4b0FD29QSlylNJwSBTbsxMV1ixuvBvs8eKGqDajaCAiBWu12d4WEZhC9T3DqdFm9lRfCcCHRZg0sS1MiPv7QwgSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Qm7ErGTeP0OjvnCKtwDnG3r55R1kkdeQVOz4fvwiUxXINm3Cr1WfGpGJe1ByaCqd9v7qS1Lb9Mqsd2EeAgoGJoCRzVgpTit7XETEPFtX5N6W9NcSqiGv3UzbB7HtNh3L8FoTW0wqaC9lWxGU2L%2FdiLCSShs1lm80fzd8wmg7YF1V91i1oisZOt3Z2wfD%2BBAhXn6UcsVn%2Bgf6v9K78mXfhR7iwpmm0ograVcAq8fXu1S8EpVHtdTrrm0EEY2lMC8UDsjttA9WQA6N8Qohd65uqVCgJmu0izd6ZFug0cp0zcsg089Y0xaWIs%2FkCAlxKvzZevqe4tZ28YfBMgPvmv3PAgpxjfNnF%2FWr9%2B42cE3Kl4yeAaqnapKqV%2FUVcxFNgNhw6nG3O3c4jFmbej%2B2h4vOVlY0dP5r5jtsohhvUKqN8tBTkB8Du%2FMVnVJerHqrQ1wMDxz8jEKhD0MqroCH9FjEHOM1hqx6PDD6%2BOVtwkZR4qxN1WYdCIMLPlCvS4nJi9YtCaFbVHg5ez3kHi8SVtibZvRfPm%2Brc6Lmba%2BOizwQBHHNAuk1rkQ6%2BESy%2FHujYVUe5Df4QKmN4yQiLJQgXJZgAN4gsMq5qANcAeC6eqSMFd9txSXB4nR901MRE6jx8%2BkNy%2BmQk5av5fp3JIwg67eyQY6pgGz%2BYrVW%2F7d6enPeyeuSpxVMB1kRZqaiz2j%2BoBr56ELAnXNiJbJKWL5hQ2vPYIBK6K%2FhVE7U1VlAR6%2FUpRMa585Pps99VyqRZt0tn%2BqSf5JMssxW%2FQAo1ztY%2Bb7b5LSfCh%2FAKZeGlqPz0JMT42vkSbI9deLPFBCaY7fz%2FzH9SVWkrMVsmgi6eZV3OWBMyTIDWbH3MX9I%2F5x2E1XVU3wVoOeCBbTim7A&X-Amz-Signature=c100e05dc4d9663c17893b5d08cd135248fc4a51bfc0e87092a19b3acdc0208d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

