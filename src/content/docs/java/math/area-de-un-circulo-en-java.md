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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPJHHUO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqsI54ZRtUmdDgaRe1iNfje3kW6kYoqMFNpf%2B0yJGjUAIhALixZ8gNrh01jAVQ%2BMlUI%2FAyFiFDgzfALsZJGvhDis4MKv8DCFUQABoMNjM3NDIzMTgzODA1Igw1HNhuMUUNOntcTsEq3ANmjrpFCwmCDz4U7aEoJPdZGa4lvdJDrc5ba3el7UbHz%2Bins50V43%2FHDOe0bTQDBLxsBH9MNVbkiBxp0r%2FEztKnE27ZuiN5pZ98h3htdf%2BN%2B%2B8SIqomtUAB%2FZn9bfoJ%2BQ0TV3A6hzNWwOJzlwZ9XDavOa9POIdu2zw1e47wQpfFgPqKCxUNS9NYte%2B1r5MEx%2BqK4%2FQY1o0fFxMzWxm1vECmcGc%2FVGGpQtgQQeD5q%2FbLGLDHR7cKKGl8Qz7wsyejnoIsv2I0MYYbYW1SZsR2ihaMiozhNcVfM8k8luBW2zdR4QP0f0pO1nXCCyWyVCCd6szSlC0pdVS4TjmutLGaqUwE6HPNvwHtloPgS%2Fh%2B4Pb04aYe6SUNuX0QN8ya%2FLQmsNp0ee4lrQIzKKCNa8dcW57oW359ZXvFTG2oTBVEsOfL8WSTU%2B3ZHWL08P60b5K5mROZK4mYsMby419mOo0GW7hAiU5BaxgUEBQEMTwzKCKJDknBgWnqt%2FoWIy6AngwlS3Pt4I7vqsyrzfM66XF2yB6g%2FSB5IN%2FGaTxYEBUQAmLVRvxjwqiuHRT%2BvGtA%2FY8842Fb%2FrG9om%2Fo0rXUNQ8OhGuMc3Wl36LcuJ7DjhIf0fZDZyYPF3bUQcJ1f3u7%2FTCwpsnJBjqkASzflND7QNIoOtBWZD%2Bow1lvDgBwfMhkSW%2BQlLWO4zwHBiDyY4Qldx%2F8m%2BBjYZ6GgAGqtUIAt7KkYOER6Zn%2B%2BDhPXrC%2FtXlceF3hwxkWtx77knK8BABw2%2BWfQu2L%2FS8R%2Bv4w0bcNhXR572XBuUdkbWMfOa4iW2TLPYRj9fmFEO15FHw5xwkRNUsvx5bF0vHUmV%2BB%2FxhBkwJQjX8XShsDo6diHwai&X-Amz-Signature=06e221888b3757780db7ad115e248280a8ad6ce336d3c871931ae9f895d56b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

