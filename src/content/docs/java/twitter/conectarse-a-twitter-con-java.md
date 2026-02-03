---
title: "Conectarse a Twitter con Java"
description: "Cómo utilizar la librería Twitter4j y los mecanismos de conexión de OAuth (token y clave) para conectarse a Twitter con Java y poder enviar tweets."
date: 2019-10-14
updatedDate: 2026-01-09
tags: ["twitter","maven","api","properties","twitter4j","oauth","twitterfactory","verifycredentials"]
slug: java/twitter/conectarse-a-twitter-con-java
author: victor_cuervo
type: doc
topic: java
id: 4ccca489-7bba-4628-a422-afadec9f1f92
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/twitter/ConectarTwitter.java
---

En el artículo [usando la API de Twitter4j en Java](http://lineadecodigo.com/java/usando-la-api-de-twitter4j-en-java/), nuestro compañero [Pablo Ruiz](https://www.linkedin.com/in/pabloruizfaundez/) nos explicaba cómo conectarse a [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) con [Java](http://www.manualweb.net/java/). Si bien, los nuevos mecanismos de conexión de [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) han hecho que la [librería Twitter4j](http://twitter4j.org/en/) haya evolucionado y cambiado su forma de utilizarse. Es por ello que vamos a ver las nuevas formas que tenemos para conectarnos a [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) con [Java](http://www.manualweb.net/java/). Lo primero que tenemos que hacer es importarnos la [librería Twitter4j](http://twitter4j.org/en/) y qué mejor mecanismo que **hacerlo vía Maven**.


```xml
<dependency>
    <groupId>org.twitter4j</groupId>
    <artifactId>twitter4j-core</artifactId>
    <version>4.0.7</version>
</dependency>
```


En este caso vamos a utilizar la última versión estable que hay en este momento que es **Twitter4j 4.07**. Lógicamente lo que tenemos que hacer es importar la librería nada más empezar nuestro código.


```java
import twitter4j.*;
```


Para podernos conectar a [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) con [Java](http://www.manualweb.net/java/) vamos a necesitar el tener una aplicación creada en [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/). Es por ello que si no tienes una puedes crearla en tu perfil de [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) desde la URL [https://developer.twitter.com/en/apps/](https://developer.twitter.com/en/apps/).


Al crear tu aplicación en [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) vas a tener unas **claves y tokens de conexión OAuth** que vas a necesitar para poder conectarte desde el código Java. Estos valores son:

- API Key
- API Secret Key
- Access Token
- Access Secret Token

Todos ellos los encontraras en los detalles de tu aplicación de [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/). Así que lo primero que tendremos que hacer es crear **un fichero que llamaremos twitter4j.properties** con estos valores.


```javascript
debug=true
oauth.consumerKey=*********************
oauth.consumerSecret=******************************************
oauth.accessToken=**************************************************
oauth.accessTokenSecret=******************************************
```


En él vemos que hemos volcado los valores de los token y las claves que nos había dado [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/). Además se pueden insertar otros parámetros de configuración como `debug` que nos permitirá depurar la conexión desde nuestro código.


> El fichero [_twitter4j.properties_](http://twitter4j.properties/) deberá de estar en el directorio raíz del classpath y que lo cargará el programa automáticamente.


Una vez que tenemos el fichero de configuración vamos a crear una clase `Twitter` que será la que contenga la conexión, para ello nos apoyamos en una factoría `TwitterFactory()` para pedirle una instancia.


```java
Twitter twitter = TwitterFactory.getSingleton();
```


Una vez que estamos conectados a [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) vamos a confirmar las credenciales que le hemos pasado, las cuales nos devolverán información de nuestro usuario. Esto lo hacemos mediante el método `.verifyCredentials()`


```java
User usuario = twitter.verifyCredentials();
```


Por último podremos volcar por consola la información de nuestro usuario que nos ha devuelto la verificación del mismo. Esta información incluye datos del usuario como el nombre, usuario, descripción, URL de la foto de perfil, número de seguidores, lista de seguidores,...


```java
System.out.println("Nombre: " + usuario.getName());
System.out.println("Descripcion: " + usuario.getDescription());
System.out.println("Id Usuario: " + usuario.getId());
System.out.println("Número Seguidores: " + usuario.getFollowersCount());
```


De esta forma ya hemos visto lo que tenemos que hacer para conectarse a [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) con [Java](http://www.manualweb.net/java/). 

