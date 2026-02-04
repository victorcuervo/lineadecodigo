---
title: "Convertir un fichero ISO en UTF-8"
description: "Utilizar el lenguaje de programación Java para convertir un fichero ISO en UTF-8."
date: 2012-01-14
updatedDate: 2026-01-11
tags: ["utf8","iso","encoding","ficheros","file","java-io","bufferedreader","bufferedwriter","outputstream","inputstreamreader"]
slug: java/ficheros/convertir-un-fichero-iso-en-utf-8
type: doc
topic: java
id: ebe50349-2896-45f1-8c71-e7ae237b016c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/encoding/ConvertirISO1aUTF8.java
---

## Conversión de ficheros ISO a UTF-8


Apoyándonos en los ejemplos que nos enseñaban a [generar ficheros en ISO](http://lineadecodigo.com/java/escribir-un-fichero-iso-latin-1/) y a [generar ficheros en UTF-8](http://lineadecodigo.com/java/escribir-un-fichero-utf-8/), así como en los que [leian de un fichero en ISO](http://lineadecodigo.com/java/leer-fichero-iso-latin-1/) y [leian un fichero en UTF-8](http://lineadecodigo.com/java/leer-un-fichero-utf-8/) vamos a construir un código que nos permita hacer la conversión. Es decir, convertir un fichero ISO en un fichero UFT-8.


## Implementación en Java


Para convertir un fichero ISO en UTF-8, la idea es muy sencilla, lo que tendremos que hacer es abrir un stream de lectura sobre un fichero ISO y un stream de escritura sobre un fichero UTF-8.


Para realizar la escritura del fichero ISO utilizamos un [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/) sobre un [InputStreamReader](https://www.w3api.com/Java/InputStreamReader/). Será en el [InputStreamReader](https://www.w3api.com/Java/InputStreamReader/) dónde indicaremos la codificación del fichero a leer. La codificación "8859_1" es la que representa el ISO. El código será el siguiente:


```java
BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream("fichero.txt"),"8859_1"));
```


La apertura del stream de escritura será muy similar, pero en este caso utilizando un [BufferedWriter](https://www.w3api.com/Java/BufferedWriter/) y un [OutputStreamWriter](https://www.w3api.com/Java/OutputStream-java-io/Writer). Al igual que en la anterior línea de código, es el [OutputStreamWriter](https://www.w3api.com/Java/OutputStream-java-io/Writer) con el que indicamos la codificación. Esta será utf-8.


```java
BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("ficheroutf8.txt"),"utf-8"));
```


Ya solo nos queda ir leyendo del [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/) y volcando sobre el BufferedWriter.


```java
String linea;
while ((linea=br.readLine())!=null){
  bw.write(linea);
  bw.newLine();
}
```


El último paso de nuestro código de conversión es el cierre de los ficheros.


```java
br.close();
bw.close();
```


## Conclusión


Con una lectura/escritura y teniendo en cuenta las codificaciones de los ficheros, hemos conseguido, de una forma sencilla, convertir un fichero ISO en UTF-8.

