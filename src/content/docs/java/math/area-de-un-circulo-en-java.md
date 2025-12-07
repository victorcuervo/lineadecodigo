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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZQ5VEB5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T072730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs7QQFAH5Lv61NDkfkoWEmo0NEqaKQLbRSp7erz2VyCAIhAJcxQ3ylb%2Bsg%2BE2a93hQUphtKgeT3VI7On5dBOtHDAGLKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfBE%2BKrlk%2BpqGet04q3AOYVd2jTIvE0FPD5QZxCDlOWr8%2FTKIc3Q1%2BDtk3PTtrf21sCu%2FEj7cbonA%2FrTGj4bnIOGNz3hs0ZaHk5IiL7JEoXRyvh3U6bMbeXVgCYwg1Gkopg2idZoRycrtms25mC8EzmFrh3vU%2F9SB%2F2KJCbVYIUq9eYDDRMaKUMAsqK5SEsoB3QM2YIg1F%2BgcnDipj0SzdsIe%2B%2Fr%2FmIZAAx2w1iPQmEIS9FeIl3cCDRGa1hwOrjKZOe1ZlidN3K6mAj0KUkVrFdDR%2B5v9Dv00mhLTsevBx9SV3%2FEWwpyl56anEd8dI2PGqfCUT0Yf8p9BBddy01KhZdg2%2F0UjWbewFUevD61h7K8MnqEc22Oqv9Pga9xEB8yWmnrL22mPqRoat%2BkzS%2B8Oao8%2BJSRgZqTw%2B67L9ilavPTstqZlEJEi7%2B0NgHG4fMIGkydsYROIoKstpMj1z92WfequDq8M%2F%2F0EfFmmefOqfWdBWpn96pdNg7JosytlQGhsdN8L4PfcBC3M30Sy1ljTnBgwuuomMNgJYDrpc5%2B960BUC7ZaIuTq3B6Etzt3bJ%2FBgCwOhxLOA6fBkgOA%2FfsZgel6M2zcmtCst0fNxs4tNuoji5YhL8Gws%2F4txHXqBbphT5pubYaYtmDn7%2FDCqo9TJBjqkAVvThWf4uhjVpxZUeUehNgafgOlg0ycp4dRjKGrAb2C8sC3%2FhJ8vMUoc9IFtRH2KjMKVs%2FdXvaOoiXeiXnTm7PMKv0tXIpzi3Umdhq%2BsUeyTc1Y1EDiLtdeZCKoHybyVPYceENCUyE%2BlE1%2BFs1cjBQfR4kghElPGLGStt2aurPj7KW4fzXHlkaVPNPswvnJPsgINM3oRbFgAKHwbalbu5exy20pj&X-Amz-Signature=3cb1204f2075449bfd1698eb034315a2740e47a19fd29232302e1a49b147393f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

