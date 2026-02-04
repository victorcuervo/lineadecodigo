---
title: "Crear un mapping a un servlet"
description: "Artículo que nos explica cómo tenemos que configirar el fichero web.xml para poder crear un mapping a un servlet y así hacerlo público."
date: 2006-11-14
updatedDate: 2026-01-06
tags: ["servlet","mapping"]
slug: javaee/servlet/crear-un-mapping-a-un-servlet
type: doc
topic: javaee
id: 920466d3-4107-4105-8ec7-bbf0a692d2cf
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/webapp/WEB-INF/web.xml
---

El proceso de puesta en servicio de un [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) podríamos resumirlo en dos pasos. Por un lado crear el [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) y por otro crear un mapping a un [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) para que pueda estar accesible a ser invocado.


> Pues echarle un ojo a todos los [ejemplos que tenemos en Línea de Código sobre el uso de servlets](http://lineadecodigo.com/tag/java-servlet/).


Como decíamos el primero de ellos es crear el [servlet](http://www.manualweb.net/javaee/introduccion-servlets/). Para ello implementaremos una clase java que extienda de [`HttpServlet`](http://w3api.com/wiki/Java:HttpServlet), la cual implementará la funcionalidad de negocio que estemos resolviendo.


```java
public class MiPrimerServlet extends HttpServlet {

  private static final long serialVersionUID = 1L;

  public MiPrimerServlet() {
    super();
  }

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { }

  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException { }

}
```


Pero de nada nos sirve el crear un [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) si no lo publicamos al exterior. Este mecanismo de publicación es lo que se conoce como **crear un mapping**. > La idea del mapping es la de asociar una URL o un patrón de una URL a un [servlet](http://www.manualweb.net/javaee/introduccion-servlets/).


Para ello deberemos de configurar el descriptor de despliegue de la aplicación. Este es el fichero que encontramos en `/WEB-INF/web.xml`En este fichero necesitaremos de la etiqueta `servlet-mapping`. Esta etiqueta nos permitirá definir un nuevo mapping. Anidado a esta etiqueta encontramos dos: 


- `servlet-name`, la primera especificará el nombre del servlet sobre el que queremos establecer el mapping
- `url-pattern`, la segunda especificará sobre que URL se realiza el mapping.


De esta manera, nuestro fichero `/WEB-INF/web.xml`, quedará de la siguiente forma:


```xml
<servlet-mapping>
  <servlet-name>MiPrimerServlet</servlet-name>
  <url-pattern>/URLMiPrimerServlet</url-pattern>
</servlet-mapping>
```


Con este mapping toda las peticiones que se hagan a la URL **http://miservidor/URLMiPrimerlServlet** serán procesadas por el Servlet “MiPrimerServlet”. 


> Es importante que el nombre del [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) y el valor que le asignemos a la etiqueta `servlet-name` tiene que ser el mismo. Para que pueda realizarse la asignación de forma correcta.


De esta forma tan sencilla hemos podido crear un mapping a un [servlet](http://www.manualweb.net/javaee/introduccion-servlets/) para poder exponerlo al exterior y que pueda ser conumido.

