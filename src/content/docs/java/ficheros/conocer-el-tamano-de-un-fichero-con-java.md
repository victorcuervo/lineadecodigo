---
title: "Conocer el tamaño de un fichero con Java"
description: "Aprende a obtener el tamaño de un fichero en Java con File.length(), interpretar los bytes devueltos, validar la ruta y usar Files.size() con NIO.2."
date: 2007-07-07
updatedDate: 2026-10-31
tags: ["java-io","long","path","ioexception"]
slug: java/ficheros/conocer-el-tamano-de-un-fichero-con-java
type: doc
topic: java
id: 1f03bfa9-994a-413e-9b3c-3215fbc93544
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/TamanioFichero.java
---

Pocas líneas pueden llegar a darnos tanta información. Este es el caso en el que queramos conocer el tamaño de un fichero utilizando el lenguaje [Java](https://www.manualweb.net/java/). Toda la información está contenida en la clase [File](http://w3api.com/wiki/Java:File). Y es que lo primero que tenemos que hacer es instanciar dicha clase con la ruta, o path, del fichero sobre el que queremos obtener la información.


```java
String sFichero = "c:\\nombredelfichero.extension";
File fichero = new File(sFichero);
```


Ahora solo nos quedará invocar el método [`length()`](http://w3api.com/wiki/Java:File.length()), que nos devolverá el tamaño del fichero en bytes:


```java
long tamanio = fichero.length();
```


Como decía dos líneas arriba, es muy sencillo y útil.


## Qué devuelve length()


El método `length()` devuelve un valor de tipo `long` con el tamaño del fichero expresado en bytes. Si la ruta no corresponde a un fichero existente, devuelve `0L`. Cuando la ruta representa un directorio, el valor devuelto no está definido, por lo que conviene comprobar el tipo de recurso antes de interpretar el resultado.


También es importante recordar que el resultado está expresado en bytes. Para mostrar una medida aproximada en kibibytes, se puede dividir entre `1024.0`:


```java
long bytes = fichero.length();
double kibibytes = bytes / 1024.0;
System.out.println("Tamaño: " + kibibytes + " KiB");
```


## Ejemplo completo con File


El siguiente ejemplo conserva la idea del código original y añade comprobaciones para evitar interpretar como un fichero una ruta inexistente o un directorio:


```java
import java.io.File;

public class TamanioFichero {
    public static void main(String[] args) {
        String sFichero = "c:\\nombredelfichero.extension";
        File fichero = new File(sFichero);

        if (fichero.isFile()) {
            long bytes = fichero.length();
            System.out.println("Tamaño: " + bytes + " bytes");
        } else {
            System.out.println("La ruta no corresponde a un fichero existente.");
        }
    }
}
```


El programa muestra el tamaño en bytes cuando la ruta apunta a un fichero. Si el fichero no existe o la ruta apunta a un directorio, muestra el mensaje alternativo.


En Windows, la barra inversa forma parte de las secuencias de escape de Java. Por eso una ruta como `C:\\datos\\archivo.txt` debe escribirse con dos barras inversas en el literal de cadena, o bien puede expresarse como `C:/datos/archivo.txt`.


## Alternativa moderna con Path y Files


La clase `File` sigue siendo válida, pero para código nuevo también se puede utilizar la API `java.nio.file`, disponible desde Java 7. `Files.size()` devuelve el tamaño en bytes y comunica los problemas de acceso o de inexistencia mediante `IOException`, en lugar de representar una ruta inexistente con `0L`:


```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

Path ruta = Path.of("c:\\nombredelfichero.extension");

try {
    long bytes = Files.size(ruta);
    System.out.println("Tamaño: " + bytes + " bytes");
} catch (IOException e) {
    System.out.println("No se pudo consultar el tamaño del fichero.");
}
```


`Path.of()` está disponible desde Java 11. En versiones anteriores se puede crear la ruta con `Paths.get()`. Esta alternativa resulta útil cuando el programa ya trabaja con `Path` y con el resto de las operaciones de `Files`.

