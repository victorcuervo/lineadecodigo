---
title: "Listar un directorio con Java"
description: "Se explica cómo listar un directorio con Java utilizando la clase File y sus métodos."
lastUpdated: 2025-12-19
slug: java/listar-un-directorio-con-java
author: victor_cuervo
---

Mediante la clase [File](https://www.w3api.com/Java/File/exists/) podremos listar de forma sencilla el contenido de un directorio. Lo primero que tendremos que hacer es crear un objeto de tipo [File](https://www.w3api.com/Java/File/exists/) con el nombre del directorio a a listar.


```text

String sDirectorio = "c:\\datos";
File f = new File(sDirectorio);
```


Utilizaremos el método [.exists()](https://www.w3api.com/Java/File/exists/) para comprobar que el directorio existe.


```text

if (f.exists()){ // Directorio existe }
else { //Directorio no existe }
```


Una vez pasada esta validación utilizamos el método [.listFiles](https://www.w3api.com/Java/File/exists/.listFiles()). Este método devuelve todos los ficheros asociados al directorio en un array de [Files](https://www.w3api.com/Java/File/exists/). Es por ello que solo nos quedará recorrer el array e ir mostrando el nombre de lo ficheros y directorios que componen nuestro directorio.


```java
File[] ficheros = f.listFiles();
for (int x=0;x<ficheros.length;x++){
	System.out.println(ficheros[x].getName());
}
```


Para obtener el nombre del fichero o directorio utilizamos el método [`.getName()`](https://www.w3api.com/Java/File/exists/.getName()).

