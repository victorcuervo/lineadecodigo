---
title: "Enviar tweet con Java"
description: "Ejemplo que utiliza la librería Twitter4j para poder enviar tweet con Java y que este aparezca en el timeline del usuario de Twitter."
date: 2019-10-22
updatedDate: 2026-01-09
tags: ["twitter4j","tweet","twitterexception","try-catch"]
slug: java/twitter/enviar-tweet-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/twitter/EnviarTweet.java
topic: java

---

En un anterior artículo hemos visto [lo sencillo que es conectarse a Twitter utilizando Java](http://lineadecodigo.com/java/conectarse-a-twitter-con-java/). Una vez conectados vamos a dar un siguiente paso y enviar un tweet con [Java](http://www.manualweb.net/java/). Para ello vamos a apoyarnos en la librería Twitter4j. Para poder utilizar la librería Twitter4j deberemos de añadir la dependencia. Esto lo haremos creando una nueva entrada dentro de nuestro fichero pom.xml de maven.


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


E importando la librería en nuestro programa.


```java
import twitter4j.*;
```


Una vez que tenemos la librería lo primero será conectarse a Twitter. Para ello, y[ tal como vimos en el ejemplo de conectarse a Twitter utilizando Java](http://lineadecodigo.com/java/conectarse-a-twitter-con-java/), hay que definir un **fichero properties** en el directorio raíz con la información de conexión que nos proporciona Twitter con las _claves, secretos y tokens_.


```java
debug=false
oauth.consumerKey=bwMEjAH340
oauth.consumerSecret=nYnIMrqk5QYjguY3BH4CS8yoUPb8VdJz
oauth.accessToken=VmtrDacTJUl1M7lUyRAzL7BaqVCOVotr
oauth.accessTokenSecret=tM6CfOKzfUbWpXY5QqGWDnN0aHDtyS
```


Así, con el entorno preparado vamos a instanciar una clase `Twitter`. La clase `Twitter` es la que nos permite hacer todas las acciones que queramos, entre ellas el enviar un tweet. La instancia la conseguimos a través de la factoría `TwitterFactory()`.


```java
Twitter twitter = new TwitterFactory().getInstance();
```


Una vez que tenemos la instancia de la clase `Twitter` nos apoyamos en el método `.updateStatus()`, dicho método recibe una cadena de texto que será la que nos permita enviar un tweet con [Java](http://www.manualweb.net/java/).


```java
twitter.updateStatus("Mensaje enviado desde un ejemplo Java de Línea de Código http://lineadecodigo.com");
```


Automáticamente el mensaje aparecerá en nuestro [timeline de Twitter](http://www.ayudaenlaweb.com/microblogging/twitter/que-es-el-timeline-de-twitter/). Es importante que toda la ejecución del envío del tweet se haga controlando la excepción `TwitterException`. Es por ello que el código lo controlaremos mediante una estructura `try-catch`.


```java
try {	
  Twitter twitter = new TwitterFactory().getInstance();	 		    
  twitter.updateStatus("Mensaje enviado desde un ejemplo Java de Línea de Código http://lineadecodigo.com");   
} catch (TwitterException te) {
  te.printStackTrace();
  System.out.println("Error en la conexión: " + te.getMessage());         
}
```


Y así tenemos nuestro tweet publicado... [aquí nuestro ejemplo](https://twitter.com/LineaDeCodigo/status/1186528010272493568): [https://twitter.com/LineaDeCodigo/status/1186528010272493568](https://twitter.com/LineaDeCodigo/status/1186528010272493568https://twitter.com/LineaDeCodigo/status/1186528010272493568) Como se puede ver es muy sencillo enviar un tweet con [Java](http://www.manualweb.net/java/) en unos pocos pasos una vez que hemos configurado la librería Twitter4j.

