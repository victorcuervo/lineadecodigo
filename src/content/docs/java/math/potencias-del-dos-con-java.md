---
title: "Potencias del dos con Java"
description: "El artículo explica cómo calcular potencias del dos con Java utilizando el método pow de la clase Math."
date: 2009-01-16
updatedDate: 2026-01-09
tags: ["pow","math","for"]
slug: java/math/potencias-del-dos-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/PotenciasDelDos.java
topic: java

---

La clase [Math](http://www.w3api.com/wiki/Java:Math) de [Java](http://www.manualweb.net/tutorial-java/) nos permite realizar un amplio conjunto de operaciones matemáticas entre las cuales encontramos una que nos permite realizar potencias. Esto lo realizaremos mediante el método [`.pow()`](https://www.w3api.com/Java/Math/pow/). El ejemplo que vamos a realizar utilizará el método [`.pow()`](http://www.w3api.com/wiki/Java:Math.pow()) para poder listar las potencias del dos con [Java](http://www.manualweb.net/tutorial-java/). Lo primero que haremos será definir cuantas potencias queremos mostrar: 


```java
int iNumeroPotencias = 10;
```



Acto seguido utilizaremos un bucle que llame tantas veces al método como potencias queremos mostrar.


```java
for (int x=0;x<=iNumeroPotencias;x++) { ... }
```


El método [`.pow()`](https://www.w3api.com/Java/Math/pow/) tiene dos parámetros, el primero es la base de la potencia y el segundo es el número al que queremos elevar la base. En nuestro caso la base será fija, el 2 y la potencia será el valor del bucle. El código que nos queda es el siguiente:


```java
for (int x=0;x<=iNumeroPotencias;x++)
			System.out.println("2 elevado a " + x + " igual a " + (int)Math.pow(2,x));
```

