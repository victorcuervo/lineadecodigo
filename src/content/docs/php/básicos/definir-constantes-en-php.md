---
title: "Definir constantes en PHP"
description: "Uso de la sentencia define para la creación de constantes en PHP."
date: 2013-06-22
updatedDate: 2026-01-08
tags: ["constantes","define","echo"]
slug: php/basicos/definir-constantes-en-php
author: xhrist14n
type: doc
id: 6f4e84ed-9ece-4921-9828-ae4b1eec821a
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/definir-constante.php
---

Definir constantes en [PHP](http://www.manualweb.net/php/) nos es util para poder resusar su contenido en diferentes instancias de ejecucion del código [PHP](http://www.manualweb.net/php/). Ya que sabemos que el contenido de la constante no va a cambiar a lo largo de la ejecución del programa. La definición de constantes en [PHP](http://www.manualweb.net/php/) se hace mediante el uso de la funcion define, su sintaxis es la siguiente:


```php
define(__NOMBRE_CONSTANTE_,_VALOR_DE_CONSTANTE_);
```


Los nombres de las constantes en [PHP](http://www.manualweb.net/php/) deben de empezar por letra o subrayado, seguido de letras, número o subrayados.


> Por convención, los nombres de las constantes en [PHP](http://www.manualweb.net/php/), se suelen definir en mayúsculas.


A continuación vemos como hemos definido unas cuantas constantes en [PHP](http://www.manualweb.net/php/) mediante la sentencia define:


```php

define("PATH","/directorio/subdirectorio/");    // definiendo ruta al directorio actual
define("PI",3.141592);  // definiendo una constante numerica
define("FLAG",TRUE);    //definiendo  un flag 
define("BR","<br>");      //definiendo  un salto de linea html
```


Para hacer uso de las constantes en [PHP](http://www.manualweb.net/php/) solo se usan en función de los nombres de las constantes de la siguiente forma:


```php
echo PATH;
echo PI*$radio;
echo FLAG;
```


Es decir, nos basta con poner el nombre de la constante en [PHP](http://www.manualweb.net/php/). Esperamos que os haya gustado y, sobre todo, que os sirva el artículo para definir las constantes en [PHP](http://www.manualweb.net/php/).

