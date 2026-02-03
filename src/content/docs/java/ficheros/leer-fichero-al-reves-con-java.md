---
title: "Leer fichero al revés con Java"
description: "Ejemplo que nos permite leer fichero al revés con Java apoyándose en una LinkedList que nos invertirá el contenido."
date: 2015-09-01
updatedDate: 2026-01-09
tags: ["java-collection","linkedlist","bufferedreader","java-io","filereader","iterator","readline"]
slug: java/ficheros/leer-fichero-al-reves-con-java
author: victor_cuervo
type: doc
topic: java
id: 48b727ee-e285-4b1f-93c5-ca2e2d41add1
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/LeerFicheroAlReves.java
---

Ya vimos en su momento como podemos leer un fichero de texto en [Java](https://www.manualweb.net/java/). Pero como podemos hacer si queremos de forma inversa, es decir, leer fichero al revés con [Java](https://www.manualweb.net/java/). El funcionamiento para leer fichero al revés con [Java](https://www.manualweb.net/java/) es muy parecido al de leerlo de forma normal. Y es que el procedimiento será leerlo normalmente, almacenar su contenido en una lista y finalmente recorrer la lista de forma inversa para poder conseguir el efecto inverso. Así que lo primero será leerlo mediante un [`FileReader`](https://www.w3api.com/Java/File/exists/Reader) almacenándolo en un [`BufferedReader`](https://www.w3api.com/Java/BufferedReader/readLine/).


```java
FileReader fr = new FileReader("resources/fichero_lineas.txt");
BufferedReader bf = new BufferedReader(fr);
```


Ahora vamos a crear una lista. En este caso vamos a utilizar una lista enlazada o `LinkedList`, ya que nos ayudará a la hora de recorrerla de forma inversa.


```java
LinkedList<string> list = new LinkedList<string>();
```


Las lecturas de las líneas las hacemos mediante el método `.readLine()` y las insertamos en la lista mediante el método `.add()`.


```java
LinkedList<string> list = new LinkedList<string>();

FileReader fr = new FileReader("resources/fichero_lineas.txt");
BufferedReader bf = new BufferedReader(fr);

String sCadena;
while ((sCadena = bf.readLine())!=null) {
  list.add(sCadena);				
}
```


Ahora ya tendremos todo el contenido del fichero perfectamente almacenado en la lista enlazada. Así que solo nos quedará recorrerla de forma inversa. Para recorrerla de forma inversa vamos a utilizar un `.descendingIterator()`, es decir un iterador que va desde el final al principio.


```java
Iterator<string> it = list.descendingIterator();
```


Y mediante un bucle vamos moviendo el iterador y mostrando el contenido.


```java
while(it.hasNext())
  System.out.println(it.next());
```


De esta forma ya habremos conseguido **leer fichero al revés con Java**.

