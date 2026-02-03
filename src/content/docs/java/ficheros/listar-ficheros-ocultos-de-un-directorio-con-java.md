---
title: "Listar ficheros ocultos de un directorio con Java"
description: "Código en Java para listar ficheros ocultos de un directorio y evitar omisiones."
date: 2012-05-04
updatedDate: 2026-01-08
tags: ["java-io","file","isHidden"]
slug: java/ficheros/listar-ficheros-ocultos-de-un-directorio-con-java
author: Víctor Cuervo
type: doc
id: 2c8a9dfb-adca-8150-b3dd-e0a16dca83e6
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/ListarFicherosOcultos.java
---

Estaba haciendo unas pruebas con ficheros y no había caído en que el directorio con el que estaba trabajando tenía algunos ficheros ocultos que no estaba moviendo. Y me he dicho, porqué no escribir unas pequeñas líneas de código con Java para listar los ficheros ocultos de un directorio. Y es que el programa es muy sencillo. Te recomiendo que empieces echando un ojo al [artículo que explica como listar los ficheros de un directorio con Java](http://lineadecodigo.com/java/listar-un-directorio-con-java/). Ya que la base del listado de ficheros está en ese ejemplo. Lo siguiente será saber que el método que nos dice si un fichero es oculto o no es [`.isHidden()`](https://www.w3api.com/Java/File/exists/isHidden/). Algo que, por otro lado, cabía esperar. Así que listemos los ficheros del directorio.


```java
String sDirectorio = "d:\\test";
File f = new File(sDirectorio);

if (f.exists()){
	File[] ficheros = f.listFiles();
	for (int x=0;x<ficheros.length;x++){
			System.out.println(ficheros[x].getName());
	}
} else{
	System.out.println("No existe ese directorio");
}
```


Con este código hemos listado todos los ficheros. Si queremos listar los ocultos añadimos el método [`.isHidden()`](https://www.w3api.com/Java/File/exists/isHidden/) sobre el objeto [`File`](https://www.w3api.com/Java/File/) sobre el que estamos iterando.


```java
if (f.exists()){
	File[] ficheros = f.listFiles();
	for (int x=0;x<ficheros.length;x++){
		if (ficheros[x].isHidden())
			System.out.println(ficheros[x].getName());
	}
} else{
	System.out.println("No existe ese directorio");
}
```


Algo muy sencillo y útil para no dejarnos o encontrar esos ficheros ocultos.


En los siguientes artículos intentaremos hablar de todas las novedades que trae Java SE 7 sobre la gestión de ficheros.

