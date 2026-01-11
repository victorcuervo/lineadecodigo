---
title: "Palabras pares de una frase con Java"
description: "Utilizar la clase StringTokenizer para poder extraer las palabras pares de una frase con Java y mostrarselas al usuario por consola."
date: 2019-10-13
updatedDate: 2026-01-11
tags: ["stringtokenizer","pares","nextelement","string","hasmoreelements","nexttoken","hasmoretokens"]
slug: java/strings/palabras-pares-de-una-frase-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/PalabrasParesFrase.java
topic: java

---

En uno de los c[omentarios que nos dejabais hace poco un usuario](http://lineadecodigo.com/java/listar-caracteres-de-una-cadena-con-java/#comment-112525) nos preguntaba sobre cómo podría sacar las palabras pares de una frase con [Java](http://www.manualweb.net/java/). Es decir, que dada una frase obtuviese la segunda, cuarta, sexta,... palabra de la frase y nos la mostrase por consola. Vamos a ver cómo resolverlo, ya que es sencillo el poder extraer las palabras pares de una frase con [Java](http://www.manualweb.net/java/). Lo primero será tener una frase. Esto es muy sencillo.


```text
String sCadena = "Esto es una cadena que contiene palabras y de las que quiero extraer las palabras pares";
```


Ahora nos vamos a apoyar en la clase [`StringTokenizer`](https://www.w3api.com/Java/StringTokenizer/), la cual sirve para poder trocear una frase cada vez que encuentre un delimitador. Siendo su constructor el siguiente:


```java
StringTokenizer(String str, String delim)
```


Por defecto, el delimitador que utiliza [`StringTokenizer`](https://www.w3api.com/Java/StringTokenizer/) es el espacio en blanco, así que no necesitaremos indicarle ningún delimitador y nos bastará con hacer lo siguiente:


```java
StringTokenizer st = new StringTokenizer(sCadena);
```


Ahora ya tenemos un array que contiene todas las palabras de la frase, así que simplemente tendremos que ir recorriendo el [`StringTokenizer`](https://www.w3api.com/Java/StringTokenizer/) y mostrar las palabras que estén en las posiciones pares. Para ello tenemos que conocer los métodos en los que se apoya [`StringTokenizer`](https://www.w3api.com/Java/StringTokenizer/)`` que son [`.hasMoreElements()`](https://www.w3api.com/Java/StringTokenizer/.hasMoreTokens()), método que nos dirá si nos quedan más elementos por mostrar y [`.nextElement()`](https://www.w3api.com/Java/StringTokenizer/.nextToken()) que será el método que nos devuelva el elemento que tenga el array mientras lo recorremos. De esta forma podemos recorrerlo de la siguiente forma:


```java
while (st.hasMoreElements()) {
    st.nextElement();
 }
```


Como lo que queremos es extraer las palabras pares vamos a crear un contador que nos diga si la posición es par o es impar. Esto añadido a lo que ya explicamos en el [artículo sobre números pares en Java](http://lineadecodigo.com/java/numeros-pares-en-java/), nos permitirá el saber si la posición es par o impar.


```java
int contador = 1;

while (st.hasMoreElements()) {
  if (iContador%2 == 0)
    System.out.println(st.nextElement());
  else
    st.nextElement();
      
  iContador++;
 }
```


De esta manera tan sencilla hemos conseguido extraer las palabras pares utilizando el lenguaje [Java](http://www.manualweb.net/java/) apoyándonos en la clase [`StringTokenizer`](https://www.w3api.com/Java/StringTokenizer/). Recuerda que si tienes dudas con tu código nos las puedes dejar en los comentarios o [mediante nuestros foros](http://www.dudasprogramacion.com/) e intentaremos, en la medida de lo posible, ir resolviéndolos y explicándolos.

