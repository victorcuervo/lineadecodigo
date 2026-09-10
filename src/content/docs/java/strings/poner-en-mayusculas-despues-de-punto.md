---
title: "Poner en mayúsculas después de punto"
description: "Aprende a poner en mayúscula la primera letra después de cada punto en Java usando indexOf, substring y toUpperCase con un sencillo bucle while."
date: 2009-09-25
updatedDate: 2026-09-10
tags: ["Java String","substring","touppercase","indexof"]
slug: java/strings/poner-en-mayusculas-despues-de-punto
type: doc
topic: java
id: 2c8a9dfb-adca-8180-8bd1-fa08047716d9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/MayusculasDespuesDePunto.java
---

En ocasiones necesitamos corregir un texto para poner en mayúscula el primer carácter de la cadena y también el que aparece después de cada punto.


Partimos de la siguiente frase:


```text
hola juan. me ha gustado mucho. hagámonos público. mañana hablamos. luis
```


El resultado esperado es:


```text
Hola juan. Me ha gustado mucho. Hagámonos público. Mañana hablamos. Luis
```


## Métodos utilizados


Para resolverlo usaremos los métodos [`substring()`](http://w3api.com/wiki/Java:String.substring), [`toUpperCase()`](http://w3api.com/wiki/Java:String.toUpperCase) e [`indexOf()`](http://w3api.com/wiki/Java:String.indexOf), junto con un bucle que recorra la cadena.


Utilizaremos dos variables: `indice`, que marcará el inicio de cada fragmento, e `indicepunto`, que almacenará la posición del siguiente punto.


## Localizar el siguiente punto


En la primera iteración, comenzamos al principio de la cadena y buscamos el primer punto:


```java
int indice = 0;
int indicepunto = frase.indexOf('.', indice);
```


El método [`indexOf()`](http://w3api.com/wiki/Java:String.indexOf) devuelve la posición del carácter indicado a partir del índice inicial. Si no lo encuentra, devuelve un valor negativo.


## Convertir la primera letra a mayúscula


Una vez delimitado el fragmento, convertimos su primer carácter a mayúscula:


```java
frase2 = frase2 + frase.substring(indice, indice + 1).toUpperCase();
```


Después añadimos el resto del fragmento, desde el segundo carácter hasta el punto incluido:


```java
frase2 = frase2 + frase.substring(indice + 1, indicepunto + 1);
```


La variable `frase` contiene el texto original, mientras que `frase2` almacena el resultado que vamos componiendo.


## Recorrer todos los fragmentos


Repetimos el proceso mientras queden puntos en la cadena:


```java
int indice = 0;
int indicepunto = frase.indexOf('.', indice);

while (indicepunto >= 0) {
    // Convertimos a mayúscula el primer carácter del fragmento
    frase2 = frase2 + frase.substring(indice, indice + 1).toUpperCase();

    // Añadimos el resto del fragmento hasta el punto
    frase2 = frase2 + frase.substring(indice + 1, indicepunto + 1);

    // Avanzamos hasta el siguiente fragmento
    indice = indicepunto + 1;
    indicepunto = frase.indexOf('.', indice);
}
```


## Añadir el último fragmento


Al terminar el bucle todavía queda el texto comprendido entre el último punto y el final de la cadena. Lo añadimos usando [.length()](http://w3api.com/wiki/Java:String.length):


```java
frase2 = frase2 + frase.substring(indice, indice + 1).toUpperCase();
frase2 = frase2 + frase.substring(indice + 1, frase.length());
```


Finalmente, `frase2` contendrá la frase completa con la primera letra y cada carácter posterior a un punto en mayúscula.

