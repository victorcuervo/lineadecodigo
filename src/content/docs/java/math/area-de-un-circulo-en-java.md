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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBYPQFB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBInhdhVN0KkAysxLt27irtD8yTbd0Y71mzPDiHs094vAiA3%2Fu8oIMUx5DSREnplOHjVCCxY9QVCwct1iOu37tvm0yqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8O4Y9tPpV%2BLT4nWCKtwDAf5%2F0lRW8%2FAYyK8UqW7JOsd0zp8t9%2BrVr1NBP22GP0rphdg5c0tzUeZyTyGojuATHW1Xh2HAas6JvKuE8Zzx4Cf1ilrfFIR0Jq4u6u9C2ipZ4rXXrHBSEG%2F4Op5YUnpLdoIUW2SQPYh9f8ab9eStFuEjCiyrLTudnT0hB77%2F%2FrGOiea3NvJ5mW1jTiExAP3k0CaKPXnhGqBC%2Fi7EsLeRNm4OBmBsYFkK65TyIOhkizLd1JfJoY8npdWGQ5CDn8yBLiIWbjCkyckP9g9QnAq7yWgSS1NFnOqIGYHS%2FdLn%2BlBxINxMRd0IweImPlnIJUCuehJf85ubuEI8AsgMCuNKvVxNe99o6IA1DMa50sNh8iplgtyo0BhKbBc0ml%2FCm8fe9u06of53sMWlsVFOO1BZEXJ1pAZUBaU7o6od2j%2BXsmfURHSiExPJP%2BRyi6LNQLn2n%2FgP1iGxGuP74eMyRRIR1uqykUoCtykmSweNcKqGK3XtVcs05vZ7PyBNr4AVhNZWx9ix%2Fy6qq739RfQaiPF9m6nW3h1cUxj1lEPBVI24YXcMup7cUmLoSX0syAuhJv1%2Bc9tFdH973Xnl2EnTGglCxJBdCBhHrBiH46xZSfWS8nxBZ7IBIwu0ZW7PT3Yw1aHYyQY6pgHHJsSGsZuVvj2bgMQfJqbGA498Ia99b%2FrHBmoEumg6TxxCgwdyikc5wVWE1YB7p0aPTqWH3W9mB0h5QwkCa9zch%2F4qglJqxHxBb0MCkKll%2BJdl8hReZlZMQBUOhFVuZ36aOoggHsGt%2F%2F6S0QLE%2FOaKL%2FCUeWUyqIO6b8VYJeEc%2Bzhwi5vjZhVim6ngcKkjzVpeAIr2slFw68L9uc%2BL7kzN0Qlg0aKS&X-Amz-Signature=4db4abc705c0fd078c86402ce030d8add1ba345715b528a76b32aa2748c08ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

