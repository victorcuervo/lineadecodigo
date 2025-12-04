---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFP6EKD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBaALdfBv6idMqlc2sQdD2%2Fj2N7ElvahUfvzO%2FzFkysrAiAlH5Fv6iOdJZ1Dy%2FzcUB2xiLUfg7rtGrD89jRIPKzJuSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM7JgxwVLCRPlXoUP%2BKtwD2Td6XS9Rjv6JszZ85jC3c0Uu3UHMomvIbXGv8bv36rHryTXQ7mdl1TJ9yK243rkVSKt93mD0ZHbXuP1G0rm58df3J2qkjMuoMd5UqUWuyZNdN%2F4%2BsafLqtr84wLsQd8yBKGxSNFMpPfGU6o8rOc%2FgjGkCqQIpe2LTmTAgI7QM7GDTZtDIbtK9NgmufJfXoqVyGob40h902Rk3wd517hha1Bet4M3D7qHIOIB6ZxACoT4ULlpNNroc6meWa19ttAZa1hfQzNLWWGmRlkV6bE4%2B9k%2BneyhGn27A1UXb1OOMNWHDfb9gvtkL80uplp%2BIYxAnVs3F9BstbbvXWZjMMuwX98J2ZRm9f2xzwP71AGIFcPR5ii6abxs15EDebSN2LXlsHYX%2FUoqIqtWv4URMpZKsYBYWzA120RrhFH%2Bgewy74mQPXAgbrutV16A1dBVocZ01VV3JW8%2FBpOI9xuNOClFINm39dQPHOZZloNsEaKZbG%2FiLxQCyKh2FJv2woP7CTMRZwkqxfVTiYLuh0vIvjf6aCvBp608VkQYMQToRg8pYyR6tS0dwW%2BcVPFgAuoEAleo3czwVuwSld9GWRw%2FGf7h2Z4thJfRKlZpMTzYrrPGI%2B64JFk4MRA3qefnmS4w0%2BjEyQY6pgFi9aWtMWWw7ugSc5G9ChbSvwM4vAQUp%2FR7Z8E0vs64Dgug8IL1aNoCSrA37TkcL06xzLMPmDg7u2jrvFT7fuZi0f6WOb4HyqglTyNelf3UMLEj43w46ADqJdhH%2BF7xKYkzSFtmve2j6aDYsxw7bNrK7qFAHQkWpwC7sO2Dfx4NAIDSipuQlx%2FgR8xT5hPuU3V5Z0QciS7Jkd5woIMfcxFTJzg%2BgqhZ&X-Amz-Signature=d77d586b441431f1a619d4e4e862d4aa032020cd24bcff87c2e983ccfff979ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

