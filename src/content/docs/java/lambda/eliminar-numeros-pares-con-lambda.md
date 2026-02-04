---
title: "Eliminar números pares con Lambda"
description: "Cómo utilizar las funciones lambda y el método .removeIf() para poder eliminar números pares de una lista con Lambda en Java."
date: 2021-10-17
updatedDate: 2026-01-08
tags: ["java-collection","arraylist","iterator","removeif","predicate","lambda"]
slug: java/lambda/eliminar-numeros-pares-con-lambda
type: doc
topic: java
id: 72db9d37-ca1d-4b14-b0e2-f84deff53568
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/lista/EliminarElementosParesPredicado.java
---

En este ejemplo vamos a utilizar programación funcional para poder eliminar números pares con Lambda de un [`ArrayList`](http://w3api.com/Java/ArrayList/) en [Java](https://www.manualweb.net/java). Es decir, la idea es tener una lista de números en un [`ArrayList`](http://w3api.com/Java/ArrayList/) y poder eliminar aquellos que sean pares (o impares, si prefieres hacer eso) De esta manera lo primero que tenemos que hacer es [crear nuestro ArrayList](https://lineadecodigo.com/tag/java-collection-arraylist/) de números enteros e [insertar una serie de números](https://lineadecodigo.com/java/insertar-elementos-en-un-arraylist/).


```java
// ArrayList con tamaño
ArrayList<Integer> numeros = new ArrayList<Integer>();
    
// Añadir elementos a un ArrayList
numeros.add(1);
numeros.add(2);
numeros.add(3);
numeros.add(4);
numeros.add(5);
numeros.add(6);
numeros.add(7);
numeros.add(8);
numeros.add(9);
```


En este caso hemos insertado los 9 primero números, pero puedes poner los números que quieras. Una vez que tenemos nuestro [`ArrayList`](http://w3api.com/Java/ArrayList/) utilizaremos el método [`.removeIf()`](http://w3api.com/Java/ArrayList/removeIf/) que nos permite utilizar una función lambda y que elimina los elementos del [`ArrayList`](http://w3api.com/Java/ArrayList/) que coincidan con dicha función. El método [`.removeIf()`](http://w3api.com/Java/ArrayList/removeIf/) recibe como parámetro un predicado, y es que los predicados dentro de la programación funcional son aquellos que devuelven un valor `boolean`.


```java
public boolean removeIf(Predicate<? super E> filter)
```


El filtro que vamos a realizar es una función que tiene como parámetro el elemento de la lista y como implementación la validación de si es par o no. Para [validar si un número es par](https://lineadecodigo.com/java/numeros-pares-en-java/) utilizamos el [operador módulo](http://www.manualweb.net/java/operadores-asignacion-aritmeticos-java/) entre 2 y validamos que el resto sea igual a 0. De esta manera nuestra función quedará de la siguiente forma:


```java
numeros.removeIf(n -> (n%2 == 0));
```


Ahora, si comprobamos los elementos que quedan dentro del [`ArrayList`](http://w3api.com/Java/ArrayList/) podremos ver que solo quedan los números impares:


```java
// Recorrer un ArrayList con un Iterador
Iterator<Integer> it = numeros.iterator();
while(it.hasNext())
  System.out.println(it.next());
```


De esta forma ya habremos conseguido eliminar números pares con Lambda de un [`ArrayList`](http://w3api.com/Java/ArrayList/) en [Java](https://www.manualweb.net/java). ¿Te atreves a ver cómo eliminar los números impares?

