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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPVUKQ3C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo8o4G%2FbTrUzFQgloDIq2qpiR4zx3DXMesb8t4Z1DTqAiAsg2eL40KVKk%2Fow0iyQiYJFaiTzCfy4L2Da%2FZJB8e02Cr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM%2BYuDFZMbtd0xIm22KtwD0cOx0VMwv%2BgYTwBr3H%2FKVdiF78jUoa2tt0lz%2B42xA2JGyuhsi7hxUiTIIq3W0YeONmp4sDNfIPJ05PUcb0Is%2FyaV4k9ci8i%2FQlBi5LQgUD37JBc%2FGe8iZMtjC3rx6cfptNeNozNdzoDYgJirAosC5Ue0vioP9JWdFBTKljiiQnimU9wWT4gjNiic%2Bf3UMMOfkK2WfSlWTR3tu0iZey4kAaxNXBBViCVNn%2BOPOW98QURBVZBJRGFMcWRxFDNVAD6Q0XxiqyZTF3Q5aD%2FNn3oI3AoYhEO4IbwypzZdlKOyxQebjc6E%2F2%2BHeiEaNZFj24AQwqxvTw28OarAy4VNFHYIwsg6unlpbXGis%2FPdubtz%2FbTQ7sEoudXjUn3whWiW6%2Bg8zodPkuE3mU%2BrXygQbHO%2BPfwUIArNuQoEIVNoxY6drnSNI%2FdUeHGVkwQFify5c%2BV8d5tvb5yn%2FU2Bjy8qzQKAyb1HoZVSnZwO2COPXBL4N%2B8UyHo3v75x%2FqTzCVGkupM71JsNwGFLBUSVL8yfOIIO4YoGhGE9JR0z3f3YcvwwhEeWC%2F4G%2B9y4%2BeqStfXAEQgetSNQgxxKYtJDLnJ0wbvXaMxxvx4Cg%2FwIR1t0ac5ApMmU0LeDxJsREVbW%2BCEw2qbQyQY6pgF4G92uGAP1TNLJqY1dyA8jAHmoFymDVtgLMqa5Nax7Zk%2Bo094Ys2WJBIDgPZKD11BxbD%2FSm400pYq7Dnmw%2BF7ZYtoBlhxECiPRV5ZFG24NzRiNIYv436w7qPuOWdyTjtqCtWU7KxX6%2FxFU5vL%2BTfzp82wuhopodlwUpMWXTlNy5ORQ9Q%2Bt6Ebovi3ezyRQtHhBKlVaEE56mmPgWjDDbxGOuCA%2Fs2oc&X-Amz-Signature=5a07fbc3c26ddad05805763695bbabdc34586bcce49ba9a692f82bb35841ea8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

