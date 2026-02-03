---
title: "Ajustar la capacidad de un ArrayList"
description: "Cómo utilizar el método .trimToSize() para poder ajustar la capacidad de un ArrayList y optimizar el tamaño que ocupan en memoria."
date: 2022-05-12
updatedDate: 2026-01-08
tags: ["java-collection","arraylist","size","trimetosize"]
slug: java/colecciones/ajustar-la-capacidad-de-un-arraylist
author: victor_cuervo
type: doc
id: a5d06f62-85a8-4d5b-8342-a4faec6e976a
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/AjustarCapacidadArrayList.java
---

La capacidad de añadir y eliminar elementos en un [`ArrayList`](https://w3api.com/Java/ArrayList/) hace que el tamaño de memoria vaya cambiando de forma dinámica. De esa manera la máquina virtual se va adaptando y preparando para la carga que le puede ir llegando al array. Es por ello que hoy vamos a ver cómo podemos ajustar la capacidad de un ArrayList para que solo ocupe en memoria los elementos que tiene en un determinado momento. También hay que tener en cuenta que podemos haber definido un [`ArrayList`](https://w3api.com/Java/ArrayList/) que tenga un tamaño inicial y luego ver que realmente no necesitamos tanta capacidad. Además hay que tener en cuenta que, por defecto, **un** [**`ArrayList`**](https://w3api.com/Java/ArrayList/) **tiene preparado siempre en memoria la capacidad de 1,5 del tamaño actual que tenga el** [**`ArrayList`**](https://w3api.com/Java/ArrayList/). Y puede ser que nos interese ahorrar esa parte de la memoria. Como es habitual creamos un [`ArrayList`](https://w3api.com/Java/ArrayList/) y le añadimos elementos para poblarlo con una capacidad inicial:


```java
ArrayList<String> al = new ArrayList<String>();

// Añadir elementos a un ArrayList
al.add("Victor");
al.add("Luis");
al.add("Marta");
```


Ahora, lo único que tenemos que hacer para poder ajustar la capacidad de un ArrayList es invocar al método [`.trimToSize()`](https://w3api.com/Java/ArrayList/trimToSize):


```java
al.trimToSize();
```


En este momento cuando la máquina virtual ajusta el tamaño. Es importante que si pensamos en el tamaño del Array, este siempre será de tamaño 3. Si bien es en memoria dónde se ajusta la capacidad del ArrayList. Por lo tanto, si invocamos al método [`.size()`](https://w3api.com/Java/ArrayList/size) veremos que nos devuelve el valor de 3.


```java
System.out.println(al.size());
```


Para gestionar de una forma óptima la memoria con el uso de [`ArrayList`](https://w3api.com/Java/ArrayList/) podemos combinar esta técnica de ajustar la capacidad de un ArrayList con la [técnica de asegurar una capacidad mínima en un ArrayList](https://lineadecodigo.com/java/asegurar-la-capacidad-de-un-arraylist/). Seguro que si manipulas grandes cantidades de datos y los insertas y eliminas de un [`ArrayList`](https://w3api.com/Java/ArrayList/) este simple método te ayudará mucho para optimizar la memoria.

