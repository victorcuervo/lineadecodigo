---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXCPG2C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGp7D0RTvt0JGgKmHzBCyiGi2vlWwVhDQTE0ScGd95gzAiBKq3FRJP3F%2FpnTtdxzYKwPQOztxJBvd2C7MP3M5BoKGyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMm4%2Fi1b3%2F4kr%2Fz00cKtwDjJzT9c2wemzgGLthxoB5faakW9U6Nw27I7zklxwo8sSJALdtfgcmGP10D7IqxLFvnhE%2FC6oEwlqlxNNvLzyvV2FIAmsneVeSe8S5lNTac%2FSfBzuZTNrL6ok3V%2BDCsMc3m6lk2Nv3aDBJpfr3dHd6GfJ09nEFQEZevnJPsPE9mTiRRp4t0BMJU2VERt8mf9A650gYZFxvpdFSxUMoYlCxaYSnXujbFApA6uHp0qQC4vsN%2FyFqIF%2BAAbdaD6C9SFq5PXXa5cDI5%2BbizJKLJDQZuuN2qaRGZ%2FIoAiARb2b0PdaQMEy5rtQFLU8E3rZOOrj7y1H1kNKozbwhjEiwh%2BxSRGIpXLNySU3ob1b1sLi2JKZp%2FwEBPn1UYQB2W2vvww7RbPvoCwiRBaBhXAXWIDM3ckz4URwsPkM%2FcfHS%2BwyddvjTdJwgbw%2BhT6PFKVB4G3DlVF1E9dhCTI7rnFOt9F8gn2ltbb%2FXVLeoq0sgipXy6sMlGqtJuQgRo%2BrQPVfi2HYXi%2FlnP2kjIH4lP2KYJAh33L63VoiZSg6TCSIyyaQh2F9IUFnEl%2FkQCMJQt%2BqAf4uoyPZL1O2CzKyhCbWMXMongkIU7%2BV3EDQ82gv0YxxysW54e2X0kBui1A7ngLow173CyQY6pgE5tEDqs0UlqhQIUE0MGwriDruxjtIC4goVRKo6iiKzG1AgwUECDW9z%2Fn12Q04h3esBL7RzclKMEt9OrkHR%2BpXCZUCX%2BPZq7jd6iNrO8XXEsslXwx179TI8NhgDw0b480LlkatXve%2Bj7BGDWlwbnso02NA%2FMcYZ74v2OTd8k%2FeI%2FBOYR6qZ5dHmr1lPJNptpSoOM23qPXDhCEpcBi7AWSS%2FJ8SfBs9O&X-Amz-Signature=9aeacb6f0a7ae4bce98a4d5f3652286007044cd215ba1839aa55710c63f27a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

