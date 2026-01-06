---
title: "Actualizar datos con JDBC"
description: "Qué pasos tenemos que dar en Java para poder actualizar datos con JDBC utilizando una sentencia UPDATE y una sentencia PreparedStatement."
date: 2006-11-15
updatedDate: 2026-01-06
tags: ["jdbc","update","connection","executeupdate","preparedstatement","sqlexception","where"]
slug: java/jdbc/actualizar-datos-con-jdbc
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/ActualizarDatos.java
topic: java
---

Uno de los procesos habituales, a la hora de realizar mantenimiento sobre una tabla, es el de la actualización. Así que hoy veremos cómo actualizar datos con JDBC mediante [Java](http://www.manualweb.net/java/). Mediante las actualizaciones podremos modificar los valores de datos que ya tengamos insertados en nuestras tablas. Para este menester, [SQL](http://lineadecodigo.com/categoria/sql/) nos proporciona la sentencia `UPDATE`. Veamos un poco más en detalle cómo construir este tipo de sentencias.


```sql
UPDATE tabla SET campo=valor WHERE campo=condicion
```


Se actualizarán todas las filas que cumplan la condición (`WHERE campo=condicion`). Y la actualización consistirá en asignar nuevos valores a ciertas columnas (`SET campo=valor`). Si queremos actualizar más de una columna, utilizaremos una coma entre cada actualización de campo.


```sql
UPDATE tabla SET campo1=valor1, campo2=valor2 WHERE campo=condicion
```


Para poder ejecutar la sentencia de `UPDATE` mediante [JDBC](http://lineadecodigo.com/tag/java-jdbc/) deberemos de seguir los siguientes pasos. El primero de ellos será el de conectar contra la base de datos sobre la que queremos lanzar la actualización. Para ello utilizamos las clases [`Connection`](https://w3api.com/Java/Connection-java-sql/) y [`DriverManager`](https://w3api.com/Java/DriverManager/).


```java
String sDriver = "com.mysql.jdbc.Driver";
String sURL = "jdbc:mysql://localhost:3306/lineadecodigo";

Class.forName(sDriver).newInstance();
con = DriverManager.getConnection(sURL,"root","password");
```


El proceso de conexión se divide en dos partes. La primera es donde se carga el driver de la base de datos. Es decir, el fichero que implementa el protocolo [JDBC](http://lineadecodigo.com/tag/java-jdbc/) para la base de datos a la que estemos accediendo. En nuestro caso, al ser una base de datos [MySQL](http://lineadecodigo.com/tag/mysql/), utilizamos “`com.mysql.jdbc.Drive`r”. La segunda parte del proceso de conexión consiste en abrir una conexión contra la base de datos. Esto lo podemos conseguir mediante el [`DriverManager`](https://w3api.com/Java/DriverManager/) y el método [`.getConnection()`](https://w3api.com/Java/DriverManager/getConnection). Dicho método requiere del usuario y password con el que nos estemos conectando a la base de datos. Así como la URL donde se encuentra la base de datos. Una vez que tenemos la conexión preparamos la sentencia. Esto lo hacemos apoyándonos en la clase [`PreparedStatement`](https://w3api.com/Java/PreparedStatement/). El [`PreparedStatement`](https://w3api.com/Java/PreparedStatement/) se utiliza cuando se va a realizar una sustitución de alguno de los valores de la condición, sino, se podría utilizar un [`Statement`](https://w3api.com/Java/Statement-java-sql/) o directamente ejecutar la sentencia


```java
PreparedStatement stmt;
stmt = con.prepareStatement("UPDATE tabla SET campo1=14 WHERE campoindice=?");
stmt.setString(1,"14");
```


Ya, solo nos quedará ejecutar la actualización. Para ello hay que ejecutar el método [`.executeUpdate()`](https://w3api.com/Java/Statement-java-sql/executeUpdate) del [`PreparedStatement`](https://w3api.com/Java/PreparedStatement/). Dicho método devolverá el número de filas que se han actualizado. Será un valor entero de 0 al número de filas actualizadas.


```java
int retorno = stmt.executeUpdate();
```


En el caso que en el proceso, desde la conexión a la ejecución de la sentencia, ocurriese un error, se produciría una excepción [`SQLException`](https://w3api.com/Java/SQLException/). Es por ello que no nos queda más remedio que capturar dicha excepción y ejecutar todo el código entre la sentencia `try-catch`. De esta forma ya habremos conseguido el proceso de actualizar datos con JDBC mediante [Java](http://www.manualweb.net/java/).

