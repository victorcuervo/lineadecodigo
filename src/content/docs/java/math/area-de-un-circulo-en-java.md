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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNZQZLV7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHjMa7LsRiaH1DR7gu5XosgTgva9ps7HfNH0CxwXSEwAiEAjqFZOwMzrrtOywmRfj81U6XNIiKMdhZ98x0SgM29OOQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFaDRi7tBvsO%2Fx9m6CrcA7qVcjdasgHpKR4Bv2VItDbZTYJsNGoHeqojOK6zu%2FMKSpgDYCDQQm2qZzOe9x%2FNbDRBaWsgAtBo8TzPizbRhjqbU7RsRgl5KQQzIaczkp2%2FGKo24JyTp6jWGUyS%2Ff0639g62bgEBQmKpuXIFXw30N%2BG83sr%2FXR%2F7wRGBlWMN8vD%2B1wHgPX8hXyFa3%2BqeXa1hzcBGaT5DBCKvWgr9YEU9CRCqOiCkjhNyRl9x73pLsBBkfqhm8QN8n2%2FGSfVrkgr1E1He1m7mumvqaKm9BkPcRMpMezqDeUbU%2Fby2uK2LjU0MdfcIr5%2BFT8SL9G%2BHVCWPIPY9%2FWwbrN4AqKVsR%2Bx6igjpUJTYY9QNrr42n2cgHRQbmrHgrrpcXo7XqEcvb5hseGybfmvNSqR9gaJuFL7fkgN6gaBtiZ%2FvUR0EYrkak%2F3Kbx%2Bf%2B0QBjHNVFVTwdcW1D%2BCYhb84GGbb1miOpRle8glqAAe1SgitoVIdNJ5rk9CutZPltAi5OERCshSjR5G94%2BD8C1u2ipX0GYfM4hqY10smMaWHI6THQgSfCE5Gv9HgAuBfqHJPGYXgyhyyEgEz5sGv1mfmQDcy1tCv39igjr13L0Kk0urE3dSgWkZvBP22Ul00c0mSg4por0uMNaJ0MkGOqUBnRmXY%2BUsSqwxi4wwt%2F0QZAKsCyT897jlBcHm8VYbdcB941ERzxnXlEYPZQ4YtJ%2BBykC3QTAbPELY9%2FivB4Bbi2D5VH5FwlH5hvFKCq2S2rqq3Dnxy8nynnpEIMp1e3pKOD2Y1z5hjmPGU66mp5NJlnlbtz4DUXU46CxvJxoEMCEJyz71vMQ7zNUENFmIn%2B3cf7G5d59R4VjofQDxBpl5SoBcq46y&X-Amz-Signature=bf235218e8b8f6adac4c9e67dadc96bfcd28acd35001012995f692467bb96400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

