---
title: "Generar un número aleatorio en PHP"
description: "Aprende a generar números aleatorios en PHP usando las funciones rand() y mt_rand(), eligiendo entre valores mínimo y máximo personalizados."
date: 2013-01-09
updatedDate: 2026-02-08
tags: ["rand","mt_rand"]
slug: php/matematicos/generar-un-numero-aleatorio-en-php
type: doc
topic: php
id: 61f7a2e0-3d59-4427-9145-7c81043bdc17
author: Dave Rndn
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/numeroaleatorio.php
---

En este post veremos cómo generar un número aleatorio en [PHP](http://www.manualweb.net/php) de manera sencilla haciendo uso de dos métodos diferentes: `rand` y `mt_rand`. Así aprenderemos de una forma más sencilla a [manejar los números en PHP](http://lineadecodigo.com/tag/php-numeros/).


## La función rand()


[PHP](http://www.manualweb.net/php/) nos facilita la obtención de números aleatorios con la función `rand()`, que recibe un par de valores, el mínimo y el máximo de los números aleatorios a generar.


En este demo vamos a obtener un número aleatorio entre 1 y 30, incluyendo estos dos valores entre los posibles. Si no se indica nada a `rand()`, el valor mínimo será cero. El valor máximo depende de la plataforma donde se esté ejecutando [PHP](http://www.manualweb.net/php/), por ejemplo en Windows el valor máximo sería 32786.


Si queremos asegurarnos que este valor máximo sea mayor, entonces conviene definir los valores máximo y mínimo al llamar a la función.


Ahora veamos el código:


```php
<?php
  $d = rand(1, 30);
  echo $d;
?>
```


Con este sencillo par de líneas nosotros podemos obtener un número aleatorio.


## La función mt_rand()


También podemos obtener un numero aleatorio con la función `mt_rand()` la cual es mucho mejor que `rand()` ya que es mucho más rápida y con un mejor algoritmo de obtención de números aleatorios.


```php
<?php
  $d = mt_rand(1, 30);
  echo $d;
?>
```


Con estas funciones nosotros podemos generar un número aleatorio en [PHP](http://www.manualweb.net/php) de manera fácil y rápida.

