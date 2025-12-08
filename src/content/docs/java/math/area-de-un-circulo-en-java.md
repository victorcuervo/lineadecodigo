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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6PFZXF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxRzk%2FuYFj4AUdK1Fz5%2FYMm3GUhAp9QvbKYNr3lt3LWAiEA9V8OaEO2jsTXi4Uu3g%2F%2FaIwXneC3GN0skoUQhOwLKm8qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaQEydyKcPvbYV5mircA5zO2EkhhckerDcO7h%2Fhs0%2FleZrbcmQ5MW7%2Fjh2vScKbBpE96wqcQJuLLabvrp4zJpLMTwtnM3GqxLewqO8qVurlGHlQdk3jQW8UrgGMQGg82Uj4wBA8B2pM3kNRNdcWs1T8rCWhcffFbymgaSi1G0FSa3ryUdPuLD3sXiE2LG%2FEfIK57IjoX4vbJRkMQFRU%2F3k0Rh2KTw%2BNBbkMmgx1vXCMwj2dC8Qbrg%2FPIY%2FuBI%2FXdaLvwqg6pKVkDchTkAOFA8smYVNbTSRv82Oi7wbUhL2luUCDz4tlC0Azt08XAO9WagDKsFYK6Ln6llIti4Ieh88El3WF9bGrD2aHDydXm5ZCdxM1eaVoNhT9GCENZyrl8qPq7yw4XEtbeX07yCZRJ5K2HgHDU%2F6MkExT9cHiBw4hJkyV61BzwKBAY0lXe2i1gyS5SjRYNkHZ8tL%2BJeVC1DIPE5Mm9OK5IrDOIrlTiup3WxIZTWAgM8VL%2F8z2ESu1YVQIIb%2B6Nx28DSxABEa%2FuTGfoOkVcLcW4AtLfe5N6iswfMsQhLKZnahmcm71QmzTmylMw8GUJpvMUons79zCQBnepyjE2d4S99YnogIEhNB%2BnhEbbMRdxMmKwqTLTcJJbD7g0HQks785WwKyMLK02ckGOqUBjVowm6xEVN8ah4LiXQMV3%2BQglsOGPlcSZpF09Tk747y3poclWwIuGSHMBXp5bB187yeNLXwuZAcJHwFP%2B2DQg%2FepTUL7dDO%2Flhz50qNIMQ82rW%2BMTLkePVcBjdVk5o%2FLi%2FRfUBzUvXWLXW0PjhYCz41DmcTXOOkYY79IblO71EVNgr2Q0bUMrlAG7daj2qVa1DiLrfnSk3WVogIeSw6I1WwEDiQC&X-Amz-Signature=78b60c8c99569b4d061ccfb714cf24b5e0cab90a477aeb265ad3652ab68a5c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

