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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA62TELH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0oWoX%2BKNYRKNu91gz7OXpK4Rppr5g7UTaeM3IIsWa7AiB1Frl3NhWc9Kibtkb1dP%2BX%2Bi%2FP2nAXWh8I5H6HA1VNyir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMmgSlA3n%2FVVhw31ExKtwDV1XwbCTPMp5cpfx4t%2BB3F0G0N2sa9OWMWM82%2FuwftTQGinwvj2eKPnO4K1kdTKaBcw7R3Eg%2FJc7yGOA%2FtMssVysyjiwBKALqLcPSTIytpgOkIwwk2NwWCsSvg%2BgysYT0qNH%2FAqv0Np7JI0USxTJhHuWuAokw6ykvvnaePN4bJPpwMsTFJJrjtusUFmSfJg83%2F9ZKmu2zIF%2FIVmI4wOFIBm6W7rkmILISR%2FYJDMYNTZIUgXCBBKNAK9b3%2Fdk7%2Bg3%2F23xa3kzFu0DKXDZ%2BRSbNWO70FlpbikFGubjsuSAyydiwp3rhL5HHB7eh4Cyo1WVa3D2jvfSAucEd%2BvP1PpWZctgF3eFQ0%2FtF5BOf2VddnK7JZ1uL16KIIgkEdX69b%2FVutbKjMi0810OonZJWAiBWZWpuprTlsochb7kiQwMF7JN5ovZ2Yaw4AoB0B%2BUrT2IfCouWP75bF%2FTQUQr1U3uMweQQPTuYLJrmQJ%2Fcwv3sOebLNQdTajSSqQfJLCwKghMp291iuGFh1pZFzPV%2BVz2dEx2l80MRpw6QlPubgNF5ScUZHFfBOVv85RKh6p0KCwMCYhz503rVFvmE6CMECTvacz319%2FoT32Oa0EtE0Ys8y7xeTB7H4%2FQmPAWYZpUw96bQyQY6pgGt%2BR%2F%2BDj%2FaFtpjqZsZ0U8C7IPztqt5920IehTAYM4t7IxUlki3hsvvPALwgQdbUbDhWvUDruTrcmz%2BcHsDgD15izM%2FJf2fe3XazfRALK7nOgKOuB5I8GNhTv4VCXO9zSkT0%2BEG5pN34j1fnMu6pTNIf3SDSwoZy%2FczyvWWkIF%2BFHfJpLI0uySfgRsQzZQms1xvwaiZdspPRb71U2UPnejqIU4dchDy&X-Amz-Signature=e1d56ea0ad172afe487c8184ef61756abba2a03f6ff60fa46dd51e1e1f1b17d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

