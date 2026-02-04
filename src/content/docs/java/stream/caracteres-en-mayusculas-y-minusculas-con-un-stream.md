---
title: "Caracteres en mayúsculas y minúsculas con un Stream"
description: "El artículo explica cómo manejar caracteres en mayúsculas y minúsculas con un Stream en Java de manera alterna."
date: 2016-03-24
updatedDate: 2026-01-11
tags: ["string","touppercase","tolowercase","stream","collector","intstream","maptoobj","joining"]
slug: java/stream/caracteres-en-mayusculas-y-minusculas-con-un-stream
type: doc
topic: java
id: c0d47453-6a55-4916-af8e-eadcf4f87249
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/stream/MayusculasMinusculasStream.java
---

Uno de los ejemplos que pedisteis hace tiempo fue el de [convertir los caracteres de una cadena a mayúsculas y minúsculas de forma secuencial](http://lineadecodigo.com/java/palabra-mayusculas-minusculas/). En este caso vamos a ver cómo manejar los caracteres en mayúsculas y minúsculas con un `Stream`. De esta forma podremos comparar cómo nos ayudan los `Stream` de Java 8 en vez de la programación imperativa normal del lenguaje Java.


## Convertir cadena a array


Lo primero que haremos será convertir la cadena a un array de `String`. Ya que una de las cosas que vamos a ver más adelante es la complejidad de tratar las posiciones dentro de un `Stream`.


```java
String[] s = cadena.split("");
```


Para conseguir tener un array de `String` nos hemos apoyado en el método `.split()`.


## Crear un IntStream


Ahora que ya tenemos el array vamos a crear un `Stream` de enteros, es decir, un `IntStream`. Al final el `IntStream` es una secuencia de números. Esta secuencia la vamos a realizar desde el 0 hasta el tamaño de la cadena.


```java
IntStream.range(0, s.length)
```


Ten en cuenta que ahora tenemos números en el `Stream`. Pero lo que nos interesa es manejar las cadenas de nuestro array de `String`, es por ello que tenemos que convertir ese número en una cadena apoyándonos en el método `.mapToObj()`. 


## Mapear a objetos con mapToObj


La idea del método `.mapToObj()` es que dado un número le devolvamos un objeto, en este caso un `String`.


```java
.mapToObj(i -> i%2!=0 ? s[i].toUpperCase():s[i].toLowerCase())
```


Lo que hemos hecho en el Mapper es acceder a la posición del array con el entero y devolver su contenido. Pero hemos aprovechado para devolverlo en mayúsculas o en minúsculas atendiendo a su posición.


## Acumular con collect


Así que en este punto ya tenemos nuestros caracteres en mayúsculas o en minúsculas. Ahora en la operación final podemos hacer dos cosas. O volcarlo por pantalla mediante un `.forEach()`.


```java
IntStream.range(0, s.length)
  .mapToObj(i -> i%2!=0 ? s[i].toUpperCase():s[i].toLowerCase())
  .forEach(System.out::println);
```


O bien unirlos mediante una acumulación, la clase `Collector`. Para crear el `Collector` utilizamos el método `.collect()` y el tipo de acumulación que vamos a hacer es la acumulación de contenido, así que nos apoyaremos en el método `.joining()`.


```java
String cadena = IntStream.range(0, s.length)
  .mapToObj(i -> i%2!=0 ? s[i].toUpperCase():s[i].toLowerCase())
  .collect(Collectors.joining());
```


Ya tendremos nuestra cadena con la secuencia de caracteres en mayúsculas y minúsculas de forma alterna. Ahora ya puedes ver lo sencillo que es manejar caracteres en mayúsculas y minúsculas con un `Stream` y [comparar con la versión imperativa del lenguaje](http://lineadecodigo.com/java/palabra-mayusculas-minusculas/).

