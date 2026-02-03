---
title: "Cambiar la fecha de modificación de un fichero con Java"
description: "Explicación de como podemos cambiar la fecha de modificación de un fichero con Java."
date: 2012-02-24
updatedDate: 2026-01-11
tags: ["file","currenttimemillis","system","java-io","setlastmodified"]
slug: java/ficheros/cambiar-la-fecha-de-modificacion-de-un-fichero-con-java
author: victor_cuervo
type: doc
id: f418d2e9-0476-4c9a-910f-d7ec28db87e6
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/CambiarFechaModificacionFichero.java
---

Ya vimos en un artículo [cómo obtener la fecha de modificación de un fichero con Java](http://lineadecodigo.com/java/obtener-fecha-de-modificacion-de-un-fichero-con-java/). En este caso vamos a ver cómo realizar la operación contraria, el cambiar la fecha de modificación de un fichero con [Java](https://www.manualweb.net/java/). 


Esto puede ser útil, por ejemplo, si estamos haciendo una revisión de ficheros y queremos utilizar la fecha de modificación del fichero como flag para siguientes revisiones.


## Instanciar el fichero


Lo primero instanciamos un fichero con un objeto [File](https://www.w3api.com/Java/File/exists/).


```java
File file = new File("fichero.txt");
```


## Obtener la fecha actual en milisegundos


La fecha de modificación del fichero se la vamos a pasar en milisegundos, así que utilizaremos la función `currentTimeMillis()` del sistema para obtener la fecha actual en milisegundos.


```java
long milisegundos = System.currentTimeMillis();
```


## Asignar la fecha al fichero


Ya solo nos quedará volcar el contenido de la fecha sobre el fichero mediante [setLastModified()](https://www.w3api.com/Java/File/exists/.setLastModified()) el cual recibirá los milisegundos como parámetro. En el caso de que la asignación haya ido correctamente la función devolverá `true`, en caso contrario devolverá `false`.


```java
boolean resultado = file.setLastModified(milisegundos);
```


Tres pasos sencillos para cambiar la fecha de modificación de un fichero con [Java](https://www.manualweb.net/java/).

