---
title: "Borrar un directorio con Java"
description: "Para borrar un directorio con Java, se debe eliminar recursivamente su contenido antes de eliminar el propio directorio."
date: 2008-12-28
updatedDate: 2026-01-08
tags: ["recursividad","delete","isdirectory","listfiles","file"]
slug: java/ficheros/borrar-un-directorio-con-java
author: victor_cuervo
type: doc
topic: java
id: e16ff630-2ffe-49ee-ad1d-c0f9cfa03d00
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/BorrarDirectorio.java
---

Para borrar un directorio en Java podemos utilizar el mismo código que para [borrar un fichero](http://lineadecodigo.com/2008/02/26/borrar-un-fichero-con-java/). Los pasos serían muy sencillos, ya que simplemente deberíamos de instanciar el objeto [File](https://www.w3api.com/Java/File/exists/) y ejecutar el método [.delete](https://www.w3api.com/Java/File/exists/.delete()) sobre el directorio.


```java
String sDirectorio = "c:\\directorio";
File f = new File(sDirectorio);
		
if (f.delete())
 System.out.println("El fichero " + sDirectorio + " ha sido borrado correctamente");
else
 System.out.println("El fichero " + sDirectorio + " no se ha podido borrar");
```


El inconveniente de este código es que solo funciona si el directorio sobre el que lo ejecutamos está vacío. Es por ello que para borrar un directorio con Java deberemos de borrar cada uno de los ficheros y directorios que este contenga. Al poder almacenar otros directorios, el código debe de [recorrer recursivamente el directorio](http://lineadecodigo.com/2008/12/27/listar-un-directorio-de-forma-recursiva-en-java/) para ir borrando todos los ficheros. Para ello vamos a realizar un método que recorra los directorios, vaya borrando los ficheros del directorio y vaya entrando en los subdirectorios para hacer la misma operación.


```java

public static void borrarDirectorio (File directorio){...}
```


Lo primero que haremos en el método borrarDirectorio es recuperar la lista de ficheros del directorio mediante el método [.listFiles()](https://www.w3api.com/Java/File/exists/.listFiles()). Mediante un bucle for recorreremos los elementos del directorio.


```java
File[] ficheros = directorio.listFiles();		
for (int x=0;x<ficheros.length;x++){ ... }
```



Si el elemento es un directorio, lo sabemos mediante el método [`.isDirectory`](https://www.w3api.com/Java/File/exists/isDirectory/), volvemos a llamar al método borrarDirectorio y luego borramos el directorio. En caso contrario, simplemente borramos el fichero.


```java
if (ficheros[x].isDirectory()) {
	borrarDirectorio(ficheros[x]);
}
ficheros[x].delete();
```


En el programa principal instanciamos el directorio a borrar y llamamos al método borrarDirectorio. Una vez borrado el directorio, ejecutamos el método [`.delete()`](https://www.w3api.com/Java/File/exists/delete/) sobre el directorio, que ya estará vacío.


```java
String sDirectorio = "c:\\prueba";
		File f = new File(sDirectorio);
		
		borrarDirectorio(f);
		
		if (f.delete())
			System.out.println("El directorio " + sDirectorio + " ha sido borrado correctamente");
		else
			System.out.println("El directorio " + sDirectorio + " no se ha podido borrar");
```

