---
title: "Listar una lista en Java"
description: "Se explica cómo listar una lista en Java utilizando ArrayList e Iterator para recorrer elementos."
date: 2007-01-27
updatedDate: 2026-01-09
tags: ["java-collection","arraylist","iterator"]
slug: java/colecciones/listar-una-lista-en-java
type: doc
topic: java
id: b312195c-03f6-4d50-a8a3-252d8281368f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/ListarLista.java
---

Nuestro objetivo es el de recorrer los elementos de la lista en [Java](https://www.manualweb.net/java/). El ejemplo constará de dos partes. En la primera definiremos la lista y la cargaremos con elementos. En la segunda parte utilizaremos un iterador para recorrer la lista. Empecemos... Lo primero que deberemos de tener, obviamente, será una lista. Para ello utilizaremos una estructura del tipo ArrayList. Veamos como sería la [línea de código](http://lineadecodigo.com/):


```java
// Definimos una ArrayList
List<string> list = new ArrayList<string>();</string></string>
```


Antes las listas se podían crear como genéricas, ahora hay que indicarle el tipo de elemento que va a ser insertado. Podemos seguir creando listas genéricas, pero esto ya está obsoleto en el lenguaje [Java](https://www.manualweb.net/java/). Cargaremos dicha estructura con datos utilizando [el método .add(elemento)](https://www.w3api.com/Java/ArrayList/add/). En nuestro caso le cargamos con tres elementos:


```java
// Añadimos elementos
list.add("Andrea");
list.add("Amaya");
list.add("Julio");
```


Una vez que tenemos nuestra lista nos bastará utilizar la clase Iterator para obtener un puntero que nos referencie a los elementos de la lista. En este punto tendremos que tener en cuenta que: el método hasNext() nos dice si hay más elementos y que el método .next() nos permite movernos al siguiente elemento.


```java
// Obtenemos un Iterador y recorremos la lista.
Iterator iter = list.iterator();
while (iter.hasNext())
  System.out.println(iter.next());
}
```

