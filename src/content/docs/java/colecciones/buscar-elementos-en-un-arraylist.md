---
title: "Buscar elementos en un ArrayList"
description: "Cómo utilizar el método .indexOf() para poder buscar elementos en un ArrayList en Java y saber, si existe, en qué posición se encuentra."
lastUpdated: 2025-12-19
slug: java/buscar-elementos-en-un-arraylist
author: victor_cuervo
---

Cuando utilizamos listas de elementos en Java puede ser de mucha utilidad el poder buscar elementos en un ArrayList en [Java](https://www.manualweb.net/java). La idea es poder comprobar si dentro de la lista existe un determinado elemento o no y si es posible saber en qué posición se encuentra. > Hay que recordar que las listas [`ArrayList`](http://w3api.com/Java/ArrayList/) pueden contener un mismo elemento las veces que queramos, a diferencia de los conjuntos o [`Set`](http://w3api.com/Java/Set/) dónde solo puede existir una única vez la clave del elemento.


Lo primero que haremos será [crear un ArrayList en Java](https://lineadecodigo.com/java/crear-un-arraylist-en-java/) y [cargarlo de elementos](https://lineadecodigo.com/java/insertar-elementos-en-un-arraylist/) para poder hacer las búsqueda posteriormente.


```java
ArrayList<String> list = new ArrayList<String>();

// Añadimos elementos
list.add("Marta");
list.add("Luis");
list.add("Francisco");
```


Cómo hemos creado un [`ArrayList`](http://w3api.com/Java/ArrayList/) de tipo [`String`](https://w3api.com/Java/String/) vamos a indicar cuál sería la cadena que queremos buscar. En este caso la cadena a buscar la definiremos de la siguiente forma:


```java
String sElementoaBuscar = "Luis";
```


Para poder realizar la búsqueda de este elemento dentro del [`ArrayList`](http://w3api.com/Java/ArrayList/) vamos a utilizar el método [`.indexOf()`](http://w3api.com/Java/ArrayList/indexOf). El método [`.indexOf()`](http://w3api.com/Java/ArrayList/indexOf) recibe como parámetro el elemento que queremos buscar en la lista. En el caso que el elemento se encuentre dentro de la lista se devolverá un entero con la posición en la que se encuentra. En el caso de que no lo encuentre dentro de la lista devolverá un número negativo. Es por ello que nos guardaremos el resultado de la búsqueda:


```java
int posicion = list.indexOf(sElementoaBuscar);
```


Y realizaremos la comprobación pertinente para saber si está o no en la lista:


```java
if (posicion >= 0)
  System.out.println("El elemento " + sElementoaBuscar + " está en la lista. En la posición " + posicion);
else
  System.out.println("El elemento " + sElementoaBuscar + " NO está en la lista");
```


De esta manera podemos utilizar el método [`.indexOf()`](http://w3api.com/Java/ArrayList/indexOf) para poder buscar elementos en un ArrayList de [Java](https://www.manualweb.net/java) de una forma muy sencilla. ¿Cómo podrías buscar todas las ocurrencias que apareciesen en el [`ArrayList`](http://w3api.com/Java/ArrayList/) de un elemento con código [Java](https://www.manualweb.net/java)?

