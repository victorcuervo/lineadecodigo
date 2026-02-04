---
title: "Insertar datos con JDBC"
description: "Ejemplo que nos explica como Insertar datos con JDBC mediante un PreparedStatement y ejecutando una query."
date: 2007-06-07
updatedDate: 2026-01-11
tags: ["preparedstatement","sqlexception","connection","insert","mysql","executeupdate","drivermanager","statement"]
slug: java/jdbc/insertar-datos-con-jdbc
type: doc
topic: java
id: fa56d6ea-a26e-4373-93a4-cdb6abb5c030
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/InsertarDatos.java
---

Tenemos varias formas de hacer un **insert** contra una base de datos mediante JDBC. Pero la más sencilla de todas es ejecutar una sentencia `INSERT` de SQL. Es por ello que lo primero que vamos a ver es la estructura de dicha sentencia:


```sql
INSERT INTO tabla (campo1, campo2, ..., campoN) VALUES (valor1, valor2, ..., valorN)
```


Donde `campo(s)` son los nombres de las columnas de la tabla en los cuales queremos insertar valores. Si queremos rellenar todos los datos de las columnas no hace falta en poner estos campos. Los valores serán, en riguroso orden, los que correspondan con las columnas de las tabla.


En el ejemplo vamos a utilizar la tabla de libros. La cual pasamos a detallar un poco más:


```sql
CREATE TABLE libros (
  titulo VARCHAR(50),
  autor VARCHAR(50),
  paginas INT,
  precio FLOAT
)
```


## Conexión a la base de datos


Veamos los pasos que habría que dar para ejecutar el `INSERT` mediante una conexión JDBC. Lo primero es realizar la conexión sobre la base de datos. Para ello necesitamos conocer la URL y los drivers de la base de datos. En nuestro caso, que nos apoyamos en MySQL, sería algo como lo que sigue:


```java
String driverName = "com.mysql.jdbc.Driver";
String url = "jdbc:mysql://[localhost:3306/test](http://localhost:3306/test)";
```


Con los drivers y la URL simplemente tendremos que obtener la conexión (clase [`Connection`](https://www.w3api.com/Java/Connection-java-sql/)) mediante usuario y password.


```java
Connection con = DriverManager.getConnection(url, "usuario", "password");
```


## Preparar la sentencia INSERT


Una vez obtenida la conexión, pasaremos a preparar la sentencia `INSERT` mediante un [`PreparedStatement`](https://www.w3api.com/Java/PreparedStatement):


```java
String sqlInsert = "INSERT INTO libros (titulo, autor, paginas, precio) VALUES (?, ?, ?, ?)";
PreparedStatement statement = con.prepareStatement(sqlInsert);
```


Una cosa muy importante es que al montar la sentencia `INSERT` no definimos los valores de la sentencia. En su lugar ponemos interrogaciones (?) que serán sustituidas posteriormente por valores. Esto se hace para que la sentencia `INSERT` pueda ser reutilizada con diferentes valores y ser cacheada por los diferentes puntos (cache de conexión de los drivers, cache de la base de datos,...).


## Asignar valores a la sentencia


Para rellenar los valores simplemente nos podemos valer de los métodos `setXXX` sobre el [`PreparedStatement`](https://www.w3api.com/Java/PreparedStatement). El valor de `XXX` dependerá del tipo de dato que manejemos: `setString`, `setDate`, `setInt`,... Veamos como lo asignaríamos en nuestro ejemplo:


```java
statement.setString(1, "El Quijote");
statement.setString(2, "Cervantes");
statement.setInt(3, 500);
statement.setFloat(4, 15.50f);
```


## Ejecutar la sentencia


Ya solo nos quedará ejecutar la sentencia. Cuando la sentencia a ejecutar no devuelve un conjunto de resultados no deberemos de usar `executeQuery()`, sino que deberemos de utilizar [`executeUpdate()`](https://www.w3api.com/Java/PreparedStatement/executeUpdate). Esto es aplicable a `INSERT`, `UPDATE` y `DELETE`.


```java
int val = statement.executeUpdate();
```


El valor devuelto por esta sentencia es 1 para sentencias `INSERT`, `UPDATE` y `DELETE` y 0 para sentencias SQL que no devuelven nada.


Al final de nuestro programa no se nos puede olvidar en cerrar las conexiones de la base de datos.


## Manejo de excepciones


Pero, ¿qué sucede si el valor a insertar (en su clave) ya existe en la base de datos? Pues que nos saltará una sentencia [`SQLException`](https://www.w3api.com/Java/SQLException). En dicha excepción podemos recuperar el `SQLState` y el `SQLErrorCode`, los cuales darán información del error.

