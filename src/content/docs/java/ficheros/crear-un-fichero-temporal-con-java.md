---
title: "Crear un fichero temporal con Java"
description: "Aprende a crear ficheros temporales con Java, elige su directorio, escribe contenido y elimínalos correctamente con File, Files y Path en tus aplicaciones."
date: 2011-11-23
updatedDate: 2026-10-31
tags: ["java-io","bufferedwriter","file","ioexception"]
slug: java/ficheros/crear-un-fichero-temporal-con-java
type: doc
topic: java
id: 8e4103ab-3c69-4211-8e5b-9464b26289b2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/CrearFicheroTemporal.java
---

Ayer nos interesábamos por saber cuál es el [directorio temporal del sistema con Java](http://lineadecodigo.com/java/directorio-temporal-del-sistema-en-java/). Y es que hoy vamos a generar un fichero temporal con [Java](https://lineadecodigo.com/java/) y, claro está, deberíamos saber dónde ir a buscarlo.


Creo que no hace falta explicar la utilidad de los ficheros temporales. Simplemente tenemos que saber que no todos los datos que utilizamos en nuestros programas tienen por qué ser guardados de forma permanente. En esos casos, podemos utilizar ficheros temporales.


## Crear un fichero temporal con File


Java nos ofrece un conjunto muy extenso de métodos en la clase `File`, y uno de ellos es [`createTempFile()`](http://w3api.com/wiki/Java:File.createTempFile%28%29). El método [`createTempFile()`](http://w3api.com/wiki/Java:File.createTempFile%28%29) crea un fichero temporal en el directorio que indiquemos o en el [directorio temporal del sistema](http://lineadecodigo.com/java/directorio-temporal-del-sistema-en-java/) cuando no especificamos una ubicación.


Creemos el fichero:


```java
File tempFile = File.createTempFile("mificherotemporal", null);
```


Es muy importante tener en cuenta que el fichero creado por [`createTempFile()`](http://w3api.com/wiki/Java:File.createTempFile%28%29) tendrá un nombre único generado por Java. A ese nombre se le añade el prefijo que indiquemos y, si proporcionamos un sufijo, también se incorpora. En nuestro caso hemos utilizado `mificherotemporal` como prefijo y no hemos asignado ningún sufijo. El prefijo debe tener al menos tres caracteres; cuando el sufijo es `null`, Java utiliza normalmente `.tmp` como extensión.


Si necesitamos elegir el directorio, podemos utilizar la sobrecarga que recibe un objeto `File` con la ubicación:


```java
File directorio = new File("/ruta/al/directorio");
File tempFile = File.createTempFile("mificherotemporal", ".txt", directorio);
```


El directorio debe existir y el proceso debe tener permisos para crear ficheros en él. Si no se puede crear el fichero, la operación lanza `IOException`.


> Siempre que crees ficheros en [Java](https://lineadecodigo.com/java/) con la clase `File`, recuerda manejar la excepción `IOException`.


## Eliminar el fichero temporal


Una cosa importante cuando trabajamos con ficheros temporales en Java es que estos, por defecto, no se borran automáticamente. Si queremos borrar el fichero cuando termine la máquina virtual de Java, debemos llamar al método [`deleteOnExit()`](http://w3api.com/wiki/Java:File.deleteOnExit%28%29):


```java
tempFile.deleteOnExit();
```


`deleteOnExit()` registra el fichero para eliminarlo cuando la máquina virtual termina correctamente. No sustituye a la eliminación explícita, no garantiza el borrado tras un cierre forzoso y puede consumir recursos si se registra un número muy elevado de ficheros. Cuando el fichero ya no sea necesario, es preferible eliminarlo de forma explícita con `delete()` o `Files.deleteIfExists()`.


## Escribir contenido en el fichero temporal


Ya solo nos queda volcar algo de contenido sobre nuestro fichero temporal:


```java
BufferedWriter out = new BufferedWriter(new FileWriter(tempFile));
out.write("Esto es un fichero temporal");
out.close();
```


El método `close()` cierra el escritor y hace que se vacíe su búfer. En código nuevo, conviene utilizar `try-with-resources` para garantizar el cierre incluso cuando se produce una excepción:


```java
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class CrearFicheroTemporal {
    public static void main(String[] args) {
        try {
            File tempFile = File.createTempFile("mificherotemporal", ".txt");

            try (BufferedWriter out = new BufferedWriter(new FileWriter(tempFile))) {
                out.write("Esto es un fichero temporal");
            }

            System.out.println("Fichero creado en: " + tempFile.getAbsolutePath());
            tempFile.deleteOnExit();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```


El resultado es un fichero con un nombre único dentro del directorio temporal del sistema. La ruta exacta depende del sistema operativo y de la configuración de la máquina virtual, por lo que no debemos asumir una ubicación concreta.


## Alternativa moderna con Path y Files


La API `java.nio.file` ofrece una alternativa más actual para trabajar con ficheros. `Files.createTempFile()` permite crear el fichero y devuelve un objeto `Path`; además, `Files.newBufferedWriter()` permite indicar explícitamente la codificación del texto:


```java
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

public class CrearFicheroTemporalNio {
    public static void main(String[] args) {
        try {
            Path tempFile = Files.createTempFile("mificherotemporal", ".txt");

            try (BufferedWriter out = Files.newBufferedWriter(tempFile, StandardCharsets.UTF_8)) {
                out.write("Esto es un fichero temporal");
            }

            System.out.println("Fichero creado en: " + tempFile.toAbsolutePath());
            Files.deleteIfExists(tempFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```


Esta variante es especialmente útil cuando se necesita trabajar con rutas de `Path`, controlar la codificación o eliminar el fichero en un punto concreto del programa. Si el fichero debe permanecer hasta la finalización de la máquina virtual, se puede conservar la referencia a `Path` y utilizar `tempFile.toFile().deleteOnExit()`.


Y trabajo hecho. Ya hemos conseguido crear un fichero temporal con [Java](https://lineadecodigo.com/java/).

