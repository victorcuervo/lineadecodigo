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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YEWWVB4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtQvrsoX1kVHWMSIajbuxLnnT0GjZiKghuKdL8bm0cYAiEAxnbWVH%2BKh6OuW3MYkRY%2FgtFml8VVa7%2BNd7WDgfAef3kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBbWvnuRPV6AsmDaByrcAwl%2BK6FYoD8wgQjo8PC3UpqLaLPYbCQ17koWq1jPR5OZrm1Mh%2BC%2BH5Zl17ODRQag5cFMzort%2F5gbA%2BwwYWOi2xmfTKGuoI1g0Qs2wQI9OMvO2z2cf7QhRpoxKg9E6DIC10%2BJTBTnlNv1%2FT9WAuyrap9D7ztcJ3kVkLFz59vqKMmln%2FXMr39uMBWfgncFVLHQZkowIvvEuEKm3q5c7L4MZnXPmoJ0R1TGCfNnCV77%2Bfib9S037ytITLxYaUg9%2BSM8P8GrY0n5Ohr%2Fh7iLzSPBh2W9iyD92VgRF%2FZi6EcwTOjjCzt%2FhXxIhe%2B0sr9sALRPJbp517T9ZTdbVyxjyVxqgMFSSe16qsBpE0mnO4sAyOApFBPPtC1rlyT4UGFM1iOQhUZJv%2BNrizvfJbDKI2QCsKkXbr%2BYUIQkp2ZZ9qF2hZ7EfEOrsCSxH%2B1RoQ%2BSCbF%2BdHNweDWia0PcR76Gq9KHfyvgVkDxf1MqdFOSB5I%2F9X6rBLRB8yYeZpn%2FVLOgekX0GoDhXZTrZ68yfWUl5rqGuxG08osnbLzuN6hgt8d5XsuTVspeA22xdiFkBs1EuYP6Ve2GKiV15gIQx0EJOb%2FWuTRH3usRFVFiQYW0hVz1ioH2S1xjddTX5pqc%2FDc4MIfQyskGOqUBfS%2FWQ3QURtza%2Fickwjf1tOMypDoBlN8ohp2MKkBQgK5QcN%2BcUDF5Kord%2B7AlALGoR%2Frkl%2FGThXHFYuANYzfd3sGjKZ3woHqcpGA%2BkzTNfsrZIVUm55kmc3v%2BZNEUXwM12%2F71IXUvLrhKrxlwnogB%2B2%2BfgjEu6EmAd3BsNLwbVZ9FBdwv7VWNMR1ZfpdJ483xxZsyARyJAN%2FHrMO6939hCXjqu0xG&X-Amz-Signature=cd4d44421d4bbcfc2255402e8384dcec8ea8ef4cb25b43c4bca1fbbcf05ba597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

