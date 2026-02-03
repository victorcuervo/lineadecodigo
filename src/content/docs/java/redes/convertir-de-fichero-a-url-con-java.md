---
title: "Convertir de Fichero a URL con Java"
description: "Ejemplo que nos explica mediante el código fuente cómo podemos convertir de Fichero a URL con Java."
date: 2011-10-13
updatedDate: 2026-01-09
tags: ["file","url","try-catch","fichero","path","java-io","java-net","malformedurl"]
slug: java/redes/convertir-de-fichero-a-url-con-java
author: victor_cuervo
type: doc
topic: java
id: 5fa9b9dc-9112-4338-bcf0-25ad254062bd
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/ConvertirFicheroEnURL.java
---

Cuando manejamos ficheros de configuración una buena idea es tratar todos los ficheros como si fuesen URL. Así evitaremos el estar chequeando si el fichero de acceso está en nuestra máquina os es una URL destino. Por lo tanto vamos a convertir de Path a una URL utilizando el lenguaje [Java](https://www.manualweb.net/java/). Para poder convertir de fichero a URL con [Java](https://www.manualweb.net/java/) lo primero será partir de un fichero, el cual instanciaremos mediante una clase [File](https://www.w3api.com/Java/File/exists/).


```java
File fichero = new File("test.txt");
```


Si vemos el path del fichero veremos que es una cosa así:


```java
C:\Users\lineadecodigo\files\test.txt
```


El siguiente paso será realizar la conversión de fichero a URL. Esto lo hacemos mediante el método [.toURL()](https://www.w3api.com/Java/File/exists/.toURL%28%29) que trae la clase [File](https://www.w3api.com/Java/File/exists/).


```java
URL url = null;
url = fichero.toURL();
```


Tenemos que tener cuidado en esta conversión ya que podemos tener una [MalformedURLException](https://www.w3api.com/Java/MalformedURLException/) y habrá que controlarla mediante un bucle try-catch Si ahora volcamos el contenido de la [URL]( "Clase URL en Java") veremos que tenemos una cosa así:


```java
file:/C:/Users/lineadecodigo/files/test.txt
```


La conversión de Path a URL la podemos hacer a la inversa, es decir de URL a Path. Para ello utilizamos el método [.getFile()]( "Método Java getFile de la clase URL") de la clase [URL]( "Clase URL en Java").


```java
File fichero2 = new File(url.getFile());
```


Pero como decíamos al principio, lo mejor tratar con las [URL]( "Clase URL en Java") de los ficheros. Y así hemos visto lo sencillo que es convertir de fichero a URL con [Java](https://www.manualweb.net/java/).

