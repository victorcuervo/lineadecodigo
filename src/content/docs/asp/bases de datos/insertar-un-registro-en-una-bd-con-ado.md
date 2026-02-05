---
title: "Insertar un registro en una BD con ADO"
description: "Aprende a insertar un registro en una BD con ADO de manera eficiente. Conéctate, verifica y agrega datos fácilmente con este práctico tutorial."
date: 2010-01-08
updatedDate: 2026-02-05
tags: ["ado","createobject","connection","recordset","insert"]
slug: asp/bases-de-datos/insertar-un-registro-en-una-bd-con-ado
type: doc
topic: asp
id: 2c8a9dfb-adca-8181-9684-fb294bfa4994
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ado/insertar-registro-bd.asp
---

Lo primero que tenemos que hacer para poder insertar un registro en una BD con [ADO](http://www.manualweb.net/asp/) es conectarnos a la base de datos a través de un objeto Connection. A este objeto hay que pasarle la cadena de conexión indicando donde se encuentra la base de datos. Nosotros vamos a hacer la conexión, en este caso, sin usar DSN. Es más recomendable [conectarse a la base de datos vía un DSN](http://lineadecodigo.com/asp/acceder-a-una-base-de-datos-con-asp/), pero esto nos permite ver código nuevo.


## Conectar a la base de datos


Accederemos al fichero directamente:


```javascript
Set db = Server.CreateObject("ADODB.Connection")
Dim DB_CONNECTIONSTRING
DB_CONNECTIONSTRING = "Driver={Microsoft Access Driver (*.mdb)};Dbq=" & Server.MapPath("/db/prueba.mdb") & ";"
db.open DB_CONNECTIONSTRING
```


Tanto en el acceso con DSN o sin DSN el objeto utilizado es un ADODB.Connection.


## Comprobar si el registro existe


Una vez que hemos abierto la conexión con la base de datos tendremos que comprobar que el texto a insertar no existe en la base de datos. Para realizar esta comprobación utilizamos una sentencia SELECT y un objeto ADODB.Recordset.


```javascript
set rs_existe = Server.CreateObject("ADODB.Recordset")
SQLStr = "SELECT valor FROM datos WHERE valor ='" + texto_insertar  + "'"
rs_existe.open SQLStr, DB_CONNECTIONSTRING, adOpenStatic, adLockReadOnly, adCmdText
```


## Insertar el registro


En el caso de que esta búsqueda no nos devuelva ningún registro de la base de datos esto significa que la palabra a insertar no existe en nuestra base de datos. Es por ello que procederemos a realizar la inserción. Lo que estamos haciendo es montar una sentencia SQL de tipo INSERT, la cual ejecutaremos sobre otro ADODB.Recordset.


```javascript
if not (rs_existe.EOF) then
    Response.Write ("El valor a insertar ya existe")
else
    set rs_insert = Server.CreateObject("ADODB.Recordset")
    SQLStr = "INSERT INTO datos VALUES ('" + texto_recibido + "')"
    rs_insert.open SQLStr, DB_CONNECTIONSTRING, adOpenStatic, adLockReadOnly, adCmdText
    Response.Write ("Insertado el valor " + texto_recibido)
end if
```


## Sintaxis de INSERT


Para realizar una inserción en una base de datos utilizamos la sentencia INSERT; la cual tiene la siguiente forma:


```sql
INSERT INTO tabla[s] (campo[s]) VALUES (valor1, valor2,..., valorN)
```


Los valores deberán de coincidir con su posición en la tabla de la base de datos. Con unas pocas líneas de código tenemos nuestro fichero [ASP](http://www.manualweb.net/asp/) que utiliza los objetos de [ADO](http://www.manualweb.net/asp/) para insertar un registro en una BD.

