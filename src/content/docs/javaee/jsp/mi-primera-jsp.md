---
title: "Mi primera JSP"
description: "Este artículo explica cómo crear mi primera JSP con código Java integrado en HTML."
date: 2008-01-14
updatedDate: 2026-01-07
tags: ["hola-mundo","jsp","println"]
slug: javaee/jsp/mi-primera-jsp
type: doc
topic: javaee
id: 240add3a-2e00-4d63-8950-6e0ea3b56b5d
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/webapp/mi-primer-jsp.jsp
---

Para crearnos mi primera [JSP](https://www.manualweb.net/javaee/) los conceptos de programación que debemos de tener son mínimos. Lo primero que debemos de saber es que cada página [JSP](https://www.manualweb.net/javaee/) nos generará normalmente una página [HTML](https://www.manualweb.net/html/). Es por ello que solemos tener una página [HTML](https://www.manualweb.net/html/) que incluye islas de código [Java](https://www.manualweb.net/java/). Esta mezcla acaba componiendo nuestra [JSP](https://www.manualweb.net/javaee/).


Dentro de las islas de código podemos ayudarnos de las herramientas que nos ofrece el lenguaje [Java](https://www.manualweb.net/java/). Por ejemplo podemos manejar fechas, accesos a bases de datos, a otros sistemas,...


Asumiendo que nuestro documento [JSP](https://www.manualweb.net/javaee/) es una página [HTML](https://www.manualweb.net/html/) con toda su estructura en la cual se encuentra entremezclado el código [Java](https://www.manualweb.net/java/). Cuando queramos introducir código java lo haremos entre los símbolos <% y %>.


```html
<html>
  <head>
    <title>Mi Primer JSP</title>
  </head>
  <body>
    <h1>Mi Primer JSP</h1>

    <% // Código Java %>
  </body>
</html>
```


Para volcar algún contenido [Java](https://www.manualweb.net/java/) en la página usaremos la función:


```java
<% out.println("Texto a insertar en la página"); %>
```


Aunque, si no tiene más código [Java](https://www.manualweb.net/java/), podemos sustituirlo por un pequeño trozo de código como el siguiente:


```java
<%= "Texto a insertar en la página" %>
```


Donde el `out.println` se ha sustituido por el símbolo igual.


Por último, deberemos saber que el fichero hay que guardarlo con la extensión .jsp

