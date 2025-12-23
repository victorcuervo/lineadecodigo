---
title: "Hora en milisegundos con Java"
description: "El artículo explica cómo obtener la hora en milisegundos con Java utilizando System.currentTimeMillis()."
lastUpdated: 2025-12-23
slug: java/hora-en-milisegundos-con-java
author: victor_cuervo
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

