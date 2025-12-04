---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXIL6H4I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCn%2B3i7HlkT3r0Dz44HfRHJdGUEe3FpeB9L%2FYlY6oW2HgIhAP7hEwmCHioIvwRviZxZWavkst4rnJlKh4fFENSoPWahKv8DCDoQABoMNjM3NDIzMTgzODA1IgyV%2Fc8k%2FY%2BZCjFJ6sIq3AOXtHBT1eI1E7uHvbyLNCqjBXPTnTjyZ8lHkpfCDfolUitaEtn93%2BkwL9OWJObEfaxX1SAPqnSb7X9GYRar3F1oPVv6Hd790U9MysthZhuJ475LPH7sFlmwGA%2FGLWMNn5M9DUP%2Fy2JmxfXHss%2FZgZj5qmORzsqwJGNCYPxi4S3hY3wdHa9F0q7qHtq9WagutBfaqbbFddG7NLd4bv6vfa%2FuLl8GeyC9D6bUyrDAnNfN6f8UhvmV8A6UiJHZsZ%2Fss3a1YW7BlTc%2FE%2BurwdUJzsywtee1lCgxNZUVGGYVPLZmnvVL7Dc4x2xjZUxaFus4IIRHA%2FwR%2B7Sli4D%2FeCW1sov4iWcxom6pMffd85l7W2TlZyh0Lk5M4JwcQP3hR6lZ4RE%2FJWWYGvclRatlYSlnK1dox77tDafxtIaCZyIcAaMy4uk4y3%2BfmnAI6S6BIJ9BzPgbJr7sRyJWKX7U%2B%2BM3%2FFhY0GeO6n6co%2F3%2Fj9ZEg7bPN%2BX2bTKnkI4eyT5FmoB6tXqVeL96YKHtoe2kVBLtF7N6tXRFB2RcdIALLQIUToT6OhG6KAxVQ2JDBW8U09v7oX2bU%2FRdV0vE7URsw76RgWMC5l2G7eA4YNUDN3eR5V8Z%2FDNx5o0KFcO4zGu7oDCJtcPJBjqkAVcF%2BTK3xhkRT6nRXFnig7c84NayEZHlaea%2ByoBsk2y8WAyBjEgbwL215hpKaWWdAPcE9d2mNaKwpryGDKYlgs6znGI8hWwnLPTSG3G2usw9vgppNEi3ewg%2FEt4C0Q6ZMlHHRw82glbabg981IDM%2FGQLhTRqadOzG9kaS5etbp%2BSehGMAYjUy%2BdpK1f5ndxRNo3uRPF2sxtZbuwUZEnWtmANTrtP&X-Amz-Signature=9d98e465e7537448b5da14547efea67bec9ee0b07d55aa8f5289b3425a788676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

