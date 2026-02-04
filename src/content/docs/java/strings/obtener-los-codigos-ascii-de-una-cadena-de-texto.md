---
title: "Obtener los códigos ASCII de una cadena de texto"
description: "Cómo obtener los códigos ASCII de una cadena de texto mediante un programa Java."
date: 2010-01-07
updatedDate: 2026-01-09
tags: ["string","length","charat","ascii","cadena"]
slug: java/strings/obtener-los-codigos-ascii-de-una-cadena-de-texto
type: doc
topic: java
id: 6427f4da-8918-4d44-afb8-e2b0358f9f93
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/CodigosASCIICadena.java
---

En este ejemplo vamos a ver cómo obtenemos los códigos ASCII de una cadena de texto con [Java](https://www.manualweb.net/java/). Para ello recorreremos los caracteres de la cadena e iremos obteniendo el código. Para ello nos apoyamos en el método [`.codePointAt()`](http://www.w3api.com/Java/String/codePointAt). El método [`.codePointAt()`](http://www.w3api.com/Java/String/codePointAt) devuelve el código ASCII de un carácter en concreto. El carácter será el que coincida con el índice que se pasa como parámetro al método. Empezamos definiendo la cadena:


```java
String sCadena = "Esto es una cadena de texto";
```


Ahora empezamos recorriendo la cadena, para ello nos apoyamos en un bucle for y en el método [`.length()`](http://www.w3api.com/Java/String/length), el cual nos ayuda a conocer el tamaño de la cadena. En el interior del bucle, y apoyándonos en el elemento de interacción vamos obteniendo el código ASCII de los caracteres con el método `.codePointAt()`


```java
for (int x=0;x<sCadena.length();x++)
  System.out.println(sCadena.charAt(x) + " = " + sCadena.codePointAt(x));;
```


Vemos que utilizamos el método [`.charAt()`](http://www.w3api.com/Java/String/charAt) para sacar el carácter asociado al código ASCII.

