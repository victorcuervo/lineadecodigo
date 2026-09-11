---
title: "Leer un fichero de texto en ASP"
description: "Aprende a leer un fichero de texto en ASP usando FileSystemObject: abre con OpenTextFile, localiza con Server.MapPath y lee el contenido con ReadAll."
date: 2009-09-29
updatedDate: 2026-09-11
tags: ["filesystemobject","opentextfile","server","mappath","readall"]
slug: asp/ficheros/leer-un-fichero-de-texto-en-asp
type: doc
topic: asp
id: 92a6d421-1d10-43c4-b917-6dbe4a7107a9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/leer-fichero-texto.asp
---

Para leer el contenido de un fichero de texto en ASP utilizaremos el objeto [`FileSystemObject`](http://w3api.com/wiki/ASP:FileSystemObject). El primer paso consiste en crear una instancia mediante `Server.CreateObject`.


## Crear el objeto FileSystemObject


```vb.net
Set objFSO = Server.CreateObject("Scripting.FileSystemObject")
```


Una vez creada la instancia de `FileSystemObject`, debemos abrir el fichero con el método [`OpenTextFile`](http://w3api.com/wiki/ASP:FileSystemObjet.OpenTextFile()). Su sintaxis básica es:


```vb.net
objFSO.OpenTextFile(fichero, modo)
```


El parámetro `fichero` contiene la ruta del archivo y `modo` indica cómo se abrirá:

- `ForReading` (`1`): lectura.
- `ForWriting` (`2`): escritura.
- `ForAppending` (`8`): añadir contenido al final.

## Abrir el fichero


Es aconsejable obtener la ruta física con [`Server.MapPath`](http://w3api.com/wiki/ASP:Server.MapPath()). Si el fichero se llama `texto.txt` y queremos abrirlo en modo lectura, utilizaremos:


```vb.net
Set objFile = objFSO.OpenTextFile(Server.MapPath("texto.txt"), 1)
```


El método `OpenTextFile` devuelve un objeto `TextStream`, que permite acceder al contenido del fichero.


## Leer y mostrar el contenido


Antes de leer, comprobamos mediante `AtEndOfStream` que no estamos al final del fichero. Después usamos `ReadAll` para recuperar todo su contenido, `CStr` para convertirlo en texto y `Response.Write` para mostrarlo:


```vb.net
If Not objFile.AtEndOfStream Then
    texto = CStr(objFile.ReadAll)
End If

Response.Write(texto)
```


## Cerrar el fichero


Finalmente, debemos liberar el recurso mediante el método `Close`:


```vb.net
objFile.Close
```


Así podemos leer y mostrar correctamente un fichero de texto con ASP, `FileSystemObject` y `TextStream`.

