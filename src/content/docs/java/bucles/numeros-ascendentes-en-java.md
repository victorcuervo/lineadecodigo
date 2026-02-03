---
title: "Números ascendentes en Java"
description: "Uso de un bucle for para poder crear una lista de números ascendentes en Java."
date: 2007-01-14
updatedDate: 2026-01-09
tags: ["bucles","for","println"]
slug: java/bucles/numeros-ascendentes-en-java
author: victor_cuervo
type: doc
id: 86f295ea-fa0f-41d8-904a-9756bb49e149
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumerosAscendentes.java
---

Mediante este ejemplo se busca como conseguir una lista de números ascendentes, partiendo del 1, mediante el lenguaje de programación [Java](https://www.manualweb.net/java/). Este ejemplo nos enseñará el uso básico de los bucles dentro de [Java](https://www.manualweb.net/java/). Lo primero que tenemos que hacer es crear una clase [Java](https://www.manualweb.net/java/) con un método main. Dentro de este método será donde codifiquemos nuestro ejemplo.


```java
public class NumerosAscendente {

	public static void main(String[] args) {

	}
}
```


Para poder generar los número ascendentes nos vamos a apoyar en un bucle for. La estructura del bucle for es la siguiente:


```java
for (incialización,condición,incremento){...}
```


Es por ello que si queremos sacar los 100 primeros números de forma ascendente la incialización deberá de ser a 1 y la condición se cumplirá cuando llegue a 100. El bucle for nos quedará de la siguiente forma:


```java
for (int x=1;x<=100;x++){...}
```


Dentro del bucle deberemos de volcar el número a pantalla. En este caso nos apoyamos en la clase System.out y en su método .println(texto). Quedándonos finalmente el siguiente código:


```java
for (int x=1;x<=100;x++){
	System.out.println(x);
}
```


Como podemos ver es un código muy sencillo para poder crear una lista de números ascendentes en [Java](https://www.manualweb.net/java/).

