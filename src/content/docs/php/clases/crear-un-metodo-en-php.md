---
title: "Crear un método en PHP"
description: "Artículo que nos cuenta como hay que crear un método en PHP para reutilizar la funcionalidad del mismo en el programa."
lastUpdated: 2025-12-19
slug: php/crear-un-metodo-en-php
author: xhrist14n
---

Los métodos en [PHP](http://www.manualweb.net/php/) son bastante útiles para poder encapsular una funcionalidad especifica en un solo lugar y poder reutilizar ese código muchas veces. Es por ello que vamos a ver como podemos crear un método en [PHP](http://www.manualweb.net/php/). 


## Definir el método en PHP


Para crear un método en [PHP](http://www.manualweb.net/php/) hacemos uso de la palabra reservada **function** seguido del nombre del método, los paréntesis con o sin parámetros del método entre los paréntesis. La sintaxis de un método en [PHP](http://www.manualweb.net/php/) sería la siguiente:


```php
function nombreMetodo(parámetros) {
  // Código del Método
}
```


A continuación procedemos a crear un método en [PHP](http://www.manualweb.net/php/) que nos sirva para sumar dos números enteros. Primero ponemos la estructura básica del método:


```php
//Metodo para sumar dos enteros
function sumar($i,$j){
        ....
}
```


Una vez definida la estructura básica del método en [PHP](http://www.manualweb.net/php/) vamos a proceder a escribir la funcionalidad para nuestro método. En este caso es sencillo, ya que sumaremos los dos números definidos como parámetros:


```php
$i=intval(trim($i));  //obtener parte entera de $i
$j=intval(trim($j));  //obtener parte entera de $j
return $i+$j;
```


Vemos que el resultado del método se devuelve mediante el operador return. El método [PHP](http://www.manualweb.net/php/) para sumar dos números quedaría de la siguiente forma:


```php
function sumar($i,$j){
  $i=intval(trim($i));
  $j=intval(trim($j));
  return $i+$j;
}
```


### Ejecutar un método en PHP


Una vez que hemos definido nuestro método en [PHP](http://www.manualweb.net/php/) pasamos a ejecutarlo. Para ejecutar un método en PHP pondremos el nombre del método seguido de los valores que asignemos a los parámetros que espera el método. En nuestro ejemplo del método sumar podríamos ejecutar el método de las siguientes formas:


```php
// ejecucion del script php
echo metodoSumar(200,797)."<br>";
echo metodoSumar('123','97')."<br>";
echo metodoSumar('123.78','97.90')."<br>";
echo metodoSumar('b','a')."<br>";
```


Espero que les haya servido esta sencilla explicación de como crear un método en [PHP](http://www.manualweb.net/php/).

