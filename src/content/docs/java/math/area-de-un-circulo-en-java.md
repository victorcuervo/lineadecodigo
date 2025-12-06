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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLPAIVAO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B3q6gGP5XwraarwzY5xi38dVjLMFl%2BKFVp7xBrBdyrAIgZBj%2FoOAjF%2BQtYd8RdcBbXljw8vsoY%2BbI%2FrEmc%2FLNF4Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHk7u62ewXCXRc35RyrcA6R%2Fe5Tgk8WBookxm0eP5GhltuLyEBdf8sKs6s8vhkM4avqDhnXxV3P8afou60bRmV0k3zGIqXdx96NZNIBWmJcdnS5POR4Go%2F6OgUlUiM08iAUUHHJBa9KHK2I0Ll%2FCEWW0cwYdZdKTJCceq%2BquoXbX8sNwqeFbtOQMSz7vhJz2ClqGpH2gfWfo%2FgRJdtMh4mC4A4Y42NEGCvURHJahU6zQAe2UvTEbzriqxOQV57AAkp1RMw6gAmhasyD2Khs9j6EBNr%2Fc3BZmWdTJELU%2Bswu6eGb9kjlfEBv7GriLX8X3TgOSQdmVR82iNNDllV2kZF54lT602ut8E%2Ftj4PZdmLztIfaSxKQocKVgS%2FQiRwY8QH%2B5%2BjY6ukEkU5a458%2BIsVGQyPFw5HYJgs1hPB7YD4shQGWbV7sT0UO%2FzXFw84aWfHlV%2Bv9pGSngWIxMRVQe7syKYhr6xKYaWqZcaoxNH1MHMq7ADeY4eE98Gedr7jQDGAO3kAQ7iNHktihEmNRaDWzhEBtHEuhYCJFwAXXCHXctqeD7RaT0bc6g%2BKalQf8%2BuNgWFcVcREcndErTGEj1M7ZFTedMU34IwtyqnV6yCGc3cXYaFf2uH%2Fd3JQsyIG9M7%2FVWHgVlAwY4ULUPMPWez8kGOqUBO2kG8uV0d7fDeDS%2FDVWXveULnykEF9Orw8lXmKUPSGwqZyxtzfmCeme%2FWB3ZrLVxO0UCvlhhebuwCIOAjEArbzKhGXzr8TCrNzfvwztutLNTGqTSEYIviFPv4OpxyIxNIBcLQWhW4Bg5wsa2mln6dvb3hfcOGFucstNOKG2eMjDmHAOyI58Vg7jGsxy%2BSSGjIphn0E4gslEg5ZeYIpmyLk0takjO&X-Amz-Signature=aa640394f6931b9c876fc44cb285aeee2531d74b29d5c6cb8684b1e90266b787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

