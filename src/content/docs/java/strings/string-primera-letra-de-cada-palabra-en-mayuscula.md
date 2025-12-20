---
title: "String - Primera letra de cada palabra en mayúscula"
description: "Código fuente en el lenguaje de programación Java que nos explica cómo poner la primera letra de cada palabra en mayúscula."
lastUpdated: 2025-12-20
slug: java/string-primera-letra-de-cada-palabra-en-mayuscula
author: Feffo
---

¡Buenas! Como entrega final del set de 5 ejemplos de manipulación de cadenas de caracteres les voy a presentar una forma de poner la primera letra de cada palabra en mayúscula en una cadena de caracteres (se considerará como palabra todo aquel substring que siga después de un espacio, punto o coma). En el ejemplo partimos de la siguiente cadena de caracteres:


```text
hola mundo, esto es lineadecodigo
```


Lo que esperamos obtener es una cadena de caracteres con la siguiente forma:


```text
Hola Mundo, Esto Es Lineadecodigo
```


Para poder hacer esto necesitamos obtener mediante el método [toCharArray](https://www.w3api.com/Java/String/.toCharArray()) de la clase [String](https://www.w3api.com/Java/String/), el arreglo de caracteres correspondiente a la cadena que queremos modificar.


```java
char[] caracteres = cadena.toCharArray();
```


Una vez hecho esto, antes que nada, dadas las condiciones en las que son consideradas las "palabras" debemos establecer que en el inicio de la cadena puede existir una palabra que no cumplirá con nuestras condiciones (es decir, espacio, punto o coma), por lo que tendremos que representar esta condición de la siguiente forma:


```java
caracteres[0] = Character.toUpperCase(caracteres[0]);
```


Mediante el uso del método [toUpperCase](https://www.w3api.com/Java/Character/.toUpperCase()) de la clase [Character](https://www.w3api.com/Java/Character/), podremos obtener el carácter en mayúscula correspondiente al indicado; de esta forma no tendremos que hacerlo nosotros mismos, lo que se conoce como _'Reinventar la rueda'._ :) Luego, podremos analizar el resto de la cadena, y esto será recorriendo todo el arreglo que obtuvimos anteriormente de la siguiente forma:


```java
// el -2 es para evitar una excepción al caernos del arreglo
  for (int i = 0; i < cadena.length()- 2; i++) 
    // Es 'palabra'
    if (caracteres[i] == ' ' || caracteres[i] == '.' || caracteres[i] == ',')
      // Reemplazamos
      caracteres[i + 1] = Character.toUpperCase(caracteres[i + 1]);
```


Finalmente, con el arreglo de caracteres modificado retornamos un nuevo [String](https://www.w3api.com/Java/String/) creado a partir de él:


```java
return new String(caracteres);
```


Ya hemos conseguido poner la primera letra de cada palabra en mayúscula mediante [Java](https://www.manualweb.net/java/). 

