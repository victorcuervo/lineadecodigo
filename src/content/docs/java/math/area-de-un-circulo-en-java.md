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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AM5JGJD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHz94U5awuY7iUzky5alGBkCXiUuhFwZ3UnTcC74eCvBAiEAoka9J9FOS3U07hf9kcW9bLZNpNFQ%2F1nYAcFORj6AoLwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfUKp5XhPMP3jZf4SrcA5Y2UAyWB8Mv30JXc2oPsmpDetCvwKFmtayzkT%2BGBhDba6wzRtKI5CH7QLjgq4lJ8vuG0VJnkO0giZFVC5TTQ9wjifABo0qheTGPm1VTWnltXHdtg225sEa2JzPtHPhrFygFD0LG9ZGUnDnsB08NdjJvUfdWg8ZC0mToT%2BliUdtR39H5q12iEhSPrl5FYbHwLzacokinxXQshTZOs%2F6wFJs5TVqN9gHbwJ%2F%2F700DfRsUEdvv0OP94%2FF5qSEC2LBJllpSWwpRot3RA1olSunGvR3penKOvJ0QY6LV%2FExR6LWAqpbDFfsAnfo7XUlvhM83RCopz6sD6npoUav%2FvXCEXV5%2BHswPDWxVZh5hH8R3fx8JqwC0cCHt7zoluK0JE%2BqsIq7qqFbARZ0qTHjrt9BIc7XJmd3xyZMOvDqcNEiByBoySGZ7rmcJYmh0bH%2FkhZbIGj8Eju%2Fdd6ZXoKM1prAV70o%2BlwH%2Bbt6EHKv7oSrN2PMSl8IXp8f079uDyPGSRB4oEW%2Bpln8a%2BoHuOwr5s18jEqWAmfHqnPHi5pQsCzTWMPoi9mivNnuLpWFtNqWr7S0XxDKl7jUfUEUy2B6rpj581jvRSBZ5F1f0c8%2FLblhu%2FDAcwmrqg3pK%2FjT0d77rMM%2Ft2ckGOqUBj7VtMXEykSMIxonhowZf5fzoUwpkOsS9RSBfZ%2Bl7qAiH8%2FBA%2BHKao0sBfy%2Bgwjw8aVBfwhP6Jn8ZxrLkCNPo%2FKqRDr4O3n4tKz%2FZYPHVlkEVluLQUYwKPjaCkyMgbKXVvAmve6GD0OucqiCL84503BXOd0LzWheoFqQIvmd0QLCl0joJA1pgBWJ17ldeYwmxL1C6lEMHfbdrS94GGZ0JZvZGfNFh&X-Amz-Signature=db9f5a472b4a6ae951843e61aec08e2ad1e9f11c9b3467898c14c75dbe358dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

