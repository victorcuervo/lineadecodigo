---
title: "Conectar a MariaDB con Java"
description: "Ejemplo que nos explica cómo configurar los drivers para poder conectar a MariaDB con Java utilizando la librería Java JDCB."
date: 2021-10-05
updatedDate: 2026-02-04
tags: ["jdbc","connection","mariadb","drivermanager","preparedstatement","resultset"]
slug: java/jdbc/conectar-a-mariadb-con-java
type: doc
topic: java
id: 5ae84d19-cd9e-4db9-87f0-1d7029247fc4
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/ConexionMariaDB.java
---

Seguro que ya has leído alguno de nuestros artículos sobre [cómo conectarse a una base de datos con Java](https://lineadecodigo.com/java/conectarnos-a-una-base-de-datos-con-jdbc/) o [cómo conectarte a MySQL desde Java](https://lineadecodigo.com/java/conectar-mysql-java/) y ya tienes más o menos claro cómo conectarte a cualquier base de datos. Pero [desde el fork de MySQL en MariaDB allá por 2009 tras la compra de SUN por parte de Oracle](https://www2.computerworld.com.au/article/457551/dead_database_walking_mysql_creator_why_future_belongs_mariadb/), muchos de los desarrolladores se han movido al mundo MariaDB y es por ello que llegan consultas sobre cómo conectar a MariaDB con [Java](https://www.manualweb.net/java). Lo primero es bajarnos los drivers con el conector [Java](https://www.manualweb.net/java) de MariaDB. Esto lo puedes hacer [desde la página de descarga de drivers de MariaDB](https://mariadb.com/kb/en/about-mariadb-connector-j/) o, cómo sabemos que sois buenos y utilizáis un gestor de dependencias como Maven, añadiendo la referencia en el **pom.xml** de la siguiente manera:


```xml
<dependency>
  <groupId>org.mariadb.jdbc</groupId>
  <artifactId>mariadb-java-client</artifactId>
  <version>2.7.2</version>
</dependency>
```


Ahora vamos a por la conexión en [Java](https://www.manualweb.net/java). Lo que diferencia a unas bases de datos de otras es la cadena de conexión, ya que el resto del código será igual independientemente de la base de datos que utilicemos. Así, la cadena de conexión para MariaDB será de la siguiente forma:


```java
jdbc:mariadb://servidor:3306/basedatos
```


En ella tenemos que indicar el nombre del servidor que tiene la base de datos, si es el local será _localhost_, y el nombre de la base de datos sobre la que queremos realizar la conexión. Así por ejemplo podríamos tener la siguiente cadena de conexión:


```java
String sURL = "jdbc:mariadb://localhost:3306/lineadecodigo";
```


Ahora ya solo quedará tirar del objeto [`DriverManager`](http://w3api.com/Java/DriverManager/) para establecer una conexión.


```java
Connection con = null;	    
String sURL = "jdbc:mariadb://localhost:3306/lineadecodigo";
con = DriverManager.getConnection(sURL,"victor","victor");
```


Ya solo tendremos que codificar nuestras operaciones de consulta o actualización en Java sobre la base de datos MariaDB. Por ejemplo, podrías tener un código como el siguiente:


```java
Connection con = null;
String sURL = "jdbc:mariadb://localhost:3306/lineadecodigo";

try {
  con = DriverManager.getConnection(sURL,"victor","victor");
  try (PreparedStatement stmt = con.prepareStatement("SELECT pais FROM paises")) {

    // Ejecutamos Query
    ResultSet rs = stmt.executeQuery();
     
    // Recorremos el resultado
    while (rs.next())
      System.out.println (rs.getString("pais"));
    } catch (SQLException sqle) { 
      System.out.println("Error en la ejecución:" 
    + sqle.getErrorCode() + " " + sqle.getMessage());    
    }
} catch (Exception e) { 
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


Espero que os ayude el código y que con esto ya sepáis cómo conectar a MariaDB con [Java](https://www.manualweb.net/java).

