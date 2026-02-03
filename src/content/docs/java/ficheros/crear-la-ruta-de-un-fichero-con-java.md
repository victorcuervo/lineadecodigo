---
title: "Crear la ruta de un fichero con Java"
description: "Este artículo explica cómo crear la ruta de un fichero con Java en diferentes sistemas operativos."
date: 2012-02-25
updatedDate: 2026-01-11
tags: ["getproperty","file","java-io"]
slug: java/ficheros/crear-la-ruta-de-un-fichero-con-java
author: victor_cuervo
type: doc
id: e14f794b-d5e0-46e3-9ef8-000cd80afd3c
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/ConstruirPath.java
---

Hoy un artículo sencillo pero de mucha utilidad. Como bien sabéis, dependiendo del sistema operativo que estemos utilizando en [Java](https://www.manualweb.net/java/), las rutas de los ficheros (llamados path) se crean de diferente forma. Veamos como podemos crear la ruta de un fichero con [Java](https://www.manualweb.net/java/). 


## Rutas en Windows y Linux


Así cuando vayamos a crear la ruta de un fichero con [Java](https://www.manualweb.net/java/) para un sistema operativo Windows pondremos:


```shell
C:\directorio\fichero.txt
```


Mientras que si estamos en un sistema Linux utilizaremos:


```shell
/directorio/fichero.txt
```


## Construir rutas mediante propiedades del sistema


Es por ello que tenemos que tener especial cuidado en construir la ruta del fichero en nuestro programa [Java](https://www.manualweb.net/java/). Para poder resolver esto tenemos varias alternativas. La primera sería chequeando las propiedades del sistema "os.name" y "file.separator" con .getProperty().


```java
System.getProperty("[os.name](http://os.name/)");
System.getProperty("file.separator");
```


En el caso de "os.name" obtenemos el nombre del sistema operativo y en el caso de "file.separator" obtenemos el separador de directorios. Así, montar nuestra ruta de un fichero sería:


```java
String ruta = System.getProperty("file.separator") + "directorio" + 
              System.getProperty("file.separator") + "fichero.txt";
```


## Utilizar File.separator


Pero, si no queremos consultar las propiedades del sistema, tenemos la constante [File.separator](https://www.w3api.com/Java/File/exists/.separator). La cual tiene almacenado el separador de directorios del sistema operativo sobre el que nos ejecutemos. De esta forma construir la ruta de un fichero se haría de la siguiente manera:


```java
String ruta = File.separator + "directorio" + File.separator + "fichero.txt";
```


> Hay que tener un poco de cuidado con la versión de [Java](https://www.manualweb.net/java/) que utilices, ya que [File.separator](https://www.w3api.com/Java/File/exists/.separator) solo está disponible desde Java 5.


¿Cual de las dos formas para crear la ruta de un fichero con [Java](https://www.manualweb.net/java/) utilizarías? ¿Conoces alguna forma de crear la ruta de un fichero con [Java](https://www.manualweb.net/java/) más?

