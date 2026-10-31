---
title: "Enviar un array a una JSP"
description: "Aprende a enviar varias opciones de un formulario HTML a una JSP con getParameterValues(), recorrer el array en Java y gestionar selecciones vacías."
date: 2009-08-01
updatedDate: 2026-10-31
tags: ["array","foreach","jsp","servlet","post"]
slug: javaee/jsp/enviar-un-array-a-una-jsp
type: doc
topic: javaee
id: 30fcdcab-36b4-4915-9c85-3e097081c698
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javaee/blob/master/src/main/webapp/enviar-multiples-datos/enviar-array.jsp
---

Ya hemos visto cómo [Recibir parámetros en una JSP](http://lineadecodigo.com/2006/12/27/recibir-parametros-en-una-jsp/) y [Recibir un parámetro numérico en una JSP](http://lineadecodigo.com/java/recibir-un-parametro-numerico-en-una-jsp/). El siguiente paso es ver cómo enviar un array a una [JSP](https://www.manualweb.net/javaee/). Imaginemos que ofrecemos al usuario la posibilidad de escoger varias opciones dentro de una página web, por ejemplo, sus aficiones favoritas.


## Formulario HTML para enviar varias opciones


Lo primero es crear un control de selección múltiple. Nos apoyamos en la etiqueta [`select`](http://w3api.com/wiki/HTML:SELECT):


```html
<select id="favoritos" multiple="multiple" name="favoritos" size="9">
  <option value="deportes">Deportes</option>
  <option value="cine">Cine</option>
  <option value="teatro">Teatro</option>
  <option value="fotografía">Fotografía</option>
  <option value="lectura">Lectura</option>
  <option value="viajes">Viajes</option>
  <option value="pintura">Pintura</option>
  <option value="música">Música</option>
  <option value="otros">Otros</option>
</select>
```


En el control hay varios detalles importantes. El atributo [`name`](http://w3api.com/HTML/select/name/) tiene el valor `favoritos` y será el nombre del parámetro que recuperaremos desde la [JSP](https://www.manualweb.net/javaee/). El atributo [`multiple`](http://w3api.com/wiki/HTML:Multiple) permite seleccionar varias opciones. Cada opción seleccionada se envía con el mismo nombre de parámetro, por lo que la aplicación recibirá varios valores asociados a `favoritos`.


Ahora ponemos el control dentro de un formulario. Como destino indicamos `enviar-array.jsp`, la [JSP](https://www.manualweb.net/javaee/) que recibirá los valores:


```html
<form action="enviar-array.jsp" method="post">
  <label for="favoritos">Marca cuáles de las siguientes opciones son tus favoritas:</label>

  <select id="favoritos" multiple="multiple" name="favoritos" size="9">
    <option value="deportes">Deportes</option>
    <option value="cine">Cine</option>
    <option value="teatro">Teatro</option>
    <option value="fotografía">Fotografía</option>
    <option value="lectura">Lectura</option>
    <option value="viajes">Viajes</option>
    <option value="pintura">Pintura</option>
    <option value="música">Música</option>
    <option value="otros">Otros</option>
  </select>

  <input type="submit" value="Enviar">
</form>
```


El navegador enviará un parámetro `favoritos` por cada opción seleccionada. Si se marcan `deportes` y `cine`, la petición contendrá conceptualmente pares como `favoritos=deportes` y `favoritos=cine`. El método `post` hace que estos datos viajen en el cuerpo de la petición en lugar de formar parte de la URL.


## Recuperar el array en la JSP


En el ejemplo [Recibir parámetros en una JSP](http://lineadecodigo.com/2006/12/27/recibir-parametros-en-una-jsp/) utilizábamos el método [`getParameter()`](http://w3api.com/wiki/Java:ServletRequest.getParameter()), que devuelve un valor asociado a un parámetro. Cuando existen varios valores con el mismo nombre, `getParameter()` devuelve únicamente el primero.


Como en este caso queremos obtener todas las opciones seleccionadas, utilizamos [`getParameterValues()`](http://w3api.com/wiki/Java:ServletRequest.getParameterValues()). El método devuelve un array de `String` con todos los valores asociados al parámetro:


```java
<%
  String[] favoritos = request.getParameterValues("favoritos");
%>
```


Si no se selecciona ninguna opción, `getParameterValues("favoritos")` puede devolver `null`, por lo que conviene comprobar el resultado antes de recorrerlo. Para mostrar todas las opciones recibidas podemos utilizar un bucle `for-each`:


```java
<%
  if (favoritos != null) {
    for (String favorito : favoritos) {
      out.println(favorito + "<br>");
    }
  } else {
    out.println("No se ha seleccionado ninguna afición.");
  }
%>
```


El bucle recorre cada elemento del array y lo muestra en una línea diferente. Si el usuario selecciona deportes, cine y lectura, la JSP mostrará esas tres opciones. En este ejemplo los valores proceden de un listado fijo; si se mostraran datos introducidos por usuarios, habría que escapar el texto antes de escribirlo en HTML para evitar inyecciones de marcado.

