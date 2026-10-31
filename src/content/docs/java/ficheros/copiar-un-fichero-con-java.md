---
title: "Copiar un fichero con Java"
description: "Aprende a copiar un fichero con Java mediante streams y Files.copy(), conservar su contenido y gestionar recursos, rutas y ficheros existentes."
date: 2010-11-11
updatedDate: 2026-10-31
tags: ["java-io","file","fileinputstream","fileoutputstream","inputstream"]
slug: java/ficheros/copiar-un-fichero-con-java
type: doc
topic: java
id: 5c53fa3c-e415-4b8f-ba4a-7750845bb664
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/io/CopiarFicheros.java
---

## Copia mediante streams de entrada y salida


En este ejemplo vamos a ver cómo podemos copiar un fichero con [Java](https://lineadecodigo.com/java/). De tal manera que acabemos teniendo un segundo fichero con el mismo contenido del primer fichero. Lo primero que haremos será crear dos objetos de tipo [`File`](http://w3api.com/wiki/Java:File), los cuales representarán al fichero origen y al fichero destino:


```java
File origen = new File("origen.txt");
File destino = new File("destino.txt");
```


La idea principal para copiar un fichero con [Java](https://lineadecodigo.com/java/) será la de abrir un stream de lectura, es decir, un [`InputStream`](http://w3api.com/wiki/Java:InputStream), sobre el fichero origen, realizar la lectura a la vez que abrimos un stream de escritura sobre el fichero destino, es decir, un [`OutputStream`](http://w3api.com/wiki/Java:OutputStream). Sobre este [`OutputStream`](http://w3api.com/wiki/Java:OutputStream) realizaremos la escritura. Nos apoyamos en los objetos [`File`](http://w3api.com/wiki/Java:File) creados anteriormente, así como en las clases [`FileInputStream`](http://w3api.com/wiki/Java:FileInputStream) y [`FileOutputStream`](http://w3api.com/wiki/Java:FileOutputStream) para abrir los streams a los ficheros:


```java
InputStream in = new FileInputStream(origen);
OutputStream out = new FileOutputStream(destino);
```


Realizamos la lectura y escritura mientras existan datos en el stream de lectura:


```java
byte[] buf = new byte[1024];
int len;

while ((len = in.read(buf)) > 0) {
  out.write(buf, 0, len);
}
```


Las lecturas las hacemos mediante el método [`read()`](http://w3api.com/Java/InputStream-java-io/read/). Ya solo nos quedará cerrar los streams mediante el método [`close()`](http://w3api.com/wiki/Java:OutputStream.close()) para finalizar el código de nuestro programa.


```java
in.close();
out.close();
```


Cabe notar que necesitamos controlar la excepción [`IOException`](http://w3api.com/wiki/Java:IOException) en todo el código. Es por ello que todo el código lo tendremos en una estructura `try-catch`. Ya tendremos realizado nuestro ejemplo, que nos ayuda a copiar un fichero con [Java](https://lineadecodigo.com/java/).


### Ejemplo completo con try-with-resources


El código original muestra el funcionamiento de la copia por bloques. Para que el ejemplo sea ejecutable y el cierre de los streams se produzca incluso cuando ocurre un error, podemos reunir esas piezas en un programa completo y utilizar `try-with-resources`:


```java
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class CopiarFichero {

  public static void main(String[] args) {
    File origen = new File("origen.txt");
    File destino = new File("destino.txt");

    try (InputStream in = new FileInputStream(origen);
         OutputStream out = new FileOutputStream(destino)) {

      byte[] buf = new byte[1024];
      int len;

      while ((len = in.read(buf)) != -1) {
        out.write(buf, 0, len);
      }
    } catch (IOException e) {
      System.err.println("No se pudo copiar el fichero: " + e.getMessage());
    }
  }
}
```


El método [`read()`](http://w3api.com/Java/InputStream-java-io/read/) devuelve la cantidad de bytes leídos y devuelve `-1` cuando alcanza el final del fichero. La condición `!= -1` hace explícita esa señal de fin. Al salir del bloque `try`, Java cierra automáticamente `in` y `out`. Si el fichero destino ya existe, `FileOutputStream` lo sobrescribe desde el principio, por lo que conviene comprobar esa decisión antes de ejecutar la copia cuando no se deba reemplazar información.


## Alternativa con Files.copy()


Desde Java 7, la API `java.nio.file` ofrece [`Files.copy()`](https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html#copy(java.nio.file.Path,java.nio.file.Path,java.nio.file.CopyOption...)) para copiar un fichero directamente. Esta opción evita gestionar manualmente el búfer y resulta adecuada cuando no necesitamos intervenir durante la lectura de cada bloque:


```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

public class CopiarFicheroNio {

  public static void main(String[] args) {
    Path origen = Path.of("origen.txt");
    Path destino = Path.of("destino.txt");

    try {
      Files.copy(origen, destino, StandardCopyOption.REPLACE_EXISTING);
      System.out.println("El fichero se ha copiado correctamente.");
    } catch (IOException e) {
      System.err.println("No se pudo copiar el fichero: " + e.getMessage());
    }
  }
}
```


`Path.of()` está disponible desde Java 11. En versiones anteriores se puede utilizar `Paths.get()` para construir las mismas rutas. Si no se indica `StandardCopyOption.REPLACE_EXISTING` y el destino ya existe, la copia puede fallar porque la operación no lo reemplaza por defecto.


La copia mediante `FileInputStream` y `FileOutputStream` permite entender cómo se transfieren los bytes entre dos ficheros. Para una copia directa y legible, `Files.copy()` suele ser la alternativa más sencilla; si necesitas transformar los datos durante el proceso, el enfoque basado en streams ofrece un mayor control.

