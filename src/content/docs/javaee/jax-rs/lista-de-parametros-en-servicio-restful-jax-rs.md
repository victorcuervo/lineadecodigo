---
title: "Lista de parámetros en servicio RESTful JAX-RS"
description: "Aprende a gestionar listas de parámetros en servicios RESTful con JAX-RS. Descubre cómo usar @QueryParam con List para recibir múltiples valores."
date: 2015-11-06
updatedDate: 2026-02-09
tags: ["path","get","produces","queryparam"]
slug: javaee/jax-rs/lista-de-parametros-en-servicio-restful-jax-rs
type: doc
topic: javaee
id: 2c8a9dfb-adca-81ed-b99a-e8aba24ede88
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/rest/ListaParametroQueryRest.java
---

En otros ejemplos ya hemos visto como pasar parámetros a servicios RESTful en JAX-RS, ya sea en parámetros dentro de la URI o bien con parámetros como query. En este caso vamos a ver cómo podemos controlar una lista de parámetros en servicio RESTful JAX-RS, es decir, cómo pasar a un servicio RESTful una lista de valores.


Por ejemplo imaginemos que hemos creado un formulario y el usuario puede añadir una serie de items, los cuales se quieren pasar al servicio RESTful. Vamos a ver cómo podemos comunicarle esa lista de parámetros.


No vamos a entrar en detalle de cómo configurar tu entorno para poder crear servicios RESTful con JAX-RS. Pero si es la primera vez que te enfrentas a este tipo de ejemplos es "obligatorio" que te leas el artículo [Servicios RESTful con Tomcat 7 y Jersey](http://www.arquitectoit.com/java/servicios-retful-tomcat-7/) para saber cómo configurar tu entorno de ejecución.


## Crear la clase del servicio


Lo primero para realizar una clase que nos controle una lista de parámetros en servicio RESTful JAX-RS. Para convertir esta clase en un servicio RESTful utilizamos la anotación @Path


```java
@Path("/lista")
public class ListaParametroQueryRest { ... }
```


Ahora creamos un método que atienda las peticiones de tipo GET, lo cual gestionamos mediante la anotación @GET y que nos devuelva un contenido en [HTML](https://www.manualweb.net/html/), para lo que utilizamos la anotación @Produces


```java
@GET
@Produces("text/html")
public String getItems() { ... }
```


## Gestionar la lista de parámetros


Para la gestión de lista de parámetros en servicio RESTful JAX-RS vamos a apoyarnos en los parámetros por query, así que utilizaremos una anotación @QueryParam. La estructura será:


```javascript
/lista?item=valor1&item=valor2&item=valor3
```


Así el parámero que controlamos con @QueryParam es item, pero con una salvedad, que al ser N tendremos que indicar que es una lista. Así que la signatura de nuestro método nos quedará de la siguiente forma:


```java
@GET
@Produces("text/html")
public String getItems(@QueryParam("item") List<String> items) { ... }
```


## Recorrer los elementos


Ya solo tendremos que recorrer los elementos de la lista para poder acceder a los valores. Para ello utilizamos un bucle for-each.


```java
@GET
@Produces("text/html")
public String getItems(@QueryParam("item") List<String> items) {
    StringBuffer sb = new StringBuffer();
    sb.append("<h1>Lista de Items</h1><p>Los items adquiridos son:</p><ul>");
    
    for (String item:items)
        sb.append("<li>").append(item).append("</li>");
    
    sb.append("</ul>");
    return sb.toString();
}
```


De esta forma ya habremos conseguido tener una clase que gestione una lista de parámetros en servicio RESTful JAX-RS.

