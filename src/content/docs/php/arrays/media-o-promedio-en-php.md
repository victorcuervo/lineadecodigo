---
title: "Media o promedio en PHP"
description: "Se explica cómo calcular la media o promedio en PHP usando arrays y funciones como array_sum y count."
lastUpdated: 2025-12-19
slug: php/media-o-promedio-en-php
author: victor_cuervo
---

Una de la cosa que nos habéis pedido en los comentarios es que expliquemos como se puede calcular la media o promedio en [PHP](http://www.manualweb.net/php/) de un conjunto de números. Así que vamos a explicar cómo podemos conseguirlo mediante este artículo. Lo primero será definir un array en el cual vamos a tener los números.


```php
$numeros = [1,2,3,4];
```


Estos números podemos haberlos conseguido de cualquier forma. Lo importante es que al final los hayas dejado dentro del array. Lo siguiente será saber cómo calcular la media o promedio de un conjunto de números. Podríamos decir que... 


> La media o promedio es igual a la suma de todos los números dividido por el total de números que tengamos.


Así que tenemos que buscar cómo conseguir esas dos cosas. Por un lado cómo sumar todos los números y por otro el contarlos. Para sumar todos los números tenemos dos alternativas. La primera es recorrer todo el array e ir sumando los números.


```php
$suma = 0;
for ($x=0;$x<count($numeros);$x++)
	$suma += $numeros[$x];
```


## Función array_sum


O bien apoyarnos en la función `array_sum()`. Mucho más sencillo este segundo caso, ya que simplemente tendremos que pasarle el array como parámetro.


```php
$suma = array_sum($numeros);
```


Por otro tenemos que contar cuantos números hay en el array. Para ello vamos a utilizar la función `count()`. A la cual le pasamos igualmente el array.



```php
$total_numeros = count($numeros);
```


Ya solo nos quedará el dividir ambos conceptos para obtener la media o promedio en PHP.


```php
$media = $suma/$total_numeros;
```


Aunque lo podríamos hacer mucho más reducido en una sola sentencia escribiendo:


```php
$media = array_sum($numeros)/count($numeros);
```


Espero que se haya entendido y sea de utilidad este ejemplo para poder calcular la media o promedio en PHP de un conjunto de números.

