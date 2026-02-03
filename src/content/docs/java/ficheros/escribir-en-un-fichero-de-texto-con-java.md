---
title: "Escribir en un fichero de texto con Java"
description: "Ejemplo que nos enseña a escribir en un fichero de texto con Java."
date: 2008-02-06
updatedDate: 2026-01-11
tags: ["file","write","close","exists","bufferedwriter","fileoutputstream","for","try-catch","ioexception","fichero","java-io","filewriter"]
slug: java/ficheros/escribir-en-un-fichero-de-texto-con-java
author: victor_cuervo
type: doc
id: 9c072725-880b-4095-862c-46281eb4d201
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/io/EscribirFicheroTexto.java
---

## Validar la existencia del fichero


Si vamos a escribir en un fichero de texto, sería una buena práctica el validar si dicho fichero existe o no. También podríamos escribir sobre el fichero directamente, aunque esto lo haríamos si no nos importase mucho el contenido que este tuviese.


Para validar si existe un fichero podemos leer el ejemplo [Saber si existe un fichero con Java](http://lineadecodigo.com/2007/02/09/saber-si-existe-un-fichero-con-java/). Dicho artículo nos explica de forma detallada lo simple que esto resulta. Resumiendo, bastará utilizar el [método exists()](https://www.w3api.com/Java/File/exists/) de la [clase File](https://www.w3api.com/Java/File/exists/).


```java
File fichero = new File("archivo.txt");
if (!fichero.exists()) {
    // El fichero no existe, procedemos a escribir
}
```


## Crear el BufferedWriter


En el caso de que no exista el fichero, nos pondremos manos a la obra para escribir sobre el fichero. Lo primero que tendremos que hacer será crear un [BufferedWriter](https://www.w3api.com/Java/BufferedWriter/). Esta clase nos ayuda a manejar los stream en forma de buffer con métodos muy sencillos.


Este buffer necesitará saber cual es el fichero. Esto se lo proporcionamos desde la [clase FileWriter](https://www.w3api.com/Java/File/exists/Writer). Recuerda que la filosofía de acceso a la lectura y escritura a los ficheros, siempre es la misma. Buffer, que envuelve a Reader, que a su vez envuelve al fichero (o stream).


El código nos quedaría algo así:


```java
BufferedWriter buffer = new BufferedWriter(new FileWriter(fichero));
```


## Escribir en el fichero


Para escribir texto nos apoyamos en el [método .write() del buffer](https://www.w3api.com/Java/BufferedWriter/.write()). Muy sencillo. La verdad es que no se me ocurría que texto grabar sobre el fichero, así que, al final, vamos a volcar 10 líneas iguales ayudándonos de un bucle for.


```java
for (int x=0; x<10; x++) {
    buffer.write("Línea de texto " + x);
    buffer.newLine();
}
```


## Cerrar el fichero y capturar excepciones


No nos podemos olvidar de dos últimas cosas. Siempre que manejemos el fichero para escribir deberemos de cerrarle con [el método .close()](https://www.w3api.com/Java/Closeable/close/). Y lo otro, que toda la operativa de la clase [java.io](http://java.io/).* nos avisará de sus problemas de acceso a fichero, elevándonos una [excepción IOException](https://www.w3api.com/Java/IOException/). Que habrá que capturar en alguna parte de nuestro código.


```java
try {
    buffer.close();
} catch (IOException e) {
    e.printStackTrace();
}
```

