---
title: "Calcular media de números con Java"
description: "El código en Java calcula la media de números almacenados en un array de enteros."
date: 2007-04-23
updatedDate: 2026-01-08
tags: ["array","for","double","length","sumas","division","bucles"]
slug: java/matematicos/calcular-media-de-numeros-con-java
type: doc
topic: java
id: 2c8a9dfb-adca-817f-96e1-d3065191fbbe
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/MediaDeNumeros.java
---

Mediante este sencillo código [Java](https://www.manualweb.net/java/) vamos a poder calcular la media de una lista de números. Con ello pondremos en juego nuestras habilidades para el manejo básico del [lenguaje Java](https://www.manualweb.net/java/), así como el manejo de arrays. Lo primero que haremos será declarar un array de 10 elementos. Para ello hay que declarar el array:


```java
int array[];
```


No nos hemos querido complicar mucho más la vida y hemos creado un array de números enteros. Ahora hay que inicializar y cargar el array. Para ello podemos, o bien realizarlo en dos pasos, o bien cargado directamente. Esto conllevaría una "inicialización encubierta".


```java
int array[] = {12,34,56,4,3,2,1,8,9,10};
```


A la hora de calcular la media de números enteros hay que tener en cuenta que el resultado puede salir un número con decimales. Es por ello que la variable que declaremos para representar la media la vamos a definir de tipo double.


```java
double media = 0.0;
```


El siguiente paso a dar es recorrer el array. Para ello nos apoyamos en un bucle for. Este bucle iterara tantas veces como elementos tenga el array. El número de elementos del array nos lo dará la propiedad length del mismo. Dentro del array iremos sumando los valores de todos los elementos. Quedándonos el siguiente código:


```java
for (int i=0; i < array.length; i++) {
 media = media + array[i];
}
```


Lo último que nos quedará será dividir a la suma de todos los valores, por el número de elementos del array. Y ya tenemos el valor medio de la serie.


```java
media = media / array.length;
```

