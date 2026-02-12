---
title: "Obtener directorio padre de un fichero"
description: "Se explica cómo obtener el directorio padre de un fichero en Java utilizando métodos adecuados para instanciar el fichero."
date: 2012-01-20
updatedDate: 2026-02-12
tags: ["java-io","file","getparent"]
slug: java/ficheros/obtener-directorio-padre-de-un-fichero
type: doc
topic: java
id: bff89905-bbb1-4dca-ac33-f2f7a02d0333
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/ObtenerDirectorioPadre.java
---

En este ejemplo vamos a ver cómo obtener el directorio padre de un fichero con [Java](https://www.manualweb.net/java/). Es decir, el directorio del cual depende el fichero que instanciemos.


## Instanciar el fichero


Lo primero será instanciar un fichero mediante la clase [`File`](https://www.w3api.com/Java/File/).


```java
File fichero = new File("test.txt");
```


## Obtener el directorio padre


Ahora se podría pensar que es tan sencillo como utilizar el método [`.getParent()`](https://www.w3api.com/Java/File/getParent/) y ya obtendríamos el directorio padre del fichero. Es decir, que el siguiente código:


```java
fichero.getParent();
```


Ya nos retornará el directorio. Pero, por desgracia, no funciona ya que no hemos instanciado el fichero con una ruta y, por lo tanto, el método [`.getParent()`](https://www.w3api.com/Java/File/getParent/) devolverá `null`.


Así que, dado el fichero `test.txt`, vamos a obtener su ruta absoluta mediante [`.getAbsolutePath()`](https://www.w3api.com/Java/File/getAbsolutePath/) e instanciaremos el fichero con esa ruta.


```java
File fichero = new File("test.txt");
File fichero2 = new File(fichero.getAbsolutePath());

System.out.println("El directorio padre del fichero es " + fichero2.getParent());
```


Con esas líneas ya podremos obtener el directorio padre de un fichero con [Java](https://www.manualweb.net/java/).

