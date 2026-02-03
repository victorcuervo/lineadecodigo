---
title: "Convertir un array en un String con Java"
description: "Se explica cómo convertir un array en un String con Java utilizando StringBuffer para optimizar el rendimiento."
date: 2010-03-24
updatedDate: 2026-01-09
tags: ["array","string","stringbuffer","append","length"]
slug: java/arrays/convertir-un-array-en-un-string-con-java
author: victor_cuervo
type: doc
topic: java
id: 78600763-b2db-452f-b4e2-94c23371b6e1
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/Array2String.java
---

El otro día [nos preguntaban sobre cómo se podría realizar la conversión entre un array una cadena](http://lineadecodigo.com/java/convertir-una-cadena-en-un-array-de-caracteres-con-java/#48920) o [String](https://www.w3api.com/Java/String/) en [Java](https://www.manualweb.net/java/). Veamos los pasos que hay que seguir para conseguirlo. Lo primero será partir del array. En este caso es un array de cadenas. Podría ser de otro tipo, lo cual llevaría una conversión posterior. Pero hemos decidido simplificar las cosas:


```java
String miarray[] = {"A","V","I","L","A"};
```


El proceso va a consistir en recorrer el array e ir añadiendo lo que leemos sobre una cadena. En este caso, y con miras de ser eficiente, vamos a utilizar una clase [StringBuffer](https://www.w3api.com/Java/String/Buffer). La cual nos permitirá añadir contenido con un buen rendimiento. Declaramos la clase [StringBuffer](https://www.w3api.com/Java/String/Buffer):


```java
StringBuffer cadena = new StringBuffer();
```


Empezamos a recorrer el array, con un bucle for y apoyándonos en el tamaño del array, información que devuelve el método .length


```java
for (int x=0;x<miarray.length;x++){
   cadena =cadena.append(miarray[x]);
}
```


En cada unas de las iteraciones vamos añadiendo a la cadena, el valor leído. Utilizamos el método [.append](https://www.w3api.com/Java/String/Buffer.append()) del [StringBuffer](https://www.w3api.com/Java/String/Buffer) para conseguir dicha cosa. Ya solo nos quedará el volcar el contenido del [StringBuffer](https://www.w3api.com/Java/String/Buffer), convirtiéndolo en cadena con su método [.toString()](https://www.w3api.com/Java/String/Buffer.toString())Espero que el programa sirva de ayuda.

