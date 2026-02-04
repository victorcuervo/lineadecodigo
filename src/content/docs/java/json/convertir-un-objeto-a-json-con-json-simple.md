---
title: "Convertir un objeto a JSON con JSON-Simple"
description: "Mediante la clase Jsoner podremos convertir un objeto a JSON con JSON-Simple mediante una simple instrucción de código fuente."
date: 2020-09-11
updatedDate: 2026-01-09
tags: ["json","json-simple","jsoner","serialize"]
slug: java/json/convertir-un-objeto-a-json-con-json-simple
type: doc
topic: java
id: ea4ac070-c8b8-407c-a1ec-edcbd381619b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/json/ObjetoJSON.java
---

Ya hemos visto lo sencillo que es [manejar la librería JSON-Simple a la hora de crear un objeto JSON](http://lineadecodigo.com/java/crear-objeto-json-con-json-simple/). Ahora vamos a ver cómo podemos convertir un objeto a [JSON](http://lineadecodigo.com/tag/java-json/) con [JSON-Simple](http://lineadecodigo.com/tag/java-json/). Esto nos va a ser útil en situaciones en las cuales tengamos que enviar este [JSON](http://lineadecodigo.com/tag/java-json/) por ejemplo a otro servicio, lo normal será a un REST, de tal manera que trabajemos con objetos y sus correspondientes métodos la lógica de negocio de nuestra aplicación, vayamos manipulando los datos que necesitemos y lo convirtamos a [JSON](http://lineadecodigo.com/tag/java-json/) solamente en el momento de invocar a los servicios REST que necesiten del formato [JSON](http://lineadecodigo.com/tag/java-json/). Lo primero que haremos será incluir la librería [JSON-Simple](https://cliftonlabs.github.io/json-simple/) mantenida por [Clifton Labs](https://cliftonlabs.com/) dentro de nuestras dependencias Maven. Para ello lo que vamos es a modificar nuestro fichero **pom.xml** con el siguiente contenido.


```xml
<dependency>
  <groupId>com.github.cliftonlabs</groupId>
  <artifactId>json-simple</artifactId>
  <version>3.1.0</version>
</dependency>
```


Y al principio del programa importaremos la librería. En este caso, en concreto será la clase `Jsoner`.


```java
import com.github.cliftonlabs.json_simple.Jsoner;
```


Como lo que vamos a hacer es convertir un objeto a [JSON](http://lineadecodigo.com/tag/java-json/) con [JSON-Simple](http://lineadecodigo.com/tag/java-json/) lo primero que necesitaremos será tener un objeto. Para ello nos [definimos una sencilla clase persona](https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/base/Persona.java) que contenga un nombre y una edad.


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


E instanciaremos un objeto de esta clase:


```java
Persona persona = new Persona("Mari Cielo",22);
```


Ahora vamos a utilizar la clase `Jsoner` de [JSON-Simple](http://lineadecodigo.com/tag/java-json/). Esta clase tiene un método estático, que no necesita instanciación de la clase, que nos permite convertir un objeto a [JSON](http://lineadecodigo.com/tag/java-json/). El método en concreto es `.serialize()`. Este método recibe como parámetro el objeto que acabamos de crear.


```java
Jsoner.serialize(persona);
```


Lo que nos devuelve es una cadena, la cual podemos simplemente mostrar por pantalla.


```java
System.out.println(Jsoner.serialize(alumno));
```


De esta forma tan sencilla hemos conseguido el convertir un objeto a [JSON](http://lineadecodigo.com/tag/java-json/) con [JSON-Simple](http://lineadecodigo.com/tag/java-json/) de una forma sencilla y mediante una única sentencia dentro de nuestro código fuente. ¿Qué más cosas se te ocurre hacer con un objeto [JSON](http://lineadecodigo.com/tag/java-json/) para probar la librería [JSON-Simple](http://lineadecodigo.com/tag/java-json/)?

