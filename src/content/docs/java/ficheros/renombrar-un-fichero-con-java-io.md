---
title: "Renombrar un fichero con Java IO"
description: "Como manipular los ficheros mediante una clase File y su método .renameTo() para poder renombrar un fichero con Java IO de forma sencilla."
date: 2006-11-25
updatedDate: 2026-01-06
tags: ["file","java-io","renameto"]
slug: java/ficheros/renombrar-un-fichero-con-java-io
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/io/RenombrarFicheros.java
topic: java
---

Entre las muchas operativas que se pueden hacer sobre un fichero tenemos el **renombrado de un fichero**. Para ello la librería de [Java](https://www.manualweb.net/java/), [Java IO](https://w3api.com/Java/tag/java.io), nos ofrece un método sobre la clase [`File`](https://w3api.com/Java/File/). Así que vamos a ver cómo renombrar un fichero con Java IO. Si recordamos un poco la filosofía de la clase [Java IO](https://w3api.com/Java/tag/java.io) veremos que la clase [`File`](https://w3api.com/Java/File/) representa la abstracción de un fichero o directorio independientemente del sistema de ficheros que tengamos por debajo. Es decir, da igual que estemos ejecutando nuestro código fuente en una máquina que tenga un sistemas de ficheros de Windows o bien un sistema de ficheros de UNIX o Linux, ya que se comportará de la misma forma. Lo primero que tenemos que hacer es instanciar la clase [`File`](https://w3api.com/Java/File/) sobre el fichero que queramos realizar el renombrado. Para ello utilizamos [el constructor de la clase ](https://w3api.com/Java/File/File/)[`File`](https://w3api.com/Java/File/File/), como podemos ver en la siguiente [línea de código](/):


```java
File f1 = new File("fichero1.txt");
```


Vemos que [el constructor de la clase ](https://w3api.com/Java/File/File/)[`File`](https://w3api.com/Java/File/File/) recibe como parámetro el nombre del fichero, como una cadena de texto. Lo siguiente será instanciar una nueva clase [`File`](https://w3api.com/Java/File/) con el nombre del fichero que queramos poner. Veamos la [línea de código](/):


```java
File f2 = new File("fichero2.txt");
```


Con las dos abstracciones de los ficheros solo nos quedará el ejecutar el método [`.renameTo(File)`](https://w3api.com/Java/File/renameTo) sobre el primer fichero. El método [`.renameTo(File)`](https://w3api.com/Java/File/renameTo) recibe como parámetro un objeto [`File`](https://w3api.com/Java/File/) con el nuevo nombre. El que nosotros hemos llamado f2


```java
boolean correcto = f1.renameTo(f2);
```


El método [`.renameTo(File)`](https://w3api.com/Java/File/renameTo) devuelve un valor **booleano** indicando si se ha podido realizar el renombrado, o no. Asi que para finalizar validaremos la variable **booleana** con el fin de dar información al usuario.


```java
if (correcto)
  System.out.println("El renombrado ha sido correcto");
else
  System.out.println("El renombrado no se ha podido realizar");
```


Ya hemos visto lo sencillo que es renombrar un fichero con Java IO con unas pocas líneas de código. ¿Pensabas que era tan sencillo?

