---
title: "Copiar carpetas con ASP"
description: "Descubre cómo copiar carpetas con ASP de manera eficiente y gestionar errores para optimizar tus operaciones en el servidor. ¡No te lo pierdas!"
date: 2009-01-24
updatedDate: 2026-02-05
tags: ["createobject","filesystemobject","copyfolder"]
slug: asp/ficheros/copiar-carpetas-con-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-8186-a017-e1bd76c826b7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ficheros/copiar-carpetas.asp
---

Muchas veces estamos trabajando con ficheros en tiempo real donde guardamos nuestras estadísticas, datos de trazas de ejecución de código o simplemente información útil de la propia aplicación. Toda esta información es guardada en directorios del servidor web habilitados al respecto. Y no nos vamos a engañar, el volumen de información que podemos generar puede llegar a ser desorbitado.


Lo más normal cuando trabajamos con volumenes de información grandes es el datar esos ficheros de tal manera que nos sea posible saber el dia al cual corresponde dicho fichero. Por consiguiente deberemos de tener operaciones que eliminen los más antiguos, o los menos usados,...


Ante tal panorama es muy probable que se nos presente "el problema", más bien necesidad, de copiar directorios de un sitio a otro.


## Instanciar el objeto FileSystemObject


Lo primero que tendremos que hacer será instanciar el objeto FileSystemObjet.


```javascript
Set fso = Server.CreateObject("Scripting.FileSystemObject")
```


## Método CopyFolder


Para copiar carpetas con [ASP](http://www.manualweb.net/asp/) nos apoyaremos en el método CopyFolder. Aunque pueda parecer sencillo, deberemos de tener en cuenta una serie de cosas:


### Posibles formas de copiar directorios


**a) Copiar todo el contenido del directorio A en el directorio B**


Deberemos de utilizar los dos directorios tal cual.


```javascript
CopyFolder "c:\directorio1", "c:\directorio2", true
```


**b) Crear el directorio A dentro del directorio B**


Deberemos de utilizar el separador de directorios en el directorio destino.


```javascript
CopyFolder "c:\directorio1", "c:\directorio2\", true
```


**c) Crear alguno de los directorios de A en B**


Podemos utilizar comodines en el directorio origen, mediante los cuales indiquemos que directorios se copiaran en el destino.


```javascript
CopyFolder "c:\directorio1\d*", "c:\directorio2", true
```


## Sobrescritura de directorios


El tercer parámetro del método nos sirve para la sobrescritura. Si el destino existe y queremos que se sobrescriba debremos de poner el tercer parámetro a true, sino deberemos dejarlo a false.


## Gestión de errores


Es muy posible que al utilizar este método se nos generen errores, ya sea porque existan directorios y no hayamos activado la sobrescritura o porque no exista el origen. Es por ello que deberemos de utilizar una gestión de errores.


Primero desactivaremos la gestión de errores del servidor:


```javascript
On Error Resume Next
```


Y posteriormente preguntaremos si se ha producido algún error:


```javascript
If Err.Number <> 0 then
  'Gestión del error
end if
```

