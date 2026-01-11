---
title: "Listar elementos de un array"
description: "Código que utiliza un bucle for para poder listar elementos de un array en Java."
date: 2007-06-17
updatedDate: 2026-01-11
tags: ["for","length","println","array","bucles"]
slug: java/arrays/listar-elementos-de-un-array
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/ListarElementosArray.java
topic: java

---

## Introducción


Para listar los elementos de un Array en [Java](https://www.manualweb.net/java/) deberemos de conocer la posición de cada elemento susceptible de ser listado. En el caso de querer listar todos los elementos del Array tendremos que recorrer, uno a uno, cada uno de los elementos que comprenden el Array.


## Listar un elemento específico


Lo primero que tenemos que saber es que para listar un determinado elemento deberemos de utilizar la siguiente sentencia:


```java
System.out.println(array[posicion]);
```


## Listar todos los elementos


Para mostrar todos los elementos utilizaremos una estructura repetitiva (por ejemplo el bucle for). Tendremos que iterar tantas veces como elementos comprendan el Array. Para saber el número de elementos que contiene el Array utilizamos la propiedad `.length`.


Al final, nuestro bucle quedaría algo así:


```java
for (int i = 0; i < array.length; i++) {
    System.out.println(array[i]);
}
```

