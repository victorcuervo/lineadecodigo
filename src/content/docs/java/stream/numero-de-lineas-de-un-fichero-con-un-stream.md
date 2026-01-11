---
title: "Número de líneas de un fichero con un Stream"
description: "Uso de la programación funcional de Java para poder calcular el número de líneas de un fichero con un Stream."
date: 2015-09-13
updatedDate: 2026-01-11
tags: ["bufferedreader","filereader","stream","file","fichero","count","java-io","java-util","ioexception","filenotfoundexception"]
slug: java/stream/numero-de-lineas-de-un-fichero-con-un-stream
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/NumeroDeFilasStream.java
topic: java

---

En el ejemplo [Número de líneas de un fichero con Java](http://lineadecodigo.com/java/numero-de-lineas-de-un-fichero/) veíamos como podíamos calcular el número de líneas que contenía el fichero leyendo el contenido del mismo. Hoy veremos otra forma alternativa de realizarlo, para ello vamos a calcular el número de líneas de un fichero con un Stream. Es decir, simplemente vamos a volcar el fichero sobre un [`BufferReader`](https://www.w3api.com/Java/BufferedReader/readLine/) y vamos a aprovecharnos de las capacidades del los Stream para saber cuántas líneas tiene el fichero. Esta es una **nueva funcionalidad que viene con los Stream de Java 1.8** y que facilita la programación funcional.. Lo primero será acceder al fichero. Para ello vamos a utilizar un [`FileReader`](https://www.w3api.com/Java/File/exists/Reader) sobre el path en el que se encuentre el fichero.


```text
FileReader fr = new FileReader("resources/fichero.txt");
```


> Siempre que estés accediendo a un fichero vas a tener que controlar las excepciones [`FileNotFoundException`](https://www.w3api.com/Java/File/exists/NotFoundException) e [`IOException`](https://www.w3api.com/Java/IOException/). Así que no se te olvide utilizar una estructura `try-catch` con ellas.


Ahora que tenemos el FileReader creamos un [`BufferReader`](https://www.w3api.com/Java/BufferedReader/readLine/) a partir de él.


```text
BufferedReader bf = new BufferedReader(fr);
```


Una vez que tengamos el [`BufferReader`](https://www.w3api.com/Java/BufferedReader/readLine/) es el punto en el cual no vamos a necesitar el recorrer las líneas para realizar el conteo del fichero, si no que lo que haremos será invocar al método `.lines()` el cual nos devolverá el Stream. Sobre este Stream deberemos de invocar al método `.count()` el cual contará directamente las líneas del Stream y por lo tanto las líneas del fichero.


```text
System.out.println("El fichero tiene " + bf.lines().count() + " lineas");
```


De esta sencilla forma habremos conseguido obtener el número de líneas de un fichero con un Stream en [Java](https://www.manualweb.net/java/). Ah! Se me olvidaba de una cosa. No dejes de cerrar el [`BufferReader`](https://www.w3api.com/Java/BufferedReader/readLine/) una vez hayas terminado de utilizarlo. Para ello simplemente invoca al método `.close`.


```text
bf.close();
```


Una demostración de lo sencillo que es utilizar los elementos como los Stream y la programación funcional en [Java](https://www.manualweb.net/java/). En este caso para calcular el número de filas de un fichero.

