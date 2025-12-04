---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUZRUMCE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIA1o5KFZJ%2BkbJBuS%2Ffp4Yu%2FvY3lpp8iOek%2Bjz8AyOp5lAiEAnyYilVpMtQZPC2S%2F6xRGs%2Fzh7AHF3flSgBrTFmjsj2kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMFMtYCHe4kol83qmircAyeHiFnHcNzEfmXiffpBH1MH4jIt01Lepm2rgEgzsznrPXw8oCO0gYaJ6Fco1kCHG7z7gzP9Npr5Adt7lD1VvOoGp7jUtPd5K%2FQ5AmYa2PwidMAR5NPSgSwpT05VO7ICG%2BEQBCL4PKkkKFGN62W7Wd8YdcZ8B89Sibog%2BwO4zpffrXQnmpFdo%2BivrjpMK%2BDK9nGaPjevs5oe3gsnHRMsG0ldQs8h%2FwDlV6UChhtpZWUroJ%2B3TrxVR8T%2FLlBilYKrXR19jMoOCWL0NMehx%2FP4qO6YxGvF%2FihmH%2F1Ev0C7u0sK%2BdU8y8fiMxYHWzTiht8TJbgw6ZoXerDxmhErnRaGqC84WhVOH7jEchsFJb9W8fR1mPrOrfSiLpIhce0VS7xBv2shAXch1mMxQ%2BZ4VNba9pVOPqtbbD59yGjahZtAonujc%2BgeNfYGQzCOVMyC5C5yzuj2h3wNi9d5t2sElFmNZej3nZcVx0NBFMcth9jm8G3SLNxGm1sCSdX3qHnFhO83Ryq6%2FS2R8vdD4w1AiDsmNXiCP%2FU0m684xjhSk9LEt67GaF8jD8C9z9hce%2BAlF%2Fx%2FU9s2OVRFWEKZXTd9E3MRUYNpPIi7mYfOxJKTzjxTexbxVrpD%2Fls%2Fzl8gr2rDML6%2FxskGOqUBp2OseVZ8UpcVztvqwSLVGm%2B0385Xhqpx1GVzUZkL7Utf5JjmUIhk6AamTEaomT0qjU8I%2FqrCFwHZn8gDTqJt5tzpAxb8ilD0326mSefXa%2FKdn4pRBPP%2F4QnaiCWYh%2FRTi%2BHsyJKDihXeCB61iQmbjWvJ6Qx1DNxHaXdeUMYWrS%2FZL8NSvQjzuCVnsrZgP3gsnStqiHf6rA4pepN3ieHQOrysnfvI&X-Amz-Signature=ffdd167be13dbc575ac39881746d6ad0fc058dbc0e475fe4f48e4604670d3901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

