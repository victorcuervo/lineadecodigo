---
title: "Número mayor y su posición"
description: "Como encontrar el número mayor y su posición dentro de un array en Java."
date: 2009-03-03
updatedDate: 2026-01-08
tags: ["array","bucles","for","if"]
slug: java/arrays/numero-mayor-y-su-posicion
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/NumeroMayorPosicion.java
topic: java

---

Este es un problema básico a la hora de trabajar con arrays en [Java](https://www.manualweb.net/java/). La idea es buscar el número más grande del array y la posición que ocupa. Lo primero es declarar el array de números e inicializarlo con una secuencia cualquiera:


```java
int[] listaNumeros = {1,4,7,8,9,2,7,15,4,6,9,8};
```


Lo siguiente, declarar dos variables, en las que almacenaremos el número mayor y su posición. Para empezar asumiremos que el número mayor es el primero y que consecuentemente su posición es la cero (recuerda que los arrays empiezan por la posición 0). Ahora, recorreremos todo el array. Para ello nos valemos de una estructura repetitiva tipo for y de la propiedad .length del array, la cual nos da el número de elementos que almacena el array.


```java
for (int x=1;x<listaNumeros.length;x++){...}
```


Por cada elemento del array que recorramos deberemos de preguntar si dicho elemento es mayor que el que tenemos almacenado. Si esto se cumple pondremos este como nuevo número mayor y la variable de iteración del bucle como posición.


```java
if (listaNumeros[x]>iNumeroMayor) {
  iNumeroMayor = listaNumeros[x];
  iPosicion = x;
}
```


Solo nos quedará mostrar los valores de iNumeroMayor e iPosicion. Simple, sencillo y en pocas líneas.

