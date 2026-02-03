---
title: "Ordenar un Array en Java"
description: "Uso de la clase Arrays para conseguir ordenar un Array en Java. Para ello utilizaremos su método .sort(). Explicación paso a paso del ejemplo."
date: 2016-03-12
updatedDate: 2026-01-09
tags: ["array","sort","for"]
slug: java/arrays/ordenar-un-array-en-java
author: victor_cuervo
type: doc
topic: java
id: c5bc974c-b76c-40fe-98f9-86211710ff69
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/OrdernarArray.java
---

Ya tenemos algún ejemplo en [Línea de Código](http://lineadecodigo.com/) que nos enseña [cómo podemos ordenar un Vector en Java](http://lineadecodigo.com/java/ordenar-un-vector-de-string-en-java/), pero algunos nos habéis comentado que no teníamos ninguno sobre cómo ordenar un array en [Java](https://www.manualweb.net/java/). Así que manos a la obra, veréis que es muy sencillo. Lo primero será definir un array en Java. En este caso vamos a crear un array de enteros


```java
int[] numeros = {7,4,5,2,1,10,8};
```


A este array ya le hemos insertando mediante las llaves un conjunto de números, los cuales vamos a ordenar. Ahora tenemos que echar mano de la clase `Arrays`. Esta clase contiene un conjunto de métodos estáticos que nos permiten manipular los arrays. Uno de estos métodos es el método `.sort()`. Mediante el método `.sort()` conseguiremos ordenar un array en [Java](https://www.manualweb.net/java/). Simplemente tendremos que ejecutar la siguiente sentencia:


```java
Arrays.sort(numeros);
```


De esta forma los números ya estarán ordenador en el array. Solo tienes que volcarlos por pantalla para poder comprobarlo tu mismo.


```java
for (int numero:numeros)
  System.out.println(numero);
```


Cómo podéis ver es muy sencillo ordenar un array en [Java](https://www.manualweb.net/java/).

