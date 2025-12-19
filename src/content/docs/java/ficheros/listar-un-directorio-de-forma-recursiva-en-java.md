---
title: "Listar un directorio de forma recursiva en Java"
description: "Código fuente que nos ayuda a listar un directorio de forma recursiva en Java."
lastUpdated: 2025-12-19
slug: java/listar-un-directorio-de-forma-recursiva-en-java
author: victor_cuervo
---

Ayer veíamos como [listar el contenido de un directorio con Java](http://lineadecodigo.com/java/listar-un-directorio-con-java/). En este ejemplo listábamos el contenido, saliendo como resultado los ficheros y directorios que contenía este. En este caso lo que vamos a hacer es listar el contenido de los directorios de forma recursiva. Es decir, cada vez que nos encontremos un directorio dentro del directorio que estamos listando, entraremos en él y listaremos su contenido. Así de forma recursiva sobre todos los directorios. En este caso vamos a crear un método listarDirectorio, el cual reciba un elemento [File](https://www.w3api.com/Java/File/exists/) que sea un directorio y el separador.


```java
public static void listarDirectorio(File directorio, String separador){
  ...
}
```


Lo primero que haremos será recuperar la lista de ficheros del directorio a listar mediante el método [.listFiles()](https://www.w3api.com/Java/File/exists/.listFiles()). Este método nos devuelve un array de Files. Mediante un bucle for iremos recorriendo el array y volcando el nombre del fichero mediante el método [.getName()](https://www.w3api.com/Java/File/exists/.getName%28%29).


```java
for (int x=0;x<ficheros.length;x++){			
	System.out.println(separador + ficheros[x].getName());
```


Ahora viene la diferencia con respecto a [listar el contenido de un directorio con Java](http://lineadecodigo.com/2008/12/26/listar-un-directorio-con-java/). Y es que por cada elemento, además de volcar su nombre, comprobaremos si es un directorio mediante el método [`.isDirectory()`](https://www.w3api.com/Java/File/exists/isDirectory/).


En el caso de que el elemento sea un directorio, volveremos a llamar al método listarDirectorio(), Pasándolo en elemento [File](https://www.w3api.com/Java/File/) que estamos tratando.


```java
if (ficheros[x].isDirectory()){
	String nuevo_separador;
	nuevo_separador = separador + " ";
	listarDirectorio(ficheros[x],nuevo_separador);
}
```


En el código hemos insertado una variable separador, la cual añadirá un espacio en blanco cada vez que cambiemos de directorio.

