---
title: "Extraer una sublista en Java"
description: "Cómo utilizar el método .subList() de un ArrayLista para poder extraer una sublista en Java de elemento y almacenarlos en una nueva lista."
date: 2021-10-25
updatedDate: 2026-01-08
tags: ["java-collection","list","arraylist","sublist","iterator","size"]
slug: java/colecciones/extraer-una-sublista-en-java
type: doc
topic: java
id: eced210b-fe0f-46f0-89bc-085be10cddea
author: Víctor Cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/ExtraerSublista.java
---

Hemos trabajado [muchos artículos que nos han enseñado a manejar ArrayList en Java](https://lineadecodigo.com/tag/java-collection-arraylist/). En este caso vamos a ver uno más y es uno que nos ayude a extraer una sublista en [Java](https://www.manualweb.net/java). Es decir, partiremos de una lista que hayamos creado, por ejemplo, con un [`ArrayList`](http://w3api.com/Java/ArrayList/) y nos quedaremos con parte de esta lista en una nueva sublista. Lo primero será crear la lista inicial en [Java](https://www.manualweb.net/java) e insertar en ella una serie de elementos:


```java
ArrayList<Integer> lista = new ArrayList<Integer>(Arrays.asList(1,2,3,4,5,6,7,8,9,10));
```


En este caso, en vez de ir añadiendo elemento a elemento mediante el método [`.add()`](http://w3api.com/Java/ArrayList/add) vamos a utilizar el método [`Arrays.asList()`](https://w3api.com/Java/Arrays/asList) que nos permite crear un [`ArrayList`](http://w3api.com/Java/ArrayList/) a partir de una lista de elementos. Cómo podemos ver en este caso hemos creado un [`ArrayList`](http://w3api.com/Java/ArrayList/) de números enteros del 1 al 10. Lo siguiente será definir la sublista. En este caso vamos a definirla mediante la clase [`List`](https://w3api.com/Java/List-java-util/). Y ya que trabajamos con números enteros la definiremos de este tipo.


```java
List<Integer> sublista;
```


Recurriremos al método [`.subList()`](http://w3api.com/Java/ArrayList/subList) para poder extraer una sublista de la lista inicial. La sintaxis del método [`.subList()`](http://w3api.com/Java/ArrayList/subList) es la siguiente:


```java
public List<E> subList(int fromIndex, int toIndex)
```


Vemos que recibe como parámetros el índice inicial de la lista y el índice final de la lista de los cuales queremos extraer los elementos. De esta manera, si lo que queremos es extraer una sublista del número que está en la posición 5 (que es el número 6) hasta el final escribiremos lo siguiente:


```java
List<Integer> sublista = lista.subList(5, lista.size());
```


Podemos observar que nos apoyamos en el método [`.size()`](http://w3api.com/Java/ArrayList/size) para indicar el índice de final de la lista. Para poder comprobar los elementos que se han insertado en esta nueva sublista podemos utilizar un [`Iterator`](https://w3api.com/Java/Iterator/) para recorrerla y mostrarlo en pantalla:


```java
Iterator<Integer> it = sublista.iterator();
while(it.hasNext())
  System.out.println(it.next());
```


Y ya habremos conseguido nuestro objetivo de extraer una sublista en [Java](https://www.manualweb.net/java) de una manera sencilla mediante el método [`.subList()`](http://w3api.com/Java/ArrayList/subList). En el caso de qué hubiésemos querido quedarnos con los primeros cinco elementos ¿cómo lo habrías hecho? Cuéntanoslo en los comentarios. Cualquier otra cosa sobre cómo manejar sublistas en Java también será muy bien recibida.

