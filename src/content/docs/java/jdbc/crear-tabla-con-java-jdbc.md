---
title: "Crear tabla con Java JDBC"
description: "Se explica cómo crear tabla con Java JDBC conectándose a una base de datos MySQL y ejecutando sentencias SQL."
date: 2016-10-16
updatedDate: 2026-01-11
tags: ["mysql","connection","drivermanager","sqlexception","try-catch","tabla","bases-de-datos","create","preparedstatement"]
slug: java/jdbc/crear-tabla-con-java-jdbc
type: doc
topic: java
id: 8b914882-a93f-4401-833e-66b447211770
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/CrearTabla.java
---

Hoy vamos a ver cómo podemos crear tabla con [Java](https://www.manualweb.net/java/) JDBC. Analizaremos los pasos que hay que dar para poder conectarnos a una base de datos mediante JDBC y conseguir crear una tabla.


## Conectarse a la base de datos


Lo primero que haremos para crear tabla con [Java](https://www.manualweb.net/java/) JDBC será conectarnos a la base de datos. Tenéis explicado en detalle cómo conectarnos a una base de datos con [Java](https://www.manualweb.net/java/) JDBC en ["Conectarnos a una base de datos con JDBC"](http://lineadecodigo.com/java/conectarnos-a-una-base-de-datos-con-jdbc/). En este caso vamos a utilizar una base de datos MySQL, pero podríamos utilizar cualquier tipo de base de datos.


```java
Connection con = null;
Properties props = new Properties();
props.put("user", "usuario");
props.put("password", "password");
con = DriverManager.getConnection("jdbc:mysql://[localhost:3306/mibasedatos](http://localhost:3306/mibasedatos)", props);
```


Vemos que utilizamos el método `.getConnection()` enviándole la cadena de conexión y un fichero de propiedades donde va la información del usuario y password.


## Preparar la sentencia CREATE TABLE


Lo siguiente será preparar la sentencia de creación de la base de datos. Vamos a utilizar la sentencia SQL `CREATE TABLE`. La estructura de la sentencia SQL `CREATE TABLE` es la siguiente:


```sql
CREATE TABLE nombre_tabla (
  campo1 tipo_campo atributos,
  campo2 tipo_campo atributos,
  ...
);
```


Dónde los tipos de campos pueden ser:

- **Cadenas**: char, varchar,...
- **Números**: tinyint, smallint, int, bigint,...
- **Fechas**: date, datetime,...
- ...

Y entre los atributos podemos tener diferentes alternativas como:

- **NOT NULL**: si queremos que el campo no pueda albergar nulos.
- **AUTO_INCREMENT**: si queremos que el número se incremente automáticamente.
- **CURRENT_TIMESTAMP**: para asignarle la fecha de la creación del registro
- ...

## Crear la tabla


En este caso montaremos la siguiente sentencia SQL `CREATE TABLE`:


```sql
CREATE TABLE paises (
  pais varchar(50) NOT NULL,
  acronimo CHAR(3),
  poblacion INT(20)
)
```


Esta sentencia vamos a ponerla dentro de una clase `PreparedStatement`:


```java
PreparedStatement stmt = null;
stmt = con.prepareStatement("CREATE TABLE paises (pais varchar(50) NOT NULL, acronimo CHAR(3), poblacion INT(20))");
```


Una vez creada pasaremos a ejecutarla:


```java
stmt.execute();
```


## Gestionar excepciones


Es importante saber que la ejecución de una sentencia SQL puede generar una `SQLException`, por lo cual el código anterior lo deberemos de poner dentro de un bucle `try-catch`.


```java
try {
  stmt = con.prepareStatement("CREATE TABLE paises (pais varchar(50) NOT NULL, acronimo CHAR(3), poblacion INT(20))");  
  stmt.execute(); 
  stmt.close();	           
} catch (SQLException sqle) { 
  System.out.println("Error en la ejecución: " + sqle.getErrorCode() + " " + sqle.getMessage());    
}
```


De esta forma ya habremos conseguido crear tabla con [Java](https://www.manualweb.net/java/) JDBC.

