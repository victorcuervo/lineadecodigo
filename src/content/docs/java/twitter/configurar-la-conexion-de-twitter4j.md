---
title: "Configurar la conexión de Twitter4j"
description: "Explicación de cómo podemos trabajar para poder configurar la conexión de Twitter4j mediante código y sin utilizar un fichero de propiedades."
date: 2021-02-02
updatedDate: 2026-01-09
tags: ["twitter4j","twitter","twitterfactory"]
slug: java/twitter/configurar-la-conexion-de-twitter4j
author: victor_cuervo
type: doc
topic: java
id: 2c8a9dfb-adca-819d-92ba-ed298d35b847
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/twitter/ConectarTwitterConfig.java
---

Ya [hemos visto varios artículos en los cuales manejábamos la librería Twitter4j](http://lineadecodigo.com/tag/java-twitter4j/), la cual nos sirve para poder utilizar [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) desde [Java](http://www.manualweb.net/java). En todos estos ejemplos por simplicidad utilizábamos un fichero de propiedades para realizar la conexión. En este artículo vamos a ver **cómo podemos configurar la conexión de Twitter4j directamente desde el código fuente** y no necesitar de este fichero de propiedades. Y es que hasta ahora, cuando creábamos una instancia de la clase `Twitter` se producía la magia y se realizaba la conexión.


```java
Twitter twitter = new TwitterFactory().getInstance();
```


Ya que lee de manera transparente ese fichero **twitter4j.properties** para realizar la conexión con [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/). En este caso vamos a ver otra opción que es crear un objeto del tipo `ConfigurationBuilder` para configurar la conexión de Twitter4j.


```java
ConfigurationBuilder cb = new ConfigurationBuilder();
```


Mediante la clase `ConfigurationBuilder` podemos ir configurando las 4 propiedades necesarias para la conexión de nuestro código [Java](http://www.manualweb.net/java) con [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/). - **OAuth Consumer Key**, la clave del cliente que indicaremos mediante el método `.setOAuthConsumerKey()`

- **OAuth Consumer Secret**, el secreto del cliente que indicaremos mediante el método `.setOAuthConsumerSecret()`
- **OAuth Access Token**, el token de acceso que indicaremos mediante el método `.setOAuthAccessToken()`
- **OAUth Access Token Secret**, el secreto del token, que indicaremos mediante el método `.setOAuthAccessTokenSecret()`

De esta manera el código nos quedará de la siguiente forma:


```java
cb.setOAuthConsumerKey("bwMEjAH340")
  .setOAuthConsumerSecret("nYnIMrqk5QYjguY3BH4CS8yoUPb8VdJz")
  .setOAuthAccessToken("VmtrDacTJUl1M7lUyRAzL7BaqVCOVotr")
  .setOAuthAccessTokenSecret("tM6CfOKzfUbWpXY5QqGWDnN0aHDtyS");
```


> Para podernos conectar a [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) con [Java](http://www.manualweb.net/java/) vamos a necesitar el tener una aplicación creada en [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/). Es por ello que si no tienes una puedes crearla en tu perfil de [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) desde la URL [https://developer.twitter.com/en/apps/.](https://developer.twitter.com/en/apps/)


Solo nos quedará hacer una cosa y es pasar esta configuración a la conexión. Para ello invocaremos al método `.build()` del configurador y se lo pasaremos a la factoría `TwitterFactory`.


```java
Twitter twitter = new TwitterFactory(cb.build()).getInstance();
```


De esta manera ya tenemos definida e implementada la forma de configurar la conexión de Twitter4j desde nuestra aplicación [Java](http://www.manualweb.net/java/).

