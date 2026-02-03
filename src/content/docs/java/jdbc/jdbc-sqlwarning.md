---
title: "JDBC SQLWarning"
description: ""
date: 2016-10-30
updatedDate: 2026-01-06
tags: ["jdbc","sqlwarning","sqlexception","getwarnings"]
slug: java/jdbc/jdbc-sqlwarning
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-812c-8066-f58178580676
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/WarningSQL.java
---

Dentro de los programas que acceden a las bases de datos con [Java](https://www.manualweb.net/java/) JDBC tenemos errores representados por `SQLException` y alertas representadas por JDBC SQLWarning. Una alerta JDBC SQLWarning representa una información sobre algo que no ha ocurrido de forma esperada, pero que no ha sido un impedimento para ejecutar la acción que se había realizado. Un ejemplo, y el que vamos a desarrollar aquí, es cuando insertamos campos de texto de un tamaño mayor al que se esperaba y se produce un truncado. En el artículo [Truncar campos SQL](http://lineadecodigo.com/java/truncar-campos-sql/) explica cómo realizar esto. En este caso la alerta genera información indicando que se insertó la información, pero que se tuvo que truncar.


## Preparar la tabla


Vamos a crear una tabla con dos campos, el primero será un campo entero `TINYINT` que no podrá ser nulo y el segundo será un campo de 4 caracteres.


```sql
CREATE TABLE test (
  a TINYINT NOT NULL,
  b VARCHAR(4)
);
```


## Realizar la inserción


Ahora vamos a realizar una inserción de 3 tuplas, las cuales fallarán cada una de una forma diferente. Bien porque el tamaño es superior, o porque es un valor nulo o en un número entero más grande de lo que se puede insertar.


```java
PreparedStatement stmt = con.prepareStatement(
  "INSERT INTO test VALUES (?, ?)"
);

stmt.setInt(1, 100);
stmt.setString(2, "Cadena demasiado larga");
stmt.addBatch();

stmt.setNull(1, Types.INTEGER);
stmt.setString(2, "test");
stmt.addBatch();

stmt.setInt(1, 1000);
stmt.setString(2, "ok");
stmt.addBatch();

stmt.executeBatch();
```


## Evaluar la alerta


Ahora pasamos a capturar las alertas. Para ello tenemos que manipular la clase `SQLWarning` la cual es una subclase de `SQLException`. Sobre el `PreparedStatement` podemos obtener las alertas que se produzcan mediante el método `.getWarnings()`. Este método devuelve una lista de alertas las cuales podemos recuperar mediante el método `.getNextWarning()`.


```java
SQLWarning warning = stmt.getWarnings();
while (warning != null) {
  System.out.println("Warning");
  System.out.println("Message: " + warning.getMessage());
  System.out.println("SQLState: " + warning.getSQLState());
  System.out.print("Vendor error code: " + warning.getErrorCode());
  System.out.println("");
  warning = warning.getNextWarning();
}
stmt.close();
```


Vemos que los métodos de la clase `SQLWarning` son los mismos que los de `SQLException` y por lo tanto podemos ver el mensaje de error o código SQL asociado. En este caso por consola podremos ver las alertas que tiene el `INSERT` que hemos hecho.


```javascript
Warning 
Message: Data truncated for column 'b' at row 1 
SQLState: 01000 
Vendor error code: 1265 

Warning 
Message: Column 'a' cannot be null 
SQLState: HY000 
Vendor error code: 1048 

Warning 
Message: Out of range value for column 'a' at row 3 
SQLState: 01000 
Vendor error code: 1264
```


Espero que os haya resultado útil el ejemplo de cómo capturar un JDBC SQLWarning.

