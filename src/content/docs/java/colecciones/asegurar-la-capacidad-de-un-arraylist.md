---
title: "Asegurar la capacidad de un ArrayList"
description: "Cómo utilizar el método .ensureCapacity() para asegurar la capacidad de un ArrayList en Java para poder insertar elementos en cualquier monento"
date: 2021-10-11
updatedDate: 2026-01-09
tags: ["java-collection","arraylist","size","ensurecapacity"]
slug: java/colecciones/asegurar-la-capacidad-de-un-arraylist
author: victor_cuervo
type: doc
topic: java
id: c41ce70c-233f-4414-bf2b-db8c7ba23399
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/AsegurarCapacidadArrayList.java
---

Un [ArrayList es una lista de elementos dinámicas](https://lineadecodigo.com/tag/java-collection-arraylist/), es decir, que nos permite crecer o decrecer en el número de elementos que contiene de forma dinámica a lo largo de la ejecución del programa. De esta forma, la JVM va controlando la capacidad que tiene que reservar en la memoria para hacer el tratamiento de dichos elementos. Si bien, si queremos asegurar la capacidad de un ArrayList en [Java](https://www.manualweb.net/java) deberemos de indicarlo de forma programática. Y es que en el tratamiento de grandes volúmenes de datos podríamos encontrarnos con el caso de que nos quedemos sin memoria para poder manipularlos. Y es, en este caso, dónde vamos a asegurarnos de la capacidad. La idea es hacerlo sobre un [`ArrayList`](http://w3api.com/Java/ArrayList/), es por ello que lo primero es partir de un [`ArrayList`](http://w3api.com/Java/ArrayList/).


```java
ArrayList<String> list = new ArrayList<String>();
```


Lo siguiente será indicar el número de elementos de los cuales queremos asegurar, para ello nos apoyamos en el método [`.ensureCapacity()`](http://w3api.com/Java/ArrayList/ensureCapacity/), indicando cómo parámetro el número de elementos.


```java
list.ensureCapacity(3000);
```


Es importante indicar que esta reserva de espacio no hará que cambien métodos como [`.size().`](http://w3api.com/Java/ArrayList/size/) Es decir, aunque hayamos asegurado la capacidad de 3000 elementos, no tendremos un tamaño de 3000 elementos, si no que seguirá siendo 0, mientras no insertemos nada


```java
System.out.println("El tamaño del ArrayList es " + list.size());
// Nos devolverá 0 elementos
```


Si bien, la JVM nos asegurará que, en cualquier momento de la ejecución del programa, se podrán insertar 3000 elementos sin problema alguno. Aunque sean pocas las ocasiones en las cuales lleguemos al límite de la memoria para procesar elementos, no está de más conocer **como asegurar la capacidad de un ArrayList en Java**.

