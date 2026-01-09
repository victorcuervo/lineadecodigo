---
title: "Crear una base de datos en Java"
description: "Cómo utilizar la librería JDBC para poder crear una base de datos en Java mediante un objeto Statement y una sentencia CREATE TABLE."
date: 2021-10-04
updatedDate: 2026-01-09
tags: ["jdbc","connection","sqlexception","statement","create","table","drivermanager"]
slug: java/jdbc/crear-una-base-de-datos-en-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/CrearBaseDeDatos.java
topic: java

---

La [librería Java JDBC](https://lineadecodigo.com/tag/java-jdbc/) nos permite realizar cualquier tipo de operación sobre una base de datos, ya sean consultas, inserciones, borrados,... una de estas operaciones que podemos hacer es crear una base de datos en [Java](https://www.manualweb.net/java). La creación de una base de datos puede que sea algo más inusual, ya que normalmente nos encontraremos en la situación de que ya existe y solo necesitaremos lanzar operaciones de consulta o actualización sobre la misma. Si bien es verdad que en un proceso inicial de la aplicación y si queremos mantener una coherencia entre el software y los datos, puede ser una buena práctica el realizar la creación de la base de datos por código y no mediante script con un administrador de base de datos o DBA. Lo primero que tenemos que saber para poder crear una base de datos en [Java](https://www.manualweb.net/java) es que hay que importar la [librería Java JDBC](https://lineadecodigo.com/tag/java-jdbc/). Aunque podemos importarla entera, lo suyo es importar solo las clases que vayamos a utilizar, a la sazón:


```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
```


Una vez que tenemos la [librería Java JDBC](https://lineadecodigo.com/tag/java-jdbc/) importada lo que haremos será definir lo que será la cadena de conexión y el objeto [`Connection`](http://w3api.com/Java/Connection-java-sql/) sobre el que quedará establecida.


```java
Connection con = null;
String sURL = "jdbc:mysql://localhost:3306/lineadecodigo";
```


Ahora nos apoyaremos en el [`DriverManager`](http://w3api.com/Java/DriverManager/) para establecer la conexión. Para ello necesitamos la cadena de conexión que acabamos de definir, un usuario y password.


```java
con = DriverManager.getConnection(sURL,"root","victor");
```


> Hay que tener especial atención al usuario que utilizamos ya que la operación de creación de base de datos necesita más permisos que las operaciones normales de consulta y actualización. Es por ello que el usuario de estos programas suele ser diferente al resto que utilicemos en nuestros programas.


Una vez establecida la conexión lo que vamos es a lanzar una operación de creación de la base de datos. Para ello tenemos que recurrir a **la sentencia SQL de creación**. La cual tiene, a grandes rasgos, la siguiente sintaxis:


```java
CREATE DATABASE nombre_tabla;
```


Así que vamos a recurrir a un objeto [`Statement`](https://w3api.com/Java/Statement-java-sql/) que será con el que ejecutemos la consulta mediante su método [`.execute()`](https://w3api.com/Java/Statement-java-sql/execute)


```java
Statement stmt = con.createStatement();
stmt.execute("create database lineadecodigo");
```


Es importante saber qué tanto a la hora de obtener la conexión, como a la hora de ejecutar la sentencia puede generarse una excepción [`SQLException`](https://w3api.com/Java/SQLException/). Es por ello que debemos de operarlo con una estructura `try-catch`. De esta manera el código entero que nos permite crear una base de datos en [Java](https://www.manualweb.net/java) sería la siguiente:


```java
Connection con = null;
String sURL = "jdbc:mysql://localhost:3306/lineadecodigo";

try {
  con = DriverManager.getConnection(sURL,"root","victor");
  Statement stmt = con.createStatement();
  stmt.execute("create database lineadecodigo");
  System.out.println("Base de datos creada correctamente");
} catch (SQLException e) { 
  System.out.println("Error en la conexión:" + e.toString() );
} finally {
  try {
    // Cerramos posibles conexiones abiertas
    if (con!=null) con.close();    
  } catch (Exception e) {
    System.out.println("Error cerrando conexiones: "
      + e.toString());
  } 
}
```

