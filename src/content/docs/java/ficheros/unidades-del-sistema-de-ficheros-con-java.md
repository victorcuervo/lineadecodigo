---
title: "Unidades del sistema de ficheros con Java"
description: "Cómo conocer las unidades del sistema de ficheros con Java"
date: 2011-09-15
updatedDate: 2026-01-09
tags: ["file","array","for","println","java-io","bucles"]
slug: java/ficheros/unidades-del-sistema-de-ficheros-con-java
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81d2-bb72-ce5acc200c9a
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/UnidadesSistemaFicheros.java
---

Las unidades del sistema de fichero son las diferentes particiones que tenemos de un disco, así como cualquier otro dispositivo o unidad de almacenamiento que tengamos conectado a nuestro ordenador. Ya sean lectores de DVD, tarjetas SD,... Mediante el lenguaje [Java](https://www.manualweb.net/java/) y la librería Java IO podemos acceder al listado de las unidades del sistema de ficheros. Para ello nos apoyaremos en el método [.listRoots()](https://www.w3api.com/Java/File/exists/.listRoots()) de la clase [File](https://www.w3api.com/Java/File/exists/). Hay que señalar que este método es un método estático de la clase [File](https://www.w3api.com/Java/File/exists/). Así que solo tendremos que invocarlo directamente.


```java
File[] roots = File.listRoots();
```


El método [.listRoots()](https://www.w3api.com/Java/File/exists/.listRoots()) nos devuelve un array de [File](https://www.w3api.com/Java/File/exists/). Así que solo tendremos que recorrerlo para ver cual es el listado de las unidades del sistema de ficheros.


```java
for (int i=0; i<roots.length; i++) {
	System.out.println(roots[i]);
}
```


Vemos que con pocas líneas de código y la librería Java IO podemos sacar el listado de unidades del sistema. A partir de ahí, lo que nuestra imaginación nos proponga.

