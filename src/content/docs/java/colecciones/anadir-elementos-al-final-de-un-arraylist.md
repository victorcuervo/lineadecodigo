---
title: "Añadir elementos al final de un ArrayList"
description: "Código que nos explica como podemos utilizar el método addAll para añadir elementos al final de un ArrayList."
date: 2014-10-22
updatedDate: 2026-01-11
tags: ["java-collection","arraylist","vector","add","addall"]
slug: java/colecciones/anadir-elementos-al-final-de-un-arraylist
type: doc
topic: java
id: 7a475bad-71a3-4eb3-bc95-52f0162e8ded
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/AddElementosFinalLista.java
---

Ya hemos visto como insertar elementos en un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) con el lenguaje [Java](https://www.manualweb.net/java/), ahora vamos a ver como podemos añadir elementos al final de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). Para ello nos vamos a basar en tener elementos en una colección, con dicha colección podremos añadir elementos al final de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). Así, lo primero será crear una colección con elementos. Por ejemplo un [Vector](https://www.w3api.com/Java/Vector/add/):


```java
Vector<String> v = new Vector<String>();
v.add("Irene");
v.add("María");
```


Ahora vamos a ver como sería nuestro [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). Hemos creado ya un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) al cual hemos insertado elementos para poder ver el efecto de añadir elementos al final de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/).


```java
ArrayList<String> al = new ArrayList<String>();
al.add("Victor");
al.add("Luis");
al.add("Elena");
```


Si mostramos el contenido por pantalla veremos que aparece:


```java
{"Victor","Luis","Elena"}
```


Para añadir elementos al final de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) vamos a apoyarnos en el método [.addAll](https://www.w3api.com/Java/ArrayList/removeIf/.addAll()). Dicho método recibe como parámetro la colección de elementos que hemos definido en el [Vector](https://www.w3api.com/Java/Vector/add/) y se ejecutará como método sobre nuestro [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/).


```java
al.addAll(v);
```


Si ahora volvemos a recorrer nuestro [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/):


```java
for(int x=0; x<al.size(); x++) {
  System.out.println(al.get(x));
}
```


Lo que tenemos será el siguiente contenido:


```java
{"Victor","Luis","Elena","Irene","María"}
```


Veremos que hemos añadido los elementos del [Vector](https://www.w3api.com/Java/Vector/add/) al final del [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). El método [.addAll](https://www.w3api.com/Java/ArrayList/removeIf/.addAll()) nos ha servido para añadir elementos al final de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) de una forma muy sencilla.

