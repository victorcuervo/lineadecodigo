---
title: "Hola Mundo en PHP"
description: "El artículo explica cómo crear un programa \"Hola Mundo en PHP\" y preparar el entorno de desarrollo necesario."
date: 2009-09-20
updatedDate: 2026-01-08
tags: ["hola-mundo"]
slug: php/basicos/hola-mundo-en-php
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/hola-mundo.php
topic: php

---

Es, muy probablemente, el programa más universal que exista en todos los lenguajes de programación. Es la forma de escribir nuestro primer programa ejecutable en un lenguaje que estamos aprendiendo. Y en [PHP](http://www.manualweb.net/php/) no iba a ser diferente. [PHP](http://www.manualweb.net/php/), como lenguaje de servidor, añade funcionalidad dinámica a las páginas web. Es decir, lo que se generará es una página web, con su parte en [HTML](https://www.manualweb.net/html/) puro y con su parte en código [PHP](http://www.manualweb.net/php/).


## Herramientas para crear tu Hola Mundo en PHP


Para empezar necesitamos las siguientes cosas:

- Un editor de texto. El que más te guste. Opciones, muchas. Como ejemplo el bloc de notas de Windows, [Wim](http://www.vim.org/download.php#pc), [AM-Notebook](http://aignes.com/notebook.htm), [Win32Pad](http://www.gena01.com/win32pad), [EditPad Lite](http://www.editpadpro.com/editpadlite.html), [NotePad2](http://www.flos-freeware.ch/notepad2.html),...
- Un servidor web en el cual ejecutar el programa. En este caso muy recomendable utilizar [Apache](http://httpd.apache.org/).
- Los [módulos PHP](http://www.php.net/) para el servidor web. Estos módulos serán los que ejecuten el código de nuestros programas.

Si tienes poca experiencia en desarrollo web y quieres empezar de forma básica con [PHP](http://www.manualweb.net/php/) en poco tiempo, el tener listos los pasos anteriores puede llevarte un rato. Si te encuentras en esa situación es muy recomendable utilizar [XAMPP](http://www.apachefriends.org/es/xampp.html). [XAMPP](http://www.apachefriends.org/es/xampp.html) es un programa ejecutable que te deja instalado y configurado en tu ordenador: apache, php, perl y MySQL. Se instala de una forma muy sencilla y te permitirá probar tu [PHP](http://www.manualweb.net/php/) en cuestión de segundos.


## Empezar a codificar


Una vez que tengamos preparado nuestro entorno lo primero que tenemos que hacer es crear un fichero llamado holamundo.php. Este será un fichero de texto normal y corriente, lo único que su extensión será .php. Sobre el código [PHP](http://www.manualweb.net/php/) lo que tienes que saber es que irá entre los símbolos .


```php
<?php 
  ...
?>
```


## Escribir en consola mediante echo


La forma que tiene de escribir [PHP](http://www.manualweb.net/php/) un mensaje a consola es mediante la sentencia `echo` seguida de la cadena de texto entre comillas. Y, muy importante, acabado en punto y coma (;). Así que nuestro Hola Mundo en [PHP](http://www.manualweb.net/php/) nos quedaría algo parecido a:


```php
<?php 
 echo "Hola Mundo";
?>
```

