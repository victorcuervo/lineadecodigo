---
title: "Información de Usuario Twitter con Java"
description: "Pasos que tenemos que dar para poder extraer la información de usuario twitter con Java mediante la librería Twitter4j."
lastUpdated: 2025-12-22
slug: java/informacion-de-usuario-twitter-con-java
author: Víctor Cuervo
---

Ya hemos visto algunos artículos del [uso de Twitter4j para poder conectarnos a Twitter](http://lineadecodigo.com/java/conectarse-a-twitter-con-java/) y para [poder enviar un Tweet](http://lineadecodigo.com/java/enviar-tweet-con-java/). En el artículo de hoy vamos a ver **cómo podemos obtener información de usuario Twitter con** [**Java**](http://www.manualweb.net/java). Lo primero será conectarnos a Twitter mediante [la librería Twitter4j](http://twitter4j.org/en/). Para ello deberemos de incluirla en nuestras dependencias para poder utilizarla. Así nuestro fichero **pom.xml** quedaría de la siguiente forma.


```xml
<dependencies>
  <dependency>
    <groupId>org.twitter4j</groupId>
    <artifactId>twitter4j-core</artifactId>
    <version>4.0.7</version>
    <scope>compile</scope>
  </dependency>
</depedencies>
```


En nuestra clase [Java](http://www.manualweb.net/java) deberemos de importar la librería.


```java
import twitter4j.*;
```


Lo primero será conectarse a Twitter, para ello utilizamos la factoría `TwitterFactory`. De la factoría obtenemos una instancia mediante el método `.getInstance()`. Así tendremos una instancia de tipo `Twitter`.


```java
Twitter twitter = new TwitterFactory().getInstance();
```


La pregunta es ¿solo necesitamos invocar a la instancia `TwitterFactory.getInstance()` para realizar la conexión? ¿Dónde están los datos de la conexión? La respuesta es NO. Además de la instanciación deberemos de crear un fichero **twitter.properties** con la siguiente información:


```java
debug=false
oauth.consumerKey=bwMEjAH340
oauth.consumerSecret=nYnIMrqk5QYjguY3BH4CS8yoUPb8VdJz
oauth.accessToken=VmtrDacTJUl1M7lUyRAzL7BaqVCOVotr
oauth.accessTokenSecret=tM6CfOKzfUbWpXY5QqGWDnN0aHDtySL6
```


Este fichero deberá de esta en la raíz del classpath. > Puedes ver cómo configurar las propiedades de conexión en [Conectarse a Twitter con Java](http://lineadecodigo.com/java/conectarse-a-twitter-con-java/).


Lo siguiente será definir el nombre del usuario del que queremos recuperar la información.


```java
String username = "lineadecodigo";
User usuario = twitter.showUser(username);
```


Esto lo conseguimos mediante el método `.showUser()` que nos devuelve un objeto de tipo `User`. Ahora veremos que información tenemos del usuario. Entre los datos podemos ver que se puede extraer: - **Nombre**, nombre del usuario que lo conseguiremos con el método `.getName()`

- **Descripción**, descripción del usuario, que lo conseguiremos con el método `.getDescription()`
- **Id**, id del usuario, que lo conseguiremos con el método `.getId()`
- **Followers**, número de seguidores del usuario, que lo conseguiremos con el método `.getFollowersCount()`

El código quedará de la siguiente forma:


```java
System.out.println("Nombre: " + usuario.getName());
System.out.println("Descripcion: " + usuario.getDescription());
System.out.println("Id Usuario: " + usuario.getId());
System.out.println("Número Seguidores: " + usuario.getFollowersCount());
```


De esta forma ya habremos conseguido extraer la información de Usuario Twitter con [Java](http://www.manualweb.net/java).

