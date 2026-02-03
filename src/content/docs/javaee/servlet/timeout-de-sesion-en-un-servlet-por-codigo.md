---
title: "Timeout de sesión en un Servlet por código"
description: "Se explica cómo configurar el timeout de sesión en un Servlet por código usando el método setMaxInactiveInterval."
date: 2016-10-05
updatedDate: 2026-01-09
tags: ["servlet","session","doget","httpsession","setmaxinactiveInterval"]
slug: javaee/servlet/timeout-de-sesion-en-un-servlet-por-codigo
author: victor_cuervo
type: doc
topic: javaee
id: fa023d92-c015-432e-9ab7-56e348bc3549
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/servlet/TimeoutSession.java
---

Cuando trabajamos con Servlets en [Java](https://www.manualweb.net/java/) no suele ser normal el configurar el timeout de sesión en un Servlet por código. Lo habitual es configurar este timeout de sesión, lo que viene a ser el tiempo de identificación a un usuario dentro de un Servlet [Java](https://www.manualweb.net/java/), utilizando el fichero `web.xml` tal y como explicamos en el artículo [Modificar time-out de sesión](http://lineadecodigo.com/java/modificar-time-out-de-sesion/). Pero siempre tenemos que tener en cuenta la otra alternativa que será la de definir el timeout de sesión de un Servlet por código, de esta manera nos podemos despreocupar de lo configurado en el fichero `web.xml`. En este caso vamos a codificar el método `doGet()` del Servlet.


```java
protected void doGet(HttpServletRequest request, HttpServletResponse response)
  throws ServletException, IOException {
     ... 
}
```


Lo primero que vamos a realizar será el obtener una referencia a la sesión del contenedor, es decir al objeto `HttpSession`. Esto lo realizaremos mediante el objeto de la petición, `HttpServletRequest`, que lleva un acceso a la sesión.


```java
HttpSession session = request.getSession();
```


El método `.getSession()` será el que nos devuelve la sesión. Una vez que tenemos acceso a la sesión vamos a apoyarnos en el método `.setMaxInactiveInterval()` para establecer el timeout de sesión en un Servlet por código.


```java
session.setMaxInactiveInterval(20*60);
```


Es importante saber que el tiempo a establecer mediante el método `.setMaxInactiveInterval()` se tiene que expresar en segundos. Cabe recordar que en el caso de configurarlo en el fichero `web.xml` lo tenemos que hacer en minutos. Por ello en el código lo hemos escrito como 20*60, para significar esta situación. Si queremos que la sesión no tenga caducidad deberemos de indicar como valor el 0. De esta forma tan sencilla ya habremos configurado el timeout de sesión en un Servlet por código.

