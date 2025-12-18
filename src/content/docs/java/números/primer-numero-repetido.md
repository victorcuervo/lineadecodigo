---
title: "Primer numero repetido"
description: "Cómo encontrar el primer numero repetido dentro de un array en Java."
lastUpdated: 2025-12-18
slug: java/primer-numero-repetido
author: victor_cuervo
---

Con este algoritmo pretendemos buscar el primer elemento que está repetido dentro de un array utilizando el lenguaje [Java](https://www.manualweb.net/java/). La idea general es trabajar con dos arrays. En el primero tenemos la lista de elementos general y en el segundo iremos introduciendo los elementos leídos. Por cada elemento que tengamos en el array principal vamos a buscar al de los leídos para ver si ya está. En el caso de que esté será que dicho elemento es el primer elemento repetido. Será entonces cuando acabemos nuestra ejecución. Pero vamos por partes. Lo primero que hay que hacer es declarar los dos arrays. El que contiene los números inicialmente y el que irá conteniendo los leídos. El tamaño del segundo array será igual que el tamaño del primero.


```java
int[] listaNumeros = {1,4,7,8,9,2,7,15,4,6,9,9,8};
int[] listaNumerosLeidos = new int[listaNumeros.length];
```


Una vez definidos los arrays empezamos a recorrer el array listaNumeros. Para ello utilizamos un bucle while que controle el tamaño y una variable bEncontrado que nos servirá como condición de guarda para salir del bucle en el caso de que encontremos el número repetido, evitando así el recorrer todo el bucle una vez encontrado lo que buscamos.


```java
while((x<listaNumeros.length) && (bEncontrado != true)) {...}
```


Con cada número volveremos a recorrer la lista de leídos. Este bucle será el mismo que el anterior, pero sobre listaNumerosLeidos.


```java
while ((y<listaNumerosLeidos.length) && (bEncontrado != true)) {...}
```


Será dentro de este segundo bucle donde realicemos la validación. Está será validar si el número del primer array coincide con el número actual del segundo array. En caso afirmativo cambiaremos el valor de la variable bEncontrado.


```java
if (listaNumeros[x] == listaNumerosLeidos[y])
   bEncontrado = true;
```


Si el elemento del array principal no coincide con ninguno de los elementos del array de los número leídos, será introducido en dicho array. Ocupando la misma posición que ocupaba en el array principal.


```java
if (!bEncontrado)
   listaNumerosLeidos[x] = listaNumeros[x];
```


Para acabar, solo mostraremos la información en el caso de tener activada la variable `bEcontrado`.

