---
title: "Obtener la IP que invoca al servlet"
description: "Código fuente explicado para saber cómo podemos obtener la IP que invoca al servlet."
date: 2008-01-12
updatedDate: 2026-01-09
tags: ["servlet","httpservletrequest","printwriter","httpservletresponse","doget","dopost","getremotehost","getremoteaddr"]
slug: javaee/servlet/obtener-la-ip-que-invoca-al-servlet
type: doc
topic: javaee
id: f3992b38-da80-45b2-b89a-e8bef1a243a7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/servlet/ObtenerIP.java
---

Mediante el siguiente código podremos recuperar la IP del usuario que está realizando la petición sobre el Servlet. Dadas todas las circunstancias que pueden rodear a la topología de las redes la IP que obtendremos no tiene porque ser la IP del usuario final, sino que fácilmente podría ser la IP de un proxy intermedio,... Es por ello que el ejemplo hay que utilizarle con fines didácticos y si lo usamos para producción, con un gran cuidado.


La IP de la máquina que invoca es una información que al servlet le llega en la petición, consecuentemente sus métodos [doGet](https://www.w3api.com/Java/HttpServlet/doGet/) y [doPost](https://www.w3api.com/Java/HttpServlet/.doPost()) lo tendrán en el objeto [HttpServletRequest](https://www.w3api.com/Java/HttpServlet/Request).


Los métodos que nos permiten recuperar la información de la IP y el nombre de la máquina peticionaria son: getRemoteHost() y getRemoteAddr(). Simplemente les invocamos sobre el método [HttpServletRequest](https://www.w3api.com/Java/HttpServlet/Request).


```java
String ip = null; // IP del cliente
String host = null; // Host del cliente

ip = request.getRemoteAddr();
host = request.getRemoteHost();
```


Una vez obtenida la información, simplemente tendremos que devolverla por respuesta. Para ello nos apoyamos sobre los objetos [PrintWriter](https://www.w3api.com/Java/PrintWriter/) y [HttpServletResponse](https://www.w3api.com/Java/HttpServlet/Response).


Veamos el código:


```java
PrintWriter out = response.getWriter();
response.setContentType("text/html");
	   
out.println("<html><head><title>Obtener IP del cliente</title></head><body>");
out.println("<strong>Obtener la IP del cliente </strong>");
out.println("La ip del cliente es " + ip + "<br>");
out.println("El host del cliente es " + host);
out.println("</body></html>");
```


Ver que el código que se devuelve en el stream de respuesta es una página web. De hecho, antes de devolver ninguna información indicamos que el content-type de respuesta es un "text/html".

