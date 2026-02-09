---
title: "Parámetros RESTful con JAX-RS"
description: "Aprende a pasar parámetros en servicios RESTful con JAX-RS. Descubre cómo usar @PathParam para capturar valores desde la URI de tus peticiones."
date: 2015-11-02
updatedDate: 2026-02-09
tags: ["path","get","produces","restful"]
slug: javaee/jax-rs/parametros-restful-con-jax-rs
type: doc
topic: javaee
id: 2c8a9dfb-adca-81eb-9c1f-eb3cd8881dde
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/rest/ParametroRest.java
---

En este ejemplo vamos a ver cómo podemos pasar parámetros RESTful con JAX-RS. Es decir, que la URL de la petición RESTful contenga un parámetro, el cual vayamos a utilizar posteriormente.


Para ello vamos a crear un servicio RESTful que nos salude y que el nombre de la persona a saludar esté en la URI de la petición. Es decir que si ponemos `/saludo/victor` la respuesta sea `Hola Víctor!`.


## Configurar el entorno


Lo primero que tienes que hacer es configurar todo el entorno para que puedas utilizar JAX-RS. Para ello no dejes de leerte el artículo [Servicios JAX-RS con Tomcat 7 y Jersey](http://www.arquitectoit.com/java/servicios-retful-tomcat-7/).


Pero a modo resumido tienes que configurar las dependencias de Jersey en el POM.


```xml
<dependency>
  <groupId>com.sun.jersey</groupId>
  <artifactId>jersey-server</artifactId>
  <version>1.8</version>
</dependency>
```


Y configurar el Servlet de Jersey.


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


## Crear la clase del servicio


Ahora vamos a crear nuestra clase `ParametroRest`.


```java
@Path("saludo/{nombre}")
public class ParametroRest { ... }
```


En esta clase hemos utilizado la anotación `@Path` para poder indicar cual es la URI sobre la que atenderá el servicio RESTful. Además cuando hemos especificado la ruta vemos que el valor del parámetro que vamos a utilizar a posteriori aparece entre llaves.


## Crear el método GET


Lo siguiente será crear el método que atienda a las peticiones GET. Para ello nos apoyaremos en la anotación `@GET` e indicaremos que contesta con código [HTML](https://www.manualweb.net/html/) mediante la anotación `@Produces`.


```java
@GET
@Produces("text/html")
public String getSaludo() { .. }
```


## Capturar el parámetro


Ahora tenemos que pasar el parámetro de la URI a este método. Para ello declararemos un atributo del método de tipo [`String`](https://www.w3api.com/Java/String/) al cual añadiremos la anotación `@PathParam` la cual tiene como parámetro el valor que pusimos entre las llaves del `@Path`.


```java
@GET
@Produces("text/html")
public String getSaludo(@PathParam("nombre") String nombre) {
  return "<h1>Hola " + nombre + "</h1>";
}
```


Ahora ya podremos utilizar nuestro parámetro del método para componer la respuesta del servicio RESTful. Y así, de esta forma tan sencilla hemos conseguido configurar los parámetros RESTful con JAX-RS.

