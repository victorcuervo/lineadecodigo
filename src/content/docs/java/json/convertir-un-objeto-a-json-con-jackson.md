---
title: "Convertir un Objeto a JSON con Jackson"
description: "Se explica cómo convertir un objeto a JSON con Jackson utilizando la clase ObjectMapper y el método writeValueAsString."
date: 2020-11-21
updatedDate: 2026-01-09
tags: ["json","jackson","objectmapper","writevalueasstring"]
slug: java/json/convertir-un-objeto-a-json-con-jackson
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/json/ObjetoJSONJackson.java
topic: java

---

En los últimos artículos hemos visto [cómo podemos manejar objetos con JSON](http://lineadecodigo.com/tag/java-json/), principalmente con la [librería JSON-Simple](http://lineadecodigo.com/java/convertir-un-objeto-a-json-con-json-simple/) y la [librería GSON](http://lineadecodigo.com/java/crear-objeto-json-con-gson/). En este caso vamos a ver cómo podemos convertir un objeto a JSON con Jackson. Así podremos elegir cuál es la mejor de las dos librerías para poder trabajar con JSON en [Java](http://www.manualweb.net/java). El proyecto Jackson siempre ha sido conocido como la librería estándar para el manejo de ficheros JSON. Es un framework que está [soportado por la comunidad y que dispone de un portal en Github](https://github.com/FasterXML/jackson). Lo primero que tenemos que hacer es el descargar la librería Jackson. Para ello **insertamos las dependencias en nuestro fichero pom.xml de Maven**.


```xml
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-databind</artifactId>
  <version>2.10.3</version>
</dependency>
```


La clase principal que vamos a utilizar en la conversión de objetos es la clase `ObjectMapper`. Por lo tanto lo que haremos será importarla al principio de nuestro programa para poder utilizarla.


```java
import com.fasterxml.jackson.databind.ObjectMapper;
```


Como lo que vamos a hacer es convertir un objeto a JSON lo primero que necesitaremos será definir ese objeto. Para ello definiremos una sencilla clase `Persona` que contenga el nombre de una persona y su edad.


```java
public class Persona {
  
  String nombre;
  int edad;
  
  public Persona(){}
  
  public Persona(String nombre,int edad){
    this.nombre = nombre;
    this.edad = edad;
  }
  
  public int getEdad() {
    return edad;
  }
  public void setEdad(int edad) {
    this.edad = edad;
  }
  public String getNombre() {
    return nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
  

}
```


Así que instanciaremos un objeto de la clase `Persona` con datos específicos.


```java
Persona p = new Persona("Marta",34);
```


Una vez que ya tenemos el objeto que vamos a convertir a JSON es hora de ponernos manos a la obra con la librería Jackson. De la librería de Jackson lo que tenemos que saber es que el objeto que nos va a ayudar con la conversión es la clase `ObjectMapper`. Por lo tanto lo que haremos será instanciarlo.


```java
ObjectMapper mapper = new ObjectMapper();
```


Ahora nos vamos a apoyar en el método `.writeValueAsString()` que será el que reciba el objeto y nos devolverá una cadena [`String`](https://www.w3api.com/Java/String/). De esta manera ya tendremos convertido el objeto a un formato JSON. Ya solo nos quedará el volcarlo por consola para poder ver el resultado.


```java
String jsonStr = mapper.writeValueAsString(p);
System.out.println(jsonStr);
```


De esta forma habremos conseguido el convertir un Objeto a JSON con Jackson de una forma sencilla. ¿Qué os parece el uso de la librería Jackson? ¿Más o menos sencillo que utilizar JSON-Simple o GSON? ¿Cuál de las tres librerías utilizas o te gusta más?

