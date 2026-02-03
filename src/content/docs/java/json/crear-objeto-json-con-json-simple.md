---
title: "Crear objeto JSON con JSON-Simple"
description: "Explicación paso a paso de cómo podemos crear objeto JSON con JSON-Simple utilizando la clase JsonObject y los métodos .put()"
date: 2020-09-09
updatedDate: 2026-01-09
tags: ["Java JSON"]
slug: java/json/crear-objeto-json-con-json-simple
author: victor_cuervo
type: doc
topic: java
id: 687d04ba-06af-4907-a534-043807bc252c
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/json/CrearJSON.java
---

Existen [múltiples librerías para poder manipular contenido en JSON con Java](http://lineadecodigo.com/tag/java-json/) y ya hemos visto cómo podemos [crear objeto JSON con GSON](http://lineadecodigo.com/java/crear-objeto-json-con-gson/). En este caso vamos vamos a **crear objeto JSON con JSON-Simple** mediante código [Java](http://www.manualweb.net/java/). Así podremos comparar ambas librerías y ver cuál se adapta más a nuestras necesidades. [JSON-Simple](https://cliftonlabs.github.io/json-simple/) es una librería ligera que nos permite serializar y deserializar contenido en JSON. A día de hoy es mantenida por los [Clifton Labs](https://cliftonlabs.com/). Lo primero de todo será importar la librería **JSON-Simple**. Para ello lo que hemos hecho es **añadir una dependencia Maven en nuestro pom.xml**.


```xml
<dependency>
  <groupId>com.github.cliftonlabs</groupId>
  <artifactId>json-simple</artifactId>
  <version>3.1.0</version>
</dependency>
```


Dentro de nuestro código deberemos de realizar la importación de la clase `JsonObject` que es la que nos permitirá crear el objeto JSON.


```java
import com.github.cliftonlabs.json_simple.JsonObject;
```


Para crear objeto JSON con JSON-Simple deberemos de instanciar la clase `JsonObject`.


```java
JsonObject json = new JsonObject();
```


Ahora que ya tenemos el objeto lo que haremos será utilizar el método `.put()` para ir añadiendo propiedades al objeto JSON. El método `.put()` recibe como parámetro el nombre del atributo que queremos añadir al objeto y el valor de dicho atributo. De esta manera, si queremos añadir dos atributos con el nombre y edad de una persona lo podríamos hacer de la siguiente forma:


```java
json.put("name", "Víctor");
json.put("age", 42);
```


Podemos volcar por consola el contenido de nuestro objeto JSON en formato cadena mediante el método `.toString()` que también nos ofrece la clase JsonObject. De esta manera podremos comprobar que el objeto que vamos creando se hace de la forma correcta.


```java
System.out.println(json.toString());
```


El código completo de nuestro programa nos quedaría de la siguiente forma:


```java
public class CrearJSON {

  public static void main(String[] args) {
    
    JsonObject json = new JsonObject();
    json.put("name", "Víctor");
    json.put("age", 42);
        
    System.out.println(json.toString());

  }

}
```


Se puede comprobar que es muy sencillo crear objeto JSON con JSON-Simple desde código [Java](http://www.manualweb.net/java/).

