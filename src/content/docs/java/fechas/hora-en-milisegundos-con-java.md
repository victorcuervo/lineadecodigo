---
title: "Hora en milisegundos con Java"
description: "El artículo explica cómo obtener la hora en milisegundos con Java utilizando System.currentTimeMillis()."
date: 2007-02-01
updatedDate: 2026-01-09
tags: ["system","currenttimemillis"]
slug: java/fechas/hora-en-milisegundos-con-java
type: doc
topic: java
id: 3d449dde-124f-450b-bf4f-4f67d2f227a1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/HoraEnMilisegundos.java
---

Cuando hacemos pruebas de rendimiento solemos tomar como base medidas en milisegundos o microsegundos. Sobre todo cuando estamos haciendo pruebas de sistemas transaccionales.


En este sentido, el lenguaje [Java](https://www.manualweb.net/java/) nos proporciona varios métodos que nos dan la información de la hora del sistema. El principal de ellos es el que maneja la clase Calendar, la cual podemos utilizar para mostrar las horas ([leer Obtener la hora en Java](http://lineadecodigo.com/java/obtener-la-hora-en-java/)).


Pero nos permite, mediante el objeto que representa el sistema, el objeto System, obtener la hora en formato de milisegundos. Para ello, la línea de código será la siguiente:


```java
System.currentTimeMillis();
```


La cual devolverá resultados como el siguiente:


```shell
1170367698406
```


Este valor refleja el número de milisegundos que han pasado entre la fecha actual y la medianoche del 1 de enero de 1970 UTC.

