---
title: "Crear objeto JSON con GSON"
description: "Crear objeto JSON con GSON nos explica cómo utilizar esta libreria para poder convertir un sencillo objeto Java en un objeto JSON."
date: 2020-04-11
updatedDate: 2026-01-11
tags: ["json","maven","clase","objeto"]
slug: java/json/crear-objeto-json-con-gson
author: victor_cuervo
type: doc
topic: java
id: b0a40eac-caf8-4d58-af82-fa3283b465cd
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/json/ObjetoJSONGson.java
---

Una de las librerías [Java](http://www.manualweb.net/java) que nos ayuda a [manipular de una forma sencilla los objetos JSON](http://lineadecodigo.com/tag/java-json/) es [GSON](https://github.com/google/gson). Así que en este ejemplo vamos a ver cómo podemos crear objeto JSON con [GSON](https://github.com/google/gson).


## Importar la librería GSON


Lo primero será importar la librería [GSON](https://github.com/google/gson) dentro de nuestro programa.


```java
import [com.google](http://com.google/).gson.Gson;
```


## Descargar GSON desde Maven


Si bien deberíamos habernos descargado la librería [GSON](https://github.com/google/gson) para poder utilizarla. Para ello [podéis ir al repositorio de Maven y descargar el fichero .jar](https://search.maven.org/artifact/com.google.code.gson/gson/2.8.6/jar). Aunque lo suyo sería descargarla directamente de Maven mediante nuestro [fichero pom.xml](https://github.com/victorcuervo/lineadecodigo_java/blob/master/pom.xml) para ello simplemente tendréis que añadir la siguiente entrada indicando la librería, el artefacto y la versión que queremos utilizar. En nuestro caso vamos a utilizar la librería GSON 2.8.6.


```xml
<dependency>
    <groupId>[com.google](http://com.google/).code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.8.6</version>
</dependency>
```


## Crear un objeto Gson


Ahora que ya contamos con la librería [GSON](https://github.com/google/gson) vamos a crear un objeto `Gson`.


```java
Gson gson = new Gson();
```


## Crear una clase Java


Este será el objeto que nos permitirá convertir un objeto [Java](http://www.manualweb.net/java) en un objeto JSON. Pero lo primero que necesitamos será un objeto [Java](http://www.manualweb.net/java). Así que vamos a crear una sencilla clase que represente a una persona:


```java
class Persona {
    private String nombre;
    private int edad;
    
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
```


## Instanciar el objeto


Y la vamos a instanciar:


```java
Persona persona = new Persona("Juan", 30);
```


## Convertir a JSON


Este objeto persona será el que convirtamos a JSON. Para ello vamos a utilizar el método `.toJson()` del objeto `Gson`, a dicho método le pasamos el objeto persona como parámetro.


```java
String json = gson.toJson(persona);
System.out.println(json);
```


## Resultado


De esta manera habremos conseguido crear objeto JSON con [GSON](https://github.com/google/gson) obteniendo el siguiente resultado:


```json
{"nombre":"Juan","edad":30}
```

