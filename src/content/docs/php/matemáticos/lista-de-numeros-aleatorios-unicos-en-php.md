---
title: "Lista de números aleatorios únicos en PHP"
description: "Aprende a generar números aleatorios únicos en PHP usando rand(), in_array() y array_push() en un bucle while para evitar duplicados en tus listas."
date: 2013-05-07
updatedDate: 2026-02-08
tags: ["mt_rand","in_array","rand","array_push"]
slug: php/matematicos/lista-de-numeros-aleatorios-unicos-en-php
type: doc
topic: php
id: cd8f4e9a-236e-40e1-b48d-adcedd15fd6b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/lista-numeros-aleatorios.php
---

Cuando estamos trabajando con números aleatorios generados es posible que se nos repita uno de los números, más cuanto más acotado sea el conjunto de los números aleatorios con los que trabajemos.


Ya vimos como [generar una lista de números aleatorios en PHP](http://lineadecodigo.com/php/generar-una-lista-de-numeros-aleatorios-en-php/), ahora vamos a generar una lista de números aleatorios únicos en [PHP](http://www.manualweb.net/php/).


## Crear el array


Lo primero, será crear el array que va a contener la lista:


```php
$valores = array();
```


## Definir la variable de control


En este caso no podemos utilizar un bucle de control finito como sería un for, ya que, a priori, no podemos saber cuantas veces necesitamos llamar a la función `rand`. Es por ello que definiremos una variable de control que nos ayude a controlar la lista de números aleatorios únicos.


```php
$x = 0;
```


Esta variable la iremos incrementando cada vez que encontremos un número aleatorio único.


## Crear el bucle while


Ahora montamos el bucle que controlará dicha variable. En el bucle $num representa el número máximo de números aleatorios únicos que queremos generar.


```php
while ($x < $num) {
  // Generar y validar números
}
```


## Generar números aleatorios


Lo siguiente será generar el número aleatorio con `rand`. Por ejemplo, de 1 a 100.


```php
$num_aleatorio = rand(1, 100);
```


## Validar y añadir números únicos


Lo siguiente será realizar el control de si ya existe o no dicho número aleatorio. Para comprobar esto miramos dentro del array con la función `in_array`. Si no se encuentra el nuevo número aleatorio en el array es cuando lo insertamos en el array con `array_push` e incrementamos nuestra variable de control.


El código quedaría de la siguiente forma:


```php
while ($x < $num) {
  $num_aleatorio = rand(1, $max);
  if (!in_array($num_aleatorio, $valores)) {
    array_push($valores, $num_aleatorio);
    $x++;
  }
}
```


Ya solo tendremos que darle utilidad a la lista de números aleatorios únicos en [PHP](http://www.manualweb.net/php/). ¿Para qué lo podrías utilizar?

