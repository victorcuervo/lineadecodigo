---
title: "Calcular el Siglo en PHP"
description: "Aprende a calcular el siglo en PHP usando strftime() con formato %C o manipulando cadenas con is_numeric, str_pad y substr para cualquier año."
date: 2013-09-02
updatedDate: 2026-02-07
tags: ["strftime","str_pad","is_numeric"]
slug: php/fechas/calcular-el-siglo-en-php
type: doc
topic: php
id: df22d5ac-799d-4b74-baa0-8f9f3960a93d
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/fechas/siglo.php
---

En este ejemplo vamos a ver como dado un año podemos calcular el siglo en [PHP](http://www.manualweb.net/php/). Para ello veremos que diferentes alternativas tenemos dentro de [PHP](http://www.manualweb.net/php/).


## Siglo en PHP mediante métodos de fechas


Si buscamos en la documentación de [PHP](http://www.manualweb.net/php/) sobre si existe un método que nos de esto en el lenguaje podemos llegar al método `strftime()`, el cual tiene un formato que nos devuelve el siglo. En concreto el formato %C.


Así que si escribimos el siguiente código obtendremos, dado un año, el siglo en [PHP](http://www.manualweb.net/php/):


```php
echo strftime("%C");
```


El "problema" que tiene `strftime()` es que maneja fechas atendiendo a los milisegundos de UNIX. Es por ello que en algunos sistemas operativos nos encontremos con la sorpresa de que no hay soporte para milisegundos negativos y por lo tanto no veamos fechas anteriores al 1970. Y por consiguiente no podríamos calcular el siglo en [PHP](http://www.manualweb.net/php/) de fechas anteriores a esta.


Parece que otras funciones de gestión de fechas como `date()` o el objeto DateTime no nos proporcionan nada para calcular el siglo en [PHP](http://www.manualweb.net/php/).


## Siglo en PHP manipulando la fecha como una cadena


Así que cambiamos de estrategia y buscamos la forma de obtener el siglo a partir de las dos primeras cifras del año. Ya que el siglo no deja de ser sumar uno a esas primeras dos cifras.


Para ello lo primero que haremos será comprobar que la cadena es numérica. Para ello utilizamos el método `is_numeric`:


```php
if (is_numeric($year))
```


En ese caso lo que tendremos que hacer es convertir el año a una cadena de cuatro caracteres, rellenando a ceros por la izquierda si fuese necesario. Para ello nos apoyaremos en la función `str_pad`, la cual nos permite establecer un tamaño mínimo y el relleno. En concreto haremos lo siguiente:


```php
$year = str_pad($year,4,"0",STR_PAD_LEFT);
```


Es decir, rellenar hasta 4 caracteres con ceros, por la izquierda (STR_PAD_LEFT).


Lo siguiente será coger los dos primeros dígitos y sumarle uno para poder calcular el siglo en [PHP](http://www.manualweb.net/php/). Este paso es sencillo y nos bastará el uso de la función substr.


```php
$siglo = substr($year,0,2)+1;
```


Es un método manual, pero efectivo. De esta forma hemos podido calcular el siglo en [PHP](http://www.manualweb.net/php/) manipulando cadenas.

