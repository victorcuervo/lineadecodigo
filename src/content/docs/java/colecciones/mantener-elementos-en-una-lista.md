---
title: "Mantener elementos en una lista"
description: "Cómo utilizar el método .retainAll() para poder mantener elementos en una lista en Java y eliminar aquellos elementos que no nos interesan."
date: 2021-10-26
updatedDate: 2026-01-08
tags: ["java-collection","arraylist","retainall","iterator"]
slug: java/colecciones/mantener-elementos-en-una-lista
author: Víctor Cuervo
type: doc
id: f1ecb915-9d7a-4744-83e4-d3c26bc79801
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/MantenerElementosLista.java
---

En otras ocasiones hemos planteado códigos que nos permiten [eliminar elementos de una lista](https://lineadecodigo.com/java/eliminar-todos-los-elementos-de-un-arraylist/) o [eliminar un rango de una lista](https://lineadecodigo.com/java/eliminar-un-rango-del-arraylist/) o [eliminado los elementos repetidos de una lista](https://lineadecodigo.com/java/eliminar-elementos-repetidos-de-un-arraylist/). Pero en el caso de hoy vamos a realizar un enfoque inverso y vamos a ver cómo podemos eliminar elementos tras la idea de mantener elementos en una lista con [Java](https://www.manualweb.net/java). Lo primero que vamos a hacer es, como siempre, crear la lista mediante una [`ArrayList`](http://w3api.com/Java/ArrayList/), en la que añadiremos elementos mediante el método [`.add()`](http://w3api.com/Java/ArrayList/add)


```java
// ArrayList con tamaño
ArrayList<Integer> numeros = new ArrayList<Integer>();
    
// Añadir elementos a un ArrayList
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


En este caso hemos creado un [`ArrayList`](http://w3api.com/Java/ArrayList/) de tipo [`Integer`](https://w3api.com/Java/Integer/) en el que almacenaremos los números del 1 al 9. Para realizar el enfoque de mantener elementos vamos a crear un segundo [`ArrayList`](http://w3api.com/Java/ArrayList/) el cual contenga los elementos del primero que nos interesa mantener.


```java
ArrayList<Integer> mantener = new ArrayList<Integer>();

mantener.add(2);
mantener.add(4);
```


Como se puede observar hemos creado un [`ArrayList`](http://w3api.com/Java/ArrayList/) con los números 2 y 4. Estos son los que queremos mantener del primer [`ArrayList`](http://w3api.com/Java/ArrayList/). Ahora recurrimos al método [`.retainAll()`](http://w3api.com/Java/ArrayList/retainAll) el cual aplicaremos sobre el [`ArrayList`](http://w3api.com/Java/ArrayList/) inicial y que recibe como parámetro el [`ArrayList`](http://w3api.com/Java/ArrayList/) que contiene los elementos a mantener. Quedándonos el siguiente código:


```java
numeros.retainAll(mantener);
```


Si recorremos el ArrayList inicial para ver qué elementos han quedado, podremos comprobar que solo existen los elementos 2 y 4.


```java
Iterator<Integer> it = numeros.iterator();
while(it.hasNext())
  System.out.println(it.next());
```


No apoyamos en un Iterator para poder recorrer el [`ArrayList`](http://w3api.com/Java/ArrayList/) de forma sencilla. De esta manera ya habremos conseguido realizar una eliminación de elementos aplicando el concepto de mantener elementos en una lista en [Java](https://www.manualweb.net/java) mediante el método [`.retainAll()`](http://w3api.com/Java/ArrayList/retainAll). Espero que el artículo os sea de utilidad. Nos puedes dejar en comentarios si has utilizado alguna vez esta forma de eliminar elementos de un [`ArrayList`](http://w3api.com/Java/ArrayList/).

