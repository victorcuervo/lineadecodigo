---
title: "Sacar un naipe de la baraja con PHP"
description: "Se explica cómo sacar un naipe de la baraja utilizando PHP, generando una carta aleatoria de forma sencilla."
date: 2010-10-24
updatedDate: 2026-01-07
tags: ["array","naipe","array_rand"]
slug: php/arrays/sacar-un-naipe-de-la-baraja-con-php
author: Jose Sevilla
type: doc
id: 18e242b4-09e8-4ebe-a131-7cc651b8d08b
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/sacarnaipe.php
---

La idea es poder sacar una carta aleatoria de la baraja (una baraja inglesa o francesa). La baraja se compone de cuatro palos (Picas ♠, Corazones ♥, Diamantes ♦ y Tréboles ♣) y de trece cartas por cada palo, comprendidas desde el as al diez y tres figuras. Para llevar acabo la operación y sacar un naipe aleatorio, vamos a almacenar todas las posibilidades de cartas en variables.


```php
$palos = array('Picas','Corazones','Diamantes','Tréboles');
$cartas = array('As','Dos','Tres','Cuatro','Cinco','Seis','Siete','Ocho','Nueve','Diez','Jota','Reina','Rey');
```


Hemos creado dos variables, por una parte una variable con un array que contiene los cuatro palos de la baraja y la otra variable con un array con las diez numeraciones y tres figuras de las cartas, consiguiendo así las 52 cartas de las barajas. Gracias al array nos permite almacenar varios entradas en una misma variable.


```php
$palo = array_rand($palos, 1);
$carta = array_rand($cartas, 1);
```


Usamos la función array_rand() que nos ofrece PHP, la cual nos devuelve la clave al azar de una entrada del array. Ahora únicamente nos queda mostrar los valores aleatorios en una frase.


```php
print 'La carta que salió de la baraja fue: ' . $cartas[$carta] . ' de ' . $palos[$palo] ;
```

