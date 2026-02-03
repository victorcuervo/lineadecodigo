---
title: "Evitar que un programa Java se cargue dos veces"
description: "Se explica cómo evitar que un programa Java se cargue dos veces utilizando un ServerSocket para reservar un puerto."
date: 2012-02-22
updatedDate: 2026-01-10
tags: ["java-net","serversocket","javawebstart"]
slug: java/redes/evitar-que-un-programa-java-se-cargue-dos-veces
author: victor_cuervo
type: doc
topic: java
id: 01fb2d24-8707-4ee8-a492-f95c2d5fe38c
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/UnaInstancia.java
---

Algunos de vosotros nos habéis preguntado sobre cómo controlar que un programa [Java](https://www.manualweb.net/java/) se cargue dos veces. Es decir, que si ya lo hemos lanzado, evitemos que se vuelva a lanzar. Existen formas desde Java Web Start y el modo SingleInstanceService para evitar que un programa se cargue dos veces. Pero en nuestro caso vamos a realizarlo de una forma "más manual" en [Java](https://www.manualweb.net/java/), pero muy efectiva. El truco es que el programa [Java](https://www.manualweb.net/java/) cree un objeto que esté escuchando a un puerto específico del ordenador. Para ello utilizamos un ServerSocket, objeto que nos permite crear un objeto escuchando a un determinado puerto.


```java
private static ServerSocket SERVER_SOCKET;
SERVER_SOCKET = new ServerSocket(1334);
```


> Escoge un puerto que no sea el estándar de los protocolos: 80 para el http, 21 para el ftp,... Vamos elige un número de puerto "raro".


Además vemos que el objeto ServerSocket que hemos instanciado es un objeto estático dentro de nuestro programa. Así, nuestro programa tendrá un listener sobre un puerto, al que nadie dirá nada, pero que lo dejará como reservado. Lo que sucede es que si intentamos volver a crear un escuchador sobre ese puerto, saldrá una excepción indicando que el puerto ya está en uso. Esto nos permite controlar que ya hay una instancia de nuestro programa ejecutándose.


```java
try {
  SERVER_SOCKET = new ServerSocket(1334);
  System.out.println("Es la primera instancia de la aplicación...");
  System.out.println("Pulsa OK para terminar");
  System.in.read();
} catch (IOException x) {
  System.out.println("Otra instancia de la aplicación se está ejecutando...");
}
```


Con este simple código podemos evitar que un programa [Java](https://www.manualweb.net/java/) se ejecute dos veces.

