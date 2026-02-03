---
title: "Redirigir todas las JSP a un Servlet"
description: "Cómo modificar el fichero web.xml para redirigir todas las JSP a un Servlet."
date: 2006-11-30
updatedDate: 2026-01-06
tags: ["servlet","jsp","url-pattern"]
slug: javaee/jsp/redirigir-todas-las-jsp-a-un-servlet
author: victor_cuervo
type: doc
topic: javaee
id: 2c5a9dfb-adca-8025-8837-c13bdd8bbe8d
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/webapp/WEB-INF/web.xml
---

Ciertos modelos de arquitectura son participes de evitar el acceso directo a las páginas [JSP](http://www.manualweb.net/tutorial-jsp/) para poder hacer ciertas validaciones. Esto implica que cada vez que alguien ponga una URL sobre nuestro sitio con *.jsp sea reenviado a un Servlet.


Esto lo podemos hacer de una forma muy sencilla modificando los mapping del descriptor de despliegue de la aplicación Web que estemos montando. El descriptor de despliegue **es el fichero /WEB-INF/web.xml**Para ello bastará con que sepamos como hacer un mapping. Esto se puede hacer de forma sencilla modificando el patrón de URL a interceptar.


Así, el mapping tiene dos etiquetas <servlet-name> donde irá el nombre del servlet que atenderá la peticióny <url-pattern> donde le indicaremos el patrón de URL que queremos interceptar. En nuestro caso *.jsp. De esta manera el código nos quedaría de la siguiente forma:


```xml
<servlet-mapping>
  <servlet-name>Controller</servlet-name>
  <url-pattern>*.jsp</url-pattern>
</servlet-mapping>
```


Será el servlet Controller el que reciba todas las peticiones sobre las [JSP](http://www.manualweb.net/tutorial-jsp/).

