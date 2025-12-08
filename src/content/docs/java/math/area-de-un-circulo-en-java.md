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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAS4I3UW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIR7ixneouXw0ynQBQyxi9T8xERFAKrHM7XMnrQSVKcQIhAPmkUs7noSu6ze60n15ZOWRG5%2Bhl6qjiICRti552L8vHKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZVWLKjIci82ijXdsq3ANb0%2F2jaxClLgTRLq6SlCXkZxnJtqkx%2FSbmw1kxCZSy52eAbeuLWw%2FDAhvweWHIjWRRBK8YYRYvaYQtE%2F%2F2BmVWaXlB764fUjiamZf2s4Br9XJ2Tkv5MIumo%2BvBa%2FJCwY5Veu%2BAOdzfB9aLFNnT8iC%2Bs1uTB%2BCZMAaEBcIwKsp4O%2BiBS1IU9URcioS3gHMlQBX6EFG%2FYkuqK%2BmH6BYaJhp%2FKT7Pnrz6QvPm5DOstx2z9o6OkNAQycn7H73gmwDf9GcM%2BQ1YVu8xJd1tAwDKiM9WWiOfbWkypD%2FPrHG8qebiI%2FPWC91Ciacdg9kXDmfq%2BiNv62OrT0XgdhaDhCAS9edhqI%2BGFlN0hbdqfURZxf1k7JDDmu1gIHL66UlpMwzHyrGFxu92HuUnodzp742poU3ePjE14IxdF9V77K5S%2BbcTmaNkiUXMtdu3fw5qcsa%2BIMb9kq6ooCVF3aQbKbETtkCFqBik8u7Alm9FQktoXCOnLx1hq%2FiCkf1z3i1wsD4arLKTNk8JkG%2BUUSUY56j6Pbr5ifl6w7YA51FDU1rizmMT38Dc4zPWm0Pq58%2BVsiJ0pLEPlCKD4002AhNloetLE0yt8iiRNaqUTTIT5RMVIvw2xQGgcVhtd6nwxR0dwDCU79jJBjqkASKjp%2B4XTkWre%2B1QXHkg%2BtA7FN430ndq1XgtYLT9rF315pZ4goynErbKKBhSU1QpTNs33AmY1GqSohbHQ71gaW0fakBPTds7y7Yg3A7X3NA2PEt36zutPaXPwrzSpsDY%2F7lBUX7dnHOKdwRmX3wlCawZbmChFynTDyqbk0WGVHTflL%2Bd1S3TM5L7OoVolGdDpDaUFC0K11oaFpDaGdaoVLbR06x4&X-Amz-Signature=29e4ff57bc2cb13049e4c53521413239566f1d053de74a28d30a1307ad866f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

