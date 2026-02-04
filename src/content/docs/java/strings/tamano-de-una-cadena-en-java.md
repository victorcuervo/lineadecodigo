---
title: "Tamaño de una cadena en Java"
description: "La página explica cómo determinar el tamaño de una cadena en Java y su importancia en programación."
date: 2006-12-13
updatedDate: 2026-01-09
tags: ["string","length"]
slug: java/strings/tamano-de-una-cadena-en-java
type: doc
topic: java
id: b8fe0fa3-e88e-4ab5-a6d4-11b9c2eabf30
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/TamanioCadena.java
---

Si estas empezando a aprender [Java](http://www.manualweb.net/tutorial-java/) y te has metido de lleno en el mundo de las cadenas de texto (clase [String](http://www.w3api.com/wiki/Java:String)), una de las utilidades que más pronto vas a usar es el control del tamaño de la cadena. Múltiples casos harán que necesites el saber cual es el tamaño de la cadena:

- Si quieres validar si su tamaño es correcto
- Si vas a recorrer los caracteres de la cadena
- Si quieres extraer una cadena a partir de un punto
- …

El método que se usa para conocer el tamaño es sencillo ([.length()](http://www.w3api.com/wiki/Java:String.length())). Este, se aplicará directamente sobre el objeto que represente la cadena o [String](http://www.w3api.com/wiki/Java:String). Veamos el siguiente código de ejemplo:


```java
String sMiCadena = "En un lugar de la Mancha";
System.out.println("Cadena de Texto: '" + sMiCadena + "'");
System.out.println("Tamaño de la cadena: " + sMiCadena.length() + " caracteres");
```

