---
title: "Crear un objeto JSON en PHP"
description: "Crear un objeto JSON en PHP apoyándonos en la función json_encode del lenguaje."
date: 2013-05-15
updatedDate: 2026-01-08
tags: ["json","json_encode","stdclass","array"]
slug: php/clases/crear-un-objeto-json-en-php
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/json/crear-objeto-json.php
topic: php

---

JSON es una notación de objetos en formato Javascript. Mediante JSON podemos realizar un intercambio sencillo de datos entre el cliente y el servidor. En este artículo vamos a ver como crear un objeto JSON en [PHP](http://www.manualweb.net/php/). Lo primero que haremos para crear un objeto JSON en [PHP](http://www.manualweb.net/php/) será [crear un objeto en PHP](http://lineadecodigo.com/php/crear-un-objeto-en-php/). El objeto que vamos a crear es una pregunta de la categoría de un test


```text
Pregunta - Altura del monte Everest.
Categoria - Cultura.
Respuestas - 8850, 8900 y 8875.
```


Pasamos a crear el objeto en [PHP](http://www.manualweb.net/php/):


```php
$pregunta = new stdClass();
$pregunta->titulo = "Altitud del monte Everest";
$pregunta->categoria = "Cultura";
```


En el caso de las respuestas, al ser varios valores, vamos a crear un array con todos los valores posibles.


```php
$pregunta->respuestas = array(8850,8900,8875);
```


Si creamos el array con los indices por defecto la estructura JSON que generemos será una estructura con una sola propiedad respuestas. Si queremos crear un objeto JSON en [PHP](http://www.manualweb.net/php/) dónde pueda tener una estructura para poder acceder a los valores de forma más sencilla podemos asignar nombres a las propiedades:


```php
$pregunta->respuestas = array("respuesta1"=>8850,"respuesta2"=>8900,"respuesta3"=>8875);
```


Lo siguiente para crear un objeto JSON en [PHP](http://www.manualweb.net/php/) será convertir el objeto en JSON. Para ello nos vamos a apoyar en la función json_encode. A la función json_encode le pasaremos el objeto [PHP](http://www.manualweb.net/php/) que acabamos de crear:


```php
$json = json_encode($pregunta);
```


Si ahora volcamos el contenido de la variable $json veremos que tiene una estructura JSON.


```text
{"titulo":"Altitud del monte Everest","categoria":"Cultura","respuestas":{"respuesta1":8850,"respuesta2":8900,"respuesta3":8875}}
```


Con esto ya hemos creado un objeto JSON con [PHP](http://www.manualweb.net/php/).

