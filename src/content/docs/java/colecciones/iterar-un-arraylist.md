---
title: "Iterar un ArrayList"
description: "Uso de un iterador para iterar un ArrayList y mostrar todos sus elementos por pantalla."
date: 2014-11-09
updatedDate: 2026-01-11
tags: ["iterator","arraylist","next","hasnext","java-collection"]
slug: java/colecciones/iterar-un-arraylist
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/IterarSobreLista.java
topic: java

---

Para ver los elementos que contiene un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) podemos [recorrer sus elementos mediante un simple bucle for](http://lineadecodigo.com/java/recorrer-un-arraylist/). Otra de las formas es iterar un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). Es decir, crear un elemento Iterator que nos permita movernos por cada uno de los elementos del [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). Lo primero que necesitamos es crear el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/).


```java
ArrayList<string> al = new ArrayList<string>();
				
// Añadir elementos a un ArrayList
al.add("Victor");
al.add("Luis");
al.add("Elena");
```


Para obtener el iterador sobre el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) llamaremos al método [.iterator() ](https://www.w3api.com/Java/ArrayList/removeIf/.iterator())del [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) y lo almacenaremos en un elemento [Iterator]( "Iterator Java").


```java
Iterator<string> it = al.iterator();
```


Para iterar un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) vamos a movernos por el iterador mediante los métodos .next(). El método .next() realiza dos operaciones, por un lado obtener el elemento sobre el que está iterando y luego mover el puntero hasta el siguiente elemento.


```java
while(it.hasNext())
  System.out.println(it.next());
```


Realizaremos la operación de iterar un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) hasta que no haya más elementos. Esto lo sabremos cuando el método .hasNext() nos devuelva false. Vemos que con tres sencillas líneas hemos realizado un programa que nos permite iterar un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) y mostrar todos sus elementos por pantalla.

