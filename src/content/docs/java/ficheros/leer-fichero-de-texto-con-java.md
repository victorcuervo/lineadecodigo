---
title: "Leer fichero de texto con Java"
description: "El artículo explica cómo leer fichero de texto con Java utilizando BufferedReader y FileReader, manejando excepciones adecuadamente."
date: 2006-12-26
updatedDate: 2026-01-09
tags: ["java-io","bufferedreader","file","filenotfoundexception","filereader","readline"]
slug: java/ficheros/leer-fichero-de-texto-con-java
author: victor_cuervo
type: doc
topic: java
id: 94ba879b-dc8f-4168-b2f3-7c789f2f6201
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/LeerFicheroTexto.java
---

Cuando tratamos con estructuras de tipo stream para realizar lecturas y escrituras, los pasos habituales son el ir apoyándonos en clases que nos faciliten el manejo del dispositivo de destino, desde la de más alto nivel a la de menor nivel. Lo que técnicamente denominaríamos wrapping. Para manejar cadenas de texto ([Java String](https://www.w3api.com/Java/String/)), la estructura que nos ayuda, en Java IO, a ello es el [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/). Pero a este nivel, todavía no hemos identificado el dispositivo de destino. En la lectura de ficheros de texto, lo primero que tenemos que hacer es crear un Reader de tipo fichero. Esto es encapsulado en [la clase FileReader](https://www.w3api.com/Java/File/exists/Reader). Será esta clase la que utilice el buffer como origen de lectura. Quedándonos estas simples líneas:


```java
FileReader fr = new FileReader("datos.txt");
BufferedReader bf = new BufferedReader(fr);
```


O en un formato mas "técnico" podríamos irnos a tener una sola [linea de codigo](http://lineadecodigo.com/):


```java
BufferedReader bf = new BufferedReader(new FileReader("datos.txt"));
```


Ahora solo nos queda es ir leyendo del fichero. Para ello utilizaremos los métodos de [BufferedReader](https://www.w3api.com/Java/BufferedReader/readLine/). Y en concreto el que nos va dando línea a línea [readLine()](https://www.w3api.com/Java/BufferedReader/readLine/.readLine()), La lectura se hará de forma repetitiva hasta que la lectura de la línea sea nula.


```java
while ((sCadena = bf.readLine())!=null) {
   System.out.println(sCadena);
}
```


Hay que tener especial cuidado con el manejo de las excepciones. Todo manejo con la librería java.io nos hará estar expuestos al manejo de la excepción IOException. Y tampoco podemos olvidar que a la hora de realizar la lectura de un fichero, este, no exista. En ese caso se lanzará [una excepción FileNotFoundException](https://www.w3api.com/Java/File/exists/NotFoundException).

