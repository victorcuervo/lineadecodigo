---
title: "Eliminar un rango del ArrayList"
description: "Cómo utilizar el método protegido .removeRange() para poder eliminar un rango del ArrayList desde una posición inicial hasta una final."
date: 2021-10-19
updatedDate: 2026-01-07
tags: ["Java Collection","Java Collection ArrayList"]
slug: java/colecciones/eliminar-un-rango-del-arraylist
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/EliminarRangoLista.java
topic: java
---

Ya hemos visto [cómo podemos eliminar un elemento de un ArrayList](https://lineadecodigo.com/java/eliminar-un-elemento-de-un-arraylist/) o [eliminar todas las ocurrencias de un elemento dentro del ArrayList](http://lineadecodigo.com/java/eliminar-elementos-repetidos-de-un-arraylist/). Ahora lo que vamos a ver es cómo podemos eliminar un rango del ArrayList con [Java](http://www.manualweb.net/java). Es decir, eliminar desde una posición hasta otra posición, ambas posiciones incluidas. Siempre empezamos creando el [`ArrayList`](http://w3api.com/Java/ArrayList/)y añadiendo información al mismo. En este caso vamos a crear una clase que extienda un [`ArrayList`](http://w3api.com/Java/ArrayList/). Y esto es así ya que **vamos apoyarnos en un método protegido** del [`ArrayList`](http://w3api.com/Java/ArrayList/) que no podemos invocar directamente. Así definiremos la clase `EliminarRangoLista` de la siguiente forma:


```java
public class EliminarRangoLista extends ArrayList<Integer> { ... }
```


Así que para crear nuestro [`ArrayList`](http://w3api.com/Java/ArrayList/) lo que haremos será instanciar la clase que acabamos de crear:


```java
// ArrayList con tamaño
EliminarRangoLista numeros = new EliminarRangoLista();
```


Y le añadiremos una serie de elementos. Al ser un [`ArrayList`](http://w3api.com/Java/ArrayList/) de enteros, le añadimos números.


```java
numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(5);
numeros.add(6);
numeros.add(7);
numeros.add(8);
numeros.add(9);
```


Lo siguiente será pasar a eliminar un rango del [`ArrayList`](http://w3api.com/Java/ArrayList/) que acabamos de crear. Es decir, queremos eliminar los elementos que estén entre la posición X e Y. Por ejemplo, vamos a eliminar los elementos entre la posición 3 y 6, ambas inclusive. Para ello vamos a utilizar el método [`.removeRange()`](http://w3api.com/Java/ArrayList/removeRange/) del [`ArrayList`](http://w3api.com/Java/ArrayList/), el cual recibe como parámetro las posiciones inicial y final del rango a eliminar. Hay que saber que el método [`.removeRange()`](http://w3api.com/Java/ArrayList/removeRange/) es un método protegido, es por ello que hemos creado una clase que extendía la clase [`ArrayList`](http://w3api.com/Java/ArrayList/). Si pasamos a codificar, el código a ejecutar es el siguiente:


```java
numeros.removeRange(3,6);
```


De esta manera el método [`.removeRange()`](http://w3api.com/Java/ArrayList/removeRange/) habrá eliminado los elementos que hay entre las posiciones 3 y 6. Lo podremos comprobar si recorremos el [`ArrayList`](http://w3api.com/Java/ArrayList/) mediante una clase [`Iterator`](http://w3api.com/Java/Iterator/).


```java
Iterator<Integer> it = numeros.iterator();
while(it.hasNext())
  System.out.println(it.next());
```


Ya habremos conseguido eliminar un rango del ArrayList con [Java](http://www.manualweb.net/java) sabiendo manejar el método protegido [`.removeRange()`](http://w3api.com/Java/ArrayList/removeRange/). ¿Crees que será de utilidad cuando estés manejando listas dentro de tus programas?

