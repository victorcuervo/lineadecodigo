---
title: "Convertir un array de caracteres en un String"
description: "Aprende a convertir un array de caracteres en un String en Java con String.valueOf(), conserva el orden y evita errores habituales al mostrar sus valores."
date: 2010-06-06
updatedDate: 2026-10-31
tags: ["array","char","string"]
slug: java/strings/convertir-un-array-de-caracteres-en-un-string
type: doc
topic: java
id: d834a73b-9f2f-42d4-a8d6-f0181d3d54da
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/Array2String.java
---

En el ejemplo [Convertir un array en un String con Java](http://lineadecodigo.com/java/convertir-un-array-en-un-string-con-java/) veíamos el procedimiento a seguir para coger un array de [String](http://w3api.com/wiki/Java:String) y convertirlo en una cadena. Pero, si el array que estamos manejando es de caracteres en vez de [String](http://w3api.com/wiki/Java:String), el procedimiento será mucho más sencillo.


## Convertir un array de caracteres en un String


El array de caracteres se declara así:


```java
char miarray[] = {'A','V','I','L','A'};
```


Ahora utilizamos el método [String.valueOf()](http://w3api.com/wiki/Java:String.valueOf()) de la clase [String](http://w3api.com/wiki/Java:String), pasando el array de caracteres como parámetro:


```java
System.out.println(String.valueOf(miarray));
```


El resultado que se muestra por consola es:


```text
AVILA
```


Y ya tenemos convertido el array de caracteres en un [String](http://w3api.com/wiki/Java:String). `String.valueOf(char[])` mantiene el orden de los caracteres y no añade separadores entre ellos.


## Cómo funciona String.valueOf(char[])


La sobrecarga `String.valueOf(char[])` recibe un array de tipo `char[]` y crea un `String` con sus caracteres. Por eso, cada posición del array se incorpora al texto en el mismo orden en el que aparece. Es una opción directa cuando el dato de origen ya es un array de caracteres.


El método no convierte cada carácter en una representación independiente ni añade corchetes o comas. Si el array contiene `{'A', 'V', 'I', 'L', 'A'}`, el resultado es el texto `AVILA`.


> `Arrays.toString(miarray)` no genera `AVILA`; devuelve una representación con corchetes y separadores, como `[A, V, I, L, A]`. Es útil para inspeccionar el array, pero no para unir sus caracteres como un texto continuo.


### Alternativa con el constructor String


También se puede utilizar el constructor `String(char[])`, que produce el mismo resultado:


```java
String texto = new String(miarray);
System.out.println(texto);
```


La llamada a `String.valueOf(char[])` expresa de forma clara que se está obteniendo un valor de tipo `String`, mientras que el constructor puede resultar útil cuando se quiere crear explícitamente el objeto a partir del array.

