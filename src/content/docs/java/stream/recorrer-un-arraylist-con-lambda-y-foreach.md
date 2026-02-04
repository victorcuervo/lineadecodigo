---
title: "Recorrer un ArrayList con lambda y foreach"
description: "Artículo que nos explica cómo recorrer un ArrayList con lambda y foreach mediante un consumidor que nos muestra el contenido por consola."
date: 2021-10-12
updatedDate: 2026-01-09
tags: ["java-collection","lambda","arraylist","add","foreach","consumer"]
slug: java/stream/recorrer-un-arraylist-con-lambda-y-foreach
type: doc
topic: java
id: f7eb2566-b245-43bb-af2e-8e34d339764e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/RecorrerArrayListForEach.java
---

Existen muchas formas de recorrer un ArrayList para poder mostrar los elementos que contiene. Podemos [recorrer un ArrayList con un bucle for](https://lineadecodigo.com/java/recorrer-un-arraylist/), podemos [recorrerlo con un Iterador](https://lineadecodigo.com/java/iterar-un-arraylist/), [recorrerlo mediante un ListIterator](https://lineadecodigo.com/java/recorrer-una-lista-con-listiterator/), o bien, [podemos utilizar una estructura foreach para recorrer el ArrayList.](https://lineadecodigo.com/java/bucle-for-each-en-java/) Si bien, quizás no sepas que la clase [`ArrayList`](http://w3api.com/Java/ArrayList/) tiene un método que nos permite manipularlo mediante funciones lambda. Así que en este ejemplo vamos a ver cómo recorrer un ArrayList con lambda y foreach en [Java](https://www.manualweb.net/java). Lo primero es tener nuestro [`ArrayList`](http://w3api.com/Java/ArrayList/). Así que lo [creamos y cargamos una serie de elementos](https://lineadecodigo.com/java/crear-un-arraylist-en-java/):


```java
 ArrayList<String> list = new ArrayList<String>();

// Añadimos elementos
list.add("Marta");
list.add("Luis");
list.add("Francisco")
```


Utilizamos el método [`.add()`](http://w3api.com/Java/ArrayList/add) para ir añadiendo cada uno de los elementos del [`ArrayList`](http://w3api.com/Java/ArrayList/). Ahora tenemos que saber qué hay un método [`.forEach()`](http://w3api.com/Java/ArrayList/forEach/). Sí, sí, un método, que no una estructura. Este método nos permite manejar los elementos mediante funciones lambda. Su sintaxis espera que este método reciba un objeto [`Consumer`](http://w3api.com/Java/Consumer) que puede ser un método o una función lambda con [Java](https://www.manualweb.net/java).


```java
public void forEach(Consumer<? super E> action)
```


Este consumidor se ejecutará por cada uno de los elementos que contenga el ArrayList. El [`Consumer`](http://w3api.com/Java/Consumer) tiene una estructura dónde va el elemento a consumir, un operador arrow (->) y el método que se ejecuta. De esta manera el [`Consumer`](http://w3api.com/Java/Consumer) que le pasamos a nuestro método [`.forEach()`](http://w3api.com/Java/ArrayList/forEach/) será el siguiente:


```java
list.forEach((n) -> System.out.println(n));
```


De esta forma estaremos mostrando por consola todos los elementos que contiene en ArrayList. De esta forma hemos conseguido recorrer un ArrayList con lambda y foreach en [Java](https://www.manualweb.net/java). Y así lo añadiremos a todas esas formas que ya conocíamos para recorrer nuestros [`ArrayList`](http://w3api.com/Java/ArrayList/).

