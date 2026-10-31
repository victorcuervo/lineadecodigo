---
title: "Extraer contenido separado por delimitadores con Java"
description: "Aprende a extraer datos separados por delimitadores en Java con StringTokenizer: sintaxis, recorrido con hasMoreTokens() y alternativas con String.split()."
date: 2010-05-29
updatedDate: 2026-10-31
tags: ["stringtokenizer","string","java-util"]
slug: java/extraer-contenido-separado-por-delimitadores-con-java
type: doc
topic: java
id: cc9d9a73-12b5-4dd2-a92c-f224bb9655e6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ExtraerPorDelimitadores.java
---

Una de las [consultas que nos han hecho](http://lineadecodigo.com/java/contar-palabras-en-java/#comment-47391) en la web es acerca de como extraer contenido que se encuentre separado por delimitadores Y es que en muchas situaciones nos podemos encontrar con este problema. Posiblemente el más típico es aquel en el que recibimos información en un fichero que ha sido exportado de alguna herramienta. Por ejemplo, partamos de la siguiente información:


En Java, un delimitador es el carácter o conjunto de caracteres que marca dónde termina un campo y comienza el siguiente. En este artículo se utiliza la clase `StringTokenizer`, del paquete `java.util`, para recorrer una cadena y obtener sus tokens.


```text
ciudad#min#max#cielo
avila#12#24#soleado
toledo#16#15#soleado
madrid#15#27#soleado
barcelona#12#20#nublado
```


Vemos que el contenido está separado por delimitadores. En este caso mediante una almohadilla (#). Si queremos procesar el contenido de las cadenas deberemos de extraer la información separada por los delimitadores. Para esto podemos apoyarnos en la clase [StringTokenizer](http://w3api.com/wiki/Java:StringTokenizer). Aunque sigue disponible y es válida para código existente, se considera una clase heredada; para código nuevo también conviene conocer alternativas como `String.split()`.


```java
StringTokenizer st = new StringTokenizer(sTexto,delimitador);
```


Esta clase permite obtener los elementos encontrados en una cadena de texto cada vez que encuentra un delimitador. Así, si partimos de la cadena


```java
String sTiempo = "avila#12#24#soleado";
```


Podemos instanciar el [StringTokenizer](http://w3api.com/wiki/Java:StringTokenizer) de la siguiente forma:


```java
StringTokenizer st = new StringTokenizer(sTiempo,"#");
```


Como vemos, pasamos la almohadilla (#) como el separador que ha de utilizar el [StringTokenizer](http://w3api.com/wiki/Java:StringTokenizer). Cada carácter incluido en la cadena de delimitadores se interpreta como un separador independiente. Solo nos quedará recorrer el [StringTokenizer](http://w3api.com/wiki/Java:StringTokenizer) para extraer los elementos. Esta última operación la realizamos con los métodos [.hasMoreTokens()](http://w3api.com/wiki/Java:StringTokenizer.hasMoreTokens()) y [.nextToken()](http://w3api.com/wiki/Java:StringTokenizer.nextToken()). `hasMoreTokens()` permite comprobar si quedan tokens y `nextToken()` devuelve el siguiente token; si se llama cuando ya no quedan elementos, se produce una excepción `NoSuchElementException`.


```java
while (st.hasMoreTokens())
  System.out.println (st.nextToken());
```


## Ejemplo completo con StringTokenizer


El siguiente programa reúne los fragmentos anteriores en un ejemplo ejecutable. El resultado muestra cada campo de la cadena en una línea independiente.


```java
import java.util.StringTokenizer;

public class ExtraerPorDelimitadores {
    public static void main(String[] args) {
        String sTiempo = "avila#12#24#soleado";
        String delimitador = "#";
        StringTokenizer st = new StringTokenizer(sTiempo, delimitador);

        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }
    }
}
```


La salida esperada es:


```text
avila
12
24
soleado
```


## Alternativa con String.split()


Para código nuevo, `String.split()` suele resultar más directo cuando solo se necesita convertir una cadena en un conjunto de campos. El método devuelve un array y recibe una expresión regular como delimitador.


```java
String sTiempo = "avila#12#24#soleado";
String[] campos = sTiempo.split("#", -1);

for (String campo : campos) {
    System.out.println(campo);
}
```


El argumento `-1` indica que también deben conservarse los campos vacíos finales. Esto es importante al procesar registros en los que una columna puede no tener valor. Por ejemplo, `"avila#12#".split("#", -1)` conserva el campo vacío situado después del último delimitador.


`StringTokenizer` y `String.split()` no son analizadores completos de CSV: no interpretan correctamente por sí solos campos entrecomillados que contengan delimitadores. Para esos archivos conviene utilizar una biblioteca especializada en CSV.

