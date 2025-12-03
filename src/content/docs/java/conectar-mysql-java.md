---
title: Conectar MySQL Java
description: "Pasos que tenemos que dar para poder conectar mysql con Java utilizando las librerías de acceso a bases de datos jdbc y su clase Connection."
lastupdates: 2023-09-17
author: victor_cuervo
---

Para poder conectar MySQL con [Java](https://www.manualweb.net/java/) vamos a utilizar la tecnología JDBC de [Java](https://www.manualweb.net/java/). JDBC nos permite el acceso a los datos desde un [programa Java](https://lineadecodigo.com/categoria/java/).


### Descargar el driver MySQL JDBC


Lo primero que necesitaremos para conectar MySQL con [Java](https://www.manualweb.net/java/) es descargar los drivers de JDBC que tiene MySQL. Podéis descargar los drivers desde [https://dev.mysql.com/downloads/connector/j/](https://dev.mysql.com/downloads/connector/j/)


En el caso de que estéis utilizando un gestor de dependencias como **Maven** podéis añadir la siguiente dependencia.


```xml
<dependency>
  <groupid>mysql</groupid>
  <artifactid>mysql-connector-java</artifactid>
  <version>5.1.6</version>
</dependency>
```


Lo importante es que el fichero que contiene el driver mysql-connector-java-5.1.6.jar se encuentre dentro del _classpath_ de la aplicación. Ya que iremos a dicho _classpath_ para cargarlo y utilizarlo en nuestro programa.


### Cargar el Driver MySQL


Lo siguiente será realizar la conexión a MySQL. Si estás utilizando una versión anterior a JDBC 4, es decir, **si utilizas un compilador inferior a JavaSE 7**, lo primero que necesitarás será cargar el driver.


Para cargar el driver, acudiremos a la clase [`Class.forName()`](https://w3api.com/Java/Class/forName/), la cual recibirá como parámetro el nombre del driver.


```java
Class.forName("com.mysql.jdbc.Driver").newInstance();
```


Si estás utilizando Java SE 7 o superior, puedes evitar esta línea de código, ya que el compilador cargará el Driver automáticamente por nosotros.


### Conexión a MySQL desde JDBC


Una vez tengamos el Driver cargado deberemos de conectarnos a la base de datos mediante la clase [`Connection`](https://w3api.com/Java/Connection-java-sql/) y el método [`.getConnection()`](https://w3api.com/Java/DriverManager/getConnection/) del driver que se gestiona mediante la clase [`DriverManager`](https://w3api.com/Java/DriverManager/). Dicho método espera una cadena de conexión a la base de datos. La cadena de conexión a MySQL tiene la siguiente estructura:


```java
jdbc:mysql://[host1]:[port1],[host2]:[port2]/[databaseName]?[property1=value1]&amp;[property2=value2]
```


En nuestro caso simplemente vamos a indicar una máquina, el puerto, que para MySQL suele ser el 3306 y el nombre de la base de datos (que en nuestro caso se llama "lineadecodigo"). De esta manera, la cadena de conexión MySQL para JDBC quedaría de la siguiente forma:


```java
jdbc:mysql://localhost:3306/lineadecodigo
```


Ahora solo tenemos que utilizarla en el método [`.getConnection()`](https://w3api.com/Java/DriverManager/getConnection/) desde el [`DriverManager`](https://w3api.com/Java/DriverManager/).


```java
Connection con = null;
String sURL = "jdbc:mysql://localhost:3306/lineadecodigo";
con = DriverManager.getConnection(sURL,"usuario","password");
```


Vemos que el segundo y tercer parámetro es el usuario/password de la conexión.


### Consulta sobre MySQL tras conectar MySQL con Java


Ya solo nos quedará ejecutar la consulta que queramos sobre nuestra base de datos MySQL, aunque eso ya es harina de otro costal. De todas maneras, aquí os dejamos un código de ejemplo de la conexión.


```java
try (PreparedStatement stmt = con.prepareStatement("SELECT country FROM country")) {
  ResultSet rs = stmt.executeQuery();

  while (rs.next())
    System.out.println (rs.getString("country"));

} catch (SQLException sqle) {
  System.out.println("Error en la ejecución:"
    + sqle.getErrorCode() + " " + sqle.getMessage());
}
```


Hemos lanzado una consulta sencilla que definimos en un [`PreparedStatement`](https://w3api.com/Java/PreparedStatement/) y que almacenamos en un [`ResultSet`](https://w3api.com/Java/ResultSet/) una vez que hemos ejecutado la consulta con el método [`.executeQuery()`](https://w3api.com/Java/PreparedStatement/executeQuery/).


Siempre que realizamos consultas sobre una base de datos deberemos de tener cuidado de controlar la excepción [`SQLException`](https://w3api.com/Java/SQLException/).


De esta manera ya hemos conseguido conectar MySQL con [Java](http://www.manualweb.net/tutorial-java/).

