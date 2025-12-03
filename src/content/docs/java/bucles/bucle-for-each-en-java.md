---
title: Bucle for-each en Java
description: "El Bucle for-each en Java nos permite recorrer de una forma sencilla un array o una colección de una misma manera."
lastUpdated: 2023-05-14
author: victor_cuervo
---

Una de las [cosas nuevas que se incorporó en Java 5](https://manualweb.net/java/historia-java/#java-5) fue el bucle for-each en [Java](http://www.manualweb.net/tutorial-java/). Esta estructura nos permite recorrer una Colección o un array de elementos de una forma sencilla. Evitando el uso de elementos como los iteradores o de [un bucle for normal](https://manualweb.net/java/sentencias-bucle-java/#for).


De la forma tradicional podríamos [recorrer un array en Java](https://lineadecodigo.com/java/listar-elementos-de-un-array/) de la siguiente manera:


```java
String a[] = {"Avila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"};

for (int x=0;x<a.length;x++)
 System.out.println(a[x]);

```


En este caso nos estamos apoyando en el tamaño del array, con la propiedad `.length` y en una variable contador, la cual vamos incrementando hasta que llegue a el tamaño del array.


Para recorrer una Colección, una lista en este caso, que hemos creado mediante la clase [`ArrayList`](https://www.w3api.com/Java/ArrayList/), podríamos hacerlo con un iterador. Recordemos que el iterador es una especie de puntero que vamos moviendo sobre los diferentes elementos de la colección.


Aplicando el iterador el código fuente nos quedaría de la siguiente forma:


```java
List list = new ArrayList();

// Añadimos elementos
list.add("Victor");
list.add("Amaya");
list.add("Julio");

// Obtenemos un Iterador y recorremos la lista.
ListIterator iter = list.listIterator(list.size());
while (iter.hasPrevious())
  System.out.println(iter.previous());
```


Para la colección hemos creado un iterador utilizando la clase [ListIterator](https://www.w3api.com/Java/ListIterator/) que nos permite recorrer los elementos de la colección.


El bucle for-each en [Java](https://www.manualweb.net/java/) nos permite realizar estas dos mismas operaciones de una forma muy sencilla. La estructura del bucle for-each en Java sería de la siguiente forma:


```java
for (TipoBase variable: ArrayDeTiposBase) {..}
```


Por un lado tenemos una variable que hay que declararla del tipo de los elementos del array o de la colección, es decir, si tenemos un Array de cadenas de tipo [`String`](https://www.w3api.com/Java/String/), tendremos que definir una primera variable de este mismo tipo [`String`](https://www.w3api.com/Java/String/).  Luego, seguido de los dos puntos ya pondremos el array o la colección que queremos recorrer.


Así, aplicando esta estructura, para recorrer un array, tendríamos el siguiente código fuente:


```java
String array[] = {"Avila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"};

for (String elemento: array)
  System.out.println(elemento);

```


Y para recorrer los elementos de la colección, tendríamos este otro código fuente:


```java
List list = new ArrayList();

// Añadimos elementos
list.add("Victor");
list.add("Amaya");
list.add("Julio");

for (String nombre: list)
  System.out.println(nombre);

```


Vemos que se unifica la forma de listar los elementos y se simplifica bastante el código. Así podemos recorrer un array o una colección de una misma manera.

