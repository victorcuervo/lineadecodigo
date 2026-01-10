---
title: "Convertir matriz en cadena con Java"
description: "Análisis de como podemos convertir matriz en cadena con Java utilizando la clase Arrays."
date: 2015-08-05
updatedDate: 2026-01-10
tags: ["array","matriz","deeptostring"]
slug: java/arrays/convertir-matriz-en-cadena-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/matriz/MatrizACadena.java
topic: java

---

Cuando estemos manejando matrices en [Java](http://www.manualweb.net/) podemos [volcar el contenido de la matriz de una forma sencilla por pantalla](http://lineadecodigo.com/java/imprimir-una-matriz-con-java/). Pero si simplemente queremos ver el contenido de la matriz podemos convertir la matriz en una cadena con [Java](http://www.manualweb.net/). Lo primero será definir nuestra matriz:


```java
int[][] matriz = {{1,2,3},{4,5,6},{7,8,9},{10,11,12}};
```


Ahora para poder convertir matriz en cadena con [Java](http://www.manualweb.net/) podríamos pensar que nos valdrá simplemente con invocar al método .toString()


```java
System.out.println(matriz.toString());
```


Y ya lo tenemos todo... Pero, espera un momento. Por pantalla me muestra lo siguiente:


```text
[[I@15db9742
```


Esto se nos parece poco a una matriz. Así que el método .toString() no nos sirve para convertir matriz en cadena con [Java](http://www.manualweb.net/). Lo que nos sucede aquí es algo parecido a lo que sucedía [cuando comparábamos matrices mediante el método .equals()](http://lineadecodigo.com/java/comparar-matrices-en-java/). Y aquí tenemos una solución parecida. Y es que la clase Arrays nos ofrece un método recursivo que se llama .deepToString. El método .deepToString recorrerá de forma recursiva la matriz y la convertirá en una cadena. De esta forma tendremos que codificarlo de la siguiente manera:


```java
System.out.println(Arrays.deepToString(matriz));
```


Y así obtendremos por pantalla:


```text
[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
```


Y ya habremos conseguido convertir matriz en cadena con [Java](http://www.manualweb.net/) de una forma sencilla.

