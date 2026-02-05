---
title: "Variables del servidor con ASP"
description: "Descubre cómo manejar variables del servidor con ASP para obtener información clave del cliente y del servidor de manera eficaz y técnica."
date: 2009-01-08
updatedDate: 2026-02-05
tags: ["request","servervariables","for-each"]
slug: asp/basicos/variables-del-servidor-con-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-8158-bf35-fc10c736021b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/generales/variables-del-servidor.asp
---

Vamos a ver el código necesario para obtener todas las variables del servidor. En primer lugar tenemos que saber que las variables del servidor son aquellas que se envían o reciben del servidor dentro del mensaje http. En dichas variables se envía información relacionada con el cliente (tipo de navegador que utiliza, IP desde la que realiza la llamada,….) y con el servidor (nombre del servidor, directorio físico del fichero sobre el que se realiza la llamada,…).


## Obtener una variable del servidor


Para obtener una determinada variable del servidor utilizaremos el objeto Request de la siguiente manera:


```javascript
variable = Request.ServerVariables("nombreDeLaVariable")
```


Vemos que debemos de indicarle una determinada variable del servidor para conocer su valor. Por ejemplo, si queremos conocer la dirección IP desde la que se conecta el cliente pondremos:


```javascript
IP = Request.Servervariables("REMOTE_ADDR")
```


## Obtener todas las variables


Ahora nos enfrentamos al problema de conocer el nombre de todas las variables del servidor para poder obtener toda la información. Esto se resuelve si utilizamos como nombre de variable ALL_HTTP. En dicha variable se almacena la información que pueden devolver todas las variables.


```javascript
todaLaInformacion = Request.Servervariables("ALL_HTTP")
```


Esto nos devolverá un chorro de información como este…


```text
HTTP_ACCEPT:*/*
HTTP_ACCEPT_LANGUAGE:es
HTTP_CONNECTION:Keep-Alive
HTTP_HOST:www.aulambra.com
HTTP_REFERER:http://www.aulambra.com/ver.asp?id=71&tipo=Ejecucion
HTTP_USER_AGENT:Mozilla/4.0
 (compatible; MSIE 6.0; Windows NT 5.1; Q312461; .NET CLR 1.0.3705)
HTTP_COOKIE:RT_id=1529558373;
 ASPSESSIONIDQQGGGDNO=LMFNELDDCKEPKMCAGDKHCIHC
HTTP_ACCEPT_ENCODING:gzip, deflate
```


## Recorrer todas las variables


Pero seguimos sin conocer los nombres de las variables y el valor especifico que estas nos devuelven. Para solucionarlo, lo que vamos a hacer es recorrer la colección Request.ServerVariables utilizando una estructura del tipo for each. Cada item de la colección contendrá el nombre de la variable del servidor.


```javascript
for each item in Request.ServerVariables
  Response.Write ("<b>" & item & "=</b> "
   & Request.ServerVariables(Item) & "<br></br>")
next
```

