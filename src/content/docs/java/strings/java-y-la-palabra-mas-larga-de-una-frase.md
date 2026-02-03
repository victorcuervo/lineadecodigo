---
title: "Java y la palabra más larga de una frase"
description: "Utilizar la clase StringTokenizer para poder utilizar Java y la palabra más larga de una frase."
date: 2007-08-26
updatedDate: 2026-01-08
tags: ["string","indexof","stringtokenizer","counttokens","for"]
slug: java/strings/java-y-la-palabra-mas-larga-de-una-frase
author: victor_cuervo
type: doc
id: c6b1d6a2-cfd7-4f43-81ce-988559450167
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/PalabraMasLarga.java
---

El otro día, uno de nuestros visitantes nos preguntaba [como podía hacer un código que le localizase la palabra más larga de una frase con Java](http://lineadecodigo.com/java/contar-palabras-en-java/#15008). Y porqué no ayudarle, si era un código muy sencillo y que seguro podrá ayudar a más gente. Lo más recomendable es empezar leyéndose dos artículos: [Contar palabras en Java](http://lineadecodigo.com/java/contar-palabras-en-java/) y [Contador de ocurrencias en Java](http://lineadecodigo.com/java/contador-de-ocurrencias-en-java/). Estos nos explican como se pude saber cuantas palabras componen una cadena y cuales son. Uno de ellos mediante el uso del [StrinkTokenizer](https://www.w3api.com/Java/StringTokenizer/) y el otro mediante [.indexOf()](https://www.w3api.com/Java/String/.indexOf()). Ahora vemos como saber cual es la palabra más larga de una frase. La idea es sencilla, iremos recorriendo todas las palabras de la frase y mientras las recorremos veremos cual de ellas es la de mayor tamaño. Inicialmente definimos que la palabra mayor es vacía y con tamaño 0.


```java
String palabraMasGrande = "";
int palabraMasGrandeSize = 0;
```


Por otro lado, partimos la cadena con el texto en las palabras que la conforman. Esto lo hacemos mediante la [clase StrinkTokenizer](https://www.w3api.com/Java/StringTokenizer/).


```java
StringTokenizer stTexto = new StringTokenizer(sTexto);
```


Ahora recorremos el [StrinkTokenizer](https://www.w3api.com/Java/StringTokenizer/) para analizar las palabras.


```java
int palabras = stTexto.countTokens();

for (int x=0;x><palabras;x++){
	sCadena = stTexto.nextToken();
  	System.out.println(sCadena);
}
```


Dentro del bucle tenemos que analizar la palabra. Si el tamaño de la palabra, que obtenemos mediante [el método .length()](https://www.w3api.com/Java/String/.length()), es mayor que el tamaño de la palabra más grande, entonces nos guardamos la palabra actual y su método.


```java
int palabras = stTexto.countTokens();

for (int x=0;x<palabras;x++){
	sCadena = stTexto.nextToken();
    	if (sCadena.length() > palabraMasGrandeSize){
    		palabraMasGrande = sCadena;
    		palabraMasGrandeSize = sCadena.length();
   	}
}
```

