---
title: "Método contador de vocales"
description: "Ejemplo que nos muestra como podemos definir un método contador de vocales en Java el cual reciba una palabra y nos devuelva un array de enteros."
date: 2015-09-10
updatedDate: 2026-01-11
tags: ["array","bucles","for","switch","metodo","string","tolowercase","charat"]
slug: java/estructuras-selectivas/metodo-contador-de-vocales
author: victor_cuervo
type: doc
id: 39e3ac03-5ec5-4d0e-aea4-f72ab11f2a1c
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/arrays/ContadorDeVocales.java
---

Uno de nuestros visitantes nos preguntaba acerca de cómo podría hacer un método contador de vocales en [Java](https://www.manualweb.net/java/). Dicho método recibiría una cadena como parámetro y devolvería un array de 5 posiciones en las cuales iría el sumatorio de las vocales que hubiese en la palabra.


Es decir el array de vuelta tendría en la posición 0 el número de vocales a que hubiese en la palabra, en la posición 1 el número de vocales b,... y así hasta la posición 4 que contendría el número de vocales u que hubiese en la palabra.


La idea es partir del ejemplo [explicado acerca de contar vocales en Java](http://lineadecodigo.com/java/contar-las-vocales-de-una-palabra-con-java/) y darle una pequeña vuelta hasta conseguir el método contador de vocales.


Lo primero será definir la signatura del método contador de vocales el cual recibe un elemento de tipo [`String`](https://www.w3api.com/Java/String/) y devuelve un array de enteros o `int[]`


```java
public static int[] contadorVocales(String sPalabra) { .. }
```


Dentro del método, la primera sentencia será definir ese array de resultados. El array lo inicializamos con todo a ceros, ya que asumimos que por defecto no existe ninguna vocal.


```java
int[] contador = {0,0,0,0,0};
```


Además, atendiendo a que nos puedan enviar vocales en minúsculas y mayúsculas, convertimos la palabra entera a minúsculas (podría haber sido a mayúsculas también).


```java
sPalabra = sPalabra.toLowerCase();
```


Ahora lo que haremos será recorrer los caracteres de la palabra. Para ello vamos a utilizar un bucle for que recorra carácter a carácter.


```java
for(int x=0;x<sPalabra.length();x++) { ... }
```


Dentro del bucle tendremos que evaluar el carácter, dependiendo del tipo de vocal que sea incrementaremos una u otra posición del array. Es por ello que nos basamos en una estructura switch para llevarlo a cabo.


```java
for(int x=0;x<sPalabra.length();x++) {
  switch (sPalabra.charAt(x)) {
    case 'a': case 'á':
      contador[0]++;
      break;
    case 'e': case 'é':
      contador[1]++;
      break;
    case 'i': case 'í':
      contador[2]++;
      break;
    case 'o': case 'ó':
      contador[3]++;
      break;
    case 'u': case 'ú':
      contador[4]++;
      break;
  }
}
```


> Cómo podemos ver hemos controlado la vocal y la vocal acentuada. Si vuestro lenguaje tiene vocales del estilo à, ü,... solo tenéis que añadir una sentencia case más.


Y ya solo nos quedará devolver el array contador.


```java
return contador;
```


Para poder llamar al método contador de vocales en Java solo hay que pasarle una palabra.


```java
int[] vocales = contadorVocales("Murciélago");

for (int x=0;x<vocales.length;x++) {
  System.out.println(vocales[x]);
}
```


De esta forma tenemos definido nuestro método contador de vocales en [Java](https://www.manualweb.net/java/).

