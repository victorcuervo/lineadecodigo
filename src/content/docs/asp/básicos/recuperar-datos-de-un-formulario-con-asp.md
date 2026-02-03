---
title: "Recuperar datos de un formulario con ASP"
description: "Ejemplo de recuperar datos de un formulario con ASP usando métodos POST y GET para mostrar información en pantalla."
date: 2009-03-08
updatedDate: 2026-01-07
tags: ["form","input","label","method","post","get","password","querystring","request","response"]
slug: asp/basicos/recuperar-datos-de-un-formulario-con-asp
author: victor_cuervo
type: doc
topic: asp
id: c778e98a-b3d6-4974-8d44-7f3268685caf
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/generales/recuperar-datos-formulario/recuperar-datos-formulario.asp
---

Vamos a construir un ejemplo mediante el cual podamos recuperar datos de un formulario con [ASP](http://www.manualweb.net/asp/). Posteriormente mostraremos los datos en una la pantalla. Para ello vamos a crear un formulario que contenga dos campos del tipo `input`. Uno de los campos será de tipo texto, mientras que el otro campo será del tipo password. Es muy importante el que demos un nombre a cada uno de los campos mediante el atributo `name`.


```html
<form action="recuperar-datos-formulario.asp" method="post">
	<label for="nombre">Nombre: </label>
	<input id="nombre" name="texto" size="30" type="text"></input>
	
	<label for="password">Contraseña: </label>
	<input id="password" name="password" size="10" type="password"></input>
	
	<input type="submit" value="Enviar"></input>
</form>
```


El atributo `action` del formulario deberá de contener el nombre del la página [ASP](http://www.manualweb.net/asp/) que va a recoger la información del formulario.


Con lo que respecta al método de envío del formulario, atributo `method`, puede ser `POST` o `GET`. Podemos usar cualquiera de los dos, si bien, dependiendo del método elegido deberemos de recuperar la información del formulario de una forma u otra. Así, si el método utilizado es `POST` deberemos de recuperar la información mediante `Request.Form("nombreCampo")`, donde el "nombreCampo" es el valor que le hayamos asignado al campo `name` de los `input` del formulario.


```javascript
<%
texto = Request.Form("texto")
password = Request.Form("password")
%>
```


En el caso de que el método utilizado sea `GET` deberemos de recuperar la información mediante `Request.QueryString("nombreCampo")`


```javascript
<%
texto = Request.QueryString("texto")
password = Request.QueryString("password")
%>
```


La información que hemos recuperado la podemos almacenar en variables, las cuales podemos mostrar por pantalla posteriormente mediante el método `Response.Write(variable)`.


```javascript
<%
Response.Write("Texto: " & texto)
Response.Write("Password: " & password)
%>
```

