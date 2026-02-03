---
title: "Parámetros variables en Java"
description: "Creación de un método que acepte parámetros variables en Java. Para ello utilizamos un método de suma."
date: 2015-09-08
updatedDate: 2026-01-09
tags: ["metodo","parametros","bucles","for"]
slug: java/clases/parametros-variables-en-java
author: victor_cuervo
type: doc
id: cef76b1b-e24b-428d-a4ef-f3d1db64ba35
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/ParametrosVariables.java
---

Cuando definimos un método en Java debemos de indicar el número de parámetros mediante su tipo y nombre. Si bien existe una forma de poder definir métodos con parámetros variables en [Java](https://www.manualweb.net/java/). Es decir, métodos a los cuales podamos invocar con más o menos parámetros dependiendo de la ocasión. Para explicar cómo podemos definir métodos con parámetros variable en [Java](https://www.manualweb.net/java/) vamos a implementar un método el cual nos sume todos los parámetros que le lleguen, independiente del número que sean. Un sumador. Lo primero que tenemos que saber es como definir la signatura del método para que este acepte parámetros variables en [Java](https://www.manualweb.net/java/). Para ello deberemos de apoyarnos en el operador tres puntos (...). Al asignar el operador de tres puntos a un tipo conseguimos indicar que podrán llegar N parámetros.


```java
public static int sumar(int... numeros) { ... } 
```


En este caso estamos indicando que llegarán N parámetros de tipo entero. De igual forma se puede aplicar si el tipo es un objeto en vez de un tipo primitivo. Por ejemplo podemos escribir:


```java
public static int sumar(Punto... puntos) { ... } 
```


En la implementación del método lo que vamos a manejar es un array. Es decir, los parámetros llegan en un array, cada posición del array contiene el valor de uno de los parámetros. De esta forma podemos acceder a ellos y manipularlos como si fuesen elementos de un array.


```java
// Primer parámetro
numeros[0];
```


En nuestro caso como queremos sumar los números que llegan y devolverlos como resultado. Así que lo que tendremos que hacer es [recorrer el array](http://lineadecodigo.com/java/listar-elementos-de-un-array/) e ir sumando los números.


```java
public static int sumar(int... numeros) {
	int suma = 0;
	for (int x=0;x<numeros.length;x++)
		suma += numeros[x];
	return suma;
}
```


Ahora para llamar al método simplemente tendremos que especificar más o menos números.


```java
System.out.println(sumar(2,3,4,5));
System.out.println(sumar(2,2));
```


Todas las invocaciones recibirán la suma de los valores enviados como parámetros.


De esta forma tan sencilla y mediante el ejemplo de la suma de valores hemos visto como podemos definir un **método con parámetros variables en Java**.

