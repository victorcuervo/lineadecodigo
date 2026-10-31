---
title: "Extraer contenido con delimitadores dinámicos"
description: "Aprende a extraer contenido con delimitadores dinámicos en Java usando expresiones regulares y split(), controlar campos vacíos y recorrer el resultado."
date: 2010-05-30
updatedDate: 2026-10-31
tags: ["string","stringtokenizer","foreach","array","regexp"]
slug: java/extraer-contenido-con-delimitadores-dinamicos
type: doc
topic: java
id: 42fcc711-87ff-4513-83de-c9ea90d80952
author: victor_cuervo
---

Una muy buena observación que nos hicieron en el artículo [Extraer contenido separado por delimitadores con Java](http://lineadecodigo.com/java/extraer-contenido-separado-por-delimitadores-con-java/) es que [el uso de StringTokenizer limita la extracción de contenido](http://lineadecodigo.com/java/extraer-contenido-separado-por-delimitadores-con-java/#49307). Sobre todo si los delimitadores son dinámicos, ya que [StringTokenizer](http://w3api.com/wiki/Java:StringTokenizer) no permite el uso de expresiones regulares. Imaginemos que el texto que nos envían para extraer los items tiene la siguiente estructura:


```java
String sCiudades = "#01avila#02madrid#03toledo#04santander";
```


Podemos comprobar que los delimitadores son dinámicos y que siguen la pauta de una almohadilla y un par de dígitos de separación, los cuales van incrementando. Lo primero es encontrar una expresión regular para este delimitador dinámico. Podría ser:


```text
#0[0-9]
```


Ahora, nos vamos a apoyar en el método [`split()`](http://w3api.com/wiki/Java:String.split()) para dividir la cadena con la expresión regular y quedarnos con los items de resultado.


```java
String[] items = sCiudades.split("#0[0-9]");
```


Vemos que el método [`split()`](http://w3api.com/wiki/Java:String.split()) nos devuelve un array de [`String`](http://w3api.com/wiki/Java:String). Así que solo nos quedará el recorrer el array para mostrar el contenido. Para ello utilizamos una [estructura for-each](http://lineadecodigo.com/java/bucle-for-each-en-java/).


```java
for (String item: items)
  System.out.println(item);
```


## Qué hace el patrón del delimitador


La expresión `#0[0-9]` está formada por una almohadilla, el carácter `0` y una clase de caracteres que acepta un dígito entre `0` y `9`. Por tanto, funciona con delimitadores como `#00`, `#01` o `#09`. Es adecuada para la cadena del ejemplo, pero no detectará `#10` ni otros delimitadores cuyo primer dígito no sea `0`.


Si el formato siempre utiliza exactamente dos dígitos, pero el contador puede llegar a `10` o a cualquier otro valor de dos cifras, es más preciso utilizar `#[0-9]{2}`:


```java
String[] items = sCiudades.split("#[0-9]{2}");
```


La expresión regular se pasa como texto al método `split()`, que busca cada coincidencia y devuelve las partes que quedan entre los delimitadores. Si el formato admite una cantidad variable de dígitos, el cuantificador puede adaptarse, por ejemplo con `#[0-9]+`.


## Resultado del ejemplo


Como la cadena comienza con el delimitador `#01`, el resultado incluye un elemento vacío al principio. El array contiene estos valores:


```text
items[0] = ""
items[1] = "avila"
items[2] = "madrid"
items[3] = "toledo"
items[4] = "santander"
```


Por eso el bucle `for-each` original imprime una línea vacía antes de mostrar las ciudades. Ese comportamiento es importante cuando el delimitador aparece al principio de la cadena: `split()` no elimina automáticamente ese elemento vacío inicial.


## Evitar el elemento vacío inicial


Si el delimitador inicial forma parte del formato de entrada y no representa un dato, se puede quitar antes de dividir la cadena. La siguiente variante conserva el ejemplo original y evita que el array empiece con un elemento vacío:


```java
String sCiudades = "#01avila#02madrid#03toledo#04santander";
String datos = sCiudades.replaceFirst("^#[0-9]{2}", "");
String[] items = datos.split("#[0-9]{2}");

for (String item: items)
  System.out.println(item);
```


El resultado es `avila`, `madrid`, `toledo` y `santander`. El símbolo `^` indica que la expresión solo debe coincidir al principio de la cadena.


## Conservar campos vacíos al final


Por defecto, `split()` descarta las cadenas vacías que quedan al final del resultado. Si un delimitador final representa un campo vacío que debe conservarse, utiliza la sobrecarga `split(String regex, int limit)` con un límite negativo:


```java
String datos = "#01avila#02madrid#03";
String[] items = datos.replaceFirst("^#[0-9]{2}", "")
                      .split("#[0-9]{2}", -1);
```


En este caso, el array conserva también el campo vacío posterior a `#03`. El parámetro `-1` indica que no se deben descartar las cadenas vacías finales.


Quisiéramos agradecer a [personas como Unai estos aportes tan gratificantes](http://lineadecodigo.com/java/extraer-contenido-separado-por-delimitadores-con-java/#49307) de contenido que ayudan a que todos podamos aprender un poco más.

