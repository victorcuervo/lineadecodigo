---
title: "Borrar tabla con Java JDBC"
description: ""
date: 2016-10-18
updatedDate: 2026-01-11
tags: ["jdbc","preparedstatement","connection","sqlexception","try-catch","drivermanager","mysql","delete","tabla","bases-de-datos"]
slug: java/jdbc/borrar-tabla-con-java-jdbc
author: victor_cuervo
type: doc
topic: java
id: d925d202-f7c7-4a0f-8518-88f3c6397322
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/BorrarTabla.java
---

Ya hemos visto cómo podemos [crear una tabla con Java JDBC](http://lineadecodigo.com/java/crear-tabla-java-jdbc/), en este caso vamos a ver cómo podemos **borrar tabla con Java JDBC**. Aprenderemos qué sentencia SQL debemos montar y cómo debemos ejecutarla desde un código Java.


## Conectarse a la base de datos


Lo primero es conectarnos a la base de datos:


```java
String sUrl = "jdbc:mysql://[localhost:3306/mibasedatos](http://localhost:3306/mibasedatos)";
Properties properties = new Properties();
properties.put("user", "usuario");
properties.put("password", "password");
Connection connection = DriverManager.getConnection(sUrl, properties);
```


Lo importante a la hora de conectarnos a la base de datos es conocer la URL de conexión. En nuestro ejemplo estamos utilizando una cadena contra una base de datos **MySQL**, pero puedes sustituirla por la base de datos que estés utilizando. Además, al método `.getConnection()` recibe un objeto de propiedades con el usuario y password de conexión.


## Preparar la sentencia DROP TABLE


Ahora vamos a montar en un `PreparedStatement` la sentencia SQL que nos permite borrar la tabla. La sentencia SQL que vamos a utilizar es `DROP TABLE`, la cual tiene la siguiente estructura:


```sql
DROP TABLE nombre_tabla;
```


Así que montaremos esta sentencia dentro del `PreparedStatement`:


```java
String sSQL = "DROP TABLE mitabla";
PreparedStatement preparedStatement = connection.prepareStatement(sSQL);
```


## Ejecutar la sentencia


Lo siguiente será llamar al método `.execute()` para poder ejecutar la sentencia contra la base de datos. Deberemos tener cuidado con este código ya que puede lanzar la excepción `SQLException`, por lo cual deberemos ejecutarlo en una estructura `try-catch`:


```java
try {
    preparedStatement.execute();
    System.out.println("Tabla borrada correctamente");
} catch (SQLException e) {
    System.err.println("Error al borrar la tabla: " + e.getMessage());
}
```


De esta forma habremos conseguido nuestro objetivo de **borrar tabla con Java JDBC**.

