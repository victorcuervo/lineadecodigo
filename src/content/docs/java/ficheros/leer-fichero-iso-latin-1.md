---
title: "Leer fichero ISO Latin 1"
description: "Código fuente que nos explica cómo podemos leer fichero ISO Latin 1 en Java."
date: 2011-09-16
updatedDate: 2026-01-09
tags: ["bufferedreader","inputstreamreader","fileinputstream","encoding","iso","latin1","fichero","java-io","file"]
slug: java/ficheros/leer-fichero-iso-latin-1
author: Víctor Cuervo
type: doc
topic: java
id: 2c8a9dfb-adca-8135-a957-cc5b15112f98
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/encoding/LeerFicheroISO1.java
---

El lenguaje [Java](https://www.manualweb.net/java/) nos da la capacidad de acceder a ficheros que tengan diferentes codificaciones. Posiblemente, muchos de nuestros ficheros vengan codificados en ISO Latin 1, o lo que es lo mismo ISO-8859-1, Latin Alphabet No. 1. Al existir diferentes codificaciones para el contenido, [Java](https://www.manualweb.net/java/) nos permite indicar el tipo de contenido al que accedemos, para poderlo leer los ficheros de la forma correcta. Pero vamos por partes, lo primero que haremos será abrir el fichero. Para ello y como vimos en el artículo [leer un fichero de texto con Java](http://lineadecodigo.com/java/leer-fichero-de-texto-con-java/), necesitaremos de un [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/).


```java
BufferedReader in = new BufferedReader();
```


Al [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/) tendremos que proveerlo de un stream de entrada, o lo que es lo mismo un [InputStreamReader](https://www.w3api.com/Java/InputStreamReader/).


```java
BufferedReader in = new BufferedReader(new InputStreamReader());
```


El [InputStreamReader](https://www.w3api.com/Java/InputStreamReader/) será la clave, ya al [InputStreamReader](https://www.w3api.com/Java/InputStreamReader/) podemos indicarle un charset de entrada. Es decir, el tipo de codificación que queremos. En este caso, si queremos leer un fichero en ISO Latin 1 deberemos de utilizar el charset "8859_1". Pero al [InputStreamReader](https://www.w3api.com/Java/InputStreamReader/) le falta el origen, el nombre del fichero. Es decir, será de la siguiente forma:


```java
 new InputStreamReader(new FileInputStream("FicheroISO1.txt"), "8859_1")
```


> Asegúrate que el fichero tiene un encoding ISO-8859-1, Latin Alphabet No. 1.


El código de la instanciación incial quedaría de la siguiente forma:


```java
BufferedReader in = new BufferedReader(
   new InputStreamReader(new FileInputStream("FicheroISO1.txt"), "8859_1"));
```


Ahora solo nos quedará leer el contenido del fichero, como hacíamos en [leer un fichero de texto con Java](http://lineadecodigo.com/java/leer-fichero-de-texto-con-java/).


```java
String sCadena;
while ((sCadena = in.readLine())!=null) {
  System.out.println(sCadena);
} 
```


Puedes echar un vistazo a los [encodings soportados en Java 7](http://download.oracle.com/javase/7/docs/technotes/guides/intl/encoding.doc.html).

