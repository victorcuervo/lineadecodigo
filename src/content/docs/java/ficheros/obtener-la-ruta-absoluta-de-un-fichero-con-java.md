---
title: "Obtener la ruta absoluta de un fichero con Java"
description: "Obtener la ruta absoluta de un fichero con Java es fácil utilizando la clase File y el método getAbsolutePath."
date: 2012-01-07
updatedDate: 2026-01-09
tags: ["java-io","file","getabsolutepath"]
slug: java/ficheros/obtener-la-ruta-absoluta-de-un-fichero-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/RutaAbsoluta.java
topic: java

---

Si queremos saber dónde se encuentra un fichero ubicado en el disco duro deberemos de obtener la ruta absoluta del fichero. Para poder llevar a cabo esto nos vamos a basar en los métodos de la clase [File](https://www.w3api.com/Java/File/exists/) de [Java](https://www.manualweb.net/java/). Lo primero será instanciar la clase [File](https://www.w3api.com/Java/File/exists/) con el fichero del que queremos obtener la ruta absoluta.


```java
File fichero = new File("test.txt");
```


Ahora simplemente deberemos de apoyarnos en el método [.getAbsolutePath()](https://www.w3api.com/Java/File/exists/.getAbsolutePath()) para obtener la ruta absoluta. La línea de código será la siguiente:


```java
System.out.println("La ruta del fichero es: " + fichero.getAbsolutePath());
```


Como vemos, en un simple método tenemos la ruta absoluta de un fichero con [Java](https://www.manualweb.net/java/).

