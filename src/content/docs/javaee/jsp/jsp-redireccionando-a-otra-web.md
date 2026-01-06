---
title: "JSP redireccionando a otra Web"
description: "JSP redireccionando a otra Web nos permitirá redirigir las peticiones de una página web hacía otra página web sin afectar al usuario que accede."
date: 2006-11-06
updatedDate: 2026-01-06
tags: ["jsp"]
slug: javaee/jsp/jsp-redireccionando-a-otra-web
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/webapp/redirect.jsp
topic: javaee
---

Seguro que alguna vez os ha pasado el hecho de construir una página web, ponerla en servicio y, por los motivos que sean, tenerla que mover a otra URL. Vamos a ver cómo resolverlo mediante JSP redireccionando a otra Web. Esto nos pasa cuando se recategorizan o reorganizan las páginas, cuando cambias de dominio,… En estos casos, es muy probable que no nos interese perder el referente de la página de cara al usuario final. Ya sea porque el usuario se sabe o tiene enlazada dicha página o porque los buscadores la tienen catalogada. Para estas situaciones podemos usar las redirecciones. Este es un sencillo mecanismo, que nos suelen ofrecer todos los lenguajes de servidor, mediante el cual la petición sobre una página es encaminada a otra. En [JSP](http://www.manualweb.net/tutorial-jsp/) tenemos acceso a un conjunto de objetos del contesto de la página. Entre ellos [`Response`](http://w3api.com/wiki/Java:ServletResponse) y [`Request`](http://w3api.com/wiki/Java:ServletRequest). Estos vienen a reflejar la petición y respuesta de dicha página. En el objeto [`Response`](http://w3api.com/wiki/Java:ServletResponse) contamos con el método [`.sendredirect(URL)`](http://w3api.com/wiki/Java:HttpServletResponse.sendRedirect()), el cual permitirá reenviar el flujo a una nueva URL. Podemos utilizarlo de la siguiente forma:


```java
<% response.sendRedirect("http://www.lineadecodigo.com/"); %>
```


Esta única [línea de código](http://lineadecodigo.com/) nos bastará para realizar nuestro cometido de tener la JSP redireccionando a otra Web. > Hay que tener en cuenta una cosa. Si utilizamos este método, no podemos volcar ninguna información previa al flujo de salida o response. Ya que en tal caso se produciría un error. Es por ello que suele utilizarse de manera única en las páginas.

