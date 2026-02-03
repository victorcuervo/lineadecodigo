---
title: "Cargar combo desde BBDD con PHP PDO"
description: "Se explica cómo cargar combo desde BBDD con PHP PDO utilizando una conexión y consultas a la base de datos."
date: 2016-04-15
updatedDate: 2026-01-08
tags: ["form","select","option","pdo","query","foreach"]
slug: php/bases-de-datos/cargar-combo-desde-bbdd-con-php-pdo
author: Víctor Cuervo
type: doc
id: 65cd229f-469a-40b7-b9ba-9076ed4c4491
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/bbdd/pdo/cargar_combo_pdo.php
---

A la hora de construir un formulario web es posible que los valores estén guardados en una base de datos. Es por ello que vamos a ver cómo podemos cargar combo desde BBDD con [PHP](http://www.manualweb.net/php/) PDO. Lo primero será conectarnos a la base de datos utilizando un objeto PDO.


```php
$db = new PDO('mysql:host=localhost;dbname=lineadecodigo;charset=utf8mb4','usuario', 'password');
```


Vemos que para realizar la conexión a la base de datos, en este caso una base de datos MYSQL, necesitamos una cadena de conexión, el usuario y password. Lo siguiente será preparar la consulta. En este caso vamos a acceder a la tabla paises para generar un combo con información de países. El método `.query()` nos permite ejecutar la consulta.


```php
$db->query('SELECT id,country FROM country')
```


Lo siguiente es recorrer el cursor mediante una estructura `foreach`. Cada vez que iteremos por una de las filas del cursor vamos a crear un estructura [HTML](https://www.manualweb.net/html/) de tipo `option`.


```php
foreach($db->query('SELECT id,country FROM country') as $row) {
  echo '<option value="'.$row['id'].'">'.$row['country'].'</option><option></option>';
}
```


Vemos que el campo ID que hace referencia al campo índice de la tabla lo ponemos como atributo `value`, mientras que el texto es el contenido del elemento `option.`Es importante que antes y después de recorrer el cursor hayamos creado el objeto `select` de [HTML](https://www.manualweb.net/html/) para que se pueda dar la forma al combo. El código para cargar combo desde BBDD con [PHP](http://www.manualweb.net/php/) PDO nos quedaría de la siguiente forma:


```php
echo '<h1>Paises</h1>';

echo '<select>';
foreach($db->query('SELECT id,country FROM country') as $row) {
  echo '<option value="'.$row['id'].'">'.$row['country'].'</option><option></option>';
}
echo '</select>';
```

