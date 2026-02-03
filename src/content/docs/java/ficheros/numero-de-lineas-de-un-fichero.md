---
title: "Número de líneas de un fichero"
description: "Artículo que explica cómo contar el número de líneas de un fichero en Java de manera efectiva."
date: 2006-11-20
updatedDate: 2026-01-06
tags: ["java-io","bufferedreader","file","filenotfoundexception","filereader","ioexception","try-catch"]
slug: java/ficheros/numero-de-lineas-de-un-fichero
author: victor_cuervo
type: doc
id: a1fa393b-f35d-4a0b-a5d3-6ec87963287c
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/NumeroDeFilas.java
---

La idea de este ejemplo es contar el número de líneas que tiene un fichero de texto utilizando las librerías [Java IO](http://w3api.com/Java/tag/java.io/) del lenguaje [Java](https://www.manualweb.net/java/). La forma en la que lo vamos a resolver no es la más optima, si bien es la más sencilla de implementar y entender. De inicio deberemos de tener un fichero de texto con contenido. A dicho fichero lo llamaremos fichero.txt. Para abrir este fichero utilizaremos [la clase ](http://w3api.com/Java/FileReader/)[`FileReader`](http://w3api.com/Java/FileReader/). Con dicha clase obtendremos una referencia sobre el fichero que queremos conocer su número de líneas. Veamos la [línea de código](https://lineadecodigo.com/):


```java
FileReader fr = new FileReader("fichero.txt");
```


Lo siguiente que vamos a hacer es leer el contenido del mismo. Para ello no nos vale [el ](http://w3api.com/Java/FileReader/)[`FileReader`](http://w3api.com/Java/FileReader/) y nos tendremos que apoyar en un buffer. En este caso usamos un [`BufferedReader`](http://w3api.com/Java/BufferedReader/), el cual espera como parámetro la referencia que tenemos sobre el. Esta será nuestra [línea de código](http://lineadecodigo.com/):


```java
BufferedReader bf = new BufferedReader(fr);
```


Apoyándonos en [el método ](http://w3api.com/Java/BufferedReader/readLine)[`.readLine()`](http://w3api.com/Java/BufferedReader/readLine) del buffer, podremos ir leyendo el contenido de cada una de las filas del fichero. Esta lectura la podemos hacer mediante un bucle hasta que el contenido de la lectura sea null. Esto querrá decir que ya no hay más contenido en el fichero. En cada una de las lecturas de línea iremos incrementando un contador, el cual lleva la cuenta de las líneas del fichero.


```java
long lNumeroLineas = 0;

while ((sCadena = bf.readLine())!=null) {
  lNumeroLineas++;
}
```


En este proceso tenemos que tener especial cuidado con dos excepciones. La primera es [`FileNotFoundException`](http://w3api.com/Java/FileNotFoundException/). Esta se producirá si el nombre del fichero sobre el que queremos obtener la referencia, no existe. La segunda será [`IOException`](https://w3api.com/Java/IOException/). Esta excepción es lanzada si se tienen problemas en el acceso al propio fichero o stream de entrada. Es por ello que todo nuestro código deberá de estar en un bucle try-catch que controle dichas excepciones.


```java
try{
  //Código
} catch (FileNotFoundException fnfe){
  fnfe.printStackTrace();
} catch (IOException ioe){
  ioe.printStackTrace();
}
```


Solo nos quedará el mostrar por pantalla el número de líneas que hemos acumulado. Para ello necesitaremos la siguiente [línea de código](http://lineadecodigo.com/):


```java
System.out.println("El fichero tiene " + lNumeroLineas + " lineas");
```

