---
title: "Pasar parámetros a un applet"
description: "Ejemplo que nos enseña a como podemos pasar parámetros a un applet desde una página HTML al programa Java."
date: 2007-03-03
updatedDate: 2026-01-08
tags: ["applet","param"]
slug: java/applets/pasar-parametros-a-un-applet
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81a5-893b-ee30b591d60c
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/applet/AppletPasarParametros.java
---

Un [Applet](http://www.manualweb.net/java/applets-java/) es una aplicación Java que se ejecuta dentro de una página web. Y como toda aplicación [Java](https://www.manualweb.net/java/), independientemente de su naturaleza, podrá recibir parámetros de entrada. Un [Applet](http://www.manualweb.net/java/applets-java/), al contrario que las aplicaciones "standalone" no tiene un método main. Sino que tienen un conjunto de métodos que se ejecutan dependiendo del ciclo de vida del [Applet](http://www.manualweb.net/java/applets-java/). Al inicio se ejecuta el método init(), una vez inicializado se ejecuta el método start(), stop() cuando se para la ejecución del [Applet](http://www.manualweb.net/java/applets-java/) y por último destroy() cuando el [Applet](http://www.manualweb.net/java/applets-java/) es eliminado. En cualquiera de estos métodos podemos recuperar parámetros pasados al [Applet](http://www.manualweb.net/java/applets-java/). Pero vamos al principio, lo primero es ver como podemos pasarle parámetros al [Applet](http://www.manualweb.net/java/applets-java/). Para ello hay que irse al código [HTML](https://www.manualweb.net/html/) de carga del[Applet](http://www.manualweb.net/java/applets-java/). Si queremos cargar un [Applet](http://www.manualweb.net/java/applets-java/) podremos utilizar [la etiqueta applet](https://www.w3api.com/HTML/a/PPLET). En el atributo code deberemos de poner la clase que referencia al [Applet](http://www.manualweb.net/java/applets-java/).


```java
<applet code="com.lineadecodigo.java.applet.AppletPasarParametros" height="100" width="200">
</applet>
```


Si queremos pasarle parámetros deberemos de utilizar la etiqueta param. Esta etiqueta tendrá dos atributos: **name**, que es el nombre del parámetro y **value**, que es el valor que queremos pasarle al parámetro. El código sería el siguiente:


```java
<applet code="com.lineadecodigo.java.applet.AppletPasarParametros" height="100" width="200">
<param name="web" value="Linea de Codigo"></param>
<param name="url" value="http://lineadecodigo.com"></param>
</applet>
```


Ahora hay que pasar a codificar el [Applet](http://www.manualweb.net/java/applets-java/). Como hemos dicho, en cualquier punto del [Applet](http://www.manualweb.net/java/applets-java/) podemos recuperar los parámetros. Para ello deberemos de utilizar el método .getParameter(nombreParametro). Como parámetro le pasaremos el valor del parámetro del [Applet](http://www.manualweb.net/java/applets-java/) a recuperar. En nuestro ejemplo serán web y url. El código será el siguiente:


```java
Web miWeb = new Web();
miWeb.setTitulo(getParameter("web"));
miWeb.setURL(getParameter("url"));
```


Para el ejemplo hemos utilizado una clase llamada Web, con dos campos: url y web. Lo mejor de estos casos es cargar los datos dentro del método init, que como dijimos antes, solo se carga al principio. Y tiene sentido el solo cargar los parámetros una vez, al inicio.


```java
public void init() {
  Web miWeb = new Web();
  miWeb.setTitulo(getParameter("web"));
  miWeb.setURL(getParameter("url"));
}
```

