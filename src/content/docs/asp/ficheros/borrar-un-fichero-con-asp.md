---
title: "Borrar un fichero con ASP"
description: "Para borrar un fichero con ASP se utiliza el método DeleteFile del objeto FileSystemObject, verificando primero su existencia."
date: 2009-01-25
updatedDate: 2026-01-10
tags: ["fileexists","filesystemobject","deletefile","response","write","server","createobject"]
slug: asp/ficheros/borrar-un-fichero-con-asp
author: victor_cuervo
type: doc
id: 7292fd81-67a6-4c60-972a-345899219596
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/borrar-fichero.asp
---

Una de las operaciones que podemos hacer cuando estemos trabajando con un fichero será lde borrado. Borrar un fichero con [ASP](http://www.manualweb.net/asp/) será tan sencillo como invocar al método DeleteFile. El método DeleteFile depende del objeto FileSystemObjet. Es por ello que lo primero que tendremos que hacer será instanciar el fichero FileSystemObjet.


```visual basic
Set fso = Server.CreateObject("Scripting.FileSystemObject")
```


El método `DeleteFile` lleva dos argumentos. El primero es el nombre del fichero que queremos borrar y el segundo es una condición booleana que indica que hacer en caso de que el fichero sea de solo lectura. Indicando un valor true el fichero se eliminará independientemente de si es de lectura o no. Si bien, por defecto, el valor de este campo es false.


```visual basic
DeleteFile(fichero, obligatorio)
```


Además debemos de tener en cuenta que en el caso de que intentemos borrar un fichero que no existe nos dará fallo. Es por ello que deberemos de comprobar la existencia del mismo mediante el método `FileExists` al cual le pasamos la ruta con el nombre del fichero. El código nos quedará de la siguiente forma:


```visual basic
if (fso.FileExists(sFichero)) then
  fso.DeleteFile sFichero,true
  Response.Write "Borrado el fichero " & sFichero
else
  Response.Write "No existe el fichero " & sFichero
end if
```

