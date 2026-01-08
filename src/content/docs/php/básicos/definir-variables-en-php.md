---
title: "Definir variables en PHP"
description: "Primeros pasos con PHP que nos ayudan a definir, de una forma sencilla, variables en PHP."
date: 2013-06-20
updatedDate: 2026-01-08
tags: ["variables","echo"]
slug: php/basicos/definir-variables-en-php
author: xhrist14n
type: doc
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/definir-variables.php
topic: php

---

Definir variables en [PHP](http://www.manualweb.net/php/) nos es útil en todo el código que hagamos, ya que las variables son la principal herramienta para administrar información y datos de nuestra aplicación web a realizar. Para definir variables en [PHP](http://www.manualweb.net/php/) no es necesario asignarlas un tipo, así que solo tendremos que hacer la definición del nombre de la variable. Los nombres de las variables en [PHP](http://www.manualweb.net/php/) empiezan por el signo $ y luego el nombre de variable. Los nombres de las variables en [PHP](http://www.manualweb.net/php/) son sensibles a mayúsculas y deben de empezar por una letra o subrayado, el resto de la variable puede ser letra, número o subrayado. De esta forma podemos tener las siguientes variables:


```php
$mivariable;
$_mivariable;
$mivariable1;
```


Así no serían correctas las siguientes variables en [PHP](http://www.manualweb.net/php/):


```php
$1variable;
$?mivariable;
```


Para asignar valor a una variable en [PHP](http://www.manualweb.net/php/) utilizaremos un signo de igual seguido del valor a asignar a la variable y punto y coma al final. Veamos algunos ejemplos:


```php

$variable1="hola mundo"; //cadenas largas
$variable2='hola mundo'; //cadenas cortas
$variable3="6646564"; //numero en cadenas
$variable4=34645; //numero entero simple
$variable5=57356.5645; //numero decimal simple
$variable6=null; //nulo
```


El tipo de la variable depende del valor que le asignemos. Así, si le asignamos una cadena, la variable será del tipo cadena y si le asignamos un número será una variable numérica. Si queremos mostrar el valor de una variable en [PHP](http://www.manualweb.net/php/) solo tenemos que utilizar la sentencia echo seguida del nombre de la variable.


```php
echo $variable1;
```


Además es bueno saber que podemos concatenar variables o contenido utilizando el punto como separador.


```php
echo "La suma de ".$num1."+".$num2." es de ".$num1+$num2;
```


Espero que con este sencillo artículo hayas podido ver cómo definir y manejar las variables en [PHP](http://www.manualweb.net/php/).

