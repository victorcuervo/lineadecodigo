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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QKEUVZB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjrU7zmxfbAzn5vxCv4MoZZp0iL4dHhY5eFf3m7uIPtgIgFUS0Faj6zXsEzthR9Pkn%2B6VtY87UsIQMkZiT3eBH0j0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMamGRrY71se6vlfiCrcA54e%2Bnp5ZQVOhMI3VoUIRTmHyw8rnfM6TuGXd0HtkWOxbTbTi7%2B0C0%2FUjdkk%2FcJKCetrcOGCnXG8gyi1S95JkiDfwe84Uh%2FU7Nwi%2FNP%2Bp7syai%2BahqaJf8RULtEG1wQoT60ftucbR%2FBj5WMGFpiC2i1xs9tYrDuFr6gptsMcggHjhN60hNKCmH%2FvGAWfzObw3Gy1B%2FElzAkaM7GkNM8d9ws%2FN4ldDZrsBa2tb2i0%2B1o2LlGRKD8b5EaevaQgS3N%2FKqpS67ECsodbAAYA51MshlNCYT8oRHJUa0XjIfuiRRhZhIPs73f93qxIK5L3qDzjIcF9yg9eFh%2F1QhKAiPA87BtrNxNyMNJIOe1J1Z7WyjIDG9J4PtN2Bb925Qy1vpMo7ti2FryJwpZQe38rDyKD1AMx2ppoE9843bjLTzwqdVm4B4ptB89zRBuJV%2FL0OQwLSdIrfmTzJ7BLwi%2B%2F4DjsEh4Lpsf%2BtUo7Fo28H0kivo33jPNaJUo2RWRunRmGb8nj6TuqsmSz3%2B%2F4IaWo0eiV4%2B7FKlC2n8VbCVMLzrr7Vp76fr065ZeYKfQEJ1DaF4XriBEhWCzzUf%2BjOKDWxqFfbOYwEUeJEc0IOWqq8HJ3nhPpv3tpmCJI6%2BHDgYDRMLvy3ckGOqUBR3ha6FhvUhX%2FmC4R8eLlQj78v%2BXqR4p63SQ3qo%2FIf04h%2BEU%2BSSCT3U23bB4s6OXEElm%2BUkswFXxT%2F0IN%2FVg9DpJNuL5v1hchHvX8Th1S8k16LvFB2D%2FdDiSYtUUiBcTJWalT3ne%2BnnKvjj%2F9Eu5%2B36Z7ufZURvMOe5j1E2DP5mZvu2HU8s%2BUntjG%2FSJb5xyKZqRnzWV1qS0GncJE5ZWWOD1sCM9%2F&X-Amz-Signature=7a0e9f625aa19534846906ada875c72aa548384b45ff6a2fa1cc4f32fb2828b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

