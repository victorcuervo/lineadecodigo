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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOH2ZEQD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICY5OZPP1XhVLb0N1DhaJ%2B98a%2BYlZnFvsc7UmFU3NUg7AiB8jF89OzC%2BtSS9gtJOYUgpUsQqE9Z%2B5XdUC4SInQPO7yr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMtsfdKdwGo8r4nJdnKtwDEF2J4HgxeSpFt88IFMZxl1MsIm%2B3G1B5Rb7XaZ7arKBJuHTVDVNHx2r9Z7BoA8mIkbNdQbvNCTJULMAdMPHDf%2FKVMP1bU4xOdhP4iI%2BFUk9glWLE8e2gD7QAnqzKV3oWGMgI7hwN20Y7uog9QmCga4FFMHAhR5UDwHRJUsqrAkaC6qPXvZuJtZhhQpL62XsdoK513EFxs5zCzIkNLvY41zMZt6%2BuFnhr%2BxYBIhVKpmSPFxkqHakmuZRr3W5v7rV5bhxTBbt%2BVWBBDq1MiGTwauLNpK3jNoKGOuiNMX8Ti2cBSZQTfqrKHmjynVUDCnb829EMr1gM3xDL8V3ba8AP14kRPHjRGqgGdU%2BsMqwYkqPR5a7o0s5dq%2BzyRbCGvBTp0PMXBBsk40iqgIxweom5ByRNGE4hDL5CQBxpSan%2BnrDj8E7l%2BbIE9GTvcK2PzA6KnsDd3RqFSD2fdwL0pkZ5xAI5%2F5mDt3SO4OobaPHCuZVeEXZ2RJAsFJcyHB914ZMPiBiakqRY%2F3fe0JZabXceee7M8lFiZFmU8lGFf%2FG1ddIiwwCDuyr3y4VlAKojo1bpuQIAcFJNKo3jRROTnCIk0TZht2Nx5L3LOOyS%2BJKc%2BMU96iEDaOGQBAYx7akw5KbQyQY6pgE5rDGxzA2%2FP2cSrNNh6Yt9q5nJwHqXax7pYHVpLBsBMO0XkwX3BFBsw5LdOllCpzbbVUXtaJY2YsFZt9xJr5EVg5U44qgZmTuy8v0Rii5CeqsbLWnqdt2aEJvR9xE8QCj61OYncCnt4g7JFwTawBzkk5ecJHDY1Jn7fnSKXFoSXTsp31WkWSBkMtFz%2FTShY5XqLCPNiNCvC941fh6TPbZLY0xvWbiX&X-Amz-Signature=ef8ed1eceb7f0ea881498a003cf70cde06e7a507c83bc84b4fe57c74d6b2c22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

