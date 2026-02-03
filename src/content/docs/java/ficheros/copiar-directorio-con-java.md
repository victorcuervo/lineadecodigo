---
title: "Copiar directorio con Java"
description: "Código fuente que nos ayuda a copiar directorio con Java."
date: 2011-09-13
updatedDate: 2026-01-09
tags: ["recursividad","file","list","exists","mkdir","ioexception","java-io","java-collection","isdirectory","fileinputstream"]
slug: java/ficheros/copiar-directorio-con-java
author: victor_cuervo
type: doc
id: 9bdec559-6c86-41cb-81a0-2e1b34b7b457
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/CopiarDirectorio.java
---

Con el siguiente código vamos a ver como podemos copiar el contenido de un directorio en otro utilizando el lenguaje [Java](https://www.manualweb.net/java/). Para poder copiar directorio con [Java](https://www.manualweb.net/java/) lo primero será entender la idea de cómo resolver el problema de la copia de directorios con [Java](https://www.manualweb.net/java/). La cuestión es que no podemos ejecutar una copia tal cual del directorio ya que dicho directorio puede albergar contenido. Además dicho contenido puede ser a su vez otro directorio con más contenido. Con esto vemos que lo que necesitamos es hacer un programa [Java](https://www.manualweb.net/java/) recursivo que vaya recorriendo cada directorio y copiando todo su contenido de uno a otro. Lo primero será definir el interface de nuestro método que sirve para copiar directorios.


```java
public static void copiarDirectorios(File d1, File d2){...}
```


El método controlará la recursividad comprobando si el fichero que llega en primer lugar es un directorio, ya que si no lo es asumirá que es un fichero y procederá a su copia. Es decir, la estructura del programa [Java](https://www.manualweb.net/java/) quedará de la siguiente forma:


```java
public static void copiarDirectorios(File d1, File d2){
  if (d1.isDirectory()){
    // Recorremos recursivamente el directorio
  else
    // Copiamos d1 a d2, ya que serán ficheros
  }
}
```


La parte de cómo se copia un fichero en otro la explicamos en el ejemplo de [Copiar ficheros con Java](http://lineadecodigo.com/java/copiar-un-fichero-con-java/). Si bien pegamos aquí el código [Java](https://www.manualweb.net/java/) para que quede como referencia:


```java
public static void copiarFicheros(File f1, File f2){
                
  try {
    InputStream in = new FileInputStream(f1);
    OutputStream out = new FileOutputStream(f2);
                                
    byte[] buf = new byte[1024];
    int len;

    while ((len = in.read(buf)) > 0) {
      out.write(buf, 0, len);
    }
                
    in.close();
    out.close();
                       
  } catch (IOException ioe){
    ioe.printStackTrace();
  }
}
```


Ahora pasamos a recorrer el contenido del directorio. Lo primero que tenemos que hacer es la creación del directorio destino. Eso sí, si el directorio no existe. Aquí jugamos con el método [.exits()](https://www.w3api.com/Java/File/exists/) para ver si existe el directorio y [.mkdir()](https://www.w3api.com/Java/File/exists/.mkdir()) para ayudarnos a crear el directorio.


```java
if (!d2.exists()){                              
  d2.mkdir();
  System.out.println("Creando directorio " + d2.toString());
}
```


Una vez creado el directorio destino recorremos el directorio origen y procedemos a la copia. Hay que recordar que la lista de ficheros que contiene un directorio nos la proporciona el método [.list()](https://www.w3api.com/Java/File/exists/.list()). Dicho método nos devuelve un array de [String](https://www.w3api.com/Java/String/), el cual recorreremos.


```java
for (int x=0;x<ficheros.length;x++) {
  copiarDirectorios(new File(d1,ficheros[x]),new File(d2,ficheros[x]));	}
```



Por cada fichero volvemos a llamar a nuestro método copiarDirectorios de forma recursiva. Si lo que le pasamos es un directorio volverá a realizar la misma operación. Si lo que le pasamos son ficheros, directamente los copiará.

Espero que os haya gustado el ejemplo de **cómo copiar directorio con Java**.

