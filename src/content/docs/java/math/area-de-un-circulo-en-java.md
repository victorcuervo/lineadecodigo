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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNLJVXB2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiTNRuwVjD65CqDwQdVpsVx68vBC5eCv2CB5DRHOraHAiB9raIS6updlCCYH4llgX3j%2BcljteJ2eFCeOsqgbXZx%2BSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBVG05xWev9tFC81oKtwDiPhIomIpsqjwIM0yBhqNmfjK8%2FRmTv%2FJUNxgZuQ3LEIWTyw6wip%2BrF7Cxyodv8tEVeABiKoJn1sBnweesllcGhvA%2ByiC9hEdQRZ0cB6M7NNlTKymer80KIvc6nCR%2BlX9%2BdpbFqPcfErCnXEYjyBmk9gtq3IZ%2FT68kGQ5SA8wdamOwLmUZoBGKTHuhvWc0h7d7Lc3S61WT%2FDhDIdvMO8c7tsJXdRDv5MPw8VA470prYL%2FSDvOoKBwFcbt7RVtQ4v0Xv1YvczzCCDHXcDKtRgRgnSm3QiVWmCW9rJclfrSWVGaHxNtS%2BQYzQ4Rwa4Ea6aen25ghSdx6jTMrfvtudogwKyTuqaSfRlkUCTGX95bs3r4eAtFzjDuszoCmQRAoFgThGJWEjxcKY211DWO9Fmhq73biKucKFIZ8%2FOj4Md43JVrsa7IjQTtuaxnUzzX99cYiw0Z7rgxgzRpnzBasZo8HMIUXImX%2BHY3%2BBgQN%2FZSdYvJhnjOZfrh4NNgBKkoi96VVfaH2M1WGh8pcbp8e1W5VT36imxZOej7nzpBauhdKt5Je%2FhE29j16pKb2FbpLJOfOGJxF17BGs54SpXFgxYUumcgXKo7HKwuoBb7EGV0i%2Bdncs76HwItFpRr5%2FIwi6jXyQY6pgFM%2BTdP6FRTC6oL5XDsD84fzblDbfMTrk8J07T5atkUWAvBtxx6cJPHd70uG68xzkgZgx4E%2FQiDbvcUCkMf0BKRf3HeOSnTLT8NzWEg4hfRZTAIzne2rxYHJijDP9uv0%2FOAhTCqUjQgpVj5MH5jvEQY%2BWZKcR42u7XBMN%2B650tnqYjVvIDliw4KaoJHY9ooRaCsmr0g90fWEQNU3AwwbcTVed9JjDdj&X-Amz-Signature=4e8d4c3f7e1cc59a0bab7f3e543e654ee2ca1057780937291faeee384cb6f783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

