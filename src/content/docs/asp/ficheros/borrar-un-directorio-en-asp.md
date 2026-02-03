---
title: "Borrar un directorio en ASP"
description: ""
date: 2007-02-07
updatedDate: 2026-01-06
tags: ["filesystemobject","response","write","server","createobject"]
slug: asp/ficheros/borrar-un-directorio-en-asp
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81f6-b4b5-fc619589090c
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/borrar-directorio.asp
---

El borrado de un directorio consiste en una operación muy similar al borrado de un fichero. Si para este segundo usamos en [ASP](http://www.manualweb.net/asp/) la función `DeleteFile`, para borrar un directorio en [ASP](http://www.manualweb.net/asp/) usaremos la función `DeleteFolder`. Los argumentos que reciben ambas funciones son exactamente los mismos:

- Nombre del Directorio, el cual queremos borrar.
- Obligatoriedad, el directorio se borrará incluso si el directorio es de solo lectura. Por defecto este valor está a false.

En el caso de que intentemos borrar un directorio que no exista se generará un error. Es por ello que es aconsejable usar el método `FolderExists` que nos indique si el directorio existe. Veamos como sería el código:


```text
<%

 Dim sDirectorio
 sDirectorio = "c:\\temp\\victor"

 Set fso = Server.CreateObject("Scripting.FileSystemObject")

 if (fso.FolderExists(sDirectorio)) then
  fso.DeleteFolder sDirectorio,true
  Response.Write "Borrado el directorio" & sDirectorio    
 else
  Response.Write "No existe el directorio" & sDirectorio
 end if

%>
```


Esto lo deberemos de guardar como un fichero BorradoDirectorio.asp

