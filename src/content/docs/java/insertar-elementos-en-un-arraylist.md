---
title: Insertar elementos en un ArrayList
description: "Cómo utilizar el método .add() para insertar elementos en un ArrayList de Java de forma unitaria, pasando el elemento como parámetro del método."
lastUpdated: 2023-09-17
slug: /java/insertar-elementos-en-un-arraylist/
author: victor_cuervo
---

Una vez que hemos aprendido a crear un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) vamos a ver como podemos insertar elementos en un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) de [Java](https://www.manualweb.net/java/) para ir rellenándolo de información.


Para aprender a insertar elementos en un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) de [Java](https://www.manualweb.net/java/) tenemos que saber es que un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) implementa una lista de contenido dinámico. Es decir, según vayamos insertando elementos en el [`ArrayList`](https://www.w3api.com/Java/ArrayList/), el tamaño del mismo se irá incrementando dinámicamente.


### Crear un ArrayList en Java


Lo primero que haremos será crear el [`ArrayList`](https://www.w3api.com/Java/ArrayList/) para poder insertar los elementos en el posteriormente. Es decir, creamos un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) vacío.


```java
ArrayList al = new ArrayList();
```


En este caso hemos definido el tipo de datos que se almacenará dentro del [`ArrayList`](https://www.w3api.com/Java/ArrayList/) como cadenas de texto, es decir, de tipo [`String`](https://www.w3api.com/Java/String/) . Esto es así ya que todas las colecciones tienen que ir tipadas y los elementos que vamos a insertar en el [`ArrayList`](https://www.w3api.com/Java/ArrayList/) serán del tipo con el que lo hayamos definido, es decir, en este caso cadenas [`String`](https://www.w3api.com/Java/String/).


### Método .add() para insertar elementos en un ArrayList


Para insertar elementos en un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) de [Java](https://www.manualweb.net/java/) vamos a apoyarnos en el método [`.add()`](https://www.w3api.com/Java/ArrayList/add/). El método [`.add()`](https://www.w3api.com/Java/ArrayList/add/) tiene la siguiente sintaxis:


```java
al.add(Elemento);
```


Si analizamos su sintaxis, vemos que el parámetro que recibe el método [`.add()`](https://www.w3api.com/Java/ArrayList/add/) del [`ArrayList`](https://www.w3api.com/Java/ArrayList/) es el elemento que queramos insertar. Como en este caso son cadenas de texto, es decir, [`String`](https://www.w3api.com/Java/String/), realizaremos las siguientes operaciones:


```java
al.add("Victor");
al.add("Luis");
al.add("Elena");
```


Por cada una de las líneas estaremos insertando un elemento en el [`ArrayList`](https://www.w3api.com/Java/ArrayList/).


### Recorrer el contenido de un ArrayList en Java


Si quieres ver que elementos has insertado en el [`ArrayList`](https://www.w3api.com/Java/ArrayList/) puedes listar el contenido de dicho [`ArrayList`](https://www.w3api.com/Java/ArrayList/) recorriendo todos sus elementos mediante un bucle for y apoyándonos en el método [`.get()`](https://www.w3api.com/Java/ArrayList/get/) que nos devuelve el contenido de una posición del [`ArrayList`](https://www.w3api.com/Java/ArrayList/).


```java
for(int x=0;x<al.size();x++) {
  System.out.println(al.get(x));
}
```


Mediante este ejemplo hemos podido aprender a cómo podemos insertar elementos en un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) de [Java](https://www.manualweb.net/java/) mediante el método [`.add()`](https://www.w3api.com/Java/ArrayList/add/). Si quieres seguir aprendiendo sobre [`ArrayList`](https://www.w3api.com/Java/ArrayList/) no dejes de ver todas las [operaciones que podemos hacer con los ArrayList](https://lineadecodigo.com/tag/java-collection-arraylist/).

