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


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NGHJ7B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Y%2FFvnjPpCO2KB05aojPYp%2B%2BGGv5YpI8Jd5GF0zzWogIgbeolDCLHy%2BuoSKCOzN%2BxGOymcEXHc3ruFT%2ByyzKNJYwq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIWM69yr8swRJTTFhCrcA2M8RRzqfX2e1%2FgqbPCno0sVH%2F3QWsc4YAlTgy%2BIm4e%2Fx5w24HkL3BhujtL73bM0qC6QZtq97b0qzL3%2Bq0XeV%2BSwcm%2BA69CnPd%2Bi50iNkn0GTVieb2AEQTf7GEeiSd82OOG8NxrXFbbM6dCghD3a5L9KFlBIxc1C8j9iUkPG8tNI8l7%2BtPvOF1esO8RX9i029KVIMgw%2B7pB8dOg34L33WHmGx2pDPjMv1%2BDnTKqFY2Jnu7d19DzMGYFH7o%2F3tGpjGJWs5K4vOqzE31ESuzEXsQu%2BFL56q3VcT9dZ2mW8unehEr7fjFWda6R70JnHgIyyzEMnCwMboy3tEQ%2BvZSQ%2BZ%2FgMJ%2BcYTiXmEK4dCOgxhQkC1h7vKprNukrAo9ShvlXU2blAhyRhCgbWYyfGukmdnE4mLsfKcn0kxdfTwYAywlAT1ehIFDKQpdESyyhPuDNQMmK8r6h1yAtvO2MEc9WoGnhwy8N6BLbLzrnDIi1uPt0fHwhuxP3crGXu7oBN5Ccg2oCfSk8%2BqgPv8vkiqT%2BDix28P7jakTPvYxGnII1X7Gv6mIYhsPB%2FF3rmKr%2Bz2rBNnek5q3EcK%2F1%2F5c3jwiZRbcOsah5LOKUm9wAyjOOpnnN1sf3DwiRYK5NM8DsAMNPezskGOqUB4d7OQERVdNJYUI2A1oGBbJ%2FCJE14bULmIXcKWbgoSu89VFcBibqPxExCVmgCFjYKlJl1Hz5XDsSe1tW%2BP5BB4Qt%2BN2rRktBEdTaw839m5eYaNFdWWaGBdNPU0U8qK3NsTVyotjt9eoHDh5Aa02rUFNDC3kV19%2FiNMbYPySVAuk8aIo9FiMCXsVhn1rMZdpAvkk8S5nKZObSpmkaIrAXLhmOxem4U&X-Amz-Signature=6bf2c6f5035b4fa0299cd2fc63c3128deb2ca84f71d027f69e8fd2770c2b85eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

