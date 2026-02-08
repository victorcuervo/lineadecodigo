---
title: "Insertar elementos en MySQL con PHP"
description: "Aprende a insertar elementos en MySQL con PHP usando mysqli, la sentencia INSERT, query() para ejecutar y affected_rows para validar resultados."
date: 2013-02-11
updatedDate: 2026-02-08
tags: ["query","insert","mysqli","affected_rows"]
slug: php/bases-de-datos/insertar-elementos-en-mysql-con-php
type: doc
topic: php
id: 2c8a9dfb-adca-8101-9130-caad37ad3266
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/bd/insertBD.php
---

En este ejemplo vamos a ver cómo podemos insertar un elemento en MySQL utilizando [PHP](http://www.manualweb.net/php/).


## Conectar a la base de datos


Lo primero será conectarnos a la base de datos MySQL. Para ello vamos a crear una clase mysqli.


```php
@ $db = new mysqli("localhost", "root", "password", "biblioteca");
```


Vemos que nos hemos conectado con el usuario "root" y de contraseña "password". Además la base de datos que vamos a utilizar es "biblioteca".


## Preparar la sentencia INSERT


Lo siguiente será preparar [la sentencia de insercción en SQL mediante la sentencia INSERT](http://lineadecodigo.com/sql/insertar-un-elemento-en-sql/).


```php
$query = "INSERT INTO autores (idAutor, nombreAutor) VALUES (NULL, 'Larry Ullman');";
```


Esta sentencia la podemos completar con valores que vengan de la página web. Pero en estos casos hay que tener cuidado y realizarlo con un PreparedStatement para no tener problemas de inyección de código [SQL](http://www.manualweb.net/sql/).


## Ejecutar la sentencia INSERT


Ahora ejecutamos la sentencia de INSERT. Para ello utilizamos el método query.


```php
$result = $db->query($query);
```


## Validar el resultado


Tendremos que evaluar si hay contenido dentro del resultado para ver si se ha ejecutado correctamente la sentencia de INSERT. En ese caso podemos validar mediante el método `affected_rows` de la base de datos el número de filas que se han insertado.


```php
if ($result)
  echo $db->affected_rows." fila(s) afectada(s). Información insertada correctamente";
else
  echo "Ha ocurrido un problema insertando los datos";
```


## Cerrar la conexión


Ya solo nos quedará cerrar la base de datos.


```php
$db->close();
```

