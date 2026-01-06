---
title: "Borrado de Datos con JDBC"
description: "Uso de una conexión JDBC para ejecutar una sentencia SLQ de DELETE con el fin de poder eliminar datos de una tabla."
date: 2006-11-03
updatedDate: 2026-01-06
tags: ["delete","jdbc","drivemanager","executeupdate","preparedstatement","sqlexception","where"]
slug: java/jdbc/borrado-de-datos-con-jdbc
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/BorrarDatos.java
topic: java
---

Una de las operaciones que podemos realizar sobre una base de datos es el borrado de datos. Es decir, eliminar parte o la totalidad de la información contenida en una o varias tablas. Veamos cómo podemos hacer un borrado de Datos con JDBC. Para poder llevar esto a cabo fuera de un programa [Java](http://www.manualweb.net/tutorial-java/), por ejemplo, si estuviésemos en una consola de administración de la base de datos, nos bastaría con ejecutar una sentencia `DELETE` de [SQL](http://lineadecodigo.com/categoria/sql/). Por ejemplo:


```sql
-- Para borrar todos los registros
DELETE FROM Tabla

-- Para borrar un conjunto de registros
DELETE FROM Tabla WHERE campo = valor
```


En el caso de que queramos hacer esto desde un programa [Java](http://www.manualweb.net/tutorial-java/) deberemos de utilizar el **API JDBC (Java DataBase Connectivity)**. El cual nos abstrae los comandos propios de la base de datos en un interface único. Los pasos que tenemos que seguir son los siguientes… En primer lugar nos tenemos que conectar a la base de datos. Para ello utilizamos la clase [`Connection`](http://w3api.com/wiki/Java:Connection), que será la que mantenga la conexión y [`DriverManager`](http://w3api.com/wiki/Java:DriverManager) para obtener la conexión. Dependiendo del caso, es muy probable que tengamos que utilizar usuario/password para poder conectarnos a la base de datos. El código sería el siguiente:


```java
try{
  Class.forName(sDriver).newInstance();
  con = DriverManager.getConnection(sURL,"root","password");
} catch (SQLException sqle) {
  sqle.printStackTrace();
}
```


Una vez tengamos la conexión contra la base de datos pasaremos a ejecutar la sentencia. Para ello necesitamos de un objeto [`Statement`](http://w3api.com/wiki/Java:Statement) que es el que tendrá la sentencia a ejecutar. Nuestro `DELETE`. Para ejecutar la sentencia (percatarse que son dos pasos: preparar y ejecutar) tendremos que utilizar el método [`.executeUpdate()`](http://w3api.com/wiki/Java:Statement.executeUpdate()) sobre el objeto [`Statement`](http://w3api.com/wiki/Java:Statement).


```java
Statement stmt = con.prepareStatement("DELETE FROM Tabla");
int x = stmt.executeUpdate();
```


Los posibles valores que nos devolverá el método [`.executeUpdate()`](http://w3api.com/wiki/Java:Statement.executeUpdate()) serán enteros. Puede ser el número de filas que se han borrado, si la ejecución del `DELETE` fue satisfactoria o cero si no se ha borrado nada. En el caso de que se produzca un error se lanzará una [`SQLException`](http://w3api.com/wiki/Java:SQLException) que deberá de ser capturada por un `try-catch`. Al final del todo, es muy buena costumbre el cerrar la conexión ([`Connection`](http://w3api.com/wiki/Java:Connection)) y la sentencia ([`PreparedStatement`](http://w3api.com/wiki/Java:PreparedStatement)).


```java
stmt.close();
con.close();
```


Además puedes leerte [la documentación sobre PreparedStatement](http://java.sun.com/docs/books/tutorial/jdbc/basics/prepared.html) o conocer el [API de consulta de las PreparedStatemet](http://java.sun.com/j2se/1.5.0/docs/api/java/sql/PreparedStatement.html). Con esto ya habremos conseguido realizar nuestro borrado de Datos con JDBC en [Java](http://www.manualweb.net/java).

