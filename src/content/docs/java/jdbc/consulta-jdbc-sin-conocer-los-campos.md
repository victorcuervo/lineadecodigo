---
title: "Consulta JDBC sin conocer los campos"
description: "Cómo realizar una consulta JDBC sin conocer los campos y listar todo el contenido devuelto en el ResultSet."
date: 2007-09-10
updatedDate: 2026-01-11
tags: ["mysql","bases-de-datos","consulta","SQL Select","resultset","drivermanager","preparedstatement","sqlexception","executequery","try-catch","connection","resultsetmetadata"]
slug: java/jdbc/consulta-jdbc-sin-conocer-los-campos
author: Víctor Cuervo
type: doc
id: 81ec4d63-e18b-4748-b6d5-e958b8f808fd
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/ConsultarTablaSinConocerCampos.java
---

Una de las primeras cosas que haremos cuando estemos utilizando una base de datos desde un programa [Java](https://www.manualweb.net/java/) con [JDBC](http://lineadecodigo.com/tag/java-jdbc/) será hacer consultas. Si nos centramos en cualquier tipo de aplicación lo normal es que el tipo de sentencia hacia las bases de datos más utilizado sea la consulta. Bastante más que las inserciones, actualizaciones y borrados.


El caso normal y lógico ante un entorno optimizado es la realización de consultas cerradas. Donde están claramente definidos los campos que se quieren recuperar, así como los índices de acceso a los datos. Cierto es que se puede construir consultas donde los campos sean variables, incluso sus filtros. Si bien, dichas consultas solo nos traerán quebraderos de cabeza y mucho tiempo en busca de la optimización.


No quiero decir que esto no se deba de hacer, ya que hay ciertos casos donde si que son útiles. Pero por norma general deberemos de acostumbrarnos a definir bien nuestras consultas y hacerlas cerradas.


> ⚠️ En este ejemplo vamos a hacer una consulta que ¡No deberíais de poner nunca en producción! Pero que es útil para demostraros el uso de [JDBC](http://lineadecodigo.com/tag/java-jdbc/).


La consulta en cuestión será:


```sql
SELECT * FROM tabla
```


Imaginaros la cantidad de campos y filas que puede tener una tabla de este calibre dentro de una gran empresa. Vamos, que seríamos objeto de las iras de los administradores de bases de datos si intentásemos lanzar esta consulta en un entorno de producción.


A nosotros nos va a servir en el ejemplo ya que la idea es listar el contenido de la tabla, desconociendo el número de filas y columnas que esta contiene. Así que empecemos...


## Cargar drivers y establecer conexión


Lo primero será cargar los drivers de acceso a la base de datos y realizar la conexión. En nuestro caso vamos a utilizar los drivers de una base de datos MySQL `com.mysql.jdbc.Driver`, pero puedes utilizar cualquiera. Si no sabes cuales son los drivers de tu base de datos siempre podrás utilizar el driver para ODBC: `sun.jdbc.odbc.JdbcOdbcDriver`.


```java
Class.forName("com.mysql.jdbc.Driver");
Connection con = DriverManager.getConnection("jdbc:mysql://[localhost:3306/test","usuario","password](http://localhost:3306/test%22,%22usuario%22,%22password)");
```


Como podemos ver en el código, es la clase `DriverManager` la que nos permite establecer la conexión con la url, un usuario y un password. Ya que el acceso a la base de datos y para este caso (aunque suele ser normal) necesita de autentificación.


## Ejecutar la consulta


Lo siguiente que vamos a realizar es definir la sentencia de consulta (nuestra SELECT) y ejecutarla. Para ello definiremos una clase `PreparedStatement` para la consulta y una clase `ResultSet` para almacenar el conjunto de resultados.


```java
String sQuery = "SELECT * FROM tabla";
PreparedStatement pstmt = con.prepareStatement(sQuery);
ResultSet rs = pstmt.executeQuery();
```


La ejecución de la sentencia se hace con el método `executeQuery()` y los resultados se almacenan en el `ResultSet`.


## Obtener metadatos de las columnas


Ahora llega el momento de indagar cuantas columnas tiene nuestra consulta. Ya que nuestra poca disposición ante las consultas optimizadas nos ha llevado a escribir el `SELECT *`.


La información de las columnas va en los metadatos de la consulta. Los metadatos es información relacionada con el conjunto de resultados obtenidos. Para acceder a la información de los metadatos tenemos el método `getMetaData()` dentro del `ResultSet`. Este método devolverá otro `ResultSet`, pero con meta-información.


De esta meta-información utilizaremos dos métodos:

- **`getColumnCount()`**, que nos dice el número de columnas que hay en la consulta.
- **`getColumnName(id)`**, que dado un id de columna nos devuelve su nombre.

Lo que vamos a hacer es recorrer mediante un bucle todas las columnas y mostrar sus nombres.


```java
ResultSetMetaData rsmd = rs.getMetaData();
int columnCount = rsmd.getColumnCount();

for (int x=1; x<=columnCount; x++)
    System.out.print(rsmd.getColumnName(x) + "\t");
```


## Listar el contenido de la consulta


Una vez impresas en pantalla las columnas de la consulta solo nos quedará el listar el contenido de la misma. En este caso los métodos `getXXX()` deberán de ser utilizados mediante un número y no el nombre de la columna (ya que os recuerdo que no le sabemos).


Es por ello que nos volveremos a apoyar en [el método getColumnCount()](https://www.w3api.com/Java/ResultSetMetaData/getColumnCount/) para ir listado los datos. El código que nos queda es el siguiente:


```java
while ([rs.next](http://rs.next/)()) {
    for (int x=1; x<=columnCount; x++)
        System.out.print(rs.getString(x) + "\t");
    System.out.println();
}
```


Para iterar sobre el `ResultSet` utilizamos el método `next()`. Dicho método devolverá un valor `false` (que será el que nos ayude a salir del bucle) cuando no haya más registros.


## Cerrar la conexión


Solo nos quedará cerrar la conexión a la base de datos. Como todo el código de acceso a la base de datos está entre un `try-catch`, ya que puede saltar una excepción `SQLException` en cualquier momento, la idea es utilizar la parte `finally` del `try-catch` para cerrar las conexiones.


El `finally` se ejecuta siempre, independientemente de que se haya producido una excepción o no.


```java
finally {
    try {
        if (rs != null) rs.close();
        if (pstmt != null) pstmt.close();
        if (con != null) con.close();
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

