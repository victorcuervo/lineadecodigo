---
title: "Dibujando una figura"
description: "Dibujando una figura de un triángulo mediante bucles en Java."
date: 2007-05-06
updatedDate: 2026-01-07
tags: ["bucles","while","figura"]
slug: java/bucles/dibujando-una-figura
type: doc
topic: java
id: 1d70d55d-55b8-4b72-8a8f-5c60d09eb725
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/DibujandoUnaFigura.java
---

El siguiente ejercicio consiste en representar la siguiente figura por pantalla:


```text
    *
    **
    ***
    ****
    *****
    ******
    ******* 
```


Para la realización del ejercicio es importante conocer el manejo de los bucles while en [Java](https://www.manualweb.net/java/). El bucle principal llevará el control del número de líneas que queremos pintar.


```java
int columnas;
int total_filas = 7; // Tenemos 7 filas.
int filas = total_filas;

while (filas > 0) {
  //Pintamos los asteriscos de la línea
  filas--;
}
```


Con respecto a la pintura de las líneas debemos de tener en cuenta que al finalizar la línea debemos de introducir un salto de línea, es decir, un System.out.println(), en vez de un System.out.print(), que es lo que haremos para pintar el resto de la línea.


```java
columnas = total_filas - filas;

while (columnas > 0) {
   System.out.print('*');
   columnas--;
}

System.out.println('*');
```


La cantidad de elementos a imprimir por línea coincide con el número de línea. Teniendo en cuenta que los n-1 primeros se imprimen mediante el System.out.print() y el último se imprime con un System.out.println().

