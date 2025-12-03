---
title: Recorrer un ArrayList
description: "Ejemplo que nos muestra cómo podemos recorrer un ArrayList en Java utilizando un bucle for, conociendo su tamaño e iterando por sus elementos."
lastupdates: 2023-05-20
author: victor_cuervo
---

Un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) es una lista en [Java](https://www.manualweb.net/java/) de elementos los cuales se pueden recorrer hacía delante o hacia atrás, ya que sus elementos están enlazados entre sí. Lo más normal es que pensemos recorrer un [ArrayList](https://www.w3api.com/Java/ArrayList/) mediante iteradores que nos vayan desplazando por cada uno de los elementos, si bien, en este caso vamos a ver que podemos recorrer un [ArrayList](https://www.w3api.com/Java/ArrayList/) de [la forma tradicional en la que se recorren los array normales](https://lineadecodigo.com/java/listar-elementos-de-un-array/), haciéndolo realmente sencillo.


Para recorrer un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) lo primero será crear un [`ArrayList`](https://www.w3api.com/Java/ArrayList/). Lo cual haremos de la siguiente manera:


```java
ArrayList<String> al = new ArrayList<String>();
```


Vemos que hemos instanciado el [`ArrayList`](https://www.w3api.com/Java/ArrayList/) para indicarle que lo que va a contener son cadenas de texto, es decir, el tipo [`String`](https://www.w3api.com/Java/String/). Podríamos crear el [`ArrayList`](https://www.w3api.com/Java/ArrayList/) de cualquier otro tipo que necesitemos, pero hemos utilizado el tipo [`String`](https://www.w3api.com/Java/String/) por su sencillez.


Y, como no, pasaremos a rellenarlo de elementos. En este caso vamos rellenando elementos de texto que son nombres.


```java
al.add("Victor");
al.add("Luis");
al.add("Elena");
```


Ahora vamos a recorrer un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) como si fuese un array. Para ello tenemos que obtener el tamaño de un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) mediante el método [`.size()`](https://www.w3api.com/Java/ArrayList/size/).


```java
int size=al.size();
```


Y ahora utilizaremos [un bucle for](https://manualweb.net/java/sentencias-bucle-java/#for) para recorrer un [ArrayList](https://www.w3api.com/Java/ArrayList/).


```java
for(int x=0;x<al.size();x++) {
  System.out.println(al.get(x));
}
```


Para obtener el contenido de cada uno de los elementos vamos a apoyarnos en el método [`.get()`](https://www.w3api.com/Java/ArrayList/get/), al cual pasaremos el indicador del índice de la posición que ocupa en el [`ArrayList`](https://www.w3api.com/Java/ArrayList/). En este caso el índice lo encontramos en la variable `x`.


De esta forma tan sencilla hemos conseguido recorrer un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) en [Java](https://www.manualweb.net/java/). En posteriores artículos veremos como recorrer un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) mediante iteradores, los cuales nos permiten recorrer hacía delante o hacía detrás.


¿Conoces más formas en las que se pueda recorrer un [ArrayList](https://www.w3api.com/Java/ArrayList/) en [Java](https://www.manualweb.net/java/)?


Un [`ArrayList`](https://www.w3api.com/Java/ArrayList/) es una lista en [Java](https://www.manualweb.net/java/) de elementos los cuales se pueden recorrer hacía delante o hacia atrás, ya que sus ele

