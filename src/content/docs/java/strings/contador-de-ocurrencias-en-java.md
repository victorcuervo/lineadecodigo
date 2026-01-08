---
title: "Contador de Ocurrencias en Java"
description: "Cómo utilizar el código para poder crear un contador de ocurrencias en Java."
date: 2007-08-19
updatedDate: 2026-01-08
tags: ["string","indexof","substring","length"]
slug: java/strings/contador-de-ocurrencias-en-java
author: Víctor Cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ContadorDePalabras.java
topic: java

---

La idea consiste en ver cuantas veces se repite una ocurrencia (o palabra) dentro de una frase utilizando el lenguaje [Java](https://www.manualweb.net/java/). Para buscar el texto dentro de una frase utilizaremos el [método .indexOf()](https://www.w3api.com/Java/String/.indexOf()) la cual devuelve la posición de la cadena a partir de la cual empieza la cadena buscada. En el caso de que no encuentre la cadena devolverá el valor -1.


```java
sTexto.indexOf(sCadenaBuscada);
```


Esto solamente nos devolvería la posición de la primera ocurrencia de la frase. Para poder evaluar si la ocurrencia aparece más veces debemos de repetir la búsqueda del [indexOf()](https://www.w3api.com/Java/String/.indexOf()) sobre el resto de la frase. Es por ello que nos quedaremos con un substring desde la posición en que termina la primera ocurrencia (indexOf(Ocurrencia) + Ocurrencia.length()) hasta el final del texto (sTexto.length).


```java
sTexto = sTexto.substring(sTexto.indexOf(
	      sTextoBuscado)+sTextoBuscado.length(),sTexto.length());
```


Sobre esta nueva cadena volveremos a realizar la búsqueda de la ocurrencia. Esto lo repetiremos hasta que el [método .indexOf()](https://www.w3api.com/Java/String/.indexOf()) nos retorne -1.


```java
while (sTexto.indexOf(sTextoBuscado) > -1) {
      sTexto = sTexto.substring(sTexto.indexOf(
        sTextoBuscado)+sTextoBuscado.length(),sTexto.length());
      contador++; 
}
```

