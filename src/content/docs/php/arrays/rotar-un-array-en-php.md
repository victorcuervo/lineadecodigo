---
title: "Rotar un array en PHP"
description: "Ejemplo que nos muestra dos formas de rotar un array en PHP. Moviendo elementos y mediante funciones de PHP."
date: 2014-10-20
updatedDate: 2026-01-08
tags: ["array","for","array_shift","array_push"]
slug: php/arrays/rotar-un-array-en-php
type: doc
topic: php
id: f62c4c88-41b7-47de-9ac4-c5807c7a87b6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/arrays/rotar-array.php
---

Rotar un array en [PHP](http://www.manualweb.net/php/) consiste en desplazar el primer elemento de un array a la última posición de dicho array y desplazar todos el resto una posición adelante.


## Definir un array


Si partimos de un array con la siguiente información:


```php
{"amaya","julio","javier","nacho","sonsoles"}
```


Rotar un array en [PHP](http://www.manualweb.net/php/) conseguiría el siguiente efecto:


```php
{"julio","javier","nacho","sonsoles","amaya"}
```


Para rotar un array en [PHP](http://www.manualweb.net/php/) vamos a ver dos opciones. Por un lado como implementar la lógica explicada anteriormente moviendo los elementos del array y la segunda utilizando funciones ya existentes en PHP. 


## Rotar un array en PHP moviendo elementos


En este caso vamos a implementar la rotación moviendo directamente los elementos del array. Lo primero que haremos será guardarnos el primer elemento


```php
$primero = $numeros[0];
```


Ya que será este primer elemento el que posicionemos en la última posición. Lo siguiente será ir moviendo los elementos desde su posición, a la posición previa. Esto lo ejecutaremos desde el segundo elemento.


```php
 for($x=0; $x<count($lista)-1; $x++)
    $lista[$x] = $lista[$x+1];
```



Lo último que ejecutará este algoritmo será el poner en la última posición, la cual es la que tiene ahora mismo la variable de control $x, el que era el primer elemento.


```php
$lista[$x-1]= $primero;
```



De esta forma ya habremos conseguido rotar un array en PHP moviendo de forma manual los elementos.


## Rotar un array en PHP con funciones


La lógica que hemos explicado de rotación la podemos ejecutar en [PHP](http://www.manualweb.net/php/) mediante un par de funciones. En concreto con aray_push y array_shift.

En el caso de array_shift lo que conseguimos es obtener el primer elemento de un array, extrayéndolo de dicho array.


```php
array_shift($lista);
```


Y con array_push lo que hacemos es poner un elemento al fina del array.


```php
array_push($lista,$elemento);
```


En el caso de la función aray_push se le indica como primer parámetro el array sobre el que se quiere añadir el elemento.

El código para rotar un array en PHP con funciones sería el siguiente:


```php
$elemento = array_shift($lista);
array_push($lista,$elemento);
```


O lo que sería lo mismo en una sola línea, y mucho más sencillo.


```php
array_push($lista,array_shift($lista));
```


Ya hemos visto dos formas sencillas de rotar un array en PHP.

