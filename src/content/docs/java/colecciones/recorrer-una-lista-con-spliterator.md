---
title: "Recorrer una lista con Spliterator"
description: "Cómo recorrer una lista con Spliterator utilizando este sencillo interface y acciones sobre sus elementos mediante el método forEachRemaining"
date: 2022-05-10
updatedDate: 2026-01-08
tags: ["java-collection","arraylist","spliterator"]
slug: java/colecciones/recorrer-una-lista-con-spliterator
type: doc
topic: java
id: 545779f8-e6cd-42eb-8cb3-70f0ff00f2b2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/RecorrerListaSpliterator.java
---

En Línea de Código hemos visto [muchas formas de recorrer una lista con Java](https://lineadecodigo.com/tag/java-collection-list/). En este caso vamos a utilizar el interface [`Spliterator`](https://w3api.com/Java/Spliterator/) y vamos a ver cómo podemos recorrer una lista con Spliterator. Lo primero que tenemos que saber es qué es el interface [`Spliterator`](https://w3api.com/Java/Spliterator/). Pues el interface [`Spliterator`](https://w3api.com/Java/Spliterator/) es un interface que se introduce en [Java 8](https://www.manualweb.net/java/historia-java/) y que nos permite recorrer y dividir una secuencia de elementos. En nuestro caso no va a ser necesario el dividir la lista en partes ya que utilizaremos una lista de un tamaño pequeño, si bien para grandes volúmenes de datos podría ser interesante el dividir la lista para poder procesarla. Con estos conocimientos previos vamos manos a la obra y nos ponemos a codificar en [Java](https://www.manualweb.net/java/). El primer paso será definir una lista. En nuestro caso nos vamos a apoyar en el método [`.asList()`](http://www.w3api.com/Java/Arrays/asList) de la clase [`Arrays`](http://www.w3api.com/Java/Arrays/) para poder construir una lista de números enteros.


```java
ArrayList<Integer> lista = new ArrayList<Integer>(Arrays.asList(1,2,3,4,5,6,7,8,9,10));
```


Ahora crearemos el [`Spliterator`](https://w3api.com/Java/Spliterator/) sobre la lista. Esto lo conseguimos invocando al método [`.spliterator()`](http://www.w3api.com/Java/ArrayList/spliterator/) sobre la propia lista. Este método es implementado mediante la clase `ArrayList` con la que hemos creado nuestra lista.


```java
ArrayList<Integer> lista = new ArrayList<Integer>(Arrays.asList(1,2,3,4,5,6,7,8,9,10));
```


Una vez que tenemos creado este [`Spliterator`](https://w3api.com/Java/Spliterator/) vamos a invocar a su método [`.forEachRemaining()`](https://w3api.com/Java/Spliterator/forEachRemaining/) el cual recibe como parámetro la acción que queremos ejecutar por cada elemento de la lista. En nuestro caso lo que haremos será, en esta acción, mostrar el elemento por consola.


```java
si.forEachRemaining(n -> System.out.println(n));
```


De esta manera el código que necesitamos para recorrer una lista con Spliterator son estas tres sencillas líneas en [Java](https://www.manualweb.net/java/):


```java
ArrayList<Integer> lista = new ArrayList<Integer>(Arrays.asList(1,2,3,4,5,6,7,8,9,10));
    
Spliterator<Integer> si = lista.spliterator();
si.forEachRemaining(n -> System.out.println(n));
```


Espero que esta nueva forma de recorrer o iterar una lista en [Java](https://www.manualweb.net/java/) os sea de utilidad.

