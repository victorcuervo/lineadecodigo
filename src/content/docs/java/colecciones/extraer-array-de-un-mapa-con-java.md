---
title: "Extraer Array de un Mapa con Java"
description: "Código que nos explica cómo extraer Array de un Mapa con Java ya sea para las claves o los valores."
date: 2015-10-23
updatedDate: 2026-01-08
tags: ["put","values","toarray","keyset","hashmap","mapa","clave-valor","for-each","array","java-collection"]
slug: java/colecciones/extraer-array-de-un-mapa-con-java
type: doc
topic: java
id: 21413b2a-f826-4b78-b46d-706fc7f2a5c9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/ExtraerArrayDeMapa.java
---

En este ejemplo vamos a ver cómo podemos extraer array de un mapa con [Java](https://www.manualweb.net/java/). Este caso suele suceder cuando estamos manipulando Mapas para realizar cuentas de valores mediante su control de clave/valor y luego queremos manipular los datos para ordenados o mostrarlos de una forma más sencilla a un array. Lo primero será crear un mapa, en concreto vamos a utilizar un [`HashMap`](https://www.w3api.com/Java/HashMap/).


```java
Map<integer,string> mapa = new HashMap<integer,string>();
```


Y a este mapa le vamos a rellenar de datos mediante el método [`put()`](https://www.w3api.com/Java/HashMap/.put()), el cual recibe como primer valor la clave y como segundo atributo el valor.


```java
mapa.put(1, "Victor");
mapa.put(2,  "Nacho");
mapa.put(3, "Julio");
mapa.put(4, "David");
mapa.put(1, "Pepe");
```


Si miramos el código vemos que en el mapa no podemos tener dos elementos con la misma clave. Es por ello que con la clave "1" solamente tendremos el último valor insertado. Ahora que tenemos nuestro Mapa vamos a proceder a extraer array de un mapa con Java. En primer lugar vamos a extraer los valores. La colección de valores la obtenemos mediante el método [`.values()`](https://www.w3api.com/Java/HashMap/.values()). Así que al tener una colección ya solo tendremos que utilizar el método `.toArray()` para obtener el array.


```java
String[] nombres = mapa.values().toArray(new String[0]);
```


Es importante hacer notar que el método `.toArray()` recibe el array en el cual se almacenarán los objetos de la colección.


```java
new String[0]
```


Ya solo nos quedará recorrer el array mediante un bucle for-each para volcar su contenido.


```java
for (String nombre: nombres)
  System.out.println(nombre);
```


En el caso de queramos hacer lo mismo pero para las claves utilizaremos el método [`.keySet()`](https://www.w3api.com/Java/HashMap/.keySet()). El resto del código será igual:


```java
Integer[] claves = mapa.keySet().toArray(new Integer[0]);
		
for (Integer clave: claves)
  System.out.println(clave);
```


Ya habremos conseguido extraer Array de un Mapa con [Java](https://www.manualweb.net/java/), ya sea para los valores o para las claves.

