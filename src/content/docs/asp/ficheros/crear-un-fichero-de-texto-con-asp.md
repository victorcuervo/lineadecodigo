---
title: "Crear un fichero de texto con ASP"
description: "Descubre cómo crear un fichero de texto con ASP de forma segura y eficiente, usando FileSystemObject y WriteLine para registrar datos al instante."
date: 2009-10-20
updatedDate: 2026-09-11
tags: ["filesystemobject","createtextfile","textstream","write"]
slug: asp/ficheros/crear-un-fichero-de-texto-con-asp
type: doc
topic: asp
id: 4d9b9d90-9af9-462f-bc45-196999c23819
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/crear-fichero.asp
---

Los ficheros de texto pueden ser útiles para almacenar registros sencillos, trazas de ejecución, contadores o información temporal. En [ASP](https://lineadecodigo.com/asp/) clásico, podemos crearlos y escribir en ellos mediante `FileSystemObject`.


Es importante que la carpeta de destino tenga permisos de escritura y que los datos almacenados no sean sensibles ni procedan directamente del usuario sin una validación previa.


## Crear el objeto FileSystemObject


Primero creamos una instancia de `Scripting.FileSystemObject` mediante `Server.CreateObject()`.


```vb.net
Dim fso
Set fso = Server.CreateObject("Scripting.FileSystemObject")
```


El objeto `FileSystemObject` permite trabajar con [ficheros y carpetas desde ASP](https://lineadecodigo.com/asp/ficheros/).


## Crear el fichero de texto


El método `CreateTextFile()` crea el fichero y devuelve un objeto `TextStream`, que utilizaremos para escribir el contenido.


```vb.net
Dim salida
Set salida = fso.CreateTextFile("C:\temp\victor.txt", True, False)
```


Los parámetros de `CreateTextFile()` son:

- La ruta y el nombre del fichero.
- Un valor `Boolean` que indica si se sobrescribirá un fichero existente.
- Un valor `Boolean` que indica si el contenido se guardará como `Unicode`. Si se utiliza `False`, se empleará el formato predeterminado del sistema.

En una aplicación web suele ser preferible obtener una ruta física controlada mediante `Server.MapPath()`:


```vb.net
Dim ruta
ruta = Server.MapPath("/datos/victor.txt")
Set salida = fso.CreateTextFile(ruta, True, False)
```


## Escribir contenido


El método `Write()` añade texto sin introducir un salto de línea. En cambio, `WriteLine()` escribe el texto y añade un salto de línea al final.


```vb.net
salida.Write("Texto sin salto de línea")
salida.WriteLine("Texto seguido de un salto de línea")
```


## Cerrar el fichero y liberar recursos


Cuando terminemos de escribir, debemos ejecutar `Close()` sobre el objeto `TextStream`. Después podemos liberar las referencias asignándoles `Nothing`.


```vb.net
salida.Close
Set salida = Nothing
Set fso = Nothing
```


## Código completo


```vb.net
<%
Dim fso
Dim salida
Dim ruta

ruta = Server.MapPath("/datos/victor.txt")

Set fso = Server.CreateObject("Scripting.FileSystemObject")
Set salida = fso.CreateTextFile(ruta, True, False)

salida.WriteLine("Registro creado desde ASP")
salida.WriteLine("Fecha: " & Now())

salida.Close
Set salida = Nothing
Set fso = Nothing
%>
```


Este ejemplo crea un fichero con `CreateTextFile()`, escribe dos líneas mediante `WriteLine()` y cierra correctamente el `TextStream` antes de liberar los objetos.

