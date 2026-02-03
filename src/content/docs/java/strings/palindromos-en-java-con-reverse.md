---
title: "Palíndromos en Java con reverse"
description: "Se explica cómo identificar palíndromos en Java utilizando el método reverse de la clase StringBuffer."
date: 2009-01-26
updatedDate: 2026-01-09
tags: ["if","string","stringbuffer","reverse","replace"]
slug: java/strings/palindromos-en-java-con-reverse
author: victor_cuervo
type: doc
topic: java
id: 98571c42-53f7-4566-9f48-8185634425cc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/PalindromoConReverse.java
---

En Linea de Código ya hemos escrito sobre como [saber si una palabra es un palindromo con Java](http://lineadecodigo.com/2007/09/19/saber-si-una-palabra-es-un-palindromo-con-java/). Pero gracias a las [contribuciones de nuestros lectores](http://lineadecodigo.com/2007/09/19/saber-si-una-palabra-es-un-palindromo-con-java/#45906) vamos a ver cómo resolverlo de una forma más sencilla. En este caso nos vamos a apoyar en el método [.reverse](https://www.w3api.com/Java/String/Buffer.reverse()) de la clase [StringBuffer](https://www.w3api.com/Java/String/Buffer). Este método invierte el contenido de la cadena. Pero vamos por partes. Lo primero será tener una palabra/frase que sea un palíndromo, e instanciarla en un [String](https://www.w3api.com/Java/String/).


```java
String sPalabra = "dabale arroz a la zorra el abad";
```


Preparamos un poco la palabra/frase, quitándola los espacios en blanco. Para ello utilizamos el método [replace](https://www.w3api.com/Java/String/.replace()).


```java
sPalabraSinEspacios = sPalabra.replace(" ", "");
```


Ahora cargaremos el string buffer y le aplicamos el método [.reverse](https://www.w3api.com/Java/String/Buffer.reverse()), quedándonos la palabra/frase dada la vuelta.


```java
StringBuffer sb = new StringBuffer(sPalabraSinEspacios);
sb = sb.reverse();
```


Ya solo nos quedará el comparar la palabra original con la palabra dada la vuelta mediante el método reverse. En caso de que coincidan será que la palabra es un palíndromo.


```text
if (sPalabraSinEspacios.equalsIgnoreCase(sb.toString()))		
  System.out.println(sPalabra + " es un PALINDROMO");
else
  System.out.println(sPalabra + " NO es un palindromo");
```

