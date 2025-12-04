---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAYZYH3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFzlz675X1v%2BNOesFXQKI3jqEN21m4k9PZMzDVVUWYcoAiEAyUjLK1q19jjsmDz%2FdGq3ZyO8ctrwL3smEbmk5czjT4Uq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCZ7niz2zoQebHjwASrcA918TSBdi9nOrsN5APSvaTWhZT5r6uKZDojOYlx1hBaC%2BjvUb%2BIHhzUqTlphr4oMuS68pezB1N1MRQUZfQ0%2B%2BwH4Vzf2cZSnqqRp7RDpW9BKx7sbc%2FcArYnWZuZGqzhsbyIt0eyXfW%2F9FXXO5%2F9BMcSpj68mTK5fhVr4nvA8Nk28gaLxc2TIFqv1ZNld40DX9uMH2ykHvk2IjG%2Bi3%2FGLuS90M%2FZZ0p%2FzwVctI1azulfWAlVnKFV9AQoo3kZ3MmK63fsJKPiexbYYIt7tj0VGHAiB1Vya8%2FSu%2BW%2BYSyS7RGNpE8nVNuNhit8GBCyJt26IdeTpHx0G1mYeleJsc%2FkyVAgvq2QsRJXer6IVlZ2D6xMZKQk%2F2lwcc2NjZDbiNT3zyWj4MbnTDB8E1P1RCa%2BgXHOFOFlBffVHaaWofIB7izqF%2BYRq3lp%2BaSlpwppSLN4aI%2BHrugfpLRB5s9Tw59FS4et6C37Dh5ztVuF7w5TPBm7R6rnVsXQ3VvGQ%2B%2FadaAA%2B6xXv3AF1Sjz7eubLbBWO6h7ESHawBvg86An5wtCfZunMM7OoWo3BsZjfNtsWNWG8Velz40wkMqUFuR5jtq3FqpBgAsSNbSgXx0zpzBsSWx%2BKckMBDuSY9N4mTcU3MOnnxckGOqUBI9zslbAJCm5uVRkV1W24pwdUoZo9dK%2FZi5LMgWGAFoB7%2FgSt3HwIvfM%2Fn96x67%2FYZiN4yai9Zb0DgpMt5gw0xAQcZZ4S8wj1VocFDL5yomW4b28EUfcdkOShX5dhC41y77Zd8LRoQsuOdpddxNIiTAvrVBVHgxG3Qi8tZ158HC4eNXq%2F0QGP8t16iZV4pAJl3iJPfYmioSSLxUxSjf22O%2FyF73R%2F&X-Amz-Signature=5c981cafda0843c4960ed106aac89db10afe5d9e19a310aeb6ad576080a7b7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

