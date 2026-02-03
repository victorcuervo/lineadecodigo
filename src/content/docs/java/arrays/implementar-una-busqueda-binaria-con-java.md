---
title: "Implementar una búsqueda binaria con Java"
description: "Implementar una búsqueda binaria en Java con un método que busca un número en un array ordenado."
date: 2020-03-18
updatedDate: 2026-01-11
tags: ["array","recursividad","busqueda","busqueda-binaria","arrays","copyofrange"]
slug: java/arrays/implementar-una-busqueda-binaria-con-java
author: victor_cuervo
type: doc
topic: java
id: b814ef9a-c6e4-4d3b-944b-b5a75d6a3126
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/BusquedaBinariaImplementada.java
---

En otro artículo ya vimos [cómo podemos realizar una búsqueda binaria con Java mediante el método .binarySearch()](http://lineadecodigo.com/java/busqueda-binaria-con-java/) la cual utiliza el algoritmo de búsqueda binaria para poder localizar un número dentro de un array. En este caso vamos a ver cómo podemos implementar una búsqueda binaria con [Java](http://www.manualweb.net/java) de forma directa.


## Declarar el array y el número a buscar


Lo primero será partir de un array de números sobre los que vamos a realizar la búsqueda, al igual que declarar una variable con el número que queremos buscar. Algo sencillo para empezar:


```java
int[] numeros = {3, 7, 12, 18, 25, 33, 41, 56, 72, 89};
int numeroBuscado = 25;
```


## Ordenar el array


Lo siguiente que haremos será ordenar el Array, ya que sabemos que la premisa para poder implementar una búsqueda binaria con [Java](http://www.manualweb.net/java) es **que el array se encuentre ordenado**.


## Implementar el método de búsqueda binaria


Ahora vamos al meollo del problema que es la implementación de un método que nos realice la búsqueda binaria. El método recibirá como parámetros el array con los números y el número a buscar.


```java
public static boolean binarySearch(int[] array, int numero) {
    // código del método
}
```


La idea de la búsqueda binaria es encontrar el número pensando que el número se encuentra en el centro del array, así que lo primero que hace es mirar si el número buscado coincide con el que está a la mitad.


```java
int mitad = array.length / 2;

if (array[mitad] == numero) {
    return true;
}
```


En el caso que el número coincida devolveremos un valor de true.


## Búsqueda recursiva


Si no coincide podremos tomar dos caminos:


a) Si el número buscado es mayor que el número que se encuentra en la mitad, lanzaremos la búsqueda sobre la mitad superior del array invocando de forma recursiva al mismo método.


b) Si el número buscado es menor que el número que se encuentra en la mitad, lanzaremos la búsqueda sobre la mitad inferior del array, nuevamente invocándolo de forma recursiva al método.


```java
if (numero > array[mitad]) {
    return binarySearch(Arrays.copyOfRange(array, mitad + 1, array.length), numero);
} else {
    return binarySearch(Arrays.copyOfRange(array, 0, mitad), numero);
}
```


Hay que notar que utilizaremos el método `Arrays.copyOfRange()` para obtener una parte del array o la otra.


## Condición de salida


Al final, si el tamaño del array que recibe el método es igual a 1 y no coincide con el número buscado significará que el número no se encuentra dentro del array.


```java
if (array.length == 1 && array[0] != numero) {
    return false;
}
```


## Método completo


El método binarySearch que hemos implementado quedará de la siguiente forma:


```java
public static boolean binarySearch(int[] array, int numero) {
    System.out.println("Buscando en array de tamaño: " + array.length);
    
    if (array.length == 1 && array[0] != numero) {
        return false;
    }
    
    int mitad = array.length / 2;
    
    if (array[mitad] == numero) {
        return true;
    }
    
    if (numero > array[mitad]) {
        return binarySearch(Arrays.copyOfRange(array, mitad + 1, array.length), numero);
    } else {
        return binarySearch(Arrays.copyOfRange(array, 0, mitad), numero);
    }
}
```


Hemos añadido unas salidas por consola para que se vea cómo va funcionando el método al implementar una búsqueda binaria con [Java](http://www.manualweb.net/java/).


¿Conoces más métodos de búsqueda? Puedes compartirlos en los comentarios.

