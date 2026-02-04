---
title: "Ordenar parte de un Array"
description: "A la hora de manipular los arrays podemos ordenar parte de un array y no su totalidad ayudándonos de la clase Arrays y su método .sort()"
date: 2016-03-26
updatedDate: 2026-01-10
tags: ["array"]
slug: java/arrays/ordenar-parte-de-un-array
type: doc
topic: java
id: 2c8a9dfb-adca-814e-8956-ee916144b527
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/OrdernarParteArray.java
---

Cuando estemos ejecutando ordenaciones sobre un Array en [Java](https://www.manualweb.net/java/) no hace falta que lo hagamos sobre todos los elementos, si no que también tenemos la opción de ordenar parte de un array. Lo primero será crear nuestro array [Java](https://www.manualweb.net/java/) de enteros:


```java
int[] numeros = {7,4,5,2,1,10,8};
```


Ahora nos apoyamos en la clase `Arrays` que nos ofrece un conjunto de métodos para manipular los arrays. En concreto nos vamos a apoyar en el método .sort()


```java
Arrays.sort(numeros);
```


Al ejecutarlo con la anterior sentencia nos ordenará todo el array. Pero si queremos ordenar parte de un array deberemos de indicarle el elemento de inicio y el elemento de fin mediante dos números enteros. 


```java
Arrays.sort(numeros,0,4);
```


El elemento de fin no entrará dentro de la ordenación de la parte del array, por lo cual estará ordenando desde el elemento en la posición 0 hasta el elemento en la posición 3.


Es decir, el resultado sería:


```java
{2,4,5,7,1,10,8}
```


Y si, por ejemplo, hubiésemos escrito: 


```java
Arrays.sort(numeros,2,5);
```


La salida habría sido:


```java
{7,4,1,2,5,10,8}
```


Ya que en este caso habría ordenado desde la posición 2 hasta la posición 4. Ya habéis visto lo fácil que es ordenar parte de un array en Java.

