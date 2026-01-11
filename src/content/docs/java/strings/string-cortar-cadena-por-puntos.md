---
title: "String - Cortar cadena por puntos"
description: "Cómo cortar cadena por puntos mediante el lenguaje Java."
date: 2012-12-30
updatedDate: 2026-01-11
tags: ["string","split","regexp","for","for-each","bucles","array"]
slug: java/strings/string-cortar-cadena-por-puntos
author: Feffo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/CortarCadenaPorPuntos.java
topic: java

---

¡Buenas! Este será el primer ejemplo de un set de 5 ejemplos sobre manipulación de cadenas de caracteres, específicamente, la clase [String](https://www.w3api.com/Java/String/) de [Java](https://www.manualweb.net/java/). En este primer ejemplo vamos a ver cómo cortar cadena por puntos con [Java](https://www.manualweb.net/java/). 


> A modo de introducción, debemos tener en cuenta que no existe ningún método provisto por la clase [String](https://www.w3api.com/Java/String/) de Java que modifique al [String](https://www.w3api.com/Java/String/) que recibe el mensaje, sino que se retornará un String nuevo con el resultado de la operación.


## Cadena con puntos


Para empezar, dada una cadena de caracteres con subcadenas separadas por puntos, les voy a mostrar cómo obtener esas subcadenas. El ejemplo de cómo cortar cadena por puntos busca que dada la siguiente cadena de caracteres como puede ser


```java
String cadena = "[lineadecodigo.com.tiene.ejemplos.de](http://lineadecodigo.com.tiene.ejemplos.de/).programacion";
```


Obtengamos la partes que lo componen y que se separan por puntos:


```java
lineadecodigo
com
tiene
ejemplos
de
programacion
```


## Método split()


Para poder lograr esto haremos uso del método [split](https://www.w3api.com/Java/String/.split()) de la clase [String](https://www.w3api.com/Java/String/) de la siguiente forma:


```java
String[] subcadenas = cadena.split("\\.");
```


Cabe aclarar que en el método [split](https://www.w3api.com/Java/String/.split()) se usan [Expresiones Regulares](http://lineadecodigo.com/tag/java-util-regex/), es por esta razón que usamos **"\\."**, ya que el punto es un carácter especial en las Expresiones regulares y su fin es representar un carácter cualquiera; debido a esto debemos hacer uso de **"\\"** para indicar que realmente es el carácter punto el que buscamos y ningún otro.


## Recorrer el array


Una vez que tengas el arreglo de subcadenas podéis recorrerlo de las siguientes formas: Lo podemos recorrer mediante un simple bucle for:


```java
for (int x=0; x < subcadenas.length; x++)
    System.out.println(subcadenas[x]);
```


O bien utilizar un [bucle for each](http://lineadecodigo.com/java/bucle-for-each-en-java/).


```java
for (String subcadena:subcadenas)
    System.out.println(subcadena);
```


Recuerda que el [bucle for each](http://lineadecodigo.com/java/bucle-for-each-en-java/) puede ser usado con cualquier instancia de la interfaz Iterable

