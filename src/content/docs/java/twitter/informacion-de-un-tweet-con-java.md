---
title: "Información de un Tweet con Java"
description: "Cómo utilizar la libería Twitter4j para extraer la información de un Tweet con Java y así obtener el texto y usuario del tweet."
date: 2021-02-22
updatedDate: 2026-01-09
tags: ["twitter4j","showstatus","getuser","gettext"]
slug: java/twitter/informacion-de-un-tweet-con-java
type: doc
topic: java
id: 2c8a9dfb-adca-816d-a11b-c6414fd7017f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/twitter/InformacionTweet.java
---

La librería Twitter4j nos puede facilitar de una forma sencilla extraer información de un Tweet con [Java](http://www.manualweb.net/java). De esta manera conseguiremos obtener dado un tweet el texto que lo compone así como del usuario que lo ha escrito. Para ello solo necesitaremos conocer el ID del tweet. Si cargais un tweet en el navegador vereis que tiene la siguiente estructura. El identificador es el número que va al final de la URL.


```text
https://twitter.com/lineadecodigo/status/1182894932480184322
```


Este URL es la correspondiente al siguiente tweet. https://twitter.com/lineadecodigo/status/1182894932480184322 Ahora pasamos a codificar nuestro programa. Para ello lo primero será [cargar la librería Twitter4j](http://lineadecodigo.com/java/conectarse-a-twitter-con-java/) en nuestro **pom.xml**


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


Una vez cargada la librería deberemos de instanciar el objeto `Twitter` mediante una `TwitterFactory`. Este proceso es el que realiza la conexión a [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/).


```java
Twitter twitter = new TwitterFactory().getInstance();
```


> Si quieres saber cómo configurar la conexión a [Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-twitter/) con Twitter4j no dejes de leer [Conectarse a Twitter con Java](http://lineadecodigo.com/java/conectarse-a-twitter-con-java/).


Una vez tenemos la instancia vamos a recuperar el tweet mediante su ID con el método `.showStatus()`, el cual recibe dicho ID como parámetro. Dejando la información en un objeto `Status`.


```java
Status status = twitter.showStatus(statusid);
```


De esta forma ya podemos acceder a los campos de tweet. 

- `.getUser().getScreenName()`, nos da el nombre del usuario que ha generado el tweet.
- `.getText()`, que nos da el texto del tweet.

```java
System.out.println("@" + status.getUser().getScreenName() + ", dice:  " + status.getText());
```


De esta forma ya habremos podido extraer información de un **Tweet con Java mediante la librería Twitter4j**.

