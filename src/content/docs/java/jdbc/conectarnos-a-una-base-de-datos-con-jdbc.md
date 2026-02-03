---
title: "Conectarnos a una base de datos con JDBC"
description: "Pasos que tenemos que dar en nuestro programa Java para conectarnos a una base de datos con JDBC."
date: 2007-08-10
updatedDate: 2026-01-11
tags: ["driver","jdbc","connection","resultset","statement","executequery","close","drivemanager","preparedstatement","sqlexception","try-catch"]
slug: java/jdbc/conectarnos-a-una-base-de-datos-con-jdbc
author: victor_cuervo
type: doc
id: c319e291-0b9a-4f2b-a069-516f7cfc0678
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/ConexionBaseDatos.java
---

El objetivo de nuestro ejemplo es el de ver qué tenemos que hacer para crear una conexión [JDBC](http://lineadecodigo.com/tag/java-jdbc/) con [Java](https://www.manualweb.net/java/) sobre una base de datos y ejecutar una consulta. 


Las tres clases que manejaremos en nuestro ejemplo serán [Connection](https://www.w3api.com/Java/Connection-java-sql/) para realizar la conexión a la base de datos, PreparedStatement que será la que contenga la sentencia SQL y ResultSet que será la que contenga el resultado.


## Localización de la base de datos


Lo primero que tenemos que saber para realizar la conexión a la base de datos es donde se encuentra dicha base de datos. Para hacer referencia a la base de datos lo podemos hacer directamente mediante la IP o, por ejemplo, mediante una referencia ODBC. 


Así, podríamos tener referencias como:


```java
String url = "jdbc:odbc:NombreBaseDatos";
```


## Instanciar el driver


Una vez conocemos la localización de nuestra base de datos debemos de saber el nombre de la clase que tiene implementada la conexión a la base de datos. Es lo que llamamos driver. Dependiendo de la forma en la que este implementado el driver, este, recibirá el apelativo de driver tipo1, tipo2, tipo3 o tipo4.


Si nos ponemos a escribir código, lo primero que debemos de hacer es instanciar la clase del driver.


```java
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
```


## Crear la conexión


Dicha clase será la que nos proporcione una conexión a la base de datos, y como bien hemos dicho, la conexión la guardaremos en una instancia de la clase Connection.


```java
Connection con = DriverManager.getConnection(url);
```


## Preparar la sentencia SQL


Una vez que hemos conseguido una conexión a la base de datos lo siguiente será el preparar una sentencia SQL en un PreparedStatement. No haremos nada complicado con el SQL, algo así como:


```java
String query = "SELECT * FROM tabla";
PreparedStatement stmt = con.prepareStatement(query);
```


## Ejecutar la consulta


Construida nuestra sentencia, realizamos la ejecución de la misma. Y el resultado al ResultSet.


```java
ResultSet rs = stmt.executeQuery();
```


## Recorrer los resultados


Un ResultSet no deja de ser una especie de matriz (filas x columnas) que deberemos de recorrer mediante el movimiento de un cursor. Y la forma más fácil en [Java](https://www.manualweb.net/java/) es mediante un bucle while. 


Y para acceder a las columnas bastará con utilizar los métodos getXXX del ResultSet: getString() para las cadenas de texto, getDouble() para los decimales, getDate() para las fechas, etc.


```java
while ([rs.next](http://rs.next/)()) {
    System.out.println(rs.getString("columna1"));
}
```


## Cerrar las conexiones


Una vez que hemos finalizado el cometido de nuestro ejercicio deberemos de cerrar las conexiones a la base de datos. Para ello invocaremos el método close() sobre los tres objetos mencionados.


## Manejo de excepciones


Y en todo este proceso, las excepciones. No nos debemos de olvidar de ellas. A tal respecto deberemos de ejecutar nuestro código en un bloque try-catch que controle la SQLException. Excepción común que se produce en el acceso a la base de datos.


## Código completo


El código podría quedar como el que sigue:


```java
try {
    // Cargamos el driver
    Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
    
    // Creamos la conexión
    String url = "jdbc:odbc:NombreBaseDatos";
    Connection con = DriverManager.getConnection(url);
    
    // Preparamos la sentencia
    String query = "SELECT * FROM tabla";
    PreparedStatement stmt = con.prepareStatement(query);
    
    // Ejecutamos la consulta
    ResultSet rs = stmt.executeQuery();
    
    // Recorremos los resultados
    while ([rs.next](http://rs.next/)()) {
        System.out.println(rs.getString("columna1"));
    }
    
    // Cerramos las conexiones
    rs.close();
    stmt.close();
    con.close();
    
} catch (SQLException e) {
    e.printStackTrace();
} catch (ClassNotFoundException e) {
    e.printStackTrace();
}
```

