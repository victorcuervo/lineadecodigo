---
title: "Lectura de caracteres por consola en Java"
description: "Uso de la clase System.in para poder realizar una lectura de caracteres por consola en Java."
date: 2007-04-06
updatedDate: 2026-02-04
tags: ["java-io","ioexception","java-system","read","ascii","casting","inputstream","while","bucles"]
slug: java/basicos/lectura-de-caracteres-por-consola-en-java
type: doc
topic: java
id: 7086dd24-a5c8-4786-b8f7-0835ef658515
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/LecturaDatosConsola.java
---

La idea de este ejemplo es simple. Consiste en realizar una lectura de un caracteres por consola en [Java](https://www.manualweb.net/java/). Posteriormente mostraremos, nuevamente por la consola, los caracteres leídos. Esto lo podríamos hacer apoyándonos sobre las librerías de streaming de [Java](https://www.manualweb.net/java/). Pero con este simple código podremos leer de la consola sin tener mucho conocimiento. Lo primero que tendremos que hacer es crear una aplicación [Java](https://www.manualweb.net/java/) de consola. Para ello simplemente necesitaremos de una clase y un método main. Por ejemplo:


```java
public class LecturaCaracterConsola {
  public static void main(String[] args) throws IOException {
  }
}
```


La lectura se realiza mediante el método [System.in.read()](https://w3api.com/Java/InputStream-java-io/read/), el cual nos devolverá un número entero que es el ASCII del carácter introducido por teclado. Lo que haremos será leer dentro de un bucle, hasta que el carácter que leamos por el teclado sea el "13". El código "13" representa el salto de línea, el cual, precedido del "10" (retorno de carro), nos indica que el usuario ha pulsado la tecla de "intro".


```java
while (caracter!=13) {
	caracter = System.in.read();
	System.out.print((char)caracter);
}
```


Hay que fijarse que al volcar a la pantalla hemos hecho un "casting" del número para mostrar la representación ASCII. Esto lo conseguimos poniendo (char) antes de la variable.


```java
System.out.print((char)caracter);
```


Lo único que nos quedará es controlar la [excepción IOException](https://www.w3api.com/Java/IOException/). Dada la sencillez del ejemplo, simplemente nos limitaremos a lanzarla desde el método main.

