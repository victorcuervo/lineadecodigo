---
title: "Volcar Array como cadena"
description: "Volcar Array como cadena permite mostrar el contenido del array de manera legible para facilitar la depuración en Java."
date: 2020-03-30
updatedDate: 2026-01-11
tags: ["arrays","tostring","println","array"]
slug: java/arrays/volcar-array-como-cadena
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/ArraytoString.java
topic: java

---

Volcar Array como cadena en [Java](http://www.manualweb.net/java) puede ser una buena opción si queremos realizar depuración en la ejecución de programas [Java](http://www.manualweb.net/java), ya que podremos ver y analizar el contenido del array en todo momento con un formato legible.


Ya vimos en el ejemplo [convertir un array en un String con Java](http://lineadecodigo.com/java/convertir-un-array-en-un-string-con-java/) sobre cómo podíamos convertir un array en una cadena, si bien era para poder conseguir una cadena que tuviese un significado a partir de los elementos almacenados en un array.


Pero en este caso la idea es poder ver como cadena los valores entre corchetes y separados con comas de forma legible.


## Ejemplo de Array


La idea es que si tenemos el siguiente array de números enteros en [Java](http://www.manualweb.net/java):


```java
int[] numeros = {1, 2, 3, 4, 5};
```


Podamos mostrar por consola los elementos del array de la siguiente manera:


```java
[1, 2, 3, 4, 5]
```


Así podemos consultar el contenido del array en una estructura entendible y fácilmente legible.


## Usar el método toString()


Para poder volcar Array como cadena en [Java](http://www.manualweb.net/java) lo que tenemos que hacer es apoyarnos en el método `.toString()` este método es de la clase `Arrays`. Este método recibe como parámetro el array que queremos volcar.


```java
Arrays.toString(numeros);
```


Ya solo quedará el mostrarlo por consola mediante el método `System.out.println()`:


```java
System.out.println(Arrays.toString(numeros));
```

