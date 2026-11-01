---
title: "Invertir una cadena con Java"
description: "Invertir una cadena en Java con un bucle for y StringBuilder: aprende a recorrer caracteres, corregir errores comunes y obtener el resultado inverso."
date: 2007-08-25
updatedDate: 2026-11-01
tags: ["char","string","for"]
slug: java/invertir-una-cadena-con-java
type: doc
topic: java
id: 92d1e179-ee90-47f4-9e57-cc88b01bee04
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/InvertirCadena.java
---

En una de nuestras páginas, uno de nuestros visitantes nos pedía un programa sobre cómo invertir una cadena en [Java](https://lineadecodigo.com/java/). Vamos a ver qué código necesitamos para poder hacerlo. Lo primero es tener una cadena. Esto es sencillo:


```java
String sCadena = "LineaDeCodigo";
String sCadenaInvertida = "";
```


La idea es muy simple. Iremos recorriendo la cadena, carácter a carácter, desde el último carácter hasta el primero. Para ello nos apoyamos en un bucle `for`.


```java
for (int x = sCadena.length() - 1; x >= 0; x--) {
  sCadenaInvertida = sCadenaInvertida + sCadena.charAt(x);
}
```


Para obtener el último carácter lo haremos mediante el método `length()`, que nos da el tamaño de la cadena, y restándole uno. Esto es así porque los caracteres de la cadena están numerados desde el índice `0` hasta el tamaño de la cadena menos uno. El método `charAt(x)` devuelve el carácter que ocupa la posición indicada por `x`.


Ahora solo tendremos que volcar a consola la cadena invertida:


```java
System.out.println(sCadenaInvertida);
```


El resultado para `LineaDeCodigo` es `ogidoCeDaeniL`.


## Ejemplo completo


El siguiente programa reúne el código anterior en una clase ejecutable. La variable `sCadenaInvertida` debe inicializarse con una cadena vacía antes del bucle para poder ir acumulando los caracteres.


```java
public class InvertirCadena {

  public static void main(String[] args) {
    String sCadena = "LineaDeCodigo";
    String sCadenaInvertida = "";

    for (int x = sCadena.length() - 1; x >= 0; x--) {
      sCadenaInvertida = sCadenaInvertida + sCadena.charAt(x);
    }

    System.out.println(sCadenaInvertida);
  }
}
```


Este programa imprime `ogidoCeDaeniL`. Si la cadena está vacía, `length()` devuelve `0` y la condición del bucle no se cumple, por lo que el resultado también será una cadena vacía. No es necesario tratarla como un caso especial.


## Invertir una cadena con StringBuilder


La concatenación con `+` es clara y resulta apropiada para explicar el algoritmo. Sin embargo, cada concatenación puede crear una nueva instancia de `String`, porque las cadenas son inmutables en [Java](https://lineadecodigo.com/java/). Para un texto largo, o cuando la operación se repite muchas veces, `StringBuilder` evita crear tantas cadenas intermedias.


```java
String sCadena = "LineaDeCodigo";
StringBuilder sCadenaInvertida = new StringBuilder(sCadena.length());

for (int x = sCadena.length() - 1; x >= 0; x--) {
  sCadenaInvertida.append(sCadena.charAt(x));
}

System.out.println(sCadenaInvertida);
```


El método `append()` añade cada carácter al final del `StringBuilder`. Al pasarlo a `System.out.println()`, [Java](https://lineadecodigo.com/java/) utiliza su representación textual y se obtiene el mismo resultado: `ogidoCeDaeniL`. Esta alternativa conserva el recorrido con `for`, pero es más adecuada cuando el algoritmo debe trabajar con cadenas grandes o dentro de operaciones repetitivas.

