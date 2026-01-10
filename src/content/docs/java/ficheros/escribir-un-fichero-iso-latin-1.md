---
title: "Escribir un fichero ISO Latin 1"
description: "Se explica cómo escribir un fichero ISO Latin 1 en Java utilizando OutputStreamWriter y BufferedWriter."
date: 2011-09-25
updatedDate: 2026-01-10
tags: ["java-io","bufferedwriter","fileoutputstream","ioexception","outputstream","iso","latin1","write","close"]
slug: java/ficheros/escribir-un-fichero-iso-latin-1
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/encoding/EscribirFicheroISO1.java
topic: java

---

Si aprendiste a [leer un fichero con un enconding ISO Latin 1](http://lineadecodigo.com/java/leer-fichero-iso-latin-1/), ahora vamos a ver cómo podemos escribir un fichero ISO Latin 1 con [Java](https://www.manualweb.net/java/). El punto en el que hay que especificar el encoding es con la clase [OutputStreamWriter](https://www.w3api.com/Java/OutputStream-java-io/). Y es que la clase [OutputStreamWriter](https://www.w3api.com/Java/OutputStream-java-io/) recibe el fichero al que queremos escribir y el encoding con el que escribimos.


```java
OutputStreamWriter(new FileOutputStream("FicheroSalidaISO1.txt"), "8859_1")
```


Como vemos el fichero al que escribimos lo instanciamos mediante [FileOutputStream](https://www.w3api.com/Java/File/exists/OutputStream). Y el encoding utilizado para escribir un fichero ISO Latin 1 es "8859_1". Solo nos quedará apoyarnos en un Buffer, en concreto en un [BufferedWriter](https://www.w3api.com/Java/BufferedWriter/) para enviar el texto al fichero.


```java
BufferedWriter out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("FicheroSalidaISO1.txt"), "8859_1"));
```


Una vez que hemos abierto el [BufferedWriter](https://www.w3api.com/Java/BufferedWriter/), empezamos a ejecutar sentencias de escritura mediante el método [.write()](https://www.w3api.com/Java/BufferedWriter/.write%28%29).


```java
out.write("Esto es un fichero ISO Latin 1");
```


Por último tenemos que cerrar el stream sobre el fichero. Para esto nos apoyamos en el método [.close()](https://www.w3api.com/Java/BufferedWriter/.close%28%29).


```java
out.close();
```


Si vemos el código completo veremos que hay que controlar las excepciones [UnsupportedEncodingException](https://www.w3api.com/Java/UnsupportedEncodingException/) e [IOException](https://www.w3api.com/Java/IOException/).


```java
try {
  BufferedWriter out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("FicheroSalidaISO1.txt"), "8859_1"));
  out.write("Esto es un fichero ISO Latin 1");
  out.close();
} catch (UnsupportedEncodingException e) {
  e.printStackTrace();
} catch (IOException e) {
  e.printStackTrace();
}
```


Con pocas líneas hemos escrito un fichero ISO Latin 1.

