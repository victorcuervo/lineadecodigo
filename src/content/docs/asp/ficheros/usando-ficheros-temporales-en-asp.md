---
title: "Usando ficheros temporales en ASP"
description: "Genera nombres aleatorios para archivos temporales en ASP con FileSystemObject y GetTempName, evitando colisiones al procesar múltiples peticiones."
date: 2009-10-21
updatedDate: 2026-09-12
tags: ["filesystemobject","server","createobject","response","write"]
slug: asp/ficheros/usando-ficheros-temporales-en-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-81a2-bec8-d6913d26c516
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/fichero-temporal.asp
---

Al realizar pruebas de carga puede ser necesario generar archivos de texto desde [ASP](https://lineadecodigo.com/asp/) clásico. Si muchas peticiones intentan utilizar el mismo nombre de archivo, se pueden producir conflictos al acceder simultáneamente al sistema de archivos.


Cuando el archivo no necesita un nombre concreto, una solución sencilla consiste en generar un nombre temporal aleatorio mediante `FileSystemObject`.


## Generar un nombre temporal


El método `GetTempName()` de `FileSystemObject` devuelve un nombre generado aleatoriamente que puede utilizarse para un archivo temporal.


Primero creamos el objeto con `Server.CreateObject()` y después llamamos a `GetTempName()`:


```vb.net
<%
Option Explicit

Dim fso
Dim nombreTemporal

Set fso = Server.CreateObject("Scripting.FileSystemObject")
nombreTemporal = fso.GetTempName()

Response.Write("El archivo temporal que se va a utilizar es: " & _
    Server.HTMLEncode(nombreTemporal))

Set fso = Nothing
%>
```


En `VBScript`, el operador `&` concatena cadenas. Además, `Server.HTMLEncode()` permite escribir el valor de forma segura dentro de una respuesta `HTML`.


## Qué devuelve GetTempName


`GetTempName()` devuelve solamente un nombre, no una ruta completa, y no crea físicamente el archivo. Si necesitamos guardarlo en una carpeta temporal, podemos combinarlo con la ruta correspondiente y crear después el archivo mediante `CreateTextFile()`.


```vb.net
<%
Option Explicit

Dim fso
Dim carpetaTemporal
Dim rutaTemporal
Dim archivo

Set fso = Server.CreateObject("Scripting.FileSystemObject")
Set carpetaTemporal = fso.GetSpecialFolder(2)

rutaTemporal = fso.BuildPath(carpetaTemporal.Path, fso.GetTempName())
Set archivo = fso.CreateTextFile(rutaTemporal, False)

archivo.WriteLine("Contenido temporal")
archivo.Close

Response.Write("Archivo creado en: " & _
    Server.HTMLEncode(rutaTemporal))

Set archivo = Nothing
Set carpetaTemporal = Nothing
Set fso = Nothing
%>
```


El valor `2` pasado a `GetSpecialFolder()` representa el directorio temporal de `Windows`. Por su parte, `BuildPath()` combina la carpeta y el nombre sin tener que añadir manualmente el separador de rutas.


## Consideraciones sobre concurrencia


Aunque `GetTempName()` reduce la probabilidad de que varias peticiones elijan el mismo nombre, una aplicación con mucha concurrencia debe gestionar posibles errores al crear el archivo. El parámetro `False` de `CreateTextFile()` evita sobrescribir un archivo existente.


Los archivos temporales deben cerrarse con `Close` y eliminarse cuando dejen de ser necesarios. La cuenta utilizada por la aplicación en `IIS` también necesita permisos de escritura sobre la carpeta elegida.

