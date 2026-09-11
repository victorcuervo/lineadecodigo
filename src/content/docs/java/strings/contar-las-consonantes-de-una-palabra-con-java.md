---
title: "Contar las consonantes de una palabra con Java"
description: "Contar las consonantes de una palabra con Java es fácil con un método fiable, usando Character.isLetter y esVocal. Optimiza tu código y cautiva usuarios."
date: 2010-10-23
updatedDate: 2026-09-11
tags: ["charat","tolowercase","character","isletter"]
slug: java/strings/contar-las-consonantes-de-una-palabra-con-java
type: doc
topic: java
id: dd679295-dcd1-4e68-b636-de88e051981f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ConsonantesPalabra.java
---

Pues si esta mañana veíamos cómo [contar las vocales de una palabra con Java](http://lineadecodigo.com/java/contar-las-vocales-de-una-palabra-con-java/), ahora vamos a contar las consonantes. Para ello, nos basaremos en el código de las vocales.


Todo aquello que no es una vocal puede parecer una consonante, pero solo si hablamos de letras: un carácter como `&` no es ni vocal ni consonante.


## Método para identificar vocales


Primero creamos el método `esVocal`, que recibe un carácter y devuelve si es una vocal:


```java
public static boolean esVocal(char c) {
    if ((Character.toLowerCase(c) == 'a')
            || (Character.toLowerCase(c) == 'e')
            || (Character.toLowerCase(c) == 'i')
            || (Character.toLowerCase(c) == 'o')
            || (Character.toLowerCase(c) == 'u')) {
        return true;
    } else {
        return false;
    }
}
```


Dado un valor de tipo `char`, el método indica si es una vocal. Utilizamos `Character.toLowerCase` para evitar problemas con mayúsculas y minúsculas.


## Contar las consonantes


Podemos recorrer la palabra con un bucle `for` y aumentar `contador` cuando el carácter no sea una vocal:


```java
for (int x = 0; x < sPalabra.length(); x++) {
    if (!esVocal(sPalabra.charAt(x))) {
        contador++;
    }
}
```


Sin embargo, algunos caracteres no son vocales ni consonantes, como `&` o los símbolos matemáticos. Por eso debemos comprobar también que el carácter sea una letra mediante `Character.isLetter`:


```java
for (int x = 0; x < sPalabra.length(); x++) {
    if (Character.isLetter(sPalabra.charAt(x))
            && !esVocal(sPalabra.charAt(x))) {
        contador++;
    }
}
```


De esta forma podemos contar correctamente las consonantes de una palabra con Java.

