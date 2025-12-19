---
title: "Conectar una BBDD con PHP PDO"
description: "Conectar una BBDD con PHP PDO permite gestionar datos de forma estándar y controlar errores en la conexión fácilmente."
lastUpdated: 2025-12-19
slug: php/conectar-una-bbdd-con-php-pdo
author: Víctor Cuervo
---

PDO es el acrónimo de _**PHP Data Object**_. PDO es la capa de abstracción de objetos para poder manipular los datos de las bases de datos de forma estándar. Es decir, no existen métodos propios de cada base de datos, si no que PDO define un interface estándar que las bases de datos tienen que soportar. De esta forma conseguiremos que un programa [PHP](http://www.manualweb.net/php/) construido con PDO sirva para acceder a cualquier base de datos. O, al menos, en teoría así sería. En este ejemplo vamos a conectar una BBDD con [PHP](http://www.manualweb.net/php/) PDO. Lo primero para establecer una conexión con PDO es crear un objeto PDO.


```php
$db = new PDO()
```


Para instanciar un objeto PDO deberemos de pasarle la cadena de conexión a la base de datos, el usuario y el pasword de conexión. En el caso de que la base de datos sea MYSQL la cadena de conexión será.


```php
mysql:host=nombre_host;dbname=nombre_bbdd;
```


De esta forma la creación del objeto PDO quedará de la siguiente forma:


```php
$db = new PDO('mysql:host=localhost;dbname=lineadecodigo;charset=utf8mb4', 'usuario', 'password');
```


Para comprobar que hemos conseguido conectar una BBDD con [PHP](http://www.manualweb.net/php/) PDO vamos a volcar el estado de la conexión. Para recuperar el estado de la conexión utilizamos el método `.getAttribute()` al cual le pasaremos la constante `PDO::ATTR_CONNECTION_STATUS`.


```php
echo 'Conectado a '.$db->getAttribute(PDO::ATTR_CONNECTION_STATUS);
```


Es importante saber que puede existir un fallo en el proceso de conexión. Los motivos pueden ser múltiples, que no esté accesible el host, o que no exista la base de datos o que falle el usuario/password,... Es por ello que deberemos de controlar los errores en PDO. Para ello vamos a utilizar un bucle `try-catch` y controlaremos al excepción `PDOException`


```php
try {
  $db = new PDO('mysql:host=localhost;dbname=lineadecodigo;charset=utf8mb4', 'usuario', 'password');
  echo 'Conectado a '.$db->getAttribute(PDO::ATTR_CONNECTION_STATUS);
} catch(PDOException $ex) {
  echo 'Error conectando a la BBDD. '.$ex->getMessage(); 
}
```


El método `getMessage()` de la excepción nos dará información sobre el problema que se ha generado. De esta forma tan sencilla hemos conseguido conectar una BBDD con PHP PDO.

