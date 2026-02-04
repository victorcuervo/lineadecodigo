---
title: "Lectura de datos en Java con Scanner"
description: "La lectura de datos en Java con Scanner permite capturar entradas del usuario de forma sencilla utilizando bucles."
date: 2009-01-01
updatedDate: 2026-01-08
tags: ["scanner","inputstream","string","next","input","do-while","java-io","console"]
slug: java/basicos/lectura-de-datos-en-java-con-scanner
type: doc
topic: java
id: 2e1d2c49-0e2e-49a9-8332-39380ade188f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/LecturaConsolaScanner.java
---

Como bien me ha recordado mi amigo Jose Ignacio y [algún comentario de nuestros lectores](http://lineadecodigo.com/2008/12/30/multiplicar-dos-numeros-con-java/#45790), desde Java 1.5 disponemos de la clase [Scanner](https://www.w3api.com/Java/Scanner/next/). La cual nos va a ayudar a leer los datos de una forma más sencilla que el habitual manejo de [InputStream](https://www.w3api.com/Java/InputStream-java-io/ ""InputStream"), véase [Lectura de datos por Consola con Java](http://lineadecodigo.com/2006/12/16/lectura-de-datos-por-consola-en-java/). La utilización de la clase [Scanner](https://www.w3api.com/Java/Scanner/next/) es muy sencilla. Lo primero que tenemos que hacer es declarar un objeto [Scanner](https://www.w3api.com/Java/Scanner/next/) instanciándolo contra la consola, es decir, contra el objeto System.in


```java
Scanner reader = new Scanner(System.in);
```


Ahora, para leer lo que el usuario está introduciendo por la consola deberemos de utilizar el método [.next](https://www.w3api.com/Java/Scanner/next/.next()). Este nos devolverá los caracteres que encuentre en la consola hasta encontrarse un retorno de carro y salto de línea. El valor se lo asignaremos a una variable [String](https://www.w3api.com/Java/String/).


```java
String sTexto = reader.next();
```


Para complicar un poco nuestro ejemplo, vamos a hacer eco de las palabras recibidas hasta que el usuario teclee "FIN". Es por ello que utilizamos un bucle do-while. El código nos quedará de la siguiente forma:


```java
do {
 sTexto = reader.next();
 System.out.println(sTexto); 
} while(!sTexto.equals("FIN"));
```


Importante es que te acuerdes que es necesaria la librería java.util para que todo funcione. Así al principio del programa incluiremos:


```java
import java.util.Scanner;
```

