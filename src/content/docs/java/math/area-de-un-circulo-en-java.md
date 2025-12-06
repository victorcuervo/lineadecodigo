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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCRDYM2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbvI7%2BaQg4R%2BdSVChFnFkAmUBY%2FCOkQBoK9ySS55KNlAiEAwJTmxQ1ZitLQDVA2y3WVmqxMulgzID1n%2FTYrXd3DwhUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP%2BTa9Ep9N4gLvcAgyrcA0%2FSWjQhc9uomtXQVZrAMaXtKVlcKZMzP2KtXrtzSOsn62ZjMoCK3avSuWTsvtFjDJ2BkpPXWJt%2FtqKjLFlSrxtiRMPzydKsXFrgS3S7M8YZj6wiH9cco%2Fs86IOboWLXiCDa5jYNe1Or6LWFqa1yt2TeWmFT3gxUF7epPJzNi3TDFvDevmeksC02%2FuyG2yUCNNmokutbfWngoqZGs23%2FIWeuyRrUlDGzB9rgatSgJHhMiCG1Bzebxea9uCZRf%2Ba4OWqXvHGa9eiGUW14%2B%2FNcIyOw6yQgKwpc1E55HLOwW94hpBhJNMMLmjaUglt2%2F2lqMe9WZ6WESNye4TKAkCHtJWmFdsIIR4OZWY%2BPMQ%2Bmt7fDuDSY8V0FZbu0F5oybQ1uDpkkMy3reC8YmMg7GuaUKp%2FptWyZiT0bseVXgFYYGEZ8qncjF2Rt49O%2FkB6M1Ady%2Fhev%2BiqLPFFP1BbseQigIKe%2FS4qlJBsWiuvZRiXUZacL%2BOKbJpIVcKoKSmENw2EKaXWcDTfDaie3lI7OS1fdbsH7THCes%2FeiIJfRuA767zJG85HBpB%2BF5GDRw%2B4MjxM3BRrXkZK0E4oTFteqJqEE8B5aB9FnmtND9Ld4dpG0FJuxEZO6JBWdflgIdy2KMP%2Bm0MkGOqUBItdqTiY6oEfYen3S33CvG8QU%2BcosqJ6TUL0SCXc1SZPKucdfYTCGAw%2FhKxvgK2XGl5YVIMJS3boJsUUccp%2FRusYSG3B6n1ZU32hZnXJk%2FRsOZJUVtNdoOexx7GFLTCERMAIim7FhFJfDWr4pC%2FXfneA%2FseIBDN0P%2Bb%2BtwAhhQEBfHeLBJeorAegCJppiE4pKUxES9ZlaYws258x3B%2F%2BI%2FLKAVGu2&X-Amz-Signature=733dab4c6c69a8e9b4d66902a6ba12683e758463be8bd6971e857e6b8650a8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

