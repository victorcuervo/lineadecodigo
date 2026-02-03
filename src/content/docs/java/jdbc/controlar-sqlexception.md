---
title: "Controlar SQLException"
description: "Controlar SQLException es esencial para manejar errores en programas Java que acceden a bases de datos."
date: 2016-10-22
updatedDate: 2026-01-11
tags: ["try-catch","exception","sqlexception","resultset"]
slug: java/jdbc/controlar-sqlexception
author: victor_cuervo
type: doc
id: d84afafd-5b6c-4764-9fc4-8b698b375af2
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/ControlarSQLException.java
---

Si estás trabajando con un programa que acceda a una base de datos con Java JDBC seguro que has tenido que enfrentarte a controlar SQLException. SQLException es la excepción que se lanza cuando hay algún problema entre la base de datos y el programa [Java](https://www.manualweb.net/java/) JDBC. 


Por ejemplo, cuando realizamos una consulta debemos de poner nuestro código que maneje el `ResultSet` dentro de de un bucle try-catch.


```java
try {
  // Código que maneja el ResultSet
} catch (SQLException sqle) {
  // Gestión de la excepción
}
```


Este bucle es el que nos permite controlar SQLException en caso de error. Pero una vez que se lanza la SQLException, qué podemos saber de ella. Pues veamos un poco los métodos que contiene y qué información nos proporcionan.


## Métodos de SQLException

- **`.`**`getMessage()`, nos indica la descripción del mensaje de error.
- `.getSQLState()`, devuelve un código SQL estándar definido por ISO/ANSI y el Open Group que identifica de forma unívoca el error que se ha producido.
- `.getErrorCode()`, es un código de error que lanza la base de datos. En este caso el código de error es diferente dependiendo del proveedor de base de datos que estemos utilizando.
- `.getCause()`, nos devuelve una lista de objetos que han provocado el error.
- `.getNextException()`, devuelve la cadena de excepciones que se ha producido. De tal manera que podemos navegar sobre ella para ver en detalle de esas excepciones.

## Información básica de la excepción


Los tres primeros métodos nos permiten ver lo que podemos definir como información básica de la excepción y que podemos volcar por pantalla de la siguiente forma.


```java
catch (SQLException sqle) {
  System.out.println("Mensaje de error: " + sqle.getMessage());
  System.out.println("Estado SQL: " + sqle.getSQLState());
  System.out.println("Código de error: " + sqle.getErrorCode());
}
```


## Navegar por las causas del error


Para navegar por las causas del error, el método `.getCause()` lo vamos a volcar sobre un objeto `Throwable` sobre el que iremos viendo todas las causas que ha generado. El código será el siguiente:


```java
Throwable t = sqle.getCause();
while (t != null) {
  System.out.println("Causa: " + t);
  t = t.getCause();
}
```


## Recorrer la cadena de excepciones


Para el caso de la lista encadena de excepciones nos volvemos apoyar en un bucle para irla recorriendo. De cada una de las excepciones vamos a mostrar los datos básicos del error.


```java
while (sqle != null) {
  System.out.println("Mensaje de error: " + sqle.getMessage());
  System.out.println("Estado SQL: " + sqle.getSQLState());
  System.out.println("Código de error: " + sqle.getErrorCode());
  sqle = sqle.getNextException();
}
```


Con lo visto aquí ya tenemos más información sobre cómo controlar SQLException y saber qué información podemos obtener de ella.

