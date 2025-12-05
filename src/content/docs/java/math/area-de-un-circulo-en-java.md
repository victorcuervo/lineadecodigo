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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5FDV35%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoxnE1O7GyWrGRcYeCPB5CXLmDYhZ3lB0uZ1W4FV2e%2FAiBsd5aGcjX8db3RGbjGzZzooxn%2FtGpXczJ5OPicDe1P%2Bir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMoYoGIInmv5Cz%2F%2BssKtwDa0tV%2FFLgPFML9zbORI85Pwthrlxh0EgFq10spK1IgZWqNbE%2BY4CH4B5JUk9vCHjb2mOshd8xLaRvMfeoAPhai%2FSbRhvzeMuh5vU9%2FCsZh%2BUhBxB5KilOYicJ1DsayhRot15JLxX%2BYm2xuU5ncaHUguu2isGs%2B8jWgrFCI%2FxX0J1nm6Gg%2F5Qx3fRGO0swwAr8eDs6wcB%2Fh%2B%2F5st0JYHnjqgY7ozDDQai86ju3PcwyzAIq927kRk9gFrGm7RyV8aMKU5Il217S5kPGZaMPBunXxnff7bxMYfvg9b4nisJvYF9pI7Vy1ZVhD219Joa3G%2BshQKcvwTXOdI%2BQ%2BNOwwZiq4KIv9POm3xng%2FUBCHoG4k2xZOe%2Fz1FMoWiaika%2BdpoBPmIDGXwJOuugyx9jsHuIf0oewUPGS%2FYoi%2B%2FDCBHgPQ3btGwMf0jJzJG7Y7xqY1HTV9409w%2FJTew8lHhBktNi%2BCGyMzDXl9OPU7%2FujD3svNWft7pvCACsiPE14%2F3aSIoOLyB8jVPKhKCh98B%2BYe9g9i0EAr52byef%2BNyCckFoirwvoEyyOnpVx9xuncm%2BvqDXbTRrT2d49EY3w6QiFvlDso3%2F3jPMNhDXFLM%2FACTgNjFC13nLPZqtC%2BT96rdswkMnLyQY6pgG%2BBr5xJsDApFKUVy8yqygn8%2Fr%2F5q8YW%2BCtpsTWvOt13%2FPhIkS7UqF7J0k4T9Ep5a2sXW7Rf0bpg5c4nNDczeQydRb1SDfnjpCCJXnhly%2B9vfecO%2BRGp1O9DkLHsCC14K3m66FcTgfaxRf31Z2QC94b%2B0qFtdkSy63tfJtJZ0iGhpy0ij5fNAu0iWx43nROU5cnZvo7VbglUaquW9s5LW1kIddlxFg6&X-Amz-Signature=baff2b6e078f5e94b39dc87d6c84dbb8e52b6b7788e3cec8b47c765959bf68e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

