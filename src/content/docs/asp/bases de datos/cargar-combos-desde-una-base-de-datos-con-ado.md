---
title: "Cargar combos desde una Base de Datos con ADO"
description: "Descubre cómo cargar combos desde una base de datos con ADO y mejora la interactividad de tus formularios de manera dinámica y eficiente."
date: 2009-02-23
updatedDate: 2026-02-05
tags: ["createobject","connection","recordset","select","movenext"]
slug: asp/bases-de-datos/cargar-combos-desde-una-base-de-datos-con-ado
type: doc
topic: asp
id: 2c8a9dfb-adca-8172-989e-cef296a9a54c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ado/cargar-combo-desde-bd.asp
---

Si los valores de un combo van a ser variables es recomendable extraer esta información de una base de datos, en vez de tenerlo codificados directamente en nuestro [HTML](https://www.manualweb.net/html/). En este ejemplo vamos a ver como cargar combos desde una Base de Datos con [ADO](http://www.manualweb.net/asp/).


La idea es tener almacenada la lista de valores (diferentes opciones) en una tabla de tal manera que a la hora de crear un formulario generaremos dinámicamente la lista de opciones.


## Estructura de la tabla


La tabla podrá tener la siguiente forma:


| **Deporte** |
| ----------- |
| Fútbol      |
| Baloncesto  |
| Atletismo   |
| Voleibol    |
| Gimnasia    |

undefined








undefined
## Conectarse a la base de datos


Los pasos a seguir para volcar el contenido de esta tabla sobre los combos son los siguientes:


En primer lugar conectarnos a la base de datos que tenga la tabla. Esto lo podemos hacer mediante DSN y sin DSN. Nosotros lo vamos a hacer mediante DSN:


```javascript
Set db = Server.CreateObject("ADODB.Connection")
Dim DB_CONNECTIONSTRING
DB_CONNECTIONSTRING = "DSN=BaseDatosDeportes;"
db.open DB_CONNECTIONSTRING
```


La conexión a la base de datos la realizamos mediante el objeto Connection.


## Crear el RecordSet


En segundo lugar crearemos un RecordSet el cual almacenara los datos de la tabla deportes. A este RecordSet debemos de decirle que almacenará todas las filas de la tabla.


```javascript
set deportes = Server.CreateObject ("ADOBD.RecordSet")
SQLStr = "SELECT * FROM deportes"
deportes.open SQLStr, DB_CONNECTIONSTRING, adOpenStatic, adLockReadOnly, adCmdText
```


Las constantes adOpenStatic, adLockReadOnly, adCmdText las encontraremos en el archivo [adovbs.inc](http://adovbs.inc/) el cual deberemos de incluir en la página donde este el script.


## Generar el combo


Como tercer paso recorreremos el RecordSet mientras existan datos. Para ello utilizaremos alguna estructura repetitiva. A la hora de mostrar los datos no solamente escribiremos en pantalla el texto que haya en en RecordSet, sino que habrá que acompañarlo con el texto de creación del combo del formulario, mediante las etiquetas SELECT y [OPTION](https://www.w3api.com/HTML/option/selected/).


```javascript
<select name="deportes">
<%
  while not deportes.EOF
    Response.Write("<option value="" + deportes("deporte") + "">")
    Response.Write(deportes("deporte") + "</option>")
   
     ' Nos desplazamos por el RecordSet
     deportes.MoveNext
   
  loop
%>
</select>
```


## Cerrar conexiones


Solo nos quedará anular los objetos y cerrar las conexiones:


```javascript
deportes.close
set deportes = Nothing
db.close
Set db = Nothing
```

