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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGHDJRN7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmHNPtEPY2eiHHji4zAH20heF7K7BhoCr5c244yVYRQgIgUBmEApwCeWjETPoQ4rviiQpEuRL7S%2F6tvXycEeqgfO8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCdjfioil%2BYL47k%2B9yrcAw%2FxpfwYStEnA7HynFuF7h8BpgxkoNmT%2B1Wa3AIgJweZqqxHJMng%2Feu%2FJNJqIRNRiRTqk3bPkVKxVcXn1WlhijWp3YvrFhjKC%2BjajdXlfoAkTXDpNDs0rz2Iw6eeZZA%2B3wtMWMN9rK3newD2ZvY7X6Hvx%2BbjsA5o6j31yJM%2FWsvli9Ef9O52Qif%2B03TMhe6H9Kuvy3cve%2FNe8exaSwIRfXdqH7FmzEIpWExFv7ReBY4%2FAkLT99yVW9sa1%2FB0%2BUaJ%2F3uVE4I%2FuwGzwc6q1N%2BkD5DP7EJgO5nPZBIB177W3eRZRNI3gDyJ%2F73fSB6OyzHphhIo00SBIl4TKsZnFqnOvtB5JaO0pWEskKSIC73AcRMAIQ3V7fx0C69IjVwl44AV2mkYCxMqTvhs5E1yrvV%2FlmMsYWS9Kfci0NTNlWvVddBDdN6GrGDxL7h%2B292htcBYbYin8pqYsJXunR7PqeqMH%2B0sKxgcZqrnlhNmseOApb5KZ70QckEKm4VSJ1qXs4h0Ds0KDAhgPE8ux9pAoJQueSk%2BxjApMCNsdtGJrjduJzlGodcpaOsJbQkYz0VX3DRKVBkjsY1YnrYZTiStwLpJqk2Q5YQyhURRjn%2BMuGk57ndb15HDvl3Y1f2P9gPeMNrozckGOqUBdobVRnL%2F%2BnnzOJfiJMLbWVol1M6NEtQTg18mAWVfCk%2BPqo3fsVAeDSkQVuW2eXF4GBPdbKYYK4VqQTioAlqw%2FjfI7NqpPkJiSosvo7eO2iZZOfPlA0kEcQxA77oGp2c7fLMnDD9hnrpO7BQbrrtWX7wuLfOicbDmX3VFbm2NmfvF1WWwDK8b6WfGDED87IeA1hhMES8nVBVZDV6Gp3cPzG0xZpbF&X-Amz-Signature=884aa601b2ec76fd0e1b62db70ac4b7d8315e8b8786346b5b3186600c76cac15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

