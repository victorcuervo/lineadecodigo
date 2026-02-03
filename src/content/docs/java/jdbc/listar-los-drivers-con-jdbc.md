---
title: "Listar los drivers con JDBC"
description: "Ejemplo de código Java que nos ayuda a listar los drivers con JDBC que tengamos cargados y que estén preparados para su uso."
date: 2007-08-05
updatedDate: 2026-01-11
tags: ["jdbc","driver","drivermanager","mysql","class"]
slug: java/jdbc/listar-los-drivers-con-jdbc
author: victor_cuervo
type: doc
id: 91e5aeb7-3eb3-46c6-a01b-1c38c5447fec
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/ListarDrivers.java
---

El API [JDBC](http://lineadecodigo.com/tag/java-jdbc/) propone un interface estándar de acceso a bases de datos. Los vendedores de bases de datos implementan dicho interface. Para ello lo que hacen es crear drivers. Por lo tanto el driver son el conjunto de clases que implementan el interface [JDBC](http://lineadecodigo.com/tag/java-jdbc/) para una determinada base de datos.


## Ejemplos de Drivers

- **MySQL** - `com.mysql.jdbc.Driver`
- **Oracle** - `oracle.jdbc.driver.OracleDriver`
- **DB2** - [`COM.ibm.db2.jdbc.app`](http://com.ibm.db2.jdbc.app/)`.DB2Driver`
- **SQLServer** - [`com.microsoft`](http://com.microsoft/)`.jdbc.sqlserver.SQLServerDriver`
- **Genérico de ODBC** - `sun.jdbc.odbc.JdbcOdbcDriver`

En la página [http://developers.sun.com/product/jdbc/drivers](http://developers.sun.com/product/jdbc/drivers) permite buscar drivers de diferentes vendedores por tipo de driver (1, 2, 3 o 4), nombre de vendedor, compatibilidad con J2EE 1.2, 1.3 o 1.4, por las características del driver: si tiene pool de conexiones, si tiene datasource, etc.


## Listar Drivers Precargados


En nuestro ejemplo vamos a listar qué drivers están precargados en el entorno de ejecución. Además mostraremos las versiones del driver, así como si es un driver certificado en la compatibilidad [JDBC](http://lineadecodigo.com/tag/java-jdbc/) de SUN.


Lo primero que haremos será precargar algunos drivers, para tener salidas en nuestro programa, ya que nadie nos asegura que exista alguno precargado. La forma de cargar un driver mediante programación es cargando su clase mediante la clase `Class`:


```java
Class.forName("com.mysql.jdbc.Driver");
Class.forName("oracle.jdbc.driver.OracleDriver");
Class.forName("sun.jdbc.odbc.JdbcOdbcDriver");
```


Ahora utilizaremos el `DriverManager` para interrogarle qué drivers están precargados. El [método .getDrivers()](https://www.w3api.com/Java/DriverManager/getDrivers/) nos devolverá un listado de drivers. La abstracción del driver está reflejada en la clase `Driver`:


```java
Enumeration<Driver> eDrivers = DriverManager.getDrivers();
```


Diferentes métodos de `Driver` nos darán la información relativa al mismo:


```java
while (eDrivers.hasMoreElements()) {
    Driver driver = eDrivers.nextElement();
    System.out.println("Nombre del Driver: " + driver.getClass().getName());
    System.out.println("Versión: " + driver.getMajorVersion() + "." + driver.getMinorVersion());
    System.out.println("JDBC Compliant: " + driver.jdbcCompliant());
    System.out.println();
}
```

