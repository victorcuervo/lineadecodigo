---
title: "SingleThreadModel, concurrencia en servlet obsoleta"
description: "Aprende sobre SingleThreadModel en servlets. Descubre por qué este modelo de concurrencia fue declarado obsoleto y sus limitaciones en aplicaciones Java EE."
date: 2007-12-29
updatedDate: 2026-02-09
tags: ["servlet","singlethreadmodel"]
slug: javaee/servlet/singlethreadmodel-concurrencia-en-servlet-obsoleta
type: doc
topic: javaee
id: 2c8a9dfb-adca-81aa-a39f-e39a0a552360
author: victor_cuervo
---

## Ciclo de vida de un Servlet


Podríamos describir el ciclo de vida de un servlet, someramente, de la siguiente forma:


Si el servlet sobre el que se ha realizado una petición no está cargado en el contenedor web, este crea una instancia de la clase servlet, ejecuta su método init y posteriormente dará servicio con alguno de los métodos de servicio: doGet, doPost, doPut...


En el caso que el servlet esté cargado en el contenedor, cuando llega la petición, simplemente se encamina dicha petición a los métodos de servicio: [doGet](https://www.w3api.com/Java/HttpServlet/doGet/), [doPost](https://www.w3api.com/Java/HttpServlet/.doPost()), doPut...


Como podemos ver la diferencia es que en el segundo caso no se ejecuta el método de inicialización.


## Concurrencia en servlets


Los métodos de servicio de los servlets se ejecutaran de forma concurrente por cada petición que llegue al contenedor web. Esto implica que, en el caso de existir recursos compartidos, como por ejemplo las variables de sesión, estos podrán ser accedidos al mismo instante.


## El interface SingleThreadModel


Hasta el API Servlet 2.4 existía el interface SingleThreadModel. Dicho interface aseguraba que solo existiría una instancia en un momento concreto gestionando una petición. De tal manera que, si llegaba otra petición en ese momento, esta era encolada y procesada posteriormente.


```java
public class ServletNoConcurrente extends HttpServlet implements SingleThreadModel {
...
}
```


## ¿Por qué fue declarado obsoleto?


Si bien, este interface ha sido declarado obsoleto debido a varios puntos:

1. Producía degradamiento del sistema
2. No evitaba el tener que realizar controles de concurrencia sobre los recursos compartidos, ya que aunque en la petición se aseguraba un solo hilo, no implicaba que en otro punto se estuviese accediendo al mismo recurso

Podéis leer más sobre el [interface SingleThreadModel en el API de Java](http://java.sun.com/j2ee/1.4/docs/api/javax/servlet/SingleThreadModel.html).

