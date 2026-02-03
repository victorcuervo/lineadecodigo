---
title: "Usar una Hashtable Java"
description: "Revisión de como poder insertar, obtener y listar los elementos de una Hashtable Java."
date: 2013-08-02
updatedDate: 2026-01-08
tags: ["hashmap","java-collection","put","keys","keyset","clave-valor"]
slug: java/colecciones/usar-una-hashtable-java
author: Francisco Meza
type: doc
id: 298596fc-dac7-48dd-a0e1-0c07393abda2
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/UsarHashMap.java
---

Una Hashtable Java es una estructura de datos que utiliza una función hash para identificar datos mediante una llave o clave (ej. Nombre de una persona). La función hash transforma una llave a un valor índice de un arreglo de elementos. En este caso a una índice de nuestra Hashtable Java. Una Hashtable Java más específica del funcionamiento es la siguiente:


| **Identificador** | **Dato** |
| ----------------- | -------- |
| 101               | Harry    |
| 102               | Potter   |
| 103               | IRONMAN  |
| 104               | IRONMAN  |
| 105               | HALLO    |

undefined
Vea que el identificador será el que hace referencia a los datos en este caso solo será un nombre, para este caso haremos un pequeño ejemplo en java donde solo manejaremos una clase la cual tendrá las siguientes propiedades: un objeto de tipo hash con sus respectivos métodos, los elementos de la tabla y finalmente el main dentro de la misma clase Lo primero será definir una variable contenedor para instanciar la clase Hashtable Java:


```java
Hashtable<string,string> contenedor=new Hashtable<string,string>();</string,string></string,string>
```


Nos vamos a ayudar del método .put() para insertar elementos dentro de la Hashtable Java:


```java
contenedor.put("101", "Harry");
contenedor.put("102", "Potter");
contenedor.put("103", "IRONMAN");
contenedor.put("104", "IRONMAN");
contenedor.put("105", "HALLO");
```


El primer elemento será la clave y el segundo será el valor a almacenar. Si queremos obtener un valor de la Hashtable Java tendremos que pasarle al método .get() la clave que queremos recuperar:


```java
System.out.println(contenedor.get("105"));
System.out.println(contenedor.get("101"));
```


Mediante un Enumeration vamos a recorrer el contenido de nuestra Hashtable Java:


```java
Enumeration<string> enumeration = contenedor.elements();
while (enumeration.hasMoreElements()) {
  System.out.println(""+"hashtable valores: " + enumeration.nextElement());
}
```


Si queremos saber cuales son las claves de la Hashtable Java usamos el método [.keys()](https://www.w3api.com/Java/Hashtable/keys/).


```java
Enumeration<string> llaves = contenedor.keys();
while (llaves.hasMoreElements()) {
  System.out.println(""+"hashtable llaves: " + llaves.nextElement());
}
```


También se puede obtener la enumeración de todas las claves mediante el uso del método [.keys()](https://www.w3api.com/Java/Hashtable/keys/).


```java
System.out.println("Claves: " +contenedor.keys());
```


En unas pocas líneas de código hemos visto como poder usar una Hashtable Java.

