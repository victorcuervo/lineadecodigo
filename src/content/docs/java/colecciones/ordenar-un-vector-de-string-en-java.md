---
title: "Ordenar un Vector de String en Java"
description: "Se explica cómo ordenar un Vector de String en Java utilizando la clase Collections y su método sort."
publishDate: 2009-03-22
updatedDate: 2025-12-30
tags: ["bucles","foreach","java-collection","vector","sort","add"]
slug: java/ordenar-un-vector-de-string-en-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/collections/OrdenarVector.java
---

Dentro de la librería java.util encontramos una serie de métodos que nos ayudan a ordenar las colecciones como vectores, listas,... Para ello nos apoyamos en la clase Collections. Lo primero que tenemos que hacer para ordenar un Vector de [String](https://www.w3api.com/Java/String/) en [Java](https://www.manualweb.net/java/) es crear dicho Vector:


```java
Vector<string> miVector = new Vector<string>();
```


e insertarle datos mediante el método [.add](https://www.w3api.com/Java/Vector/add/):


```java
miVector.add("Victor");
miVector.add("julio");
miVector.add("amaya");
```


Ahora utilizaremos la clase Collections y su método sort. Será este método sort el que nos permita ordenar un Vector en [Java](https://www.manualweb.net/java/) de forma sencilla.


```java
Collections.sort(miVector);
```


El Vector pasa como parámetro del método sort. Una vez ejecutada esta sentencia nuestro Vector estará ordenado. Ahora solo nos queda volcar el contenido por pantalla. Para ello vamos a utilizar un bucle for-each:


```java
for(String sElemento: miVector){
   System.out.println(sElemento);	
}
```


Hay que tener en cuenta que la ordenación que ejecuta el método sort es en base al valor de los caracteres ASCII. Es por ello que en nuestro contenido:


```text
Victor, julio, amaya
```


Nos lo devolverá ordenado como:


```text
Victor, amaya, julio
```


Ya que el valor ASCII de la V mayúscula es 86 y el de la a minúscula es 97. Es por ello que ordenará a las mayúsculas primero. En próximos artículos veremos como ordenar un Vector de [String](https://www.w3api.com/Java/String/) en [Java](https://www.manualweb.net/java/) de forma alfabética.

