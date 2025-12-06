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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKN3HLI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8EAP7rGFxhqlraJK3lfeU%2BBw6jG9loYhsnpMOQcfObQIgeEJmpvBWtOclU7%2BMUJPE98He5zJam3YwyK5JswTpB%2Fwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBDwuLtA%2Bb5qpM3FKyrcA3vieE7mWtNdtZsIVTXzEj80DGowJuxdK9JpNsrilyHzXqqqQkSw3L%2BOHLUkPv1Dv2L0oNSN8mOyqNhnUJKLKkMsppdzPiHxeVfAJje%2F%2FeLWRAdEigjq6vCpp2HlaOwkQMP4R8e9a%2B7pfXai4q5p%2FQlqJPX%2BBlKWnRftDv4XukGqEN%2FWEkGRvFELABjVnwLXKduqQhCz7l9OKPsS%2FbyGfo%2Fl8FQ7EJYPH%2B0ccZ8ac9KJ7U4YQWEd9YYbr1KqJo7ljpsmJDeqArLX0CEoEBjhlklequ4mSecZuNAQSOeFPz%2FTuv5kkfSq8mvzPx7Ceorxd5IVI8gIG%2FMpLmyB9ZFsU56fWu6jqt95JoQkBvT3TAFzXvlqfzeqfCI0ik7MQ4pwyRE%2FXQ5p23JyqeTA%2Bpwf2RM8fEERXq9eaUYxTS9SI%2Flq7Y3b0p4fhK%2FjcLauvtMC69wkIzkBbMEIOZh9wtugvxn0K%2FPXrqr72eGpnX2Rtt2SMsdIAH6ZN2uQt5gw0MJhGF0Ow4m6S8Pax%2BNhlS8GpjBjT8EUWC7y0SabdNiV%2BglRBTn8IPuagBe1KFUyOVsNP97Md4L5GMh0jBXOKEldBq9p0jUu7XmBG2NiuyyTcUR7bKP%2FRTx9CvxHI3XmMIGn0MkGOqUBjgVGdmLc%2BnzN4g56rEUbHFoYhWDemFBqIvJ6vLNy7Y8FhEHA2PO7oP2unGn4pgAY18cG1VwFh1CRysJi5pQsiKx2Z15A0g17TYySk9OA1AY5cKdT49ID95Wf76MesugVWxisVdoCHzdQUQfBw5qiXv3kGztz5iN6DA7edtE9aLrtrVvysatHmkG2p8g5ONhEYBdbVVM0vRmFy5GRBBzhp4wmSGt7&X-Amz-Signature=5c2d2e7a16c78924970951e2f78865060e57fdaa7032cd89d06bcd4a05afa1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

