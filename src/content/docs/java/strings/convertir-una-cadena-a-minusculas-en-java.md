---
title: "Convertir una cadena a minúsculas en Java"
description: "Uso de los métodos de la clase String para poder convertir una cadena a minúsculas en Java."
date: 2007-08-06
updatedDate: 2026-01-11
tags: ["string","tolowercase","locale"]
slug: java/strings/convertir-una-cadena-a-minusculas-en-java
type: doc
topic: java
id: bfdebb3e-4658-45d9-84ae-da70a6f6edc2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/ConvertirAMinusculas.java
---

Muchas veces nos surge la necesidad de transformar cadenas de texto. Esto se debe a que las suele introducir el usuario o nos las envían sistemas terceros de los cuales desconocemos su formato.


## Método toLowerCase()


Uno de los métodos que nos ofrece el API [Java](https://www.manualweb.net/java/) para poder tratar estas cadenas es [.toLowerCase()](https://www.w3api.com/Java/String/.toLowerCase(), que aplicado sobre una cadena de texto la transforma en minúsculas. Es por ello que el código a utilizar sea muy sencillo.


```java
String cadena = "HOLA MUNDO";
String minusculas = cadena.toLowerCase();
System.out.println(minusculas); // Imprime: hola mundo
```


## Variante con Locale


El método tiene una variante que nos permite jugar con el [Locale](https://www.w3api.com/Java/Locale/), ya que si no le indicamos nada se convertirá utilizando el Locale por defecto de la máquina donde se ejecute el código.


```java
String cadena = "HOLA";
String minusculas = cadena.toLowerCase(Locale.ENGLISH);
```

