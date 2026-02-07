---
title: "Consulta a una base de datos MySQL con PHP"
description: "Aprende a consultar una base de datos MySQL con PHP de forma sencilla y eficaz. Optimiza tus conexiones y gestiona tus datos como un experto."
date: 2013-01-22
updatedDate: 2026-02-07
tags: ["mysqli","query","free","close"]
slug: php/bases-de-datos/consulta-a-una-base-de-datos-mysql-con-php
type: doc
topic: php
id: 0a687517-9b8f-4e56-a411-955e63a42294
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/bd/consultaBD.php
---

Ya hemos visto lo sencillo que resulta [conectarnos a una base de datos MySQL utilizando PHP](http://lineadecodigo.com/php/conectarse-a-mysql-con-php/). Ahora vamos a aprovechar dicha conexión para realizar una sencilla consulta a una base de datos.


## Conectarse a MySQL


Lo primero que hará nuestro programa será conectarse a MySQL. Para ello utilizamos el objeto mysqli del lenguaje [PHP](http://www.manualweb.net/php/).


```php
@ $db = new mysqli("localhost", "root", "", "biblioteca");
```


Una vez realizada la conexión comprobaremos que esta se ha realizado correctamente. Para ello chequeamos el valor de `connect_error` para saber si se ha producido algún error:


```php
if ($db->connect_error)
  die('Error de Conexion ('.$db->connect_errno.')'.$db->connect_error);
```


## Preparar la consulta


Lo siguiente será preparar la consulta sobre la base de datos. En este caso vamos a tener una tabla que contenga libros con la siguiente estructura:


| Campo  | Tipo         |
| ------ | ------------ |
| ISBN   | VARCHAR(20)  |
| Titulo | VARCHAR(255) |
| Fecha  | DATE         |

undefined
La consulta SQL que vamos a ejecutar será:


```php
$consulta = "SELECT * FROM Libros";
```


## Ejecutar la consulta


Una vez preparada la consulta la ejecutamos mediante el método `query()`:


```php
$result = $db->query($consulta);
```


## Procesar los resultados


Ahora toca recorrer el resultset y mostrar por pantalla los datos. Para ello utilizamos el método `fetch_object()` que nos devuelve cada fila como un objeto:


```php
while ($fila = $result->fetch_object()) {
  echo $fila->ISBN." | ".$fila->Titulo." | ".$fila->Fecha."<br>";
}
```


## Liberar recursos


Ya solo nos queda liberar el resultset y la conexión a la base de datos con los métodos `free()` y `close()` respectivamente.


```php
$result->free();
$db->close();
```


Con este código podremos realizar consultas a nuestra base de datos MySQL en [PHP](http://www.manualweb.net/php/).

