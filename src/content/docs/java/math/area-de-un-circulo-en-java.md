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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5DJOMF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZz9B6M75hfpaDCQVaPmJNia4DPSlM%2BQz%2FZErc7Oa4SAiEAsN0SUmlJTwrr5quiQ9%2B6xWWJ%2FmAmO3%2FKVWxvQV97SDAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4TMlrVICftqG1lNyrcAzJ%2F%2FK%2Fj4MCvkPLLR7uoKqQ%2BvkjQ8G0zgoN8ntSAG5L1GrX4W%2BUjPa%2BHgSrGL84lzg8cSPaaeUVYHMn8TjjSYYK8Kz7dk%2FT3WIUpYSp5wwBYOShiSVbeMUnj1tQxXo5bA1p7RFqY0D0ubY%2BBXGB8f9X5mQ6MQ3Sae1Qz5S4wlHWF6iVd12q5JX0%2BBp2fD1YY9clmYWEkhyE1V6b7Ha8XRkHWq7Ys2FxSyMxI68cRqdRTf%2BIYgXwUjdmnuZebsRfaaeuRhlN6wO8DgrP2KDVd9VQcqiS12XlWFKD1L7pjt8qEbYQPtmnlZjIhiwYw8PB0S8umjXqoo6k2NN5E%2Br13j7GcO%2BdUB0p7xNr7oE1aEmQN8%2BxlftSkFfeVtcZPSxnHX6Kbopemln2iukJeuCKLGrGLJXtxSm%2FLag6V2ASSLTdZrUmIIFhBARCw50HEZSFOOA2%2F%2BEgZ45dchbbdWVyrx2PguJGUYy5bRYHmR5iiKM4IKGZ89X%2BkxXcGLBO%2Bp0zqq0%2Fkzn44IGCiYDAg3voA6cEcn1FABjrLOjiWssirf5QHV57BW75ilgghE8Ls8ZUNe%2FWIiAS3pCS8EPXRCzw339NcIfAG2aGi0ew3OF5p1Af%2FttULtxklg1bg%2BbFwMK7%2B0skGOqUB1bmBIZ6p%2FHij8UGP0TlR3WUpzOLEjq%2Fw8RlX6tZHBI3f9eedcrXuV%2Bj7mWMkiNSrFS6bkgzjhOnBe577qQ86sdJtlKc%2BGJpbqBBw%2Bpold%2FpP%2Bjqp4Kgh4M4aa2btfbt7rhYDH%2B1qIYOh5t7lCCu%2BSpUzVhIxanaaWkh1Yo%2B3BnTXflp39P0O5oDRzGIyXWPkHQ4qIhrL1BjuPGZEF9QLAcSVTe4Z&X-Amz-Signature=3fe8d9f4a979138c351a107666e9fe4ef8055eb8f2522c7b416ff5d18473cb0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

