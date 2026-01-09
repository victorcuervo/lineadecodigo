---
title: "Consultas SQL con parametros en Java JDBC"
description: "Cómo realizar consultas SQL con parametros en Java JDBC utilizando la clase PreparedStatement."
date: 2007-08-01
updatedDate: 2026-01-09
tags: ["jdbc","preparedstatement","select"]
slug: java/jdbc/consultas-sql-con-parametros-en-java-jdbc
author: Víctor Cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/SentenciasConValores.java
topic: java

---

Contra una base de datos podemos ejecutar diferentes tipos de sentencias, desde una simple consulta, pasando por inserciones masivas, hasta una sentencia que aumente los permisos de un grupo de usuarios. Pero ahora nos vamos a centrar en las consultas (SELECT) con [Java JDBC](http://lineadecodigo.com/tag/java-jdbc/). Este tipo de sentencias las utilizaremos para recuperar un conjunto de datos de la base de datos. En ellas, lo normal, es seleccionar un conjunto de campos de una tabla y mostrarlos por pantalla. Claro esta que cuando abandonamos el ejemplo básico de la tabla de 10 registros y nos enfrentemos a tablas de millones y millones de datos, deberíamos, vamos, que sería bastante aconsejable, realizar algún tipo de filtro. Creo que cualquier administrador de bases de datos podría llegar a las manos con nosotros si ejecutamos una consulta sobre una tabla de clientes si no incluyésemos ningún filtro. Ahora, que si solo filtramos por ciudad igual a "Ávila", creo que también. Bueno, a lo que vamos. Tenemos diferentes formas de realizar filtros en una consulta. El primer acercamiento es codificar directamente los valores en la sentencia. Algo como...


```sql
SELECT nombre, edad, profesión, ciudad
FROM personas
WHERE ciudad = 'Ávila'
AND edad BETWEEN 24 AND 32
```


Eso sí, esperemos que nuestro jefe no nos diga que quiere un informe donde introduciendo una ciudad y dos edades le saquemos el conjunto de personas que cumplen dichos requisitos. A si que como somos muy previsores, montamos la siguiente consulta donde van a ir los parámetros como variables. Quedando algo así...


```java
String sCiudad, sEdad1, sEdad2;
String sSQL = "SELECT nombre, edad, profesión, ciudad FROM personas WHERE ciudad = '" + sCiudad + "' AND edad BETWEEN " + sEdad1 + " AND " + sEdad1 + ";"
```


Pues este es uno de los mayores errores que podemos cometer y es que la concatenación de cadenas puede dar lugar a lo siguiente (si no tomamos la precauciones necesarias y si da la casualidad de que tenemos un usuario un poco avispado).


```java
sCiudad = "Avila";
sEdad1 = "20";
sEdad2 = "28; DELETE FROM cuentas";
```


Quedándonos en ejecución la siguiente consulta:


```sql
SELECT nombre, edad, profesión, ciudad
FROM personas
WHERE ciudad = 'Ávila'
AND edad BETWEEN 24 AND 32;
DELETE FROM cuentas
```


Y creo que esta si que no le va a gustar nada a nuestro jefe. Digamos que esto es un caso excepcional y que no debería de producirse. Es conocido como inyección de [código SQL](http://www.manualweb.net/sql/). Aún así, la forma más correcta de hacerlo sería mediante la inserción de parámetros. Inicialmente, en [Java JDBC](http://lineadecodigo.com/tag/java-jdbc/), deberemos de poner una interrogación en cada sitio donde queramos meter un valor dinámicamente. Después, sustituiremos cada interrogación por un valor mediante el método setXXX del [PreparedStatement]( "Clase Java PreparedStatement"). Donde XXX será el tipo de valor que queramos insertar: String, int, Date,... Así tendremos setString, setInt, setArray, setByte,... ¿Cómo saber por que interrogación se sustituye el valor? Pues, porque, el primer parámetro del método es el número de interrogación a sustituir (empezando por el 1).


```java
stmt = con.prepareStatement("SELECT nombre, edad, profesion, ciudad FROM Personas WHERE edad > ? AND ciudad = ?");
stmt.setInt(1,25);
stmt.setString(2,"Salamanca");
```


Contra una base de datos podemos ejecutar diferentes tipos de sentencias, desde una simple consulta, pasando por inserciones masivas, hasta una sentencia que aumente los permisos de un grupo de usuarios. Pero ahora nos vamos a centrar en las consultas (SELECT) con [Java JDBC](http://lineadecodigo.com/tag/java-jdbc/). Este tipo de sentencias las utilizaremos para recuperar un conjunto de datos de la base de datos. En ellas, lo normal, es seleccionar un conjunto de campos de una tabla y mostrarlos por pantalla. Claro esta que cuando abandonamos el ejemplo básico de la tabla de 10 registros y nos enfrentemos a tablas de millones y millones de datos, deberíamos, vamos, que sería bastante aconsejable, realizar algún tipo de filtro. Creo que cualquier administrador de bases de datos podría llegar a las manos con nosotros si ejecutamos una consulta sobre una tabla de clientes si no incluyésemos ningún filtro. Ahora, que si solo filtramos por ciudad igual a "Ávila", creo que también. Bueno, a lo que vamos. Tenemos diferentes formas de realizar filtros en una consulta. El primer acercamiento es codificar directamente los valores en la sentencia. Algo como...


```sql
SELECT nombre, edad, profesión, ciudad
FROM personas
WHERE ciudad = 'Ávila'
AND edad BETWEEN 24 AND 32
```


Eso sí, esperemos que nuestro jefe no nos diga que quiere un informe donde introduciendo una ciudad y dos edades le saquemos el conjunto de personas que cumplen dichos requisitos. A si que como somos muy previsores, montamos la siguiente consulta donde van a ir los parámetros como variables. Quedando algo así...


```java
String sCiudad, sEdad1, sEdad2;
String sSQL = "SELECT nombre, edad, profesión, ciudad FROM personas WHERE ciudad = '" + sCiudad + "' AND edad BETWEEN " + sEdad1 + " AND " + sEdad1 + ";"
```


Pues este es uno de los mayores errores que podemos cometer y es que la concatenación de cadenas puede dar lugar a lo siguiente (si no tomamos la precauciones necesarias y si da la casualidad de que tenemos un usuario un poco avispado).


```java
sCiudad = "Avila";
sEdad1 = "20";
sEdad2 = "28; DELETE FROM cuentas";
```


Quedándonos en ejecución la siguiente consulta:


```sql
SELECT nombre, edad, profesión, ciudad
FROM personas
WHERE ciudad = 'Ávila'
AND edad BETWEEN 24 AND 32;
DELETE FROM cuentas
```


Y creo que esta si que no le va a gustar nada a nuestro jefe. Digamos que esto es un caso excepcional y que no debería de producirse. Es conocido como inyección de [código SQL](http://www.manualweb.net/sql/). Aún así, la forma más correcta de hacerlo sería mediante la inserción de parámetros. Inicialmente, en [Java JDBC](http://lineadecodigo.com/tag/java-jdbc/), deberemos de poner una interrogación en cada sitio donde queramos meter un valor dinámicamente. Después, sustituiremos cada interrogación por un valor mediante el método setXXX del PreparedStatement. Donde XXX será el tipo de valor que queramos insertar: String, int, Date,... Así tendremos setString, setInt, setArray, setByte,... ¿Cómo saber por que interrogación se sustituye el valor? Pues, porque, el primer parámetro del método es el número de interrogación a sustituir (empezando por el 1).


```java
stmt = con.prepareStatement("SELECT nombre, edad, profesion, ciudad FROM Personas WHERE edad > ? AND ciudad = ?");
stmt.setInt(1,25);
stmt.setString(2,"Salamanca");
```

