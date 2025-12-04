---
title: Área de un círculo en Java
description: "Utilizando la clase Java Math, su método Math.pow() y su constante Math.PI podremos calcular el área de un circulo en Java de forma sencilla."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En Java podemos encontrar [la librería Java Math](http://lineadecodigo.com/tag/java-math/) la cual nos ayuda a realizar **cálculos matemáticos**. Por ejemplo, nos podría ayudar en el **cálculo del área de un círculo en Java**. Y no es que el [lenguaje de programación Java](https://lineadecodigo.com/categoria/java/) tenga un método o una clase especializada en cálculo de áreas, si no que nos ofrece una serie de métodos y constantes para ayudarnos en su cálculo. Pero vayámoslo viendo paso a paso.


### ¿Qué es el área de un círculo?


Lo primero, por si hay algún despistado, será saber **qué es el área de un círculo**. El área de un círculo es la región delimitada por una circunferencia.


![Área de una circunferencia](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/16fb8842-6c2b-4aeb-a5e7-3cf73a601256/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QLWW2OF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCID39gQvyvjrSJ5iZK4%2BUTkPeNoYn6WaheANyQaqXxGYBAiAjdU5fElyhejjkkojJEkQeWmr8cB95k4u%2FFuOzzBsBdSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMwzwE089QdKoQluFhKtwDQNd%2BavvL8HFOBYpLjOeVpds972WgZWumtOI8sls4hT%2F0qeM9niF5nVQvVsSes9hHLou3E3Xxdkh7ixYuaow%2Ba%2Fac2q6erc%2FUs%2BfmYKAn%2FTCeSMHSrZXxLTLhJLHxTNPRhHhW0nJXbRgCGs0NwRhm9T0hRlNB3VghIf2YhSUkYSWEH%2FDQftfpVL2PBB67nwek3GNJ7LnNtyFOIVRFo9PuGy2uJZWSxVeStig7MJUCsCogLSJflp7qORwPYCSIeNMvST1uSJJxqHJ89J6tXLBeOHPSMfY2rQ0ooh9q%2FzXq29FbnbzpGhZlTUYlvrlRG9XR%2BqP%2F5FdiCwQfAPZS%2Fo90CHRjx0RLkd%2FHZpm6VEP3CFQQFk6LNcqoyaZTFbGwpOeNlSt6%2BvxWIu94FyB3sUk%2F807mIjVmDNbTqNLNoCB5Y2aZRuryWapkEbQK5lOf66TdM26BqyBzVPVfmRgsdG9xJD9Gu0ZfWnQ6Pxdmi3k7b2nCHfTzYThU5%2FO%2F6fM4N34MQGdTiB9fdhqeHMV7fccYpDP2OD3blOdk5t%2FQ9adLDgClSDmc4vxwgJv3MF%2Fc53YLKrcOUSAo6gyEkrfkf6KyVKTRMNMunPmnZP4LzqyCjasCHXGz4xOMVU90Q8Uw%2F%2BjEyQY6pgGYPrNUpnTwo%2B7hLpgoXu%2FiMKRUZEjbvHvOdvFlP%2FIsrB81iD1VYrYATxtjxklIeh98xzOZ6c2%2BlpuFTFkZSobT4ScETSef2joth0P5qE98mrFTeY69ygkkSjMnuaBz82jfnIQyyhKrLM7JNimXCyXObT5FsURJxuUjUiTH6COmmm1jxPoWWj9CN1n9aocKfoyQ4tXvHdTbv4C9%2FFUpArcyrszVNn1G&X-Amz-Signature=7f1ce5e4c61cf799877799992f199519ece2524d5f2caa84bfcb74d1bfa80bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

