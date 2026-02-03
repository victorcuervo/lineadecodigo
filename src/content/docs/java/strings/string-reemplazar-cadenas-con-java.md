---
title: "String - Reemplazar cadenas con Java"
description: "Ejemplo de cómo reemplazar cadenas con Java utilizando los métodos replaceAll, replace y replaceFirst."
date: 2013-01-03
updatedDate: 2026-01-11
tags: ["string","replace","replaceall","replacefirst"]
slug: java/strings/string-reemplazar-cadenas-con-java
author: Feffo
type: doc
id: ef70d014-71cd-499d-a91f-a448a00968fc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ReemplazarCadenas.java
---

¡Buenas! Como tercer ejemplo del set de manipulación de cadenas de caracteres les voy a mostrar como reemplazar cadenas con [Java](https://www.manualweb.net/java/), es decir, reemplazar subcadenas por otras en una cadena de caracteres utilizando [Java](https://www.manualweb.net/java/). El ejemplo partirá de la siguiente cadena de caracteres:


```text
www.lineadecodigo.com
```


Ahora, si quisiéramos reemplazar la subcadena _'lineadecodigo'_ por la cadena _'aulambra'_, lo que esperamos obtener es una cadena de caracteres con la siguiente forma:


```text
www.aulambra.com
```


Para poder reemplazar cadenas con [Java](https://www.manualweb.net/java/) primero usaremos el método [replaceAll](https://www.w3api.com/Java/String/.replaceAll()) de la clase [String](https://www.w3api.com/Java/String/), el cual toma como argumentos un [String](https://www.w3api.com/Java/String/) o Expresión Regular y un [String](https://www.w3api.com/Java/String/) de reemplazo, y en todas las apariciones del primer argumento se pondrá al segundo argumento en su lugar.


```java
public static String reemplazar(String cadena, String busqueda, String reemplazo) {
  return cadena.replaceAll(busqueda, reemplazo);
}
```


Ahora tendremos que invocar a este método pasándole las dos cadenas comentadas anteriormente:


```java
String sURL = "http://www.lineadecodigo.com";
String sNuevaURL = reemplazar(sURL,"lineadecodigo","aulambra");
System.out.println(sNuevaURL);
```


Cabe destacar que también podemos utilizar el método [replace](https://www.w3api.com/Java/String/.replace()) para reemplazar todas las apariciones de un carácter por otro y el método [replaceFirst](https://www.w3api.com/Java/String/.replaceFirst()) para reemplazar solo la primera aparición del primer [String](https://www.w3api.com/Java/String/) por el segundo.

