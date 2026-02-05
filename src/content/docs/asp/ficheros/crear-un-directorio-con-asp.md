---
title: "Crear un directorio con ASP"
description: "Aprende a crear un directorio con ASP de forma sencilla y evita errores validando la existencia del directorio antes de crearlo. ¡Optimiza tu código ahora!"
date: 2009-01-18
updatedDate: 2026-02-05
tags: ["createobject","filesystemobject","folderexists","createfolder"]
slug: asp/ficheros/crear-un-directorio-con-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-81ee-9248-e58d309d0faf
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/crear-directorio.asp
---

La forma de crear un directorio con [ASP](http://www.manualweb.net/asp/) es muy sencilla. Al igual que el resto de operaciones con ficheros utilizaremos el objeto FileSystemObject.


## Crear el objeto FileSystemObject


Así tendremos una primera línea como esta:


```javascript
Set fso = CreateObject("Scripting.FileSystemObject")
```


Los objetos siempre los creamos mediante la clausula CreateObject(nombreDelObjeto).


## Validar y crear el directorio


Una vez creado el objeto simplemente deberiamos de usar el método CreateFolder(nombreDelDirectorio), pero si existe el directorio nos va a dar un error. Es por ello que deberemos de validar la existencia del directorio mediante FolderExists(nombreDelDirectorio).


```javascript
if (Not fso.FolderExists(carpeta)) then
     Set fol = fso.CreateFolder(carpeta)
end if
```

