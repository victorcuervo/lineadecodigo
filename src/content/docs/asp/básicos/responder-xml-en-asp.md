---
title: "Responder XML en ASP"
description: "Descubre cómo Responder XML en ASP genera XML válido con Response.ContentType y UTF‑8, usando código simple y seguro para integraciones rápidas y fiables."
date: 2009-10-09
updatedDate: 2026-09-11
tags: ["response","contenttype","write","xml"]
slug: asp/basicos/responder-xml-en-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-810f-8533-e0b4ad7da33c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/generales/reponder-xml.asp
---

Una página creada con [ASP](https://lineadecodigo.com/asp/) clásico no tiene que devolver siempre contenido [HTML](https://lineadecodigo.com/html/). También puede responder con un documento [XML](https://lineadecodigo.com/xml/), siempre que indique el tipo de contenido correcto y genere una estructura válida.


El cliente interpreta la respuesta según las cabeceras `HTTP`. Por eso debemos configurar `Response.ContentType` antes de escribir el documento.


## Configurar el tipo de contenido


Para devolver [XML](https://lineadecodigo.com/xml/), utilizamos el tipo MIME `application/xml`:


```vb.net
Response.ContentType = "application/xml"
```


Algunos sistemas antiguos esperan `text/xml`, pero `application/xml` es la opción recomendada para documentos [XML](https://lineadecodigo.com/xml/) de propósito general.


## Configurar la codificación


Si el documento utiliza `UTF-8`, la cabecera y la declaración [XML](https://lineadecodigo.com/xml/) deben indicar la misma codificación.


```vb.net
Response.CodePage = 65001
Response.Charset = "utf-8"
```


`Response.CodePage` establece la página de códigos utilizada por [ASP](https://lineadecodigo.com/asp/), mientras que `Response.Charset` añade el juego de caracteres a la cabecera `Content-Type`.


## Escribir la declaración XML


La declaración informa sobre la versión y la codificación del documento. En `VBScript`, las comillas incluidas dentro de una cadena se duplican.


```vb.net
Response.Write("<?xml version=""1.0"" encoding=""UTF-8""?>")
```


La declaración debe aparecer al principio de la respuesta, sin espacios ni contenido previo.


## Generar el documento


Después de la declaración, escribimos una estructura [XML](https://lineadecodigo.com/xml/) bien formada. Cada elemento debe cerrarse correctamente y los valores de los atributos deben ir entre comillas.


```vb.net
Response.Write("<datos>")
Response.Write("<nombre edad=""31"">Víctor</nombre>")
Response.Write("</datos>")
```


Cuando los valores procedan de usuarios, formularios o bases de datos, deberán escaparse como contenido [XML](https://lineadecodigo.com/xml/). Para documentos complejos es preferible utilizar una biblioteca o un objeto [DOM](https://lineadecodigo.com/dom/) que construya los nodos y atributos de forma segura.


## Ejemplo completo


El siguiente ejemplo devuelve un documento [XML](https://lineadecodigo.com/xml/) válido y codificado en `UTF-8`:


```vb.net
<%
Option Explicit

Response.Buffer = True
Response.CodePage = 65001
Response.ContentType = "application/xml"
Response.Charset = "utf-8"

Response.Write("<?xml version=""1.0"" encoding=""UTF-8""?>")
Response.Write("<datos>")
Response.Write("<nombre edad=""31"">Víctor</nombre>")
Response.Write("</datos>")
%>
```


La respuesta generada será equivalente a este documento:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<datos>
  <nombre edad="31">Víctor</nombre>
</datos>
```


Este patrón puede utilizarse para integraciones entre sistemas o clientes que necesiten consumir [XML](https://lineadecodigo.com/xml/). Para nuevas API, también conviene valorar formatos como `JSON`, según los requisitos del proyecto.

