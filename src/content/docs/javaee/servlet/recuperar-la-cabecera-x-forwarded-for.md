---
title: "Recuperar la cabecera X-Forwarded-For"
description: "Aprende a recuperar la cabecera X-Forwarded-For en un servlet de Java, interpretar proxies y tratar con seguridad la IP del cliente en tus aplicaciones web."
date: 2009-10-10
updatedDate: 2026-11-01
tags: ["stringtokenizer","get","printwriter","servlet","httpservletrequest"]
slug: javaee/servlet/recuperar-la-cabecera-x-forwarded-for
type: doc
topic: javaee
id: 248d327c-6617-4ef0-aec9-c26fbb50bb40
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/java/com/lineadecodigo/javaee/servlet/ObtenerXForwardedFor.java
---

X-Forwarded-For es una cabecera HTTP que nos permite conocer la IP origen de la petición cuando la solicitud atraviesa uno o varios proxies. A diferencia de `REMOTE_ADDR`, que normalmente solo devuelve la dirección del equipo que se conecta directamente con el servidor, esta cabecera puede conservar la cadena de direcciones que han participado en el recorrido.


La cabecera no demuestra por sí sola cuál es la IP real del cliente: un cliente puede enviarla directamente y un proxy debe configurarse para eliminar o sobrescribir los valores no confiables. Por eso solo debemos utilizarla para identificar el origen cuando conocemos y controlamos los proxies que están delante de la aplicación.


El formato habitual de la cabecera `X-Forwarded-For` es el siguiente:


```text
X-Forwarded-For: client1, proxy1, proxy2
```


Cada dirección está separada por una coma. En una cadena generada por una infraestructura de proxies, la dirección situada más a la izquierda suele representar al cliente original y las siguientes corresponden a proxies sucesivos. La interpretación exacta depende de la configuración de la red y de qué proxies sean de confianza.


## Cómo recuperar X-Forwarded-For en un servlet de Java


En nuestro caso vamos a montar un servlet en Java que acceda a esta cabecera. Para acceder a los datos de la cabecera nos apoyaremos en el método [`getHeader()`](http://w3api.com/wiki/Java:HttpServletRequest.getHeader/) del objeto [`HttpServletRequest`](http://w3api.com/wiki/Java:HttpServletRequest). En este caso el nombre de la cabecera es `X-Forwarded-For`, así que el código será el siguiente:


```java
String sIP = request.getHeader("X-FORWARDED-FOR");
```


Los nombres de las cabeceras HTTP no distinguen entre mayúsculas y minúsculas, por lo que `X-FORWARDED-FOR` y `X-Forwarded-For` obtienen el mismo valor. Si la petición no incluye la cabecera, `getHeader()` devuelve `null`.


Ahora, con esta ristra de datos podemos hacer lo que queramos. Posiblemente necesitemos apoyarnos en [`StringTokenizer`](http://w3api.com/wiki/Java:StringTokenizer) para desmontar la cadena de IP. O, por lo menos, volcar el contenido a la pantalla:


```java
PrintWriter out = response.getWriter();
out.print("La IP origen ha llegado por: " + sIP);
```


El ejemplo conserva la cadena completa, que puede contener varias direcciones. No conviene mostrarla o utilizarla como si fuera una IP única sin comprobar antes su contenido y el modelo de confianza de la infraestructura.


## Ejemplo completo en un servlet


El siguiente ejemplo reúne la lectura de la cabecera y la escritura de una respuesta de texto. Utiliza el espacio de nombres `jakarta.servlet`, habitual en aplicaciones basadas en Jakarta Servlet. En aplicaciones antiguas basadas en Java EE, los imports pueden pertenecer a `javax.servlet`.


```java
import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/ip")
public class ObtenerXForwardedFor extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        String xForwardedFor = request.getHeader("X-Forwarded-For");

        response.setContentType("text/plain;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("X-Forwarded-For: "
                + (xForwardedFor == null ? "no disponible" : xForwardedFor));
    }
}
```


Si la cabecera no existe, la respuesta muestra `no disponible`. Si existe, muestra el valor recibido, incluida la posible lista de proxies. El contenedor debe conocer la clase y el mapeo `@WebServlet` para que la aplicación responda en la ruta `/ip`.


Para infraestructuras que lo soporten, la cabecera estandarizada `Forwarded` ofrece una sintaxis alternativa con parámetros como `for`, `by`, `host` y `proto`. Aun así, también requiere una cadena de proxies configurada y confiable; cambiar de nombre de cabecera no elimina el problema de confianza.


¿Conocías la existencia de `X-Forwarded-For`? Puede ayudarte a diagnosticar el recorrido de una petición y a registrar el origen comunicado por una infraestructura de proxies, siempre que tengas en cuenta sus limitaciones de seguridad.

