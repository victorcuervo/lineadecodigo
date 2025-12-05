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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAI4CY4I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHkfj8w4CQj2LSbcs2yk0Bj8hM5hM%2BVe%2FlSag7iiP0YwIgIGYC65TGx%2FZCKjyypHdOYAJw4cGQCbMgBQ2BR%2BKR58Yq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDGB4mAMVLo5qNm3qUyrcAwZlehnVtXx%2Fx02OYUpc4qr8KvFfyT95I1EIpGqjmN5M3Jjb3wCKPhkSQSaaDHtVheOo3whCBPBxHyX9jboP%2Bc25edxzePSgVIFwgWOlpGnfmYmqRnVuGjy2hyrXEmblKrD%2FVRZdQD9zHrq8Tyfs%2F6wXu%2Bn4Drk7hDb0h4fLCc0KISAbWXfZfLjLa1q1JTaxEq5F3oosy6U7da3W4Q%2Fr%2B1qOJO0DQE75CEYW5LYV74C0ZmaLxeBiYE2q5CSF5EBRc0uQ225vTBI91MvqC%2BP8iN%2BiBKqSw9MXvYOfyrOeu5u5414U8eAjTy5FZ%2FWZ6wS3AkC88Tz637x3c1opkfgcZkKgAHI9pdEmj3tiPwTBDz2jRhdVMBCqpKK%2BSpnwbOur1jT4%2BsEQcXuSZpvvex6aJfPE%2BgShT7lEN2gtEJOEGckg%2FwcaIeQo7JOI%2Bw5qEZn4tP5KALb%2BecntPacOuCfNNcIK1pTvk%2BW1lrRTu5jQEv7HVCbzhLnn7jcMUanW4V1NEtFCFX7QZJevzl6JaP47Dw1sSmaRpcR9EzKPySJaaHbRFAZBP4vBkft%2BHkzjf2shFosmTM4fLosiE5%2BRP6lOf1Qj%2Bj8kIHHmcFHvgJliaCIdzaYysLPtpWj5cm3gMMHGzckGOqUB9jNNVWdhdBWMlWVlvrURc2eIwDRXogagenpeuPwfh6Y69amqEEYOyjkY5nSnjYzJOimmMMKJij7qVh6n2tW8g44CnX%2F9w95iSlXfty5v6Mav17Xct6dPXONvHYuMHwgYfDV%2FRYg1%2FPbo0RBc12xUzOJ5amZCN6yuAR3ZYhkCD0bzy%2B8tVoPwfobVfCTYhfdmMlJka8ODxdBypkfLgnxG%2Bsu5Vrxn&X-Amz-Signature=a6873b8b712a67330da37999c3e2d044db621ab455e643d03f7420103cb79dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

