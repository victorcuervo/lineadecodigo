---
title: "Directorios especiales en ASP"
description: "Descubre cómo usar FileSystemObject en ASP para localizar rápidamente los Directorios especiales en ASP, optimizando rutas del sistema y mejorando tu código con soluciones seguras y eficientes."
date: 2009-10-26
updatedDate: 2026-09-12
tags: ["filesystemobject","folder","createobject","response","write"]
slug: asp/ficheros/directorios-especiales-en-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-81e3-babb-c330699cf8ec
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/directorios-especiales.asp
---

Cuando una aplicación necesita crear archivos, puede ser útil conocer la ubicación de algunos directorios especiales del sistema. En [ASP](https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/directorios-especiales.asp) clásico, el objeto `FileSystemObject` permite consultar carpetas conocidas de `Windows` mediante el método `GetSpecialFolder()`.


Este método recibe un identificador numérico y devuelve un objeto `Folder` asociado al directorio solicitado.


## Identificadores de las carpetas especiales


`GetSpecialFolder()` admite estos tres valores:

- `0`: carpeta donde está instalado `Windows`.
- `1`: carpeta del sistema de `Windows`.
- `2`: carpeta de archivos temporales.

Estas ubicaciones dependen de la configuración del servidor, por lo que es preferible consultarlas en tiempo de ejecución en lugar de escribir rutas fijas en el código.


## Crear el FileSystemObject


Antes de llamar a `GetSpecialFolder()`, debemos crear una instancia de `Scripting.FileSystemObject` mediante `Server.CreateObject()`.


```vb.net
Dim fso

Set fso = Server.CreateObject("Scripting.FileSystemObject")
```


La identidad utilizada por la aplicación en `IIS` determinará qué operaciones pueden realizarse posteriormente sobre esas carpetas.


## Obtener las carpetas


Cada llamada devuelve un objeto `Folder`. Su propiedad `Path` contiene la ruta completa del directorio.


```vb.net
Dim carpetaWindows
Dim carpetaSistema
Dim carpetaTemporal

Set carpetaWindows = fso.GetSpecialFolder(0)
Set carpetaSistema = fso.GetSpecialFolder(1)
Set carpetaTemporal = fso.GetSpecialFolder(2)
```


## Mostrar las rutas


Podemos escribir las rutas en la respuesta mediante `Response.Write`. Como se trata de valores insertados en una página `HTML`, utilizamos `Server.HTMLEncode()`.


```vb.net
Response.Write("Carpeta de Windows: " & _
    Server.HTMLEncode(carpetaWindows.Path) & "<br>")

Response.Write("Carpeta del sistema: " & _
    Server.HTMLEncode(carpetaSistema.Path) & "<br>")

Response.Write("Carpeta temporal: " & _
    Server.HTMLEncode(carpetaTemporal.Path) & "<br>")
```


## Ejemplo completo


El siguiente código crea el objeto `FileSystemObject`, recupera las tres carpetas especiales y muestra sus rutas:


```vb.net
<%
Option Explicit

Dim fso
Dim carpetaWindows
Dim carpetaSistema
Dim carpetaTemporal

Set fso = Server.CreateObject("Scripting.FileSystemObject")

Set carpetaWindows = fso.GetSpecialFolder(0)
Set carpetaSistema = fso.GetSpecialFolder(1)
Set carpetaTemporal = fso.GetSpecialFolder(2)

Response.Write("Carpeta de Windows: " & _
    Server.HTMLEncode(carpetaWindows.Path) & "<br>")

Response.Write("Carpeta del sistema: " & _
    Server.HTMLEncode(carpetaSistema.Path) & "<br>")

Response.Write("Carpeta temporal: " & _
    Server.HTMLEncode(carpetaTemporal.Path) & "<br>")

Set carpetaWindows = Nothing
Set carpetaSistema = Nothing
Set carpetaTemporal = Nothing
Set fso = Nothing
%>
```


La carpeta temporal suele ser la opción adecuada para archivos de corta duración, pero la aplicación debe comprobar sus permisos y eliminar los archivos cuando dejen de ser necesarios. Este código está orientado a servidores `Windows` con ASP clásico e `IIS`.

