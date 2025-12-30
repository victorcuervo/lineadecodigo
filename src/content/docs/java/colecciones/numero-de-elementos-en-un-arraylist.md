---
title: "Número de elementos en un ArrayList"
description: "Se explica cómo calcular el número de elementos en un ArrayList en Java utilizando el método .size()."
publishDate: 2014-11-14
updatedDate: 2025-12-30
tags: ["java-collection","arraylist","size"]
slug: java/numero-de-elementos-en-un-arraylist
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/TamanioLista.java
---

Cuando estemos manipulando una lista será muy útil saber cuál es el número de elementos en un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). Ya que lo normal es que operaciones del usuario estén añadiendo y eliminando elementos de forma continua. Lo primero, crear el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/).


```java
ArrayList<string> al = new ArrayList<string>();
 
// Añadir elementos a un ArrayList
al.add("Victor");
al.add("Luis");
al.add("Elena");
```


Podemos saber cuál es el número de elementos en un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) utilizando [el método .size()](https://www.w3api.com/Java/ArrayList/size/).


```java
int tamanio = al.size();
System.out.println("El número de elementos es de "+tamanio);
```


Una vez que sabemos cuál es el número de elementos en un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) podemos realizar cosas como recorrer el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/), apoyándonos en el tamaño.


```java
for(int x=0;x<tamanio;x++) {
	System.out.println(al.get(x));
}
```


¿Qué otras cosas se te ocurren en las cuales es interesante saber el número de elementos en un [`ArrayList`](https://www.w3api.com/Java/ArrayList/)?

