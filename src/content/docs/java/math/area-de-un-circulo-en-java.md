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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LSFN2JD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T200441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLmT7SsIHi7U1xsmz%2B%2BsgdgLqWT2pATfHVhc4J7%2BxWKwIgO8RWm%2F%2BgkbW8rpnScKxxGYxguzfwHGEt4apLv7CztxcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLXrKEXMagCJZGZAyrcA2ugdzsW%2B12WTsG3L8KsVjA0TMn0GHPMFXcfijeTSy2HUJmPdB%2FuLlmRptUax8I7EQq1dkpECnqaWgS0ckzCiuiWrjvgSbvwsaItQW7uiwQYhTtb1C%2FGCUtkINGW0n2I1R3DlWk2aL7w2mHkRtbOz%2BfQM7CTiwoIaPorrhno8MnAcRNSYKwxBlPpOKm0w3jJ%2Bc5%2FdJBR4NPtZoUdLOerHYO2vYQe3SUFDs1hwe5VZHHhrPbdxEwwI2c3UMijLK8a4jgEWXGw1i2zs95wnQrU6J%2FaXrhe1so84zf%2F%2BRj9y5bxIGQNfRLxQsiy8NyX%2BT1RWpI8n5GNjGfgQ%2BJ6zUDSagUGiSaqolRonAt6U%2BhG8NNpL3TUsFulUbQzXUrOurg4E3pLxEWGSc%2BwFBeNbXxwkmjTa3dzmhxi6n7YlKUy%2FcDXvy0AYSU%2BQiLNUTmrIJziFXa4INnGV2MRDRbur7hImiaNqBWzg4HUtSiPmdr0ZdqmTFYccMnzGJ%2FRK2Q9yER3nbW8IsDqiTLFlpU9emQ5XoneBJm0R0qsGF%2F0wENtUSoAqEKFygqyvGbabFgfOWJBBn%2FfIguyaz%2BaOWMST1uToGspYSX%2B1RcuA3VvSqnoSvA4zCDLJjEy75rbj5CmMIyp18kGOqUBXBk2JEivUQm3sq7wcaTSaiKNsUu2P4wQn%2B6MMBp%2BdSY%2Bg2QK48l2ELinOEFODbDCJhEE37gFdQ2oaVUEgrIQBfaM44SFOxX8WaGO0Q7tZbuUWHrPwSoBHnrTQvDtq1Hkxe3AGoB4Smjl1xd7mruqACh9q9g6NFn4n%2FjCK7SZ6U3vSxiUAiYD%2FftHhrrfmTESSm5GIR78xEc2KAFcseAVUi0tOoZ%2F&X-Amz-Signature=eb7d7c06b1e266be186acf0ae26f41a8fff01499802b038561d6e158a209e364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

