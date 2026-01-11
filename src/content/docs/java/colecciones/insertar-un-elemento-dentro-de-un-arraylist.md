---
title: "Insertar un elemento dentro de un ArrayList"
description: "Ejemplo de como utilizar el método .add para insertar un elemento dentro de un ArrayList."
date: 2014-10-20
updatedDate: 2026-01-11
tags: ["arraylist","add","list","java-collection"]
slug: java/colecciones/insertar-un-elemento-dentro-de-un-arraylist
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/AddElementosPosicionLista.java
topic: java

---

## ¿Qué es un ArrayList?


Un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) se compone de una lista de elementos o nodos que están relacionados y los cuales podemos ir recorriendo. Como representación de una lista podremos **insertar un elemento dentro de un ArrayList**.


Para poder insertar un elemento dentro de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) deberemos de saber que los elementos que hay dentro del [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) están numerados, siendo el **0 el índice del primer elemento**.


## Ejemplo de índices en ArrayList


Si creamos la siguiente [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/):


```java
ArrayList<String> lista = new ArrayList<String>();
lista.add("Elemento 1");
lista.add("Elemento 2");
lista.add("Elemento 3");
lista.add("Elemento 4");
```


Tendremos los siguientes índices:


```shell
0 - Elemento 1
1 - Elemento 2
2 - Elemento 3
3 - Elemento 4
```


## Insertar elementos con el método .add()


Para insertar un elemento dentro de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) vamos a ayudarnos del [método .add](https://www.w3api.com/Java/ArrayList/add/). Este método es el mismo que utilizamos para [insertar elementos en un ArrayList](http://lineadecodigo.com/java/insertar-elementos-en-un-arraylist/).


Pero en este caso vamos a hacer uso del **índice**. Y es que el índice será el valor que pasaremos como primer parámetro del [método .add](https://www.w3api.com/Java/ArrayList/add/). Si se obvia dicho valor se añadirá el elemento al final de la lista.


```java
lista.add(1, "Nuevo Elemento");
```


El anterior código se utiliza insertar un elemento dentro de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/), en concreto en la **posición 1**. Quedándonos nuestra [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) de la siguiente forma:


```java
0 - Elemento 1
1 - Nuevo Elemento
2 - Elemento 2
3 - Elemento 3
4 - Elemento 4
```


Como podemos ver desplaza todos los elementos, incluido el elemento que se encontraba en dicha posición.


## Insertar al principio del ArrayList


Si ahora queremos insertar un elemento al principio del [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) bastará con que indiquemos el **índice 0**.


```java
lista.add(0, "Primer Elemento");
```


Ahora nuestro [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) se quedará de la siguiente forma:


```shell
0 - Primer Elemento
1 - Elemento 1
2 - Nuevo Elemento
3 - Elemento 2
4 - Elemento 3
5 - Elemento 4
```


Ya hemos visto como utilizar el [método .add](https://www.w3api.com/Java/ArrayList/add/) para insertar un elemento dentro de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/).

