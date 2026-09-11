---
title: "Acceder a una base de datos con ASP"
description: "Descubre cómo Acceder a una base de datos con ASP usando ADODB, conexión segura y consultas eficientes; guía paso a paso que impulsa tu desarrollo web."
date: 2009-10-01
updatedDate: 2026-09-11
tags: ["ASP ADO","ASP ADO Connection","ASP ADO RecordSet","ASP ADO RecordSet MoveNext"]
slug: asp/bases-de-datos/acceder-a-una-base-de-datos-con-asp
type: doc
topic: asp
id: 2c8a9dfb-adca-8197-9ef0-d662a9ec6935
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ado/consultar-base-de-datos.asp
---

Para consultar una base de datos desde [ASP](https://lineadecodigo.com/asp/) clásico necesitamos abrir una conexión, ejecutar una [sentencia SQL](https://lineadecodigo.com/sql/), recorrer los registros obtenidos y cerrar todos los recursos.


En este ejemplo utilizaremos `ADO`, el objeto `ADODB.Connection` y un archivo de Microsoft Access con extensión `.mdb`.


## Abrir la conexión


Creamos la conexión mediante `Server.CreateObject()` y obtenemos la ruta física del archivo con `Server.MapPath()`.


```vb.net
Dim conexion
Dim rutaBaseDatos
Dim cadenaConexion

rutaBaseDatos = Server.MapPath("prueba.mdb")
cadenaConexion = "Provider=Microsoft.Jet.OLEDB.4.0;" & _
                  "Data Source=" & rutaBaseDatos & ";"

Set conexion = Server.CreateObject("ADODB.Connection")
conexion.Open cadenaConexion
```


El proveedor `Microsoft.Jet.OLEDB.4.0` se utiliza habitualmente con archivos `.mdb` antiguos. En servidores modernos puede ser necesario instalar y usar `Microsoft.ACE.OLEDB.12.0` o el proveedor compatible disponible en el entorno.


El archivo de la base de datos no debería almacenarse en una carpeta pública. La identidad que ejecuta la aplicación debe disponer únicamente de los permisos necesarios.


## Ejecutar la consulta SQL


Una vez abierta la conexión, ejecutamos una consulta y guardamos el resultado en un objeto `ADODB.Recordset`.


```vb.net
Dim registros
Dim sql

sql = "SELECT valor FROM Datos"
Set registros = conexion.Execute(sql)
```


Es preferible indicar los campos requeridos en lugar de utilizar `SELECT *`. Si la consulta incorpora información procedente del usuario, debemos usar parámetros mediante `ADODB.Command` para evitar una inyección `SQL`.


## Recorrer el Recordset


La propiedad `EOF` indica que hemos llegado al final del conjunto de resultados. Mientras queden filas, podemos leer el campo `valor` y avanzar con `MoveNext`.


```vb.net
Do Until registros.EOF
    Response.Write(Server.HTMLEncode(CStr(registros("valor"))))
    Response.Write("<br>")

    registros.MoveNext
Loop
```


La llamada a `MoveNext` es imprescindible. Si no avanzamos el cursor, el bucle seguirá procesando la misma fila indefinidamente.


`Server.HTMLEncode()` evita que un valor almacenado en la base de datos se interprete como código `HTML` al escribirlo en la respuesta.


## Cerrar los recursos


Al finalizar, cerramos primero el `ADODB.Recordset` y después `ADODB.Connection`. También liberamos las referencias con `Nothing`.


```vb.net
registros.Close
Set registros = Nothing

conexion.Close
Set conexion = Nothing
```


Cerrar los objetos cuanto antes libera conexiones y memoria del servidor.


## Ejemplo completo


El siguiente código reúne todo el proceso:


```vb.net
<%
Option Explicit

Dim conexion
Dim registros
Dim rutaBaseDatos
Dim cadenaConexion
Dim sql

rutaBaseDatos = Server.MapPath("prueba.mdb")
cadenaConexion = "Provider=Microsoft.Jet.OLEDB.4.0;" & _
                  "Data Source=" & rutaBaseDatos & ";"

Set conexion = Server.CreateObject("ADODB.Connection")
conexion.Open cadenaConexion

sql = "SELECT valor FROM Datos"
Set registros = conexion.Execute(sql)

Do Until registros.EOF
    Response.Write(Server.HTMLEncode(CStr(registros("valor"))))
    Response.Write("<br>")

    registros.MoveNext
Loop

registros.Close
Set registros = Nothing

conexion.Close
Set conexion = Nothing
%>
```


Este patrón permite abrir una conexión desde [ASP](https://lineadecodigo.com/asp/), ejecutar una [consulta SQL](https://lineadecodigo.com/sql/), recorrer el `ADODB.Recordset` de forma segura y liberar correctamente los recursos utilizados.

