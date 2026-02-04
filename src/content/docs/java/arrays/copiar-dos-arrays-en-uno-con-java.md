---
title: "Copiar dos arrays en uno con Java"
description: "Ejemplo que nos enseña a utilizar el método arrayCopy para copiar dos arrays en uno con Java."
date: 2007-10-06
updatedDate: 2026-01-08
tags: ["array","length","elementos","arraycopy"]
slug: java/arrays/copiar-dos-arrays-en-uno-con-java
type: doc
topic: java
id: 30143c5d-0c8f-43db-adab-89f3faa66399
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/CopiarArrays.java
---

En este caso lo que vamos a hacer es a partir de dos arrays, copiar el contenido de ambos dentro de un tercer array. Todo ello utilizando el lenguaje [Java](https://www.manualweb.net/java/). Lo primero será definir los dos arrays de origen:


```java
int a1[] = {1,2,3,4,5};
int a2[] = {6,7,8,9,10};
```


Y posteriormente el array destino. Hay que tener en cuenta que el tamaño del array destino tiene que ser lo suficientemente grande como para albergar el contenido de los dos arrays origen. Para ello le damos como tamaño la suma de los dos arrays de origen:


```java
int a[] = new int[a1.length+a2.length];
```


En la copia de arrays nos apoyaremos en el método [Java](https://www.manualweb.net/java/) [.arrayCopy](https://www.w3api.com/Java/System/arraycopy/), el cual ya usamos en ["Copiar arrays en Java"](http://lineadecodigo.com/java/copiar-arrays-en-java/). Los parámetros que recibe el método [Java](https://www.manualweb.net/java/) [.arrayCopy](https://www.w3api.com/Java/System/arraycopy/) son:

- Array origen
- Posición inicial del array origen
- Array destino
- Posición inicial en el array de destino
- Numero de elementos a copiar del array origen al array destino

El siguiente paso será copiar el primer array en el array destino:


```java
System.arraycopy(a1, 0, a, 0, a1.length)
```


Vemos que del array origen copiamos desde la posición 0, al igual que el array destino. El número de elementos a copiar es igual al tamaño del array de origen. El tercer paso será copiar array en el array destino. Hay que tener cuidado, ya que en el array destino ya tenemos cargado el primer array.


```java
System.arraycopy(a2, 0, a, a1.length, a2.length);
```


Lo que vemos es que del array de origen se copia desde el primer elemento, el cero. En el caso del array destino nos tendremos que posicionar en el elemento siguiente al último elemento del primer array. Esto nos lo da el tamaño del primer array. Es por ello que utilizamos a1.lenght. El número de elementos sigue siendo los elementos del segundo array.

