---
title: "Palabra con mayúsculas y minúsculas"
description: "El artículo explica cómo alternar mayúsculas y minúsculas en una palabra utilizando Java y su clase StringBuilder."
date: 2016-03-16
updatedDate: 2026-01-09
tags: ["string","stringbuilder","tolowercase","touppercase","character","charat","setchatat"]
slug: java/strings/palabra-con-mayusculas-y-minusculas
type: doc
topic: java
id: 5595d272-f9f6-44d6-8601-8547e4bec4d1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/CadenaMayusMinuscAlternativos.java
---

El ejemplo que habéis pedido para poder poner una palabra con mayúsculas y minúsculas me ha resultado muy divertido y me ha dado pie a escribirlo de un par de formas. Una de ella apoyándose en los nuevos Stream de [Java 8](https://www.manualweb.net/java/). Así que los vamos a verlos en detalle. Pero empecemos por el más sencillo. En este caso vamos a convertir los caracteres de una palabra con mayúsculas y minúsculas de forma indistinta. Es decir, si tenemos la frase:


```java
Esto es una frase muy interesante
```


Convertirla en:


```java
EsTo eS UnA FrAsE MuY InTeReSaNtE
```


Lo primero que hacemos es utilizar una clase `StringBuilder` para construir la cadena.


```java
StringBuilder sCadena = new StringBuilder("Esto es una frase muy interesante");
```


Lo siguiente que haremos será ir recorriendo cada uno de los caracteres de la cadena, mediante un bucle for.


```java
for (int x=0;x<sCadena.length();x++) { ... }
```


Por cada uno de los caracteres comprobaremos si este ocupa una posición par o impar, utilizando el operador de módulo. Ya que dependiendo de su posición lo convertiremos a mayúsculas o minúsculas.


```java
for (int x=0;x<sCadena.length();x++) {
			caracter = Character.toString(sCadena.charAt(x));
			if (x%2 == 0) { ... }
			else { ... }
```



Para acceder a un carácter nos vamos a apoyar en el método `.charAt()` y para modificarlo utilizaremos el método `.setCharAt().`

Además deberemos de convertir el carácter en un `String` para poder utilizar las funciones `.toLowerCase()` y `.toUpperCase()`.

De esta forma el código para obtener la palabra con mayúsculas y minúsculas de forma alterna será el siguiente:


```java
for (int x=0;x<sCadena.length();x++) {
			caracter = Character.toString(sCadena.charAt(x));
			if (x%2 == 0)
				sCadena.setCharAt(x,caracter.toUpperCase().charAt(0));
			else
				sCadena.setCharAt(x,caracter.toLowerCase().charAt(0));
```

