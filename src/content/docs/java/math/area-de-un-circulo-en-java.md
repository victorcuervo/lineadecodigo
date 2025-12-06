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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJ5IQR3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxrDeUCWt72%2BQpg%2F7pYp28TkImTZ6laqyZAT0459frAAiAeQV3sTanN%2FSChv%2BB5nkI3wYa9I4HGA46e8UGVKotE1Cr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM4ZuaVSUzfESFK%2BuZKtwDOxmgz7yE9sUMSkuzwaKdE3NlDqzgFRpC9kEAMKZUsyPxm4B60LNSgfZTyxQguwSD1YOqw9Tm%2FI7QKYJlH9vzIVXqpISmtNEB9bp9fzXjsq2%2BtoEE0M94wdrfCQxpXaVe0zTDgFfecSvQPtxhdS9i4NBc5Du5Z0Vdn5mhTTBbP3tsr1ivCN%2F%2BvszQS8mWWhwgpxYJm%2F1%2FSqLGptGszbXBoXHoMFDCzEz%2BNrb5S%2Bhf7TekYsYhO04VApxmRedXYuVkR6TfuRuMmgwRCaOv%2FHrgyqyMwZTlVcPU8FtDPaiN%2FEB7sMLF21YwSbb86xkVGzKZrZF5tFvTeYQj9VmBfzS0ECiM2Qyx4V6nhzCDbQTSW3tvaDzJ5clEchqheCUD0IMIvkskng3f5A0iXmgnB%2BU0VGBYdbShnxAFx2oS9n%2BUmtgVoOLD%2F8Jkdc4Ua8p2V2%2FjJFpsDsKDp3aEC1ZM56KgKvKRXg%2FodXvXzT%2FUq7dIexBq1Ih4nU7qO3Fe6DfsK%2FOmL9Jei7EUET%2F2NxXWM6u3SRBXReug9bLWtZElMMZpXI7XsAG0%2BpHD7FZ1vGTiOAbIuzeBOJP130mJm%2FagAaqVUX2sdQbbYJSw0C8oFW5H58L%2FvswhueKSKhle%2FsYwsdPSyQY6pgEphpHtPInWxtA33gJTPF5nq5%2FiGpQaPp6pGd4g1%2Bvj5KphhFO%2BAykmx9OMCLMYVfsyDfO0U1akPMooMNnzUuIIKtwDf0Jh1SAzaedKq4BxRhUpG7BA1xzcdVyD08dGY%2Bw9YwdrkdHrELPo1%2F88LlVZO7b07GI40BQqAWxpkxNcPpxEbnY6DHOgrbxJAydZpIbNGVJru7RQbxOVBTmqj6wtjgZfd1uu&X-Amz-Signature=d5d34e2b07c01e1832280d9477e53012a58337236ba8c7c02bf64630bd184e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

