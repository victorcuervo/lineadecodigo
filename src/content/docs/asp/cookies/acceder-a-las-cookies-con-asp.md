---
title: "Acceder a las cookies con ASP"
description: "Aprende a acceder y gestionar cookies con ASP. Descubre cómo usar Request.Cookies y Response.Cookies para almacenar información del usuario de forma segura."
date: 2009-10-02
updatedDate: 2026-02-11
tags: ["for-each","cookie","request","response"]
slug: asp/cookies/acceder-a-las-cookies-con-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-81a6-bf6a-f353a31b0851
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/usuarios/listar-cookies.asp
---

Las cookies son ficheros de información que van dejando las páginas web. En dicha información podemos encontrar múltiples cosas, unas veces información legible, otras encriptada, pero siempre relativa al usuario.


Solamente podremos acceder a cookies que hayan sido generadas en nuestro dominio. Es decir, nunca podremos acceder a la información de cookies de otra página web desde la nuestra. Es por ello que es un mecanismo con limitaciones de seguridad.


## Acceder a la colección de Cookies


Si queremos acceder a las cookies con [ASP](http://www.manualweb.net/asp/) lo primero que debemos de hacer es acceder a la colección que contiene las mismas. Esta colección se encuentra en el objeto [Request](http://w3api.com/wiki/ASP:Request) y se llama [Cookies](http://w3api.com/wiki/ASP:Request.Cookies()).


Debido a que la información sobre las cookies nos viene almacenada en una colección podemos aprovechar la secuencia de control for-each para recorrer dicha colección.


```javascript
for each item in Request.Cookies
 ...
next
```


## Cookies simples con par nombre/valor


Las cookies pueden ser de dos tipos. Aquellas que solo tengan un par nombre/valor o las que sean una colección de pares nombre/valor. En el primer caso, el sencillo, nos valdrá con indicar el nombre de la cookie para obtener su valor.


```javascript
for each item in Request.Cookies
    Response.Write "<p><strong>" + item + "</strong>:" + Request.Cookies(item) + "</p>"
next
```


## Cookies con múltiples pares clave/valor


En los casos de que la cookie almacene un conjunto de parejas clave/atributo y si queremos desglosar esta información podemos utilizar el método .HasKeys el cual nos dice si la información es un valor o un conjunto de parejas clave/atributo.


Si no utilizamos el método .HasKeys nos devolverá información del tipo:


```javascript
NORMAL=blue&ACTIVO=red&VISITADO=red
```


Si queremos desglosar esta información, volvemos a utilizar una estructura for-each:


```javascript
for each item in Request.Cookies
  if Request.Cookies(item).HasKeys then
    'La cookie es una colección
    Response.Write("<p>La cookie <b>" + item 
       + "</b> tiene un conjuno de parejas clave/atributo.")
    for each subitem in Request.Cookies(item)
      Response.Write "<br></br><strong>" + subitem + "</strong>:"
       + Request.Cookies(item)(subitem)
    next
    Response.Write("</p>")
  end if
next
```


## Generar cookies con ASP


Si no tenemos cookies generadas en nuestro servidor, para poder ejecutar este ejemplo puedes generar cookies al principio del fichero. Para ello utilizamos el objeto [Response](http://w3api.com/wiki/ASP:Response) y su colección [Cookies](http://w3api.com/wiki/ASP:Response.Cookies()) de la siguiente forma:


```javascript
<%
  'Mandamos una serie de cookies para probar el ejemplo
  Response.Cookies("musicaPreferida") = "pop"
  Response.Cookies("peliculaPreferida") = "Espartaco"
  Response.Cookies("musicaPreferida").expires = "12/12/2009"  

  Response.Cookies("enlace")("normal") = "blue"
  Response.Cookies("enlace")("visitado") = "red"
  Response.Cookies("enlace")("activo") = "red"
%>
```

