---
title: "Eliminar todos los elementos de un ArrayList"
description: "Ejecutar el método clear para eliminar todos los elementos de un ArrayList."
date: 2014-11-16
updatedDate: 2026-01-11
tags: ["arraylist","java-collection","list","size","clear"]
slug: java/colecciones/eliminar-todos-los-elementos-de-un-arraylist
author: victor_cuervo
type: doc
id: af6e9a98-1b0e-4348-8a0c-24d9f18a1b81
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/EliminarTodosElementosLista.java
---

En este ejemplo vamos a ver como podemos **eliminar todos los elementos** de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/). De esta manera dejaremos el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) totalmente vacío.


## Crear un ArrayList con elementos


Empezamos creando un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) sobre el que insertaremos elementos:


```java
ArrayList lista = new ArrayList();
lista.add("elemento1");
lista.add("elemento2");
lista.add("elemento3");
```


Si comprobamos [cuántos elementos contiene el ArrayList](http://lineadecodigo.com/java/numero-de-elementos-en-un-arraylist/):


```java
System.out.println(lista.size());
```


Veremos que nos responde que el tamaño es de **3 elementos**.


## Método clear()


Para eliminar todos los elementos de un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) bastará con que ejecutemos el [método .clear()](https://www.w3api.com/Java/ArrayList/removeIf/.clear()). Este método lo ejecutaremos directamente sobre el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/):


```java
lista.clear();
```


Automáticamente el ArrayList se quedará vacío de elementos. Si volvemos a validar [cuántos elementos contiene el ArrayList](http://lineadecodigo.com/java/numero-de-elementos-en-un-arraylist/) veremos que la respuesta es que el tamaño es de **0 elementos**.

