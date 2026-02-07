---
title: "Crear un objeto vacío en PHP"
description: "Aprende a crear un objeto vacío en PHP usando stdClass y el operador new, ideal para asignar propiedades dinámicamente según tus necesidades."
date: 2013-05-19
updatedDate: 2026-02-07
tags: ["stdclass","new","var_dump","objeto"]
slug: php/clases/crear-un-objeto-vacio-en-php
type: doc
topic: php
id: 7d116017-8215-4f61-a08b-39088c412cb0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/objetos/crear-objeto-vacio.php
---

En [PHP](http://www.manualweb.net/php/) podemos manejar objetos y crear objetos a partir de sus clases. Una de las primeras cosas que podemos hacer es crear un objeto vacío en [PHP](http://www.manualweb.net/php/).


## La clase stdClass


Para crear un objeto vacío en [PHP](http://www.manualweb.net/php/) vamos a utilizar la **clase stdClass**. La clase **stdClass** es la que representa un objeto vacío en PHP. Simplemente tendremos que codificar lo siguiente:


```php
$miobjeto = new stdClass();
```


## Verificar el objeto con var_dump


Si volcamos el contenido del objeto por consola mediante la función `var_dump` podemos comprobar la estructura de la variable y ver que, efectivamente, es un objeto.


```php
var_dump($miobjeto);
```


El resultado será:


```php
object(stdClass)#1 (0) { }
```


## Asignar propiedades al objeto vacío


Nuestra variable $miobjeto ya se habrá convertido en un objeto vacío en [PHP](http://www.manualweb.net/php/) y a partir de este momento podremos asignarle las propiedades que queramos. Las propiedades las creamos mediante el operador de asignación -> de la siguiente forma:


```php
$miobjeto->propiedad = "valor";
```


¿Qué utilidad encontrarías al crear un objeto vacío en [PHP](http://www.manualweb.net/php/)?

