---
title: "Ficheros"
description: "Gestiona ficheros en ASP clásico con FileSystemObject: crea directorios, escribe y lee archivos, comprueba rutas y elimina recursos con seguridad."
date: 2026-09-13
updatedDate: 2026-09-13
tags: ["file","folder","createfolder","deletefile","filesystemobject"]
slug: asp/ficheros
type: category
topic: asp
id: 3daa9dfb-adca-8083-ae89-c111e1a47209
author: victor_cuervo
---

## ¿Qué son los ficheros en ASP?


Los **ficheros en ASP** son archivos almacenados en el sistema de archivos del servidor que una aplicación puede crear, leer, modificar, copiar, mover o eliminar durante la ejecución de una página `.asp`. Estas operaciones se realizan en el servidor; el navegador solo recibe la respuesta generada por ASP.


La forma habitual de trabajar con archivos y directorios es mediante `Scripting.FileSystemObject`, un **objeto COM** proporcionado por **Windows Script Host**. En [ASP](https://lineadecodigo.com/asp/) se instancia con `Server.CreateObject` y ofrece métodos como `CreateTextFile`, `OpenTextFile`, `CreateFolder`, `DeleteFile` y `DeleteFolder`.


[ASP](https://lineadecodigo.com/asp/) utiliza rutas físicas para acceder al disco. `Server.MapPath` convierte una ruta virtual de la aplicación, como `./datos`, en la ruta física correspondiente del servidor. Antes de operar conviene comprobar la existencia del recurso con `FileExists` o `FolderExists`, tanto para evitar errores como para decidir si debe crearse.


## Características de los ficheros en ASP

- **Ejecución en el servidor:** el código accede al sistema de archivos con la identidad configurada para el sitio o el grupo de aplicaciones. Esa cuenta necesita permisos de lectura, escritura o borrado según la operación.
- **Gestión conjunta de archivos y directorios:** `FileSystemObject` permite crear directorios, construir rutas con `BuildPath`, abrir archivos de texto y eliminar recursos sin recurrir a componentes externos.
- **Modos de apertura:** `OpenTextFile` puede abrir un archivo para lectura, escritura o anexado. Las constantes habituales son `ForReading = 1`, `ForWriting = 2` y `ForAppending = 8`.
- **Comprobaciones previas:** `FileExists` y `FolderExists` permiten confirmar que una ruta existe antes de abrirla o borrarla. Esto reduce errores en tiempo de ejecución.
- **Cierre explícito:** un objeto `TextStream` debe cerrarse con `Close` al terminar. Así se liberan el descriptor del archivo y los bloqueos asociados.
- **Codificación limitada:** `CreateTextFile` y `OpenTextFile` trabajan normalmente con texto ASCII o Unicode UTF-16. Si una aplicación necesita UTF-8, suele emplearse `ADODB.Stream` en lugar de `FileSystemObject`.
- **Seguridad de las rutas:** una ruta no debe construirse directamente con datos recibidos del usuario. Sin validación, secuencias como `../` pueden permitir acceso fuera del directorio previsto.

## ¿Por qué aprender sobre ficheros en ASP?


Conocer la gestión de ficheros permite resolver tareas que no necesitan una base de datos: generar registros sencillos, exportar resultados, leer plantillas de texto, almacenar archivos temporales o servir contenido creado por otros procesos.


También ayuda a mantener [aplicaciones ASP](https://lineadecodigo.com/asp/) existentes. Muchos proyectos clásicos utilizan archivos de configuración, importaciones CSV, logs y documentos generados dinámicamente. Entender `FileSystemObject`, las rutas físicas y los permisos del servidor permite diagnosticar errores frecuentes como “Permission denied”, “Path not found” o intentos de abrir archivos que todavía están bloqueados.


El acceso al disco debe reservarse para datos adecuados a este tipo de almacenamiento. Cuando varias peticiones pueden modificar el mismo archivo, existe riesgo de colisiones y pérdida de información; para datos estructurados, búsquedas frecuentes o escrituras concurrentes, una base de datos suele ofrecer mayor consistencia.


## Ejemplo de Ficheros en ASP


El siguiente ejemplo crea un directorio si no existe, genera un fichero de texto, lee su contenido y elimina los recursos creados. La cuenta que ejecuta [ASP](https://lineadecodigo.com/asp/) debe disponer de permisos de escritura y borrado sobre la ubicación resuelta por `Server.MapPath`.


```javascript
<%
Option Explicit

Const ForReading = 1

Dim sistemaArchivos
Dim rutaDirectorio
Dim rutaFichero
Dim archivoTexto
Dim contenido
Dim directorio

Set sistemaArchivos = Server.CreateObject("Scripting.FileSystemObject")

rutaDirectorio = Server.MapPath("./datos")

If Not sistemaArchivos.FolderExists(rutaDirectorio) Then
    sistemaArchivos.CreateFolder rutaDirectorio
End If

rutaFichero = sistemaArchivos.BuildPath(rutaDirectorio, "ejemplo.txt")

Set archivoTexto = sistemaArchivos.CreateTextFile(rutaFichero, True, False)
archivoTexto.WriteLine "Fichero creado desde ASP clásico."
archivoTexto.WriteLine "Fecha: " & Now()
archivoTexto.Close
Set archivoTexto = Nothing

If sistemaArchivos.FileExists(rutaFichero) Then
    Set archivoTexto = sistemaArchivos.OpenTextFile(rutaFichero, ForReading, False)
    contenido = archivoTexto.ReadAll
    archivoTexto.Close
    Set archivoTexto = Nothing

    Response.Write "<pre>" & Server.HTMLEncode(contenido) & "</pre>"
End If

If sistemaArchivos.FileExists(rutaFichero) Then
    sistemaArchivos.DeleteFile rutaFichero, True
End If

If sistemaArchivos.FolderExists(rutaDirectorio) Then
    Set directorio = sistemaArchivos.GetFolder(rutaDirectorio)

    If directorio.Files.Count = 0 And directorio.SubFolders.Count = 0 Then
        sistemaArchivos.DeleteFolder rutaDirectorio, True
    End If

    Set directorio = Nothing
End If

Set sistemaArchivos = Nothing
%>
```


`Server.MapPath("./datos")` limita el ejemplo a un directorio de la aplicación. `BuildPath` combina el directorio y el nombre del archivo utilizando el separador correcto del sistema, evitando concatenaciones manuales.


El segundo argumento de `CreateTextFile` es `True`, por lo que reemplaza `ejemplo.txt` si ya existe. El tercer argumento es `False`, de modo que crea texto ASCII. Tras cerrar el flujo, el código vuelve a abrir el archivo en modo lectura y protege la salida con `Server.HTMLEncode` antes de enviarla al navegador.


Las comprobaciones finales evitan intentar borrar recursos inexistentes. El directorio solo se elimina si no contiene otros archivos ni subdirectorios, una precaución útil para no borrar contenido ajeno al ejemplo.

