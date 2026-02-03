---
title: "Obtener fecha de modificación de un fichero con Java"
description: "Pasos para crear un código fuente que nos permita obtener la fecha de modificación de un fichero con Java."
date: 2012-01-19
updatedDate: 2026-01-11
tags: ["ficheros","file","calendar","date","java-io"]
slug: java/ficheros/obtener-fecha-de-modificacion-de-un-fichero-con-java
author: victor_cuervo
type: doc
id: bec51495-3316-49a4-a468-bb6d7b9d70b1
download: http://code.google.com/p/lineadecodigo/source/browse/trunk/lineadecodigo_java/src/com/lineadecodigo/java/file/FechaModificacionFichero.java
---

Trabajando con ficheros en [Java](https://www.manualweb.net/java/) nos puede ser de utilidad obtener fecha de modificación de un fichero. Los pasos para conseguirlo son sencillos.


## Acceder al fichero


En primer lugar deberemos de acceder al fichero mediante la clase [`File`](https://www.w3api.com/Java/File/exists/).


```java
File fichero = new File("mifichero.txt");
```


## Obtener la fecha de modificación


Ahora que ya tenemos instanciada la clase [File](https://www.w3api.com/Java/File/exists/) utilizaremos el método [.lastModified()](https://www.w3api.com/Java/File/exists/.lastModified()), el cual nos devolverá la fecha de la modificación pero en formato de milisegundos.


```java
long milisegundos = fichero.lastModified();
```


## Convertir a formato fecha


Así, las siguientes líneas tendrán que servirnos para convertir los milisegundos en una fecha. Esto, en [Java](https://www.manualweb.net/java/), lo podemos conseguir mediante una clase [Calendar](https://www.w3api.com/Java/Calendar/), la cual instanciaremos mediante un [Date](https://www.w3api.com/Java/Date-java-util/) y el resultado devuelto por [.lastModified()](https://www.w3api.com/Java/File/exists/.lastModified()).


```java
Calendar calendario = Calendar.getInstance();
calendario.setTime(new Date(milisegundos));
```


## Mostrar la fecha


Por último nos apoyaremos en las constantes [Calendar.DATE](https://www.w3api.com/Java/Calendar/.DATE), [Calendar.MONTH](https://www.w3api.com/Java/Calendar/.MONTH), [Calendar.MINUTE](https://www.w3api.com/Java/Calendar/.MINUTE),... para sacar los valores que nos ayuden a obtener la fecha de modificación de un fichero con [Java](https://www.manualweb.net/java/).


```java
System.out.println("Día: " + calendario.get([Calendar.DATE](http://calendar.date/)));
System.out.println("Mes: " + (calendario.get(Calendar.MONTH) + 1));
System.out.println("Año: " + calendario.get(Calendar.YEAR));
```

