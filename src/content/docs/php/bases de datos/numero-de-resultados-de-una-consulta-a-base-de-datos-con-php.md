---
title: "Número de resultados de una consulta a base de datos con PHP"
description: "Aprende cómo obtener el número de resultados de una consulta a base de datos con PHP utilizando mysqli y la propiedad num_rows de forma sencilla."
date: 2013-01-20
updatedDate: 2026-02-08
tags: ["mysqli","query","num_rows","close"]
slug: php/bases-de-datos/numero-de-resultados-de-una-consulta-a-base-de-datos-con-php
type: doc
topic: php
id: 08533cf0-af08-4b36-b1c1-83b590597c5c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/bd/resultadosConsultaBD.php
---

Cuando estemos realizando una consulta a una base de datos con [PHP](http://www.manualweb.net/php/) nos va a resultar muy útil el saber el número de resultados que obtenemos. Para ello existen varias formas de realizarlo. Una primera que es mediante el API programático de [PHP](http://www.manualweb.net/php/) y la otra que es mediante una consulta [SQL](http://www.manualweb.net/sql/).


En este caso vamos a recuperar el número de resultados de una consulta a una base de datos de forma programática en [PHP](http://www.manualweb.net/php/).


## Conectarse a la base de datos


Así, lo primero que haremos será conectarnos a la base de datos.


```php
@ $db = new mysqli(localhost, "root", "password", "biblioteca");

if ($db->connect_error)
	die('Error de Conexion ('.$db->connect_errno.')'.$db->connect_error);
```


Vemos que nos hemos conectado a una base de datos llamada "biblioteca" con el usuario "root" y de contraseña "password". No dejes de leer el artículo [cómo conectarse a MySQL con PHP](http://lineadecodigo.com/php/conectarse-a-mysql-con-php/) para ver más en detalle el proceso de conexión.


## Ejecutar la consulta SQL


Lo siguiente será el realizar una consulta [SQL](http://www.manualweb.net/sql/) sobre la base de datos.


```php
$query = "SELECT * FROM libros";
$result = $db->query($query);
```


Montamos una consulta [SQL](http://www.manualweb.net/sql/) y la ejecutamos sobre la base de datos mediante el método `query`. Podemos observar que la consulta es sencilla y simplemente recupera toda la información de la tabla libros.


## Obtener el número de resultados


Ahora vamos a ver el número de resultados que nos ha devuelto la consulta. Para ello utilizamos el método `num_rows` sobre el resultado de la consulta.


```php
$numfilas = $result->num_rows;
echo "El número de elementos es ".$numfilas."<br></br>";
```


## Cerrar la conexión


Ya solo nos quedará cerrar la conexión a la base de datos.


```php
$result->free();
$db->close();
```

