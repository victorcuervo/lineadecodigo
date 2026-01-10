---
title: "Leer un fichero UTF-8"
description: "El documento explica cómo leer un fichero UTF-8 en Java utilizando BufferedReader e InputStreamReader."
date: 2011-09-22
updatedDate: 2026-01-10
tags: ["java-io","bufferedreader","fileinputstream","inputstreamreader","ioexception"]
slug: java/ficheros/leer-un-fichero-utf8
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/encoding/LeerFicheroUTF8.java
topic: java

---

Cuándo accedemos a un fichero tenemos que tener cuidado en su codificación. Como ya vimos al [leer un fichero en ISO Latin 1](http://lineadecodigo.com/java/leer-fichero-iso-latin-1/). En este caso vamos a leer un fichero UTF-8.


> Hay que tener especial cuidado con la codificación del fichero ya que dependiendo del encoding hay caracteres que se representan de diferente forma, o simplemente que no se representan.


Los pasos para leer el fichero UTF-8 son muy sencillos. Ya que la lectura se hace sobre un [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/), al cual hay que darle un [InputStreamReader](https://www.w3api.com/Java/InputStreamReader/) de entrada.


```java
BufferedReader in = new BufferedReader(new InputStreamReader());
```


Y será sobre el InputStreamReader donde indiquemos el encoding del fichero. En nuestro caso al ser uft-8 deberemos de utilizar el charset "uft-8". Quedándonos la siguiente línea de código:


```java
BufferedReader in = new BufferedReader(new InputStreamReader(new FileInputStream("FicheroUTF8.txt"), "utf-8"));
```


Cabe notar que el origen de lectura, es decir, el fichero, lo indicaremos con un [FileInputStream](https://www.w3api.com/Java/File/exists/InputStream). Ya solo nos quedará recorrer el fichero mediante un bucle:


```java
String sCadena;
while ((sCadena = in.readLine())!=null) {
  System.out.println(sCadena);
} 
```


Al trabajar con los encoding hay que tener especial cuidado de controlar la excepción [UnsupportedEncodingException](https://www.w3api.com/Java/UnsupportedEncodingException/) para aquellos encodings no soportados. Y al acceder a ficheros la típica excepción [IOException](https://www.w3api.com/Java/IOException/).

