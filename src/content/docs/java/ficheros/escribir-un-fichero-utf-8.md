---
title: "Escribir un fichero UTF-8"
description: "El artículo explica cómo escribir un fichero UTF-8 en Java utilizando OutputStream y BufferedWriter."
date: 2011-10-12
updatedDate: 2026-01-10
tags: ["java-io","bufferedreader","outputstream","ioexception","fileoutputstream","write","close","bufferedwriter"]
slug: java/ficheros/escribir-un-fichero-utf-8
type: doc
topic: java
id: 1ecc4dfc-73f9-4852-a851-8955a2db78dc
author: Víctor Cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/encoding/EscribirFicheroUTF8.java
---

Si [ya escribimos un fichero en ISO Latin 1](http://lineadecodigo.com/java/escribir-un-fichero-iso-latin-1/), ahora vamos con el encoding UTF-8. Y es que el procedimiento es similar, y solo tendremos que prestar atención al encoding a utilizar. El encoding utf-8 lo vamos a indicar en el [OutputStream](https://www.w3api.com/Java/OutputStream-java-io/). Y es que nuestro stream de datos de salida en [Java](https://www.manualweb.net/java/) o [OutputStream](https://www.w3api.com/Java/OutputStream-java-io/) recibirá el encoding "utf-8" y el fichero dónde escribiremos mediante una instancia de [FileOutputStream](https://www.w3api.com/Java/File/exists/OutputStream).


```java
new OutputStreamWriter(new FileOutputStream("FicheroSalidaUTF8.txt"), "utf-8");
```


Ahora solo necesitaremos un Buffer [Java](https://www.manualweb.net/java/) de salida, un [BufferedWriter](https://www.w3api.com/Java/BufferedWriter/) para ir volcándole los datos.


```java
BufferedWriter out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("FicheroSalidaUTF8.txt"), "utf-8"));
```


> En este tipo de manipulaciones tienes que tener cuidado con las excepciones [Java](https://www.manualweb.net/java/) [UnsupportedEncodingException](https://www.w3api.com/Java/UnsupportedEncodingException/) e [IOException](https://www.w3api.com/Java/IOException/).


Los datos los volcamos con el método [.write()](https://www.w3api.com/Java/BufferedWriter/.write%28%29):


```java
out.write("Esto es un fichero UTF8");
```


Por último cerraremos el fichero mediante un método [.close()](https://www.w3api.com/Java/BufferedWriter/.close%28%29):


```java
out.close();
```

