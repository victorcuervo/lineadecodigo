---
title: "Truncar campos SQL"
description: "Se explica cómo truncar campos SQL en Java JDBC durante inserciones de datos, evitando errores de longitud excesiva."
date: 2016-10-26
updatedDate: 2026-01-09
tags: ["jdbc","connection","resultset","statement","executequery","executeupdate","sqlexception","insert","select","exception"]
slug: java/jdbc/truncar-campos-sql
type: doc
topic: java
id: 2b467955-d95b-44e4-970e-e7f4a71008ee
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/TruncarCampos.java
---

Vamos a ver cómo podemos truncar campos SQL cuando estemos haciendo una inserción de datos mediante [Java](https://www.manualweb.net/java/) JDBC. Pero pongámonos en situación. La idea es que cuando definas un campo de la base de datos le asignes suficiente tamaño como para que los datos que insertes dentro entren sin problema. Pero la realidad es que hay ciertas situaciones en las que esto no sucede y acabamos realizando modificaciones sobre la estructura de la base de datos. Una de las situaciones que más quebraderos da es en las cargas masivas, ya que un problema de tamaño nos puede echar atrás, si no tenemos bien montado nuestro programa, toda la carga. En el caso de que estas cargas se tengan que hacer sí o sí podemos tomar la estrategia de forzar la inserción del campo de texto, independientemente de que sea más grande que el campo, forzando un truncado del campo. Lógicamente deberemos de controlar el warning que genere para tomar las acciones correctoras a posteriori. Para demostrar cómo gestionar para truncar campos SQL en un programa [Java](https://www.manualweb.net/java/) vamos a dar los siguientes pasos. 


## Crear una tabla de campo pequeño


Creamos una tabla con un campo `char` que tenga un tamaño de 4 caracteres.


```java
stmt = con.prepareStatement("CREATE TABLE temporal (campo CHAR(4))");  
stmt.execute(); 
stmt.close();
```


## Realizar una inserción con campos grandes


Ahora vamos a insertar campos en esta tabla. Alguno será de 4 caracteres y otros serán de tamaño mayor. La inserción será la siguiente:


```java
stmt = con.prepareStatement("INSERT INTO temporal VALUES ('Java'), ('Angular'), ('NodeJS'),('Clojure'),('Polymer')");
stmt.execute();
stmt.close();
```


## Consultar qué se ha insertado


Y por último creamos una consulta que devuelva un `ResultSet` en el cual se muestre que se ha grabado en la tabla. Algo tan sencillo como:


```java
stmt = con.prepareStatement("SELECT campo FROM temporal");
rs = stmt.executeQuery();
	   
while (rs.next())
  System.out.println (rs.getString("campo"));

stmt.close();
```


## Mostrar el resultado


Si ejecutamos el código tal cual lo hemos escrito nos vamos a encontrar que nuestro programa [Java](https://www.manualweb.net/java/) nos devuelve el siguiente error en una `SQLException`


```shell
Data truncation: Data too long for column 'campo' at row 2
```


Es decir que no tenemos activado el truncado de los campos, y por lo tanto la excepción nos indica que los campos son muy largos.


## Configurar la propiedad de truncado JDBC


Para poder truncar campos SQL en [Java](https://www.manualweb.net/java/) JDBC lo que tenemos que hacer es configurar la propiedad `"jdbcCompliantTruncation"` y asignarla un valor de `false`. Esta configuración se hace en la conexión a la base de datos.


```java
Connection con = null;
String sURL = "jdbc:mysql://localhost:3306/lineadecodigo";
	    
Properties p = new Properties();
p.put("user", "root");
p.put("password","");
p.put("jdbcCompliantTruncation","false");

con = DriverManager.getConnection(sURL,p);
```


Ahora al ejecutar el código fuente veremos que el resultado que obtenemos al recorrer el `ResultSet` es el siguiente:


```shell
Java
Angu
Node
Cloj
Poly
```


Así hemos visto como podemos truncar campos SQL en nuestro programa [Java](https://www.manualweb.net/java/) JDBC.

