---
title: "Generar una lista de números aleatorios en PHP"
description: "Aprende a generar una lista de números aleatorios en PHP usando array(), rand(), array_push() en un bucle for para crear conjuntos de datos."
date: 2013-05-05
updatedDate: 2026-02-08
tags: ["rand","array_push","for","count"]
slug: php/matematicos/generar-una-lista-de-numeros-aleatorios-en-php
type: doc
topic: php
id: 4fc87b23-ef69-400b-b9a8-1c195900cec3
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/lista-numeros-aleatorios.php
---

Mediante este sencillo ejemplo vamos a ver cómo generar una lista de números aleatorios en [PHP](http://www.manualweb.net/php/).


Para generar el número aleatorio nos vamos a basar en la función `rand`, tal y como la explicábamos en el artículo [Generar un número aleatorio en PHP](http://lineadecodigo.com/php/generar-un-numero-aleatorio-en-php/).


## Crear el array


Lo primero que haremos para crear la lista de números aleatorios es crear un array:


```php
$valores = array();
```


## Definir el bucle


Ahora, declararemos cuántos números queremos en nuestra lista de números aleatorios en [PHP](http://www.manualweb.net/php/) y con este número creamos un bucle for:


```php
$max_num = 5;

for ($x=0; $x<$max_num; $x++) {
  // Generar números aleatorios
}
```


## Generar y añadir números aleatorios


En cada una de las iteracciones del bucle vamos a crear el número aleatorio con `rand` y a insertarlo en la lista. Para insertar en la lista de números aleatorios en [PHP](http://www.manualweb.net/php/) nos apoyamos en el método `array_push` del array.


```php
for ($x=0; $x<$max_num; $x++) {
  $num_aleatorio = rand(1, 100);
  array_push($valores, $num_aleatorio);
}
```


## Mostrar la lista


Ya tendremos la lista de números aleatorios en [PHP](http://www.manualweb.net/php/) rellena. Ya solo nos quedará mostrarla por pantalla recorriendo el array:


```php
for ($x=0; $x<count($valores); $x++) {
  echo $valores[$x]."<br>";
}
```

