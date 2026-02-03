---
title: "Búsqueda binaria con Java"
description: "Cómo realizar una búsqueda binaria con Java apoyándonos en el método Array.binarySearch() que nos ofrece el lenguaje Java para la búsqueda de elementos."
date: 2020-02-25
updatedDate: 2026-01-11
tags: ["busqueda","busqueda-binaria","arrays","sort","array"]
slug: java/arrays/busqueda-binaria-con-java
author: victor_cuervo
type: doc
topic: java
id: fa6524b9-d073-49f0-851b-e7a639c0dc82
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/BusquedaBinaria.java
---

Una **búsqueda binaria** con [Java](http://www.manualweb.net/java/) es aquella que permite localizar un elemento dentro de una colección, en nuestro caso [un array](http://lineadecodigo.com/tag/java-array/), comparando los valores que hay dentro del [array](http://lineadecodigo.com/tag/java-array/).


El proceso que se realiza en una búsqueda binaria sería el siguiente:

1. En primer lugar es ordenar los elementos, ya que a partir de ese momento buscará por ubicación dentro de la lista de elementos.
2. Lo siguiente que hace es validar si el número que sea la mitad del [array](http://lineadecodigo.com/tag/java-array/) coincide con el número buscado.
3. En el caso que no coincida realiza la siguiente comparación. Si el elemento que buscamos es menor al elemento que está en medio del [array](http://lineadecodigo.com/tag/java-array/) se queda con la parte izquierda del [array](http://lineadecodigo.com/tag/java-array/), si el elemento que buscamos es mayor que el elemento que está en medio del [array](http://lineadecodigo.com/tag/java-array/) se queda con la parte derecha del [array](http://lineadecodigo.com/tag/java-array/).
4. Elige una de las dos partes y vuelve a realizar lo indicado en el punto 2. Así hasta que encuentre el número buscado o bien retorne indicando que no ha encontrado elemento.

## Implementación


Si vamos a realizar una búsqueda binaria en Java lo primero que tendremos que tener es un [array](http://lineadecodigo.com/tag/java-array/) y el número que queremos encontrar.


```java
int[] numeros = {3, 7, 1, 9, 5, 2, 8, 4, 6};
int numeroBuscado = 5;
```


Lo siguiente será ordenar el [array](http://lineadecodigo.com/tag/java-array/), ya que no sabremos si por defecto está ordenado. Para ello vamos a utilizar el método `Arrays.sort()` el cual recibirá el [array](http://lineadecodigo.com/tag/java-array/) como parámetro.


```java
Arrays.sort(numeros);
```


Ahora podríamos codificarnos el algoritmo de búsqueda binaria con Java (que lo haremos en otro ejemplo), pero en este caso vamos a utilizar el método `Arrays.binarySearch(array, numero)` que realiza la búsqueda por nosotros.


Este método recibe por un lado el [array](http://lineadecodigo.com/tag/java-array/) ordenado con los números y por otro el número que estamos buscando. El caso de encontrar el número nos devolverá un valor entero con la posición que ocupa dentro del [array](http://lineadecodigo.com/tag/java-array/) el número buscado, si no se encuentra dentro del [array](http://lineadecodigo.com/tag/java-array/) devolverá un número negativo.


Así utilizaremos la siguiente estructura para buscarlo:


```java
int posicion = Arrays.binarySearch(numeros, numeroBuscado);

if (posicion >= 0) {
    System.out.println("El número " + numeroBuscado + " está en la posición " + posicion);
} else {
    System.out.println("El número " + numeroBuscado + " no se encuentra en el array");
}

```


De esta forma tan sencilla tendremos una búsqueda binaria con [Java](http://www.manualweb.net/java/).

