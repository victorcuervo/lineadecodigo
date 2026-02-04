---
title: "Tabular cadenas en Java"
description: "Este documento enseña a tabular cadenas en Java usando caracteres especiales o espacios en blanco."
date: 2007-01-06
updatedDate: 2026-02-04
tags: ["string","tabulador"]
slug: java/strings/tabular-cadenas-en-java
type: doc
topic: java
id: fee3461f-22e4-4700-9506-60774cc51481
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/TabularCadena.java
---

Tabular un texto consiste en separar dos cadenas de texto un espacio concreto. Este espacio es el comprendido entre un tabulador y otro. Y es que dependiendo del programa que trate el tabulador, esta distancia puede variar. Incluso algunos programas ignoran las tabulaciones. Si nos centramos en el lenguaje [Java](https://www.manualweb.net/java/), lo primero que tenemos es una cadena de texto, la cual definiremos mediante la [clase String](https://www.w3api.com/Java/String/).


```java
String cadena = "Mi cadena de texto. Mi segunda cadena de texto";
```


Si queremos introducir una tabulación entre "Mi cadena de texto" y "Mi segunda cadena de texto" tenemos una primera opción (y es que hay que estar abiertos a ideas) es poner espacios en blanco. Esta es una opción totalmente válida. Pero que en caso de tener que utilizar mucho va a hacer que desgastemos mucho nuestra barra de espaciado. La línea de código en [Java](https://www.manualweb.net/java/) quedaría de la siguiente forma:


```java
String cadena = "Mi cadena de texto.                        Mi segunda cadena de texto";
```


La otra alternativa que tenemos es la de utilizar un carácter especial que es el `\t`. Este carácter lo que hace es que el programa introduzca los espacios por nosotros. La línea de código sería:


```java
String cadena = "Mi cadena de texto.\tMi segunda cadena de texto";
```


> No hace falta dejar espacios entre los textos. Es por ello que vemos que queda poco legible. "texto.\tMi". Pero es correcto.


A compilar, ejecutar y ver el resultado.

