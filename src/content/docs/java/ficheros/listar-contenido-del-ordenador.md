---
title: "Listar contenido del ordenador"
description: "Este ejemplo muestra cómo listar contenido del ordenador incluyendo archivos y directorios de diferentes unidades del sistema."
date: 2011-09-19
updatedDate: 2026-01-08
tags: ["java-io","file"]
slug: java/ficheros/listar-contenido-del-ordenador
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/ListarContenidoOrdenador.java
topic: java

---

En este ejemplo vamos a ver como podemos listar todo el contenido del ordenador, es decir, ver todos los ficheros de las diferentes unidades de nuestro sistema (disco duro, tartejas SD, DVD,...). Para poder listar el contenido del ordenador solo tenemos que aplicar lo explicado en los artículos [listar un directorio de forma recursiva en Java](http://lineadecodigo.com/java/listar-un-directorio-de-forma-recursiva-en-java/) y [unidades del sistema de ficheros con java](http://lineadecodigo.com/java/unidades-del-sistema-de-ficheros-con-java/). Y es que en el fondo, las unidades del sistema son directorios en si mismo que podemos recorrer. Así tenemos que recorrer las unidades del sistema, recordemos que para obtener las unidades utilizamos el método [.listRoots()](https://www.w3api.com/Java/File/exists/listRoots/) de la [clase File](https://www.w3api.com/Java/File/exists/).


```java
File[] roots = File.listRoots();
for (int i=0; i<roots.length; i++) {			    
	System.out.println("--- LISTANDO UNIDAD " + roots[i] + " ---");
	listarDirectorio(roots[i],"");				
}
```


Por cada unidad del sistema llamaremos al método recursivo listarDirectorio(), el cual, como vimos en [listar un directorio de forma recursiva en Java](http://lineadecodigo.com/java/listar-un-directorio-de-forma-recursiva-en-java/), nos va mostrando los ficheros que contiene cada directorio y si el fichero es un directorio en sí mismo, se vuelve a llamar de forma recursiva.

Veamos su código:


```java
public static void listarDirectorio(File f, String separador){
	File[] ficheros = f.listFiles();
	
	if (ficheros!=null){
		for (int x=0;x<ficheros.length;x++){			
			System.out.println(separador + ficheros[x].getName());
		
			if (ficheros[x].isDirectory()){
				String nuevo_separador;
				nuevo_separador = separador + " ";
				listarDirectorio(ficheros[x],nuevo_separador);
			}
		}
	}
}
```


Hay que tener cuenta que ciertos sistemas de archivos dan problema al obtener el listado de ficheros, es por ello que comprobamos si el objeto ficheros tiene contenido.

