---
title: "Leer de un Excel con ASP"
description: "Descubre cómo leer un Excel con ASP usando ADO, conecta y recorre datos fácilmente. Aprende paso a paso y optimiza tu web con este método rápido y fiable."
date: 2009-09-03
updatedDate: 2026-09-13
tags: ["recordset","server","createobject","mappath"]
slug: asp/bases-de-datos/leer-de-un-excel-con-asp
type: doc
topic: asp
id: 821b76f7-c645-46eb-b56c-c8a7aefbca89
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ado/leer-excel.asp
---

Desde una aplicación [`ASP`](http://www.manualweb.net/asp/) podemos acceder a una hoja de cálculo de `Excel` para leer su contenido. Para ello utilizaremos `ADO` (`ActiveX Data Objects`), igual que cuando consultamos una base de datos de `Access`.


## Preparar el rango de datos


Primero debemos asignar un nombre al rango de celdas que queremos consultar. En `Excel`, seleccionamos los registros y usamos la opción `Insertar > Nombre > Definir`. En este ejemplo, el rango se llamará `Alumnos` y funcionará como un [`RecordSet`](http://w3api.com/wiki/ADO:RecordSet).


## Crear y abrir la conexión


Creamos una conexión `ADODB.Connection` mediante `Server.CreateObject`. En la cadena de conexión indicamos el fichero `Libro1.xls`, cuya ruta física obtenemos con [`Server.MapPath`](http://w3api.com/wiki/ASP:Server.MapPath()), y utilizamos el controlador de `Microsoft Excel`:


```vb.net
Set conexion = Server.CreateObject("ADODB.Connection")

conexion.Open "DBQ=" & Server.MapPath("Libro1.xls") _
    & ";DRIVER={Microsoft Excel Driver (*.xls)};"
```


## Consultar el rango de Excel


El rango `Alumnos` puede consultarse como si fuera una tabla. Creamos el `RecordSet` ejecutando una sentencia `SELECT`:


```vb.net
Set rs = conexion.Execute("SELECT * FROM [Alumnos]")
```


A partir de ese momento podemos utilizar propiedades y métodos como `EOF`, `BOF`, `MoveNext` y `MovePrevious`.


## Recorrer filas y columnas


La colección `Fields` contiene las columnas del `RecordSet`. Con `Fields.Count` obtenemos su número y recorremos cada fila hasta alcanzar `EOF`:


```vb.net
Dim columnas
columnas = rs.Fields.Count

Do While Not rs.EOF
    For i = 0 To columnas - 1
        Response.Write rs.Fields.Item(i).Value
    Next

    rs.MoveNext
Loop
```


Es importante ejecutar `rs.MoveNext` al final de cada iteración para avanzar a la siguiente fila y evitar un bucle infinito.


## Mostrar nombres y valores


Cada elemento de `Fields` expone `Value`, con el contenido de la celda, y `Name`, con el nombre de la columna:


```vb.net
Response.Write rs.Fields.Item(i).Value
Response.Write rs.Fields.Item(i).Name
```


Finalmente, cerramos el `RecordSet` y la conexión para liberar los recursos:


```vb.net
rs.Close
Set rs = Nothing

conexion.Close
Set conexion = Nothing
```

