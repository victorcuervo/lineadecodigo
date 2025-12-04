---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6M7BOS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBCel1HDOKcg%2F9%2F9AM%2BuZeIr64Dl%2BBr4JfZjYI17TueFAiAmPYdSCFFLjxY8iKrDLdRNT4afXTVhhDc7HKEMGBOb%2Bir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMjw3phTNkTGPa73cWKtwDVFcqHO5qSRbYx%2Fmx77lS9JRy3B3GbWJSJ%2BqztiECp%2BeYa24G0NY12FSannzPwjYOY255mdUw12HGvmxD52J8NiK1nMn6vM7cVRNIjRDrDdOCH%2FpcedZPfqtrUJ66lFD4BfKlwPaESY2QsPoWQYosPj2wnk3U7fM2jU2F6%2FKPmBHDyYx3nlxVTmDXdrnFQDvUyhfErzUQUqvCe42ZlVUmEw6wgbzS0ixPXG%2FOl7z0stijYQx4elX8Wvu2CpTDugai8yVTtHL9cGwUYuNAIB%2F0UcKzujP%2BixpOiA1t%2BRnKJmBD%2FWK7wChqC6RbUc7b%2FkTDwa7jDr%2FN3iz60MgxEP1JG%2B%2FRi5CDTjwAi2%2F7HbYWXVEo4hXGhU9hjQwNBMX5F38xhqH%2FqraeNW6aTIg42TifUYw4oZ97Lez9l9X0Ip7en9YWFfeRmQyF782ga2iV48HbZ406TMGQSg6%2B46hra6KeIUkMSlUSiynBWxRidkV1jar9WdRy%2BswoKIboideBa04IMFs6esjx74HijGZPbI1sWpdvQRtu8guyBBZ0Ngwktzm%2Bm5o3twrg49cgftTnNq4CjQgNRS%2FaWCHyrXCz9UB%2Bua47BgTQsQuUIrKST7G1QUuXA9d87zRsToTgWCkw%2B4XFyQY6pgH29cl9xyiqF%2BxG%2FnBwqTAkv9sIz6DWcX4WES%2Be9x72y%2BhsuuOxsmv3k27kP%2BfB6qak%2FNu8bTHEqC3z6IzeQ%2BveypG7X9WVexjT8%2Fn5aVl%2BdCKvFNJKmr%2FmaK95mwa4pLMcp%2FYmYF28yr9oSvzAK%2FmfZA2YhyLJrJSOsYpaheAAHTO9tV0uwiLXrfXiu7VeNQsf3h7EizBZfj5dP3xkrhx%2BM3Dzexay&X-Amz-Signature=f5e3670c257e4e0ee745a6a3d358477397a6f112df3c3c0eae70ea4e07cf02ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

