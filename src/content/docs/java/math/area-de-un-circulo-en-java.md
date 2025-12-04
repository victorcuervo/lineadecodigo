---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XERZTN3W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDnY2czeUegM%2FG%2Fq%2BzdLTFt3JMRkntvBvtDfWovCb5mwgIhANrblY8gHFqG%2B6qmHwaGKnIgVTJYTRBAtTiSGWxX%2B16WKv8DCD8QABoMNjM3NDIzMTgzODA1IgxTfFui0lWthwnHS1Iq3AMlDDPpcMglhl1isxl%2BjgNlyntA888OCGs41%2B2dJO5xFD9u3Ix9RHJE5vSUrAe%2FoVxfI3nja6PMJjI%2Btrf1gBSYKVKw6TP7ykkfiSKV8Xuun%2FFhZWYaeiarGNbMOGlBmOJBB2pOxSNyFLqvqV%2B3R7HxN%2FEqnB6QpnGBMVSabbEF%2B%2B5MPRiVkUutIoi9ZWX6T2Fd%2BKa90TKaXcUEEHDMcCBn8Lh7KQsSBrE8EeHZQdsi4t7JdiBCVlcQXiCNBmk7H4xex%2FLyqvySQL1v6GA%2F0g8sDKAsRInXSeqeIZRb%2BnlpDAvY1AT9AJoCHwz%2FMFvlhUhO%2BSQfq%2FHzXIuPw4X1owFTaA36piVdXh7tHvgVzH8Yv0o4g1sHo41i8gNm0RCvm31zBA1l8zIsk9y5hOxn2XN0w6Ok%2BLrlPvlU9AwUv2xcUGmUQFoWzB1WOq3RA4mzya48Hh8QtcHI5Rvv9w1pCQVUJRa87P2oab%2FsmoxWB%2Fcfblx5k5EtS%2FCcob%2BqmdZGW7shZKPXi42fNWMADdXuLMBsttzOrEUdJUygbkYAOXQEFVPkkG95RmT9J5GEIFJBKVTy3fsldzHskSnwa6vE65b5xva0noZqjAA5PKiNQ11mABPoUIdwyBxs4gSQ5zCry8TJBjqkAYiDfegfgMNrKa0wlqRrZfISjUx0Eu3JUBpIWhVRNVyhqHLIXu5Hnc4KxKYOFR94x8z%2F0oB7wJPW9wW5QatO%2BHdNq7dWHKNUUag6yZrrXtUEroETZ6tiWeV0K3zcySJKTy49w3cB%2B%2FijA7jE2jHRMMruMfbIIqZExyF9E1LDiVs7k1ja2CuM%2BnCm2QANQ%2BrxZj2vdUsdyysId9lYSIuQl30yZtn8&X-Amz-Signature=d481a5dd1664f59fa32b8817c084dab186c206d25a7d91e1a9982316a2f79b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

