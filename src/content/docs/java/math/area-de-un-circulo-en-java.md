---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BLQMR7N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDHUcj%2BzTI8hnzDMQjSEmPSz7HitBwTvJ%2FjJavqIBpQggIhALLrGyBxEgSCAchuJoU3X6efGR4xRF10RvRlWZdDbSEBKv8DCEgQABoMNjM3NDIzMTgzODA1IgzLJsq7L%2BCCafhv1pUq3AMbCBXj4RGapT6K%2FyX7KzvDtx0cg9ZZD4lYu%2FGfazMfixut%2F4v5%2FZupg5E1qcI5p6wvgt80KWj0CW6k6YzLtDzhh67xhKEW1VJJsNv0uAF5et6T0mxwX88eZi%2BxNaxhi3%2BC7QRA0USqUQ3qKF4uNJgPE4nBy3hqcmRRCffrjCaqnK%2BQ2lCIEhDP%2FzW5yOszO4FEGgt0P31TfNsERcvXOTOhPDRc894U6V%2F%2FiZXudo2fX1ZF8Zkwca9cPppwRGg7MP5oS%2BNG3mgdqZohOBzpNbbFbZvaZpStvHfZgn0EwRht3tRc51Lj%2F8VKwDR%2BrUu9Zrq6fu6sqVLfVcVKa0%2F8CKm2YVjanAJqLkbECM63VjBv%2BRH6ZYtf%2BAs2uUAoWI7p%2BirKoNq%2BbCgFhFXioMPwcwWLUqhiHEOULbqRNjoeN9DShikMgrTW3GOSm8vEurp2nVTaPEy%2FvipcBlh8%2FbifsQWCRpmg7JVaKJ0t%2FMnd9P5mENraXaq0aFNLXYeRomZK%2Bd%2BlIxP2s5ai8x9km1MeFRlyap1pQH6Tn5%2FARDCp%2FXR%2F4%2Fh6KRBhc2GEAWKtQM5iiX1UQx4RpJFbO4ppc54nPylcrRk3Vo5qfIsTXhnRixpU%2Bjj17yHLkbfWumZS8TDevsbJBjqkAePJl7wpPfA6N2TJWS3hzdI%2FEBjvjU276rSGzRRDn2hC%2Byg%2FHqfgXuSSLiFyCOBh2thViLyACnflC3C66Z9j59ueKIx3Pv7DMU%2Bzq5AXlJmk3SAOXEhBss1owRgQHY0RWANmK398IHP0mNWOR9yK%2FShGbADpf6va6fny%2F0JsSk6QStKlktXWMJHBL%2BaGDiBPOLFnWt57cvFDEOsZ5r8S7j%2FjAHTD&X-Amz-Signature=c64f9b494dbc38507581fbe62ec36c41f2015bedc14351861882006125dd8bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

