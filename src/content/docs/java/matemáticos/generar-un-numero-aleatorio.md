---
title: "Generar un número aleatorio"
description: "Se explica cómo generar un número aleatorio en Java utilizando la clase Random y el método nextInt."
date: 2007-01-31
updatedDate: 2026-01-09
tags: ["java-util","random","nextint"]
slug: java/matematicos/generar-un-numero-aleatorio
author: victor_cuervo
type: doc
id: 495cd026-fb05-4e01-b2d2-af8e329afe33
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/NumeroRandom.java
---

Múltiples son las situaciones donde podemos necesitar la generación de un número aleatorio. Sin ir más lejos sería un buen ejemplo a la hora de generar una contraseña.


[Java](https://www.manualweb.net/java/) nos proporciona la clase Random dentro de la librería java.util. Dicha clase nos permite generar múltiples números aleatorios, independientemente de la naturaleza de estos: int, float, double, long,... Utilizar la clase es muy sencillo. Lo primero que tenemos que hacer es crear una instancia de dicha clase. Veamos la [línea de código](http://lineadecodigo.com/):


```java
Random r = new Random();
```


Posteriormente deberemos de invocar al método nextInt(). Este método ya nos devolverá un número aleatorio.


```java
System.out.println(r.nextInt());
```


El principal inconveniente de este método es que el número aleatorio dentro del rango comprendido entre {2^-32} y {2^32} . Si lo que queremos es acotar el rango, podemos pasar el límite como parámetro del método .nextInt(valor). En este caso se calculará en el rango desde 0 a valor-1. Es por ello que si queremos trabajar con el valor igual al límite, entonces deberemos de pasar como parámetro valor+1. De esta manera el código será el siguiente:


```java
int limite=10;
System.out.println(r.nextInt(limite+1));
```

