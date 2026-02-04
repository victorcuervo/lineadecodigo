---
title: "Screen Scraping con Java"
description: "Mediante técnicas de screen scraping con Java podremos recuperar el contenido de una página web de forma automática, simulando ser un usuario."
date: 2016-04-05
updatedDate: 2026-01-09
tags: ["try-catch","innerhtml","jaunt","useragent"]
slug: java/librerias/screen-scraping-con-java
type: doc
topic: java
id: 2c8a9dfb-adca-8114-9091-d78561b388a7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/external/jaunt/ScreenScraping.java
---

El concepto de screen scrapping es el de obtener la información de una web y manipularla como si fuese un usuario, pero de forma automática por una máquina. En este artículo vamos a ver cómo podemos hacer screen scrapping con [Java](https://www.manualweb.net/java/). Lo primero que deberemos de conocer es que nos vamos a apoyar en la [librería Jaunt](http://jaunt-api.com/) para poder hacer el screen scrapping con [Java](https://www.manualweb.net/java/). Jaunt lo primero define una clase `UserAgent` que es la que simula el agente de usuario o navegador. Así que lo primero será crear dicha clase.


```java
UserAgent userAgent = new UserAgent();
```


Lo siguiente será indicarle la página que quiere cargar. Así que vamos a cargar a nuestra página hermana [Manual Web](http://www.manualweb.net/). Para ello nos apoyamos en el método `.visit()`.


```java
userAgent.visit("http://manualweb.net");
```


Es importante saber que una vez cargada la página tendremos toda la información relativa a ella en el objeto.


```java
userAgent.doc
```


Si queremos volcar el resultado de hacer el screen scraping con [Java](https://www.manualweb.net/java/) deberemos de utilizar el método `.innerHTML()` y así podremos presentarlo por pantalla.


```java
System.out.println(userAgent.doc.innerHTML());
```


Es importante saber que durante la ejecución de los métodos de Jaunt se puede producir la excepción `ResponseException`, así que deberemos integrarlo todo dentro de un bloque `try-catch`.


```java
try {
  UserAgent userAgent = new UserAgent();
  userAgent.visit("http://manualweb.net");						
  System.out.println(userAgent.doc.innerHTML());			
} catch (ResponseException re) {
  re.printStackTrace();
} 
```


Y ya habremos conseguido realizar nuestro screen scraping con [Java](https://www.manualweb.net/java/).

