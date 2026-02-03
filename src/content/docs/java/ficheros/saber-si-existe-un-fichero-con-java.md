---
title: "Saber si existe un fichero con Java"
description: "Se explica cómo saber si existe un fichero con Java utilizando la clase File y el método exists."
date: 2007-02-09
updatedDate: 2026-01-09
tags: ["java-io","file"]
slug: java/ficheros/saber-si-existe-un-fichero-con-java
author: victor_cuervo
type: doc
topic: java
id: 71b0489b-be50-429c-b7c6-03bb0a3cdbec
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/ExisteFichero.java
---

Por nuestro bien, cuando estamos trabajando con ficheros, deberíamos de validar la existencia o no del fichero o directorio con el que vamos a trabajar. Ahora, que hay mucho lanzado en esta vida, que puede pensar que que más da. Claro, que si instanciamos la clase File, en Java, con un fichero que no existe y por ejemplo, intentamos recuperar el tamaño del mismo, no nos vamos a llevar ninguna desagradable sorpresa de que salte una excepción y nos desmonte el "chiringuito". Pero, como más vale prevenir que curar, en primer lugar instanciaremos la clase File con el path que queramos investigar:


```java
String sFichero = "c:\misficheros\fichero.txt";
File fichero = new File(sFichero);
```


Solo nos quedará invocar al método exits() para conocer si existe o no el fichero instanciado:


```java
if (fichero.exists())
  System.out.println("El fichero " + sFichero + " existe");
else
  System.out.println("Pues va a ser que no");
```

