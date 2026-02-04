---
title: "Enlaces de una web con Java"
description: "Se explica cómo recuperar enlaces de una web con Java utilizando la librería Jaunt para el screen scraping."
date: 2016-04-25
updatedDate: 2026-01-11
tags: ["html","a","href","try-catch","exception","jaunt"]
slug: java/librerias/enlaces-de-una-web-con-java
type: doc
topic: java
id: abc63915-c825-43fd-9186-9cfe7d97d614
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/external/jaunt/ExtraerEnlaces.java
---

En el ejemplo de hoy vamos a utilizar [la librería Jaunt](http://jaunt-api.com/) para poder recuperar los enlaces de una web con [Java](https://www.manualweb.net/java/). La idea del ejemplo es utilizar técnicas de screen scraping para poder recuperar una web y analizar su estructura. En este caso en el análisis de la estructura recuperaremos todos los elementos anchor que contenga.


## Importar la librería Jaunt


Lo primero de todo será importar [la librería Jaunt](http://jaunt-api.com/).


```java
import com.jaunt.*;
```


## Conectar con la web


La base de la librería es la clase `UserAgent` la cual simula al agente de usuario o navegador. Mediante esta clase y el método `.visit()` habremos conseguido establecer conexión con la web de destino.


```java
UserAgent userAgent = new UserAgent();
userAgent.visit("[http://www.lineadecodigo.com](http://www.lineadecodigo.com/)");
```


## Buscar elementos HTML


Una vez tenemos la estructura de la página a analizar vamos a apoyarnos en el método `findEvery()` para indicarle un tipo de elemento [HTML](https://www.manualweb.net/html/), en este caso el [anchor](https://www.w3api.com/HTML/a/). Es importante ver que el método lo ejecutamos sobre el objeto `UserAgent.doc` que es el que contiene la página cargada.


```java
Elements enlaces = userAgent.doc.findEvery("<a>");
```


## Recorrer los enlaces


Los elementos [HTML](https://www.manualweb.net/html/) resultado quedan en una colección `Elements`. Ya solo nos queda recorrer la colección de elementos. Por cada elemento vamos a recuperar su [atributo href](https://www.w3api.com/HTML/a/href/). Para ello nos apoyamos en el método `.getAt()` con el nombre del atributo como parámetro.


```java
for (Element enlace:enlaces)
    System.out.println(enlace.getAt("href"));
```


## Manejo de excepciones


Vemos que cada elemento [HTML](https://www.manualweb.net/html/) es representado mediante la clase `Element`. Hay que tener cuidado a la hora de manipular los elementos ya que se puede lanzar la excepción `JauntException`. Así que deberemos de realizar el pertinente control con una estructura `try-catch`.


```java
try {
    UserAgent userAgent = new UserAgent();
    userAgent.visit("[http://www.lineadecodigo.com](http://www.lineadecodigo.com/)");
    Elements enlaces = userAgent.doc.findEvery("<a>");
    
    for (Element enlace:enlaces)
        System.out.println(enlace.getAt("href"));
        
} catch (JauntException e) {
    e.printStackTrace();
}
```


De esta forma hemos conseguido recuperar los enlaces de una web con [Java](https://www.manualweb.net/java/) y [la librería Jaunt](http://jaunt-api.com/).

