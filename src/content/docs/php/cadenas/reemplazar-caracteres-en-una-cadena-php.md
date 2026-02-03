---
title: "Reemplazar caracteres en una cadena PHP"
description: "Como reemplazar caracteres en una cadena PHP de una forma iterativa para convertir un numero con mascara a un número real tras sustituir sus caracteres."
date: 2020-03-22
updatedDate: 2026-01-08
tags: ["bucles","while","cadena","rand","preg_replace"]
slug: php/cadenas/reemplazar-caracteres-en-una-cadena-php
author: victor_cuervo
type: doc
topic: php
id: ec20c39e-84b6-4aa7-af99-c8a6a9ed4989
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/cadenas/reemplazar-cadenas.php
---

Una de las preguntas que nos habéis hecho es cómo podéis reemplazar caracteres en una cadena [PHP](http://www.manualweb.net/php). Así que vamos a ponernos manos a la obra. La idea es que empezamos con una cadena en la que hay números y caracteres en 'x'. La idea es poder reemplazar los caracteres 'x' de la cadena por número y así poder tener un número completo. Es decir, partiríamos de algo así como '1245xxxx' y obtendremos algo como '12458937'. Lo primero será definir la cadena base:


```php
$lista = '12345xxxxx';
echo 'Cadena Inicial: '.$lista."\n";
```


Una vez tengamos la cadena, lo que vamos a hacer es validar si hay caracteres 'x' dentro de ella. Para esto nos apoyamos en la función `strpos()` la cual recibe como parámetro la cadena y el carácter a buscar.


```php
strpos($lista, 'x');
```


Si tiene una 'x', lo que haremos será sustituir la 'x' por un número aleatorio. Para [generar un número aleatorio en PHP](http://lineadecodigo.com/php/generar-un-numero-aleatorio-en-php/) lo que hacemos en basarnos en la función `rand`.


```php
rand(0,9)
```


La función que nos ayudará para poder realizar la sustitución del carácter 'x' por el número aleatorio será `preg_replace`. Esta función recibe una expresión regular con el elemento a buscar, el valor por el cual vamos a sustituirlo (en nuestro caso el número aleatorio), la cadena sobre la que queremos realizar la sustitución y cuantas veces queremos realizar la sustitución. 


```php
$lista = preg_replace('/x/', rand(0,9), $lista, 1);
```


Si no indicamos que solo sustituya una vez lo que hará es sustituir todas las 'x' por el mismo número aleatorio. Pero como nosotros queremos poner varios números aleatorios indicaremos que solo sustituya la primera 'x' que encuentre. Es por ello que tendremos que crear un bucle que repita la misma operación siempre y cuando no aparezcan caracteres 'x' dentro de la cadena. 


```php
while (strpos($lista, 'x')) {
	$lista = preg_replace('/x/', rand(0,9), $lista, 1);
}
```


De esta manera ya habremos conseguido reemplazar caracteres en una cadena PHP. ¿Te ha parecido de utilidad? Danos tu opinión en los comentarios.

