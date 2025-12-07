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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJVFHFRV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T093430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDX27dMuMtWXO8H3YN3kwwTuS4Q68Z%2F8%2BYVB02hkydGJAiEA39o6JiMO8Z7CjTUAB1gm6ab3%2BPBboTIaQGayQonIS9AqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhFM9bq72WfD7KI8ircA4PFSB%2Fm0PLOAdQ3w4k837FNYJIDf5Kq5yXqeUyCmx6%2Fp84Dh8PkXRd8pk2kqqVhETXG81qIzV6IEM2vaN0NB9ZPQrFEhECF9kBZTfFH9FsI3VF8sYeCJpL4l2EXA8AQ6ECISqVNinwWfOPo43%2BZZBxu3sdlRNMhGJOAv%2FHIC3CCh9HN5QJtd6vVkFylo98NES8ctuNWiLhslfa7VMZoH0Y15RebRs7xcpdfrBT9D3fABV4vhOlpLBbKmjTaSPEgHtsprkoaPycjBqZBEk%2BXRcBlXJMQ%2BXokup1XmUMwbQOU7r%2Fm1CmR7RIXt0p7enwGCyAm6BHrUy%2FY%2FZnB5QFk%2BqQcpe0b448%2B0cnJ783cNEkad%2BxJ1ZRBlRG3HqShEx4AruSItAsJd6vP8edT8PUy07akZx93ss5siG4SqG98g09MESygMhh8DEhxqmiutYUe2U9GcmgkVMGRi2vpFPTCj8fzi29q1EWFELhxpmmZeyRic%2Fzw3%2Bh5PoX2%2FBi283csDv62tuszJBSO6UK9ygsd2IxMJjK2jgMJLDiiwhLw8PWw03JkT%2FKN3rEq0%2FK9hEEArMTDJ%2BGuiXUsMXq9VR6Mb%2BDCBmy2tPjtMucOreFHjnmMB%2FHyj5nPk%2FBqpcO%2BMLih1MkGOqUBEWvROp4cGnOlFNZcXP9SjZNfujgKsGwPFmFLX3X5SA3ZdNWIqsFoe12E2BX64RZ8tWhPY5D1MjNgPip%2Fsygm0llvWP69ob2QZJ9HkSmReBPjlz2JOJuEAto2wDQfDR4FVfUJGc2zSU41Fw11vRVmBsXiTlK1lHWS0lA5M91IHyvc5vSRQ%2BxcRIVZufk2%2FkdVNopeOCdic0jSmoY3%2BoqMBQIKtKo4&X-Amz-Signature=3fbb571d99ce76a0cc14a5b2840d1456fa6f41da4c6f8468d6c140b013bd3af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

