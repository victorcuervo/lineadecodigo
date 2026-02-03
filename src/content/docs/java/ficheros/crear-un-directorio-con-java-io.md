---
title: "Crear un directorio con Java IO"
description: "Uso de la clase File para poder crear un directorio con Java IO utilizando los métodos mkdir y mkdirs."
date: 2007-07-16
updatedDate: 2026-01-11
tags: ["mkdir","directorio","file","java-io","ioexception"]
slug: java/ficheros/crear-un-directorio-con-java-io
author: victor_cuervo
type: doc
topic: java
id: 975e0760-75d4-4c7b-a3d8-761a9267dda9
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/io/CrearDirectorio.java
---

Para crear un directorio con [Java](https://www.manualweb.net/java/) deberemos de utilizar un [objeto File](https://www.w3api.com/Java/File/exists/). La ruta que debe de contener dicho objeto deberá de hacer referencia a un directorio en vez de a un archivo.


```java
File directorio = new File("c:\\directorio");
```


Cuando especificamos el path mediante la cadena de texto debemos de recordar que la barra debe de repetirse dos veces ya que usada de manera aislada hace referencia a una secuencia de escape.


## Métodos para crear directorios


Una vez tenemos creado el [objeto File](https://www.w3api.com/Java/File/exists/) podemos invocar a dos métodos:

- **mkdir()**, el cual asume que la ruta de directorios existe, a excepción del último que será el directorio generado.
- **mkdirs()**, independientemente de que existan o no los directorios serán creados.

```java
directorio.mkdir();  // Crea solo el último directorio
directorio.mkdirs(); // Crea todos los directorios necesarios
```


Al contrario de lo que sucede con la creación de ficheros, a la hora de crear un directorio no estamos obligados a capturar la [excepción IOException](https://www.w3api.com/Java/IOException/).

