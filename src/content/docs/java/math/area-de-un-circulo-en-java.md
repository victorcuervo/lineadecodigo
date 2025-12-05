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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PKILGAW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAibeCtu5qyc7kJX5eMYWBkgo%2F%2BTMOXFcb8sFVYHyERAiBO4Pj9gJJXU9o7G6JxP0h2w5biKtx9s%2Fjo%2BcZIaaOH2yr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMSFhI7haaZ3LbskPlKtwDwAmkuahHbW%2F7GEYZHnYx7C8ZXEhaUnuJMwea5iv%2F901tiT7z9XNNAa5G%2F1RPzFvmv02Emii879Pdq0Y2E0kIWGsTciTgeeW78Fk181K%2FbrL01Ukn0DE%2FLIh17zTgLeOVp5FuQSF11UxMcZ%2BnJE3OaAUEflJq7LnUj83kEOgJeiBhv2T2LEatx3EtssRDv%2ByG5OuyLCTUsA4IW2qwAujj7WbNV%2FG3JHwHy4LwSbEaY0DY91NzRU%2FdSBvzV%2BZz6jeODtjHvJwwtZebCu2q3gCJGD7%2Bo72wreaV7sjelXxi9Fps1f%2BniIlFYJYunfm8QYqzTYbhsdSDPHYNEOvyq5JZPNHzPfy2bz50l99gq9RHgzUB8dCJWk7QTnra6yDpWX94pwg2RcxDBUD7rjlTwWD2Rqa5P7nBl0UIM8RVGT4KsBqmrUspK9xu%2FsQCDHMyiHgkvfHbuNTxijzo61ILJr1qjFH%2FL2ZGt3GgHyKL%2FrjDdFhR5rSw%2BO54y%2FFoIhML9G0ZSaofWlTyMA%2FYxNbOXiRDMg6ACZVCJ3Gq2B5iGR4s%2Fc29yIpByyNuw5cR1yvoeAi5%2FXLKL22lgNcRhIkiU54jJgDJiSOlkJF5SVd5F1iR%2BjTsxFFQw2rI%2BpoUAZkwnsbNyQY6pgGj1FbuYhFlRO1KNwx%2FKgN12cwIdIg6KVIqK3k6t4LFkncmjsDx%2F5HfwyXIPiuToMrMowfcr%2B1aGCZi86OKBcs1uMMIDZoDU1%2F41mOUeGpqcBjcwaUt66d9UH7nLGH%2FVlw0p9Vh9VjdSSMh2zEzjx3Yn7neQ%2FP3EAtoSX6V8715v6lNBC10%2Bd%2BPuzZPB%2Bdh20BSHFbcCMTRLfgQE9ywP6sCS9v5L8za&X-Amz-Signature=9bde163496253fd4a5412aafe65afc9eaf9298c9544a7568a38ea7d65fcb4358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

