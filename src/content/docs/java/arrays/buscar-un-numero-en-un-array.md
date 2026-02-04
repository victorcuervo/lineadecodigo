---
title: "Buscar un número en un array"
description: "Si queremos buscar un número en un array con Java deberemos de convertir el array en una Lista y utilizar el método contains para la búsqueda."
date: 2020-09-03
updatedDate: 2026-01-08
tags: ["contains","array","list","aslist","java-collection"]
slug: java/arrays/buscar-un-numero-en-un-array
type: doc
topic: java
id: 39271adf-ecbf-49da-83fa-0ae2c4b72119
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/BuscarNumeroEnArray.java
---

Dentro de [Línea de Código podéis encontrar muchos artículos relativos a las búsquedas de Arrays en Java](http://lineadecodigo.com/tag/java-array/). En este caso vamos a implementar un método que nos permita buscar un número en un [array](http://lineadecodigo.com/tag/java-array/). Realmente seguimos el mismo modelo de búsqueda que explicamos en [Buscar en un Array](http://lineadecodigo.com/java/buscar-en-un-array/), pero en este caso buscaremos un número en vez de una palabra. Lo que implementaremos será un método `searchNumber()` el cual recibirá como parámetros el array con los números de la lista y el número que queremos buscar. La signatura del método será la siguiente:


```java
boolean searchNumber(int[] numbers, int numberToSearch)
```


Lo primero que haremos será convertir el array en una Lista, para ello utilizamos el método estático `Arrays.asList()` el cual recibe como parámetro un array. Nuestro array de números.


```java
Arrays.asList(numbers)
```


Este array de números lo convertimos a una lista ya que las listas tienen el método `contains()` el cual permite buscar un elemento dentro de esta lista. El método `contains()` recibirá como parámetro el número que queremos buscar. Así el código del método `searchNumber()` que nos permite buscar un número:


```java
private static boolean searchNumber(int[] numbers, int numberToSearch) {
  return Arrays.asList(numbers)
    .contains(numberToSearch);
}
```


Como el método `contains()` devuelve `true` si ha encontrado el número o `false` si no lo ha encontrado, lo ponemos directamente como valor de retorno del método que acabamos de definir. Ya solo nos quedará invocar al método `searchNumber()` para realizar la búsqueda en el array. Pero lo primero será definir el array y el número que queremos buscar.


```java
int[] numeros = {1,2,3,4,5,6,7,8};
int numberToSearch = 3;
```


Una vez que los hemos definido el array y el número realizamos la invocación al método `searchNumber()`:


```java
if (searchNumber(numeros,numberToSearch))
  System.out.println("El número " + numberToSearch + " está en la lista");
else
  System.out.println("El número " + numberToSearch + " NO está en la lista");
```


Y así tendremos completado nuestro código fuente que nos permite buscar un número en un array con [Java](https://www.manualweb.net/java).

