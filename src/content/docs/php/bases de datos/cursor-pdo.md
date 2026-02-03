---
title: "Cursor PDO"
description: "Se explica cómo manejar un cursor PDO en PHP para acceder a datos de una base de datos MySQL."
date: 2016-04-13
updatedDate: 2026-01-07
tags: ["pdo","pdoexception","cursor","query","foreach","select","row"]
slug: php/bases-de-datos/cursor-pdo
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8168-8070-c85267037347
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/bbdd/pdo/cursor_pdo.php
---

La capa de datos PDO en [PHP](http://www.manualweb.net/php/) nos permite un manejo estándar de las bases de datos. En este ejemplo vamos a ver como manejar un cursor DPO. Un cursor PDO será el conjunto de datos resultado de ejecutar una sentencia. Lo primero que haremos en PDO será conectarnos a nuestra base de datos. En este caso será una base de datos MYSQL, de ahí la cadena de conexión. La conexión se conseguirá instanciando el objeto `PDO`.


```php
$db = new PDO('mysql:host=localhost;dbname=lineadecodigo;charset=utf8mb4', 'usuario', 'password');
```


El objeto PDO recibe la cadena de conexión seguida del usuario/password de conexión. Ahora pasaremos a ejecutar la sentencia que nos devuelva el cursor PDO. Para ejecutar la sentencia utilizamos el método `query()`.


```php
$db->query('SENTENCIA SQL')
```


En este caso tiraremos sobre una tabla de usuarios.


```php
$db->query('SELECT first_name,last_name FROM users')
```


La ejecución del método `query()` nos devolverá el cursor PDO. Así que utilizaremos una estructura `foreach` para poder recorrerlo.


```php
foreach($db->query('SELECT first_name,last_name FROM users') as $row) { ... }
```


En cada iteración tendremos en el objeto `$row` la fila de datos del cursor. Así que podremos acceder a una columna en concreto mediante la sentencia.


```php
$row['nombre_columna']
```


El código final quedaría de la siguiente forma:


```php
foreach($db->query('SELECT first_name,last_name FROM users') as $row) {
  echo $row['first_name'].' '.$row['last_name'].'<br></br>';
}
```


No se nos debe olvidar controlar los errores que pueden aparecer durante la ejecución del programa, así que se bueno que todo lo integremos mediante un bucle `try-catch` que controle la excepción `PDOException`. Y con esto ya hemos conseguido crear nuestro programa que maneja y recorre un cursor PDO.


La capa de datos PDO en [PHP](http://www.manualweb.net/php/) nos permite un manejo estándar de las bases de datos. En este ejemplo vamos a ver como manejar un cursor DPO. Un cursor PDO será el conjunto de datos resultado de ejecutar una sentencia. Lo primero que haremos en PDO será conectarnos a nuestra base de datos. En este caso será una base de datos MYSQL, de ahí la cadena de conexión. La conexión se conseguirá instanciando el objeto `PDO`.


```php
$db = new PDO('mysql:host=localhost;dbname=lineadecodigo;charset=utf8mb4', 'usuario', 'password');
```


El objeto PDO recibe la cadena de conexión seguida del usuario/password de conexión. Ahora pasaremos a ejecutar la sentencia que nos devuelva el cursor PDO. Para ejecutar la sentencia utilizamos el método `query()`.


```php
$db->query('SENTENCIA SQL')
```


En este caso tiraremos sobre una tabla de usuarios.


```php
$db->query('SELECT first_name,last_name FROM users')
```


La ejecución del método `query()` nos devolverá el cursor PDO. Así que utilizaremos una estructura `foreach` para poder recorrerlo.


```php
foreach($db->query('SELECT first_name,last_name FROM users') as $row) { ... }
```


En cada iteración tendremos en el objeto `$row` la fila de datos del cursor. Así que podremos acceder a una columna en concreto mediante la sentencia.


```php
$row['nombre_columna']
```


El código final quedaría de la siguiente forma:


```php
foreach($db->query('SELECT first_name,last_name FROM users') as $row) {
  echo $row['first_name'].' '.$row['last_name'].'<br></br>';
}
```


No se nos debe olvidar controlar los errores que pueden aparecer durante la ejecución del programa, así que se bueno que todo lo integremos mediante un bucle `try-catch` que controle la excepción `PDOException`. Y con esto ya hemos conseguido crear nuestro programa que maneja y recorre un cursor PDO.

