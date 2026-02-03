---
title: "Servlet que devuelve XML"
description: "Ejemplo que nos muestra como podemos desarrollar un servlet que devuelve XML y construirlo para ofrecer servicios desde nuestros servidores."
date: 2006-11-02
updatedDate: 2026-01-06
tags: ["printwriter","servlet","response","get","post"]
slug: javaee/servlet/servlet-que-devuelve-xml
author: victor_cuervo
type: doc
topic: javaee
id: e577c3e8-54d2-4026-994d-a2b0a44d6dc1
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/servlet/RespuestaXML.java
---

La necesidad de saber cómo podemos construir un [Servlet](https://www.manualweb.net/javaee/introduccion-servlets/) que devuelve [XML](https://www.manualweb.net/xml/) viene dada de las necesidades de los entornos SOA. Ahora que los desarrollos se están moviendo a arquitecturas SOA empezamos a ver que nos aparecen servicios por todos los lados. Es cierto que no se habla mucho de cómo se desarrollan dichos servicios, ya que las presentaciones de arquitectura SOA suponen que "estaban ahí".


Supongo que los sistemas legados de hace años ya estaban pensando en SOA y dejando sus interfaces lo más correctos posibles. Que no tenían datos en los interfaces de contrato datos relativos a la pantalla en la que se ejecutaban (esos terminales verde marciano) y que solo devolvían negocio.


Ahora que yo todavía no me he encontrado ningún "servicio del pasado" que solo maneje negocio. Y es por ello que tienes que acabar maleándolo para que deje unos datos lo suficientemente claros como para que sean consumidos en un entorno SOA.


En esta evolución nos encontramos que los servicios de los servidores ya no devuelven presentación, sino que ahora, en bastantes casos, devuelven solo negocio. Y qué mejor que [utilizar el XML para describir dicho negocio](https://lineadecodigo.com/xml).


Una de las posibilidades en estos casos es ir a un enfoque de Webservices. Posiblemente la más puritana. Si bien, es verdad que, los Webservices todavía no se encuentran en su punto más álgido y tienen ciertas cosas que mejorar: velocidad, versionado, transaccionalidad,...


Un enfoque más sencillo es el de montarse un [Servlet](https://www.manualweb.net/javaee/introduccion-servlets/) que nos devuelva [un contenido XML](https://lineadecodigo.com/xml/). Así que vamos ver qué pasos hay que dar para poder construir un [Servlet](https://www.manualweb.net/javaee/introduccion-servlets/) que devuelve [XML](http://www.manualweb.net/xml/).


Para poder hacer esto, lo primero que tenemos que hacer es crearnos una clase que extienda de [`HttpServlet`](https://w3api.com/Java/HttpServlet/).


```java
public class RespuestaXML extends javax.servlet.http.HttpServlet implements javax.servlet.Servlet {...}

```


Como todos sabemos los servlets tienen dos métodos para procesar las peticiones, dependiendo de cómo sean estas (**GET** o **POST**). Estos métodos son [`doGet`](https://www.w3api.com/Java/HttpServlet/doGet/) y [`doPost`](https://www.w3api.com/Java/HttpServlet/doPost/). Podemos coger cualquiera de los dos para implementar nuestro ejemplo.


	Dentro del método de procesado de la petición lo primero que tenemos que hacer si queremos devolver [XML](http://www.manualweb.net/xml/) es establecer el tipo de contenido que devolverá el [Servlet](http://www.manualweb.net/java-ee/introduccion-a-los-servlets/). Para ello utilizamos el método `.setContentType` del objeto `HttpServletResponse`.


```java
Response.setContentType("text/xml");
```


Con esto le estamos diciendo al cliente receptor de la petición que el contenido que le va a llegar en dicha petición es [XML](http://www.manualweb.net/xml/).


Una vez tenemos definido el tipo de contenido lo siguiente es [volcar contenido XML a la salida](http://lineadecodigo.com/categoria/xml/). Para ello deberemos de obtener un [`PrintWriter`](https://www.w3api.com/Java/PrintWriter/) sobre el objeto `HttpServletResponse`.


```java
PrintWriter out = response.getWriter();
```


Y ahora empezar a volcar datos [XML](https://www.manualweb.net/xml/) sobre la salida...


```java
out.write("Línea de Código");
```


En nuestro caso solo estamos devolviendo una etiqueta con el nombre de la web.


Es importante en este punto el recordar que los documentos [XML](http://www.manualweb.net/xml/) empiezan con la siguiente cabecera:


```xml
<?xml version="1.0" ?>
```


Aunque no estrictamente necesaria es buena práctica incluirla antes de nuestro contenido [XML](http://www.manualweb.net/xml/).


Espero que os haya servido este ejemplo que nos explica cómo podemos construir un [Servlet](https://www.manualweb.net/javaee/introduccion-servlets/) que devuelve [XML](https://www.manualweb.net/xml/).

