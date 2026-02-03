---
title: "Guardar unos Properties con Java"
description: "Se explica cómo guardar unos properties con Java en un fichero usando la clase Properties y FileOutputStream."
date: 2012-02-21
updatedDate: 2026-01-08
tags: ["try-catch","file","java-io","fileoutputstream","ioexception","outputstream","properties"]
slug: java/properties/guardar-unos-properties-con-java
author: victor_cuervo
type: doc
id: 2e2a9308-0b68-427a-ba61-f04ba2834e12
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/properties/GuardarProperties.java
---

Hemos visto varios ejemplos sobre cómo leer el contenido de unos Properties o cómo modificar el contenido de unos Properties. Pero, qué tenemos que hacer si una vez modificados queremos guardarlos en el fichero. Ya que la modificación solo se aplica al tiempo de vida de la ejecución del programa [Java](https://www.manualweb.net/java/). Veamos ahora como podemos guardar unos Properties con Java. Lo primero será definir unos Properties mediante la clase Properties. Los vamos a generar vía código, aunque podíamos haberlos leído de un fichero.


```java
Properties prop = new Properties();
prop.setProperty("nombre","Linea de Código");
prop.setProperty("url","http://lineadecodigo.com");
```


El siguiente paso será definir el fichero el cual queremos guardar los Properties. Y como todo manejo de ficheros deberemos de abrirle un [FileOutputStream](https://www.w3api.com/Java/File/exists/OutputStream).


```java
FileOutputStream os = FileOutputStream("fichero.prop");
```


Ahora va lo más importante, y es que dentro de Properties tenemos el método .store() el cual persistirá los datos sobre un [FileOutputStream](https://www.w3api.com/Java/File/exists/OutputStream) que le pasemos como parámetro. Curiosamente el que acabamos de crear.


```java
prop.store(os, "Fichero de Propiedades de la Web");
```


Una de las cosas que tienes que tener en cuenta es que en los manejos de stream puede saltar siempre la [IOException.](https://www.w3api.com/Java/IOException/) Así que nos crearemos nuestro bloque try-catch.


```java
FileOutputStream os = null;	   	    
try {
  os=new FileOutputStream("fichero.prop");
  prop.store(os, "Fichero de Propiedades de la Web");
} catch(IOException ioe) {ioe.printStackTrace();}
```

