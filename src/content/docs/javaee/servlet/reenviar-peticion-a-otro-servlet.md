---
title: "Reenviar petición a otro Servlet"
description: "En este artículo podemos revisar el código que tenemos que utilizar par reenviar petición a otro servlet Java para implementar un patrón controller."
date: 2006-11-08
updatedDate: 2026-01-06
tags: ["servlet"]
slug: javaee/servlet/reenviar-peticion-a-otro-servlet
author: victor_cuervo
type: doc
id: 7a1771cd-13ba-4f65-b693-e03f5a778f98
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/servlet/ServletForward.java
---

No siempre un [Servlet](http://www.manualweb.net/java-ee/introduccion-a-los-servlets/) estará codificado para atender a una petición. Sino que muchas veces y por muchos motivos tendrá que reenviar la petición para que la siga procesando otro [Servlet](http://www.manualweb.net/java-ee/introduccion-a-los-servlets/). En este ejemplo vamos a ver cómo reenviar petición a otro [Servlet](http://www.manualweb.net/java-ee/introduccion-a-los-servlets/). Uno de estos casos claros es cuándo estamos implementando un **patrón Controller**. Donde ese punto de acceso encaminará las peticiones a diferentes [Servlets](http://www.manualweb.net/java-ee/introduccion-a-los-servlets/). Para encaminar la petición necesitaremos de una simple [línea de código](http://lineadecodigo.com/linea-de-codigo/que-es-una-linea-de-codigo/). Pero lo primero será codificar el método [`.doGet()`](http://www.w3api.com/wiki/Java:HttpServlet.doGet()) que es el que recibirá la petición y desde el sitio a donde interceptaremos la petición para poder encaminarla hacía otro [Servlet](http://www.manualweb.net/java-ee/introduccion-a-los-servlets/).


```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
 ...
}
```


Lo siguiente será implementar el encaminamiento mediante una [línea de código](http://lineadecodigo.com/linea-de-codigo/que-es-una-linea-de-codigo/). En esta línea recuperaremos el manejador de uno de los [Servlets](http://www.manualweb.net/java-ee/introduccion-a-los-servlets/) de la aplicación web y le reenviaremos los objetos petición, representado por el objeto [`HttpServletRequest`](http://www.w3api.com/wiki/Java:HttpServletRequest), y respuesta, representado por el objeto [`HttpServletResponse`](http://www.w3api.com/wiki/Java:HttpServletResponse), para que los maneje. Para poder reenviar la petición utilizaremos el método [`forward(request, response)`](http://w3api.com/wiki/Java:RequestDispatcher.forward()) del objeto [`RequestDispatcher`](http://w3api.com/wiki/Java:RequestDispatcher): El código de nuestro programa [Java](http://www.manualweb.net/java) nos quedaría de la siguiente forma:


```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  request.getRequestDispatcher("NombreDelServlet")
    .forward(request, response);
}
```


Es importante saber cómo se llama el [Servlet](http://www.manualweb.net/java-ee/introduccion-a-los-servlets/) al que encaminamos la petición. Ya que el nombre de este Servlet será el parámetro que reciba el método `.getRequestDispatcher()`.

