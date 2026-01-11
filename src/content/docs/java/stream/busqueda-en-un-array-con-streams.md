---
title: "Búsqueda en un array con Streams"
description: "Artículo que nos explica cómo utilizar un Stream y expresiones Lambda para poder realizar una búsqueda en un array con Streams en Java."
date: 2020-09-07
updatedDate: 2026-01-11
tags: ["lambda","predicate","array","stream","filter","instream"]
slug: java/stream/busqueda-en-un-array-con-streams
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/BusquedaConStreams.java
topic: java

---

En Java 8 [aparecieron los ](http://lineadecodigo.com/tag/java-stream/)[**Streams**](http://lineadecodigo.com/tag/java-stream/) **y las expresiones Lambda**. Gracias a ellos podemos resolver una búsqueda en un Array con [Streams](http://lineadecodigo.com/tag/java-stream/). Lo primero será ver un poco por encima ¿qué son los [Streams Java](http://lineadecodigo.com/tag/java-stream/)? Por decirlo de una manera muy general podríamos indicar que mediante los Streams podemos ejecutar funciones de forma anidada, como si recorriésemos los elementos. En dichas funciones podremos ejecutar expresiones orientando nuestro modelo de programación a una programación funcional. En el código vamos a implementar, como hemos hecho en otras ocasiones con la búsqueda de números, el método `searchNumber()` el cual recibe un array de números y el número a buscar.


```java
private static boolean searchNumber(int[] numbers, int numberToSearch) { ... }
```


Así, lo primero será entender que el array será nuestro `Stream` en el código que realizará la búsqueda. Es decir, convertiremos el array en un `Stream`. Para ello utilizamos la clase `InStream` y el método `of()`.


```java
IntStream.of(numbers);
```


Una vez que hemos convertido el array en un `Stream` lo que vamos a utilizar es utilizar un método de matching sobre los elementos. Es decir, que los vamos a recorrer y vamos a ver cuál de los elementos, si aplica, coincide con el número que estamos buscando. El método en concreto que utilizaremos será el método `.anyMatch()`. Este método ejecuta una comparación y en el caso de que la comparación sea correcta devuelve un valor `true` y si no devuelve un valor `false`.


```java
IntStream.of(numbers).contains();
```


El parámetro que se le pasa al método `.anyMatch()` es un Predicado representado por la clase `Predicate`. El Predicado es una **expresión Lambda** que tiene la forma:


```java
parámetro -> cuerpo-lambda
```


Donde el parámetro corresponde al elemento de `Stream` que estamos recorriendo y el cuerpo-lambda a la expresión que queremos ejecutar. De esta forma nuestro predicado será el siguiente:


```java
elemento -> elemento == numberToSearch
```


Nuestro código del `Stream` más la **expresión Lambda** quedará de la siguiente manera:


```java
private static boolean searchNumber(int[] numbers, int numberToSearch) {
  return IntStream.of(numbers).anyMatch(x -> x == numberToSearch);
}
```


Ya solo nos quedará la parte más sencilla del código que es la de definir el array y el número:


```java
int[] numeros = {12,45,67,27,89,84,65,21,44};
int numberToSearch = 27;
```


Y la de invocar al método `searchNumber()`.


```java
if (searchNumber(numeros,numberToSearch))
  System.out.println("El número " + numberToSearch + " está en la lista");
else
  System.out.println("El número " + numberToSearch + " NO está en la lista");
```


Con esto ya hemos aprendido algo más a utilizar los **Streams y las expresiones Lambda de** [**Java**](http://www.manualweb.net/java) y a poder realizar una búsqueda en un array con Streams.

