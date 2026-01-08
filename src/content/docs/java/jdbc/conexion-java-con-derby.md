---
title: "Conexión Java con Derby"
description: "Conexión Java con Derby permite establecer una base de datos en memoria, crear tablas e insertar datos fácilmente."
date: 2016-10-15
updatedDate: 2026-01-08
tags: ["apache-derby","maven","preparedstatement","drivermanager","statement","resultset","executequery","executebatch","create","insert","jdbc"]
slug: java/jdbc/conexion-java-con-derby
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/ConexionApacheDerby.java
topic: java

---

En este ejemplo vamos a realizar una conexión [Java](https://www.manualweb.net/java/) con Derby. [Apache Derby](http://www.arquitectoit.com/java/que-es-apache-derby/) es una base de datos escrita completamente en Java y que puede ejecutarse en memoria directamente con la aplicación.


## Driver Apache Derby


Lo primero que haremos para establecer la conexión [Java](https://www.manualweb.net/java/) con Derby es descargar la base de datos, que viene con el Driver incluido. Esto lo podemos hacer desde [https://db.apache.org/derby/derby_downloads.html](https://db.apache.org/derby/derby_downloads.html).


Para los que utilizáis **Maven** como gestor de dependencias podéis añadir el siguiente código en el `pom.xml`:


```xml
<dependency>
    <groupId>org.apache.derby</groupId>
    <artifactId>derby</artifactId>
    <version>10.13.1.1</version>
</dependency>
```


## Conectarnos a Apache Derby


Lo siguiente será conectarnos a la base de datos. En este caso vamos a utilizar Apache Derby en memoria, por lo cual la cadena de conexión será:


```java
String sURL = "jdbc:derby:memory:myDB;create=true";
con = DriverManager.getConnection(sURL);
```


Vemos que en la cadena de conexión indicamos que la base de datos está en memoria. Ahora utilizamos el método `.getConnection()` para realizar la conexión mediante el `DriverManager`.


## Cargar la base de datos


Al ser una base de datos en memoria lo primero que tenemos que hacer es cargarla de datos, ya que no tendrá ninguno. Bueno, en realidad lo primero será crear la tabla para poder insertar los datos:


```java
PreparedStatement tabla = con.prepareStatement("CREATE TABLE country (country varchar(100) not null)");
tabla.execute();
```


Hemos utilizado la sentencia SQL `CREATE TABLE` para llevar a cabo nuestra tarea. Ahora pasaremos a cargar los datos. En este caso nos hemos apoyado en un batch de inserciones.


```java
Statement carga = con.createStatement();
carga.addBatch("INSERT INTO country VALUES ('Spain')");
carga.addBatch("INSERT INTO country VALUES ('France')");
carga.addBatch("INSERT INTO country VALUES ('United States')");
carga.addBatch("INSERT INTO country VALUES ('Brazil')");
carga.addBatch("INSERT INTO country VALUES ('Japan')");
carga.executeBatch();
```


La idea es definir un conjunto de sentencias de inserción mediante `INSERT` que ejecutaremos de forma batch mediante el método `.executeBatch()`.


## Consultar datos en Apache Derby con Java


Ahora que ya tenemos datos metidos en la base de datos podemos ejecutar una consulta sobre la tabla que hemos creado. Así podríamos tener el siguiente código fuente:


```java
try (PreparedStatement stmt = con.prepareStatement("SELECT country FROM country")) {
    ResultSet rs = stmt.executeQuery();
    while ([rs.next](http://rs.next/)())
        System.out.println(rs.getString("country"));
} catch (SQLException sqle) {
    System.out.println("Error en la ejecución:" + sqle.getErrorCode() + " " + sqle.getMessage());
}
```


Siguiendo estos pasos puedes realizar una conexión [Java](https://www.manualweb.net/java/) con Derby de una forma muy sencilla.

