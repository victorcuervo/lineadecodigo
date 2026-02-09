---
title: "Parámetros Inicio Servlet con Anotaciones"
description: "Aprende a configurar parámetros de inicio en servlets con anotaciones. Descubre cómo usar @WebServlet y @WebInitParam para simplificar tu código."
date: 2015-10-27
updatedDate: 2026-02-09
tags: ["servlet","mapping","httpservlet","webInitparam"]
slug: javaee/servlet/parametros-inicio-servlet-con-anotaciones
type: doc
topic: javaee
id: 2c8a9dfb-adca-81f4-8159-efcd94ea7065
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/servlet/MappingParametros.java
---

Hasta la versión de Servlet 3.0 si queríamos tener [parámetros de inicio de los Servlet](http://lineadecodigo.com/java/leer-parametros-de-inicializacion-de-un-servlet/) teníamos que recurrir a darlos de alta en el fichero de despliegue. Desde Servlet 3.0 podemos crear parámetros inicio servlet con anotaciones.


Ya hemos visto que mediante anotaciones podemos realizar el mapping de un [Servlet](http://lineadecodigo.com/tag/java-servlet/) y asociarle una ruta. Siguiendo esa misma filosofía vamos a crear parámetros inicio servlet con anotaciones.


## Crear el Servlet


Lo primero será crear nuestro [Servlet](http://lineadecodigo.com/tag/java-servlet/).


```java
public class MappingParametros extends HttpServlet { ... }
```


Vemos que extiende de la clase [`HttpServlet`](https://www.w3api.com/Java/HttpServlet/) la cual nos permite configurar la clase `MappingParametros` como un [Servlet](http://lineadecodigo.com/tag/java-servlet/).


## Crear el mapping del Servlet


Ahora pasaremos a crear el mapping del [Servlet](http://lineadecodigo.com/tag/java-servlet/) contra una URL. Para ello utilizamos la anotación `@WebServlet`, la cual recibe con un parámetro value el path sobre el que registramos el Servlet.


```java
@WebServlet (value="/AnotacionesParametros")
public class MappingParametros extends HttpServlet { ... }
```


## Definir parámetros de inicio


Seguimos apoyándonos en la anotación `@WebServlet` ya que esta cuenta con un segundo parámetro que es `initParams`. Mediante este parámetro vamos a definir los parámetros de inicio del [Servlet](http://lineadecodigo.com/tag/java-servlet/). Estos parámetros de inicio del Servlet se definen mediante la anotación `@WebInitParam`.


```java
@WebServlet (value="/AnotacionesParametros",
initParams = @WebInitParam (name="p1",value="valor 1"))
public class MappingParametros extends HttpServlet { ... }
```


Cómo podemos ver la anotación `@WebInitParam` tiene dos parámetros, el primero es `name` en el que especificamos el nombre del parámetro y el segundo es `value` sobre el que irá el valor del parámetro.


## Acceder a los parámetros


Una vez definidos los parámetros inicio [Servlet](http://lineadecodigo.com/tag/java-servlet/) con anotaciones podemos acceder a ellos desde el método `.init()` del [Servlet](http://lineadecodigo.com/tag/java-servlet/).


```java
public void init (ServletConfig config) {
  valor = config.getInitParameter("p1");
}
```


Y ya utilizarlos dónde los necesitemos:


```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  response.getWriter()
    .append("Servlet de Prueba de Mapping para parámetros. Valor del parámetro 1: ")
    .append(valor);
}
```


Cómo se puede comprobar es muy sencillo definir los parámetros inicio [Servlet](http://lineadecodigo.com/tag/java-servlet/) con anotaciones.

