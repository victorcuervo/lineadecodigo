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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNDJTDTW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICim0qPkubYO32q1NAF0aKRWGBWdmAPOJc8avpIRYKPPAiAdycd%2BifBQbP4d%2FeYn%2FUPt2p8YJ9T2%2Fa31fKg31fHWFCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAumlDrUhqRiGDHqHKtwD0IscEhSsdVpQujxoSktda7lQ1clwl3o%2BP8NXJwP4zoJdaxvQBY46uNFO0pGbOm8kcWeqBGlhrlUN16Uhke8ADQ0Oxk2SPRUShoLX%2B%2FTXgIo8FjH1Ojkhe%2BSfD0bm7UtoKHBaDjktOTj0fdc3rajGC1AUi3nhc%2FF7OBS3jeYGttaqx%2Fakl7Tn%2FJe6BAJbJ0yEh7NkAn1MeBBXmeraqKuFpKX7ZqgOdYZlP5ZSniEjmd3LFlANveHzV6QsXet3XuysIBG2Gg%2BVkmSqi4ePD5U6wMjng73%2FW7%2F2Yc6wvn8X5llKVhtVJDLc9rrSGx%2BKANZm3HPGGUpZlkzbIWyLReDuBfj1FNW%2F7PfxL3B5Yy0aqw01e7xzb0WEn%2Fq5haQEv6ET03bUu%2BT%2BQQLmlD3qtIsr%2Bue52tNZtHFykDAB%2FDdPS3jmngjYyM1sf15VEK84PpamnbkPeyn2nD5HJUrs7SRGvcJrpe6MshjfWFQ4Q6ZEMmBeHPOTxCdcC3b4mfYdiJ0jqoaIIwzccgV6hAYSnXfoea%2FooXCQB%2BHDFq6nC2l9yKoZnlJFfQgLYLdmyFsEoSaXMYHwmbmU4hKPPU%2F8%2BsVHtycICADw4qtljfq8UQQvYjFMUbqsjrwFLXGT%2ByYw5pnVyQY6pgFk0lw61xEPEJDfJJQNd3iDkbCNdp7rhEdmUwYh9JcooEhRKix%2F1OTWsKrQakJk0yX%2FPE1D6j2t4YVoUSqWYvC5C7GGj%2BxDbKslNa4LfPV7Fb%2BFY8FWo%2F2jLSO7ergpLE6F1U84iqHkN2XaeT4duwge%2FUAO8WRTZK7UyddayR8WsL5Mj0VFrMp1bjQROCv5a75%2BX%2FBp%2FQh7opOALv1Nv2v%2FbtRB2O6Z&X-Amz-Signature=c75b2f64819c3c5e6c7646afbcde8ace93d28e22d7d82d6c9a163f1f582044bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

