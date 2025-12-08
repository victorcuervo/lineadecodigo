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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QKOHL6N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T041740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ5jHWNx0NxySaiCCRcpeqbZ4QzlLNMG80A9Ej37ma4AiEAlBoFS3Hi2mLoGPy5xjvmaJVpJyPy1xsqmToTS93xsv4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxmy98%2B7ODk6RLfyyrcA2E4C3AqGOgTNXHveS0%2BCfRivdwe94c8plMBXglNWrDqB6iOepvMIBn9x%2FA0bqIBKHh%2FJEwr9UECZ73%2FC2moVWAHiLo88OTFEN%2FxNFR9j9ovV7jaUOKt7M%2FtN6vPbBa8U0GeJubhFdckVFGO9X2vJBMyVhU9EixXE6nKcc6ADVwqgDBs%2BjEdksn0v07%2BW2vM5F%2BL2%2B53VR9z3bOL9AZjE8%2BuFwHW5fv62YD2JmyX%2BU6eBVRxCQJ26UKAMe%2Fb3mQ9IMY%2BHzO7yCXf2gWL9wQs4kXTW5PzjvsY0LfZ0JhjrjBMoVHs7iWwJ139P9PKhe1Md5zxSzTkJl0WxN8K70OHx3pKWvlNZkMmkaUAkERe7FXZ8nIDDPhjFg7zuQHTMcPNokj1r7AFhg3U45iw%2FpaDkavsoL7eWmGOsh%2F0GFvl2uci%2FTYz9naYXNly59apiDbcNjvu36IJ99AIUmUXTBmnm4J84FhQciAwFdtng%2BUK0FvtoAeLZEsoLOeXY2WwgtIHLMRegRhLyyk0sL8JF7YkzgI0VIJpGcEDkrAqN9BVVzursHWx117ADEM4pD102xqUPbV%2FKbHAaWzrUtCGSJ7LjUckB20Mk8yInivdKqQQ02rOXNqHHJDuW%2BTLTSvoMOiU2ckGOqUB5wQX7vgOI9p15mz92YZzzd1r5Ds7%2BhJs3%2FOKp3jEtTh18Y2mSx4t0Nsn3EFwPgC6DmSGCNUftBLAUXlbj97zh7yMQofCpEh%2FFmOnwrvXedNC2oTgvmUmFKXQKTOx2ASW5o9g1Wv469AC2zwdoBYdoV5F4CTwPsG8XgIBG6forbexWf4YA2poTj3ZRBfQkvo2wJlWb9AORyi5g2FMAdfNll50lvFw&X-Amz-Signature=92c7c49e7b4cb6a47101745ba3f6878e8beca8f9dd1daffeac039bf55a4d6c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

