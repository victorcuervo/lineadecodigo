---
title: "JDBC Batch Update"
description: "La técnica JDBC Batch Update permite cargar múltiples registros en la base de datos de forma eficiente y ordenada."
date: 2016-10-14
updatedDate: 2026-01-09
tags: ["jdbc","connection","setautocommit","statement","addbatch","executebatch","commit","sqlexception"]
slug: java/jdbc/jdbc-batch-update
author: victor_cuervo
type: doc
topic: java
id: 87185c29-6c8a-4744-9db7-a6860ee9b448
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/BatchUpdate.java
---

La técnica JDBC Batch Update es una forma de cargar de golpe un conjunto de registros. Simulando lo que sería un funcionamiento batch sobre la base de datos. Lo primero que haremos, como en todo programa [Java](https://www.manualweb.net/java/) que conecte con una base de datos mediante JDBC será el realizar una conexión.


```java
Connection con = null;
String sURL = "jdbc:mysql://localhost:3306/lineadecodigo";
con = DriverManager.getConnection(sURL,"usuario","password");
```


Si vas a realizar un patrón JDBC Batch Update es recomendable que no te bases en el AutoCommit de la base de datos, por lo cual vamos a deshabilitarlo de la conexión. Nos apoyamos en el método `.setAutoCommit()`.


```java
con.setAutoCommit(false);
```


Es importante que seas consciente que a partir de este momento el commit o el rollback deberemos de hacerlo por código. Ahora vamos a preparar una estructura para almacenar las sentencias, esta será un `Statement`. Las diferentes sentencias de inserción las iremos añadiendo mediante el método `.addBatch()`.


```java
Statement carga = con.createStatement();
carga.addBatch("INSERT INTO Country(country) VALUES ('Spain')");
carga.addBatch("INSERT INTO Country(country) VALUES ('France')");
carga.addBatch("INSERT INTO Country(country) VALUES ('United States')");
carga.addBatch("INSERT INTO Country(country) VALUES ('Brazil')");
carga.addBatch("INSERT INTO Country(country) VALUES ('Japan')");	     
carga.executeBatch();
```


> En este caso hemos utilizado una sentencia con los valores fijos, pero puedes utilizar un `PreparedStatement` único al cual vayas modificando los valores.


Una vez que tenemos toda la carga preparada simplemente habrá que ejecutarla mediante el método `.executeBatch()`. Este método devuelve un array de enteros en el que se nos muestra los insert que han ido bien y los que han ido mal. Ah! Pero no se te olvide que habíamos deshabilitado el AutoCommit de la base de datos. Así que deberemos de ejecutar el método `.commit()` sobre la conexión. 


```java
con.commit();	
```


Todo el código deberemos de ejecutarlo dentro de un bucle `try-catch` que controle una `SQLException.`


Sobre todo, porque si hay algún fallo deberemos de ejecutar un rollback de las inserciones mediante el método `.rollback()`.


```java
try {
  con = DriverManager.getConnection(sURL,"root","");

  con.setAutoCommit(false);
  
  Statement carga = con.createStatement();
  carga.addBatch("INSERT INTO Country(country) VALUES ('Spain')");
  carga.addBatch("INSERT INTO Country(country) VALUES ('France')");
  carga.addBatch("INSERT INTO Country(country) VALUES ('United States')");
  carga.addBatch("INSERT INTO Country(country) VALUES ('Brazil')");
  carga.addBatch("INSERT INTO Country(country) VALUES ('Japan')");	     
  carga.executeBatch();
  
  con.commit();	     	     

} catch (SQLException sqle) { 
  System.out.println(sqle.getMessage());
  con.rollback();	      
} finally {
    if (con!=null) con.close();    	      
} 
```


De esta forma habremos ejecutado una carga masiva de datos, ideal para las cargas iniciales de la base de datos, mediante un JDBC Batch Update.

