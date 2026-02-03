---
title: "Extraer una parte de una cadena"
description: "Ejemplo que nos muestra cómo extraer una parte de una cadena en Java utilizando el método substring() de la clase String."
date: 2010-05-28
updatedDate: 2026-01-08
tags: ["string","substring"]
slug: java/strings/extraer-una-parte-de-una-cadena
author: victor_cuervo
type: doc
topic: java
id: 90efac9a-a638-48c1-8ec9-8bf3d1a0a5cd
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ExtraerCadena.java
---

Una cosa muy sencilla de hacer con [Java](https://www.manualweb.net/java/) y que la utilizaremos en muchos ejemplo es la de extraer una parte de una cadena cuando estemos manipulando su contenido. Ya que esto nos permite quedarnos con una parte del contenido de una cadena para hacer un uso adicional del mismo.


Para poder llevar a cabo este procedimiento nos basaremos en el método [`substring()`](https://w3api.com/Java/String/substring/) de [Java](https://www.manualweb.net/java/). Dicho método lo encontraremos en la clase [`String`](https://w3api.com/Java/String/).


Aunque el método [`substring()`](https://w3api.com/Java/String/substring/) puede ser invocado de diferentes formas, nosotros nos basaremos en la siguiente:


```java
public String substring(int beginIndex, int endIndex)
```


Los parámetros que le pasamos indican el indice inicial o `beginIndex` y final o `endIndex` de la cadena que queramos extraer. El inicial corresponde con la posición de la letra por la que queremos empezar y el final por la letra que está justo después de la última letra que queramos recuperar.


> Una cosa muy importante es que **la primera letra de una cadena de texto siempre tiene el índice 0.**


Estas serían las posiciones de la frase "Hola Mundo".


```text
H o l a   M u n d o
0 1 2 3 4 5 6 7 8 9
```


Así, que si queremos extraer la parte "Mundo" de la cadena "Hola Mundo", el código en el que utilizaríamos el método [`substring()`](https://w3api.com/Java/String/substring/) sería parecido al siguiente:


```java
String sCadena = "Hola Mundo";
String sSubCadena = sCadena.substring(5,10);
System.out.println(sSubCadena);
```


Vemos que el resultado del método [`substring()`](https://w3api.com/Java/String/substring/) se lo hemos asignado a otra variable llamada `sSubCadena`, la cual hemos volcado directamente a consola utilizando un [`System.out`](https://w3api.com/Java/System/out/), pero con la que podríamos haber hecho muchas cosas otras.


Siempre es de mucha utilidad y muy sencillo saber extraer una parte de una cadena en Java mediante el método [`substring()`](https://w3api.com/Java/String/substring/).

