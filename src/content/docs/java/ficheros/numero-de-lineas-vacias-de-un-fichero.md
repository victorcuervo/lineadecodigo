---
title: "Número de líneas vacías de un fichero"
description: "Acceso a un fichero y lectura de su contenido para poder calcular el número de líneas vacías de un fichero con Java."
date: 2015-09-15
updatedDate: 2026-01-11
tags: ["bufferedreader","filereader","ioexception","filenotfoundexception","readline","string","isempty","fichero","java-io","file"]
slug: java/ficheros/numero-de-lineas-vacias-de-un-fichero
author: victor_cuervo
type: doc
topic: java
id: 302865a9-1cca-4368-9a6b-f98758104b05
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/NumeroDeFilasVacias.java
---

En este ejemplo vamos a ver cómo podemos contar el **número de líneas vacías de un fichero** de texto utilizando el lenguaje [Java](https://www.manualweb.net/java/). Para ello nos apoyaremos en clases que tenemos disponibles en la librería [`java.io`](http://java.io/).


## Acceder al fichero


Lo primero que deberemos hacer es acceder al fichero. Para ello vamos a crear un [`FileReader`](https://www.w3api.com/Java/File/exists/Reader) sobre el path del fichero:


```java
FileReader fr = new FileReader("fichero.txt");
```


De esta manera el [`FileReader`](https://www.w3api.com/Java/File/exists/Reader) nos permite tener un stream de caracteres de lectura sobre el fichero.


## Crear el buffer de lectura


Este stream de caracteres lo vamos a meter en un buffer de lectura. Para ello vamos a utilizar la clase [`BufferedReader`](https://www.w3api.com/Java/BufferedReader/readLine/):


```java
BufferedReader bf = new BufferedReader(fr);
```


> Recuerda controlar las excepciones [`IOException`](https://www.w3api.com/Java/IOException/) y [`FileNotFoundException`](https://www.w3api.com/Java/File/exists/NotFoundException) siempre que manipules ficheros.


## Leer línea a línea


El siguiente paso será ir leyendo el buffer línea a línea. Por cada línea que leamos validaremos si esa línea está vacía y así podremos saber el número de líneas vacías de un fichero.


Las operaciones de lectura sobre el buffer las haremos mediante el método [`.readLine()`](https://www.w3api.com/Java/BufferedReader/readLine/.readLine()) y su contenido lo dejaremos en un [`String`](https://www.w3api.com/Java/String/). Mientras la lectura no nos devuelva `null` (que significará que hemos llegado al final del fichero) seguiremos leyendo líneas:


```java
String sCadena = "";
long lNumeroLineasVacias = 0;

while ((sCadena = bf.readLine()) != null) {
  // Código para validar líneas vacías
}
```


## Comprobar líneas vacías


Ahora solo nos quedará comprobar si la cadena está vacía. Para ello utilizamos el método [`.isEmpty()`](https://www.w3api.com/Java/String/.isEmpty()). En caso de que devuelva el valor `true` incrementaremos el contador de líneas vacías que hemos llamado `lNumeroLineasVacias`:


```java
String sCadena = "";
long lNumeroLineasVacias = 0;

while ((sCadena = bf.readLine()) != null) {
  if (sCadena.isEmpty())
    lNumeroLineasVacias++;
}
```


## Cerrar el buffer


Ya solo nos quedará cerrar el buffer una vez que hayamos terminado su uso:


```java
bf.close();
```


De esta manera hemos conseguido calcular el número de líneas vacías de un fichero con [Java](https://www.manualweb.net/java/).

