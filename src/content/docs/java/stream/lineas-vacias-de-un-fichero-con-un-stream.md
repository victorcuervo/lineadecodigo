---
title: "Líneas vacías de un fichero con un Stream"
description: "Uso de la programación funcional en Java para poder contar el número de líneas vacías de un fichero con un Stream."
date: 2015-09-19
updatedDate: 2026-02-12
tags: ["fichero","filter","lambda","stream","filereader","bufferedreader","java-io"]
slug: java/stream/lineas-vacias-de-un-fichero-con-un-stream
type: doc
topic: java
id: 2c8a9dfb-adca-8169-bb76-f9a9d682f11b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/NumeroDeFilasVaciasStream.java
---

Una de las cosas buenas de la programación funcional, cuando se entiende, es la facilidad con la que permite resolver muchos problemas.


Hoy vamos a ver cómo podemos contar las líneas vacías de un fichero con un `Stream` mediante programación funcional. Así lo podremos comparar con el anterior [artículo sobre cómo contar líneas vacías de un fichero con Java](http://lineadecodigo.com/java/numero-de-lineas-vacias-de-un-fichero/).


## Abrir el fichero


Inicialmente vamos a realizar la apertura del fichero mediante un [`FileReader`](https://www.w3api.com/Java/FileReader/) y un [`BufferedReader`](https://www.w3api.com/Java/BufferedReader/).


```java
FileReader fr = new FileReader("resources/fichero.txt");
BufferedReader bf = new BufferedReader(fr);
```


## Obtener el Stream


Ahora, sobre el [`BufferedReader`](https://www.w3api.com/Java/BufferedReader/), vamos a aplicar la programación funcional.


Una de las cosas que tenemos que saber de la programación funcional es que, de forma contraria a la programación imperativa, no existe el concepto de bucles.


Lo primero que haremos será obtener un `Stream`, que nos lo proporciona el método [`.lines()`](https://www.w3api.com/Java/BufferedReader/lines/).


```java
bf.lines();
```


> ℹ️ El manejo de `Stream` está disponible a partir de Java 1.8. Tenlo en cuenta cuando estés compilando el programa.


El `Stream` es el elemento que contiene los datos del fichero y sobre el cual vamos a aplicar operaciones.


## Filtrar líneas vacías


La primera operación será obtener las líneas vacías. Para ello aplicaremos un filtro mediante el método `.filter()`.


En este filtro utilizaremos un **predicado** con una **expresión lambda**.


```java
l -> l.isEmpty()
```


Esta expresión lambda indica que, por cada línea, se seleccionen aquellas que estén vacías.


## Contar resultados


Por último, realizaremos una operación final para contar el número de elementos que devuelve el filtro. Esto lo hace el método `.count()`.


```java
long vacias = bf.lines()
	.filter(l -> l.isEmpty())
	.count();
```


Como puedes ver, mediante la programación funcional en [Java](https://www.manualweb.net/java/) podemos contar las líneas vacías de un fichero con un `Stream` con una única línea de código.

