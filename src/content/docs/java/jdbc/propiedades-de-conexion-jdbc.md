---
title: "Propiedades de conexión JDBC"
description: "Las propiedades de conexión JDBC permiten gestionar accesos a bases de datos en diferentes entornos de forma eficiente."
date: 2016-10-20
updatedDate: 2026-01-11
tags: ["properties","connection","drivermanager","preparedstatement","mysql"]
slug: java/jdbc/propiedades-de-conexion-jdbc
type: doc
topic: java
id: ee8133ce-9341-477b-8768-c3f19933b342
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/ConexionConProperties.java
---

Si tenemos una conexión a una base de datos y vamos a desplegar nuestro código por diferentes entornos será muy útil el utilizar **propiedades de conexión JDBC**. La idea es que en cada entorno de ejecución: desarrollo, implantación y producción es probable que tengamos información de acceso a la base de datos diferente. En ese caso podemos poner el usuario y password en un fichero de propiedades el cual podemos pasar a la conexión JDBC contra nuestra base de datos.


## Crear un fichero de propiedades


La idea es crear un fichero de propiedades. Para el ejemplo vamos a hacerlo directamente por código:


```java
Properties prop = new Properties();
prop.setProperty("user", "usuario");
prop.setProperty("password", "password");
```


Los atributos que añadimos a nuestra propiedades son `user` y `password` que son los que coinciden con el usuario y contraseña de conexión a la base de datos.


Si bien, en este fichero de propiedades podremos especificar otros atributos de configuración que esté esperando la base de datos. Por ejemplo si utilizamos una base de datos MySQL podemos encontrar algunos como:

- **jdbcCompliantTruncation**, para forzar truncado de campos en inserción.
- **cachePrepStmts**, cachear los `PreparedStatement`.
- **enableQueryTimeouts**, activar timeouts en la ejecución de las queries.
- **roundRobinLoadBalance**, para balancear con nodos esclavos.
- **autoReconnect**, para hacer failover sobre un nodo esclavo.

## Establecer la conexión con Properties


Ahora estableceremos la conexión mediante el método `DriverManager.getConnection()`. En este caso la estructura de llamada será el indicarle la URL de conexión y el objeto con las propiedades como segundo parámetro.


```java
Connection con = DriverManager.getConnection("jdbc:mysql://[localhost/database](http://localhost/database)", prop);
```


En este caso, para simplificar el código hemos insertado las propiedades directamente en el objeto Properties mediante código, pero podríais cargar el fichero de propiedades de forma externa.


```java
Properties prop = new Properties();
prop.load(new FileInputStream("[conexion.properties](http://conexion.properties/)"));
```


Os recomiendo el artículo ["Leer valores de fichero de Properties"](http://lineadecodigo.com/java/leer-valores-de-fichero-de-properties/) para tener más información sobre cómo realizar esta tarea.


## Código completo


Una vez hemos establecido la conexión, el resto del código será como cualquier otro que quiera [establecer una conexión a una base de datos con Java JDBC](http://lineadecodigo.com/java/conectarnos-a-una-base-de-datos-con-jdbc/). En este caso habremos establecido las propiedades de conexión JDBC con un objeto `Properties`.

