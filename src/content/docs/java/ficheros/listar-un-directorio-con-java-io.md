---
title: "Listar un directorio con Java IO"
description: "Cómo utilizar la clase File para poder listar un directorio con Java IO."
date: 2007-07-10
updatedDate: 2026-01-11
tags: ["file","list","directorio","listar","java-io","nullpointerexception"]
slug: java/ficheros/listar-un-directorio-con-java-io
author: victor_cuervo
type: doc
id: adbe837c-7b72-4949-8fbb-2f40cfb53279
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/io/ListarDirectorio.java
---

Mediante la librería [Java IO](%22Clases%20de%20Java%20IO%22) vamos a listar el contenido de un directorio con el fin de mostrarlo por pantalla. Para ello, lo primero que haremos será obtener una referencia al directorio que queremos listar. Utilizaremos, en este caso, la clase `File` para almacenar la referencia.


```java
File f = new File("directorio");
```


## Método .list()


Uno de los métodos de la [clase File](https://www.w3api.com/Java/File/exists/) es [.list()](https://www.w3api.com/Java/File/exists/.list()). Mediante este método recuperaremos los ficheros que componen el directorio especificado. Lo que nos devuelve es un array de cadenas.


```java
String[] directorio = f.list();
```


## Validación de resultados


Hay que tener cuidado con este método. Porque si el resultado de la invocación al método no devuelve resultados, deja a la variable sin instanciar y por consiguiente con un valor de `null`. Y claro que nadie quiere que le de un [NullPointerException](https://www.w3api.com/Java/NullPointerException/). 


Así que meteremos una validación antes de acceder a la variable. Si nos ha devuelto resultados, solo nos quedará recorrer el array para sacar sus datos por pantalla.


```java
if (directorio != null) {
    for (String fichero : directorio) {
        System.out.println(fichero);
    }
}
```

