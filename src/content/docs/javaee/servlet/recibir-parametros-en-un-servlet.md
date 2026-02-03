---
title: "Recibir parámetros en un Servlet"
description: "Cómo tenemos que codificar en Java para poder Recibir parámetros en un Servlet. Análisis de las diferentes formas en las que podemos enviarlos."
date: 2007-12-25
updatedDate: 2026-01-09
tags: ["java-io","ioexception","servlet","httpservlet","httpservletrequest","httpservletresponse","servletexception","printwriter","getparameter","doget","dopost"]
slug: javaee/servlet/recibir-parametros-en-un-servlet
author: victor_cuervo
type: doc
topic: javaee
id: 7e42d9b4-303d-4857-96a5-7d03ef91ec57
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/servlet/RecibirParametros.java
---

A la hora de enviar información a un Servlet tenemos dos formas: mediante el **método GET** y mediante el **método POST**. Existen una serie de diferencias entre pasarlos de una forma u otra.


## Metodo POST


Este método solo esta accesible desde los formularios. Se envían los parámetros de forma implícita junto a la página, es decir, al pasar los parámetros, nosotros no vemos reflejado en ningún sitio qué parámetros son y cual es su valor.


## Método GET


Este método envía los parámetros de forma explicita junto a la página, mostrando en la barra de navegación los parámetros y sus valores. Son esas largas cadenas que aparecen en algunas páginas en nuestra barra de navegación, del estilo:


```java
buscar?id=1806&valor=0987&texto=todo&...
```


Las cadenas toman el aspecto


```java
parametro1=valor1&parametro2=valor2&....&parametroN=valorN.
```


Es decir es una concatenación a través de & de pares parámetro-valor. ### Preparando la página de envío


La página de envío será una simple [página HTML](https://www.manualweb.net/html/). Lo primero que tenemos que hacer es montar las URL de envío. La URL está compuesta por el nombre del servidor, en nuestro caso localhost, el puerto (8080), el nombre de la aplicación web, en nuestro caso "lineadecodigo_j2ee" y el nombre del servlet. Así la URL quedará de la siguiente forma:


```text
http://localhost:8080/lineadecodigo_j2ee/RecibirParametros
```


La URL la montaremos en un formulario:


```java
<form action="http://localhost:8080/lineadecodigo_j2ee
       /RecibirParametros" method="post">
  <label for="texto1">Texto 1</label><input type="text" id="texto1" name="texto1" size=20><br>
  <label for="texto2">Texto 2</label><input type="text" id="texto2" name="texto2" size=20>
  <input type="submit" value="Enviar">
</form>
```


y en un enlace:


```text
<a href="http://localhost:8080/lineadecodigo_j2ee/RecibirParametros?texto1=lineadecodigo&texto2=imagen">Mandar parametros por GET</a>
```


## Codificando el Servlet


Lo primero que hay que saber es que la clase que implemente el Servlet extiende de [HttpServlet](https://www.w3api.com/Java/HttpServlet/). Así el código será el siguiente:


```java
public class RecibirParametros extends javax.servlet.http.HttpServlet implements javax.servlet.Servlet {
 ...
}
```


Dentro del Servlet hay dos métodos importantes: [doGet](https://www.w3api.com/Java/HttpServlet/doGet/) y [doPost](https://www.w3api.com/Java/HttpServlet/.doPost()). Estos métodos son los que atienden las peticiones POST y GET de la página, respectivamente.


```java
public class RecibirParametros extends javax.servlet.http.HttpServlet implements javax.servlet.Servlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	...
	}  	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	...			
	}   	  	    
}
```


Ambos métodos reciben como parámetros los datos de la petición [HttpServletRequest](https://www.w3api.com/Java/HttpServlet/Request) y el flujo de la salida de respuesta [HttpServletResponse](https://www.w3api.com/Java/HttpServlet/Response). Podemos codificar los dos métodos para hacer cosas diferentes si viene una petición POST u otra GET. O bien, como en nuestro caso, encaminar una petición a la otra para tratarlas de una misma forma.


```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	doPost(request,response);
}
```


Para recibir los parámetros nos vamos a apoyar en el objeto [HttpServletRequest](https://www.w3api.com/Java/HttpServlet/Request) y en concreto en el [método .getParameter()]( "Método Servlet getParameter"). En este método indicaremos el nombre del parámetro que queremos recuperar.


```java
String parametro1 = request.getParameter("texto1");
String parametro2 = request.getParameter("texto2");		      	  	    
```


En este caso los parámetros se llaman texto1 y texto2. Lo siguiente que haremos será montar la respuesta. Ahora nos apoyaremos en el objeto [HttpServletResponse](https://www.w3api.com/Java/HttpServlet/Response). Mediante el [método .getWriter()]( "Método Java Servlet getWriter") obtendremos el stream de salida. Esto lo manejamos mediante el objeto [PrintWriter](https://www.w3api.com/Java/PrintWriter/).


```java
PrintWriter out;
out = response.getWriter();
```


Antes de empezar a volcar texto en el flujo de salida tenemos que indicar el tipo de contenido que se vuelca. En este caso es **"text/html"**. Es lo que se denomina content-type.


```java
 response.setContentType("text/html");
```


Ahora solo quedará el ir volcando información mediante [métodos .println()](https://www.w3api.com/Java/PrintWriter/.print()). El cual tiene como parámetro el texto a volcar a la página.


```java
out.println("<html>");
out.println("<head><title>Enviar parametros a un Servlet</title></head>");
out.println("<body>");
out.println("<h1>Enviar parametros a un Servlet</h1>");
out.println("La primera palabra pasada como parámetro es <strong>" + parametro1 + "</strong><br>");
out.println("La segunda palabra pasada como parámetro es <strong>" + parametro2 + "</strong>");
out.println("</body></html>");
```

