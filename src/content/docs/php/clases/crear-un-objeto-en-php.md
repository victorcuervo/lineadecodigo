---
title: "Crear un objeto en PHP"
description: "Aprende a crear objetos en PHP usando stdClass para representar entidades con propiedades y valores, sin necesidad de definir una clase previa."
date: 2013-05-12
updatedDate: 2026-02-07
tags: ["stdclass","new","var_dump","objeto"]
slug: php/clases/crear-un-objeto-en-php
type: doc
topic: php
id: 9fb80fcb-e7e6-4f2b-a6c8-942c7c00b225
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/objetos/crear-objeto.php
---

En [PHP](http://www.manualweb.net/php/) a parte de datos simples podemos trabajar con objetos. Objetos que tengan sus propiedades y métodos. Podemos crear un objeto en [PHP](http://www.manualweb.net/php/) a partir de una clase, como se haría de una manera formal, si bien podemos crear un objeto en [PHP](http://www.manualweb.net/php/) de forma directa, sin clase asociada.


El objeto que vamos a crear en [PHP](http://www.manualweb.net/php/) es un objeto que represente un libro con las siguientes propiedades:

- **Titulo** - Las legiones malditas
- **Autor** - Santiago Posteguillo
- **Editorial** - Ediciones B
- **Fecha Publicación** - 2008

## Crear el objeto con stdClass


Para crear un objeto en [PHP](http://www.manualweb.net/php/) lo primero será crear una variable que represente al libro. Para ello utilizamos la clase stdClass que sirve para representar un objeto.


```php
$libro = new stdClass();
```


> Si queremos crear un objeto en [PHP](http://www.manualweb.net/php/) no es estrictamente necesario utilizar la clase stdClass, ya que al asignar a una variable una propiedad, automáticamente se convierte en un objeto.


## Asignar propiedades al objeto


Ahora empezaremos a asignarle las propiedades. Para asignar la propiedad a un objeto utilizamos el operador de asignación -> de la siguiente forma:


```php
$objeto->propiedad = "valor de la propiedad";
```


De esta forma para crear las propiedades del objeto libro en nuestro programa escribiremos lo siguiente:


```php
$libro->titulo = "Las legiones malditas";
$libro->autor = "Santiago Posteguillo";
$libro->editorial = "Ediciones B";
$libro->fechaPublicacion = 2008;
```


En estas cuatro sencillas líneas hemos asignado las propiedades y valores. Como podemos comprobar habrá propriedades que sean cadenas y que pondremos entre comillas y propiedades que serán numéricas, como la fecha de publicación.


## Visualizar el objeto con var_dump


Ahora que hemos creado el objeto, podemos volcarle para ver su estructura mediante un `var_dump`.


```php
var_dump($libro);
```


En consola podremos ver la estructura que tiene nuestro objeto:


```php
object(stdClass)#1 (4) {
  ["titulo"]=>
  string(21) "Las legiones malditas"
  ["autor"]=>
  string(20) "Santiago Posteguillo"
  ["editorial"]=>
  string(11) "Ediciones B"
  ["fechaPublicacion"]=>
  int(2008)
}
```


Espero que os haya servido el código para poder crear un objeto en [PHP](http://www.manualweb.net/php/).

