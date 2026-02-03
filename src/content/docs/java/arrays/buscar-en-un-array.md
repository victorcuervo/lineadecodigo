---
title: "Buscar en un Array"
description: "Explicación del código que nos permite buscar en un Array con Java convirtiendolo en una lista y utilizando el método .contains() para encontrar el valor."
date: 2020-03-29
updatedDate: 2026-01-09
tags: ["array","aslist","contains"]
slug: java/arrays/buscar-en-un-array
author: victor_cuervo
type: doc
id: a4bc231b-618d-48e3-a3b6-803c29e8d963
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/BuscarEnArray.java
---

En este artículo vamos a ver cómo podemos implementar buscar en un array con [Java](http://www.manualweb.net/java). La idea es cargar una serie de elementos, en este caso cadenas de texto, dentro de un array y luego buscar si hay uno de ellos presente dentro de dicho array o en caso contrario si no se encuentra dentro de la lista de elementos de array.


> Si estás interesado en tipos de búsquedas en arrays puedes echar un ojo a [cómo realizar una búsqueda binaria](http://lineadecodigo.com/java/busqueda-binaria-con-java/) que es otro tipo de búsqueda mas avanzada, incluso [llegar a implementar una búsqueda binaria](http://lineadecodigo.com/java/implementar-una-busqueda-binaria-con-java/).


Lo primero será crear un array [Java](http://www.manualweb.net/java) con elementos. En este caso vamos a crear un array de cadenas o [`String`](https://www.w3api.com/Java/String/). La forma de instanciar el array será la siguiente:


```java
String[] nombres = {"Marta","Ana","Luis","Rodrigo","Virginia"};
```


Los arrays en [Java](http://www.manualweb.net/java) no tienen un método de búsqueda sobre ellos. Si bien las Listas en [Java](http://www.manualweb.net/java) sí que lo tienen. Así que lo que haremos será convertir el array en una lista mediante el método `Arrays.asList()`.


```java
Arrays.asList(nombres);
```


Una vez que tenemos una lista ya podremos utilizar el método `.contains()` que nos permitirá realizar la búsqueda del elemento en cuestión.


```java
Arrays.asList(nombres).contains("cadena a buscar");
```


Lo que vamos a hacer es encapsular este código en un método al cual llamaremos _searchList()_ que reciba un array y la cadena a buscar. Dicho método devuelve un valor booleano, _true_ si el valor se encuentra en el array y _false_ en el caso de no encontrarlo.


```java
private static boolean searchList(String[] strings, String searchString) {
  return Arrays.asList(strings)
    .contains(searchString);
}
```


Ya solo nos quedará invocar al método _searchList()_ pasándole el array que hemos creado al principio de nuestro código y el valor que queremos buscar.


```java
if (searchList(nombres,"Fernando"))
  System.out.println("Valor en la lista");
else
  System.out.println("Valor no encontrado");
```


De esta forma ya tendremos implementado nuestro código para poder buscar en un Array con [Java](http://www.manualweb.net/java).

