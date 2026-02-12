---
title: "Escribir un fichero ISO Latin 1"
description: "Se explica cómo escribir un fichero ISO Latin 1 en Java utilizando OutputStreamWriter y BufferedWriter."
date: 2011-09-25
updatedDate: 2026-02-12
tags: ["java-io","bufferedwriter","fileoutputstream","ioexception","outputstream","iso","latin1","write","close"]
slug: java/ficheros/escribir-un-fichero-iso-latin-1
type: doc
topic: java
id: 2c8a9dfb-adca-81cb-b437-cd8de7397137
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/encoding/EscribirFicheroISO1.java
---

Si aprendiste a [leer un fichero con un ](http://lineadecodigo.com/java/leer-fichero-iso-latin-1/)[_encoding_](http://lineadecodigo.com/java/leer-fichero-iso-latin-1/)[ ISO Latin 1](http://lineadecodigo.com/java/leer-fichero-iso-latin-1/), ahora vamos a ver cómo escribir un fichero ISO Latin 1 con Java.


El punto en el que hay que especificar el _encoding_ es en la clase [`OutputStreamWriter`](https://www.w3api.com/Java/OutputStreamWriter/), ya que recibe el fichero al que queremos escribir y el _encoding_ con el que escribimos.


## Definir el _encoding_ con OutputStreamWriter


```java
new OutputStreamWriter(new FileOutputStream("FicheroSalidaISO1.txt"), "8859_1");
```


Como vemos, el fichero al que escribimos lo instanciamos mediante [`FileOutputStream`](https://www.w3api.com/Java/FileOutputStream/). El _encoding_ utilizado para escribir un fichero ISO Latin 1 es `"8859_1"`.


## Usar un BufferedWriter


Solo nos quedará apoyarnos en un _buffer_, en concreto en un [`BufferedWriter`](https://www.w3api.com/Java/BufferedWriter/), para enviar el texto al fichero.


```java
BufferedWriter out = new BufferedWriter(
	new OutputStreamWriter(new FileOutputStream("FicheroSalidaISO1.txt"), "8859_1")
);
```


Una vez que hemos abierto el [`BufferedWriter`](https://www.w3api.com/Java/BufferedWriter/), empezamos a ejecutar sentencias de escritura mediante el método [`.write()`](https://www.w3api.com/Java/BufferedWriter/write/).


```java
out.write("Esto es un fichero ISO Latin 1");
```


## Cerrar el _stream_


Por último, tenemos que cerrar el _stream_ sobre el fichero. Para esto nos apoyamos en el método [`.close()`](https://www.w3api.com/Java/FileOutputStream/close/).


```java
out.close();
```


## Controlar excepciones


Si vemos el código completo, comprobaremos que hay que controlar las excepciones [`UnsupportedEncodingException`](https://www.w3api.com/Java/UnsupportedEncodingException/) e [`IOException`](https://www.w3api.com/Java/IOException/).


```java
try {
	BufferedWriter out = new BufferedWriter(
		new OutputStreamWriter(new FileOutputStream("FicheroSalidaISO1.txt"), "8859_1")
	);
	out.write("Esto es un fichero ISO Latin 1");
	out.close();
} catch (UnsupportedEncodingException e) {
	e.printStackTrace();
} catch (IOException e) {
	e.printStackTrace();
}
```


Con pocas líneas hemos escrito un fichero ISO Latin 1.

