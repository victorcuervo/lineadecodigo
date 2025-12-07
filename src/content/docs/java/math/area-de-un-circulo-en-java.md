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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3R6W75%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T103623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm56Ns%2F7NJBhxovgBudM%2B2AhkKA0lPhsJrnq%2BuNql1wwIga0Yj3s7cMoP8ssFUuxTtFQcObtBaPZr%2BNTV2uf57ws0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSO37L7wkvTjBMmyrcA62XgZ2gF4XeODiwIq5r4HNteWqKBbi4c2L4ucJcVutAdut1gkNg9BOSxMwYCM4qsz%2BFKW5fsbHe%2FYSvOmAPKWG3XqADcx%2FgDS7jmWL%2BLeZb0oKx6hL6q1SCiNIp92CBwXztydNf4R6VQ2ZRB%2B7cKTbLePVM%2BEyIryO2cve2gROQDzf3IiVaVtlvE0qr9WAKp3mLmHtNHrZjGsLuofy6zPiejnJhkYHYjeOI7Jzd68Uhp7Dpfmz339JAZF2Jh6%2BQXo8m%2FpjL2%2Fvl5sZDNy0kbX%2F89cHpw1miGcqpGN6ECMXteg7Kj2cssX2Cv5fPfU5ho2gSxd%2F6AI%2FrTiBKcYAWT9NR5XeqySO6IidsJFexs3Y%2BnxRJmNDKLun4vUKtfSMG8%2FbvV6%2BG%2BHaCMl5quGS3aMhiUXJNrnsBwU0DB3PCQZvqSGMdz0knnDf%2FXPyPEaHH3cYJWOmY%2FAfOMbgYQkbLr5OObb5uTV0DBMP0Hm3mcljXHINzqs2LSsgZt3QrNXuRdSn9tm33a8mM5AnHJDOmbJfXNZMsTBw4Qbre0%2BbC4iyHdtyp2o9jJZhdXFlpZtnfvQJ7EOfBHkE7vD83DedXHZBsRfNO66aiWMdtufSFtq6lfJhTBVTc%2FX7pHzfmMMua1ckGOqUBHmRClG%2FkHrnwAAWeZTeAwrkvA9WSjPWMIs5aDMxdXN4Fq4PvpcxMaEfpz2BGtDHM%2BICd49y9%2Fna3ifQmBfWDoCbG90QAjeOdduYeYMzEs7U6TblP%2FLjm%2BOg3Fs0XrvUu3Uhs3PCi3gqEy5NxCzcvR%2BKP0WjRS%2FoBSa4cC3spmzi%2Fh9eQd6aGuIio8Xzz9ZBqgYY7A0SjxJDjBd7kRUJ6z2D%2BeBSJ&X-Amz-Signature=a9e0447904b529328a01df0b673d8a35282bc69ae3ecd09aebb246e72cea6b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

