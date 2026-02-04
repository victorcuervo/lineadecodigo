---
title: "Crear un objeto desde un array en PHP"
description: "Crear un objeto desde un array en PHP utilizando el forzado de tipos. Para ello utilizaremos un cast a un tipo object."
date: 2013-05-13
updatedDate: 2026-01-08
tags: []
slug: php/clases/crear-un-objeto-desde-un-array-en-php
type: doc
topic: php
id: 3e0513c9-26ed-437b-9301-46de57909b42
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/objetos/crear-objeto-de-array.php
---

Ya hemos visto como podemos [crear un objeto en PHP](http://lineadecodigo.com/php/crear-un-objeto-en-php/) de una forma sencilla. Ahora vamos a ver como podemos crear un objeto desde un array en [PHP](http://www.manualweb.net/php/). Es decir, el objeto y las propiedades estarán definidas dentro de un array. El objeto que vamos a crear en [PHP](http://www.manualweb.net/php/) representa a un libro con las siguientes propiedades:


```text
Titulo - Las legiones malditas
Autor - Santiago Posteguillo
Editorial - Ediciones B
Fecha Publicación - 2008
```


Lo primero que haremos será definir el array en [PHP](http://www.manualweb.net/php/) con las propiedades del objeto:


```php
$miarray = array("titulo"=>"Las legiones malditas",
  "autor" => "Santiago Posteguillo",
  "editorial" => "Ediciones B",
  "fechaPublicacion" => 2008);
```


Vemos que el valor del índice de los elementos del array es el nombre de la propiedad y el valor del índice en el array es el valor de dicha propiedad. En el código anterior hemos creado e insertado los valores del array directamente en la instanciación del mismo. Si bien podríamos ir por partes, si te resulta más sencillo:


```php
$miarray = array();
$miarray["titulo"] = "Las legiones malditas";
$miarray["autor"] = "Santiago Posteguillo";
$miarray["editorial"] = "Ediciones B";
$miarray["fechaPublicacion"] = 2008;
```


Si comprobamos la estructura de la variable $miarray, veremos que esta es, obviamente, de tipo array:


```php
array(4) { ["titulo"]=> string(21) "Las legiones malditas" ["autor"]=> string(20) "Santiago Posteguillo" ["editorial"]=> string(11) "Ediciones B" ["fechaPublicacion"]=> int(2008) }
```


Lo siguiente que haremos será transformar el array a un objeto. Para ello forzamos la conversión de tipos anteponiendo el tipo al que queremos convertir en una asignación. En este caso creamos el objeto desde un array forzando el tipo object.


```php
$libro = (object)$miarray;
```


Si ahora comprobamos la estructura de $libro veremos lo siguiente:


```php
object(stdClass)#1 (4) { ["titulo"]=> string(21) "Las legiones malditas" ["autor"]=> string(20) "Santiago Posteguillo" ["editorial"]=> string(11) "Ediciones B" ["fechaPublicacion"]=> int(2008) }
```


Ya hemos visto como crear un objeto desde un array en [PHP](http://www.manualweb.net/php/).

