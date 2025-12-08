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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AW5BY33%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtjtt1T7S67du2mmHdNRMan%2FPC0BsJGbQ5FkShuzlGKAIhAIoB30r3FXpGVYgFWzxm3lqOE2vSza74ViozLnfxKaZbKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCHRYvP7%2BlkzVMO3sq3ANeg0x4C9a6A8%2FsqL9O2c%2BYmCFJODPmKTXlRIdNRNgMxzp1tFTC9I%2BkrnxPBnOyibwke5XrQdCqCeXAgXCB5j7GL1U99mX%2F%2F6eC4PY2HWONDQi0OUCQR22DflWfoIoPX9Bg%2BqfUog7aYXcr0ZIv6oFmkXLUy9k02SZRsr%2FpATNm64v80XW%2FnXKuWMh7SDmHLqzFuL7bNWFTXkLeABg2E7oc%2BpNjWLK7WZx0I2jfdPrt5L7ZGOw6IYiKW1ay7M96%2BE2sR3FWkrXDDRHkglRv7x%2F24i2%2F8F7%2BejSKveAn4A0KSmZ3%2FtStO%2FP3lMcUOPZlgpNEpigza90cIpu85%2BL2k2lr%2FQ3yTVapC2b1%2FYXGmMXSJ5UNCC2qJSIMoPfI3QbCiBu4Xl9qiaxuq9C0ffzuQjr9i0zRa35H9o%2F%2FCBT2u9b%2BWzNRm%2FIwRYlpHgsSeUv%2FXwzm5%2BgVtSpKEG9SYrpvPziPQZKbuSxnQ6y1EB1BiEqO31Dbel6xEjj6X%2BF2rr34QnR%2FiwMKNyB1jQuvEZC97kVFrhwsMHYF2sp9lKtGFj403g2%2Bpzx3pXBw4UbCPrvE%2BD9Tkn0pmsQ%2BCcRkyPiPlvAkGDUerXV9uXLe4mIi3mrg78m25cgpnimnRqUvnzCMwdvJBjqkAWv%2F0lQYnIkE4puLaPbZVD0go%2BXBHIx23uPLcenjoOeuO5QSsZAQ7m4xmN%2B10YWnfn96TkFtxb3T9v1SNr1BXRF4q4yCujeW9YHR7FFQ%2FXHe%2BLdAeng38N%2BCqD43bQdzqFKUwKhrM9fqEU%2FbbVgzpQMHmKBOo8xU9OEXTPHOt95VB3P%2B6pOPcvOugtTZQETJWzApiDtdKRNUVec3wn2qp7LnyJgM&X-Amz-Signature=0bda981895169e883bde9401b2bc6d0326c8752a3691facc971f15bea3415afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

