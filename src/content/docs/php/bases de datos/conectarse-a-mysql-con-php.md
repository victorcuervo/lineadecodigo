---
title: "Conectarse a MySQL con PHP"
description: "Aprende a conectarte a MySQL con PHP usando mysqli, verificar la conexión con connect_error y cerrarla correctamente con close() en tus aplicaciones."
date: 2013-01-16
updatedDate: 2026-02-07
tags: ["mysql","mysqli","close"]
slug: php/bases-de-datos/conectarse-a-mysql-con-php
type: doc
topic: php
id: 2c75bce5-68ca-4541-a535-6c7fd8063808
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/bd/conectarBD.php
---

En este ejemplo vamos a ver como conectamos nuestro programa [PHP](http://www.manualweb.net/php/) con una base de datos MySQL de cara a poder realizar consultas sobre dicha base de datos.


## Crear el objeto mysqli


Para conectarse a MySQL con [PHP](http://www.manualweb.net/php/) lo primero que tenemos que hacer es crear un objeto mysqli, el cual abrirá una conexión con la base de datos MySQL.


```php
@ $db = new mysqli($host, $usuario, $password, $bd);
```


Al objeto mysqli le tenemos que pasar la siguiente información:

- **host**, servidor que tiene la base de datos mysql.
- **usuario**, usuario que se conecta a la base de datos.
- **password**, contraseña que utiliza el usuario para conectarse a la base de datos.
- **base de datos**, nombre de la base de datos a la que queremos conectarnos

Adicionalmente podemos establecer otros parámetros como el puerto de conexión de la base de datos y el socket de conexión.


De esta forma podemos conectarnos a MySQL con PHP utilizando la siguiente línea de código:


```php
@ $db = new mysqli("localhost", "root", "password", "biblioteca");
```


## Comprobar la conexión


Lo siguiente que haremos será comprobar si nos hemos conectado de forma correcta. Para lo cual lo que hacemos es comprobar si se ha producido error. Esto nos lo da el atributo `connect_error`.


```php
if ($db->connect_error)
  die('Error de Conexion ('.$db->connect_errno.')'.$db->connect_error);
```


Si no nos hemos conectado bien nos salimos del programa mediante la función `die()`, a la cual pasamos el error producido: `connect_error` y el código del error: `connect_errno`.


## Información del host


En el caso de que nos hayamos conectado de forma correcta vamos a volcar la información del host al que nos hemos conectado mediante el atributo `host_info`.


```php
echo "Conexion correcta con la base de datos... ".$db->host_info;
```


## Cerrar la conexión


Lo último que hará nuestro programa de conexión a la base de datos MySQL desde [PHP](http://www.manualweb.net/php/) será el cerrar la conexión a la base de datos mediante el método `.close()`


```php
$db->close();
```

