---
title: "Convertir un array en un String con Java"
description: "Se explica cómo convertir un array en un String con Java utilizando StringBuffer para optimizar el rendimiento."
date: 2010-03-24
updatedDate: 2026-02-13
tags: ["array","string","stringbuffer","append","length"]
slug: java/arrays/convertir-un-array-en-un-string-con-java
type: doc
topic: java
id: 78600763-b2db-452f-b4e2-94c23371b6e1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/Array2String.java
---

El otro día nos preguntaban cómo se podría realizar la conversión de un **array** a una **cadena** (_String_) en [Java](https://www.manualweb.net/java/). Puedes ver la conversación original aquí: [conversión entre un array y una cadena](http://lineadecodigo.com/java/convertir-una-cadena-en-un-array-de-caracteres-con-java/#48920).


A continuación veremos los pasos para conseguirlo.


## Array de partida


Lo primero será partir del array. En este caso es un array de cadenas (`String[]`). Podría ser de otro tipo, lo cual llevaría una conversión posterior, pero aquí lo simplificaremos.


```java
String[] miArray = {"A", "V", "I", "L", "A"};
```


## Construir la cadena con StringBuffer


El proceso consiste en recorrer el array e ir añadiendo lo que leemos sobre una cadena.


En este caso, y con miras a ser eficiente, vamos a utilizar la clase [`StringBuffer`](https://www.w3api.com/Java/StringBuffer/), que nos permitirá añadir contenido con un buen rendimiento.


```java
StringBuffer cadena = new StringBuffer();
```


Ahora recorremos el array con un bucle `for`, apoyándonos en el tamaño del array (propiedad `length`).


```java
for (int x = 0; x < miArray.length; x++) {
	cadena.append(miArray[x]);
}
```


En cada iteración vamos añadiendo a la cadena el valor leído. Utilizamos el método [`.append(...)`](https://www.w3api.com/Java/StringBuffer/append/) del [`StringBuffer`](https://www.w3api.com/Java/StringBuffer/).


## Convertir a String


Por último, volcamos el contenido del [`StringBuffer`](https://www.w3api.com/Java/StringBuffer/) y lo convertimos en cadena con [`.toString()`](https://www.w3api.com/Java/StringBuffer/toString/).


```java
String resultado = cadena.toString();
```


Espero que el ejemplo te sirva de ayuda.

