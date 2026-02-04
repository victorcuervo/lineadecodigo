---
title: "Listar contenido de un directorio con ASP"
description: ""
date: 2009-02-03
updatedDate: 2026-01-10
tags: ["filesystemobject","folder"]
slug: asp/ficheros/listar-contenido-de-un-directorio-con-asp
type: doc
topic: asp
id: 91150f03-8553-41e0-bcde-7bddeacc5c1f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/listar-contenido-directorio.asp
---

Una de las cosas que nos permite el objeto FileSystemObject es listar el contenido de un directorio. Esto nos puede servir si queremos implementar mediante [ASP](http://www.manualweb.net/asp/) una especie de navegador de carpetas del servidor o algo por el estilo. De esta manera y junto con el resto de características del objeto FileSystemObject podemos llegar a implementar un verdadero gestor de los ficheros de nuestro servidor. Lo primero que tenemos que hacer es obtener una referencia a dicho objeto:


```text
Set fso = CreateObject("Scripting.FileSystemObject")
```


Una vez instanciado el objeto FileSystemObject, lo que tenemos que hacer es recuperar una referencia a la carpeta de la cual queremos listar los archivos. Para ello nos apoyamos en el método .GetFolder().


```text
Set directorio = fso.GetFolder ("C:\windows")
```


Esta referencia, en si, es otro objeto, el cual contendrá el listado de ficheros. A si que, lo que pasaremos a hacer es recorrer dicho objeto ayudándonos de un bucle for..each.


```text
For Each fichero IN directorio.Files
   ...
Next
```


Directamente podemos volcar el contenido de la variable fichero, lo cual nos dará información sobre el mismo. Por otro lado, si queremos obtener solo el nombre del fichero, podemos crear un objeto File. Del objeto file podemos utilizar la propiedad Name para obtener únicamente el nombre del fichero, sin la ruta.


```text
Set file = fso.GetFile(fichero)
Response.Write fichero.Name &"<br></br>"
```


El código completo nos quedaría de la siguiente forma:


```text
For Each fichero IN directorio.Files
   Set file = fso.GetFile(fichero)
   Response.Write (fichero.Name)&"<br></br>"
Next
```

