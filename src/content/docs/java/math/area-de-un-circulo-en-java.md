---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632RF3RCC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC0Pzlzlq02np%2BM4bHlxjenGOtRrXw%2B4xnfZWe8hsM41gIgaNL7LNQ1Ucm71DGDKu%2BvubSvmGtUnbzOzpdD50QmFBgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEI2CwcNG5TvWwLDzSrcA9BEFosBJHcQ55TxrENtSMgk5CipRVhb93dENwn9yyOXELTD5fLfSS3gL%2F0%2B8SmPtfMwB5nZ%2FGQlKIRnhcS0EghK1ulWnCaZgtcRUiiYv0y8S3sqCuF5MAZbg15BX2HrJQ4vnNbPNBFqJekzsyqUbacBbD7UIJMh4OO6tAhPljobvbhVyLrVx0L07cWqw0hAi4Sl%2Bkf2cjtHm83O5hvxl5vqet7Lry9TW2j4cHyuLGoeN1%2BTLGpdsD52YSwOmD5Gfih7ZQ21LSrGPq%2BNvbvBmvQlQxqTeTDn%2FzIoXtMQtpckEPghWhTngo%2B4ueFKkuC48wtxyLEGJ41KgPlgK0gMnT21uHRaYubea7NtwGzghJeTh%2FH8eC0%2F9PqDvwmWc2lzq3Dh9y0HHYvZtfKv0JCDqpp1sGogMw54QTAvij60WcWa1dRfmn5dbqvh9R%2FjK7ZyNwPPIOXO9az95uo4rLsmVFZQzZ6mJ65w%2BonclrRyGRE%2BRVfojxvQ92qkqh7DYKQRUw0F88lg2WPw7C2gg%2BjtGRvTf%2FMjEIQXhbbHYIUMdiIpNvTDxw9k1L5Ty4p%2B4fcnVgUaEgCiCsLbfrO2phr6sQzkUswaBC6jDcfHiGCmqRJxzYsJLX5A0hwIv6gmMMyUw8kGOqUBNAgHaVTaBuEwE3byXbVlWEM1Oau2yEA3mLBKU5%2FNSNB7B7uCUKq6iYOmYSds%2BA0%2B0RkKoBrk6DG8U6v1MRuv4BlVg4KKu2%2BsN3Vod9vy5h%2FQM%2Bs3zu%2FKKhRhZW4jTDqadc22I%2BoakFah0wfnmlu7YofYm7wWTjXK1cIucoIN4Fx8j5B5XTTDVVVwlXq8yAc4E%2BHhtbwtyRhymUSMgZJOZs%2BjvCZh&X-Amz-Signature=67363106d16d4068133391c50fdcb285b312f4c82166b62e90aabc9e3bd6169b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

