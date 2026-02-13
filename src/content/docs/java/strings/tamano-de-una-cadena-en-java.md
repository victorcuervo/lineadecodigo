---
title: "Tamaño de una cadena en Java"
description: "La página explica cómo determinar el tamaño de una cadena en Java y su importancia en programación."
date: 2006-12-13
updatedDate: 2026-02-13
tags: ["string","length"]
slug: java/strings/tamano-de-una-cadena-en-java
type: doc
topic: java
id: b8fe0fa3-e88e-4ab5-a6d4-11b9c2eabf30
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/TamanioCadena.java
---

Si estás empezando a aprender [Java](http://www.manualweb.net/tutorial-java/) y te has metido de lleno en el mundo de las cadenas de texto (clase [`String`](http://www.w3api.com/Java/String/)), una de las utilidades que más pronto vas a usar es el control del tamaño de la cadena.


Hay muchos casos en los que necesitarás saber cuál es el tamaño de una cadena:

- Si quieres validar si su tamaño es correcto.
- Si vas a recorrer los caracteres de la cadena.
- Si quieres extraer una subcadena a partir de una posición.

## Obtener el tamaño con .length()


El método que se usa para conocer el tamaño de una cadena es [`.length()`](https://www.w3api.com/Java/String/length/).


Este método se aplica directamente sobre el objeto que representa la cadena.


```java
String sMiCadena = "En un lugar de la Mancha";

System.out.println("Cadena de texto: '" + sMiCadena + "'");
System.out.println("Tamaño de la cadena: " + sMiCadena.length() + " caracteres");
```

