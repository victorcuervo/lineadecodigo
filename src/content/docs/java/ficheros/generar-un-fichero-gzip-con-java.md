---
title: "Generar un fichero GZIP con Java"
description: "Este artículo explica cómo generar un fichero GZIP con Java utilizando clases de entrada y salida."
lastUpdated: 2025-12-23
slug: java/generar-un-fichero-gzip-con-java
author: victor_cuervo
---

[GZIP](http://www.gzip.org/) es la abreviatura de GNU ZIP. [GZIP](http://www.gzip.org/) se basa en el algoritmo Deflate (combinación de los algoritmos LZ77 y Huffman). [GZIP](http://www.gzip.org/) solo sirve para comprimir ficheros, pero no los comprime. Esto si que lo hace otras herramientas como ZIP. La idea es utilizar el [lenguaje Java](https://www.manualweb.net/java/) para generar un fichero [GZIP](http://www.gzip.org/) a partir de un fichero de nuestros discos. 


> [GZIP](http://www.gzip.org/) y ZIP son dos conceptos diferentes. [GZIP](http://www.gzip.org/) comprime ficheros, mientras que ZIP comprime y archiva los ficheros.


Lo primero que tenemos que hacer es leer el fichero de origen. Para ello nos apoyaremos en las clases de [Java IO](https://www.w3api.com/Java/tag/java.io/). En concreto, [FileInputStream](https://www.w3api.com/Java/File/exists/InputStream).


```java
String inFilename = "fichero.txt";
FileInputStream in = new FileInputStream(inFilename);
```


A continuación deberemos detallar cuál va a ser el fichero de salida. En este caso nos apoyamos en las [clases de Java ZIP de compresión](https://www.w3api.com/Java/tag/java.util.zip/). Usaremos GZIPOutputStream, a la cual le pasaremos por parámetro el fichero de salida, representado por la clase FileOutputStream, esta última de [Java IO]( "Java IO").


```java
String outFilename = "fichero.gzip";
GZIPOutputStream out = new GZIPOutputStream(new FileOutputStream(outFilename));
```


Esto ya hace que lo que volquemos a GZIPOutputStream sea una codificación [GZIP](http://www.gzip.org/). A si que solo nos quedará ir leyendo del stream de entrada y volcarlo al stream de salida. Para ello nos apoyaremos en un buffer de 1024bytes.


```java
byte[] buf = new byte[1024];
int len;
while ((len = in.read(buf)) > 0) {
    out.write(buf, 0, len);
}
```


Ya tenemos todo el contenido volcado sobre la salida comprimida. Solo nos quedará cerrar los ficheros, para eso usamos [el método .close()](https://www.w3api.com/Java/OutputStream-java-io/.close()).


```java
out.finish();
out.close();
```


Hay que recordar que siempre que manejamos ficheros con las clases de Java IO se puede producir una [excepcion IOException](https://www.w3api.com/Java/IOException/). Así que todo nuestro código deberá ir encerrado entre un bloque try-catch{}.

