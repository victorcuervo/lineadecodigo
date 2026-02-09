---
title: "Hola Mundo con JAX-RS"
description: "Crea tu primer servicio RESTful con JAX-RS y Jersey. Ejemplo completo con anotaciones @Path, @GET y @Produces para devolver respuestas HTML."
date: 2015-10-31
updatedDate: 2026-02-09
tags: ["path","get","produces"]
slug: javaee/jax-rs/hola-mundo-con-jax-rs
type: doc
topic: javaee
id: 2c8a9dfb-adca-8167-8bd8-fbb67149c8b0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/rest/HolaMundoRest.java
---

La librería JAX-RS nos permite la creación de servicios RESTful de una forma sencilla. En el ejemplo de hoy vamos a crear nuestro Hola Mundo con JAX-RS, el cual nos enseñará a crear un servicio RESTful básico.


Lo primero que necesitamos saber es que para poder crear un servicio Restful con JAX-RS necesitamos apoyarnos en las librerías Jersey. Las librerías Jersey son las que han realizado la implementación del estándar JAX-RS.


## Configurando las dependencias


Para poder utilizar las librerías vamos a añadir una dependencia en nuestro fichero POM.


```xml
<dependency>
  <groupid>com.sun.jersey</groupid>
  <artifactid>jersey-server</artifactid>
  <version>1.8</version>
</dependency>
```


> Te recomiendo que eches un ojo al artículo [Servicios RESTful con Tomacat 7 y Jersey](http://www.arquitectoit.com/java/servicios-retful-tomcat-7/) para que puedas configurar un entorno operativo para este ejemplo de una forma sencilla


## Configurando el servlet de Jersey


Además deberemos de configurar el servlet de Jersey en el fichero web.xml


```xml
<servlet>
  <servlet-name>Jersey REST Service</servlet-name>
  <servlet-class>com.sun.jersey.spi.container.servlet.ServletContainer</servlet-class>
  <init-param>
    <param-name>com.sun.jersey.config.property.packages</param-name>
    <param-value>com.lineadecodigo.javaee.rest</param-value>
  </init-param>
  <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
  <servlet-name>Jersey REST Service</servlet-name>
  <url-pattern>/rest/*</url-pattern>
</servlet-mapping>
```


De esta configuración tenemos que saber dos cosas. La primera es que el parámetro [`com.sun.jersey.config.property`](http://com.sun.jersey.config.property/)`.packages` tiene que tener el valor de la librería en la cual creemos los servicios RESTful. En este caso es nuestra librería de ejemplo [`com.lineadecodigo.javaee.rest`](http://com.lineadecodigo.javaee.rest/)


> Recuerda que puedes [descargarte todos los códigos de ejemplo de Java EE desde nuestro GitHub](https://github.com/victorcuervo/lineadecodigo_javaee) y ejecutarlos directamente con Maven.


La segunda cosa es que hemos configurado una ruta para las peticiones de tipo RESTful mediante un `servlet-mapping` que en este caso es `/rest/*`. Pero tu puedes utilizar la que quieras.


## Creando el servicio REST


El servicio REST estará representado por una clase, sobre la que iremos añadiendo anotaciones. Así que tendremos nuestra clase `HolaMundoRest`.


```java
public class HolaMundoRest { .. }
```


Lo primero será configurar el path en el cual va a atender nuestro servicio Hola Mundo con JAX-RS. Esto lo hacemos con la anotación `@Path`


```java
@Path("holamundo")
public class HolaMundoRest { ... }
```


Es decir que las peticiones del RESTful serán en `/rest/holamundo` ya que es la mezcla del Servlet que hemos configurado más este path.


## Atendiendo peticiones GET


Lo siguiente será crear un método para que atienda, por ejemplo, a las peticiones GET. En este caso creamos el método `getHTML()`. A este método hay que indicarle dos anotaciones. La primera que es un método get con la anotación `@GET` y lo segundo será decir que tipo de respuesta tiene. Para este caso vamos a devolver contenido html, así que la respuesta será `text/html` y la anotación que utilizamos para indicarlo es `@Produces`


```java
@GET
@Produces("text/html")
public String getHtml() {
  return "<h1>Hola Mundo!!</h1>";
}
```


## Código completo


Si vemos todo el código podemos comprobar lo realmente sencillo ([una vez configurado Jersey](http://www.arquitectoit.com/java/servicios-retful-tomcat-7/)) que es hacer un Hola Mundo con JAX-RS.


```java
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("holamundo")
public class HolaMundoRest {

  public HolaMundoRest() {}

  @GET
  @Produces("text/html")
  public String getHtml() {
    return "<h1>Hola Mundo!!</h1>";
  }

}
```

