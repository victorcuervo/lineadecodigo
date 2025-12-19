---
title: "Poner comentarios en PHP"
description: "Podemos utilizar comentarios en varias líneas entre /* y */ o comentarios que solo ocupen una línea encabezados por // para poder poner comentarios en PHP."
lastUpdated: 2025-12-19
slug: php/poner-comentarios-en-php
author: xhrist14n
---

Poner comentarios en [PHP](http://www.manualweb.net/php/) como en todo lenguaje de programación es bastante útil para escribir detalles de implementación de nuestro de código ademas de otras referencias necesarias para entender el código escrito por nosotros. La forma más natural de escritura de comentarios en [PHP](http://www.manualweb.net/php) tiene dos formas básicas, comentarios largos en los que podemos introducir un bloque con varias frases explicativas o comentarios cortos dónde se explique la información en una sencilla frase. Para pode explicar la generación de comentarios vamos ha realizar un programa que [manipule números en PHP](http://lineadecodigo.com/tag/php-numeros/) e iremos introduciendo en el diferentes comentarios que hagan explicativo dicho código. Para escribir comentarios largos se hace uso de /* para iniciar la escritura y */ para finalizar la escritura del comentario de la siguiente manera:


```php
/*
  Este es un comentario largo
  Aquí describimos que se hace una resta de solo valores enteros contenidos en las variables
  que se ha declarado a continuación
*/

  $i="46875";
  $j="5743";
```


Para escribir comentarios cortos se hace uso de // y a continuación se escribe el comentario en [PHP](http://www.manualweb.net/php/) todo en una sola linea hasta el salto de linea de la siguiente manera:


```php
// Aqui se pone un comentario de una sola linea
echo "Resta ... ";
echo $i-$j;

// Esto es un comentario detrás de una sentencia
echo "<br>";
```


Se puede compaginar los dos tipos de comentarios dentro de un mismo código, es decir que no son excluyentes. Lo más normal es encontrar los comentarios largos al principio del programa o de una función o de una clase, mientras que los comentarios cortos los escribimos delante de sentencias de código que queramos explicar. Poner comentarios en [PHP](http://www.manualweb.net/php/) tienen como finalidad básica la documentación de nuestro código es una buena practica de programación detallar bien el uso de nuestro código.

