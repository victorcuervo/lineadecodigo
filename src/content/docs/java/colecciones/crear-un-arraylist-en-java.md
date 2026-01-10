---
title: "Crear un ArrayList en Java"
description: "Análisis de las tres formas en las que se puede crear un ArrayList en Java."
date: 2014-09-28
updatedDate: 2026-01-10
tags: ["java-collection","arraylist","vector","add"]
slug: java/colecciones/crear-un-arraylist-en-java
author: Víctor Cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/CrearArrayList.java
topic: java

---

Un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) es una colección de [Java](https://www.manualweb.net/java/) que implementa el interface [List](http://www.w3api.com/Java/List-java-util/) y que por lo tanto nos puede servir como implementador de listas. Una de las cosas que tenemos que saber a la hora de crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) en [Java](https://www.manualweb.net/java/) es que se crean con un tamaño por defecto, que podemos de forma dinámica ir añadiendo elementos y que en el caso de que el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) supere su tamaño predefinido, automáticamente se le asignará un nuevo tamaño. Para crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) en [Java](https://www.manualweb.net/java/) tenemos tres formas:

- Crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) vacío
- Crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) con un tamaño por defecto
- Crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) desde otra colección

## Crear un ArrayList vacío


Para crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) en [Java](https://www.manualweb.net/java/) vacío solo tendremos que instanciar la clase [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) mediante un constructor.


```java
ArrayList<string> al = new ArrayList<string>();
```


> Recuerda que las colecciones hay que tiparlas. En este caso hemos tipado a [String](https://www.w3api.com/Java/String/) el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/)


## Crear un ArrayList con un tamaño por defecto


Para crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) en [Java](https://www.manualweb.net/java/) con un tamaño por defecto bastará con que indiquemos en el constructor el número de elementos que queremos que tenga en [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/).


```java
ArrayList<string> al = new ArrayList<string>(3);</string></string>
```


En este código hemos indicado que el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) tendrá capacidad para 3 elementos. 


## Crear un ArrayList desde otra colección


También podremos crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) desde los datos que contenga una colección: un vector, un conjunto,... Para ello lo primero será crear una colección con datos. En este caso vamos a crear un Vector.


```java
Vector<string> vector = new Vector<string>();
vector.add("Irene");
vector.add("María");
```


Y ahora vamos a crear el [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) con el contenido de este Vector. Para ello lo pasamos como parámetro del [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/).


```text
ArrayList<string> al = new ArrayList<string>(vector);
```


Ahora ya solo te queda elegir la forma en la que quieres crear un [ArrayList](https://www.w3api.com/Java/ArrayList/removeIf/) en [Java](https://www.manualweb.net/java/).

