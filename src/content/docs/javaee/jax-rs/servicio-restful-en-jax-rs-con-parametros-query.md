---
title: "Servicio RESTful en JAX-RS con parámetros query"
description: "Aprende a crear servicios RESTful con parámetros query en JAX-RS. Descubre cómo usar @QueryParam para capturar valores desde la URL y generar respuestas."
date: 2015-11-04
updatedDate: 2026-02-09
tags: ["path","produces","queryparam"]
slug: javaee/jax-rs/servicio-restful-en-jax-rs-con-parametros-query
type: doc
topic: javaee
id: 2c8a9dfb-adca-81bd-9ee5-e2240b22b64a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/rest/ParametroQueryRest.java
---

Una de las formas de pasarle parámetros a un servicio RESTful es en la propia URL en un formato `/servicio/parametro`, pero otra de las formas es pasar los parámetros dentro de la URL pero en formato query. Que sería un formato del estilo `/servicio?parametro=valor`. Así que vamos a crear un servicio RESTful en JAX-RS con parámetros query.


Para ello vamos a ejecutar dos pasos, en el primero configuraremos el entorno de ejecución y en el segundo codificaremos el servicio RESTful.


## Configurando el entorno


Lo primero que tenemos que hacer para crear un servicio RESTful en JAX-RS con parámetros query es configurar el entorno de Jersey, que es la implementación que vamos a utilizar para ejecutar nuestro código de servicio RESTful.


Deberemos de descargarnos las dependencias. En este caso utilizaremos un proyecto Maven y añadiremos al POM la siguiente dependencia, la cual descargará todas las librerías de Jersey.


```xml
<dependency>
  <groupId>com.sun.jersey</groupId>
  <artifactId>jersey-server</artifactId>
  <version>1.8</version>
</dependency>
```


Ahora vamos a configurar el Servlet de Jersey que atiende las peticiones de los servicios RESTful.


> Te recomiendo que eches un ojo al artículo [Servicios RESTful con Tomcat 7 y Jersey](http://www.arquitectoit.com/java/servicios-retful-tomcat-7/).


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


El parámetro [`com.sun.jersey.config.property`](http://com.sun.jersey.config.property/)`.packages` deberá apuntar al paquete raíz dónde estés creando los servicios RESTful.


## Codificando un Servicio RESTful con parámetros query


Lo primero para crear un Servicio RESTful en JAX-RS con parámetros query será definir una clase y mediante la anotación `@Path` indicarle la URL dónde atenderá el servicio. En este caso no indicamos, de momento, nada para los parámetros query.


```java
@Path("/saludo")
public class ParametroQueryRest { ... }
```


Ahora vamos a crear un método que atienda a las peticiones GET y que recupere los parámetros de la Query. Este parámetro tiene que tener dos anotaciones `@GET` para indicar que es el que atiende ese tipo de peticiones y `@Produces` para indicar el tipo de respuesta que genera, en este caso `text/html`.


```java
@GET
@Produces("text/html")
public String getSaludo() { ... }
```


## Capturar el parámetro query


Ahora utilizaremos la anotación `@QueryParam` para indicar dentro de los parámetros del método cual corresponde al parámetro de la query.


```java
@GET
@Produces("text/html")
public String getSaludo(@QueryParam("nombre") String nombre) {
  return "<h1>Hola " + nombre + "</h1>";
}
```


Como podemos observar indicamos mediante la anotación `@QueryParam` que buscamos el parámetro nombre en la query y usaremos el parámetro del método para generar la respuesta.


Ya solo nos quedará ejecutar e invocar a nuestro servicio RESTful `/saludo?nombre=Luis`

