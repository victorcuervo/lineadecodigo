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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626D4KESW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUBySKJCUpUoW%2FbVH3lDeJzgalyVObzykZSS3IPoJijAiAKnnkagSqsnz1jLe3LI73tspsKBe9yE78Jm2aYqmUeRyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMWZTzajX76h3m2HQ9KtwD%2BgxSZkI1orOjkwFgElgyYXkGVsQkqGcGKE%2Ffq2%2B5P1NIS1rIbKVnQeFs0KPdqUBQgQ5fvERggmQ33ntjIb5LmvsBoq4piFtVojbdUfMOcmZQJpGi02kgW%2Bn5Crjyft29ulluiQuZLQjkMs7yFQEsv8OTBx7m%2FMiV4s%2BcevnBPzfXOgnedt2g%2ByYg2xqvCuuIemkJGWoHM1eicXeE8RFxhXjKT%2B6hpGQGqMI4vlFjcrF78y6BlqrwBQ5R48LrOa%2BanVX9vxkM4D3UueJtrTkqSOW1kSEThezzLVPu2v8v0fwenhn9d2TMJwcX22ypkd5%2F6jgAQ2SNPueu7%2BiUjjepRX%2BT%2FVasbd3SWnEekbEEaMUVXqG1%2Fsb9RMbR6PxvmBUQIxtLsmIbYcKPmVxeugIM3TsVVZUJB%2BmcM3Pk9S0r2JTjfxAxIjgnowf1Xsn2pwPTKHZsgqTMnEJ5FqRvtZD3HfQKcmuotTdBRlyyTkEalI0JamlQlaK43iEcWoo9y3vbrSa1ZTCE%2BPnqfKsZ2h3rhMqQ0Ti3eJ0UJALZZz0NKra%2BbUMSGNTQMgSJ6FTrY6Oudj2CbEpqhSjMsN2cIof%2B7wgl3%2FlKEiuZw%2Bub4Cs8O5bX4qo0knbmnwRv6uAw4sPRyQY6pgGZjVZsUU0rZJ6rwV6rq8qzaBjfGeqvr%2FlCsMKdGeOga6UHQJkeXwZK2M6Zx7%2B67t0sZwjLjJt0HkCeRf7%2B23lGYbW0s06h%2F5FEgEYpgiV7clfhFggf88p4w7QdlkN%2FxL5015J9B3hqHwBLVUWUwc6zrwh%2BObfHY58%2F8EQSJaHaUt2W5jZ5nCDUknX59TUBJFH2pRpVcJkfPL8tgX%2BWOmssvxNFIp64&X-Amz-Signature=271fc5da55578b4658973b763ee3fc37b3fc1520e0bb3bb7feac4ff5513c48cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

