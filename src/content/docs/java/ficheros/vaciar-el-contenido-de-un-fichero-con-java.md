---
title: "Vaciar el contenido de un fichero con Java"
description: "Aprende a vaciar el contenido de un fichero con Java mediante FileWriter y BufferedWriter, con try-with-resources, gestión de excepciones y una alternativa moderna."
date: 2010-07-31
updatedDate: 2026-11-01
tags: ["java-io","file","filewriter","bufferedwriter","ioexception"]
slug: java/ficheros/vaciar-el-contenido-de-un-fichero-con-java
type: doc
topic: java
id: 15062464-7aeb-453b-b354-ebeba9131621
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/VaciarContenidoFichero.java
---

Nos [llegaba una pregunta vía comentarios](http://lineadecodigo.com/java/borrar-un-fichero-con-java/#49357) sobre cómo vaciar el contenido de un fichero con [Java](https://www.manualweb.net/java/). Y nos pusimos manos a la obra. El procedimiento es muy sencillo. Lo primero que tenemos que hacer es abrir un stream de escritura sobre el fichero. Para ello necesitaremos de un [`FileWriter`](http://w3api.com/wiki/Java:FileWriter) y un [`BufferedWriter`](http://w3api.com/wiki/Java:BufferedWriter).


## Abrir el fichero en modo escritura


```java
BufferedWriter bw = new BufferedWriter(new FileWriter(sFichero));
```


Al crear el [`FileWriter`](http://w3api.com/wiki/Java:FileWriter) con esta configuración, Java abre el fichero para escritura y trunca su contenido existente. Si el fichero no existe, intenta crearlo siempre que exista su directorio padre y haya permisos suficientes.


Una vez que tenemos el stream sobre el [`BufferedWriter`](http://w3api.com/wiki/Java:BufferedWriter), lo que vamos a hacer es escribir una cadena vacía. Para ello utilizamos el método [`write()`](http://w3api.com/wiki/Java:BufferedWriter.write()).


```java
bw.write("");
```


La cadena vacía no añade caracteres ni una línea nueva, pero el fichero ya ha quedado vacío al abrir el [`FileWriter`](http://w3api.com/wiki/Java:FileWriter). Por tanto, la llamada a [`write("")`](http://w3api.com/wiki/Java:BufferedWriter.write()) es válida, aunque resulta innecesaria para conseguir este objetivo.


Así conseguimos machacar todo el contenido que pudiese existir en el fichero, vaciándolo de su contenido actual. Ahora no hay que olvidarse de cerrar nuestro fichero. Esto lo hacemos mediante el método [`close()`](http://w3api.com/wiki/Java:BufferedWriter.close()) del [`BufferedWriter`](http://w3api.com/wiki/Java:BufferedWriter).


```java
bw.close();
```


## Ejemplo completo con try-with-resources


El cierre manual funciona, pero es más seguro utilizar `try-with-resources`. De esta forma, Java cierra el [`BufferedWriter`](http://w3api.com/wiki/Java:BufferedWriter) incluso si se produce una excepción mientras se trabaja con el fichero.


```java
String sFichero = "datos.txt";

try (BufferedWriter bw = new BufferedWriter(new FileWriter(sFichero))) {
    bw.write("");
}
```


El resultado es un fichero vacío. En este caso, también se podría eliminar la llamada a [`write("")`](http://w3api.com/wiki/Java:BufferedWriter.write()), porque la apertura del [`FileWriter`](http://w3api.com/wiki/Java:FileWriter) ya ha truncado el contenido.


## Vaciar el fichero con NIO


En código nuevo puede resultar conveniente utilizar la API [`java.nio.file`](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/nio/file/package-summary.html), que permite indicar explícitamente la codificación y las opciones de apertura. Este ejemplo crea el fichero si no existe y elimina su contenido anterior:


```java
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

Path fichero = Path.of("datos.txt");

try (BufferedWriter bw = Files.newBufferedWriter(
        fichero,
        StandardCharsets.UTF_8,
        StandardOpenOption.CREATE,
        StandardOpenOption.TRUNCATE_EXISTING,
        StandardOpenOption.WRITE)) {
    // La apertura ya ha dejado el fichero vacío.
} catch (IOException e) {
    e.printStackTrace();
}
```


`Path.of()` está disponible desde Java 11. En Java 8 se puede utilizar `Paths.get()` con las mismas opciones. `TRUNCATE_EXISTING` elimina el contenido anterior y `CREATE` permite crear el fichero cuando todavía no existe.

