---
title: "Reemplazar contenido con Java"
description: "Aprende a reemplazar contenido con Java usando replaceAll(), conoce las expresiones regulares y decide entre replace() y replaceFirst() según el caso."
date: 2010-05-31
updatedDate: 2026-11-01
tags: ["replaceall","replacefirst","string"]
slug: java/cadenas/reemplazar-contenido-con-java
type: doc
topic: java
id: 564282b4-8719-4dbc-84a4-8aa0c4b22ede
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ReemplazarContenido.java
---

## Reemplazar contenido con Java


En el tratamiento de textos, una operación muy utilizada es la de buscar contenido y reemplazarlo por un nuevo contenido. Es la típica opción de los editores de texto de "Buscar y Reemplazar...". Ahora vamos a ver cómo podemos hacer esto mediante [Java](https://lineadecodigo.com/java/) de una forma sencilla. Lo primero será tener una cadena:


```java
String s = "La pausa la realizó Fernando. En las representaciones de teatro, Fernando era el que mejor llevaba el tempo";
```


Para poder reemplazar contenido con Java nos tenemos que apoyar en el método [replaceAll()](https://www.w3api.com/Java/String/.replaceAll/). Este método recibe como parámetros una expresión regular que define el contenido que se buscará y el texto de reemplazo. El resultado de ejecutar el método será una nueva cadena; la cadena original no se modifica porque `String` es inmutable.


```java
s = s.replaceAll("Fernando", "Victor");
```


Vemos que [replaceAll()](https://www.w3api.com/Java/String/.replaceAll/) es un método extremadamente potente y que nos ayudará con muchas operaciones de mantenimiento de textos. En este ejemplo se sustituyen las dos apariciones de `Fernando`, por lo que el resultado de `s` será `La pausa la realizó Victor. En las representaciones de teatro, Victor era el que mejor llevaba el tempo`.


## Diferencias entre replaceAll(), replace() y replaceFirst()


Aunque los tres métodos sirven para reemplazar texto, no reciben exactamente el mismo tipo de búsqueda:

- `replace()` busca texto literal y sustituye todas sus apariciones. Es la opción más sencilla cuando no necesitas una expresión regular.
- `replaceFirst()` interpreta el patrón como una expresión regular, pero solo sustituye la primera coincidencia.
- `replaceAll()` interpreta el patrón como una expresión regular y sustituye todas las coincidencias.

El siguiente ejemplo permite comparar el resultado de cada método:


```java
String texto = "Java, Java y Java";

System.out.println(texto.replace("Java", "Kotlin"));
System.out.println(texto.replaceFirst("Java", "Kotlin"));
System.out.println(texto.replaceAll("Java", "Kotlin"));
```


La salida es, respectivamente, `Kotlin, Kotlin y Kotlin`, `Kotlin, Java y Java` y `Kotlin, Kotlin y Kotlin`.


## Expresiones regulares en replaceAll()


El primer parámetro de `replaceAll()` es una expresión regular. Por eso algunos caracteres tienen un significado especial: por ejemplo, el punto representa cualquier carácter y no un punto literal. Para reemplazar texto literal, `replace()` evita tener que escapar esos caracteres. Si necesitas utilizar una expresión regular, debes escribir el patrón correctamente:


```java
String url = "www.lineadecodigo.com";
String resultado = url.replaceAll("\\.", "-");

System.out.println(resultado);
```


El resultado será `www-lineadecodigo-com`. La doble barra invertida del código Java genera la barra invertida que necesita la expresión regular para tratar el punto como un carácter literal.


También debes recordar que el texto de reemplazo tiene reglas propias para caracteres como `$` y `\\`. Si el reemplazo procede de una entrada externa y debe interpretarse literalmente, `Matcher.quoteReplacement()` permite protegerlo antes de pasarlo a `replaceAll()`.

