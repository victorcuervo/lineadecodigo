---
title: "Mi primer servlet"
description: "Aprende a crear tu primer servlet en Java. Descubre cómo extender HttpServlet, usar doGet, configurar el descriptor web.xml y responder peticiones."
date: 2007-12-27
updatedDate: 2026-02-09
tags: ["httpservlet","doget","httpservletrequest","httpservletresponse","servlet-mapping"]
slug: javaee/servlet/mi-primer-servlet
type: doc
topic: javaee
id: 2c8a9dfb-adca-81f6-8165-fb1aa48e12ea
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/servlet/MiPrimerServlet.java
---

En este ejemplo vamos a desarrollar nuestro primer servlet en [Java](https://www.manualweb.net/java/), el cual nos de como respuesta la frase **"Este es mi primer Servlet"**.


## Crear el Servlet


La clase [Java](https://www.manualweb.net/java/) que implemente el servlet deberá de extender la [clase javax.servlet.HttpServlet](https://www.w3api.com/Java/HttpServlet/).


```java
public class MiPrimerServlet extends javax.servlet.http.HttpServlet implements javax.servlet.Servlet {
  ...  	  	    
}
```


Dentro de esta clase tenemos que codificar, al menos, un método. El [método doGet](https://www.w3api.com/Java/HttpServlet/doGet/). Este método es el que se ejecuta cuando el servlet recibe una petición del tipo GET (las más normales en Internet).


```java
public class MiPrimerServlet extends javax.servlet.http.HttpServlet implements javax.servlet.Servlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	...
	}  	  	    
}
```


El método [método doGet](https://www.w3api.com/Java/HttpServlet/doGet/) recibe dos parámetros: [HttpServletRequest](https://www.w3api.com/Java/HttpServlet/Request) y [HttpServletResponse](https://www.w3api.com/Java/HttpServlet/Response). Estos dos parámetros representan el stream de petición y el stream de respuesta. Y ambos llevan los datos intrínsecos a la petición o respuesta.


Por ejemplo, si la petición viene con parámetros, estos los encontraremos en el objeto [HttpServletRequest](https://www.w3api.com/Java/HttpServlet/Request). De igual manera, si queremos establecer el tipo de contenido de respuesta, lo podremos hacer manipulando el objeto [HttpServletResponse](https://www.w3api.com/Java/HttpServlet/Response).


## Generar la respuesta


Para nuestro ejemplo de Mi primer servlet, vamos a centrarnos en el objeto [HttpServletResponse](https://www.w3api.com/Java/HttpServlet/Response). Y es que lo que vamos a realizar será un volcado de datos sobre el flujo de salida.


Lo primero que haremos será el definir una clase [PrintWriter](https://www.w3api.com/Java/PrintWriter/) a la que asociar el flujo de salida.


```java
PrintWriter out;
out = response.getWriter();
```


Una vez establecida esta relación, lo primero que haremos será indicar el tipo de contenido que queremos volcar. En este caso, será una página web. Es por ello que el contenido será "text/html". En otros casos podremos devolver otros mime-types como "images/jpeg" para las imágenes JPEG o "application/x-gzip" para los ficheros ZIP.


```java
response.setContentType("text/html");
```


Ahora solo nos quedará ir invocando al método [.println](https://www.w3api.com/Java/PrintWriter/.print()) con el texto que conforme la página web.


```java
out.println("<html>");
out.println("<head><title>Mi Primer Servlet </title></head>");
out.println("<body>");
out.println("<h1>Este es mi Primer Servlet</h1>");
out.println("</body></html>");
```


Como se puede ver en el código, se vuelcan todas las etiquetas que conforman la página web [HTML](https://www.manualweb.net/html/), [body](https://www.w3api.com/HTML/body/), [title](https://www.w3api.com/HTML/title-elemento/),… y nuestro texto.


## Configurar el descriptor de despliegue


Una vez desarrollado y compilado nuestro servlet, tendremos que configurar el descriptor de despliegue. Este es el **fichero web.xml**. Dicho fichero indicará los servlets que hay desplegados en nuestra aplicación web y bajo que URL van a atender las peticiones.


Tendremos que definir dos etiquetas. La primera es la etiqueta servlet. Esta etiqueta sirve para definir el servlet. Tiene las siguientes etiquetas anidadas:

- **description**, descripción del servlet
- **display-name**, nome del servlet
- **servlet-class**, clase del servlet con el nombre del paquete por delante

```xml
<servlet>
  <description>Mi primer Servlet</description>
  <display-name>MiPrimerServlet</display-name>
  <servlet-name>MiPrimerServlet</servlet-name>
  <servlet-class> aulambra.com.lineadecodigo.j2ee.servlets.MiPrimerServlet </servlet-class>
</servlet>
```


Una vez definido el servlet, solo nos quedará realizar la asociación entre la URL que atenderá las peticiones del servlet y el servlet definido. Esto lo hacemos mediante la etiqueta servlet-mapping. En ella encontramos dos etiquetas anidadas:

- **servlet-name**, que es el nombre definido anteriormente
- **url-pattern**, que es el patrón de URL al que atenderá las peticiones. En nuestro caso será /MiPrimerServlet

```xml
<servlet-mapping>
  <servlet-name>MiPrimerServlet</servlet-name>
  <url-pattern>/MiPrimerServlet</url-pattern>
</servlet-mapping>
```


De esta manera, una vez desplegada la aplicación en un contenedor web, podremos acceder al servlet de la siguiente manera:


```javascript
http://servidor:8080/nombre_app_web/MiPrimerServlet
```

