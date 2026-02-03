---
title: "Operador Nave Espacial (Spaceship) en PHP"
description: "Artículo que nos enseña cómo comparar números y letras mediante el operador nave espacial (spaceship) en PHP y los casos de uso asociados."
date: 2025-01-14
updatedDate: 2026-01-07
tags: ["operadores"]
slug: php/operadores/operador-nave-espacial-spaceship-en-php
author: victor_cuervo
type: doc
id: ecbb5df0-09b3-4281-bb01-1ea1793db869
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/operador-nave-espacial.php
---

Dentro del mundo de la programación, uno de los operadores con el nombre más curioso puede ser el operador nave espacial (spaceship) en [PHP](https://www.manualweb.net/php/).


Quizás sea frikismo o simplemente una casualidad, pero este operador con forma de caza imperial o TIE Fighter de la Guerra de las Galaxias (Star Wars) está disponible dentro del [lenguaje de programación PHP](https://lineadecodigo.com/categoria/php/) desde la versión PHP 7.


Pero, ¿cómo es el operador? Pues su sintaxis es la siguiente:


```php
$operando1 <=> $operando2
```


¿Sigues sin pensar que tenemos una verdadera nave espacial en [PHP](https://www.manualweb.net/php/)? ¿Tú también ves un TIE Fighter? o ¿ves otra nave espacial? o ¿ni siquiera eso?


## ¿Qué es el operador nave espacial (spaceship) en PHP?


Pero, ahora algo más en serio, ¿qué es lo que hace el operador nave espacial (spaceship) en [PHP](https://www.manualweb.net/php/)? Pues este operador nos permite dirimir cuál de dos números, o cadenas de texto es mayor.


Si volvemos a echar un ojo a su sintaxis, vemos que compara el `$operando1` con el `$operando2`.


```php
$operando1 <=> $operando2
```


En el caso de que el `$operando1` sea menor que `$operando2` devuelve el valor de -1, el caso de que `$operando1` y `$operando2` sean iguales devuelve un 0 y si el `$operando1` es mayor que el `$operando2` devuelve un 1.


Es decir, que viene a resolver el problema para saber cuál de dos números es más grande que resolveríamos en un `if`.


```php
$operando1 = 10;
$operando2 = 1;

if ($operando1 > $operando2)
  return 1;
else if ($operando1 < $operando2)
  return -1;
else
  return 0;
```


## Usos del operador nave espacial (spaceship) en PHP


Pero, ¿cuál es la utilidad del operador nave espacial (spaceship) en PHP? Aparte, claro está, de poder comparar números.


Digamos que el operador es muy útil cuando estemos ordenando arrays de números o de cadenas mediante la función `usort()`


Si revisamos la sintaxis de la función `usort()` dentro de [PHP](https://www.manualweb.net/php/) vemos que ordena un array pasado como primer parámetro atendiendo a la función de ordenación pasada como segundo parámetro.


```php
usort(array &$array, callable $value_compare_func): bool

```


De esta forma, si queremos ordenar un array de números, lo codificaremos mediante la función `usort()` y el operador nave espacial (spaceship) en [PHP](https://www.manualweb.net/php/) de la siguiente forma:


```php
$numeros = [3,1,8,7,5,10,4,2,9,6];

print_r($numeros);

usort($numeros, function ($a, $b) {
    return $a <=> $b; // Ordenar de menor a mayor
});

print_r($numeros);

```


Lo mismo podemos hacer con palabras:


```php
$palabras = ["casa","avión","perro","cebra"];
print_r($palabras);
usort($palabras, function ($a, $b) {
    return $a <=> $b; // Ordenar de menor a mayor
});

print_r($palabras);
```


En este caso está comparando caracteres por su valor ASCII así que hay que tener cuidado con los temas de mayúsculas, minúsculas y acentos.


Por lo tanto, vemos que la utilidad del operador nave espacial (spaceship) en [PHP](https://www.manualweb.net/php/) es para cuando tenemos que hacer comparaciones de mayores de números o letras de una forma sencilla.


Espero que el artículo haya sido de utilidad, y que ahora empieces a utilizar el operador nave espacial (spaceship) en tus [desarrollos de código en PHP](https://lineadecodigo.com/categoria/php/) y que te acuerdes de los TIE Fighter cada vez que lo veas.


Puedes dejarnos en comentarios ¿qué otros usos se te ocurren para este operador? o ¿conoces un operador que tenga un nombre o utilidad extraña en [PHP](https://www.manualweb.net/php/) u otros [lenguajes de programación](https://lineadecodigo.com/)?

