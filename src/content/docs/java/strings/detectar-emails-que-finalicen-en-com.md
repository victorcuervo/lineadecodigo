---
title: "Detectar emails que finalicen en .com"
description: "Ejemplo de código en Java para detectar emails que finalicen en .com utilizando un bucle for-each."
date: 2010-03-23
updatedDate: 2026-01-09
tags: ["email","array","string","bucles","for-each"]
slug: java/strings/detectar-emails-que-finalicen-en-com
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81f4-9fb1-cd83e2b0b94b
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/EmailsAcabadosEnDotCom.java
---

En este ejemplo vamos a ver como, dada una lista de emails, podemos detectar mediante el lenguaje [Java](https://www.manualweb.net/java/) cual de ellos corresponden a direcciones .com Lo primero que haremos será definir un array con los emails.


```java
String emails[] = {"julio@gmail.com","maria@red.es","lucia@hotmail.com","javi@email.it"};
```


Aunque hay varias formas para resolver el ejemplo. En nuestro caso, para sacar por pantalla aquellos que acaban en ".com", vamos a ayudarnos del método [.EndsWith()](https://www.w3api.com/Java/String/.endsWith()) de [Java](https://www.manualweb.net/java/). Dicho método chequea que una cadena de caracteres termina de una forma o de otra. Aquí validaremos aquellos emails que acaben en ".com":


```java
if (email.endsWith(".com"))
  System.out.println(email);
```


Solo tenemos que hacer esta comprobación [recorriendo el array](http://lineadecodigo.com/java/listar-elementos-de-un-array/). Usamos un [bucle for-each](http://lineadecodigo.com/java/bucle-for-each-en-java/) para tal cometido.


```java
for (String email: emails)
  if (email.endsWith(".com"))
    System.out.println(email);
```


Algo muy sencillo y útil.

