---
title: "Saber si una ruta es un directorio con Java"
description: "La página explica cómo saber si una ruta es un directorio con Java usando la clase File y el método isDirectory."
date: 2009-02-01
updatedDate: 2026-01-09
tags: ["file","directorio","isdirectory"]
slug: java/ficheros/saber-si-una-ruta-es-un-directorio-con-java
author: victor_cuervo
type: doc
topic: java
id: c52de193-e53f-47e2-a1d8-40fddadd61c5
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/EsUnDirectorio.java
---

La clase File nos permite en [Java](https://www.manualweb.net/java/) instanciar cualquier elemento del sistema de ficheros y trabajar con él de una forma genérica. A la hora de instanciar el elemento podremos pasar al constructor bien un directorio o bien un fichero. La instanciación de un objeto [File](https://www.w3api.com/Java/File/exists/) sería de la siguiente forma:


```java
File fRuta = new File("c:\\prueba");
```


Solo tendremos que apoyarnos en el método [.isDirectory()](https://www.w3api.com/Java/File/exists/.isDirectory()) para saber si una ruta es un directorio con [Java](https://www.manualweb.net/java/) :


```java
if (fRuta.isDirectory())
  System.out.println("Es un directorio");
else
  System.out.println(" NO es un directorio");
```

