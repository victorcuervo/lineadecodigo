---
title: "Primera letra de cada palabra con Java"
description: "Uso de la clase StringTokenizer para obtener la primera letra de cada palabra con Java analizando una frase que nos hayan pasado como ejemplo."
date: 2017-07-05
updatedDate: 2026-01-11
tags: ["substring","hasmoretokens","nexttoken","stringtokenizer","string"]
slug: java/strings/primera-letra-de-cada-palabra-con-java
author: victor_cuervo
type: doc
id: d4952f44-4194-4152-9a8b-e8d0fb1a8c94
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/PrimeraLetraPalabras.java
---

Nos preguntaban en el foro sobre cómo se podía obtener la primera letra de cada palabra con Java. Es decir, dada una frase, como obtener la primera letra de cada una de las palabras que componen dicha frase.


Para poderlo llevar a cabo, lo primero que tenemos que tener, lógicamente, es la frase:


```java
String sFrase = "Esto es un ejemplo de prueba";
```


## Troceando la frase


Lo que vamos a hacer, para obtener cada una de las palabras es trocearlo. Para ello nos apoyamos en la clase `StringTokenizer`, la cual, dada una cadena, obtiene las subcadenas separadas por un separador pasado por parámetro. En el caso de que no indiquemos el separador utilizará el espacio.


```java
StringTokenizer stPalabras = new StringTokenizer(sFrase);
```


## Recorriendo las palabras


Ahora que ya tenemos las palabras de la frase cargadas en el `StringTokenizer` lo que tenemos que hacer es ir recorriendo dicho `StringTokenizer` para analizar cada una de las palabras y quedarnos con su primera letra.


Nos apoyaremos en los métodos `.hasMoreTokens()` y `.nextToken()` para recorrer los elementos del `StringTokenizer`.


```java
while (stPalabras.hasMoreTokens()) {
  sPalabra = stPalabras.nextToken();
}
```


Cada uno de los token devueltos por `.nextToken()` representa una de las palabras de la frase. Es por ello que si queremos quedarnos con la primera letra de la palabra simplemente tendremos que obtener una subcadena. La subcadena la obtenemos mediante el método `.substring()`.


```java
while (stPalabras.hasMoreTokens()) {
  sPalabra = stPalabras.nextToken();
  System.out.println(sPalabra.substring(0,1));
}
```


De esta forma habremos conseguido imprimir por pantalla la primera letra de cada palabra con [Java](https://www.manualweb.net/java/).

