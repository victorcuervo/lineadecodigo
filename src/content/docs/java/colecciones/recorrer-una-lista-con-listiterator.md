---
title: "Recorrer una lista con ListIterator"
description: "Un ListIterator permite recorrer una lista hacia delante y hacia atrás, mostrando elementos en orden inverso."
date: 2014-11-10
updatedDate: 2026-01-10
tags: ["java-collection","arraylist","listiterator","previous","next","hasprevious","hasnext"]
slug: java/colecciones/recorrer-una-lista-con-listiterator
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/IteradorLista.java
topic: java

---

Un ListIterator es un iterador [Java](https://www.manualweb.net/java/) que nos permite recorrer una lista de elementos en varias direcciones, bien hacia delante o bien hacía atrás. Para recorrer una lista con ListIterator lo primero que tenemos que hacer es crear una lista. En este caso vamos a crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/).


```java
ArrayList<string> al = new ArrayList<string>();

// Añadir elementos a un ArrayList
al.add("Victor");
al.add("Luis");
al.add("Elena");
```


Lo siguiente para recorrer una lista con ListIterator será obtener el puntero al iterador, esto lo conseguimos mediante el método [.listIterator()](https://www.w3api.com/Java/ArrayList/removeIf/.listIterator()). El puntero se quedará sobre un elemento ListIterator.


```java
ListIterator<string> it = al.listIterator();
```


Ahora que hemos obtenido el puntero podemos recorrer una lista con ListIterator desplazando el puntero hacia delante o moviendo el puntero hacía atrás. Esta segunda opción será muy útil para mostrar los elementos en orden inverso de la lista. Podemos recorrer una lista con ListIterator hacia delante que seguirá el mismo mecanismo que cuando explicábamos como iterar un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). De esta forma moveremos el iterador mediante el método [.next()](https://www.w3api.com/Java/ListIterator/next/) y controlaremos el final de la lista mediante el método .hasNext().


```java
while(it.hasNext())
  System.out.println(it.next());
```


Pero podemos recorrer una lista con ListIterator en orden inverso. En este caso vamos a utilizar el método [.previous()](https://www.w3api.com/Java/ListIterator/previous/).


```java
while(it.hasPrevious())
  System.out.println(it.previous());
```


Sabremos si hemos llegado al principio de la lista cuando el método .hasPrevious() nos devuelva false.

