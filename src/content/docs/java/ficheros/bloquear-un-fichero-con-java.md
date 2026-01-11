---
title: "Bloquear un fichero con Java"
description: "El artículo explica cómo bloquear un fichero con Java utilizando FileChannel y FileLock para mantener la consistencia de los datos."
date: 2012-09-16
updatedDate: 2026-01-11
tags: ["file","fichero","close","java-io","lock","randomaccessfile","filechannel","filelock"]
slug: java/ficheros/bloquear-un-fichero-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/BloquearFichero.java
topic: java

---

## Introducción


Si estamos trabajando con ficheros en [Java](https://www.manualweb.net/java/) es posible que tengamos la necesidad de mantener consistente la información que contiene alguno de ellos. Para ello, una solución puede pasar por realizar un bloqueo lógico de un fichero. Es decir, marcar al fichero como bloqueado, para que el resto de procesos sepan que no deben tocar su contenido para mantenerlo consistente. 


Así que vamos a ver cómo podemos bloquear un fichero con [Java](https://www.manualweb.net/java/).


## Obtener referencia al fichero


Lo primero que haremos para bloquear un fichero con [Java](https://www.manualweb.net/java/) será obtener una referencia sobre el fichero mediante una clase File:


```java
File file = new File("mifichero.txt");
```


## Acceder al canal del fichero


Para acceder al fichero vamos a utilizar la clase RandomAccessFile en formato lectura y escritura. Y sobre ese objeto vamos a recuperar su canal de acceso mediante el método .getChannel().


```java
RandomAccessFile raf = new RandomAccessFile(file, "rw");
FileChannel channel = raf.getChannel();
```


## Bloquear el canal


Lo que manejamos en este momento es un objeto del tipo FileChannel. Un canal en [Java](https://www.manualweb.net/java/) es la evolución de un Stream normal de datos. El caso del FileChannel se representa una conexión abierta sobre un recurso sobre la cual se pueden realizar múltiples operaciones. 


Una de las operaciones que podemos realizar sobre el canal es bloquearlo o liberarlo. Así, si queremos bloquear un fichero con [Java](https://www.manualweb.net/java/), lo que hacemos es bloquear el canal mediante el método .lock().


```java
FileLock lock = channel.lock();
```


## Verificar el bloqueo


Lo que obtenemos en este caso es un objeto FileLock. Este objeto será el que nos sirva para chequear el estado del canal/fichero antes de acceder a él. Si queremos ver si el fichero está bloqueado utilizamos el método tryLock() que devolverá una excepción OverlappingFileLockException en el caso de que haya un bloqueo.


```java
try {
    FileLock lock = channel.tryLock();
} catch (OverlappingFileLockException e) {
    System.out.println("El fichero está bloqueado");
}
```


## Liberar el bloqueo


También tenemos que saber que para liberar el bloqueo del fichero tenemos el método .release()


```java
lock.release();
```


## Cerrar el canal


Lo último que deberemos de hacer a la hora de bloquear un fichero con [Java](https://www.manualweb.net/java/) es cerrar el canal sobre el fichero con el método .close()


```java
channel.close();
```


Con estas pequeñas líneas de código hemos podido bloquear un fichero con [Java](https://www.manualweb.net/java/).

