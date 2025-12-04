---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MLFMXX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUNpP2%2BYrnTG8F460sa%2FKcx%2BIzCvLaJrV8%2By7ZPWerCgIgEIcFf75Qe%2BNphLZ3AiOhI9Z2gS%2FCaXW1f48d%2Bzm%2BUeQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNfI3b%2FaJPimF3knoCrcA8s9XTRBhk%2BJeYNMEdYH1NT9x2pUonmz7%2FkGJNseYaqgJBpUFvu9xHTyALvC4aN46WDMz1%2BC3L7lOISVsbXbJH0phwt1riSI2SP5F4WL%2FS26%2BMjEaV7Sc0ZZCjOJCy4Ztjep11Ocu8VHnKr%2BZKe1x7O%2B2M5dFJbqw7An9rZVhUy724JOl4Gy3tgjqU8JdSms%2BKhUpWGHa5Wr8KNnmvs%2FDNW1W8P3%2BW1FxiKw4%2B8YejMpWALLxTepXU3yNID%2B7B6nP2X%2BtVieYiKis58BPVnE0fSWs6wNey8SK9p2XsUxvd8095UzgBBppi5U%2FWEUVdR87MCa365nIHAJKu7X7q70xReT1VC4ZJWSUPwKdcm8SOKircTZf77wHZGdKmEmZegoskcxmBHDNjH3M6t%2B6ebBMDDmFSqXxj55l4CfckugfZ1kVh4jq36gXirks%2BpcsZYDpyWMZaWLrMqTWsxcTS7qmBU9u%2FgRLkhBX16J5fckPWvc6dYzrmRYXQ%2FEB27QF5uGlyszdBOllLyR93pCo%2F1dv9TM%2Bx4JndemAg6FjMhWYaF3KYhd7G48PjTYFFJLzK7x7l%2B2Ckis2aEbYh10mQrgh%2BgvT2p3RqRcLOMIkWCdbMgzb5EoJjsOX1OxtpM2MPXbxskGOqUBq0dzvj03rTwEBdwIbBhKdF3caU82D3nqXzmBx4uBNr1i9Zgi%2FZR%2FdjgLdaLV%2Fg1Qe1M5koAgRzJdLpFq3HjSkt%2FxLEWf%2BqzjkjEjxL6FgRBjfghY1aXxQj2nRPZ7p2stVixGrkQJO8gYavW6VykjfPuSvBxUc34NV%2Brj4in1On%2B4eT%2BvTO1ZrMXIikpQHgx87fOBE%2ByD6KglWmG5%2BUyluj78K8Ph&X-Amz-Signature=29516eefb1c8c71b5265f48c9bcaf12f28cc49f81f35fd4ea7241b9fb5fd9af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

