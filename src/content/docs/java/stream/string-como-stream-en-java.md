---
title: "String como Stream en Java"
description: "Se explica cómo utilizar un String como Stream en Java para facilitar su manipulación y filtrado de caracteres."
date: 2016-03-20
updatedDate: 2026-01-08
tags: ["string","stream","chars","foreach","filter","parallel"]
slug: java/stream/string-como-stream-en-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/stream/CadenaComoStream.java
topic: java

---

Desde que aparecieron los Stream en [Java 8](https://www.manualweb.net/java/) tenemos la capacidad de trabajar con muchos elementos como si fueran Stream. Esto se utiliza principalmente en [Java](https://www.manualweb.net/java/) para las Colecciones, pero podemos aplicarlo a otros elementos como Ficheros e incluso sobre una cadena de texto. Para poder tratar un String como Stream en [Java](https://www.manualweb.net/java/) necesitamos invocar al método `.chars()`. Dicho método nos devolverá el Stream desde una cadena de texto.


```java
String sCadena = "Esto es una cadena de texto";
sCadena.chars();
```


Una vez que tenemos el Stream podemos empezar a realizar operaciones sobre él. La más sencilla es volcar el contenido de la cadena de texto. Para ello utilizaremos la operación `.forEach()`.


```java
sCadena.chars()
	    	.forEach(c -> System.out.print(Character.toString((char) c)));
```


Vemos que el método `.forEach()` realiza manipulación de carácter a carácter. De esa forma habremos volcado el contenido por pantalla. Otra cosa que podemos hacer es filtrar algunos caracteres. Para ello tenemos el método `.filter()`. Por ejemplo podemos filtrar aquellos caracteres que sean 'a'. 


```java
sCadena.chars()
    	.filter(c -> c!='a')
    	.forEach(c -> System.out.print(Character.toString((char) c)));
```


Y por último podríamos procesar el Stream de forma paralela. En este caso tenemos el método `.parallel()`.


```java
sCadena.chars()
	    	.parallel()
	    	.forEach(c -> System.out.print(Character.toString((char) c)));
```


Si bien, el procesamiento en paralelo, no nos va a asegurar la secuencialidad en el tratamiento de los caracteres de la cadena. Devolviendo en su salida por consola una secuencia como esta:


```java
na ddeaexto teo estE s nacu
```


Cómo podéis comprobar, las posibilidades con los Stream y una sencilla cadena de texto son muy amplias. Ahora que ya sabes manejar un String como Stream en Java, solo te quedar probar a ti.

