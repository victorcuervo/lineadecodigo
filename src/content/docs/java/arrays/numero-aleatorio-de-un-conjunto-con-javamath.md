---
title: "Número aleatorio de un conjunto con Java.Math"
description: "Código que nos ayude a conseguir un número aleatorio de un conjunto con Java.Math"
date: 2007-09-07
updatedDate: 2026-01-11
tags: ["random","array","math"]
slug: java/arrays/numero-aleatorio-de-un-conjunto-con-javamath
type: doc
topic: java
id: e1fc9e8f-4832-495e-9675-57850945120f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/NumeroAzarDeUnConjunto.java
---

Abraham [nos preguntaba en el artículo de Numero al Azar en Java](http://lineadecodigo.com/java/numero-al-azar-en-java/#16105) sobre cómo se podría sacar un número al azar de un subconjunto acotado de elementos. La verdad es que la pregunta es muy buena y es por ello por lo que me he decidido a explicar cómo conseguirlo.


La cuestión es que no nos vale la fórmula de generación de números aleatorios estándar que utilizábamos con [Java Math](https://www.w3api.com/Java/Math/), ya que esta nos dará un número aleatorio entre un número inicial y los N números que lo siguen.


```java
int numeroAleatorio = (int)(Math.random()*N)+inicial;
```


## Definir el conjunto de elementos


Lo primero que tenemos que hacer es definir el conjunto de elementos sobre los que queremos buscar el número aleatorio. Para ello utilizaremos un array:


```java
int[] conjunto = {1,3,6,9,11,16,21,35,50,67,70};
```


## Obtener el número aleatorio del conjunto


Ahora la idea es sacar un número aleatorio entre 0 y el número de elementos que tenemos en el conjunto. El número aleatorio que obtengamos lo utilizaremos para acceder al conjunto de elementos. De esta forma obtendremos el número aleatorio del conjunto que habíamos definido.


```java
int numeroAleatorio = conjunto[(int)(Math.random()*conjunto.length)];
System.out.println(numeroAleatorio);
```

