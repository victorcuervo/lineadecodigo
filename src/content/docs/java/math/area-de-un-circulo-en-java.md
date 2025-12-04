---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMI4P2ZS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDtZjVMtLaof%2BSuBZeELi9De2qY7bB8rFtErWWZGUodJQIgcKeIkzGoWSzjvTstyFMXI9TEwgp85p2yN%2FxNSfPRcm8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDK4zURgPU%2FRg02m%2F2ircA8FXOmTRLqUrstoHFT2ZiMtn5Y2LV4OXkmFBZpHOMuTcIpNwdERpl2PkgpbsgSGeVwECpzvk0FSOps1r8yXGK9QHryo10eVLv2kqHEN7Aa9qtNoyXpKOqqZzLs4b%2B4c9lVMkfqAxdpjJdvT4qR8fWKhuAGCy6eIAU9yWU18cNwSgN4RO18qGB8ORZD5%2BgdsmKYpDQUlsQ7IAuMjOl9li9L5pFkcd0h%2FbYbrGzPHTRiRIJnHVx9vesP56YhClvuPaUGsjJbT%2Fr9K69DXa2PC%2FYPMrAjlDe3zwiU4%2F7tvLUxoHZJTJ84NJ7tKXmxsIM49MS61wbgM9jbT4RDXsx92XYtVnl1DDh3kjVdvnfeAyKg9m8dhLeU6YsxUVl%2Bm4AGoSaSAv6Xr%2B3hQNc0eLmCw622bjjhSPuJ4oxkbCGESjB0MPAMY8xbxMSQHmLBFq3RLS0DoWBR%2B2PnAsPcp2BVyLqqGpp8bMeF7mAYB5z7CoT3WFVTE%2FTgX%2BRzMZXomUkziYSOXJ6Oc5%2FYrpNA8bXv5RCKUlg7SW1uZoLrPB85RuiZNu1BqjlXQyEOcvxYEY9wFiQJUzN1r8b3bZD%2FJ2znqyJkSliGudhf5TF%2Ff9XgPnLGClYuE%2FqnJKxvmyszrcMPODxskGOqUBt6HpJIcCw2f7R7nWh0SCXGw%2BUMUjY2E8s8dSgz2u6mz7qbnhzyOKSXE5DGMEjPHjLOCffJzp2TyqzNuubkbWkWW0Vep7kCUb9ipAFDXQSm9Yn95m3ia%2FMrZpWGegnrMukt5r3jyeUWAt5z%2BQouiUrIQnvPnAWt22PsMtCc65zxoD0FsLizf0mlV%2Bl%2B4tu4XIZ%2FlwNIMONs54tj3HdAPs45z9L14t&X-Amz-Signature=643b9b494bb0246389f486307fc6e5da496835d266c00d80685081545a154478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

