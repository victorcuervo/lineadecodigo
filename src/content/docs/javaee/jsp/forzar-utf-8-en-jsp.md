---
title: "Forzar UTF-8 en JSP"
description: "Cómo utilizar el fichero web.xml, los elementos url-pattern y page-encoding para forzar UTF-8 en JSP en todas las páginas de la aplicación."
date: 2021-10-07
updatedDate: 2026-01-09
tags: ["jsp","utf8"]
slug: javaee/jsp/forzar-utf-8-en-jsp
author: victor_cuervo
type: doc
id: 9afe601e-d660-4ef7-b98c-d104d64d0dbc
download: https://github.com/victorcuervo/lineadecodigo_jakartaee/blob/main/src/main/webapp/WEB-INF/web.xml
---

Al trabajar con página [JSP o Java Server Pages](https://lineadecodigo.com/tag/java-jsp/) es muy común que tengamos problemas manejando la codificación de las mismas, bien sea por no saber qué tipo de encoding debemos de utilizar o bien porque se nos olvida incluirlo en la definición de la página. Es por ello que puede resultar muy útil el poder forzar un encoding para todas las [páginas JSP](https://lineadecodigo.com/tag/java-jsp/) que tengamos en nuestra aplicación. En este caso vamos a ver cómo podemos forzar UTF-8 en JSP. Lo primero que haremos será recordar cómo se define el encoding dentro de una [página JSP](https://lineadecodigo.com/tag/java-jsp/). En este caso tenemos dos alternativas, la primera es definir el encoding mediante la directiva `page` y el atributo `contentType`. A este atributo le daremos el valor del encoding mediante el charset. Quedará de la siguiente forma:


```java
<% page contentType="text/html; charset=uft-8"%>
```


Esta definición deberemos de hacerla al principio de la página antes de volcar ningún contenido mediante los elementos `PrintWriter` or `JspWriter`. Si por algún motivo no hemos definido el contentType mediante la directiva `page`. Podemos recurrir al método `.setContentType` del objeto `Response`.


```java
<% response.setContentType( "text/html; charset=utf-8" ); %>
```


Esto lo podremos hacer en cualquier momento de nuestro código. Si bien, ambas alternativas, hay que aplicarlas página a página, con los riesgos que comentábamos al principio. Es por ello que vamos a ver cómo podemos forzar UTF-8 en JSP para todas las páginas de nuestra aplicación. Para ello, deberemos de modificar el fichero **web.xml** de la aplicación. En este fichero vamos a crear un elemento `jsp-config`, dentro del cual crearemos un elemento `jsp-property-group`. Esto nos va a permitir dar una configuración a un conjunto de páginas. Para establecer este conjunto utilizamos el elemento `url-pattern`, y dado que queremos tener todas las páginas JSP le damos el valor de **"*.jsp"**. Por otro indicaremos mediante el elemento `page-encoding` el valor del encoding a forzar en las páginas. En nuestro caso vamos a darle el valor **"utf-8".**De esta manera el código a incluir en el web.xml para poder forzar UTF-8 en JSP será el siguiente:


```xml
<jsp-config>
  <jsp-property-group>
    <url-pattern>*.jsp</url-pattern>
    <page-encoding>UTF-8</page-encoding>
  </jsp-property-group>
</jsp-config>
```


Espero que este pequeño consejo os sea de mucha utilidad.

