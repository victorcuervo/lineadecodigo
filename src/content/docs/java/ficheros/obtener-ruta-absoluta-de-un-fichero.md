---
title: "Obtener ruta absoluta de un fichero"
description: "Este artículo explica cómo obtener la ruta absoluta de un fichero en Java."
date: 2006-11-23
updatedDate: 2026-01-06
tags: ["file","java-io","getabsolutepath"]
slug: java/ficheros/obtener-ruta-absoluta-de-un-fichero
author: victor_cuervo
type: doc
topic: java
id: fe3eac48-ee74-48f8-9884-801079fbf852
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/RutaAbsoluta.java
---

Si hay algo que tiene la librería [Java IO](https://w3api.com/Java/tag/java.io) es que nos permite manejar de forma muy extensa y con una gran facilidad los ficheros. Algo que podéis encontrar el los [múltiples ejemplos que tiene Línea de Código para manejar ficheros](https://lineadecodigo.com/tag/java-io/). Así, la librería [Java IO](https://w3api.com/Java/tag/java.io), nos va a permitir, de una forma muy sencilla obtener ruta absoluta de un fichero en [Java](https://www.manualweb.net/java/). Una de las clases principales de la librería [Java IO](https://w3api.com/Java/tag/java.io) es [`File`](https://w3api.com/Java/File/). Dicha clase representa de forma abstracta a las rutas ficheros y directorios. De esta forma podemos acceder a distintos sistemas de ficheros, independientemente de la estructura que estos tengan. Así se trabajaría de igual manera dentro de un sistema UNIX donde la raíz sería representada por “\” o un sistema Windows donde se antepondría el nombre de la unidad en la que está el fichero. No nos tendremos que preocupar por el sistema operativo dónde se esté ejecutando nuestro programa. Para conocer la ruta absoluta de un fichero, lo primero que tenemos que hacer es instanciar [la clase ](https://w3api.com/Java/File/)[`File`](https://w3api.com/Java/File/) mediante [alguno de sus constructores](https://w3api.com/Java/File/File/). En este caso, le pasaremos el nombre del fichero como parámetro.


```java
File fichero = new File("fichero.txt");
```


A partir de este momento el objeto fichero (de tipo [`File`](https://w3api.com/Java/File/)) será el que contenga la representación de nuestro fichero. Uno de los métodos de [`File`](https://w3api.com/Java/File/), [`.getAbsolutePath()`](https://w3api.com/Java/File/getAbsolutePath) será el que nos devuelva la ruta absoluta del fichero. A si que solo tendremos que invocarlo desde el objeto fichero. En nuestro caso, la siguiente línea de código, lo volcará a la consola:


```java
System.out.println(fichero.getAbsolutePath());
```


En mi caso lo he ejecutado bajo una máquina Windows y me ha devuelto el siguiente resultado:


```shell
C:\workspace_eclipse\lineadecodigo_com\fichero.txt
```


Como veis. Muy sencillo obtener ruta absoluta de un fichero.

