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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MMMBRK7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T034929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjw%2BdF6LrqvNioHZbaT9wJZWkad2XHbmFGQPupVhrGGgIgKfAGpTk%2BTLZ1ePKwFrUQ5AR1jtwIGKFN1FAsRbOHlBwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAWtwgE06EHESMCDpyrcA%2FeqoJ7w2H8a7qGHl2q5U%2Br7yLOGIzNSYztN%2BTm0onKxWmlwORib%2FBOBYmzX%2Br7j3AobUZR2u2Bq5MzeKWIHjYWiJl2OypTPvKyUG%2FoUOPqbIg5oRwBhxYubyWRDWI4Iw4%2F4q4ecunDk6BZmbq%2BSGdpotVHjBqExtNeCwRHq9%2Fd3xd9o3K8UJk7A7kKcw3GFwY4sLd1C6fPpAx%2Fe583VY9LjSO0Y6C5ObtKsZ1WkvcnvO0fbhwtr5J8gRHZ%2Fk5G5redBtxc8WA4RzOtP7iVE%2FI2FXiLsrbDs7%2FKvOjPoBSrN47NZoEn5fButX0P4lPr9F50lkj4TSCyaGSD%2FPX%2FYry0hg%2BknJXsihLzTTB5Mv0iaMXmQkXlFz0OYzV3jBf%2Fusjofj5nKlZw52whiar33b07jPk8cJFpaVchYo3Fa18rRoJj%2FJOAAYGAMCGSBYSX5ge09ox1E3eA%2F2LALzKZJsrE2S8Xyj9c2RqgUhLQFNVGdvX50XwTpniaxEHFHkojWpf%2BhARrwQJPC7eAG%2B6C5mJcimsAFF3dIMyb7pfkCeaEmpu5p3E9JfQ3xp4XvHYmSBhWQJtkjkyXBa58sOaWGK%2Bk8cpEcV3%2FBMrd3brFijzOWD1ONnr5oK2aUd%2F8cMO%2FDzskGOqUBdTOTiWbjb%2B3xT2Q8jXdLspbqgTZY9DIz%2FGoy9yqkTpPeoPPKPu4IHZvXEV8Z5l%2Bs9gO7AxtkwrSKRjl4mg%2B972lBog9Qml%2BJaUM4MgSCjytux92gQfkErCWLcXZ7fEw9jEqRbYz%2B9QPBOGrCyFs%2F2b9MhzCV1BNUY8znsWrcVX326VlEN0vKogBd2thbN8wR6gHtLs7ngyuoXckNscO8yWMqshuE&X-Amz-Signature=c57df944563e0155043b8d7f2b0102128e4308d30911c0571cad7b810a49aa12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

