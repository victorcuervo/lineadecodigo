---
title: "Carpeta padre"
description: "Artículo que explica cómo usar ASP para obtener la carpeta padre de una ruta en el sistema de archivos."
date: 2006-12-03
updatedDate: 2026-01-06
tags: ["carpeta","filesystemobject","createobject"]
slug: asp/ficheros/carpeta-padre
type: doc
topic: asp
id: 2c5a9dfb-adca-8020-bb1b-d4af490a59e3
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/carpeta-padre.asp
---

La idea es utilizar el lenguaje [ASP](http://www.manualweb.net/asp/) para extraer información del sistema de archivos de nuestro servidor. Y que a partir de una ruta dada obtengamos el nombre del directorio padre de dicha ruta. Hay que tener en cuenta que la ruta puede acabar con el nombre de un fichero o el nombre de un directorio. Así podríamos estar buscando el nombre de un directorio padre de una de estas dos rutas:

- Ruta1 = “c:\windows\system\at.dll”
- Ruta2 = “c:\windows\system\cache”

Lo primero que tenemos que hacer es instanciar el objeto “Scripting.FileSystemObject”, el cual nos permite manejar el sistema de archivos. Para ellos utilizaremos el método CreateObject del objeto Server. Quedándonos la siguiente [línea de código](/):


```vb.net
Set fso = Server.CreateObject("Scripting.FileSystemObject")
```


La forma de extraer el nombre del directorio padre es muy sencilla ya que solamente necesitaremos utilizar el método GetParentForlderName sobre el objeto en el que hayamos cargado el objeto “Scripting.FileSystemObject” y pasarle como parámetro la ruta de la cual queramos conocer su directorio padre. El código [ASP](http://www.manualweb.net/asp/) será el siguiente:


```vb.net
<%
dim ruta1, ruta2

ruta1 = "c:\windows\system\atl.dll"
ruta2 = "c:\windows\system\cache"

Set fso = Server.CreateObject("Scripting.FileSystemObject")

Response.Write ruta1 + " -carpeta padre---> " + fso.GetParentFolderName(ruta1) + "<br>"
Response.Write ruta2 + " -carpeta padre---> " + fso.GetParentFolderName(ruta2) + "<br>"
%>
```


En ambos casos, la carpeta padre será “c:\windows\system”.

