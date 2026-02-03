---
title: "Modificar time-out de sesión"
description: "Para controlar el tiempo que un usuario puede estar conectado a nuestra web y mantenerle el estado deberemos de saber como modificar time-out de sesión."
date: 2006-11-12
updatedDate: 2026-01-06
tags: ["timeout","servlet","session"]
slug: javaee/servlet/modificar-time-out-de-sesion
author: victor_cuervo
type: doc
topic: javaee
id: ab6826ce-a8c9-4b7f-b1ca-26b262a396a7
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/webapp/WEB-INF/web.xml
---

Cuando un usuario realiza una conexión contra una aplicación web se le crea una sesión. La sesión es la identidad que tiene dicho usuario en el servidor hasta que se desconecta. Es por ello que deberemos de conocer cómo modificar time-out de sesión en [Java](http://www.manualweb.net/java) para controlar su duración. En la sesión de un usuario se podrá almacenar información que queramos que previa mientras el usuario permanezca conectado a nuestra web. Y esta última frase es el kit de la cuestión. ¿Cuándo sabemos que un usuario se ha desconectado? Pues es difícil, ya que el protocolo HTTP es sin estado y las peticiones vienen y van sin un control. Es por ello que la única forma de saber que un usuario se ha ido es indicando un tiempo de caducidad de la sesión, más conocido como timeout de sesión. Dependiendo del contenedor de servlets que estemos utilizando, este establecerá el timeout de sesión en un valor u otro atendiendo a unos parámetros de configuración. Por ejemplo, Tomcat utiliza el fichero **`/conf/web.xml`** para configurarla, como podemos ver en estas líneas de código:


```xml
<!-- ==== Default Session Configuration ==== -->
<!-- You can set the default session timeout (in minutes) for all newly -->
<!-- created sessions by modifying the value below. -->
<session-config>
  <session-timeout>30</session-timeout>
</session-config>
```


Como vemos, establece 30 minutos como tiempo máximo de inactividad. Pero cuando creemos una aplicación podemos indicar un tiempo de timeout sobre esta aplicación. Y es que quien no nos dice que nuestra aplicación pueda correr sobre varios [contenedores de Servlets](http://www.manualweb.net/javaee/introduccion-servlets/). Para configurar el timeout de la sesión de nuestra aplicación deberemos de configurar el descriptor de despliegue de la misma (`/WEB-INF/web.xml`). Para ello utilizaremos la etiqueta `session-config` y anidada a ella `session-timeout`. Vamos, que son las mismas etiquetas que utiliza Tomcat. Así, el código nos quedaría de la siguiente forma:


```xml
<session-config>
  <session-timeout>10</session-timeout>
</session-config>
```


En este caso establecemos el tiempo de timeout a 10 minutos. Y con esto habremos conseguido el modificar time-out de sesión en [Java](http://www.manualweb.net/java).

