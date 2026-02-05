---
title: "Redireccionar a una página web con ASP"
description: "Aprende a redireccionar a una página web con ASP de forma sencilla y efectiva. Optimiza la experiencia del usuario y mejora tu sitio web hoy mismo."
date: 2009-01-04
updatedDate: 2026-02-05
tags: ["redirect","response","querystring"]
slug: asp/basicos/redireccionar-a-una-pagina-web-con-asp
type: doc
topic: asp
id: 5486de38-7688-4ff8-8476-aba6266a59f8
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/basico/redireccionar/redireccionar-a-una-pagina.asp
---

La idea consiste en que al intentar acceder a una página se nos redireccione automáticamente a otra. Basándonos en [ASP](http://www.manualweb.net/asp/). Para ello nos valdremos del objeto Response y de su método Redirect, el cual recibe como parámetro la dirección a la cual deberemos de redireccionar.


## Redirección básica


```javascript
<%
 Response.Redirect ("http://www.w3api.com")
%>
```


Hay que tener en cuenta que antes de poner la redirección no podemos generar ninguna otra salida hacia el cliente, es decir, no podemos tener ni código [HTML](https://www.manualweb.net/html/) ni usar el método Response.Write antes del Respone.Redirect.


## Formulario para redirección


En la solución que proponemos se tiene una página inicial en la que se pone una dirección a través de un formulario y una segunda página que recogerá la redirección y la ejecutará. La página del formulario es muy sencilla:


```html
<form action="redireccionar-a-una-pagina.asp" method="get">
  <label for="url">Dirección a donde quieres ir:</label>
  <input id="url" name="url" size="40" type="text"></input>
  <input type="submit" value="Enviar"></input>
</form>
```


## Recoger parámetros y redireccionar


El paso de parámetros se realizará mediante el método get, es por ello que en la página [ASP](http://www.manualweb.net/asp/) habrá que recoger el parámetro a través del método Request.QueryString utilizando el valor del name del formulario. En nuestro ejemplo "url".


```javascript
<%
 url = Request.QueryString("url") 
 Response.Redirect (url)
%>
```

