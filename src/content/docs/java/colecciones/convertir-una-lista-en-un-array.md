---
title: "Convertir una Lista en un Array"
description: "El ejemplo muestra cómo convertir una lista en un array en Java utilizando ArrayList y el método toArray."
date: 2014-01-31
updatedDate: 2026-01-10
tags: ["array","java-collection","arraylist","list","toarray"]
slug: java/colecciones/convertir-una-lista-en-un-array
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/List2Array.java
topic: java

---

Ya vimos en su momento como podíamos [convertir, de una forma sencilla, un array en una lista en Java](http://lineadecodigo.com/java/convertir-un-array-en-una-lista/). En este caso vamos a ver la operación contraria que será convertir una lista en un array con [Java](https://www.manualweb.net/java/). Lo primero será definir una Lista. Para ello utilizamos el interface [List](http://www.w3api.com/Java/List-java-util/) implementado mediante una clase ArrayList. Hay que recordar que cuando utilicemos colecciones tenemos que indicar el tipo de colección que estamos utilizando. En nuestro caso vamos a crear una lista de cadenas o [String](https://www.w3api.com/Java/String/).


```java
List<string> milista = new ArrayList<string>();
```


Para insertar cada uno de los elementos en la lista utilizamos el método .add().


```java
milista.add("Elemento 1");
milista.add("Elemento 2");
```


Lo siguiente será crear el array sobre el que vamos volcar el contenido de la lista. A la hora de crear el array deberemos de asignarle el tamaño que tenga la lista. Para saber el tamaño de una lista en java utilizamos el método .size().


```java
String[] miarray = new String[milista.size()];
```


El interface List tiene un método [.toArray()](http://www.w3api.com/Java/List-java-util/toArray) este es el método clave que nos va a convertir una lista en un array con [Java](https://www.manualweb.net/java/). Así que simplemente invocamos el método indicando como parámetro el array sobre el que queremos volcar el contenido.


```java
miarray = milista.toArray(miarray);
```


Ahora, para comprobar que hemos realizado bien el proceso de convertir una lista en un array con [Java](https://www.manualweb.net/java/) vamos a recorrer el contenido del array y ver que es el mismo que insertamos en la lista.


```java
for(String s : miarray)
  System.out.println(s);
```


Y hasta aquí nuestro ejemplo de como convertir una lista en un array con [Java](https://www.manualweb.net/java/). Esperamos que os haya ayudado.

