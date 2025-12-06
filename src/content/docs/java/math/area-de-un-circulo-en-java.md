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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVC34OPL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFxEadYoPGoI5MVJNMH3mBJiSVZ%2FJ7TBNNqeNVk8o0kAiB2CskGndJMqaqQo60FlQVLhBRx9AHbIVzWHJeb17y2Dir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM3U7aA7TXWP5GNzKmKtwDwwcSzIwe0ijqdtAeAMwEwPiUCLAbfO4jLXv7Yp%2F3zTST0ES%2BMznDuCro8JN77VSz0P%2BmS1UrF2GYm9HP%2BlkeuwxKcAT7qmr5l5H2B5hMu9yy5%2FleIk098yoy19TOVetJGN346AjV%2B4ATBXdaQEIx9FvRSmOvNkAeAlRpFY6eMn7Dr2GXAk%2BIXGb0%2FFB4EO%2FbQXMdXnQagpx%2BorgGeRkdKnp2u7ERG7bhV7S%2BNr1JdqOh%2B9rzWcHpUKwhD6GyiBjPJnfuWknUh%2FU%2F%2FYv0wvMR2UdcdjMWCSmUn1K6RFCKEAMY5rxVraYISasdqBUsg9d9keYJGiFU6OurBTHgen9gm8uPFUZisr1LAkyECnr%2Ftsh0fyTOub3%2BK2ZQkyJSMxp%2BfblXM3Ycu%2FXZlj3U2m9YojwHlc2Z8sKvCT%2FZdzn1WcR1d5vn6yLt%2FhfADu%2FajQF24NGklhQqEM2rQeEEFdK5yO1c5Jm%2BFIjZe32Np0vuCZaybrGAE6oUpRFmI3GTuP21MJ%2BwaA1M6zF7S5yT0quJp0le2d4gchJNOyZldY9QgsLlBjbMHcM9yTwpGq8%2FV4GBUM8esd61gaVUz9HMrpcXFD4DNuae1jiXrliTXbGM2fapAVBX%2FTeIi5jf97wwtNPSyQY6pgFNqSdBGSRtM04zh4mfGxJytMYwShla62ewfurXkkCmnI8ziW%2ByGB80cjVzKUJORK9kzBKj1fIJxWKHnJGI7%2FFvNAfnD0Y1zwlJOS6XJ3x97Qj7PQHbqgulPK4Z2BQr24jbqLU7FLgg28IYSKWrViLY%2FJhnVO8nN9w7xdhbcYk%2FV0OCI9yTb8Va9XWtwOIPQwdKed0tfMCxcpRFQoeQmC02HTP9dl%2F8&X-Amz-Signature=b640fc5d249aaa7b3e33b69a6c25777fc0182633713ffb2a0ac93d98316232ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

