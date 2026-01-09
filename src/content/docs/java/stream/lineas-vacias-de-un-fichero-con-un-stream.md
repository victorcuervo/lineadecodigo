---
title: "Líneas vacías de un fichero con un Stream"
description: "Uso de la programación funcional en Java para poder contar el número de líneas vacías de un fichero con un Stream."
date: 2015-09-19
updatedDate: 2026-01-09
tags: ["fichero","filter","lambda","stream","filereader","bufferedreader","java-io"]
slug: java/stream/lineas-vacias-de-un-fichero-con-un-stream
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/NumeroDeFilasVaciasStream.java
topic: java

---

Una de las cosas buenas de la programación funcional, cuando se entiende, es la facilidad de programar las cosas. Hoy vamos a ver como podemos contar las líneas vacías de un fichero con un `Stream` mediante programación funcional. Y así lo podremos comparar con el anterior [artículo sobre Cómo contar líneas vacías de un fichero con Java](http://lineadecodigo.com/java/numero-de-lineas-vacias-de-un-fichero/). Inicialmente vamos a realizar la apertura del fichero mediante un [`FileReader`](https://www.w3api.com/Java/File/exists/Reader) y un [`BufferedReader`](https://www.w3api.com/Java/BufferedReader/readLine/).


```java
FileReader fr = new FileReader("resources/fichero.txt");
BufferedReader bf = new BufferedReader(fr);
```


Ahora sobre el [`BufferedReader`](https://www.w3api.com/Java/BufferedReader/readLine/) vamos a aplicar la programación funcional. Una de las cosas que tenemos que saber de la programación funcional es que, de forma contraria a la programación imperativa, no existe el concepto de bucles. Lo primero que haremos será obtener un `Stream`, este nos lo proporciona el método [`.lines()`](https://www.w3api.com/Java/BufferedReader/readLine/.lines()).


```java
long vacias = bf.lines();
```


> 


	El manejo de `Stream` está disponible a partir de Java 1.8. Tenlo en cuenta cuando estés compilando el programa.


El `Stream` es el elemento que contiene los datos del fichero y sobre el cual vamos a aplicar operaciones. La primera será obtener las filas vacías, así que aplicaremos un filtro mediante el método `.filter()`.


```java
long vacias = bf.lines().filter();
```


En este filtro utilizaremos un **predicado** con una **expresión lambda**. La **expresión lambda** que vamos a utilizar es:


```java
l -> l.isEmpty()
```


Esta **expresión lambda** lo que indica es que por cada línea, seleccionar aquellas que estén vacías. Es decir, sobre todas las líneas hemos aplicado un método filtro y el filtro indica que deben seleccionarse las líneas vacías. Así que solo nos quedará realizar una última operación u operación final, que será contar el número de elementos que devuelve el filtro. Esto lo hace el método `.count()`.


```java
long vacias = bf.lines().filter(l -> l.isEmpty()).count();
```


Como podéis ver, mediante la programación funcional en [Java](https://www.manualweb.net/java/) podemos realizar la cuenta de líneas vacías de un fichero con un `Stream` mediante una única línea de código.

