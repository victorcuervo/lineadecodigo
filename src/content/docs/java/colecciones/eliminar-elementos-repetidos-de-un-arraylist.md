---
title: "Eliminar elementos repetidos de un ArrayList"
description: "Cómo utilizar dos ArrayList y el método .removeAll() para poder eliminar elementos repetidos de un ArrayList con Java."
date: 2021-10-18
updatedDate: 2026-01-07
tags: ["java-collection","arraylist","add","removeall","iterator"]
slug: java/colecciones/eliminar-elementos-repetidos-de-un-arraylist
author: victor_cuervo
type: doc
topic: java
id: 0b91d227-c215-49bf-80e2-2734cd63a940
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/EliminarElementosRepetidosLista.java
---

Dentro de los [diferentes ejemplos que tenemos de manejo de ArrayList](https://lineadecodigo.com/tag/java-collection-arraylist/), hoy vamos a ver, cómo podemos eliminar elementos repetidos de un ArrayList con [Java](https://www.manualweb.net/java). Es decir, cómo hacer que todas las ocurrencias de un elemento que existan en el [`ArrayList`](http://w3api.com/Java/ArrayList/) sean eliminadas. Aunque podríamos utilizar el método [`.remove()`](http://w3api.com/Java/ArrayList/remove) e ir buscando todas las ocurrencias que haya de un elemento e irlo eliminando uno a uno, veremos una forma más sencilla y con muchas menos líneas de código para poder realizarlo. Pero vamos paso a paso para ver cómo lo vamos a resolver. Lo primero será crear el [`ArrayList`](http://w3api.com/Java/ArrayList/) que contenga todos los elementos base. En este caso vamos a crear un [`ArrayList`](http://w3api.com/Java/ArrayList/) de tipo [`String`](https://w3api.com/Java/String/), pero podríamos crear un [`ArrayList`](http://w3api.com/Java/ArrayList/) del tipo que queramos.


```java
// ArrayList con tamaño
ArrayList<String> al = new ArrayList<String>();
    
// Añadir elementos a un ArrayList
al.add("1");
al.add("2");
al.add("3");
al.add("1");
al.add("4");
al.add("5");
al.add("1");
al.add("6");
al.add("7");
```


Ahora vamos a necesitar un segundo [`ArrayList`](http://w3api.com/Java/ArrayList/) con los elementos que queramos eliminar del primero, ya sea 1 elemento o N elementos. El proceso para crearlo será exactamente igual que lo hemos hecho con el primer [`ArrayList`](http://w3api.com/Java/ArrayList/).


```java
ArrayList<String> eliminar = new ArrayList<String>();
eliminar.add("1");
```


En nuestro caso solo vamos a añadir un elemento, ya que solo queremos quitar el valor "1" de la lista original. Si queremos que el borrado sea de más elementos, simplemente bastará con añadirlos. Ahora recurrimos al método [`.removeAll()`](http://w3api.com/Java/ArrayList/removeAll) que nos permite eliminar todas las ocurrencias que existan en el [`ArrayList`](http://w3api.com/Java/ArrayList/) de una lista de elementos especificados como parámetro. Es por ello que invocaremos al método [`.removeAll()`](http://w3api.com/Java/ArrayList/removeAll) de la siguiente forma:


```java
al.removeAll(eliminar);
```


Solo nos quedará comprobar que en la lista original ya no aparecen elementos con el valor "1". Para ello podemos, simplemente, recorrer el [`ArrayList`](http://w3api.com/Java/ArrayList/) mediante un [`Iterator`](https://w3api.com/Java/Iterator/).


```java
Iterator<String> it = al.iterator();
while(it.hasNext())
  System.out.println(it.next());
```


Con esto ya habremos conseguido eliminar elementos repetidos de un ArrayList con [Java](https://www.manualweb.net/java). Es algo sencillo de realizar y que nos va a evitar crear mucho código para eliminar elementos.

