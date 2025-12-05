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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZO7ZAWL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGouPcCTsb3xb%2Ba611dErhYSfZ2hzPP%2Buy5%2F44H7s0mAiB0EsadiOG9KXdIn7KoF3rqNmB16ErQPjzkns266s9mZir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM15xwlzvSbcmGv%2F2jKtwDQjNM2rKoAx9Ggc%2FEyljUQwAkmKkobNKHwKWVa2VTb5kPJHvy0QHD312%2B2t6Zbk17PC%2F7sm6%2FdrVp5YgUzssBbZu9H%2F9txqWhQTGx2gsuAtTOkayl1Mg9OgcxKHMwn0%2FZhi43vOy4x0G5%2FZCuy5q9%2B873t98sBHe%2Bv0q07GEDvHatf1JiBCGMsERkIJZNKGbhk8GdvveWl2nG5a%2ByQ%2BaZgIZswGxjDOikjykxa8c%2B33dKBAhZMRGSfV6JeClOJrF4AwlFrAc2JFeQXLpZkKHxslSuuqX9BUf0fSs%2B9Ew0gdQ5ruk0Wr2o5spal9ux6GRttuc%2BT6xpu%2BdwJM1YQCXNt%2BLnwjmrCrShCtLkZCiGMTkDdx%2BocCb6ZyQayMycSyFqVzdx6%2FByD6o47Qi%2BeJRq293kUBgN%2BHdlLbxia7qhV598h2mbaRVqAIIatIM6xxhfsK33m4D5aE9tOKyFjKl11BuGOK9pJPxTlCdarf4bFYvhL1wwKt3U7KVTjkBRZVe7hUOZ%2FdSb3wlA7gqOt4oN2U8vj%2BPyjuI%2FtvjqvS0FmBgudyUeizP%2BE7ffXU4XXV%2Fv2mOL77K5Mqqs%2BnRv6%2FZYGrNEyO55FIBmubJ9c5U6zScEuD0p3urOdK1GPkIw0%2FLLyQY6pgH5Qed9LdxEpScJOfX%2F9UcqNheozaCLloUMW%2FdmbW%2B0SA3dXD2yO585ABS%2Bf3SIrlMwv2lqV93xtoTPAs0YQOz2pOSfJ3ccLXTq4VPGyRVt39p8jZiGn0G1TAsY7RVYl%2F99zL41IJnUKkE36BM9crKIrARFhoJuQwu%2BhU3vWY1ImmfJDunU2Z1b0GqJ5obnkUY0Q%2BxsCoJg%2FjUggNsclNTTJqaoshMl&X-Amz-Signature=933587a32057ee2efac28ea7fe6f312a48dc670160100c87322973384ffa7344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

