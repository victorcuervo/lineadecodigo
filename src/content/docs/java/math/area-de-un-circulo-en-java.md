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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7PC7OH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlIope9D5%2FZHt29blt4SU1JoTexlnw0OmlKK64D6gOYAiEAvy%2BqwcAYX0y39iyqtU7%2B%2F3016ZwBw77zDThbpVmrtdEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDM%2FZtVw7Qib8l9XvxCrcA5mRVKWxW5Y0w90BFMWngO9IzcwCzFXV2dbIEDPS8ymrGEEFRfB6CYMHEfKjF56mewQ7VQklqbIx0Qc3tj7ouQr5QMpc74ILXm6oAxSlJTUM%2Bs6UIW59WUpLBRE1K%2BTv%2FTNkpynBxP6Qu1FNi4pTt2%2BY3DG7Y95kACf7iZl7DJc%2BX17s8LNcC7ZeX1x50tND5rLBf2yzjQUNDn%2FsKgvAG4NlrwJy5XrVAh8ezNnBZJkQv86bM%2B0WYrC788vIfePdq2ckJIc89mC7Xy2N50XP2bYVoYs5ucO%2FnUGLBfnEmlBiEq67EGfaTXnDLgv0v33T1U0mE9ggrAyFLISY9CVzWooFWkF%2BWhrysxlyrCIXW%2Fczyo1ISrk9D1FzG5h00t%2FryLcgWD%2BtVkz7DqtNS%2BYpasSyJmX21p9F0s66qHw0YlXJCj0arcI7gWsz9L4wCe1sCFGfBbPilvZvCGhnJfJhaSO%2FviOL2hokWa7ZqkBsVtdCX1dCkIkfwEd8XNgKigGb5LufOpf9GApVMb6eYvxDMPvzn2Ab5Y9AfzVmBg3QU%2FhCiFC2OtaK8QBlcAb7Y8ukPwMaIgI3A39%2B7vJeORCdHQOVmnAyDcRvnOR0NHNKbxuuxADHwS2kkodhIf%2FuMNjT0skGOqUBL8Ej%2BBWSnVsjrPmJl9k%2Fw%2BgWRvafY%2BB%2BmwGKWT2CxPO53yomfVN1wsiRsIyuj46jNWzjWqw5s1dIHH2ksAVyxllRE%2BPl%2BVSRJwmhl07%2BLwMW4MGR8YT%2F4tJzoCvlL0KXeqQNW3udxBmLEz5kfnY5R%2Btm7WkpzD0g0Xwtac39XhcDQpFgUm9QkevlE2ty%2Fd%2F6ESMVfc10sBzrdfI90G0pL7HMKSQz&X-Amz-Signature=c3ffe46eae4887c63d7bbffa481d5cb622c4acc7ca6eb4fcf9760032b3b97dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

