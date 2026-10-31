---
title: "Directorio Temporal del Sistema en Java"
description: "Aprende a obtener el directorio temporal del sistema en Java, crear ficheros temporales con NIO y gestionarlos de forma segura según la plataforma."
date: 2011-11-22
updatedDate: 2026-10-31
tags: ["system","java-io","file","java-util"]
slug: java/ficheros/directorio-temporal-del-sistema-en-java
type: doc
topic: java
id: a11b9fbd-ee85-499e-8599-a05b173e66ab
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/DirectorioTemporal.java
---

El directorio temporal del sistema es el directorio donde guardamos los ficheros que no forman parte del resultado final y que solo necesitamos durante un tiempo. **Si queremos saber cuál es el directorio temporal del sistema en** [**Java**](https://www.manualweb.net/java/) **deberemos utilizar la clase** **`System`** y acceder a las propiedades del sistema. En concreto, debemos consultar la propiedad `java.io.tmpdir` mediante el método [`getProperty()`](http://w3api.com/wiki/Java:System.getProperty%28%29). Solo tenemos que mostrarla por la consola:


```java
System.out.println("El directorio temporal del sistema es "
  + System.getProperty("java.io.tmpdir"));
```


La ruta que se muestra depende del sistema operativo y de la configuración de la máquina. Por tanto, no debemos asumir una ruta concreta ni que termine con un separador de directorios.


## Qué significa java.io.tmpdir


`java.io.tmpdir` es una propiedad del sistema que indica el directorio que la aplicación puede utilizar para sus archivos temporales. Su valor puede cambiar entre Windows, Linux y macOS, y también puede definirse al iniciar la máquina virtual de Java con la opción `-Djava.io.tmpdir=/ruta/temporal`.


La propiedad proporciona una ubicación, pero no crea el directorio ni elimina automáticamente los archivos que guardemos en él. La aplicación debe comprobar los errores de entrada y salida y decidir cuándo dejar de necesitar cada archivo temporal.


## Crear un fichero temporal con NIO


Para crear y gestionar archivos temporales es preferible utilizar la API `java.nio.file` en lugar de construir nombres concatenando cadenas.


> Utiliza `Path` y `Files` para trabajar con rutas y archivos, sin concatenar manualmente separadores como `/` o `\\`.


El método `Files.createTempFile()` genera un nombre único dentro del directorio indicado y crea el archivo en una sola operación:


```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FicheroTemporal {
    public static void main(String[] args) throws IOException {
        Path directorioTemporal =
                Paths.get(System.getProperty("java.io.tmpdir"));

        Path ficheroTemporal = Files.createTempFile(
                directorioTemporal, "ejemplo-", ".txt");

        System.out.println("Fichero temporal: " + ficheroTemporal);

        Files.deleteIfExists(ficheroTemporal);
    }
}
```


`Files.createTempFile()` devuelve un objeto `Path` y recibe el directorio, un prefijo y un sufijo opcional. El ejemplo crea un archivo con extensión `.txt`, muestra su ruta y lo elimina cuando deja de ser necesario. El método `deleteIfExists()` evita tratar como error el caso en que el archivo ya no exista.


En sucesivos artículos trabajaremos con ficheros temporales que dejaremos en el directorio temporal del sistema.

