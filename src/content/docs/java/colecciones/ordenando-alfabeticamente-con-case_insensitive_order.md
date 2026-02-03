---
title: "Ordenando alfabéticamente con CASE_INSENSITIVE_ORDER"
description: "Crear un Vector y acabar ordenando alfabéticamente con CASE_INSENSITIVE_ORDER."
date: 2010-01-04
updatedDate: 2026-01-09
tags: ["vector","string","comparator","sort","java-collection"]
slug: java/colecciones/ordenando-alfabeticamente-con-caseinsensitiveorder
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8128-aa85-dbb7be9254bd
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/OrdenarVectorAlfabeticamente2.java
---

En el artículo sobre cómo [ordenar un vector de forma alfabética con Java](http://lineadecodigo.com/java/ordenar-un-vector-de-forma-alfabetica-con-java/) veíamos como implementar un comparador alfabético utilizando el interface [Comparator](https://www.w3api.com/Java/Comparator/). Esto lo podemos realizar de otra forma mediante el campo [CASE_INSENSITIVE_ORDER](https://www.w3api.com/Java/String/.CASE_INSENSITIVE_ORDER) de la clase [String](https://www.w3api.com/Java/String/). Este campo nos permite realizar ordenaciones que ignoren las mayúsculas. Lo primero, el declarar el Vector e insertarle elementos:


```java
Vector<string> miVector = new Vector<string>();
miVector.add("Victor");
miVector.add("julio");
miVector.add("amaya");
```


Ahora ejecutamos la ordenación mediante el método .sort(). El segundo parámetro será la forma de ordenación, el campo [CASE_INSENSITIVE_ORDER](https://www.w3api.com/Java/String/.CASE_INSENSITIVE_ORDER).


```java
Collections.sort(miVector,String.CASE_INSENSITIVE_ORDER);
```


Ya solo nos quedará el volcar el contenido por pantalla.


```java
for(String sElemento: miVector){
  System.out.println(sElemento);	
}
```

