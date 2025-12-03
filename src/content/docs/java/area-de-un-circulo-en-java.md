---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastupdates: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BDGWZGN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHe%2FwvGw38i6mi4W24anz%2B3C%2B5L812XiM8Mktc%2Fw3TAuAiEAhbYqx%2BuiMe05n9BXZkmrhQLjoGMmQ7EPTJh5Q7mC%2BY4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCi3oyUAQRTtZtZQEircA47PKGb%2BZhNuDHwAQtVwwPG91J9cnPtnRgemvUZoPNPABOnsU0HSTlVrsL%2BZlTFPjKI0LjQv0u4XA11P%2FQneALwxP0rg5ZS%2FlKse74qCZ5N2CU8K515f6eLQ1aP8IRW1V7%2BPxX%2BQQnlaR%2BkYqKDjvnCdkS1vDYq2Y9ccItk6sP2eIFmJwcs75e5u5458QJnKC0y5Ad%2Bft76r6G42hwbbYeukThXdWOxKo04hNZzV68soVoeM4jwzQterF9ihjNMNyRXs%2Fq5pjlAnL59q%2BOTPrQAkFE3ATZqvGHU%2FbuDDJHpW6zi8WeJXPhKMbvQrNL5T4l4pGk9ktmXKCiLmhpDJaKG5xz%2FLGljEmJEj1eQVHnXZtnJZP1edH6hOivoE1IAKvyYF3t1ZH%2FGnGxkq%2FdyFaEFdZwE1qSie39lcoJthxHAv7hihf0zS%2BBrc%2FkQsit6rIE3gM5Hh8W2QbYHEryITiIdNMgEY9hp14Wzgf5DIlOvuDXxujfBiDs8Ad8T39IPzuf0bw5%2BpTjUzsKXCoBg6qKZ5wrxC%2BFSUjx0iTAp4EH3EUCD%2B1EstOTXFkhNHLuLyCnjT55%2Bcwu5Za0dE3XTqr5aFg2Uq97ET%2Bv016MmU6S7UxanRDtrJcrFcQvLAMJLdwskGOqUBuwUSNO0OjH4s7ZThd0W3OYlKCzBvSt1T%2BRPrf08xwtMvCNN2gJSwN%2FNL1WCCiNfrMamQXvQuy9mu%2F43WKplf9PFBDivDkGdSgYrZJx3JuH3sN3qsK8ZIOYq%2BeKfBh7RVThUcEtLgElZi0MylPNXGGOC5ukVp3i23srbNc8TsVm0A1f2GZQI7uv2TZhJtI7jSIfCcGMIKXjYoT7WVFlU81vZ9NC2U&X-Amz-Signature=c7341ff96935024de04e6f1bdb7ac75ecb4fc3b9dc3523a5154c0c80c359e642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

