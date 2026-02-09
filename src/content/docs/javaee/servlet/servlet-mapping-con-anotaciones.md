---
title: "Servlet Mapping con Anotaciones"
description: "Aprende a crear servlet mapping con anotaciones en Java. Descubre cómo usar @WebServlet para registrar servlets sin necesidad de archivos XML."
date: 2015-10-25
updatedDate: 2026-02-09
tags: ["httpservlet","webservlet"]
slug: javaee/servlet/servlet-mapping-con-anotaciones
type: doc
topic: javaee
id: 2c8a9dfb-adca-81c4-8273-e43241392262
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/servlet/MappingAnotaciones.java
---

Desde la versión de la especificación de Servlets 3.0 a la hora de realizar el mapping ya no es necesario especificarlo en el descriptor de despliegue mediante [XML](http://www.manualweb.net/xml/), si no que además se puede realizar de una forma más sencilla mediante anotaciones en la clase del servlet.


## Crear la clase Servlet


Para crear un servlet mapping con anotaciones lo primero que vamos a definir es nuestra clase servlet.


```java
public class MappingAnotaciones extends HttpServlet {
  private static final long serialVersionUID = 1L;

  public MappingAnotaciones() {
    super();
  }
   
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.getWriter().append("Servlet de Prueba de Mapping por anotaciones");
  }

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    doGet(request, response);
  }
}
```


Como se puede observar es una simple clase Java que extiende de la clase [`HttpServlet`](https://www.w3api.com/Java/HttpServlet/) y lo que consigue es que se convierta en un Servlet y por lo tanto debamos de codificar los métodos [`.doGet()`](https://www.w3api.com/Java/HttpServlet/doGet/) y [`.doPost()`](https://www.w3api.com/Java/HttpServlet/.doPost()) que gestiones las peticiones/respuestas del Servlet.


## Usar la anotación @WebServlet


Para registrar el Servlet y que tenga un path de acceso es necesario realizar un mapping, es decir, indicar el path y la clase del servlet asociadas. Para realizar un servlet mapping con Anotaciones vamos acudir a la anotación `@WebServlet`


```java
@WebServlet ("/anotaciones")
public class MappingAnotaciones extends HttpServlet { ... }
```


Podemos ver que la anotación `@WebServlet` recibe como parámetro el path en el cual queremos mapear el servlet. Y que dicha anotación se pone justo antes de la definición del servlet.


De esta forma ya tenemos registrado nuestro servlet y lo podremos acceder desde el path anotaciones.


```javascript
http://localhost:8080/appweb/anotaciones
```


El uso de servlet mapping con anotaciones es compatible con el uso de los mapping dentro del descriptor de despliegue.

