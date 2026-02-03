---
title: "Listar caracteres de una cadena con Java"
description: "Uso de un bucle for y el método .charAt para listar caracteres de una cadena con Java"
date: 2007-10-17
updatedDate: 2026-01-11
tags: ["for","charat","string","bucles","length"]
slug: java/strings/listar-caracteres-de-una-cadena-con-java
author: victor_cuervo
type: doc
id: d44a35a9-d4c2-41a8-b403-93a745387355
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ListarCaracteresCadena.java
---

## Acceso a caracteres de una cadena


Una cadena de texto en [Java](https://www.manualweb.net/java/) se compone de un conjunto de caracteres, uno tras otro. Mediante el método [.charAt(int index)](https://www.w3api.com/Java/String/.charAt()) podemos acceder a un índice que nos devolverá el carácter que ocupe ese número, empezando por el índice 0.


Así, si usamos la cadena de texto:


```java
String texto = "Este es mi lugar";
```


La posición 6 la ocupará el carácter "s" de "es". Para poder acceder a él utilizaremos el método [.charAt(int index)](https://www.w3api.com/Java/String/.charAt()) de la siguiente manera:


```java
char caracter = texto.charAt(6);
System.out.println(caracter); // Imprime: s
```


## Listar todos los caracteres de una cadena


Si lo que queremos es listar los caracteres de la cadena nos tendremos que ayudar de este método y del [método .length()](https://www.w3api.com/Java/String/.length()), el cual nos devuelve el tamaño de la cadena. Así sabremos cual es el último carácter (.length() – 1), ya que si nos pasamos saltará la excepción IndexOutOfBoundsException.


El código [Java](https://www.manualweb.net/java/) nos quedará de la siguiente forma:


```java
String texto = "Este es mi lugar";
for (int x = 0; x < texto.length(); x++) {
    System.out.println(texto.charAt(x));
}
```


Este bucle recorrerá cada posición de la cadena desde 0 hasta su longitud menos 1, imprimiendo cada carácter en una línea separada.

