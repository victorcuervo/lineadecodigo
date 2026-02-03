---
title: "Convertir un array en una lista"
description: "Uso de las clases de Collection para poder convertir un array en una lista."
date: 2007-06-29
updatedDate: 2026-01-08
tags: ["list","array","arraylist","aslist","java-collection"]
slug: java/arrays/convertir-un-array-en-una-lista
author: victor_cuervo
type: doc
topic: java
id: 6c1f343d-cf75-476c-96ef-260c5d7aa2b9
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/Array2List.java
---

El [framework Collections](http://lineadecodigo.com/tag/java-collection/) no solo nos proporciona un gran número de estructuras de datos para el desarrollo, sino que nos aporta una serie de algoritmos para su manejo y manipulación (ordenación, búsqueda, cálculos,...). Todo ello lo agrupa en un framework donde mediante clases abstractas e interfaces ofrece los algoritmos. Uno de estos algoritmos nos permite transformar los "arrays de toda la vida" en alguna de las estructura del [framework Collections](http://lineadecodigo.com/tag/java-collection/), consiguiendo, así, todas las ventajas de la [manipulación de Colecciones](http://lineadecodigo.com/tag/java-collection/). El método que nos permite la transformación, en este caso a una [estructura List](http://www.w3api.com/Java/List-java-util/), es:


```java
.asList( Array[] )
```


que lo encontramos en la clase abstracta Arrays. Nos basta con invocarlo directamente ya que es un método estático. Lo primero será crear un array e incializarlo:


```java
String[] cadenas = new String[3];
cadenas[0] = "Victor";
cadenas[1] = "Marta";
cadenas[2] = "Luis";
```


Una vez que tengamos el array tenemos que definir la lista a la cual transformaremos el array:


```java
List lista = new ArrayList();
```


y solo nos quedará invocar al método `.asList()`:


```java
lista = Arrays.asList(cadenas);
```

