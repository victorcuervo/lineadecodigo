---
title: "Borrar registros de una base de datos con ADO"
description: "Aprende a borrar registros de una base de datos con ADO y SQL. Conoce la sintaxis y los pasos clave para ejecutar sentencias de manera segura."
date: 2009-02-22
updatedDate: 2026-02-05
tags: ["createobject","connection","command","delete"]
slug: asp/bases-de-datos/borrar-registros-de-una-base-de-datos-con-ado
type: doc
topic: asp
id: 2c8a9dfb-adca-8153-a072-e48eb3215dbf
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/ado/borrar-registro-bd.asp
---

Lanzar el borrado de datos de una tabla no tiene mucho misterio. Un poco de conocimiento del lenguaje SQL y una conexión a la base de datos sería suficiente. Incluso puede a llegar ser peligroso, ya que el lanzamiento de esta sentencia en un entorno no adecuado (y sin backup de por medio) puede ser altamente destructivo. Seguro que todos conocemos a alguien que ha pasado por dicho trance.


## Sintaxis de DELETE


Echemosle un vistazo a como es la query de borrado:


```sql
DELETE FROM tabla
WHERE atributo = valor
```


## Conexión a la base de datos


Desde [ASP](http://www.manualweb.net/asp/) no es muy complejo. Solo hace falta conocer el mecanismo para lanzar queries sobre una base de datos. A partir de ese punto, nuestra imaginación: consultas, creación de tablas, creación de indices, visualizaciones de planes de ejecucion,...


Para empezar, lo primero que tenemos que hacer es definir la conexión a la base de datos. Para ello utilizamos el objeto Server, el cual, nos permite instanciar un objeto del tipo ADODB.Connection. Este objeto representa es la conexión con la base de datos. Esta conexión tiene multiples parámetros, que no vamos a entrar a evaluar ahora, y dos formas de ejecutarla: con o sin DSN.


En este caso, lo que vamos a utilizar es el DSN. Es por ello que necesitaremos haber dado de alta nuestra base de datos como conector ODBC. Nuestro DSN se llama "test".


```javascript
Set db = Server.CreateObject("ADODB.Connection")
Dim DB_CONNECTIONSTRING
DB_CONNECTIONSTRING = "DSN=test"
db.open DB_CONNECTIONSTRING
```


## Ejecutar la sentencia DELETE


Una vez que tenemos la conexión establecida lo que tenemos que crear es un objeto ADODB.Command. Este objeto, que también instanciaremos (como todos los objetos) mediante el objeto Server, nos permitirá lanzar la sentencia de borrado sobre la base de datos.


Con el objeto ADODB.Command tenemos que seguir tres pasos:

1. Indicarle cual es la conexión de la base de datos con la que estamos trabajando. Esto lo hacemos mediante el atributo ActiveConnection, pasandole como valor la instanciación del objeto Connection.
2. Escribir la query que queremos ejecutar. En nuestro caso el DELETE. La cadena de texto con la query la pasamos mediante el atributo CommandText.
3. Ejecutamos la query. Esto lo hacemos invocando al método Execute.

Nos quedaría el siguiente código:


```javascript
Set sqlText = Server.CreateObject("ADODB.Command")
sqlText.ActiveConnection = db
sqlText.CommandText = "DELETE FROM test2 WHERE valor='borrar'"
sqlText.Execute
```


## Cerrar conexiones


Y al final del todo, no olvides cerrar los objetos utilizados y asignarles el valor Nothing, para liberar memoria del servidor. Ojo, el objeto ADODB.Command no tiene método close, a si que solo podrás asignarle el valor de Nothing.


```javascript
Set sqlText = Nothing
db.close
Set db = Nothing
```

