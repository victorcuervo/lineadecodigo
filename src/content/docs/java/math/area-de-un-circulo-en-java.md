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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H5LH2XD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9sJwst%2F%2BVb3JiNWGb%2BmSIhRT6oA%2BAYraqo%2B0jMy5xgIhAIJMRDpP0K4nb74tzcOZ6sP5bzK%2F6vyWYuoPVG%2BMNnh2KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXBMNj8zfjpMEanfQq3AOuChcLxxp5S9NX4em1gXTYm3RJZHhKweFJcAw4bQ13J5ZnoVboFMQd92KXf8plbymHrlTPAlgqHXgJDyU8aaYAnRhbeGT74bSNXOJs4G5h%2BmWgbf9FaRxohmaiBA98RVgm%2BhmQFaEvHnwBipHAy3nmHr8JvijCGs9ehaywF0wkr6FyUNO5c0c7PEbPDNETBBYb3ujFfr354QglNGmLogq1sOCXo7NTg8lWDDfrNurWGTPisppHFuO4zviwttUQMUS1JJuJKD3zDLt1%2BzU0JhyqzUe1%2FGRgyPhz4UZh%2F2Hhzea%2FUmKg0TEfTHPRaqNpLMRRkJNNHUqm8YTgHMBbR05xqXqR2Kmkxe3C1ApdrNi4kA%2FSl0sKN7Qt6jAt2WebijsiFY6SD3zTzIEeeoYGWZRubE2jg6%2BvOc4w0v9bHGOafM5cvQXJ6sQmHbIJuP3d%2Fd8K0%2B6wLiaSEGdPGHO2UQkjEMTaqhgxxCmdGW5CVSTgp5AyesiU1zxKzUPwWLtTdYujQtRCZ35H4tTVS2ClADvYJuP9Sw4sngz0UeFC8r%2BnIK1i3TZd5NXejzow24Z3654%2FtDrgGNd9bd6PkrG0t38o2VpjHdho8zadcAbY5Va9aSqTIfP7fluDAr3f9TDnh9%2FJBjqkAZAZwZPHuh4w%2BDh3YnOnKnnxR4l%2BDLMiIdEpOruiD%2BQJJfMv5yMK1iS7D0q%2Fj81RQcYCv98t0z7RNhB58L7lRBjHOoclcoSoYqBlBWbJFTxLW5PgUGPQrq3is7vGVOi01SnXLEHyAseLy6ZNfHNJuml0pPAO%2Bc3l3ilLC87xgZGeh3iiqqQj818iGUWnP4Jn6LOLLpoZKJ7%2BLWboTWQQsTpd0yAj&X-Amz-Signature=54d3175464eab017fe449d37c45fdd0923cb47d2be11f2dc38a232bda6ddac32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

